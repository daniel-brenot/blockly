/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Methods for graphically rendering a marker as SVG.
 * @class
 */

import dom from 'blockly/core/utils/dom';
import object from 'blockly/core/utils/object';
import {ASTNode} from 'blockly/core/keyboard_nav/ast_node';
import {BlockSvg} from 'blockly/core/block_svg';
import {Connection} from 'blockly/core/connection';
import {ConstantProvider} from 'blockly/core/renderers/common/constants';
import {MarkerSvg: BaseMarkerSvg} from 'blockly/core/renderers/common/marker_svg';
import {Marker} from 'blockly/core/keyboard_nav/marker';
import {Svg} from 'blockly/core/utils/svg';
import {WorkspaceSvg} from 'blockly/core/workspace_svg';


/**
 * Class to draw a marker.
 * @param {!WorkspaceSvg} workspace The workspace the marker belongs to.
 * @param {!ConstantProvider} constants The constants for
 *     the renderer.
 * @param {!Marker} marker The marker to draw.
 * @constructor
 * @extends {BaseMarkerSvg}
 * @alias Blockly.zelos.MarkerSvg
 */
function MarkerSvg(workspace, constants, marker) {
  MarkerSvg.superClass_.constructor.call(this, workspace, constants, marker);
}
object.inherits(MarkerSvg, BaseMarkerSvg);

/**
 * Position and display the marker for an input or an output connection.
 * @param {!ASTNode} curNode The node to draw the marker for.
 * @private
 */
MarkerSvg.prototype.showWithInputOutput_ = function(curNode) {
  const block = /** @type {!BlockSvg} */ (curNode.getSourceBlock());
  const connection = /** @type {!Connection} */ (curNode.getLocation());
  const offsetInBlock = connection.getOffsetInBlock();

  this.positionCircle_(offsetInBlock.x, offsetInBlock.y);
  this.setParent_(block);
  this.showCurrent_();
};

/**
 * @override
 */
MarkerSvg.prototype.showWithOutput_ = function(curNode) {
  this.showWithInputOutput_(curNode);
};

/**
 * @override
 */
MarkerSvg.prototype.showWithInput_ = function(curNode) {
  this.showWithInputOutput_(curNode);
};

/**
 * Draw a rectangle around the block.
 * @param {!ASTNode} curNode The current node of the marker.
 */
MarkerSvg.prototype.showWithBlock_ = function(curNode) {
  const block = /** @type {!BlockSvg} */ (curNode.getLocation());

  // Gets the height and width of entire stack.
  const heightWidth = block.getHeightWidth();

  // Add padding so that being on a stack looks different than being on a block.
  this.positionRect_(0, 0, heightWidth.width, heightWidth.height);
  this.setParent_(block);
  this.showCurrent_();
};

/**
 * Position the circle we use for input and output connections.
 * @param {number} x The x position of the circle.
 * @param {number} y The y position of the circle.
 * @private
 */
MarkerSvg.prototype.positionCircle_ = function(x, y) {
  this.markerCircle_.setAttribute('cx', x);
  this.markerCircle_.setAttribute('cy', y);
  this.currentMarkerSvg = this.markerCircle_;
};

/**
 * @override
 */
MarkerSvg.prototype.hide = function() {
  MarkerSvg.superClass_.hide.call(this);
  this.markerCircle_.style.display = 'none';
};

/**
 * @override
 */
MarkerSvg.prototype.createDomInternal_ = function() {
  /* clang-format off */
  /* This markup will be generated and added to the .svgGroup_:
  <g>
    <rect width="100" height="5">
      <animate attributeType="XML" attributeName="fill" dur="1s"
        values="transparent;transparent;#fff;transparent" repeatCount="indefinite" />
    </rect>
  </g>
  */
  /* clang-format on */

  MarkerSvg.superClass_.createDomInternal_.call(this);

  this.markerCircle_ = dom.createSvgElement(
      Svg.CIRCLE, {
        'r': this.constants_.CURSOR_RADIUS,
        'style': 'display: none',
        'stroke-width': this.constants_.CURSOR_STROKE_WIDTH,
      },
      this.markerSvg_);

  // Markers and stack cursors don't blink.
  if (this.isCursor()) {
    const blinkProperties = this.getBlinkProperties_();
    dom.createSvgElement(Svg.ANIMATE, blinkProperties, this.markerCircle_);
  }

  return this.markerSvg_;
};

/**
 * @override
 */
MarkerSvg.prototype.applyColor_ = function(curNode) {
  MarkerSvg.superClass_.applyColor_.call(this, curNode);

  this.markerCircle_.setAttribute('fill', this.color_);
  this.markerCircle_.setAttribute('stroke', this.color_);

  if (this.isCursor()) {
    const values = this.color_ + ';transparent;transparent;';
    this.markerCircle_.firstChild.setAttribute('values', values);
  }
};

exports.MarkerSvg = MarkerSvg;
