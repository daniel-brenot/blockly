/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Object representing a code comment on the workspace.
 * @class
 */

import eventUtils from 'blockly/core/events/utils';
import idGenerator from 'blockly/core/utils/idgenerator';
import xml from 'blockly/core/utils/xml';
import {Coordinate} from 'blockly/core/utils/coordinate';
import {Workspace} from 'blockly/core/workspace';
goog.require('blockly/core/events/events_comment_change');
goog.require('blockly/core/events/events_comment_create');
goog.require('blockly/core/events/events_comment_delete');
goog.require('blockly/core/events/events_comment_move');


/**
 * Class for a workspace comment.
 * @param {!Workspace} workspace The block's workspace.
 * @param {string} content The content of this workspace comment.
 * @param {number} height Height of the comment.
 * @param {number} width Width of the comment.
 * @param {string=} opt_id Optional ID.  Use this ID if provided, otherwise
 *     create a new ID.
 * @constructor
 * @alias Blockly.WorkspaceComment
 */
const WorkspaceComment = function(workspace, content, height, width, opt_id) {
  /** @type {string} */
  this.id = (opt_id && !workspace.getCommentById(opt_id)) ?
      opt_id :
      idGenerator.genUid();

  workspace.addTopComment(this);

  /**
   * The comment's position in workspace units.  (0, 0) is at the workspace's
   * origin; scale does not change this value.
   * @type {!Coordinate}
   * @protected
   */
  this.xy_ = new Coordinate(0, 0);

  /**
   * The comment's height in workspace units.  Scale does not change this value.
   * @type {number}
   * @protected
   */
  this.height_ = height;

  /**
   * The comment's width in workspace units.  Scale does not change this value.
   * @type {number}
   * @protected
   */
  this.width_ = width;

  /**
   * @type {!Workspace}
   */
  this.workspace = workspace;

  /**
   * @protected
   * @type {boolean}
   */
  this.RTL = workspace.RTL;

  /**
   * @type {boolean}
   * @private
   */
  this.deletable_ = true;

  /**
   * @type {boolean}
   * @private
   */
  this.movable_ = true;

  /**
   * @type {boolean}
   * @private
   */
  this.editable_ = true;

  /**
   * @protected
   * @type {string}
   */
  this.content_ = content;

  /**
   * Whether this comment has been disposed.
   * @protected
   * @type {boolean}
   */
  this.disposed_ = false;

  /**
   * @package
   * @type {boolean}
   */
  this.isComment = true;

  WorkspaceComment.fireCreateEvent(this);
};

/**
 * Dispose of this comment.
 * @package
 */
WorkspaceComment.prototype.dispose = function() {
  if (this.disposed_) {
    return;
  }

  if (eventUtils.isEnabled()) {
    eventUtils.fire(new (eventUtils.get(eventUtils.COMMENT_DELETE))(this));
  }

  // Remove from the list of top comments and the comment database.
  this.workspace.removeTopComment(this);
  this.disposed_ = true;
};

// Height, width, x, and y are all stored on even non-rendered comments, to
// preserve state if you pass the contents through a headless workspace.

/**
 * Get comment height.
 * @return {number} Comment height.
 * @package
 */
WorkspaceComment.prototype.getHeight = function() {
  return this.height_;
};

/**
 * Set comment height.
 * @param {number} height Comment height.
 * @package
 */
WorkspaceComment.prototype.setHeight = function(height) {
  this.height_ = height;
};

/**
 * Get comment width.
 * @return {number} Comment width.
 * @package
 */
WorkspaceComment.prototype.getWidth = function() {
  return this.width_;
};

/**
 * Set comment width.
 * @param {number} width comment width.
 * @package
 */
WorkspaceComment.prototype.setWidth = function(width) {
  this.width_ = width;
};

/**
 * Get stored location.
 * @return {!Coordinate} The comment's stored location.
 *   This is not valid if the comment is currently being dragged.
 * @package
 */
WorkspaceComment.prototype.getXY = function() {
  return new Coordinate(this.xy_.x, this.xy_.y);
};

/**
 * Move a comment by a relative offset.
 * @param {number} dx Horizontal offset, in workspace units.
 * @param {number} dy Vertical offset, in workspace units.
 * @package
 */
WorkspaceComment.prototype.moveBy = function(dx, dy) {
  const event = new (eventUtils.get(eventUtils.COMMENT_MOVE))(this);
  this.xy_.translate(dx, dy);
  event.recordNew();
  eventUtils.fire(event);
};

/**
 * Get whether this comment is deletable or not.
 * @return {boolean} True if deletable.
 * @package
 */
WorkspaceComment.prototype.isDeletable = function() {
  return this.deletable_ &&
      !(this.workspace && this.workspace.options.readOnly);
};

/**
 * Set whether this comment is deletable or not.
 * @param {boolean} deletable True if deletable.
 * @package
 */
WorkspaceComment.prototype.setDeletable = function(deletable) {
  this.deletable_ = deletable;
};

/**
 * Get whether this comment is movable or not.
 * @return {boolean} True if movable.
 * @package
 */
WorkspaceComment.prototype.isMovable = function() {
  return this.movable_ && !(this.workspace && this.workspace.options.readOnly);
};

/**
 * Set whether this comment is movable or not.
 * @param {boolean} movable True if movable.
 * @package
 */
WorkspaceComment.prototype.setMovable = function(movable) {
  this.movable_ = movable;
};

/**
 * Get whether this comment is editable or not.
 * @return {boolean} True if editable.
 */
WorkspaceComment.prototype.isEditable = function() {
  return this.editable_ && !(this.workspace && this.workspace.options.readOnly);
};

/**
 * Set whether this comment is editable or not.
 * @param {boolean} editable True if editable.
 */
WorkspaceComment.prototype.setEditable = function(editable) {
  this.editable_ = editable;
};

/**
 * Returns this comment's text.
 * @return {string} Comment text.
 * @package
 */
WorkspaceComment.prototype.getContent = function() {
  return this.content_;
};

/**
 * Set this comment's content.
 * @param {string} content Comment content.
 * @package
 */
WorkspaceComment.prototype.setContent = function(content) {
  if (this.content_ !== content) {
    eventUtils.fire(new (eventUtils.get(eventUtils.COMMENT_CHANGE))(
        this, this.content_, content));
    this.content_ = content;
  }
};

/**
 * Encode a comment subtree as XML with XY coordinates.
 * @param {boolean=} opt_noId True if the encoder should skip the comment ID.
 * @return {!Element} Tree of XML elements.
 * @package
 */
WorkspaceComment.prototype.toXmlWithXY = function(opt_noId) {
  const element = this.toXml(opt_noId);
  element.setAttribute('x', Math.round(this.xy_.x));
  element.setAttribute('y', Math.round(this.xy_.y));
  element.setAttribute('h', this.height_);
  element.setAttribute('w', this.width_);
  return element;
};

/**
 * Encode a comment subtree as XML, but don't serialize the XY coordinates.
 * This method avoids some expensive metrics-related calls that are made in
 * toXmlWithXY().
 * @param {boolean=} opt_noId True if the encoder should skip the comment ID.
 * @return {!Element} Tree of XML elements.
 * @package
 */
WorkspaceComment.prototype.toXml = function(opt_noId) {
  const commentElement = xml.createElement('comment');
  if (!opt_noId) {
    commentElement.id = this.id;
  }
  commentElement.textContent = this.getContent();
  return commentElement;
};

/**
 * Fire a create event for the given workspace comment, if comments are enabled.
 * @param {!WorkspaceComment} comment The comment that was just created.
 * @package
 */
WorkspaceComment.fireCreateEvent = function(comment) {
  if (eventUtils.isEnabled()) {
    const existingGroup = eventUtils.getGroup();
    if (!existingGroup) {
      eventUtils.setGroup(true);
    }
    try {
      eventUtils.fire(new (eventUtils.get(eventUtils.COMMENT_CREATE))(comment));
    } finally {
      if (!existingGroup) {
        eventUtils.setGroup(false);
      }
    }
  }
};

/**
 * Decode an XML comment tag and create a comment on the workspace.
 * @param {!Element} xmlComment XML comment element.
 * @param {!Workspace} workspace The workspace.
 * @return {!WorkspaceComment} The created workspace comment.
 * @package
 */
WorkspaceComment.fromXml = function(xmlComment, workspace) {
  const info = WorkspaceComment.parseAttributes(xmlComment);

  const comment =
      new WorkspaceComment(workspace, info.content, info.h, info.w, info.id);

  const commentX = parseInt(xmlComment.getAttribute('x'), 10);
  const commentY = parseInt(xmlComment.getAttribute('y'), 10);
  if (!isNaN(commentX) && !isNaN(commentY)) {
    comment.moveBy(commentX, commentY);
  }

  WorkspaceComment.fireCreateEvent(comment);
  return comment;
};

/**
 * Decode an XML comment tag and return the results in an object.
 * @param {!Element} xml XML comment element.
 * @return {{w: number, h: number, x: number, y: number, content: string}} An
 *     object containing the id, size, position, and comment string.
 * @package
 */
WorkspaceComment.parseAttributes = function(xml) {
  const xmlH = xml.getAttribute('h');
  const xmlW = xml.getAttribute('w');

  return {
    // @type {string}
    id: xml.getAttribute('id'),
    // The height of the comment in workspace units, or 100 if not specified.
    // @type {number}
    h: xmlH ? parseInt(xmlH, 10) : 100,
    // The width of the comment in workspace units, or 100 if not specified.
    // @type {number}
    w: xmlW ? parseInt(xmlW, 10) : 100,
    // The x position of the comment in workspace coordinates, or NaN if not
    // specified in the XML.
    // @type {number}
    x: parseInt(xml.getAttribute('x'), 10),
    // The y position of the comment in workspace coordinates, or NaN if not
    // specified in the XML.
    // @type {number}
    y: parseInt(xml.getAttribute('y'), 10),
    // @type {string}
    content: xml.textContent,
  };
};

exports.WorkspaceComment = WorkspaceComment;
