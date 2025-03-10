/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview The abstract class for a component with custom behaviour when a
 * block or bubble is dragged over or dropped on top of it.
 */



/**
 * The abstract class for a component with custom behaviour when a
 * block or bubble is dragged over or dropped on top of it.
 * @class
 */

import {IDragTarget} from 'blockly/core/interfaces/i_drag_target';
import {IDraggable} from 'blockly/core/interfaces/i_draggable';
import {Rect} from 'blockly/core/utils/rect';


/**
 * Abstract class for a component with custom behaviour when a block or bubble
 * is dragged over or dropped on top of it.
 * @implements {IDragTarget}
 * @constructor
 * @alias Blockly.DragTarget
 */
const DragTarget = function() {};

/**
 * Returns the bounding rectangle of the drag target area in pixel units
 * relative to the Blockly injection div.
 * @return {?Rect} The component's bounding box. Null if drag
 *   target area should be ignored.
 */
DragTarget.prototype.getClientRect;

/**
 * Handles when a cursor with a block or bubble enters this drag target.
 * @param {!IDraggable} _dragElement The block or bubble currently being
 *   dragged.
 */
DragTarget.prototype.onDragEnter = function(_dragElement) {
  // no-op
};

/**
 * Handles when a cursor with a block or bubble is dragged over this drag
 * target.
 * @param {!IDraggable} _dragElement The block or bubble currently being
 *   dragged.
 */
DragTarget.prototype.onDragOver = function(_dragElement) {
  // no-op
};

/**
 * Handles when a cursor with a block or bubble exits this drag target.
 * @param {!IDraggable} _dragElement The block or bubble currently being
 *   dragged.
 */
DragTarget.prototype.onDragExit = function(_dragElement) {
  // no-op
};

/**
 * Handles when a block or bubble is dropped on this component.
 * Should not handle delete here.
 * @param {!IDraggable} _dragElement The block or bubble currently being
 *   dragged.
 */
DragTarget.prototype.onDrop = function(_dragElement) {
  // no-op
};

/**
 * Returns whether the provided block or bubble should not be moved after being
 * dropped on this component. If true, the element will return to where it was
 * when the drag started.
 * @param {!IDraggable} _dragElement The block or bubble currently being
 *   dragged.
 * @return {boolean} Whether the block or bubble provided should be returned to
 *     drag start.
 */
DragTarget.prototype.shouldPreventMove = function(_dragElement) {
  return false;
};

exports.DragTarget = DragTarget;
