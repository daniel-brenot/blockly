/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Abstract class for a variable event.
 * @class
 */
goog.module('Blockly.Events.VarBase');

import Abstract from 'Blockly.Events.Abstract';
import object from 'Blockly.utils.object';
import {VariableModel} from 'Blockly.VariableModel';


/**
 * Abstract class for a variable event.
 * @param {!VariableModel=} opt_variable The variable this event
 *     corresponds to.  Undefined for a blank event.
 * @extends {Abstract}
 * @constructor
 * @alias Blockly.Events.VarBase
 */
const VarBase = function(opt_variable) {
  VarBase.superClass_.constructor.call(this);
  this.isBlank = typeof opt_variable === 'undefined';

  /**
   * The variable id for the variable this event pertains to.
   * @type {string}
   */
  this.varId = this.isBlank ? '' : opt_variable.getId();

  /**
   * The workspace identifier for this event.
   * @type {string}
   */
  this.workspaceId = this.isBlank ? '' : opt_variable.workspace.id;
};
object.inherits(VarBase, Abstract);

/**
 * Encode the event as JSON.
 * @return {!Object} JSON representation.
 */
VarBase.prototype.toJson = function() {
  const json = VarBase.superClass_.toJson.call(this);
  json['varId'] = this.varId;
  return json;
};

/**
 * Decode the JSON event.
 * @param {!Object} json JSON representation.
 */
VarBase.prototype.fromJson = function(json) {
  VarBase.superClass_.toJson.call(this);
  this.varId = json['varId'];
};

exports.VarBase = VarBase;
