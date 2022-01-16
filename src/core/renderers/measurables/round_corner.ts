/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Objects representing a round corner in a row of a rendered
 * block.
 */

/**
 * Objects representing a round corner in a row of a rendered
 * block.
 * @class
 */

import object from 'blockly/core/utils/object';
import {ConstantProvider} from 'blockly/core/renderers/common/constants';
import {Measurable} from 'blockly/core/renderers/measurables/base';
import {Types} from 'blockly/core/renderers/measurables/types';


/**
 * An object containing information about the space a rounded corner takes up
 * during rendering.
 * @param {!ConstantProvider} constants The rendering
 *   constants provider.
 * @param {string=} opt_position The position of this corner.
 * @package
 * @constructor
 * @extends {Measurable}
 * @alias Blockly.blockRendering.RoundCorner
 */
function RoundCorner(constants, opt_position) {
  RoundCorner.superClass_.constructor.call(this, constants);
  this.type =
      ((!opt_position || opt_position === 'left') ? Types.LEFT_ROUND_CORNER :
                                                    Types.RIGHT_ROUND_CORNER) |
      Types.CORNER;
  this.width = this.constants_.CORNER_RADIUS;
  // The rounded corner extends into the next row by 4 so we only take the
  // height that is aligned with this row.
  this.height = this.constants_.CORNER_RADIUS / 2;
}
object.inherits(RoundCorner, Measurable);

exports.RoundCorner = RoundCorner;
