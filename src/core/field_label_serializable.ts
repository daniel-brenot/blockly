/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Non-editable, serializable text field. Behaves like a
 *    normal label but is serialized to XML. It may only be
 *    edited programmatically.
 * @class
 */

import fieldRegistry from 'blockly/core/field_registry';
import object from 'blockly/core/utils/object';
import parsing from 'blockly/core/utils/parsing';
import {FieldLabel} from 'blockly/core/field_label';


/**
 * Class for a non-editable, serializable text field.
 * @param {*} opt_value The initial value of the field. Should cast to a
 *    string. Defaults to an empty string if null or undefined.
 * @param {string=} opt_class Optional CSS class for the field's text.
 * @param {Object=} opt_config A map of options used to configure the field.
 *    See the [field creation documentation]{@link
 * https://developers.google.com/blockly/guides/create-custom-blocks/fields/built-in-fields/label-serializable#creation}
 *    for a list of properties this parameter supports.
 * @extends {FieldLabel}
 * @constructor
 *
 * @alias Blockly.FieldLabelSerializable
 */
function FieldLabelSerializable(opt_value, opt_class, opt_config) {
  FieldLabelSerializable.superClass_.constructor.call(
      this, opt_value, opt_class, opt_config);
}
object.inherits(FieldLabelSerializable, FieldLabel);

/**
 * Construct a FieldLabelSerializable from a JSON arg object,
 * dereferencing any string table references.
 * @param {!Object} options A JSON object with options (text, and class).
 * @return {!FieldLabelSerializable} The new field instance.
 * @package
 * @nocollapse
 */
FieldLabelSerializable.fromJson = function(options) {
  const text = parsing.replaceMessageReferences(options['text']);
  // `this` might be a subclass of FieldLabelSerializable if that class doesn't
  // override the static fromJson method.
  return new this(text, undefined, options);
};

/**
 * Editable fields usually show some sort of UI indicating they are
 * editable. This field should not.
 * @type {boolean}
 */
FieldLabelSerializable.prototype.EDITABLE = false;

/**
 * Serializable fields are saved by the XML renderer, non-serializable fields
 * are not.  This field should be serialized, but only edited programmatically.
 * @type {boolean}
 */
FieldLabelSerializable.prototype.SERIALIZABLE = true;

fieldRegistry.register('field_label_serializable', FieldLabelSerializable);

exports.FieldLabelSerializable = FieldLabelSerializable;
