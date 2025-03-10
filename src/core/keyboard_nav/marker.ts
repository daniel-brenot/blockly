/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * The class representing a marker.
 * Used primarily for keyboard navigation to show a marked location.
 * @class
 */

import {ASTNode} from 'blockly/core/keyboard_nav/ast_node';
import {MarkerSvg} from 'blockly/core/renderers/common/marker_svg';


/**
 * Class for a marker.
 * This is used in keyboard navigation to save a location in the Blockly AST.
 * @constructor
 * @alias Blockly.Marker
 */
const Marker = function() {
  /**
   * The color of the marker.
   * @type {?string}
   */
  this.color = null;

  /**
   * The current location of the marker.
   * @type {ASTNode}
   * @private
   */
  this.curNode_ = null;

  /**
   * The object in charge of drawing the visual representation of the current
   * node.
   * @type {MarkerSvg}
   * @private
   */
  this.drawer_ = null;

  /**
   * The type of the marker.
   * @type {string}
   */
  this.type = 'marker';
};

/**
 * Sets the object in charge of drawing the marker.
 * @param {MarkerSvg} drawer The object in charge of
 *     drawing the marker.
 */
Marker.prototype.setDrawer = function(drawer) {
  this.drawer_ = drawer;
};

/**
 * Get the current drawer for the marker.
 * @return {MarkerSvg} The object in charge of drawing
 *     the marker.
 */
Marker.prototype.getDrawer = function() {
  return this.drawer_;
};

/**
 * Gets the current location of the marker.
 * @return {ASTNode} The current field, connection, or block the marker
 *     is on.
 */
Marker.prototype.getCurNode = function() {
  return this.curNode_;
};

/**
 * Set the location of the marker and call the update method.
 * Setting isStack to true will only work if the newLocation is the top most
 * output or previous connection on a stack.
 * @param {ASTNode} newNode The new location of the marker.
 */
Marker.prototype.setCurNode = function(newNode) {
  const oldNode = this.curNode_;
  this.curNode_ = newNode;
  if (this.drawer_) {
    this.drawer_.draw(oldNode, this.curNode_);
  }
};

/**
 * Redraw the current marker.
 * @package
 */
Marker.prototype.draw = function() {
  if (this.drawer_) {
    this.drawer_.draw(this.curNode_, this.curNode_);
  }
};

/**
 * Hide the marker SVG.
 */
Marker.prototype.hide = function() {
  if (this.drawer_) {
    this.drawer_.hide();
  }
};

/**
 * Dispose of this marker.
 */
Marker.prototype.dispose = function() {
  if (this.getDrawer()) {
    this.getDrawer().dispose();
  }
};

exports.Marker = Marker;
