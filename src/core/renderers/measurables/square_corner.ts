/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Objects representing a square corner in a row of a rendered
 * block.
 */

/**
 * Objects representing a square corner in a row of a rendered
 * block.
 * @class
 */
goog.module('blockly/core/renderers/measurables/square_corner');

import object from 'blockly/core/utils/object';
import {ConstantProvider} from 'blockly/core/renderers/common/constants';
import {Measurable} from 'blockly/core/renderers/measurables/base';
import {Types} from 'blockly/core/renderers/measurables/types';


/**
 * An object containing information about the space a square corner takes up
 * during rendering.
 * @param {!ConstantProvider} constants The rendering
 *   constants provider.
 * @param {string=} opt_position The position of this corner.
 * @package
 * @constructor
 * @extends {Measurable}
 * @alias Blockly.blockRendering.SquareCorner
 */
function SquareCorner(constants, opt_position) {
  SquareCorner.superClass_.constructor.call(this, constants);
  this.type =
      ((!opt_position || opt_position === 'left') ? Types.LEFT_SQUARE_CORNER :
                                                    Types.RIGHT_SQUARE_CORNER) |
      Types.CORNER;
  this.height = this.constants_.NO_PADDING;
  this.width = this.constants_.NO_PADDING;
}
object.inherits(SquareCorner, Measurable);

exports.SquareCorner = SquareCorner;
