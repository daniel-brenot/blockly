/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Class representing the space a previous connection takes up
 * during rendering.
 */

/**
 * Class representing the space a previous connection takes up
 * during rendering.
 * @class
 */
goog.module('blockly/core/renderers/measurables/previous_connection');

import object from 'blockly/core/utils/object';
import {Connection} from 'blockly/core/renderers/measurables/connection';
import {ConstantProvider} from 'blockly/core/renderers/common/constants';
import {RenderedConnection} from 'blockly/core/rendered_connection';
import {Types} from 'blockly/core/renderers/measurables/types';


/**
 * An object containing information about the space a previous connection takes
 * up during rendering.
 * @param {!ConstantProvider} constants The rendering
 *   constants provider.
 * @param {RenderedConnection} connectionModel The connection object on
 *     the block that this represents.
 * @package
 * @constructor
 * @extends {Connection}
 * @alias Blockly.blockRendering.PreviousConnection
 */
function PreviousConnection(constants, connectionModel) {
  PreviousConnection.superClass_.constructor.call(
      this, constants, connectionModel);
  this.type |= Types.PREVIOUS_CONNECTION;
  this.height = this.shape.height;
  this.width = this.shape.width;
}
object.inherits(PreviousConnection, Connection);

exports.PreviousConnection = PreviousConnection;
