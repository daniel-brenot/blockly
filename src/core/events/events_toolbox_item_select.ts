/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Events fired as a result of selecting an item on the toolbox.
 * @class
 */

import eventUtils from 'blockly/core/events/utils';
import object from 'blockly/core/utils/object';
import registry from 'blockly/core/registry';
import {UiBase} from 'blockly/core/events/events_ui_base';


/**
 * Class for a toolbox item select event.
 * @param {?string=} opt_oldItem The previously selected toolbox item. Undefined
 *    for a blank event.
 * @param {?string=} opt_newItem The newly selected toolbox item. Undefined for
 *    a blank event.
 * @param {string=} opt_workspaceId The workspace identifier for this event.
 *    Undefined for a blank event.
 * @extends {UiBase}
 * @constructor
 * @alias Blockly.Events.ToolboxItemSelect
 */
const ToolboxItemSelect = function(opt_oldItem, opt_newItem, opt_workspaceId) {
  ToolboxItemSelect.superClass_.constructor.call(this, opt_workspaceId);

  /**
   * The previously selected toolbox item.
   * @type {?string|undefined}
   */
  this.oldItem = opt_oldItem;

  /**
   * The newly selected toolbox item.
   * @type {?string|undefined}
   */
  this.newItem = opt_newItem;
};
object.inherits(ToolboxItemSelect, UiBase);

/**
 * Type of this event.
 * @type {string}
 */
ToolboxItemSelect.prototype.type = eventUtils.TOOLBOX_ITEM_SELECT;

/**
 * Encode the event as JSON.
 * @return {!Object} JSON representation.
 */
ToolboxItemSelect.prototype.toJson = function() {
  const json = ToolboxItemSelect.superClass_.toJson.call(this);
  json['oldItem'] = this.oldItem;
  json['newItem'] = this.newItem;
  return json;
};

/**
 * Decode the JSON event.
 * @param {!Object} json JSON representation.
 */
ToolboxItemSelect.prototype.fromJson = function(json) {
  ToolboxItemSelect.superClass_.fromJson.call(this, json);
  this.oldItem = json['oldItem'];
  this.newItem = json['newItem'];
};

registry.register(
    registry.Type.EVENT, eventUtils.TOOLBOX_ITEM_SELECT, ToolboxItemSelect);

exports.ToolboxItemSelect = ToolboxItemSelect;
