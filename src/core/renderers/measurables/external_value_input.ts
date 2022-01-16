/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Class representing external value inputs with connections on a
 * rendered block.
 */

/**
 * Class representing external value inputs with connections on a
 * rendered block.
 * @class
 */
goog.module('blockly/core/renderers/measurables/external_value_input');

import object from 'blockly/core/utils/object';
import {ConstantProvider} from 'blockly/core/renderers/common/constants';
import {InputConnection} from 'blockly/core/renderers/measurables/input_connection';
import {Input} from 'blockly/core/input';
import {Types} from 'blockly/core/renderers/measurables/types';


/**
 * An object containing information about the space an external value input
 * takes up during rendering
 * @param {!ConstantProvider} constants The rendering
 *   constants provider.
 * @param {!Input} input The external value input to measure and store
 *     information for.
 * @package
 * @constructor
 * @extends {InputConnection}
 * @alias Blockly.blockRendering.ExternalValueInput
 */
const ExternalValueInput = function(constants, input) {
  ExternalValueInput.superClass_.constructor.call(this, constants, input);
  this.type |= Types.EXTERNAL_VALUE_INPUT;
  if (!this.connectedBlock) {
    this.height = this.shape.height;
  } else {
    this.height = this.connectedBlockHeight -
        this.constants_.TAB_OFFSET_FROM_TOP - this.constants_.MEDIUM_PADDING;
  }
  this.width = this.shape.width + this.constants_.EXTERNAL_VALUE_INPUT_PADDING;

  this.connectionOffsetY = this.constants_.TAB_OFFSET_FROM_TOP;
  this.connectionHeight = this.shape.height;
  this.connectionWidth = this.shape.width;
};
object.inherits(ExternalValueInput, InputConnection);

exports.ExternalValueInput = ExternalValueInput;
