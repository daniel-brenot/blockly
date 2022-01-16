/**
 * @license
 * Copyright 2016 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Events fired as a result of actions in Blockly's editor.
 * @namespace Blockly.Events
 */

import Abstract from 'blockly/core/events/events_abstract';
import deprecation from 'blockly/core/utils/deprecation';
import eventUtils from 'blockly/core/events/utils';
import {BlockBase} from 'blockly/core/events/events_block_base';
import {BlockChange} from 'blockly/core/events/events_block_change';
import {BlockCreate} from 'blockly/core/events/events_block_create';
import {BlockDelete} from 'blockly/core/events/events_block_delete';
import {BlockDrag} from 'blockly/core/events/events_block_drag';
import {BlockMove} from 'blockly/core/events/events_block_move';
import {BubbleOpen} from 'blockly/core/events/events_bubble_open';
import {Click} from 'blockly/core/events/events_click';
import {CommentBase} from 'blockly/core/events/events_comment_base';
import {CommentChange} from 'blockly/core/events/events_comment_change';
import {CommentCreate} from 'blockly/core/events/events_comment_create';
import {CommentDelete} from 'blockly/core/events/events_comment_delete';
import {CommentMove} from 'blockly/core/events/events_comment_move';
import {FinishedLoading} from 'blockly/core/events/workspace_events';
import {MarkerMove} from 'blockly/core/events/events_marker_move';
import {Selected} from 'blockly/core/events/events_selected';
import {ThemeChange} from 'blockly/core/events/events_theme_change';
import {ToolboxItemSelect} from 'blockly/core/events/events_toolbox_item_select';
import {TrashcanOpen} from 'blockly/core/events/events_trashcan_open';
import {UiBase} from 'blockly/core/events/events_ui_base';
import {Ui} from 'blockly/core/events/events_ui';
import {VarBase} from 'blockly/core/events/events_var_base';
import {VarCreate} from 'blockly/core/events/events_var_create';
import {VarDelete} from 'blockly/core/events/events_var_delete';
import {VarRename} from 'blockly/core/events/events_var_rename';
import {ViewportChange} from 'blockly/core/events/events_viewport';


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
