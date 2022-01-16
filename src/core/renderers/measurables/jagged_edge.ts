/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Objects representing a jagged edge in a row of a rendered
 * block.
 */

/**
 * Objects representing a jagged edge in a row of a rendered
 * block.
 * @class
 */
goog.module('Blockly.blockRendering.JaggedEdge');

import object from 'Blockly.utils.object';
import {ConstantProvider} from 'Blockly.blockRendering.ConstantProvider';
import {Measurable} from 'Blockly.blockRendering.Measurable';
import {Types} from 'Blockly.blockRendering.Types';


/**
 * An object containing information about the jagged edge of a collapsed block
 * takes up during rendering
 * @param {!ConstantProvider} constants The rendering
 *   constants provider.
 * @package
 * @constructor
 * @extends {Measurable}
 * @alias Blockly.blockRendering.JaggedEdge
 */
const JaggedEdge = function(constants) {
  JaggedEdge.superClass_.constructor.call(this, constants);
  this.type |= Types.JAGGED_EDGE;
  this.height = this.constants_.JAGGED_TEETH.height;
  this.width = this.constants_.JAGGED_TEETH.width;
};
object.inherits(JaggedEdge, Measurable);

exports.JaggedEdge = JaggedEdge;
