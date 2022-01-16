/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * (Deprecated) Events fired as a result of UI actions in
 * Blockly's editor.
 * @class
 */
goog.module('Blockly.Events.Ui');

import eventUtils from 'Blockly.Events.utils';
import object from 'Blockly.utils.object';
import registry from 'Blockly.registry';
import {Block} from 'Blockly.Block';
import {UiBase} from 'Blockly.Events.UiBase';


/**
 * Class for a UI event.
 * @param {?Block=} opt_block The affected block.  Null for UI events
 *     that do not have an associated block.  Undefined for a blank event.
 * @param {string=} opt_element One of 'selected', 'comment', 'mutatorOpen',
 *     etc.
 * @param {*=} opt_oldValue Previous value of element.
 * @param {*=} opt_newValue New value of element.
 * @extends {UiBase}
 * @deprecated December 2020. Instead use a more specific UI event.
 * @constructor
 * @alias Blockly.Events.Ui
 */
const Ui = function(opt_block, opt_element, opt_oldValue, opt_newValue) {
  const workspaceId = opt_block ? opt_block.workspace.id : undefined;
  Ui.superClass_.constructor.call(this, workspaceId);

  this.blockId = opt_block ? opt_block.id : null;
  this.element = typeof opt_element === 'undefined' ? '' : opt_element;
  this.oldValue = typeof opt_oldValue === 'undefined' ? '' : opt_oldValue;
  this.newValue = typeof opt_newValue === 'undefined' ? '' : opt_newValue;
};
object.inherits(Ui, UiBase);

/**
 * Type of this event.
 * @type {string}
 */
Ui.prototype.type = eventUtils.UI;

/**
 * Encode the event as JSON.
 * @return {!Object} JSON representation.
 */
Ui.prototype.toJson = function() {
  const json = Ui.superClass_.toJson.call(this);
  json['element'] = this.element;
  if (this.newValue !== undefined) {
    json['newValue'] = this.newValue;
  }
  if (this.blockId) {
    json['blockId'] = this.blockId;
  }
  return json;
};

/**
 * Decode the JSON event.
 * @param {!Object} json JSON representation.
 */
Ui.prototype.fromJson = function(json) {
  Ui.superClass_.fromJson.call(this, json);
  this.element = json['element'];
  this.newValue = json['newValue'];
  this.blockId = json['blockId'];
};

registry.register(registry.Type.EVENT, eventUtils.UI, Ui);

exports.Ui = Ui;
