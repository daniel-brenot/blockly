/**
 * @license
 * Copyright 2013 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * A div that floats on top of Blockly.  This singleton contains
 *     temporary HTML UI widgets that the user is currently interacting with.
 *     E.g. text input areas, color pickers, context menus.
 * @namespace Blockly.WidgetDiv
 */

import common from 'blockly/core/common';
import deprecation from 'blockly/core/utils/deprecation';
import dom from 'blockly/core/utils/dom';
import {Rect} from 'blockly/core/utils/rect';
import {Size} from 'blockly/core/utils/size';
import {WorkspaceSvg} from 'blockly/core/workspace_svg';


/**
 * The object currently using this container.
 * @type {Object}
 */
let owner = null;

/**
 * Optional cleanup function set by whichever object uses the widget.
 * @type {Function}
 */
let dispose = null;

/**
 * A class name representing the current owner's workspace renderer.
 * @type {string}
 */
let rendererClassName = '';

/**
 * A class name representing the current owner's workspace theme.
 * @type {string}
 */
let themeClassName = '';

/**
 * The HTML container for popup overlays (e.g. editor widgets).
 * @type {?Element}
 */
let DIV;

/**
 * Returns the HTML container for editor widgets.
 * @return {?Element} The editor widget container.
 * @alias Blockly.WidgetDiv.getDiv
 */
export function getDiv() {
  return DIV;
}

/**
 * Allows unit tests to reset the div.
 * @param {?Element} newDiv The new value for the DIV field.
 * @alias Blockly.WidgetDiv.testOnly_setDiv
 * @ignore
 */
export function testOnly_setDiv(newDiv) {
  DIV = newDiv;
}

Object.defineProperties(exports, {
  /**
   * The HTML container for popup overlays (e.g. editor widgets).
   * @name Blockly.WidgetDiv.DIV
   * @type {?Element}
   * @deprecated Use Blockly.WidgetDiv.getDiv() and .setDiv().
   *     (September 2021)
   * @suppress {checkTypes}
   */
  DIV: {
    get: function() {
      deprecation.warn(
          'Blockly.WidgetDiv.DIV', 'September 2021', 'September 2022',
          'Blockly.WidgetDiv.getDiv()');
      return getDiv();
    },
  },
});

/**
 * Create the widget div and inject it onto the page.
 * @alias Blockly.WidgetDiv.createDom
 */
export function createDom() {
  if (DIV) {
    return;  // Already created.
  }

  DIV = document.createElement('div');
  DIV.className = 'blocklyWidgetDiv';
  const container = common.getParentContainer() || document.body;
  container.appendChild(DIV);
}

/**
 * Initialize and display the widget div.  Close the old one if needed.
 * @param {!Object} newOwner The object that will be using this container.
 * @param {boolean} rtl Right-to-left (true) or left-to-right (false).
 * @param {Function} newDispose Optional cleanup function to be run when the
 *     widget is closed.
 * @alias Blockly.WidgetDiv.show
 */
export function show(newOwner, rtl, newDispose) {
  hide();
  owner = newOwner;
  dispose = newDispose;
  const div = DIV;
  div.style.direction = rtl ? 'rtl' : 'ltr';
  div.style.display = 'block';
  const mainWorkspace =
      /** @type {!WorkspaceSvg} */ (common.getMainWorkspace());
  rendererClassName = mainWorkspace.getRenderer().getClassName();
  themeClassName = mainWorkspace.getTheme().getClassName();
  dom.addClass(div, rendererClassName);
  dom.addClass(div, themeClassName);
}

/**
 * Destroy the widget and hide the div.
 * @alias Blockly.WidgetDiv.hide
 */
export function hide() {
  if (!isVisible()) {
    return;
  }
  owner = null;

  const div = DIV;
  div.style.display = 'none';
  div.style.left = '';
  div.style.top = '';
  dispose && dispose();
  dispose = null;
  div.textContent = '';

  if (rendererClassName) {
    dom.removeClass(div, rendererClassName);
    rendererClassName = '';
  }
  if (themeClassName) {
    dom.removeClass(div, themeClassName);
    themeClassName = '';
  }
  (/** @type {!WorkspaceSvg} */ (common.getMainWorkspace())).markFocused();
}

/**
 * Is the container visible?
 * @return {boolean} True if visible.
 * @alias Blockly.WidgetDiv.isVisible
 */
export function isVisible() {
  return !!owner;
}

/**
 * Destroy the widget and hide the div if it is being used by the specified
 * object.
 * @param {!Object} oldOwner The object that was using this container.
 * @alias Blockly.WidgetDiv.hideIfOwner
 */
export function hideIfOwner(oldOwner) {
  if (owner === oldOwner) {
    hide();
  }
}

/**
 * Set the widget div's position and height.  This function does nothing clever:
 * it will not ensure that your widget div ends up in the visible window.
 * @param {number} x Horizontal location (window coordinates, not body).
 * @param {number} y Vertical location (window coordinates, not body).
 * @param {number} height The height of the widget div (pixels).
 */
function positionInternal(x, y, height) {
  DIV.style.left = x + 'px';
  DIV.style.top = y + 'px';
  DIV.style.height = height + 'px';
}

/**
 * Position the widget div based on an anchor rectangle.
 * The widget should be placed adjacent to but not overlapping the anchor
 * rectangle.  The preferred position is directly below and aligned to the left
 * (LTR) or right (RTL) side of the anchor.
 * @param {!Rect} viewportBBox The bounding rectangle of the
 *     current viewport, in window coordinates.
 * @param {!Rect} anchorBBox The bounding rectangle of the anchor,
 *     in window coordinates.
 * @param {!Size} widgetSize The size of the widget that is inside
 *     the widget div, in window coordinates.
 * @param {boolean} rtl Whether the workspace is in RTL mode.  This determines
 *     horizontal alignment.
 * @alias Blockly.WidgetDiv.positionWithAnchor
 * @package
 */
export function positionWithAnchor(viewportBBox, anchorBBox, widgetSize, rtl) {
  const y = calculateY(viewportBBox, anchorBBox, widgetSize);
  const x = calculateX(viewportBBox, anchorBBox, widgetSize, rtl);

  if (y < 0) {
    positionInternal(x, 0, widgetSize.height + y);
  } else {
    positionInternal(x, y, widgetSize.height);
  }
}

/**
 * Calculate an x position (in window coordinates) such that the widget will not
 * be offscreen on the right or left.
 * @param {!Rect} viewportBBox The bounding rectangle of the
 *     current viewport, in window coordinates.
 * @param {!Rect} anchorBBox The bounding rectangle of the anchor,
 *     in window coordinates.
 * @param {!Size} widgetSize The dimensions of the widget inside
 *     the widget div.
 * @param {boolean} rtl Whether the Blockly workspace is in RTL mode.
 * @return {number} A valid x-coordinate for the top left corner of the widget
 *     div, in window coordinates.
 */
function calculateX(viewportBBox, anchorBBox, widgetSize, rtl) {
  if (rtl) {
    // Try to align the right side of the field and the right side of widget.
    const widgetLeft = anchorBBox.right - widgetSize.width;
    // Don't go offscreen left.
    const x = Math.max(widgetLeft, viewportBBox.left);
    // But really don't go offscreen right:
    return Math.min(x, viewportBBox.right - widgetSize.width);
  } else {
    // Try to align the left side of the field and the left side of widget.
    // Don't go offscreen right.
    const x = Math.min(anchorBBox.left, viewportBBox.right - widgetSize.width);
    // But left is more important, because that's where the text is.
    return Math.max(x, viewportBBox.left);
  }
}

/**
 * Calculate a y position (in window coordinates) such that the widget will not
 * be offscreen on the top or bottom.
 * @param {!Rect} viewportBBox The bounding rectangle of the
 *     current viewport, in window coordinates.
 * @param {!Rect} anchorBBox The bounding rectangle of the anchor,
 *     in window coordinates.
 * @param {!Size} widgetSize The dimensions of the widget inside
 *     the widget div.
 * @return {number} A valid y-coordinate for the top left corner of the widget
 *     div, in window coordinates.
 */
function calculateY(viewportBBox, anchorBBox, widgetSize) {
  // Flip the widget vertically if off the bottom.
  if (anchorBBox.bottom + widgetSize.height >= viewportBBox.bottom) {
    // The bottom of the widget is at the top of the field.
    return anchorBBox.top - widgetSize.height;
    // The widget could go off the top of the window, but it would also go off
    // the bottom.  The window is just too small.
  } else {
    // The top of the widget is at the bottom of the field.
    return anchorBBox.bottom;
  }
}
