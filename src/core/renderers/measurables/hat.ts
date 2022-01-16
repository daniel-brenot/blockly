/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Objects representing a hat in a row of a rendered
 * block.
 */

/**
 * Objects representing a hat in a row of a rendered
 * block.
 * @class
 */

import object from 'blockly/core/utils/object';
import {ConstantProvider} from 'blockly/core/renderers/common/constants';
import {Measurable} from 'blockly/core/renderers/measurables/base';
import {Types} from 'blockly/core/renderers/measurables/types';


/**
 * An object containing information about the space a hat takes up during
 * rendering.
 * @param {!ConstantProvider} constants The rendering
 *   constants provider.
 * @package
 * @constructor
 * @extends {Measurable}
 * @alias Blockly.blockRendering.Hat
 */
function Hat(constants) {
  Hat.superClass_.constructor.call(this, constants);
  this.type |= Types.HAT;
  this.height = this.constants_.START_HAT.height;
  this.width = this.constants_.START_HAT.width;
  this.ascenderHeight = this.height;
}
object.inherits(Hat, Measurable);

exports.Hat = Hat;
