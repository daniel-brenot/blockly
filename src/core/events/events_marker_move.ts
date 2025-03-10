/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Events fired as a result of a marker move.
 * @class
 */

import eventUtils from 'blockly/core/events/utils';
import object from 'blockly/core/utils/object';
import registry from 'blockly/core/registry';
import {ASTNode} from 'blockly/core/keyboard_nav/ast_node';
import {Block} from 'blockly/core/block';
import {UiBase} from 'blockly/core/events/events_ui_base';
import {Workspace} from 'blockly/core/workspace';


/**
 * Class for a marker move event.
 * @param {?Block=} opt_block The affected block. Null if current node
 *    is of type workspace. Undefined for a blank event.
 * @param {boolean=} isCursor Whether this is a cursor event. Undefined for a
 *    blank event.
 * @param {?ASTNode=} opt_oldNode The old node the marker used to be on.
 *    Undefined for a blank event.
 * @param {!ASTNode=} opt_newNode The new node the marker is now on.
 *    Undefined for a blank event.
 * @extends {UiBase}
 * @constructor
 * @alias Blockly.Events.MarkerMove
 */
const MarkerMove = function(opt_block, isCursor, opt_oldNode, opt_newNode) {
  let workspaceId = opt_block ? opt_block.workspace.id : undefined;
  if (opt_newNode && opt_newNode.getType() === ASTNode.types.WORKSPACE) {
    workspaceId = (/** @type {!Workspace} */ (opt_newNode.getLocation())).id;
  }
  MarkerMove.superClass_.constructor.call(this, workspaceId);

  /**
   * The workspace identifier for this event.
   * @type {?string}
   */
  this.blockId = opt_block ? opt_block.id : null;

  /**
   * The old node the marker used to be on.
   * @type {?ASTNode|undefined}
   */
  this.oldNode = opt_oldNode;

  /**
   * The new node the  marker is now on.
   * @type {ASTNode|undefined}
   */
  this.newNode = opt_newNode;

  /**
   * Whether this is a cursor event.
   * @type {boolean|undefined}
   */
  this.isCursor = isCursor;
};
object.inherits(MarkerMove, UiBase);

/**
 * Type of this event.
 * @type {string}
 */
MarkerMove.prototype.type = eventUtils.MARKER_MOVE;

/**
 * Encode the event as JSON.
 * @return {!Object} JSON representation.
 */
MarkerMove.prototype.toJson = function() {
  const json = MarkerMove.superClass_.toJson.call(this);
  json['isCursor'] = this.isCursor;
  json['blockId'] = this.blockId;
  json['oldNode'] = this.oldNode;
  json['newNode'] = this.newNode;
  return json;
};

/**
 * Decode the JSON event.
 * @param {!Object} json JSON representation.
 */
MarkerMove.prototype.fromJson = function(json) {
  MarkerMove.superClass_.fromJson.call(this, json);
  this.isCursor = json['isCursor'];
  this.blockId = json['blockId'];
  this.oldNode = json['oldNode'];
  this.newNode = json['newNode'];
};

registry.register(registry.Type.EVENT, eventUtils.MARKER_MOVE, MarkerMove);

exports.MarkerMove = MarkerMove;
