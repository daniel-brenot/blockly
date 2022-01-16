/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Object representing a spacer between two rows.
 */

/**
 * Object representing a spacer between two rows.
 * @class
 */
goog.module('blockly/core/renderers/measurables/spacer_row');

import object from 'blockly/core/utils/object';
import {ConstantProvider} from 'blockly/core/renderers/common/constants';
import {InRowSpacer} from 'blockly/core/renderers/measurables/in_row_spacer';
import {Row} from 'blockly/core/renderers/measurables/row';
import {Types} from 'blockly/core/renderers/measurables/types';


/**
 * An object containing information about a spacer between two rows.
 * @param {!ConstantProvider} constants The rendering
 *   constants provider.
 * @param {number} height The height of the spacer.
 * @param {number} width The width of the spacer.
 * @package
 * @constructor
 * @extends {Row}
 * @alias Blockly.blockRendering.SpacerRow
 */
function SpacerRow(constants, height, width) {
  SpacerRow.superClass_.constructor.call(this, constants);
  this.type |= Types.SPACER | Types.BETWEEN_ROW_SPACER;
  this.width = width;
  this.height = height;
  this.followsStatement = false;
  this.widthWithConnectedBlocks = 0;
  this.elements = [new InRowSpacer(this.constants_, width)];
}
object.inherits(SpacerRow, Row);

/**
 * @override
 */
SpacerRow.prototype.measure = function() {
  // NOP.  Width and height were set at creation.
};

exports.SpacerRow = SpacerRow;
