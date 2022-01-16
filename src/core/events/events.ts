/**
 * @license
 * Copyright 2016 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Events fired as a result of actions in Blockly's editor.
 * @namespace Blockly.Events
 */
goog.module('Blockly.Events');

import Abstract from 'Blockly.Events.Abstract';
import deprecation from 'Blockly.utils.deprecation';
import eventUtils from 'Blockly.Events.utils';
import {BlockBase} from 'Blockly.Events.BlockBase';
import {BlockChange} from 'Blockly.Events.BlockChange';
import {BlockCreate} from 'Blockly.Events.BlockCreate';
import {BlockDelete} from 'Blockly.Events.BlockDelete';
import {BlockDrag} from 'Blockly.Events.BlockDrag';
import {BlockMove} from 'Blockly.Events.BlockMove';
import {BubbleOpen} from 'Blockly.Events.BubbleOpen';
import {Click} from 'Blockly.Events.Click';
import {CommentBase} from 'Blockly.Events.CommentBase';
import {CommentChange} from 'Blockly.Events.CommentChange';
import {CommentCreate} from 'Blockly.Events.CommentCreate';
import {CommentDelete} from 'Blockly.Events.CommentDelete';
import {CommentMove} from 'Blockly.Events.CommentMove';
import {FinishedLoading} from 'Blockly.Events.FinishedLoading';
import {MarkerMove} from 'Blockly.Events.MarkerMove';
import {Selected} from 'Blockly.Events.Selected';
import {ThemeChange} from 'Blockly.Events.ThemeChange';
import {ToolboxItemSelect} from 'Blockly.Events.ToolboxItemSelect';
import {TrashcanOpen} from 'Blockly.Events.TrashcanOpen';
import {UiBase} from 'Blockly.Events.UiBase';
import {Ui} from 'Blockly.Events.Ui';
import {VarBase} from 'Blockly.Events.VarBase';
import {VarCreate} from 'Blockly.Events.VarCreate';
import {VarDelete} from 'Blockly.Events.VarDelete';
import {VarRename} from 'Blockly.Events.VarRename';
import {ViewportChange} from 'Blockly.Events.ViewportChange';


// Events.
exports.Abstract = Abstract;
exports.BubbleOpen = BubbleOpen;
exports.BlockBase = BlockBase;
exports.BlockChange = BlockChange;
exports.BlockCreate = BlockCreate;
exports.BlockDelete = BlockDelete;
exports.BlockDrag = BlockDrag;
exports.BlockMove = BlockMove;
exports.Click = Click;
exports.CommentBase = CommentBase;
exports.CommentChange = CommentChange;
exports.CommentCreate = CommentCreate;
exports.CommentDelete = CommentDelete;
exports.CommentMove = CommentMove;
exports.FinishedLoading = FinishedLoading;
exports.MarkerMove = MarkerMove;
exports.Selected = Selected;
exports.ThemeChange = ThemeChange;
exports.ToolboxItemSelect = ToolboxItemSelect;
exports.TrashcanOpen = TrashcanOpen;
exports.Ui = Ui;
exports.UiBase = UiBase;
exports.VarBase = VarBase;
exports.VarCreate = VarCreate;
exports.VarDelete = VarDelete;
exports.VarRename = VarRename;
exports.ViewportChange = ViewportChange;

// Event types.
exports.BLOCK_CHANGE = eventUtils.BLOCK_CHANGE;
exports.BLOCK_CREATE = eventUtils.BLOCK_CREATE;
exports.BLOCK_DELETE = eventUtils.BLOCK_DELETE;
exports.BLOCK_DRAG = eventUtils.BLOCK_DRAG;
exports.BLOCK_MOVE = eventUtils.BLOCK_MOVE;
exports.BUBBLE_OPEN = eventUtils.BUBBLE_OPEN;
exports.BumpEvent = eventUtils.BumpEvent;
exports.BUMP_EVENTS = eventUtils.BUMP_EVENTS;
exports.CHANGE = eventUtils.CHANGE;
exports.CLICK = eventUtils.CLICK;
exports.COMMENT_CHANGE = eventUtils.COMMENT_CHANGE;
exports.COMMENT_CREATE = eventUtils.COMMENT_CREATE;
exports.COMMENT_DELETE = eventUtils.COMMENT_DELETE;
exports.COMMENT_MOVE = eventUtils.COMMENT_MOVE;
exports.CREATE = eventUtils.CREATE;
exports.DELETE = eventUtils.DELETE;
exports.FINISHED_LOADING = eventUtils.FINISHED_LOADING;
exports.MARKER_MOVE = eventUtils.MARKER_MOVE;
exports.MOVE = eventUtils.MOVE;
exports.SELECTED = eventUtils.SELECTED;
exports.THEME_CHANGE = eventUtils.THEME_CHANGE;
exports.TOOLBOX_ITEM_SELECT = eventUtils.TOOLBOX_ITEM_SELECT;
exports.TRASHCAN_OPEN = eventUtils.TRASHCAN_OPEN;
exports.UI = eventUtils.UI;
exports.VAR_CREATE = eventUtils.VAR_CREATE;
exports.VAR_DELETE = eventUtils.VAR_DELETE;
exports.VAR_RENAME = eventUtils.VAR_RENAME;
exports.VIEWPORT_CHANGE = eventUtils.VIEWPORT_CHANGE;

// Event utils.
exports.clearPendingUndo = eventUtils.clearPendingUndo;
exports.disable = eventUtils.disable;
exports.enable = eventUtils.enable;
exports.filter = eventUtils.filter;
exports.fire = eventUtils.fire;
exports.fromJson = eventUtils.fromJson;
exports.getDescendantIds = eventUtils.getDescendantIds;
exports.get = eventUtils.get;
exports.getGroup = eventUtils.getGroup;
exports.getRecordUndo = eventUtils.getRecordUndo;
exports.isEnabled = eventUtils.isEnabled;
exports.setGroup = eventUtils.setGroup;
exports.setRecordUndo = eventUtils.setRecordUndo;
exports.disableOrphans = eventUtils.disableOrphans;

Object.defineProperties(exports, {
  /**
   * Sets whether the next event should be added to the undo stack.
   * @name Blockly.Evenents.recordUndo
   * @type {boolean}
   * @deprecated Use Blockly.Events.getRecordUndo() and
   *     .setRecordUndo().  (September 2021)
   * @suppress {checkTypes}
   */
  recordUndo: {
    get: function() {
      deprecation.warn(
          'Blockly.Events.recordUndo', 'September 2021', 'September 2022',
          'Blockly.Events.getRecordUndo()');
      return eventUtils.getRecordUndo();
    },
    set: function(record) {
      deprecation.warn(
          'Blockly.Events.recordUndo', 'September 2021', 'September 2022',
          'Blockly.Events.setRecordUndo()');
      eventUtils.setRecordUndo(record);
    },
  },
});
