/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Objects representing a field in a row of a rendered
 * block.
 */

/**
 * Objects representing a field in a row of a rendered
 * block.
 * @class
 */
goog.module('Blockly.blockRendering.Field');

import object from 'Blockly.utils.object';
import {ConstantProvider} from 'Blockly.blockRendering.ConstantProvider';
import {Field: BlocklyField} from 'Blockly.Field';
import {Input} from 'Blockly.Input';
import {Measurable} from 'Blockly.blockRendering.Measurable';
import {Types} from 'Blockly.blockRendering.Types';


/**
 * An object containing information about the space a field takes up during
 * rendering
 * @param {!ConstantProvider} constants The rendering
 *   constants provider.
 * @param {!BlocklyField} field The field to measure and store information for.
 * @param {!Input} parentInput The parent input for the field.
 * @package
 * @constructor
 * @extends {Measurable}
 * @alias Blockly.blockRendering.Field
 */
const Field = function(constants, field, parentInput) {
  Field.superClass_.constructor.call(this, constants);
  this.field = field;
  this.isEditable = field.EDITABLE;
  this.flipRtl = field.getFlipRtl();
  this.type |= Types.FIELD;

  const size = this.field.getSize();
  this.height = size.height;
  this.width = size.width;
  this.parentInput = parentInput;
};
object.inherits(Field, Measurable);

exports.Field = Field;
