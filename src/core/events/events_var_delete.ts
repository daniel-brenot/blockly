/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Classes for all types of variable events.
 * @class
 */

import eventUtils from 'blockly/core/events/utils';
import object from 'blockly/core/utils/object';
import registry from 'blockly/core/registry';
import {VarBase} from 'blockly/core/events/events_var_base';
import {VariableModel} from 'blockly/core/variable_model';


/**
 * Class for a variable deletion event.
 * @param {!VariableModel=} opt_variable The deleted variable. Undefined
 *     for a blank event.
 * @extends {VarBase}
 * @constructor
 * @alias Blockly.Events.VarDelete
 */
const VarDelete = function(opt_variable) {
  VarDelete.superClass_.constructor.call(this, opt_variable);
  if (!opt_variable) {
    return;  // Blank event to be populated by fromJson.
  }

  this.varType = opt_variable.type;
  this.varName = opt_variable.name;
};
object.inherits(VarDelete, VarBase);

/**
 * Type of this event.
 * @type {string}
 */
VarDelete.prototype.type = eventUtils.VAR_DELETE;

/**
 * Encode the event as JSON.
 * @return {!Object} JSON representation.
 */
VarDelete.prototype.toJson = function() {
  const json = VarDelete.superClass_.toJson.call(this);
  json['varType'] = this.varType;
  json['varName'] = this.varName;
  return json;
};

/**
 * Decode the JSON event.
 * @param {!Object} json JSON representation.
 */
VarDelete.prototype.fromJson = function(json) {
  VarDelete.superClass_.fromJson.call(this, json);
  this.varType = json['varType'];
  this.varName = json['varName'];
};

/**
 * Run a variable deletion event.
 * @param {boolean} forward True if run forward, false if run backward (undo).
 */
VarDelete.prototype.run = function(forward) {
  const workspace = this.getEventWorkspace_();
  if (forward) {
    workspace.deleteVariableById(this.varId);
  } else {
    workspace.createVariable(this.varName, this.varType, this.varId);
  }
};

registry.register(registry.Type.EVENT, eventUtils.VAR_DELETE, VarDelete);

exports.VarDelete = VarDelete;
