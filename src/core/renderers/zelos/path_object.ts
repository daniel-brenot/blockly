/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview An object that owns a block's rendering SVG elements.
 */



/**
 * An object that owns a block's rendering SVG elements.
 * @class
 */

import dom from 'blockly/core/utils/dom';
import object from 'blockly/core/utils/object';
import {ConstantProvider} from 'blockly/core/renderers/zelos/constants';
import {PathObject: BasePathObject} from 'blockly/core/renderers/common/path_object';
import {Svg} from 'blockly/core/utils/svg';
import {Theme} from 'blockly/core/theme';


/**
 * An object that handles creating and setting each of the SVG elements
 * used by the renderer.
 * @param {!SVGElement} root The root SVG element.
 * @param {!Theme.BlockStyle} style The style object to use for
 *     coloring.
 * @param {!ConstantProvider} constants The renderer's constants.
 * @constructor
 * @extends {BasePathObject}
 * @package
 * @alias Blockly.zelos.PathObject
 */
const PathObject = function(root, style, constants) {
  PathObject.superClass_.constructor.call(this, root, style, constants);

  /**
   * The renderer's constant provider.
   * @type {!ConstantProvider}
   */
  this.constants = constants;

  /**
   * The selected path of the block.
   * @type {?SVGElement}
   * @private
   */
  this.svgPathSelected_ = null;

  /**
   * The outline paths on the block.
   * @type {!Object<string, !SVGElement>}
   * @private
   */
  this.outlines_ = Object.create(null);

  /**
   * A set used to determine which outlines were used during a draw pass.  The
   * set is initialized with a reference to all the outlines in
   * `this.outlines_`. Every time we use an outline during the draw pass, the
   * reference is removed from this set.
   * @type {Object<string, number>}
   * @private
   */
  this.remainingOutlines_ = null;

  /**
   * The type of block's output connection shape.  This is set when a block with
   * an output connection is drawn.
   * @package
   */
  this.outputShapeType = null;
};
object.inherits(PathObject, BasePathObject);

/**
 * @override
 */
PathObject.prototype.setPath = function(pathString) {
  PathObject.superClass_.setPath.call(this, pathString);
  if (this.svgPathSelected_) {
    this.svgPathSelected_.setAttribute('d', pathString);
  }
};

/**
 * @override
 */
PathObject.prototype.applyColor = function(block) {
  PathObject.superClass_.applyColor.call(this, block);
  // Set shadow stroke color.
  if (block.isShadow() && block.getParent()) {
    this.svgPath.setAttribute('stroke', block.getParent().style.colorTertiary);
  }

  // Apply color to outlines.
  for (const key in this.outlines_) {
    this.outlines_[key].setAttribute('fill', this.style.colorTertiary);
  }
};

/**
 * @override
 */
PathObject.prototype.flipRTL = function() {
  PathObject.superClass_.flipRTL.call(this);
  // Mirror each input outline path.
  for (const key in this.outlines_) {
    this.outlines_[key].setAttribute('transform', 'scale(-1 1)');
  }
};

/**
 * @override
 */
PathObject.prototype.updateSelected = function(enable) {
  this.setClass_('blocklySelected', enable);
  if (enable) {
    if (!this.svgPathSelected_) {
      this.svgPathSelected_ =
          /** @type {!SVGElement} */ (this.svgPath.cloneNode(true));
      this.svgPathSelected_.setAttribute('fill', 'none');
      this.svgPathSelected_.setAttribute(
          'filter', 'url(#' + this.constants.selectedGlowFilterId + ')');
      this.svgRoot.appendChild(this.svgPathSelected_);
    }
  } else {
    if (this.svgPathSelected_) {
      this.svgRoot.removeChild(this.svgPathSelected_);
      this.svgPathSelected_ = null;
    }
  }
};

/**
 * @override
 */
PathObject.prototype.updateReplacementFade = function(enable) {
  this.setClass_('blocklyReplaceable', enable);
  if (enable) {
    this.svgPath.setAttribute(
        'filter', 'url(#' + this.constants.replacementGlowFilterId + ')');
  } else {
    this.svgPath.removeAttribute('filter');
  }
};

/**
 * @override
 */
PathObject.prototype.updateShapeForInputHighlight = function(conn, enable) {
  const name = conn.getParentInput().name;
  const outlinePath = this.getOutlinePath_(name);
  if (!outlinePath) {
    return;
  }
  if (enable) {
    outlinePath.setAttribute(
        'filter', 'url(#' + this.constants.replacementGlowFilterId + ')');
  } else {
    outlinePath.removeAttribute('filter');
  }
};

/**
 * Method that's called when the drawer is about to draw the block.
 * @package
 */
PathObject.prototype.beginDrawing = function() {
  this.remainingOutlines_ = Object.create(null);
  for (const key in this.outlines_) {
    // The value set here isn't used anywhere, we are just using the
    // object as a Set data structure.
    this.remainingOutlines_[key] = 1;
  }
};

/**
 * Method that's called when the drawer is done drawing.
 * @package
 */
PathObject.prototype.endDrawing = function() {
  // Go through all remaining outlines that were not used this draw pass, and
  // remove them.
  if (this.remainingOutlines_) {
    for (const key in this.remainingOutlines_) {
      this.removeOutlinePath_(key);
    }
  }
  this.remainingOutlines_ = null;
};

/**
 * Set the path generated by the renderer for an outline path on the respective
 * outline path SVG element.
 * @param {string} name The input name.
 * @param {string} pathString The path.
 * @package
 */
PathObject.prototype.setOutlinePath = function(name, pathString) {
  const outline = this.getOutlinePath_(name);
  outline.setAttribute('d', pathString);
  outline.setAttribute('fill', this.style.colorTertiary);
};

/**
 * Create's an outline path for the specified input.
 * @param {string} name The input name.
 * @return {!SVGElement} The SVG outline path.
 * @private
 */
PathObject.prototype.getOutlinePath_ = function(name) {
  if (!this.outlines_[name]) {
    this.outlines_[name] = dom.createSvgElement(
        Svg.PATH, {
          'class': 'blocklyOutlinePath',
          // IE doesn't like paths without the data definition, set empty
          // default
          'd': '',
        },
        this.svgRoot);
  }
  if (this.remainingOutlines_) {
    delete this.remainingOutlines_[name];
  }
  return this.outlines_[name];
};

/**
 * Remove an outline path that is associated with the specified input.
 * @param {string} name The input name.
 * @private
 */
PathObject.prototype.removeOutlinePath_ = function(name) {
  this.outlines_[name].parentNode.removeChild(this.outlines_[name]);
  delete this.outlines_[name];
};

exports.PathObject = PathObject;
