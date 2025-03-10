/**
 * @license
 * Copyright 2011 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Object representing a pair of scrollbars.
 * @class
 */

import dom from 'blockly/core/utils/dom';
import eventUtils from 'blockly/core/events/utils';
import {Metrics} from 'blockly/core/utils/metrics';
import {Scrollbar} from 'blockly/core/scrollbar';
import {Svg} from 'blockly/core/utils/svg';
import {WorkspaceSvg} from 'blockly/core/workspace_svg';


/**
 * Class for a pair of scrollbars.  Horizontal and vertical.
 * @param {!WorkspaceSvg} workspace Workspace to bind the scrollbars to.
 * @param {boolean=} addHorizontal Whether to add a horizontal scrollbar.
 *    Defaults to true.
 * @param {boolean=} addVertical Whether to add a vertical scrollbar. Defaults
 *    to true.
 * @param {string=} opt_class A class to be applied to these scrollbars.
 * @param {number=} opt_margin The margin to apply to these scrollbars.
 * @constructor
 * @alias Blockly.ScrollbarPair
 */
const ScrollbarPair = function(
    workspace, addHorizontal, addVertical, opt_class, opt_margin) {
  /**
   * The workspace this scrollbar pair is bound to.
   * @type {!WorkspaceSvg}
   * @private
   */
  this.workspace_ = workspace;

  addHorizontal = addHorizontal === undefined ? true : addHorizontal;
  addVertical = addVertical === undefined ? true : addVertical;
  const isPair = addHorizontal && addVertical;

  if (addHorizontal) {
    this.hScroll =
        new Scrollbar(workspace, true, isPair, opt_class, opt_margin);
  }
  if (addVertical) {
    this.vScroll =
        new Scrollbar(workspace, false, isPair, opt_class, opt_margin);
  }

  if (isPair) {
    this.corner_ = dom.createSvgElement(
        Svg.RECT, {
          'height': Scrollbar.scrollbarThickness,
          'width': Scrollbar.scrollbarThickness,
          'class': 'blocklyScrollbarBackground',
        },
        null);
    dom.insertAfter(this.corner_, workspace.getBubbleCanvas());
  }

  /**
   * Previously recorded metrics from the workspace.
   * @type {?Metrics}
   * @private
   */
  this.oldHostMetrics_ = null;
};

/**
 * Dispose of this pair of scrollbars.
 * Unlink from all DOM elements to prevent memory leaks.
 * @suppress {checkTypes}
 */
ScrollbarPair.prototype.dispose = function() {
  dom.removeNode(this.corner_);
  this.corner_ = null;
  this.workspace_ = null;
  this.oldHostMetrics_ = null;
  if (this.hScroll) {
    this.hScroll.dispose();
    this.hScroll = null;
  }
  if (this.vScroll) {
    this.vScroll.dispose();
    this.vScroll = null;
  }
};

/**
 * Recalculate both of the scrollbars' locations and lengths.
 * Also reposition the corner rectangle.
 */
ScrollbarPair.prototype.resize = function() {
  // Look up the host metrics once, and use for both scrollbars.
  const hostMetrics = this.workspace_.getMetrics();
  if (!hostMetrics) {
    // Host element is likely not visible.
    return;
  }

  // Only change the scrollbars if there has been a change in metrics.
  let resizeH = false;
  let resizeV = false;
  if (!this.oldHostMetrics_ ||
      this.oldHostMetrics_.viewWidth !== hostMetrics.viewWidth ||
      this.oldHostMetrics_.viewHeight !== hostMetrics.viewHeight ||
      this.oldHostMetrics_.absoluteTop !== hostMetrics.absoluteTop ||
      this.oldHostMetrics_.absoluteLeft !== hostMetrics.absoluteLeft) {
    // The window has been resized or repositioned.
    resizeH = true;
    resizeV = true;
  } else {
    // Has the content been resized or moved?
    if (!this.oldHostMetrics_ ||
        this.oldHostMetrics_.scrollWidth !== hostMetrics.scrollWidth ||
        this.oldHostMetrics_.viewLeft !== hostMetrics.viewLeft ||
        this.oldHostMetrics_.scrollLeft !== hostMetrics.scrollLeft) {
      resizeH = true;
    }
    if (!this.oldHostMetrics_ ||
        this.oldHostMetrics_.scrollHeight !== hostMetrics.scrollHeight ||
        this.oldHostMetrics_.viewTop !== hostMetrics.viewTop ||
        this.oldHostMetrics_.scrollTop !== hostMetrics.scrollTop) {
      resizeV = true;
    }
  }

  if (resizeH || resizeV) {
    try {
      eventUtils.disable();
      if (this.hScroll && resizeH) {
        this.hScroll.resize(hostMetrics);
      }
      if (this.vScroll && resizeV) {
        this.vScroll.resize(hostMetrics);
      }
    } finally {
      eventUtils.enable();
    }
    this.workspace_.maybeFireViewportChangeEvent();
  }

  if (this.hScroll && this.vScroll) {
    // Reposition the corner square.
    if (!this.oldHostMetrics_ ||
        this.oldHostMetrics_.viewWidth !== hostMetrics.viewWidth ||
        this.oldHostMetrics_.absoluteLeft !== hostMetrics.absoluteLeft) {
      this.corner_.setAttribute('x', this.vScroll.position.x);
    }
    if (!this.oldHostMetrics_ ||
        this.oldHostMetrics_.viewHeight !== hostMetrics.viewHeight ||
        this.oldHostMetrics_.absoluteTop !== hostMetrics.absoluteTop) {
      this.corner_.setAttribute('y', this.hScroll.position.y);
    }
  }

  // Cache the current metrics to potentially short-cut the next resize event.
  this.oldHostMetrics_ = hostMetrics;
};

/**
 * Returns whether scrolling horizontally is enabled.
 * @return {boolean} True if horizontal scroll is enabled.
 */
ScrollbarPair.prototype.canScrollHorizontally = function() {
  return !!this.hScroll;
};

/**
 * Returns whether scrolling vertically is enabled.
 * @return {boolean} True if vertical scroll is enabled.
 */
ScrollbarPair.prototype.canScrollVertically = function() {
  return !!this.vScroll;
};

/**
 * Record the origin of the workspace that the scrollbar is in, in pixels
 * relative to the injection div origin. This is for times when the scrollbar is
 * used in an object whose origin isn't the same as the main workspace
 * (e.g. in a flyout.)
 * @param {number} x The x coordinate of the scrollbar's origin, in CSS pixels.
 * @param {number} y The y coordinate of the scrollbar's origin, in CSS pixels.
 * @package
 */
ScrollbarPair.prototype.setOrigin = function(x, y) {
  if (this.hScroll) {
    this.hScroll.setOrigin(x, y);
  }
  if (this.vScroll) {
    this.vScroll.setOrigin(x, y);
  }
};

/**
 * Set the handles of both scrollbars.
 * @param {number} x The horizontal content displacement, relative to the view
 *    in pixels.
 * @param {number} y The vertical content displacement, relative to the view in
 *    pixels.
 * @param {boolean} updateMetrics Whether to update metrics on this set call.
 *    Defaults to true.
 */
ScrollbarPair.prototype.set = function(x, y, updateMetrics) {
  // This function is equivalent to:
  //   this.hScroll.set(x);
  //   this.vScroll.set(y);
  // However, that calls setMetrics twice which causes a chain of
  // getAttribute->setAttribute->getAttribute resulting in an extra layout pass.
  // Combining them speeds up rendering.
  if (this.hScroll) {
    this.hScroll.set(x, false);
  }
  if (this.vScroll) {
    this.vScroll.set(y, false);
  }

  if (updateMetrics || updateMetrics === undefined) {
    // Update metrics.
    const xyRatio = {};
    if (this.hScroll) {
      xyRatio.x = this.hScroll.getRatio_();
    }
    if (this.vScroll) {
      xyRatio.y = this.vScroll.getRatio_();
    }
    this.workspace_.setMetrics(xyRatio);
  }
};

/**
 * Set the handle of the horizontal scrollbar to be at a certain position in
 *    CSS pixels relative to its parents.
 * @param {number} x Horizontal scroll value.
 */
ScrollbarPair.prototype.setX = function(x) {
  if (this.hScroll) {
    this.hScroll.set(x, true);
  }
};

/**
 * Set the handle of the vertical scrollbar to be at a certain position in
 *    CSS pixels relative to its parents.
 * @param {number} y Vertical scroll value.
 */
ScrollbarPair.prototype.setY = function(y) {
  if (this.vScroll) {
    this.vScroll.set(y, true);
  }
};

/**
 * Set whether this scrollbar's container is visible.
 * @param {boolean} visible Whether the container is visible.
 */
ScrollbarPair.prototype.setContainerVisible = function(visible) {
  if (this.hScroll) {
    this.hScroll.setContainerVisible(visible);
  }
  if (this.vScroll) {
    this.vScroll.setContainerVisible(visible);
  }
};

/**
 * If any of the scrollbars are visible. Non-paired scrollbars may disappear
 * when they aren't needed.
 * @return {boolean} True if visible.
 */
ScrollbarPair.prototype.isVisible = function() {
  let isVisible = false;
  if (this.hScroll) {
    isVisible = this.hScroll.isVisible();
  }
  if (this.vScroll) {
    isVisible = isVisible || this.vScroll.isVisible();
  }
  return isVisible;
};

/**
 * Recalculates the scrollbars' locations within their path and length.
 * This should be called when the contents of the workspace have changed.
 * @param {!Metrics} hostMetrics A data structure describing all
 *     the required dimensions, possibly fetched from the host object.
 */
ScrollbarPair.prototype.resizeContent = function(hostMetrics) {
  if (this.hScroll) {
    this.hScroll.resizeContentHorizontal(hostMetrics);
  }
  if (this.vScroll) {
    this.vScroll.resizeContentVertical(hostMetrics);
  }
};

/**
 * Recalculates the scrollbars' locations on the screen and path length.
 * This should be called when the layout or size of the window has changed.
 * @param {!Metrics} hostMetrics A data structure describing all
 *     the required dimensions, possibly fetched from the host object.
 */
ScrollbarPair.prototype.resizeView = function(hostMetrics) {
  if (this.hScroll) {
    this.hScroll.resizeViewHorizontal(hostMetrics);
  }
  if (this.vScroll) {
    this.vScroll.resizeViewVertical(hostMetrics);
  }
};

exports.ScrollbarPair = ScrollbarPair;
