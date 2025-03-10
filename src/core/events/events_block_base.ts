/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Base class for all types of block events.
 * @class
 */

import Abstract from 'blockly/core/events/events_abstract';
import object from 'blockly/core/utils/object';
import {Block} from 'blockly/core/block';


/**
 * Abstract class for a block event.
 * @param {!Block=} opt_block The block this event corresponds to.
 *     Undefined for a blank event.
 * @extends {Abstract}
 * @constructor
 * @alias Blockly.Events.BlockBase
 */
const BlockBase = function(opt_block) {
  BlockBase.superClass_.constructor.call(this);
  this.isBlank = typeof opt_block === 'undefined';

  /**
   * The block ID for the block this event pertains to
   * @type {string}
   */
  this.blockId = this.isBlank ? '' : opt_block.id;

  /**
   * The workspace identifier for this event.
   * @type {string}
   */
  this.workspaceId = this.isBlank ? '' : opt_block.workspace.id;
};
object.inherits(BlockBase, Abstract);

/**
 * Encode the event as JSON.
 * @return {!Object} JSON representation.
 */
BlockBase.prototype.toJson = function() {
  const json = BlockBase.superClass_.toJson.call(this);
  json['blockId'] = this.blockId;
  return json;
};

/**
 * Decode the JSON event.
 * @param {!Object} json JSON representation.
 */
BlockBase.prototype.fromJson = function(json) {
  BlockBase.superClass_.fromJson.call(this, json);
  this.blockId = json['blockId'];
};

exports.BlockBase = BlockBase;
