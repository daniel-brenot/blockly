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
goog.module('Blockly.blockRendering.PreviousConnection');

import object from 'Blockly.utils.object';
import {Connection} from 'Blockly.blockRendering.Connection';
import {ConstantProvider} from 'Blockly.blockRendering.ConstantProvider';
import {RenderedConnection} from 'Blockly.RenderedConnection';
import {Types} from 'Blockly.blockRendering.Types';


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
const PreviousConnection = function(constants, connectionModel) {
  PreviousConnection.superClass_.constructor.call(
      this, constants, connectionModel);
  this.type |= Types.PREVIOUS_CONNECTION;
  this.height = this.shape.height;
  this.width = this.shape.width;
};
object.inherits(PreviousConnection, Connection);

exports.PreviousConnection = PreviousConnection;
