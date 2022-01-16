/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Class for a finished loading workspace event.
 * @class
 */
goog.module('blockly/core/events/workspace_events');

import Abstract from 'blockly/core/events/events_abstract';
import eventUtils from 'blockly/core/events/utils';
import object from 'blockly/core/utils/object';
import registry from 'blockly/core/registry';
import {Workspace} from 'blockly/core/workspace';


/**
 * Class for a finished loading event.
 * Used to notify the developer when the workspace has finished loading (i.e
 * domToWorkspace).
 * Finished loading events do not record undo or redo.
 * @param {!Workspace=} opt_workspace The workspace that has finished
 *    loading.  Undefined for a blank event.
 * @extends {Abstract}
 * @constructor
 * @alias Blockly.Events.FinishedLoading
 */
const FinishedLoading = function(opt_workspace) {
  /**
   * Whether or not the event is blank (to be populated by fromJson).
   * @type {boolean}
   */
  this.isBlank = typeof opt_workspace === 'undefined';

  /**
   * The workspace identifier for this event.
   * @type {string}
   */
  this.workspaceId = opt_workspace ? opt_workspace.id : '';

  /**
   * The event group ID for the group this event belongs to. Groups define
   * events that should be treated as an single action from the user's
   * perspective, and should be undone together.
   * @type {string}
   */
  this.group = eventUtils.getGroup();

  // Workspace events do not undo or redo.
  this.recordUndo = false;
};
object.inherits(FinishedLoading, Abstract);

/**
 * Type of this event.
 * @type {string}
 */
FinishedLoading.prototype.type = eventUtils.FINISHED_LOADING;

/**
 * Encode the event as JSON.
 * @return {!Object} JSON representation.
 */
FinishedLoading.prototype.toJson = function() {
  const json = {
    'type': this.type,
  };
  if (this.group) {
    json['group'] = this.group;
  }
  if (this.workspaceId) {
    json['workspaceId'] = this.workspaceId;
  }
  return json;
};

/**
 * Decode the JSON event.
 * @param {!Object} json JSON representation.
 */
FinishedLoading.prototype.fromJson = function(json) {
  this.isBlank = false;
  this.workspaceId = json['workspaceId'];
  this.group = json['group'];
};

registry.register(
    registry.Type.EVENT, eventUtils.FINISHED_LOADING, FinishedLoading);

exports.FinishedLoading = FinishedLoading;
