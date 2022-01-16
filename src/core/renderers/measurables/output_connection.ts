
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Class representing the space a output connection takes up
 * during rendering.
 */

/**
 * Class representing the space a output connection takes up
 * during rendering.
 * @class
 */
goog.module('Blockly.blockRendering.OutputConnection');

import object from 'Blockly.utils.object';
import {Connection} from 'Blockly.blockRendering.Connection';
import {ConstantProvider} from 'Blockly.blockRendering.ConstantProvider';
import {RenderedConnection} from 'Blockly.RenderedConnection';
import {Types} from 'Blockly.blockRendering.Types';


/**
 * An object containing information about the space an output connection takes
 * up during rendering.
 * @param {!ConstantProvider} constants The rendering
 *   constants provider.
 * @param {RenderedConnection} connectionModel The connection object on
 *     the block that this represents.
 * @package
 * @constructor
 * @extends {Connection}
 * @alias Blockly.blockRendering.OutputConnection
 */
const OutputConnection = function(constants, connectionModel) {
  OutputConnection.superClass_.constructor.call(
      this, constants, connectionModel);
  this.type |= Types.OUTPUT_CONNECTION;

  this.height = !this.isDynamicShape ? this.shape.height : 0;
  this.width = !this.isDynamicShape ? this.shape.width : 0;
  this.startX = this.width;

  this.connectionOffsetY = this.constants_.TAB_OFFSET_FROM_TOP;
  this.connectionOffsetX = 0;
};
object.inherits(OutputConnection, Connection);

exports.OutputConnection = OutputConnection;
