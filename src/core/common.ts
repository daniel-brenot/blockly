/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Common functions used both internally and externally, but which
 * must not be at the top level to avoid circular dependencies.
 * @namespace blockly/core/common
 */

import {Blocks} from 'blockly/core/blocks';
import {Connection} from 'blockly/core/connection';
import {ICopyable} from 'blockly/core/interfaces/i_copyable';
import {Block} from 'blockly/core/block';
import {WorkspaceSvg} from 'blockly/core/workspace_svg';
import {Workspace} from 'blockly/core/workspace';


/**
 * The main workspace most recently used.
 * Set by Blockly.WorkspaceSvg.prototype.markFocused
 * @type {!Workspace}
 */
let mainWorkspace;

/**
 * Returns the last used top level workspace (based on focus).  Try not to use
 * this function, particularly if there are multiple Blockly instances on a
 * page.
 * @return {!Workspace} The main workspace.
 * @alias blockly/core/common.getMainWorkspace
 */
export function getMainWorkspace() {
  return mainWorkspace;
}

/**
 * Sets last used main workspace.
 * @param {!Workspace} workspace The most recently used top level workspace.
 * @alias blockly/core/common.setMainWorkspace
 */
export function setMainWorkspace(workspace) {
  mainWorkspace = workspace;
}

/**
 * Currently selected block.
 * @type {?ICopyable}
 */
let selected = null;

/**
 * Returns the currently selected block.
 * @return {?ICopyable} The currently selected block.
 * @alias blockly/core/common.getSelected
 */
export function getSelected() {
  return selected;
}

/**
 * Sets the currently selected block. This function does not visually mark the
 * block as selected or fire the required events. If you wish to
 * programmatically select a block, use `BlockSvg#select`.
 * @param {?ICopyable} newSelection The newly selected block.
 * @alias blockly/core/common.setSelected
 * @package
 */
export function setSelected(newSelection) {
  selected = newSelection;
}

/**
 * Container element in which to render the WidgetDiv, DropDownDiv and Tooltip.
 * @type {?Element}
 */
let parentContainer;

/**
 * Get the container element in which to render the WidgetDiv, DropDownDiv and\
 * Tooltip.
 * @return {?Element} The parent container.
 * @alias blockly/core/common.getParentContainer
 */
export function getParentContainer() {
  return parentContainer;
}

/**
 * Set the parent container.  This is the container element that the WidgetDiv,
 * DropDownDiv, and Tooltip are rendered into the first time `Blockly.inject`
 * is called.
 * This method is a NOP if called after the first ``Blockly.inject``.
 * @param {!Element} newParent The container element.
 * @alias blockly/core/common.setParentContainer
 */
export function setParentContainer(newParent) {
  parentContainer = newParent;
}

/**
 * Size the SVG image to completely fill its container. Call this when the view
 * actually changes sizes (e.g. on a window resize/device orientation change).
 * See workspace.resizeContents to resize the workspace when the contents
 * change (e.g. when a block is added or removed).
 * Record the height/width of the SVG image.
 * @param {!WorkspaceSvg} workspace Any workspace in the SVG.
 * @alias blockly/core/common.svgResize
 */
export function svgResize(workspace) {
  let mainWorkspace = workspace;
  while (mainWorkspace.options.parentWorkspace) {
    mainWorkspace = mainWorkspace.options.parentWorkspace;
  }
  const svg = mainWorkspace.getParentSvg();
  const cachedSize = mainWorkspace.getCachedParentSvgSize();
  const div = svg.parentNode;
  if (!div) {
    // Workspace deleted, or something.
    return;
  }
  const width = div.offsetWidth;
  const height = div.offsetHeight;
  if (cachedSize.width !== width) {
    svg.setAttribute('width', width + 'px');
    mainWorkspace.setCachedParentSvgSize(width, null);
  }
  if (cachedSize.height !== height) {
    svg.setAttribute('height', height + 'px');
    mainWorkspace.setCachedParentSvgSize(null, height);
  }
  mainWorkspace.resize();
}

/**
 * All of the connections on blocks that are currently being dragged.
 * @type {!Array<!Connection>}
 */
exports.draggingConnections = [];

/**
 * Get a map of all the block's descendants mapping their type to the number of
 *    children with that type.
 * @param {!Block} block The block to map.
 * @param {boolean=} opt_stripFollowing Optionally ignore all following
 *    statements (blocks that are not inside a value or statement input
 *    of the block).
 * @return {!Object} Map of types to type counts for descendants of the bock.
 * @alias blockly/core/common.getBlockTypeCounts
 */
export function getBlockTypeCounts(block, opt_stripFollowing) {
  const typeCountsMap = Object.create(null);
  const descendants = block.getDescendants(true);
  if (opt_stripFollowing) {
    const nextBlock = block.getNextBlock();
    if (nextBlock) {
      const index = descendants.indexOf(nextBlock);
      descendants.splice(index, descendants.length - index);
    }
  }
  for (let i = 0, checkBlock; (checkBlock = descendants[i]); i++) {
    if (typeCountsMap[checkBlock.type]) {
      typeCountsMap[checkBlock.type]++;
    } else {
      typeCountsMap[checkBlock.type] = 1;
    }
  }
  return typeCountsMap;
}

/**
 * Helper function for defining a block from JSON.  The resulting function has
 * the correct value of jsonDef at the point in code where jsonInit is called.
 * @param {!Object} jsonDef The JSON definition of a block.
 * @return {function()} A function that calls jsonInit with the correct value
 *     of jsonDef.
 */
function jsonInitFactory(jsonDef) {
  return /** @this {Block} */ function() {
    this.jsonInit(jsonDef);
  };
}

/**
 * Define blocks from an array of JSON block definitions, as might be generated
 * by the Blockly Developer Tools.
 * @param {!Array<!Object>} jsonArray An array of JSON block definitions.
 * @alias blockly/core/common.defineBlocksWithJsonArray
 */
export function defineBlocksWithJsonArray(jsonArray) {
  for (let i = 0; i < jsonArray.length; i++) {
    const elem = jsonArray[i];
    if (!elem) {
      console.warn(
          'Block definition #' + i + ' in JSON array is ' + elem + '. ' +
          'Skipping.');
    } else {
      const typename = elem.type;
      if (!typename) {
        console.warn(
            'Block definition #' + i +
            ' in JSON array is missing a type attribute. Skipping.');
      } else {
        if (Blocks[typename]) {
          console.warn(
              'Block definition #' + i + ' in JSON array' +
              ' overwrites prior definition of "' + typename + '".');
        }
        Blocks[typename] = {init: jsonInitFactory(elem)};
      }
    }
  }
}
