/**
 * @license
 * Copyright 2016 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Class for a button in the flyout.
 * @class
 */

import Css from 'blockly/core/css';
import browserEvents from 'blockly/core/browser_events';
import dom from 'blockly/core/utils/dom';
import style from 'blockly/core/utils/style';
import toolbox from 'blockly/core/utils/toolbox';
import parsing from 'blockly/core/utils/parsing';
import {Coordinate} from 'blockly/core/utils/coordinate';
import {Svg} from 'blockly/core/utils/svg';
import {WorkspaceSvg} from 'blockly/core/workspace_svg';


/**
 * Class for a button in the flyout.
 * @param {!WorkspaceSvg} workspace The workspace in which to place this
 *     button.
 * @param {!WorkspaceSvg} targetWorkspace The flyout's target workspace.
 * @param {!toolbox.ButtonOrLabelInfo} json
 *    The JSON specifying the label/button.
 * @param {boolean} isLabel Whether this button should be styled as a label.
 * @constructor
 * @package
 * @alias Blockly.FlyoutButton
 */
const FlyoutButton = function(workspace, targetWorkspace, json, isLabel) {
  // Labels behave the same as buttons, but are styled differently.

  /**
   * @type {!WorkspaceSvg}
   * @private
   */
  this.workspace_ = workspace;

  /**
   * @type {!WorkspaceSvg}
   * @private
   */
  this.targetWorkspace_ = targetWorkspace;

  /**
   * @type {string}
   * @private
   */
  this.text_ = json['text'];

  /**
   * @type {!Coordinate}
   * @private
   */
  this.position_ = new Coordinate(0, 0);

  /**
   * Whether this button should be styled as a label.
   * @type {boolean}
   * @private
   */
  this.isLabel_ = isLabel;

  /**
   * The key to the function called when this button is clicked.
   * @type {string}
   * @private
   */
  this.callbackKey_ = json['callbackKey'] ||
      /* Check the lower case version too to satisfy IE */
      json['callbackkey'];

  /**
   * If specified, a CSS class to add to this button.
   * @type {?string}
   * @private
   */
  this.cssClass_ = json['web-class'] || null;

  /**
   * Mouse up event data.
   * @type {?browserEvents.Data}
   * @private
   */
  this.onMouseUpWrapper_ = null;

  /**
   * The JSON specifying the label / button.
   * @type {!toolbox.ButtonOrLabelInfo}
   */
  this.info = json;
};

/**
 * The horizontal margin around the text in the button.
 */
FlyoutButton.MARGIN_X = 5;

/**
 * The vertical margin around the text in the button.
 */
FlyoutButton.MARGIN_Y = 2;

/**
 * The width of the button's rect.
 * @type {number}
 */
FlyoutButton.prototype.width = 0;

/**
 * The height of the button's rect.
 * @type {number}
 */
FlyoutButton.prototype.height = 0;

/**
 * Create the button elements.
 * @return {!SVGElement} The button's SVG group.
 */
FlyoutButton.prototype.createDom = function() {
  let cssClass = this.isLabel_ ? 'blocklyFlyoutLabel' : 'blocklyFlyoutButton';
  if (this.cssClass_) {
    cssClass += ' ' + this.cssClass_;
  }

  this.svgGroup_ = dom.createSvgElement(
      Svg.G, {'class': cssClass}, this.workspace_.getCanvas());

  let shadow;
  if (!this.isLabel_) {
    // Shadow rectangle (light source does not mirror in RTL).
    shadow = dom.createSvgElement(
        Svg.RECT, {
          'class': 'blocklyFlyoutButtonShadow',
          'rx': 4,
          'ry': 4,
          'x': 1,
          'y': 1,
        },
        this.svgGroup_);
  }
  // Background rectangle.
  const rect = dom.createSvgElement(
      Svg.RECT, {
        'class': this.isLabel_ ? 'blocklyFlyoutLabelBackground' :
                                 'blocklyFlyoutButtonBackground',
        'rx': 4,
        'ry': 4,
      },
      this.svgGroup_);

  const svgText = dom.createSvgElement(
      Svg.TEXT, {
        'class': this.isLabel_ ? 'blocklyFlyoutLabelText' : 'blocklyText',
        'x': 0,
        'y': 0,
        'text-anchor': 'middle',
      },
      this.svgGroup_);
  let text = parsing.replaceMessageReferences(this.text_);
  if (this.workspace_.RTL) {
    // Force text to be RTL by adding an RLM.
    text += '\u200F';
  }
  svgText.textContent = text;
  if (this.isLabel_) {
    this.svgText_ = svgText;
    this.workspace_.getThemeManager().subscribe(
        this.svgText_, 'flyoutForegroundColor', 'fill');
  }

  const fontSize = style.getComputedStyle(svgText, 'fontSize');
  const fontWeight = style.getComputedStyle(svgText, 'fontWeight');
  const fontFamily = style.getComputedStyle(svgText, 'fontFamily');
  this.width = dom.getFastTextWidthWithSizeString(
      svgText, fontSize, fontWeight, fontFamily);
  const fontMetrics =
      dom.measureFontMetrics(text, fontSize, fontWeight, fontFamily);
  this.height = fontMetrics.height;

  if (!this.isLabel_) {
    this.width += 2 * FlyoutButton.MARGIN_X;
    this.height += 2 * FlyoutButton.MARGIN_Y;
    shadow.setAttribute('width', this.width);
    shadow.setAttribute('height', this.height);
  }
  rect.setAttribute('width', this.width);
  rect.setAttribute('height', this.height);

  svgText.setAttribute('x', this.width / 2);
  svgText.setAttribute(
      'y', this.height / 2 - fontMetrics.height / 2 + fontMetrics.baseline);

  this.updateTransform_();

  this.onMouseUpWrapper_ = browserEvents.conditionalBind(
      this.svgGroup_, 'mouseup', this, this.onMouseUp_);
  return this.svgGroup_;
};

/**
 * Correctly position the flyout button and make it visible.
 */
FlyoutButton.prototype.show = function() {
  this.updateTransform_();
  this.svgGroup_.setAttribute('display', 'block');
};

/**
 * Update SVG attributes to match internal state.
 * @private
 */
FlyoutButton.prototype.updateTransform_ = function() {
  this.svgGroup_.setAttribute(
      'transform',
      'translate(' + this.position_.x + ',' + this.position_.y + ')');
};

/**
 * Move the button to the given x, y coordinates.
 * @param {number} x The new x coordinate.
 * @param {number} y The new y coordinate.
 */
FlyoutButton.prototype.moveTo = function(x, y) {
  this.position_.x = x;
  this.position_.y = y;
  this.updateTransform_();
};

/**
 * @return {boolean} Whether or not the button is a label.
 */
FlyoutButton.prototype.isLabel = function() {
  return this.isLabel_;
};

/**
 * Location of the button.
 * @return {!Coordinate} x, y coordinates.
 * @package
 */
FlyoutButton.prototype.getPosition = function() {
  return this.position_;
};

/**
 * @return {string} Text of the button.
 */
FlyoutButton.prototype.getButtonText = function() {
  return this.text_;
};

/**
 * Get the button's target workspace.
 * @return {!WorkspaceSvg} The target workspace of the flyout where this
 *     button resides.
 */
FlyoutButton.prototype.getTargetWorkspace = function() {
  return this.targetWorkspace_;
};

/**
 * Dispose of this button.
 */
FlyoutButton.prototype.dispose = function() {
  if (this.onMouseUpWrapper_) {
    browserEvents.unbind(this.onMouseUpWrapper_);
  }
  if (this.svgGroup_) {
    dom.removeNode(this.svgGroup_);
  }
  if (this.svgText_) {
    this.workspace_.getThemeManager().unsubscribe(this.svgText_);
  }
};

/**
 * Do something when the button is clicked.
 * @param {!Event} e Mouse up event.
 * @private
 */
FlyoutButton.prototype.onMouseUp_ = function(e) {
  const gesture = this.targetWorkspace_.getGesture(e);
  if (gesture) {
    gesture.cancel();
  }

  if (this.isLabel_ && this.callbackKey_) {
    console.warn('Labels should not have callbacks. Label text: ' + this.text_);
  } else if (
      !this.isLabel_ &&
      !(this.callbackKey_ &&
        this.targetWorkspace_.getButtonCallback(this.callbackKey_))) {
    console.warn('Buttons should have callbacks. Button text: ' + this.text_);
  } else if (!this.isLabel_) {
    this.targetWorkspace_.getButtonCallback(this.callbackKey_)(this);
  }
};

/**
 * CSS for buttons and labels. See css.js for use.
 */
Css.register(`
  .blocklyFlyoutButton {
    fill: #888;
    cursor: default;
  }

  .blocklyFlyoutButtonShadow {
    fill: #666;
  }

  .blocklyFlyoutButton:hover {
    fill: #aaa;
  }

  .blocklyFlyoutLabel {
    cursor: default;
  }

  .blocklyFlyoutLabelBackground {
    opacity: 0;
  }
`);

exports.FlyoutButton = FlyoutButton;
