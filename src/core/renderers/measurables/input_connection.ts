/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Class representing inputs with connections on a rendered block.
 */

/**
 * Class representing inputs with connections on a rendered block.
 * @class
 */
goog.module('blockly/core/renderers/measurables/input_connection');

import object from 'blockly/core/utils/object';
import {Connection} from 'blockly/core/renderers/measurables/connection';
import {ConstantProvider} from 'blockly/core/renderers/common/constants';
import {Input} from 'blockly/core/input';
import {Types} from 'blockly/core/renderers/measurables/types';


/**
 * The base class to represent an input that takes up space on a block
 * during rendering
 * @param {!ConstantProvider} constants The rendering
 *   constants provider.
 * @param {!Input} input The input to measure and store information for.
 * @package
 * @constructor
 * @extends {Connection}
 * @alias Blockly.blockRendering.InputConnection
 */
const InputConnection = function(constants, input) {
  InputConnection.superClass_.constructor.call(
      this, constants, input.connection);

  this.type |= Types.INPUT;
  this.input = input;
  this.align = input.align;
  this.connectedBlock = input.connection && input.connection.targetBlock() ?
      input.connection.targetBlock() :
      null;

  if (this.connectedBlock) {
    const bBox = this.connectedBlock.getHeightWidth();
    this.connectedBlockWidth = bBox.width;
    this.connectedBlockHeight = bBox.height;
  } else {
    this.connectedBlockWidth = 0;
    this.connectedBlockHeight = 0;
  }

  this.connectionOffsetX = 0;
  this.connectionOffsetY = 0;
};
object.inherits(InputConnection, Connection);

exports.InputConnection = InputConnection;
