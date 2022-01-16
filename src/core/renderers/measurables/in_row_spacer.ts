/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Objects representing a spacer in a row of a rendered
 * block.
 */

/**
 * Objects representing a spacer in a row of a rendered
 * block.
 * @class
 */
goog.module('Blockly.blockRendering.InRowSpacer');

import object from 'Blockly.utils.object';
import {ConstantProvider} from 'Blockly.blockRendering.ConstantProvider';
import {Measurable} from 'Blockly.blockRendering.Measurable';
import {Types} from 'Blockly.blockRendering.Types';


/**
 * An object containing information about a spacer between two elements on a
 * row.
 * @param {!ConstantProvider} constants The rendering
 *   constants provider.
 * @param {number} width The width of the spacer.
 * @package
 * @constructor
 * @extends {Measurable}
 * @alias Blockly.blockRendering.InRowSpacer
 */
function InRowSpacer(constants, width) {
  InRowSpacer.superClass_.constructor.call(this, constants);
  this.type |= Types.SPACER | Types.IN_ROW_SPACER;
  this.width = width;
  this.height = this.constants_.SPACER_DEFAULT_HEIGHT;
}
object.inherits(InRowSpacer, Measurable);

exports.InRowSpacer = InRowSpacer;
