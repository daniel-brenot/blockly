/**
 * @license
 * Copyright 2015 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Object representing a zoom icons.
 * @class
 */

import Css from 'blockly/core/css';
import Touch from 'blockly/core/touch';
import browserEvents from 'blockly/core/browser_events';
import dom from 'blockly/core/utils/dom';
import eventUtils from 'blockly/core/events/utils';
import internalConstants from 'blockly/core/internal_constants';
import uiPosition from 'blockly/core/positionable_helpers';
import {ComponentManager} from 'blockly/core/component_manager';
import {IPositionable} from 'blockly/core/interfaces/i_positionable';
import {MetricsManager} from 'blockly/core/metrics_manager';
import {Rect} from 'blockly/core/utils/rect';
import {Size} from 'blockly/core/utils/size';
import {Svg} from 'blockly/core/utils/svg';
import {WorkspaceSvg} from 'blockly/core/workspace_svg';
goog.require('blockly/core/events/events_click');


/**
 * Class for a zoom controls.
 * @param {!WorkspaceSvg} workspace The workspace to sit in.
 * @constructor
 * @implements {IPositionable}
 * @alias Blockly.ZoomControls
 */
const ZoomControls = function(workspace) {
  /**
   * @type {!WorkspaceSvg}
   * @private
   */
  this.workspace_ = workspace;

  /**
   * The unique id for this component that is used to register with the
   * ComponentManager.
   * @type {string}
   */
  this.id = 'zoomControls';

  /**
   * A handle to use to unbind the mouse down event handler for zoom reset
   *    button. Opaque data returned from browserEvents.conditionalBind.
   * @type {?browserEvents.Data}
   * @private
   */
  this.onZoomResetWrapper_ = null;

  /**
   * A handle to use to unbind the mouse down event handler for zoom in button.
   * Opaque data returned from browserEvents.conditionalBind.
   * @type {?browserEvents.Data}
   * @private
   */
  this.onZoomInWrapper_ = null;

  /**
   * A handle to use to unbind the mouse down event handler for zoom out button.
   * Opaque data returned from browserEvents.conditionalBind.
   * @type {?browserEvents.Data}
   * @private
   */
  this.onZoomOutWrapper_ = null;

  /**
   * The zoom in svg <g> element.
   * @type {SVGGElement}
   * @private
   */
  this.zoomInGroup_ = null;

  /**
   * The zoom out svg <g> element.
   * @type {SVGGElement}
   * @private
   */
  this.zoomOutGroup_ = null;

  /**
   * The zoom reset svg <g> element.
   * @type {SVGGElement}
   * @private
   */
  this.zoomResetGroup_ = null;
};

/**
 * Width of the zoom controls.
 * @type {number}
 * @const
 * @private
 */
ZoomControls.prototype.WIDTH_ = 32;

/**
 * Height of each zoom control.
 * @type {number}
 * @const
 * @private
 */
ZoomControls.prototype.HEIGHT_ = 32;

/**
 * Small spacing used between the zoom in and out control, in pixels.
 * @type {number}
 * @const
 * @private
 */
ZoomControls.prototype.SMALL_SPACING_ = 2;

/**
 * Large spacing used between the zoom in and reset control, in pixels.
 * @type {number}
 * @const
 * @private
 */
ZoomControls.prototype.LARGE_SPACING_ = 11;

/**
 * Distance between zoom controls and bottom or top edge of workspace.
 * @type {number}
 * @const
 * @private
 */
ZoomControls.prototype.MARGIN_VERTICAL_ = 20;

/**
 * Distance between zoom controls and right or left edge of workspace.
 * @type {number}
 * @private
 */
ZoomControls.prototype.MARGIN_HORIZONTAL_ = 20;

/**
 * The SVG group containing the zoom controls.
 * @type {SVGElement}
 * @private
 */
ZoomControls.prototype.svgGroup_ = null;

/**
 * Left coordinate of the zoom controls.
 * @type {number}
 * @private
 */
ZoomControls.prototype.left_ = 0;

/**
 * Top coordinate of the zoom controls.
 * @type {number}
 * @private
 */
ZoomControls.prototype.top_ = 0;

/**
 * Whether this has been initialized.
 * @type {boolean}
 * @private
 */
ZoomControls.prototype.initialized_ = false;

/**
 * Create the zoom controls.
 * @return {!SVGElement} The zoom controls SVG group.
 */
ZoomControls.prototype.createDom = function() {
  this.svgGroup_ = dom.createSvgElement(Svg.G, {}, null);

  // Each filter/pattern needs a unique ID for the case of multiple Blockly
  // instances on a page.  Browser behaviour becomes undefined otherwise.
  // https://neil.fraser.name/news/2015/11/01/
  const rnd = String(Math.random()).substring(2);
  this.createZoomOutSvg_(rnd);
  this.createZoomInSvg_(rnd);
  if (this.workspace_.isMovable()) {
    // If we zoom to the center and the workspace isn't movable we could
    // loose blocks at the edges of the workspace.
    this.createZoomResetSvg_(rnd);
  }
  return this.svgGroup_;
};

/**
 * Initializes the zoom controls.
 */
ZoomControls.prototype.init = function() {
  this.workspace_.getComponentManager().addComponent({
    component: this,
    weight: 2,
    capabilities: [ComponentManager.Capability.POSITIONABLE],
  });
  this.initialized_ = true;
};

/**
 * Disposes of this zoom controls.
 * Unlink from all DOM elements to prevent memory leaks.
 */
ZoomControls.prototype.dispose = function() {
  this.workspace_.getComponentManager().removeComponent('zoomControls');
  if (this.svgGroup_) {
    dom.removeNode(this.svgGroup_);
  }
  if (this.onZoomResetWrapper_) {
    browserEvents.unbind(this.onZoomResetWrapper_);
  }
  if (this.onZoomInWrapper_) {
    browserEvents.unbind(this.onZoomInWrapper_);
  }
  if (this.onZoomOutWrapper_) {
    browserEvents.unbind(this.onZoomOutWrapper_);
  }
};

/**
 * Returns the bounding rectangle of the UI element in pixel units relative to
 * the Blockly injection div.
 * @return {?Rect} The UI elements's bounding box. Null if
 *   bounding box should be ignored by other UI elements.
 */
ZoomControls.prototype.getBoundingRectangle = function() {
  let height = this.SMALL_SPACING_ + 2 * this.HEIGHT_;
  if (this.zoomResetGroup_) {
    height += this.LARGE_SPACING_ + this.HEIGHT_;
  }
  const bottom = this.top_ + height;
  const right = this.left_ + this.WIDTH_;
  return new Rect(this.top_, bottom, this.left_, right);
};


/**
 * Positions the zoom controls.
 * It is positioned in the opposite corner to the corner the
 * categories/toolbox starts at.
 * @param {!MetricsManager.UiMetrics} metrics The workspace metrics.
 * @param {!Array<!Rect>} savedPositions List of rectangles that
 *     are already on the workspace.
 */
ZoomControls.prototype.position = function(metrics, savedPositions) {
  // Not yet initialized.
  if (!this.initialized_) {
    return;
  }

  const cornerPosition =
      uiPosition.getCornerOppositeToolbox(this.workspace_, metrics);
  let height = this.SMALL_SPACING_ + 2 * this.HEIGHT_;
  if (this.zoomResetGroup_) {
    height += this.LARGE_SPACING_ + this.HEIGHT_;
  }
  const startRect = uiPosition.getStartPositionRect(
      cornerPosition, new Size(this.WIDTH_, height), this.MARGIN_HORIZONTAL_,
      this.MARGIN_VERTICAL_, metrics, this.workspace_);

  const verticalPosition = cornerPosition.vertical;
  const bumpDirection = verticalPosition === uiPosition.verticalPosition.TOP ?
      uiPosition.bumpDirection.DOWN :
      uiPosition.bumpDirection.UP;
  const positionRect = uiPosition.bumpPositionRect(
      startRect, this.MARGIN_VERTICAL_, bumpDirection, savedPositions);

  if (verticalPosition === uiPosition.verticalPosition.TOP) {
    const zoomInTranslateY = this.SMALL_SPACING_ + this.HEIGHT_;
    this.zoomInGroup_.setAttribute(
        'transform', 'translate(0, ' + zoomInTranslateY + ')');
    if (this.zoomResetGroup_) {
      const zoomResetTranslateY =
          zoomInTranslateY + this.LARGE_SPACING_ + this.HEIGHT_;
      this.zoomResetGroup_.setAttribute(
          'transform', 'translate(0, ' + zoomResetTranslateY + ')');
    }
  } else {
    const zoomInTranslateY =
        this.zoomResetGroup_ ? this.LARGE_SPACING_ + this.HEIGHT_ : 0;
    this.zoomInGroup_.setAttribute(
        'transform', 'translate(0, ' + zoomInTranslateY + ')');
    const zoomOutTranslateY =
        zoomInTranslateY + this.SMALL_SPACING_ + this.HEIGHT_;
    this.zoomOutGroup_.setAttribute(
        'transform', 'translate(0, ' + zoomOutTranslateY + ')');
  }

  this.top_ = positionRect.top;
  this.left_ = positionRect.left;
  this.svgGroup_.setAttribute(
      'transform', 'translate(' + this.left_ + ',' + this.top_ + ')');
};

/**
 * Create the zoom in icon and its event handler.
 * @param {string} rnd The random string to use as a suffix in the clip path's
 *     ID.  These IDs must be unique in case there are multiple Blockly
 *     instances on the same page.
 * @private
 */
ZoomControls.prototype.createZoomOutSvg_ = function(rnd) {
  /* This markup will be generated and added to the .svgGroup_:
  <g class="blocklyZoom">
    <clipPath id="blocklyZoomoutClipPath837493">
      <rect width="32" height="32></rect>
    </clipPath>
    <image width="96" height="124" x="-64" y="-92"
  xlink:href="media/sprites.png"
        clip-path="url(#blocklyZoomoutClipPath837493)"></image>
  </g>
  */
  this.zoomOutGroup_ =
      dom.createSvgElement(Svg.G, {'class': 'blocklyZoom'}, this.svgGroup_);
  const clip = dom.createSvgElement(
      Svg.CLIPPATH, {'id': 'blocklyZoomoutClipPath' + rnd}, this.zoomOutGroup_);
  dom.createSvgElement(
      Svg.RECT, {
        'width': 32,
        'height': 32,
      },
      clip);
  const zoomoutSvg = dom.createSvgElement(
      Svg.IMAGE, {
        'width': internalConstants.SPRITE.width,
        'height': internalConstants.SPRITE.height,
        'x': -64,
        'y': -92,
        'clip-path': 'url(#blocklyZoomoutClipPath' + rnd + ')',
      },
      this.zoomOutGroup_);
  zoomoutSvg.setAttributeNS(
      dom.XLINK_NS, 'xlink:href',
      this.workspace_.options.pathToMedia + internalConstants.SPRITE.url);

  // Attach listener.
  this.onZoomOutWrapper_ = browserEvents.conditionalBind(
      this.zoomOutGroup_, 'mousedown', null, this.zoom_.bind(this, -1));
};

/**
 * Create the zoom out icon and its event handler.
 * @param {string} rnd The random string to use as a suffix in the clip path's
 *     ID.  These IDs must be unique in case there are multiple Blockly
 *     instances on the same page.
 * @private
 */
ZoomControls.prototype.createZoomInSvg_ = function(rnd) {
  /* This markup will be generated and added to the .svgGroup_:
  <g class="blocklyZoom">
    <clipPath id="blocklyZoominClipPath837493">
      <rect width="32" height="32"></rect>
    </clipPath>
    <image width="96" height="124" x="-32" y="-92"
  xlink:href="media/sprites.png"
        clip-path="url(#blocklyZoominClipPath837493)"></image>
  </g>
  */
  this.zoomInGroup_ =
      dom.createSvgElement(Svg.G, {'class': 'blocklyZoom'}, this.svgGroup_);
  const clip = dom.createSvgElement(
      Svg.CLIPPATH, {'id': 'blocklyZoominClipPath' + rnd}, this.zoomInGroup_);
  dom.createSvgElement(
      Svg.RECT, {
        'width': 32,
        'height': 32,
      },
      clip);
  const zoominSvg = dom.createSvgElement(
      Svg.IMAGE, {
        'width': internalConstants.SPRITE.width,
        'height': internalConstants.SPRITE.height,
        'x': -32,
        'y': -92,
        'clip-path': 'url(#blocklyZoominClipPath' + rnd + ')',
      },
      this.zoomInGroup_);
  zoominSvg.setAttributeNS(
      dom.XLINK_NS, 'xlink:href',
      this.workspace_.options.pathToMedia + internalConstants.SPRITE.url);

  // Attach listener.
  this.onZoomInWrapper_ = browserEvents.conditionalBind(
      this.zoomInGroup_, 'mousedown', null, this.zoom_.bind(this, 1));
};

/**
 * Handles a mouse down event on the zoom in or zoom out buttons on the
 *    workspace.
 * @param {number} amount Amount of zooming. Negative amount values zoom out,
 *    and positive amount values zoom in.
 * @param {!Event} e A mouse down event.
 * @private
 */
ZoomControls.prototype.zoom_ = function(amount, e) {
  this.workspace_.markFocused();
  this.workspace_.zoomCenter(amount);
  this.fireZoomEvent_();
  Touch.clearTouchIdentifier();  // Don't block future drags.
  e.stopPropagation();           // Don't start a workspace scroll.
  e.preventDefault();            // Stop double-clicking from selecting text.
};

/**
 * Create the zoom reset icon and its event handler.
 * @param {string} rnd The random string to use as a suffix in the clip path's
 *     ID.  These IDs must be unique in case there are multiple Blockly
 *     instances on the same page.
 * @private
 */
ZoomControls.prototype.createZoomResetSvg_ = function(rnd) {
  /* This markup will be generated and added to the .svgGroup_:
  <g class="blocklyZoom">
    <clipPath id="blocklyZoomresetClipPath837493">
      <rect width="32" height="32"></rect>
    </clipPath>
    <image width="96" height="124" x="-32" y="-92"
  xlink:href="media/sprites.png"
        clip-path="url(#blocklyZoomresetClipPath837493)"></image>
  </g>
  */
  this.zoomResetGroup_ =
      dom.createSvgElement(Svg.G, {'class': 'blocklyZoom'}, this.svgGroup_);
  const clip = dom.createSvgElement(
      Svg.CLIPPATH, {'id': 'blocklyZoomresetClipPath' + rnd},
      this.zoomResetGroup_);
  dom.createSvgElement(Svg.RECT, {'width': 32, 'height': 32}, clip);
  const zoomresetSvg = dom.createSvgElement(
      Svg.IMAGE, {
        'width': internalConstants.SPRITE.width,
        'height': internalConstants.SPRITE.height,
        'y': -92,
        'clip-path': 'url(#blocklyZoomresetClipPath' + rnd + ')',
      },
      this.zoomResetGroup_);
  zoomresetSvg.setAttributeNS(
      dom.XLINK_NS, 'xlink:href',
      this.workspace_.options.pathToMedia + internalConstants.SPRITE.url);

  // Attach event listeners.
  this.onZoomResetWrapper_ = browserEvents.conditionalBind(
      this.zoomResetGroup_, 'mousedown', null, this.resetZoom_.bind(this));
};

/**
 * Handles a mouse down event on the reset zoom button on the workspace.
 * @param {!Event} e A mouse down event.
 * @private
 */
ZoomControls.prototype.resetZoom_ = function(e) {
  this.workspace_.markFocused();

  // zoom is passed amount and computes the new scale using the formula:
  // targetScale = currentScale * Math.pow(speed, amount)
  const targetScale = this.workspace_.options.zoomOptions.startScale;
  const currentScale = this.workspace_.scale;
  const speed = this.workspace_.options.zoomOptions.scaleSpeed;
  // To compute amount:
  // amount = log(speed, (targetScale / currentScale))
  // Math.log computes natural logarithm (ln), to change the base, use formula:
  // log(base, value) = ln(value) / ln(base)
  const amount = Math.log(targetScale / currentScale) / Math.log(speed);
  this.workspace_.beginCanvasTransition();
  this.workspace_.zoomCenter(amount);
  this.workspace_.scrollCenter();

  setTimeout(this.workspace_.endCanvasTransition.bind(this.workspace_), 500);
  this.fireZoomEvent_();
  Touch.clearTouchIdentifier();  // Don't block future drags.
  e.stopPropagation();           // Don't start a workspace scroll.
  e.preventDefault();            // Stop double-clicking from selecting text.
};

/**
 * Fires a zoom control UI event.
 * @private
 */
ZoomControls.prototype.fireZoomEvent_ = function() {
  const uiEvent = new (eventUtils.get(eventUtils.CLICK))(
      null, this.workspace_.id, 'zoom_controls');
  eventUtils.fire(uiEvent);
};

/**
 * CSS for zoom controls.  See css.js for use.
 */
Css.register(`
  .blocklyZoom>image, .blocklyZoom>svg>image {
    opacity: .4;
  }

  .blocklyZoom>image:hover, .blocklyZoom>svg>image:hover {
    opacity: .6;
  }

  .blocklyZoom>image:active, .blocklyZoom>svg>image:active {
    opacity: .8;
  }
`);

exports.ZoomControls = ZoomControls;
