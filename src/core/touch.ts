/**
 * @license
 * Copyright 2016 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Touch handling for Blockly.
 * @namespace Blockly.Touch
 */

import internalConstants from 'blockly/core/internal_constants';
import utilsString from 'blockly/core/utils/string';
import {Gesture} from 'blockly/core/gesture';
import {globalThis} from 'blockly/core/utils/global';


/**
 * Whether touch is enabled in the browser.
 * Copied from Closure's goog.events.BrowserFeature.TOUCH_ENABLED
 * @const
 */
const TOUCH_ENABLED =
    ('ontouchstart' in globalThis ||
     !!(globalThis['document'] && document.documentElement &&
        'ontouchstart' in document.documentElement) ||
     // IE10 uses non-standard touch events, so it has a different check.
     !!(globalThis['navigator'] &&
        (globalThis['navigator']['maxTouchPoints'] ||
         globalThis['navigator']['msMaxTouchPoints'])));
exports.TOUCH_ENABLED = TOUCH_ENABLED;

/**
 * Which touch events are we currently paying attention to?
 * @type {?string}
 */
let touchIdentifier_ = null;

/**
 * The TOUCH_MAP lookup dictionary specifies additional touch events to fire,
 * in conjunction with mouse events.
 * @type {Object}
 * @alias Blockly.Touch.TOUCH_MAP
 */
let TOUCH_MAP = {};
if (globalThis['PointerEvent']) {
  TOUCH_MAP = {
    'mousedown': ['pointerdown'],
    'mouseenter': ['pointerenter'],
    'mouseleave': ['pointerleave'],
    'mousemove': ['pointermove'],
    'mouseout': ['pointerout'],
    'mouseover': ['pointerover'],
    'mouseup': ['pointerup', 'pointercancel'],
    'touchend': ['pointerup'],
    'touchcancel': ['pointercancel'],
  };
} else if (TOUCH_ENABLED) {
  TOUCH_MAP = {
    'mousedown': ['touchstart'],
    'mousemove': ['touchmove'],
    'mouseup': ['touchend', 'touchcancel'],
  };
}
exports.TOUCH_MAP = TOUCH_MAP;

/**
 * PID of queued long-press task.
 */
let longPid_ = 0;

/**
 * Context menus on touch devices are activated using a long-press.
 * Unfortunately the contextmenu touch event is currently (2015) only supported
 * by Chrome.  This function is fired on any touchstart event, queues a task,
 * which after about a second opens the context menu.  The tasks is killed
 * if the touch event terminates early.
 * @param {!Event} e Touch start event.
 * @param {Gesture} gesture The gesture that triggered this longStart.
 * @alias Blockly.Touch.longStart
 * @package
 */
export function longStart(e, gesture) {
  longStop();
  // Punt on multitouch events.
  if (e.changedTouches && e.changedTouches.length !== 1) {
    return;
  }
  longPid_ = setTimeout(function() {
    // Additional check to distinguish between touch events and pointer events
    if (e.changedTouches) {
      // TouchEvent
      e.button = 2;  // Simulate a right button click.
      // e was a touch event.  It needs to pretend to be a mouse event.
      e.clientX = e.changedTouches[0].clientX;
      e.clientY = e.changedTouches[0].clientY;
    }

    // Let the gesture route the right-click correctly.
    if (gesture) {
      gesture.handleRightClick(e);
    }
  }, internalConstants.LONGPRESS);
}

/**
 * Nope, that's not a long-press.  Either touchend or touchcancel was fired,
 * or a drag hath begun.  Kill the queued long-press task.
 * @alias Blockly.Touch.longStop
 * @package
 */
export function longStop() {
  if (longPid_) {
    clearTimeout(longPid_);
    longPid_ = 0;
  }
}

/**
 * Clear the touch identifier that tracks which touch stream to pay attention
 * to.  This ends the current drag/gesture and allows other pointers to be
 * captured.
 * @alias Blockly.Touch.clearTouchIdentifier
 */
export function clearTouchIdentifier() {
  touchIdentifier_ = null;
}

/**
 * Decide whether Blockly should handle or ignore this event.
 * Mouse and touch events require special checks because we only want to deal
 * with one touch stream at a time.  All other events should always be handled.
 * @param {!Event} e The event to check.
 * @return {boolean} True if this event should be passed through to the
 *     registered handler; false if it should be blocked.
 * @alias Blockly.Touch.shouldHandleEvent
 */
export function shouldHandleEvent(e) {
  return !isMouseOrTouchEvent(e) || checkTouchIdentifier(e);
}

/**
 * Get the touch identifier from the given event.  If it was a mouse event, the
 * identifier is the string 'mouse'.
 * @param {!Event} e Mouse event or touch event.
 * @return {string} The touch identifier from the first changed touch, if
 *     defined.  Otherwise 'mouse'.
 * @alias Blockly.Touch.getTouchIdentifierFromEvent
 */
export function getTouchIdentifierFromEvent(e) {
  return e.pointerId !== undefined ? e.pointerId :
      (e.changedTouches && e.changedTouches[0] &&
       e.changedTouches[0].identifier !== undefined &&
       e.changedTouches[0].identifier !== null) ?
                                     e.changedTouches[0].identifier :
                                     'mouse';
}

/**
 * Check whether the touch identifier on the event matches the current saved
 * identifier.  If there is no identifier, that means it's a mouse event and
 * we'll use the identifier "mouse".  This means we won't deal well with
 * multiple mice being used at the same time.  That seems okay.
 * If the current identifier was unset, save the identifier from the
 * event.  This starts a drag/gesture, during which touch events with other
 * identifiers will be silently ignored.
 * @param {!Event} e Mouse event or touch event.
 * @return {boolean} Whether the identifier on the event matches the current
 *     saved identifier.
 * @alias Blockly.Touch.checkTouchIdentifier
 */
export function checkTouchIdentifier(e) {
  const identifier = getTouchIdentifierFromEvent(e);

  // if (touchIdentifier_) is insufficient because Android touch
  // identifiers may be zero.
  if (touchIdentifier_ !== undefined && touchIdentifier_ !== null) {
    // We're already tracking some touch/mouse event.  Is this from the same
    // source?
    return touchIdentifier_ === identifier;
  }
  if (e.type === 'mousedown' || e.type === 'touchstart' ||
      e.type === 'pointerdown') {
    // No identifier set yet, and this is the start of a drag.  Set it and
    // return.
    touchIdentifier_ = identifier;
    return true;
  }
  // There was no identifier yet, but this wasn't a start event so we're going
  // to ignore it.  This probably means that another drag finished while this
  // pointer was down.
  return false;
}

/**
 * Set an event's clientX and clientY from its first changed touch.  Use this to
 * make a touch event work in a mouse event handler.
 * @param {!Event} e A touch event.
 * @alias Blockly.Touch.setClientFromTouch
 */
export function setClientFromTouch(e) {
  if (utilsString.startsWith(e.type, 'touch')) {
    // Map the touch event's properties to the event.
    const touchPoint = e.changedTouches[0];
    e.clientX = touchPoint.clientX;
    e.clientY = touchPoint.clientY;
  }
}

/**
 * Check whether a given event is a mouse or touch event.
 * @param {!Event} e An event.
 * @return {boolean} True if it is a mouse or touch event; false otherwise.
 * @alias Blockly.Touch.isMouseOrTouchEvent
 */
export function isMouseOrTouchEvent(e) {
  return utilsString.startsWith(e.type, 'touch') ||
      utilsString.startsWith(e.type, 'mouse') ||
      utilsString.startsWith(e.type, 'pointer');
}

/**
 * Check whether a given event is a touch event or a pointer event.
 * @param {!Event} e An event.
 * @return {boolean} True if it is a touch event; false otherwise.
 * @alias Blockly.Touch.isTouchEvent
 */
export function isTouchEvent(e) {
  return utilsString.startsWith(e.type, 'touch') ||
      utilsString.startsWith(e.type, 'pointer');
}

/**
 * Split an event into an array of events, one per changed touch or mouse
 * point.
 * @param {!Event} e A mouse event or a touch event with one or more changed
 * touches.
 * @return {!Array<!Event>} An array of mouse or touch events.  Each touch
 *     event will have exactly one changed touch.
 * @alias Blockly.Touch.splitEventByTouches
 */
export function splitEventByTouches(e) {
  const events = [];
  if (e.changedTouches) {
    for (let i = 0; i < e.changedTouches.length; i++) {
      const newEvent = {
        type: e.type,
        changedTouches: [e.changedTouches[i]],
        target: e.target,
        stopPropagation: function() {
          e.stopPropagation();
        },
        preventDefault: function() {
          e.preventDefault();
        },
      };
      events[i] = newEvent;
    }
  } else {
    events.push(e);
  }
  return events;
}
