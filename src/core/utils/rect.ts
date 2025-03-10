/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Utility methods for rectangle manipulation.
 * These methods are not specific to Blockly, and could be factored out into
 * a JavaScript framework such as Closure.
 * @class
 */


/**
 * Class for representing rectangular regions.
 * @param {number} top Top.
 * @param {number} bottom Bottom.
 * @param {number} left Left.
 * @param {number} right Right.
 * @struct
 * @constructor
 * @alias Blockly.utils.Rect
 */
const Rect = function(top, bottom, left, right) {
  /** @type {number} */
  this.top = top;

  /** @type {number} */
  this.bottom = bottom;

  /** @type {number} */
  this.left = left;

  /** @type {number} */
  this.right = right;
};

/**
 * Tests whether this rectangle contains a x/y coordinate.
 *
 * @param {number} x The x coordinate to test for containment.
 * @param {number} y The y coordinate to test for containment.
 * @return {boolean} Whether this rectangle contains given coordinate.
 */
Rect.prototype.contains = function(x, y) {
  return x >= this.left && x <= this.right && y >= this.top && y <= this.bottom;
};

/**
 * Tests whether this rectangle intersects the provided rectangle.
 * Assumes that the coordinate system increases going down and left.
 * @param {!Rect} other The other rectangle to check for
 *    intersection with.
 * @return {boolean} Whether this rectangle intersects the provided rectangle.
 */
Rect.prototype.intersects = function(other) {
  return !(
      this.left > other.right || this.right < other.left ||
      this.top > other.bottom || this.bottom < other.top);
};

exports.Rect = Rect;
