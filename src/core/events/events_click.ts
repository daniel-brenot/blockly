/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Events fired as a result of UI click in Blockly's editor.
 * @class
 */
goog.module('blockly/core/events/events_click');

import eventUtils from 'blockly/core/events/utils';
import object from 'blockly/core/utils/object';
import registry from 'blockly/core/registry';
import {Block} from 'blockly/core/block';
import {UiBase} from 'blockly/core/events/events_ui_base';


/**
 * Class for a click event.
 * @param {?Block=} opt_block The affected block. Null for click events
 *    that do not have an associated block (i.e. workspace click). Undefined
 *    for a blank event.
 * @param {?string=} opt_workspaceId The workspace identifier for this event.
 *    Not used if block is passed. Undefined for a blank event.
 * @param {string=} opt_targetType The type of element targeted by this click
 *    event. Undefined for a blank event.
 * @extends {UiBase}
 * @constructor
 * @alias Blockly.Events.Click
 */
const Click = function(opt_block, opt_workspaceId, opt_targetType) {
  const workspaceId = opt_block ? opt_block.workspace.id : opt_workspaceId;
  Click.superClass_.constructor.call(this, workspaceId);
  this.blockId = opt_block ? opt_block.id : null;

  /**
   * The type of element targeted by this click event.
   * @type {string|undefined}
   */
  this.targetType = opt_targetType;
};
object.inherits(Click, UiBase);

/**
 * Type of this event.
 * @type {string}
 */
Click.prototype.type = eventUtils.CLICK;

/**
 * Encode the event as JSON.
 * @return {!Object} JSON representation.
 */
Click.prototype.toJson = function() {
  const json = Click.superClass_.toJson.call(this);
  json['targetType'] = this.targetType;
  if (this.blockId) {
    json['blockId'] = this.blockId;
  }
  return json;
};

/**
 * Decode the JSON event.
 * @param {!Object} json JSON representation.
 */
Click.prototype.fromJson = function(json) {
  Click.superClass_.fromJson.call(this, json);
  this.targetType = json['targetType'];
  this.blockId = json['blockId'];
};

registry.register(registry.Type.EVENT, eventUtils.CLICK, Click);

exports.Click = Click;
