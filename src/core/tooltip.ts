/**
 * @license
 * Copyright 2011 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Library to create tooltips for Blockly.
 * First, call init() after onload.
 * Second, set the 'tooltip' property on any SVG element that needs a tooltip.
 * If the tooltip is a string, then that message will be displayed.
 * If the tooltip is an SVG element, then that object's tooltip will be used.
 * Third, call bindMouseEvents(e) passing the SVG element.
 * @namespace Blockly.Tooltip
 */

import blocklyString from 'blockly/core/utils/string';
import browserEvents from 'blockly/core/browser_events';
import common from 'blockly/core/common';
import deprecation from 'blockly/core/utils/deprecation';


/**
 * A type which can define a tooltip.
 * Either a string, an object containing a tooltip property, or a function which
 * returns either a string, or another arbitrarily nested function which
 * eventually unwinds to a string.
 * @typedef {string|{tooltip}|function(): (string|!Function)}
 * @alias Blockly.Tooltip.TipInfo
 */
let TipInfo;
exports.TipInfo = TipInfo;

/**
 * Is a tooltip currently showing?
 * @type {boolean}
 */
let visible = false;

/**
 * Returns whether or not a tooltip is showing
 * @returns {boolean} True if a tooltip is showing
 * @alias Blockly.Tooltip.isVisible
 */
export function isVisible() {
  return visible;
}

Object.defineProperties(exports, {
  /**
   * Is a tooltip currently showing?
   * @name Blockly.Tooltip.visible
   * @type {boolean}
   * @deprecated Use Blockly.Tooltip.isVisible() instead.  (September
   *     2021)
   * @suppress {checkTypes}
   */
  visible: {
    get: function() {
      deprecation.warn(
          'Blockly.Tooltip.visible', 'September 2021', 'September 2022',
          'Blockly.Tooltip.isVisible()');
      return isVisible();
    },
  },
});

/**
 * Is someone else blocking the tooltip from being shown?
 * @type {boolean}
 */
let blocked = false;

/**
 * Maximum width (in characters) of a tooltip.
 * @alias Blockly.Tooltip.LIMIT
 */
const LIMIT = 50;
exports.LIMIT = LIMIT;

/**
 * PID of suspended thread to clear tooltip on mouse out.
 */
let mouseOutPid = 0;

/**
 * PID of suspended thread to show the tooltip.
 */
let showPid = 0;

/**
 * Last observed X location of the mouse pointer (freezes when tooltip appears).
 */
let lastX = 0;

/**
 * Last observed Y location of the mouse pointer (freezes when tooltip appears).
 */
let lastY = 0;

/**
 * Current element being pointed at.
 * @type {Element}
 */
let element = null;

/**
 * Once a tooltip has opened for an element, that element is 'poisoned' and
 * cannot respawn a tooltip until the pointer moves over a different element.
 * @type {Element}
 */
let poisonedElement = null;

/**
 * Horizontal offset between mouse cursor and tooltip.
 * @alias Blockly.Tooltip.OFFSET_X
 */
const OFFSET_X = 0;
exports.OFFSET_X = OFFSET_X;

/**
 * Vertical offset between mouse cursor and tooltip.
 * @alias Blockly.Tooltip.OFFSET_Y
 */
const OFFSET_Y = 10;
exports.OFFSET_Y = OFFSET_Y;

/**
 * Radius mouse can move before killing tooltip.
 * @alias Blockly.Tooltip.RADIUS_OK
 */
const RADIUS_OK = 10;
exports.RADIUS_OK = RADIUS_OK;

/**
 * Delay before tooltip appears.
 * @alias Blockly.Tooltip.HOVER_MS
 */
const HOVER_MS = 750;
exports.HOVER_MS = HOVER_MS;

/**
 * Horizontal padding between tooltip and screen edge.
 * @alias Blockly.Tooltip.MARGINS
 */
const MARGINS = 5;
exports.MARGINS = MARGINS;

/**
 * The HTML container.  Set once by createDom.
 * @type {Element}
 */
let DIV = null;

/**
 * Returns the HTML tooltip container.
 * @returns {Element} The HTML tooltip container.
 * @alias Blockly.Tooltip.getDiv
 */
export function getDiv() {
  return DIV;
}

Object.defineProperties(exports, {
  /**
   * The HTML container.  Set once by createDom.
   * @name Blockly.Tooltip.DIV
   * @type {Element}
   * @deprecated Use Blockly.Tooltip.getDiv() and .setDiv().
   *     (September 2021)
   * @suppress {checkTypes}
   */
  DIV: {
    get: function() {
      deprecation.warn(
          'Blockly.Tooltip.DIV', 'September 2021', 'September 2022',
          'Blockly.Tooltip.getDiv()');
      return getDiv();
    },
  },
});

/**
 * Returns the tooltip text for the given element.
 * @param {?Object} object The object to get the tooltip text of.
 * @return {string} The tooltip text of the element.
 * @alias Blockly.Tooltip.getTooltipOfObject
 */
export function getTooltipOfObject(object) {
  const obj = getTargetObject(object);
  if (obj) {
    let tooltip = obj.tooltip;
    while (typeof tooltip === 'function') {
      tooltip = tooltip();
    }
    if (typeof tooltip !== 'string') {
      throw Error('Tooltip function must return a string.');
    }
    return tooltip;
  }
  return '';
}

/**
 * Returns the target object that the given object is targeting for its
 * tooltip. Could be the object itself.
 * @param {?Object} obj The object are trying to find the target tooltip
 *     object of.
 * @return {?{tooltip}} The target tooltip object.
 */
function getTargetObject(obj) {
  while (obj && obj.tooltip) {
    if ((typeof obj.tooltip === 'string') ||
        (typeof obj.tooltip === 'function')) {
      return obj;
    }
    obj = obj.tooltip;
  }
  return null;
}

/**
 * Create the tooltip div and inject it onto the page.
 * @alias Blockly.Tooltip.createDom
 */
export function createDom() {
  if (DIV) {
    return;  // Already created.
  }
  // Create an HTML container for popup overlays (e.g. editor widgets).
  DIV = document.createElement('div');
  DIV.className = 'blocklyTooltipDiv';
  const container = common.getParentContainer() || document.body;
  container.appendChild(DIV);
}

/**
 * Binds the required mouse events onto an SVG element.
 * @param {!Element} element SVG element onto which tooltip is to be bound.
 * @alias Blockly.Tooltip.bindMouseEvents
 */
export function bindMouseEvents(element) {
  element.mouseOverWrapper_ =
      browserEvents.bind(element, 'mouseover', null, onMouseOver);
  element.mouseOutWrapper_ =
      browserEvents.bind(element, 'mouseout', null, onMouseOut);

  // Don't use bindEvent_ for mousemove since that would create a
  // corresponding touch handler, even though this only makes sense in the
  // context of a mouseover/mouseout.
  element.addEventListener('mousemove', onMouseMove, false);
}

/**
 * Unbinds tooltip mouse events from the SVG element.
 * @param {!Element} element SVG element onto which tooltip is bound.
 * @alias Blockly.Tooltip.unbindMouseEvents
 */
export function unbindMouseEvents(element) {
  if (!element) {
    return;
  }
  browserEvents.unbind(element.mouseOverWrapper_);
  browserEvents.unbind(element.mouseOutWrapper_);
  element.removeEventListener('mousemove', onMouseMove);
}

/**
 * Hide the tooltip if the mouse is over a different object.
 * Initialize the tooltip to potentially appear for this object.
 * @param {!Event} e Mouse event.
 */
function onMouseOver(e) {
  if (blocked) {
    // Someone doesn't want us to show tooltips.
    return;
  }
  // If the tooltip is an object, treat it as a pointer to the next object in
  // the chain to look at.  Terminate when a string or function is found.
  const newElement = /** @type {Element} */ (getTargetObject(e.currentTarget));
  if (element !== newElement) {
    hide();
    poisonedElement = null;
    element = newElement;
  }
  // Forget about any immediately preceding mouseOut event.
  clearTimeout(mouseOutPid);
}

/**
 * Hide the tooltip if the mouse leaves the object and enters the workspace.
 * @param {!Event} _e Mouse event.
 */
function onMouseOut(_e) {
  if (blocked) {
    // Someone doesn't want us to show tooltips.
    return;
  }
  // Moving from one element to another (overlapping or with no gap) generates
  // a mouseOut followed instantly by a mouseOver.  Fork off the mouseOut
  // event and kill it if a mouseOver is received immediately.
  // This way the task only fully executes if mousing into the void.
  mouseOutPid = setTimeout(function() {
    element = null;
    poisonedElement = null;
    hide();
  }, 1);
  clearTimeout(showPid);
}

/**
 * When hovering over an element, schedule a tooltip to be shown.  If a tooltip
 * is already visible, hide it if the mouse strays out of a certain radius.
 * @param {!Event} e Mouse event.
 */
function onMouseMove(e) {
  if (!element || !element.tooltip) {
    // No tooltip here to show.
    return;
  } else if (blocked) {
    // Someone doesn't want us to show tooltips.  We are probably handling a
    // user gesture, such as a click or drag.
    return;
  }
  if (visible) {
    // Compute the distance between the mouse position when the tooltip was
    // shown and the current mouse position.  Pythagorean theorem.
    const dx = lastX - e.pageX;
    const dy = lastY - e.pageY;
    if (Math.sqrt(dx * dx + dy * dy) > RADIUS_OK) {
      hide();
    }
  } else if (poisonedElement !== element) {
    // The mouse moved, clear any previously scheduled tooltip.
    clearTimeout(showPid);
    // Maybe this time the mouse will stay put.  Schedule showing of tooltip.
    lastX = e.pageX;
    lastY = e.pageY;
    showPid = setTimeout(show, HOVER_MS);
  }
}

/**
 * Dispose of the tooltip.
 * @alias Blockly.Tooltip.dispose
 * @package
 */
export function dispose() {
  element = null;
  poisonedElement = null;
  hide();
}

/**
 * Hide the tooltip.
 * @alias Blockly.Tooltip.hide
 */
export function hide() {
  if (visible) {
    visible = false;
    if (DIV) {
      DIV.style.display = 'none';
    }
  }
  if (showPid) {
    clearTimeout(showPid);
  }
}

/**
 * Hide any in-progress tooltips and block showing new tooltips until the next
 * call to unblock().
 * @alias Blockly.Tooltip.block
 * @package
 */
export function block() {
  hide();
  blocked = true;
}

/**
 * Unblock tooltips: allow them to be scheduled and shown according to their own
 * logic.
 * @alias Blockly.Tooltip.unblock
 * @package
 */
export function unblock() {
  blocked = false;
}

/**
 * Create the tooltip and show it.
 */
const show = function() {
  if (blocked) {
    // Someone doesn't want us to show tooltips.
    return;
  }
  poisonedElement = element;
  if (!DIV) {
    return;
  }
  // Erase all existing text.
  DIV.textContent = '';
  let tip = getTooltipOfObject(element);
  tip = blocklyString.wrap(tip, LIMIT);
  // Create new text, line by line.
  const lines = tip.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(lines[i]));
    DIV.appendChild(div);
  }
  const rtl = /** @type {{RTL: boolean}} */ (element).RTL;
  const windowWidth = document.documentElement.clientWidth;
  const windowHeight = document.documentElement.clientHeight;
  // Display the tooltip.
  DIV.style.direction = rtl ? 'rtl' : 'ltr';
  DIV.style.display = 'block';
  visible = true;
  // Move the tooltip to just below the cursor.
  let anchorX = lastX;
  if (rtl) {
    anchorX -= OFFSET_X + DIV.offsetWidth;
  } else {
    anchorX += OFFSET_X;
  }
  let anchorY = lastY + OFFSET_Y;

  if (anchorY + DIV.offsetHeight > windowHeight + window.scrollY) {
    // Falling off the bottom of the screen; shift the tooltip up.
    anchorY -= DIV.offsetHeight + 2 * OFFSET_Y;
  }
  if (rtl) {
    // Prevent falling off left edge in RTL mode.
    anchorX = Math.max(MARGINS - window.scrollX, anchorX);
  } else {
    if (anchorX + DIV.offsetWidth >
        windowWidth + window.scrollX - 2 * MARGINS) {
      // Falling off the right edge of the screen;
      // clamp the tooltip on the edge.
      anchorX = windowWidth - DIV.offsetWidth - 2 * MARGINS;
    }
  }
  DIV.style.top = anchorY + 'px';
  DIV.style.left = anchorX + 'px';
};
