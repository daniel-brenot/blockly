/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Zelos specific objects representing elements in a row of a
 * rendered block.
 */

/**
 * Zelos specific objects representing elements in a row of a
 * rendered block.
 * @class
 */
goog.module('blockly/core/renderers/zelos/measurables/row_elements');

import object from 'blockly/core/utils/object';
import {ConstantProvider} from 'blockly/core/renderers/common/constants';
import {Measurable} from 'blockly/core/renderers/measurables/base';
import {Types} from 'blockly/core/renderers/measurables/types';


/**
 * An object containing information about the space a right connection shape
 * takes up during rendering.
 * @param {!ConstantProvider} constants The rendering
 *   constants provider.
 * @package
 * @constructor
 * @extends {Measurable}
 * @alias Blockly.zelos.RightConnectionShape
 */
function RightConnectionShape(constants) {
  RightConnectionShape.superClass_.constructor.call(this, constants);
  this.type |= Types.getType('RIGHT_CONNECTION');
  // Size is dynamic
  this.height = 0;
  this.width = 0;
}
object.inherits(RightConnectionShape, Measurable);

exports.RightConnectionShape = RightConnectionShape;
