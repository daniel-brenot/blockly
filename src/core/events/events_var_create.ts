/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Class for a variable creation event.
 * @class
 */

import eventUtils from 'blockly/core/events/utils';
import object from 'blockly/core/utils/object';
import registry from 'blockly/core/registry';
import {VarBase} from 'blockly/core/events/events_var_base';
import {VariableModel} from 'blockly/core/variable_model';


/**
 * Class for a variable creation event.
 * @param {!VariableModel=} opt_variable The created variable. Undefined
 *     for a blank event.
 * @extends {VarBase}
 * @constructor
 * @alias Blockly.Events.VarCreate
 */
const VarCreate = function(opt_variable) {
  VarCreate.superClass_.constructor.call(this, opt_variable);
  if (!opt_variable) {
    return;  // Blank event to be populated by fromJson.
  }

  this.varType = opt_variable.type;
  this.varName = opt_variable.name;
};
object.inherits(VarCreate, VarBase);

/**
 * Type of this event.
 * @type {string}
 */
VarCreate.prototype.type = eventUtils.VAR_CREATE;

/**
 * Encode the event as JSON.
 * @return {!Object} JSON representation.
 */
VarCreate.prototype.toJson = function() {
  const json = VarCreate.superClass_.toJson.call(this);
  json['varType'] = this.varType;
  json['varName'] = this.varName;
  return json;
};

/**
 * Decode the JSON event.
 * @param {!Object} json JSON representation.
 */
VarCreate.prototype.fromJson = function(json) {
  VarCreate.superClass_.fromJson.call(this, json);
  this.varType = json['varType'];
  this.varName = json['varName'];
};

/**
 * Run a variable creation event.
 * @param {boolean} forward True if run forward, false if run backward (undo).
 */
VarCreate.prototype.run = function(forward) {
  const workspace = this.getEventWorkspace_();
  if (forward) {
    workspace.createVariable(this.varName, this.varType, this.varId);
  } else {
    workspace.deleteVariableById(this.varId);
  }
};

registry.register(registry.Type.EVENT, eventUtils.VAR_CREATE, VarCreate);

exports.VarCreate = VarCreate;
