/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Class for comment deletion event.
 * @class
 */

import eventUtils from 'blockly/core/events/utils';
import object from 'blockly/core/utils/object';
import registry from 'blockly/core/registry';
import {CommentBase} from 'blockly/core/events/events_comment_base';
import {WorkspaceComment} from 'blockly/core/workspace_comment';


/**
 * Class for a comment deletion event.
 * @param {!WorkspaceComment=} opt_comment The deleted comment.
 *     Undefined for a blank event.
 * @extends {CommentBase}
 * @constructor
 * @alias Blockly.Events.CommentDelete
 */
const CommentDelete = function(opt_comment) {
  CommentDelete.superClass_.constructor.call(this, opt_comment);
  if (!opt_comment) {
    return;  // Blank event to be populated by fromJson.
  }

  this.xml = opt_comment.toXmlWithXY();
};
object.inherits(CommentDelete, CommentBase);

/**
 * Type of this event.
 * @type {string}
 */
CommentDelete.prototype.type = eventUtils.COMMENT_DELETE;

/**
 * Encode the event as JSON.
 * @return {!Object} JSON representation.
 */
// TODO (#1266): "Full" and "minimal" serialization.
CommentDelete.prototype.toJson = function() {
  const json = CommentDelete.superClass_.toJson.call(this);
  return json;
};

/**
 * Decode the JSON event.
 * @param {!Object} json JSON representation.
 */
CommentDelete.prototype.fromJson = function(json) {
  CommentDelete.superClass_.fromJson.call(this, json);
};

/**
 * Run a creation event.
 * @param {boolean} forward True if run forward, false if run backward (undo).
 */
CommentDelete.prototype.run = function(forward) {
  CommentBase.CommentCreateDeleteHelper(this, !forward);
};

registry.register(
    registry.Type.EVENT, eventUtils.COMMENT_DELETE, CommentDelete);

exports.CommentDelete = CommentDelete;
