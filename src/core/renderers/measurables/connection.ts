/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Base class representing the space a connection takes up during
 * rendering.
 */

/**
 * Base class representing the space a connection takes up during
 * rendering.
 * @class
 */
goog.module('Blockly.blockRendering.Connection');

import object from 'Blockly.utils.object';
import {ConstantProvider} from 'Blockly.blockRendering.ConstantProvider';
import {Measurable} from 'Blockly.blockRendering.Measurable';
import {RenderedConnection} from 'Blockly.RenderedConnection';
import {Types} from 'Blockly.blockRendering.Types';


/**
 * The base class to represent a connection and the space that it takes up on
 * the block.
 * @param {!ConstantProvider} constants The rendering
 *   constants provider.
 * @param {!RenderedConnection} connectionModel The connection object on
 *     the block that this represents.
 * @package
 * @constructor
 * @extends {Measurable}
 * @alias Blockly.blockRendering.Connection
 */
function Connection(constants, connectionModel) {
  Connection.superClass_.constructor.call(this, constants);
  this.connectionModel = connectionModel;
  this.shape = this.constants_.shapeFor(connectionModel);
  this.isDynamicShape = !!this.shape['isDynamic'];
  this.type |= Types.CONNECTION;
}
object.inherits(Connection, Measurable);

exports.Connection = Connection;
