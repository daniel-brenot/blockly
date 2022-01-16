/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Class for a variable rename event.
 * @class
 */

import eventUtils from 'blockly/core/events/utils';
import object from 'blockly/core/utils/object';
import registry from 'blockly/core/registry';
import {VarBase} from 'blockly/core/events/events_var_base';
import {VariableModel} from 'blockly/core/variable_model';


/**
 * Class for a variable rename event.
 * @param {!VariableModel=} opt_variable The renamed variable. Undefined
 *     for a blank event.
 * @param {string=} newName The new name the variable will be changed to.
 * @extends {VarBase}
 * @constructor
 * @alias Blockly.Events.VarRename
 */
const VarRename = function(opt_variable, newName) {
  VarRename.superClass_.constructor.call(this, opt_variable);
  if (!opt_variable) {
    return;  // Blank event to be populated by fromJson.
  }

  this.oldName = opt_variable.name;
  this.newName = typeof newName === 'undefined' ? '' : newName;
};
object.inherits(VarRename, VarBase);

/**
 * Type of this event.
 * @type {string}
 */
VarRename.prototype.type = eventUtils.VAR_RENAME;

/**
 * Encode the event as JSON.
 * @return {!Object} JSON representation.
 */
VarRename.prototype.toJson = function() {
  const json = VarRename.superClass_.toJson.call(this);
  json['oldName'] = this.oldName;
  json['newName'] = this.newName;
  return json;
};

/**
 * Decode the JSON event.
 * @param {!Object} json JSON representation.
 */
VarRename.prototype.fromJson = function(json) {
  VarRename.superClass_.fromJson.call(this, json);
  this.oldName = json['oldName'];
  this.newName = json['newName'];
};

/**
 * Run a variable rename event.
 * @param {boolean} forward True if run forward, false if run backward (undo).
 */
VarRename.prototype.run = function(forward) {
  const workspace = this.getEventWorkspace_();
  if (forward) {
    workspace.renameVariableById(this.varId, this.newName);
  } else {
    workspace.renameVariableById(this.varId, this.oldName);
  }
};

registry.register(registry.Type.EVENT, eventUtils.VAR_RENAME, VarRename);

exports.VarRename = VarRename;
