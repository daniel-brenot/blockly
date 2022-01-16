/**
 * @license
 * Copyright 2011 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Functionality for the right-click context menus.
 * @namespace Blockly.ContextMenu
 */
goog.module('Blockly.ContextMenu');

import WidgetDiv from 'Blockly.WidgetDiv';
import Xml from 'Blockly.Xml';
import aria from 'Blockly.utils.aria';
import browserEvents from 'Blockly.browserEvents';
import clipboard from 'Blockly.clipboard';
import deprecation from 'Blockly.utils.deprecation';
import dom from 'Blockly.utils.dom';
import eventUtils from 'Blockly.Events.utils';
import internalConstants from 'Blockly.internalConstants';
import userAgent from 'Blockly.utils.userAgent';
import svgMath from 'Blockly.utils.svgMath';
import {Block} from 'Blockly.Block';
import {Coordinate} from 'Blockly.utils.Coordinate';
import {MenuItem} from 'Blockly.MenuItem';
import {Menu} from 'Blockly.Menu';
import {Msg} from 'Blockly.Msg';
import {Rect} from 'Blockly.utils.Rect';
import {WorkspaceCommentSvg} from 'Blockly.WorkspaceCommentSvg';
import {WorkspaceSvg} from 'Blockly.WorkspaceSvg';
goog.require('Blockly.Events.BlockCreate');


/**
 * Which block is the context menu attached to?
 * @type {?Block}
 */
let currentBlock = null;

/**
 * Gets the block the context menu is currently attached to.
 * @return {?Block} The block the context menu is attached to.
 * @alias Blockly.ContextMenu.getCurrentBlock
 */
export function getCurrentBlock() {
  return currentBlock;
}

/**
 * Sets the block the context menu is currently attached to.
 * @param {?Block} block The block the context menu is attached to.
 * @alias Blockly.ContextMenu.setCurrentBlock
 */
export function setCurrentBlock(block) {
  currentBlock = block;
}

// Add JS accessors for backwards compatibility.
Object.defineProperties(exports, {
  /**
   * Which block is the context menu attached to?
   * @name Blockly.ContextMenu.currentBlock
   * @type {Block}
   * @deprecated Use Blockly.Tooltip.getCurrentBlock() /
   *     .setCurrentBlock() instead.  (September 2021)
   * @suppress {checkTypes}
   */
  currentBlock: {
    get: function() {
      deprecation.warn(
          'Blockly.ContextMenu.currentBlock', 'September 2021',
          'September 2022', 'Blockly.Tooltip.getCurrentBlock()');
      return getCurrentBlock();
    },
    set: function(block) {
      deprecation.warn(
          'Blockly.ContextMenu.currentBlock', 'September 2021',
          'September 2022', 'Blockly.Tooltip.setCurrentBlock(block)');
      setCurrentBlock(block);
    },
  },
});

/**
 * Menu object.
 * @type {Menu}
 */
let menu_ = null;

/**
 * Construct the menu based on the list of options and show the menu.
 * @param {!Event} e Mouse event.
 * @param {!Array<!Object>} options Array of menu options.
 * @param {boolean} rtl True if RTL, false if LTR.
 * @alias Blockly.ContextMenu.show
 */
const show = function(e, options, rtl) {
  WidgetDiv.show(exports, rtl, dispose);
  if (!options.length) {
    hide();
    return;
  }
  const menu = populate_(options, rtl);
  menu_ = menu;

  position_(menu, e, rtl);
  // 1ms delay is required for focusing on context menus because some other
  // mouse event is still waiting in the queue and clears focus.
  setTimeout(function() {
    menu.focus();
  }, 1);
  currentBlock = null;  // May be set by Blockly.Block.
};
exports.show = show;

/**
 * Create the context menu object and populate it with the given options.
 * @param {!Array<!Object>} options Array of menu options.
 * @param {boolean} rtl True if RTL, false if LTR.
 * @return {!Menu} The menu that will be shown on right click.
 * @private
 */
function populate_(options, rtl) {
  /* Here's what one option object looks like:
    {text: 'Make It So',
     enabled: true,
     callback: Blockly.MakeItSo}
  */
  const menu = new Menu();
  menu.setRole(aria.Role.MENU);
  for (let i = 0; i < options.length; i++) {
    const option = options[i];
    const menuItem = new MenuItem(option.text);
    menuItem.setRightToLeft(rtl);
    menuItem.setRole(aria.Role.MENUITEM);
    menu.addChild(menuItem);
    menuItem.setEnabled(option.enabled);
    if (option.enabled) {
      const actionHandler = function(_menuItem) {
        // TODO: Create a type for option that can be used in an @this tag.
        /* eslint-disable-next-line no-invalid-this */
        const option = this;
        hide();
        option.callback(option.scope);
      };
      menuItem.onAction(actionHandler, option);
    }
  }
  return menu;
}

/**
 * Add the menu to the page and position it correctly.
 * @param {!Menu} menu The menu to add and position.
 * @param {!Event} e Mouse event for the right click that is making the context
 *     menu appear.
 * @param {boolean} rtl True if RTL, false if LTR.
 * @private
 */
const position_ = function(menu, e, rtl) {
  // Record windowSize and scrollOffset before adding menu.
  const viewportBBox = svgMath.getViewportBBox();
  // This one is just a point, but we'll pretend that it's a rect so we can use
  // some helper functions.
  const anchorBBox = new Rect(
      e.clientY + viewportBBox.top, e.clientY + viewportBBox.top,
      e.clientX + viewportBBox.left, e.clientX + viewportBBox.left);

  createWidget_(menu);
  const menuSize = menu.getSize();

  if (rtl) {
    anchorBBox.left += menuSize.width;
    anchorBBox.right += menuSize.width;
    viewportBBox.left += menuSize.width;
    viewportBBox.right += menuSize.width;
  }

  WidgetDiv.positionWithAnchor(viewportBBox, anchorBBox, menuSize, rtl);
  // Calling menuDom.focus() has to wait until after the menu has been placed
  // correctly.  Otherwise it will cause a page scroll to get the misplaced menu
  // in view.  See issue #1329.
  menu.focus();
};

/**
 * Create and render the menu widget inside Blockly's widget div.
 * @param {!Menu} menu The menu to add to the widget div.
 * @private
 */
function createWidget_(menu) {
  const div = WidgetDiv.getDiv();
  if (!div) {
    throw Error('Attempting to create a context menu when widget div is null');
  }
  menu.render(div);
  const menuDom = menu.getElement();
  dom.addClass(
      /** @type {!Element} */ (menuDom), 'blocklyContextMenu');
  // Prevent system context menu when right-clicking a Blockly context menu.
  browserEvents.conditionalBind(
      /** @type {!EventTarget} */ (menuDom), 'contextmenu', null,
      haltPropagation);
  // Focus only after the initial render to avoid issue #1329.
  menu.focus();
}

/**
 * Halts the propagation of the event without doing anything else.
 * @param {!Event} e An event.
 */
function haltPropagation(e) {
  // This event has been handled.  No need to bubble up to the document.
  e.preventDefault();
  e.stopPropagation();
}

/**
 * Hide the context menu.
 * @alias Blockly.ContextMenu.hide
 */
export function hide() {
  WidgetDiv.hideIfOwner(exports);
  currentBlock = null;
}

/**
 * Dispose of the menu.
 * @alias Blockly.ContextMenu.dispose
 */
export function dispose() {
  if (menu_) {
    menu_.dispose();
    menu_ = null;
  }
}

/**
 * Create a callback function that creates and configures a block,
 *   then places the new block next to the original.
 * @param {!Block} block Original block.
 * @param {!Element} xml XML representation of new block.
 * @return {!Function} Function that creates a block.
 * @alias Blockly.ContextMenu.callbackFactory
 */
export function callbackFactory(block, xml) {
  return function() {
    eventUtils.disable();
    let newBlock;
    try {
      newBlock = Xml.domToBlock(xml, block.workspace);
      // Move the new block next to the old block.
      const xy = block.getRelativeToSurfaceXY();
      if (block.RTL) {
        xy.x -= internalConstants.SNAP_RADIUS;
      } else {
        xy.x += internalConstants.SNAP_RADIUS;
      }
      xy.y += internalConstants.SNAP_RADIUS * 2;
      newBlock.moveBy(xy.x, xy.y);
    } finally {
      eventUtils.enable();
    }
    if (eventUtils.isEnabled() && !newBlock.isShadow()) {
      eventUtils.fire(new (eventUtils.get(eventUtils.BLOCK_CREATE))(newBlock));
    }
    newBlock.select();
  };
}

// Helper functions for creating context menu options.

/**
 * Make a context menu option for deleting the current workspace comment.
 * @param {!WorkspaceCommentSvg} comment The workspace comment where the
 *     right-click originated.
 * @return {!Object} A menu option, containing text, enabled, and a callback.
 * @alias Blockly.ContextMenu.commentDeleteOption
 * @package
 */
export function commentDeleteOption(comment) {
  const deleteOption = {
    text: Msg['REMOVE_COMMENT'],
    enabled: true,
    callback: function() {
      eventUtils.setGroup(true);
      comment.dispose();
      eventUtils.setGroup(false);
    },
  };
  return deleteOption;
}

/**
 * Make a context menu option for duplicating the current workspace comment.
 * @param {!WorkspaceCommentSvg} comment The workspace comment where the
 *     right-click originated.
 * @return {!Object} A menu option, containing text, enabled, and a callback.
 * @alias Blockly.ContextMenu.commentDuplicateOption
 * @package
 */
export function commentDuplicateOption(comment) {
  const duplicateOption = {
    text: Msg['DUPLICATE_COMMENT'],
    enabled: true,
    callback: function() {
      clipboard.duplicate(comment);
    },
  };
  return duplicateOption;
}

/**
 * Make a context menu option for adding a comment on the workspace.
 * @param {!WorkspaceSvg} ws The workspace where the right-click
 *     originated.
 * @param {!Event} e The right-click mouse event.
 * @return {!Object} A menu option, containing text, enabled, and a callback.
 * @package
 * @suppress {strictModuleDepCheck,checkTypes} Suppress checks while workspace
 *     comments are not bundled in.
 * @alias Blockly.ContextMenu.workspaceCommentOption
 */
const workspaceCommentOption = function(ws, e) {
  const WorkspaceCommentSvg = goog.module.get('Blockly.WorkspaceCommentSvg');
  if (!WorkspaceCommentSvg) {
    throw Error('Missing require for Blockly.WorkspaceCommentSvg');
  }
  // Helper function to create and position a comment correctly based on the
  // location of the mouse event.
  const addWsComment = function() {
    const comment = new WorkspaceCommentSvg(
        ws, Msg['WORKSPACE_COMMENT_DEFAULT_TEXT'],
        WorkspaceCommentSvg.DEFAULT_SIZE, WorkspaceCommentSvg.DEFAULT_SIZE);

    const injectionDiv = ws.getInjectionDiv();
    // Bounding rect coordinates are in client coordinates, meaning that they
    // are in pixels relative to the upper left corner of the visible browser
    // window.  These coordinates change when you scroll the browser window.
    const boundingRect = injectionDiv.getBoundingClientRect();

    // The client coordinates offset by the injection div's upper left corner.
    const clientOffsetPixels = new Coordinate(
        e.clientX - boundingRect.left, e.clientY - boundingRect.top);

    // The offset in pixels between the main workspace's origin and the upper
    // left corner of the injection div.
    const mainOffsetPixels = ws.getOriginOffsetInPixels();

    // The position of the new comment in pixels relative to the origin of the
    // main workspace.
    const finalOffset =
        Coordinate.difference(clientOffsetPixels, mainOffsetPixels);
    // The position of the new comment in main workspace coordinates.
    finalOffset.scale(1 / ws.scale);

    const commentX = finalOffset.x;
    const commentY = finalOffset.y;
    comment.moveBy(commentX, commentY);
    if (ws.rendered) {
      comment.initSvg();
      comment.render();
      comment.select();
    }
  };

  const wsCommentOption = {
    // Foreign objects don't work in IE.  Don't let the user create comments
    // that they won't be able to edit.
    enabled: !userAgent.IE,
  };
  wsCommentOption.text = Msg['ADD_COMMENT'];
  wsCommentOption.callback = function() {
    addWsComment();
  };
  return wsCommentOption;
};
exports.workspaceCommentOption = workspaceCommentOption;
