/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * An object representing the bottom row of a rendered block.
 * @class
 */

import object from 'blockly/core/utils/object';
import {BottomRow: BaseBottomRow} from 'blockly/core/renderers/measurables/bottom_row';
import {ConstantProvider} from 'blockly/core/renderers/common/constants';


/**
 * An object containing information about what elements are in the bottom row of
 * a block as well as spacing information for the top row.
 * Elements in a bottom row can consist of corners, spacers and next
 * connections.
 * @param {!ConstantProvider} constants The rendering
 *   constants provider.
 * @package
 * @constructor
 * @extends {BaseBottomRow}
 * @alias Blockly.zelos.BottomRow
 */
function BottomRow(constants) {
  BottomRow.superClass_.constructor.call(this, constants);
}
object.inherits(BottomRow, BaseBottomRow);

/**
 * @override
 */
BottomRow.prototype.endsWithElemSpacer = function() {
  return false;
};

/**
 * Render a round corner unless the block has an output connection.
 * @override
 */
BottomRow.prototype.hasLeftSquareCorner = function(block) {
  return !!block.outputConnection;
};

/**
 * Render a round corner unless the block has an output connection.
 * @override
 */
BottomRow.prototype.hasRightSquareCorner = function(block) {
  return !!block.outputConnection && !block.statementInputCount &&
      !block.nextConnection;
};

exports.BottomRow = BottomRow;
