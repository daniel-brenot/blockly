/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Utilities for bumping objects back into worksapce bounds.
 * @namespace Blockly.bumpObjects
 */
goog.module('Blockly.bumpObjects');

import Abstract from 'Blockly.Events.Abstract';
import eventUtils from 'Blockly.Events.utils';
import mathUtils from 'Blockly.utils.math';
import {BlockSvg} from 'Blockly.BlockSvg';
import {IBoundedElement} from 'Blockly.IBoundedElement';
import {MetricsManager} from 'Blockly.MetricsManager';
import {ViewportChange} from 'Blockly.Events.ViewportChange';
import {WorkspaceCommentSvg} from 'Blockly.WorkspaceCommentSvg';
import {WorkspaceSvg} from 'Blockly.WorkspaceSvg';


/**
 * Bumps the given object that has passed out of bounds.
 * @param {!WorkspaceSvg} workspace The workspace containing the object.
 * @param {!MetricsManager.ContainerRegion} scrollMetrics Scroll metrics
 *    in workspace coordinates.
 * @param {!IBoundedElement} object The object to bump.
 * @return {boolean} True if block was bumped.
 * @alias Blockly.bumpObjects.bumpIntoBounds
 */
export function bumpObjectIntoBounds(workspace, scrollMetrics, object) {
  // Compute new top/left position for object.
  const objectMetrics = object.getBoundingRectangle();
  const height = objectMetrics.bottom - objectMetrics.top;
  const width = objectMetrics.right - objectMetrics.left;

  const topClamp = scrollMetrics.top;
  const scrollMetricsBottom = scrollMetrics.top + scrollMetrics.height;
  const bottomClamp = scrollMetricsBottom - height;
  // If the object is taller than the workspace we want to
  // top-align the block
  const newYPosition =
      mathUtils.clamp(topClamp, objectMetrics.top, bottomClamp);
  const deltaY = newYPosition - objectMetrics.top;

  // Note: Even in RTL mode the "anchor" of the object is the
  // top-left corner of the object.
  let leftClamp = scrollMetrics.left;
  const scrollMetricsRight = scrollMetrics.left + scrollMetrics.width;
  let rightClamp = scrollMetricsRight - width;
  if (workspace.RTL) {
    // If the object is wider than the workspace and we're in RTL
    // mode we want to right-align the block, which means setting
    // the left clamp to match.
    leftClamp = Math.min(rightClamp, leftClamp);
  } else {
    // If the object is wider than the workspace and we're in LTR
    // mode we want to left-align the block, which means setting
    // the right clamp to match.
    rightClamp = Math.max(leftClamp, rightClamp);
  }
  const newXPosition =
      mathUtils.clamp(leftClamp, objectMetrics.left, rightClamp);
  const deltaX = newXPosition - objectMetrics.left;

  if (deltaX || deltaY) {
    object.moveBy(deltaX, deltaY);
    return true;
  }
  return false;
}

/**
 * Creates a handler for bumping objects when they cross fixed bounds.
 * @param {!WorkspaceSvg} workspace The workspace to handle.
 * @return {function(Abstract)} The event handler.
 * @alias Blockly.bumpObjects.bumpIntoBoundsHandler
 */
export function bumpIntoBoundsHandler(workspace) {
  return function(e) {
    const metricsManager = workspace.getMetricsManager();
    if (!metricsManager.hasFixedEdges() || workspace.isDragging()) {
      return;
    }

    if (eventUtils.BUMP_EVENTS.indexOf(e.type) !== -1) {
      const scrollMetricsInWsCoords = metricsManager.getScrollMetrics(true);

      // Triggered by move/create event
      const object = extractObjectFromEvent(workspace, e);
      if (!object) {
        return;
      }
      // Handle undo.
      const oldGroup = eventUtils.getGroup();
      eventUtils.setGroup(e.group);

      const wasBumped = bumpObjectIntoBounds(
          workspace, scrollMetricsInWsCoords,
          /** @type {!IBoundedElement} */ (object));

      if (wasBumped && !e.group) {
        console.warn(
            'Moved object in bounds but there was no' +
            ' event group. This may break undo.');
      }
      if (oldGroup !== null) {
        eventUtils.setGroup(oldGroup);
      }
    } else if (e.type === eventUtils.VIEWPORT_CHANGE) {
      const viewportEvent = /** @type {!ViewportChange} */ (e);
      if (viewportEvent.scale > viewportEvent.oldScale) {
        bumpTopObjectsIntoBounds(workspace);
      }
    }
  };
}

/**
 * Extracts the object from the given event.
 * @param {!WorkspaceSvg} workspace The workspace the event originated
 *    from.
 * @param {!eventUtils.BumpEvent} e An event containing an object.
 * @return {?BlockSvg|?WorkspaceCommentSvg} The extracted
 *    object.
 */
function extractObjectFromEvent(workspace, e) {
  let object = null;
  switch (e.type) {
    case eventUtils.BLOCK_CREATE:
    case eventUtils.BLOCK_MOVE:
      object = workspace.getBlockById(e.blockId);
      if (object) {
        object = object.getRootBlock();
      }
      break;
    case eventUtils.COMMENT_CREATE:
    case eventUtils.COMMENT_MOVE:
      object = (
          /** @type {?WorkspaceCommentSvg} */
          (workspace.getCommentById(e.commentId)));
      break;
  }
  return object;
}

/**
 * Bumps the top objects in the given workspace into bounds.
 * @param {!WorkspaceSvg} workspace The workspace.
 * @alias Blockly.bumpObjects.bumpTopObjectsIntoBounds
 */
export function bumpTopObjectsIntoBounds(workspace) {
  const metricsManager = workspace.getMetricsManager();
  if (!metricsManager.hasFixedEdges() || workspace.isDragging()) {
    return;
  }

  const scrollMetricsInWsCoords = metricsManager.getScrollMetrics(true);
  const topBlocks = workspace.getTopBoundedElements();
  for (let i = 0, block; (block = topBlocks[i]); i++) {
    bumpObjectIntoBounds(workspace, scrollMetricsInWsCoords, block);
  }
}
