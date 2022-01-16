/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Object representing a bottom row on a rendered block.
 * of its subcomponents.
 */

/**
 * Object representing a bottom row on a rendered block.
 * of its subcomponents.
 * @class
 */

import object from 'blockly/core/utils/object';
import {BlockSvg} from 'blockly/core/block_svg';
import {ConstantProvider} from 'blockly/core/renderers/common/constants';
import {NextConnection} from 'blockly/core/renderers/measurables/next_connection';
import {Row} from 'blockly/core/renderers/measurables/row';
import {Types} from 'blockly/core/renderers/measurables/types';


/**
 * An object containing information about what elements are in the bottom row of
 * a block as well as spacing information for the bottom row.
 * Elements in a bottom row can consist of corners, spacers and next
 * connections.
 * @param {!ConstantProvider} constants The rendering
 *   constants provider.
 * @package
 * @constructor
 * @extends {Row}
 * @alias Blockly.blockRendering.BottomRow
 */
const BottomRow = function(constants) {
  BottomRow.superClass_.constructor.call(this, constants);
  this.type |= Types.BOTTOM_ROW;

  /**
   * Whether this row has a next connection.
   * @package
   * @type {boolean}
   */
  this.hasNextConnection = false;

  /**
   * The next connection on the row, if any.
   * @package
   * @type {NextConnection}
   */
  this.connection = null;

  /**
   * The amount that the bottom of the block extends below the horizontal edge,
   * e.g. because of a next connection.  Must be non-negative (see #2820).
   * @package
   * @type {number}
   */
  this.descenderHeight = 0;

  /**
   * The Y position of the bottom edge of the block, relative to the origin
   * of the block rendering.
   * @type {number}
   */
  this.baseline = 0;
};
object.inherits(BottomRow, Row);

/**
 * Returns whether or not the bottom row has a left square corner.
 * @param {!BlockSvg} block The block whose bottom row this represents.
 * @return {boolean} Whether or not the bottom row has a left square corner.
 */
BottomRow.prototype.hasLeftSquareCorner = function(block) {
  return !!block.outputConnection || !!block.getNextBlock();
};

/**
 * Returns whether or not the bottom row has a right square corner.
 * @param {!BlockSvg} _block The block whose bottom row this represents.
 * @return {boolean} Whether or not the bottom row has a right square corner.
 */
BottomRow.prototype.hasRightSquareCorner = function(_block) {
  return true;
};

/**
 * @override
 */
BottomRow.prototype.measure = function() {
  let height = 0;
  let width = 0;
  let descenderHeight = 0;
  for (let i = 0; i < this.elements.length; i++) {
    const elem = this.elements[i];
    width += elem.width;
    if (!(Types.isSpacer(elem))) {
      // Note: this assumes that next connections have *only* descenderHeight,
      // with no height above the baseline.
      if (Types.isNextConnection(elem)) {
        descenderHeight = Math.max(descenderHeight, elem.height);
      } else {
        height = Math.max(height, elem.height);
      }
    }
  }
  this.width = Math.max(this.minWidth, width);
  this.height = Math.max(this.minHeight, height) + descenderHeight;
  this.descenderHeight = descenderHeight;
  this.widthWithConnectedBlocks = this.width;
};

/**
 * @override
 */
BottomRow.prototype.startsWithElemSpacer = function() {
  return false;
};

/**
 * @override
 */
BottomRow.prototype.endsWithElemSpacer = function() {
  return false;
};

exports.BottomRow = BottomRow;
