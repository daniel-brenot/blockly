/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * An object that provides constants for rendering blocks in Zelos
 * mode.
 * @class
 */

import dom from 'blockly/core/utils/dom';
import object from 'blockly/core/utils/object';
import svgPaths from 'blockly/core/utils/svg_paths';
import utilsColor from 'blockly/core/utils/colour';
import {ConnectionType} from 'blockly/core/connection_type';
import {ConstantProvider: BaseConstantProvider} from 'blockly/core/renderers/common/constants';
import {Svg} from 'blockly/core/utils/svg';


/**
 * An object that provides constants for rendering blocks in Zelos mode.
 * @constructor
 * @package
 * @extends {BaseConstantProvider}
 * @alias Blockly.zelos.ConstantProvider
 */
const ConstantProvider = function() {
  ConstantProvider.superClass_.constructor.call(this);

  this.GRID_UNIT = 4;

  /**
   * @override
   */
  this.SMALL_PADDING = this.GRID_UNIT;

  /**
   * @override
   */
  this.MEDIUM_PADDING = 2 * this.GRID_UNIT;

  /**
   * @override
   */
  this.MEDIUM_LARGE_PADDING = 3 * this.GRID_UNIT;

  /**
   * @override
   */
  this.LARGE_PADDING = 4 * this.GRID_UNIT;

  /**
   * @override
   */
  this.CORNER_RADIUS = 1 * this.GRID_UNIT;

  /**
   * @override
   */
  this.NOTCH_WIDTH = 9 * this.GRID_UNIT;

  /**
   * @override
   */
  this.NOTCH_HEIGHT = 2 * this.GRID_UNIT;

  /**
   * @override
   */
  this.NOTCH_OFFSET_LEFT = 3 * this.GRID_UNIT;

  /**
   * @override
   */
  this.STATEMENT_INPUT_NOTCH_OFFSET = this.NOTCH_OFFSET_LEFT;

  /**
   * @override
   */
  this.MIN_BLOCK_WIDTH = 2 * this.GRID_UNIT;

  /**
   * @override
   */
  this.MIN_BLOCK_HEIGHT = 12 * this.GRID_UNIT;

  /**
   * @override
   */
  this.EMPTY_STATEMENT_INPUT_HEIGHT = 6 * this.GRID_UNIT;

  /**
   * @override
   */
  this.TAB_OFFSET_FROM_TOP = 0;

  /**
   * @override
   */
  this.TOP_ROW_MIN_HEIGHT = this.CORNER_RADIUS;

  /**
   * @override
   */
  this.TOP_ROW_PRECEDES_STATEMENT_MIN_HEIGHT = this.LARGE_PADDING;

  /**
   * @override
   */
  this.BOTTOM_ROW_MIN_HEIGHT = this.CORNER_RADIUS;

  /**
   * @override
   */
  this.BOTTOM_ROW_AFTER_STATEMENT_MIN_HEIGHT = 6 * this.GRID_UNIT;

  /**
   * @override
   */
  this.STATEMENT_BOTTOM_SPACER = -this.NOTCH_HEIGHT;

  /**
   * Minimum statement input spacer width.
   * @type {number}
   */
  this.STATEMENT_INPUT_SPACER_MIN_WIDTH = 40 * this.GRID_UNIT;

  /**
   * @override
   */
  this.STATEMENT_INPUT_PADDING_LEFT = 4 * this.GRID_UNIT;

  /**
   * @override
   */
  this.EMPTY_INLINE_INPUT_PADDING = 4 * this.GRID_UNIT;

  /**
   * @override
   */
  this.EMPTY_INLINE_INPUT_HEIGHT = 8 * this.GRID_UNIT;

  /**
   * @override
   */
  this.DUMMY_INPUT_MIN_HEIGHT = 8 * this.GRID_UNIT;

  /**
   * @override
   */
  this.DUMMY_INPUT_SHADOW_MIN_HEIGHT = 6 * this.GRID_UNIT;

  /**
   * @override
   */
  this.CURSOR_WS_WIDTH = 20 * this.GRID_UNIT;

  /**
   * @override
   */
  this.CURSOR_COLOR = '#ffa200';

  /**
   * Radius of the cursor for input and output connections.
   * @type {number}
   * @package
   */
  this.CURSOR_RADIUS = 5;

  /**
   * @override
   */
  this.JAGGED_TEETH_HEIGHT = 0;

  /**
   * @override
   */
  this.JAGGED_TEETH_WIDTH = 0;

  /**
   * @override
   */
  this.START_HAT_HEIGHT = 22;

  /**
   * @override
   */
  this.START_HAT_WIDTH = 96;

  /**
   * @enum {number}
   * @override
   */
  this.SHAPES = {HEXAGONAL: 1, ROUND: 2, SQUARE: 3, PUZZLE: 4, NOTCH: 5};

  /**
   * Map of output/input shapes and the amount they should cause a block to be
   * padded. Outer key is the outer shape, inner key is the inner shape.
   * When a block with the outer shape contains an input block with the inner
   * shape on its left or right edge, the block elements are aligned such that
   * the padding specified is reached.
   * @package
   */
  this.SHAPE_IN_SHAPE_PADDING = {
    1: {
      // Outer shape: hexagon.
      0: 5 * this.GRID_UNIT,  // Field in hexagon.
      1: 2 * this.GRID_UNIT,  // Hexagon in hexagon.
      2: 5 * this.GRID_UNIT,  // Round in hexagon.
      3: 5 * this.GRID_UNIT,  // Square in hexagon.
    },
    2: {
      // Outer shape: round.
      0: 3 * this.GRID_UNIT,  // Field in round.
      1: 3 * this.GRID_UNIT,  // Hexagon in round.
      2: 1 * this.GRID_UNIT,  // Round in round.
      3: 2 * this.GRID_UNIT,  // Square in round.
    },
    3: {
      // Outer shape: square.
      0: 2 * this.GRID_UNIT,  // Field in square.
      1: 2 * this.GRID_UNIT,  // Hexagon in square.
      2: 2 * this.GRID_UNIT,  // Round in square.
      3: 2 * this.GRID_UNIT,  // Square in square.
    },
  };

  /**
   * @override
   */
  this.FULL_BLOCK_FIELDS = true;

  /**
   * @override
   */
  this.FIELD_TEXT_FONTSIZE = 3 * this.GRID_UNIT;

  /**
   * @override
   */
  this.FIELD_TEXT_FONTWEIGHT = 'bold';

  /**
   * @override
   */
  this.FIELD_TEXT_FONTFAMILY =
      '"Helvetica Neue", "Segoe UI", Helvetica, sans-serif';

  /**
   * @override
   */
  this.FIELD_BORDER_RECT_RADIUS = this.CORNER_RADIUS;

  /**
   * @override
   */
  this.FIELD_BORDER_RECT_X_PADDING = 2 * this.GRID_UNIT;

  /**
   * @override
   */
  this.FIELD_BORDER_RECT_Y_PADDING = 1.625 * this.GRID_UNIT;

  /**
   * @override
   */
  this.FIELD_BORDER_RECT_HEIGHT = 8 * this.GRID_UNIT;

  /**
   * @override
   */
  this.FIELD_DROPDOWN_BORDER_RECT_HEIGHT = 8 * this.GRID_UNIT;

  /**
   * @override
   */
  this.FIELD_DROPDOWN_NO_BORDER_RECT_SHADOW = true;

  /**
   * @override
   */
  this.FIELD_DROPDOWN_COLORED_DIV = true;

  /**
   * @override
   */
  this.FIELD_DROPDOWN_SVG_ARROW = true;

  /**
   * @override
   */
  this.FIELD_DROPDOWN_SVG_ARROW_PADDING = this.FIELD_BORDER_RECT_X_PADDING;

  /**
   * @override
   */
  this.FIELD_TEXTINPUT_BOX_SHADOW = true;

  /**
   * @override
   */
  this.FIELD_COLOR_FULL_BLOCK = true;

  /**
   * @override
   */
  this.FIELD_COLOR_DEFAULT_WIDTH = 2 * this.GRID_UNIT;

  /**
   * @override
   */
  this.FIELD_COLOR_DEFAULT_HEIGHT = 4 * this.GRID_UNIT;

  /**
   * @override
   */
  this.FIELD_CHECKBOX_X_OFFSET = 1 * this.GRID_UNIT;

  /**
   * The maximum width of a dynamic connection shape.
   * @type {number}
   */
  this.MAX_DYNAMIC_CONNECTION_SHAPE_WIDTH = 12 * this.GRID_UNIT;

  /**
   * The selected glow color.
   * @type {string}
   */
  this.SELECTED_GLOW_COLOR = '#fff200';

  /**
   * The size of the selected glow.
   * @type {number}
   */
  this.SELECTED_GLOW_SIZE = 0.5;

  /**
   * The replacement glow color.
   * @type {string}
   */
  this.REPLACEMENT_GLOW_COLOR = '#fff200';

  /**
   * The size of the selected glow.
   * @type {number}
   */
  this.REPLACEMENT_GLOW_SIZE = 2;

  /**
   * The ID of the selected glow filter, or the empty string if no filter is
   * set.
   * @type {string}
   * @package
   */
  this.selectedGlowFilterId = '';

  /**
   * The <filter> element to use for a selected glow, or null if not set.
   * @type {SVGElement}
   * @private
   */
  this.selectedGlowFilter_ = null;

  /**
   * The ID of the replacement glow filter, or the empty string if no filter is
   * set.
   * @type {string}
   * @package
   */
  this.replacementGlowFilterId = '';

  /**
   * The <filter> element to use for a replacement glow, or null if not set.
   * @type {SVGElement}
   * @private
   */
  this.replacementGlowFilter_ = null;
};
object.inherits(ConstantProvider, BaseConstantProvider);

/**
 * @override
 */
ConstantProvider.prototype.setFontConstants_ = function(theme) {
  ConstantProvider.superClass_.setFontConstants_.call(this, theme);

  this.FIELD_BORDER_RECT_HEIGHT =
      this.FIELD_TEXT_HEIGHT + this.FIELD_BORDER_RECT_Y_PADDING * 2;
  this.FIELD_DROPDOWN_BORDER_RECT_HEIGHT = this.FIELD_BORDER_RECT_HEIGHT;
};

/**
 * @override
 */
ConstantProvider.prototype.init = function() {
  ConstantProvider.superClass_.init.call(this);
  this.HEXAGONAL = this.makeHexagonal();
  this.ROUNDED = this.makeRounded();
  this.SQUARED = this.makeSquared();

  this.STATEMENT_INPUT_NOTCH_OFFSET =
      this.NOTCH_OFFSET_LEFT + this.INSIDE_CORNERS.rightWidth;
};

/**
 * @override
 */
ConstantProvider.prototype.setDynamicProperties_ = function(theme) {
  ConstantProvider.superClass_.setDynamicProperties_.call(this, theme);

  this.SELECTED_GLOW_COLOR = theme.getComponentStyle('selectedGlowColor') ||
      this.SELECTED_GLOW_COLOR;
  const selectedGlowSize = Number(theme.getComponentStyle('selectedGlowSize'));
  this.SELECTED_GLOW_SIZE = selectedGlowSize && !isNaN(selectedGlowSize) ?
      selectedGlowSize :
      this.SELECTED_GLOW_SIZE;
  this.REPLACEMENT_GLOW_COLOR =
      theme.getComponentStyle('replacementGlowColor') ||
      this.REPLACEMENT_GLOW_COLOR;
  const replacementGlowSize =
      Number(theme.getComponentStyle('replacementGlowSize'));
  this.REPLACEMENT_GLOW_SIZE =
      replacementGlowSize && !isNaN(replacementGlowSize) ?
      replacementGlowSize :
      this.REPLACEMENT_GLOW_SIZE;
};

/**
 * @override
 */
ConstantProvider.prototype.dispose = function() {
  ConstantProvider.superClass_.dispose.call(this);
  if (this.selectedGlowFilter_) {
    dom.removeNode(this.selectedGlowFilter_);
  }
  if (this.replacementGlowFilter_) {
    dom.removeNode(this.replacementGlowFilter_);
  }
};

/**
 * @override
 */
ConstantProvider.prototype.makeStartHat = function() {
  const height = this.START_HAT_HEIGHT;
  const width = this.START_HAT_WIDTH;

  const mainPath = svgPaths.curve('c', [
    svgPaths.point(25, -height),
    svgPaths.point(71, -height),
    svgPaths.point(width, 0),
  ]);
  return {height: height, width: width, path: mainPath};
};

/**
 * Create sizing and path information about a hexagonal shape.
 * @return {!Object} An object containing sizing and path information about
 *     a hexagonal shape for connections.
 * @package
 */
ConstantProvider.prototype.makeHexagonal = function() {
  const maxWidth = this.MAX_DYNAMIC_CONNECTION_SHAPE_WIDTH;

  /**
   * Make the main path for the hexagonal connection shape out of two lines.
   * The lines are defined with relative positions and require the block height.
   * The 'up' and 'down' versions of the paths are the same, but the Y sign
   * flips.  The 'left' and 'right' versions of the path are also the same, but
   * the X sign flips.
   * @param {number} height The height of the block the connection is on.
   * @param {boolean} up True if the path should be drawn from bottom to top,
   *     false otherwise.
   * @param {boolean} right True if the path is for the right side of the
   *     block.
   * @return {string} A path fragment describing a rounded connection.
   */
  function makeMainPath(height, up, right) {
    const halfHeight = height / 2;
    const width = halfHeight > maxWidth ? maxWidth : halfHeight;
    const forward = up ? -1 : 1;
    const direction = right ? -1 : 1;
    const dy = forward * height / 2;
    return svgPaths.lineTo(-direction * width, dy) +
        svgPaths.lineTo(direction * width, dy);
  }

  return {
    type: this.SHAPES.HEXAGONAL,
    isDynamic: true,
    width: function(height) {
      const halfHeight = height / 2;
      return halfHeight > maxWidth ? maxWidth : halfHeight;
    },
    height: function(height) {
      return height;
    },
    connectionOffsetY: function(connectionHeight) {
      return connectionHeight / 2;
    },
    connectionOffsetX: function(connectionWidth) {
      return -connectionWidth;
    },
    pathDown: function(height) {
      return makeMainPath(height, false, false);
    },
    pathUp: function(height) {
      return makeMainPath(height, true, false);
    },
    pathRightDown: function(height) {
      return makeMainPath(height, false, true);
    },
    pathRightUp: function(height) {
      return makeMainPath(height, false, true);
    },
  };
};

/**
 * Create sizing and path information about a rounded shape.
 * @return {!Object} An object containing sizing and path information about
 *     a rounded shape for connections.
 * @package
 */
ConstantProvider.prototype.makeRounded = function() {
  const maxWidth = this.MAX_DYNAMIC_CONNECTION_SHAPE_WIDTH;
  const maxHeight = maxWidth * 2;

  /**
   * Make the main path for the rounded connection shape out of two arcs and
   * a line that joins them.  The arcs are defined with relative positions.
   * Usually, the height of the block is split between the two arcs. In the case
   * where the height of the block exceeds the maximum height, a line is drawn
   * in between the two arcs.
   * The 'up' and 'down' versions of the paths are the same, but the Y sign
   * flips.  The 'up' and 'right' versions of the path flip the sweep-flag
   * which moves the arc at negative angles.
   * @param {number} blockHeight The height of the block the connection is on.
   * @param {boolean} up True if the path should be drawn from bottom to top,
   *     false otherwise.
   * @param {boolean} right True if the path is for the right side of the
   *     block.
   * @return {string} A path fragment describing a rounded connection.
   */
  function makeMainPath(blockHeight, up, right) {
    const remainingHeight =
        blockHeight > maxHeight ? blockHeight - maxHeight : 0;
    const height = blockHeight > maxHeight ? maxHeight : blockHeight;
    const radius = height / 2;
    return svgPaths.arc(
               'a', '0 0,1', radius,
               svgPaths.point((up ? -1 : 1) * radius, (up ? -1 : 1) * radius)) +
        svgPaths.lineOnAxis('v', (right ? 1 : -1) * remainingHeight) +
        svgPaths.arc(
            'a', '0 0,1', radius,
            svgPaths.point((up ? 1 : -1) * radius, (up ? -1 : 1) * radius));
  }

  return {
    type: this.SHAPES.ROUND,
    isDynamic: true,
    width: function(height) {
      const halfHeight = height / 2;
      return halfHeight > maxWidth ? maxWidth : halfHeight;
    },
    height: function(height) {
      return height;
    },
    connectionOffsetY: function(connectionHeight) {
      return connectionHeight / 2;
    },
    connectionOffsetX: function(connectionWidth) {
      return -connectionWidth;
    },
    pathDown: function(height) {
      return makeMainPath(height, false, false);
    },
    pathUp: function(height) {
      return makeMainPath(height, true, false);
    },
    pathRightDown: function(height) {
      return makeMainPath(height, false, true);
    },
    pathRightUp: function(height) {
      return makeMainPath(height, false, true);
    },
  };
};

/**
 * Create sizing and path information about a squared shape.
 * @return {!Object} An object containing sizing and path information about
 *     a squared shape for connections.
 * @package
 */
ConstantProvider.prototype.makeSquared = function() {
  const radius = this.CORNER_RADIUS;

  /**
   * Make the main path for the squared connection shape out of two corners
   * and a single line in-between (a and v). These are defined in relative
   * positions and require the height of the block.
   * The 'left' and 'right' versions of the paths are the same, but the Y sign
   * flips.  The 'up' and 'down' versions of the path determine where the corner
   * point is placed and in turn the direction of the corners.
   * @param {number} height The height of the block the connection is on.
   * @param {boolean} up True if the path should be drawn from bottom to top,
   *     false otherwise.
   * @param {boolean} right True if the path is for the right side of the
   *     block.
   * @return {string} A path fragment describing a squared connection.
   */
  function makeMainPath(height, up, right) {
    const innerHeight = height - radius * 2;
    return svgPaths.arc(
               'a', '0 0,1', radius,
               svgPaths.point((up ? -1 : 1) * radius, (up ? -1 : 1) * radius)) +
        svgPaths.lineOnAxis('v', (right ? 1 : -1) * innerHeight) +
        svgPaths.arc(
            'a', '0 0,1', radius,
            svgPaths.point((up ? 1 : -1) * radius, (up ? -1 : 1) * radius));
  }

  return {
    type: this.SHAPES.SQUARE,
    isDynamic: true,
    width: function(_height) {
      return radius;
    },
    height: function(height) {
      return height;
    },
    connectionOffsetY: function(connectionHeight) {
      return connectionHeight / 2;
    },
    connectionOffsetX: function(connectionWidth) {
      return -connectionWidth;
    },
    pathDown: function(height) {
      return makeMainPath(height, false, false);
    },
    pathUp: function(height) {
      return makeMainPath(height, true, false);
    },
    pathRightDown: function(height) {
      return makeMainPath(height, false, true);
    },
    pathRightUp: function(height) {
      return makeMainPath(height, false, true);
    },
  };
};

/**
 * @override
 */
ConstantProvider.prototype.shapeFor = function(connection) {
  let checks = connection.getCheck();
  if (!checks && connection.targetConnection) {
    checks = connection.targetConnection.getCheck();
  }
  let outputShape;
  switch (connection.type) {
    case ConnectionType.INPUT_VALUE:
    case ConnectionType.OUTPUT_VALUE:
      outputShape = connection.getSourceBlock().getOutputShape();
      // If the block has an output shape set, use that instead.
      if (outputShape !== null) {
        switch (outputShape) {
          case this.SHAPES.HEXAGONAL:
            return this.HEXAGONAL;
          case this.SHAPES.ROUND:
            return this.ROUNDED;
          case this.SHAPES.SQUARE:
            return this.SQUARED;
        }
      }
      // Includes doesn't work in IE.
      if (checks && checks.indexOf('Boolean') !== -1) {
        return this.HEXAGONAL;
      }
      if (checks && checks.indexOf('Number') !== -1) {
        return this.ROUNDED;
      }
      if (checks && checks.indexOf('String') !== -1) {
        return this.ROUNDED;
      }
      return this.ROUNDED;
    case ConnectionType.PREVIOUS_STATEMENT:
    case ConnectionType.NEXT_STATEMENT:
      return this.NOTCH;
    default:
      throw Error('Unknown type');
  }
};

/**
 * @override
 */
ConstantProvider.prototype.makeNotch = function() {
  const width = this.NOTCH_WIDTH;
  const height = this.NOTCH_HEIGHT;

  const innerWidth = width / 3;
  const curveWidth = innerWidth / 3;

  const halfHeight = height / 2;
  const quarterHeight = halfHeight / 2;

  /**
   * Make the main path for the notch.
   * @param {number} dir Direction multiplier to apply to horizontal offsets
   *     along the path. Either 1 or -1.
   * @return {string} A path fragment describing a notch.
   */
  function makeMainPath(dir) {
    return (
        svgPaths.curve(
            'c',
            [
              svgPaths.point(dir * curveWidth / 2, 0),
              svgPaths.point(dir * curveWidth * 3 / 4, quarterHeight / 2),
              svgPaths.point(dir * curveWidth, quarterHeight),
            ]) +
        svgPaths.line([svgPaths.point(dir * curveWidth, halfHeight)]) +
        svgPaths.curve(
            'c',
            [
              svgPaths.point(dir * curveWidth / 4, quarterHeight / 2),
              svgPaths.point(dir * curveWidth / 2, quarterHeight),
              svgPaths.point(dir * curveWidth, quarterHeight),
            ]) +
        svgPaths.lineOnAxis('h', dir * innerWidth) +
        svgPaths.curve(
            'c',
            [
              svgPaths.point(dir * curveWidth / 2, 0),
              svgPaths.point(dir * curveWidth * 3 / 4, -(quarterHeight / 2)),
              svgPaths.point(dir * curveWidth, -quarterHeight),
            ]) +
        svgPaths.line([svgPaths.point(dir * curveWidth, -halfHeight)]) +
        svgPaths.curve('c', [
          svgPaths.point(dir * curveWidth / 4, -(quarterHeight / 2)),
          svgPaths.point(dir * curveWidth / 2, -quarterHeight),
          svgPaths.point(dir * curveWidth, -quarterHeight),
        ]));
  }

  const pathLeft = makeMainPath(1);
  const pathRight = makeMainPath(-1);

  return {
    type: this.SHAPES.NOTCH,
    width: width,
    height: height,
    pathLeft: pathLeft,
    pathRight: pathRight,
  };
};

/**
 * @override
 */
ConstantProvider.prototype.makeInsideCorners = function() {
  const radius = this.CORNER_RADIUS;

  const innerTopLeftCorner =
      svgPaths.arc('a', '0 0,0', radius, svgPaths.point(-radius, radius));

  const innerTopRightCorner =
      svgPaths.arc('a', '0 0,1', radius, svgPaths.point(-radius, radius));

  const innerBottomLeftCorner =
      svgPaths.arc('a', '0 0,0', radius, svgPaths.point(radius, radius));

  const innerBottomRightCorner =
      svgPaths.arc('a', '0 0,1', radius, svgPaths.point(radius, radius));

  return {
    width: radius,
    height: radius,
    pathTop: innerTopLeftCorner,
    pathBottom: innerBottomLeftCorner,
    rightWidth: radius,
    rightHeight: radius,
    pathTopRight: innerTopRightCorner,
    pathBottomRight: innerBottomRightCorner,
  };
};

/**
 * @override
 */
ConstantProvider.prototype.generateSecondaryColor_ = function(color) {
  return utilsColor.blend('#000', color, 0.15) || color;
};

/**
 * @override
 */
ConstantProvider.prototype.generateTertiaryColor_ = function(color) {
  return utilsColor.blend('#000', color, 0.25) || color;
};

/**
 * @override
 */
ConstantProvider.prototype.createDom = function(svg, tagName, selector) {
  ConstantProvider.superClass_.createDom.call(this, svg, tagName, selector);
  /*
  <defs>
    ... filters go here ...
  </defs>
  */
  const defs = dom.createSvgElement(Svg.DEFS, {}, svg);
  // Using a dilate distorts the block shape.
  // Instead use a gaussian blur, and then set all alpha to 1 with a transfer.
  const selectedGlowFilter = dom.createSvgElement(
      Svg.FILTER, {
        'id': 'blocklySelectedGlowFilter' + this.randomIdentifier,
        'height': '160%',
        'width': '180%',
        'y': '-30%',
        'x': '-40%',
      },
      defs);
  dom.createSvgElement(
      Svg.FEGAUSSIANBLUR,
      {'in': 'SourceGraphic', 'stdDeviation': this.SELECTED_GLOW_SIZE},
      selectedGlowFilter);
  // Set all gaussian blur pixels to 1 opacity before applying flood
  const selectedComponentTransfer = dom.createSvgElement(
      Svg.FECOMPONENTTRANSFER, {'result': 'outBlur'}, selectedGlowFilter);
  dom.createSvgElement(
      Svg.FEFUNCA,
      {'type': 'table', 'tableValues': '0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1'},
      selectedComponentTransfer);
  // Color the highlight
  dom.createSvgElement(
      Svg.FEFLOOD, {
        'flood-color': this.SELECTED_GLOW_COLOR,
        'flood-opacity': 1,
        'result': 'outColor',
      },
      selectedGlowFilter);
  dom.createSvgElement(
      Svg.FECOMPOSITE, {
        'in': 'outColor',
        'in2': 'outBlur',
        'operator': 'in',
        'result': 'outGlow',
      },
      selectedGlowFilter);
  this.selectedGlowFilterId = selectedGlowFilter.id;
  this.selectedGlowFilter_ = selectedGlowFilter;

  // Using a dilate distorts the block shape.
  // Instead use a gaussian blur, and then set all alpha to 1 with a transfer.
  const replacementGlowFilter = dom.createSvgElement(
      Svg.FILTER, {
        'id': 'blocklyReplacementGlowFilter' + this.randomIdentifier,
        'height': '160%',
        'width': '180%',
        'y': '-30%',
        'x': '-40%',
      },
      defs);
  dom.createSvgElement(
      Svg.FEGAUSSIANBLUR,
      {'in': 'SourceGraphic', 'stdDeviation': this.REPLACEMENT_GLOW_SIZE},
      replacementGlowFilter);
  // Set all gaussian blur pixels to 1 opacity before applying flood
  const replacementComponentTransfer = dom.createSvgElement(
      Svg.FECOMPONENTTRANSFER, {'result': 'outBlur'}, replacementGlowFilter);
  dom.createSvgElement(
      Svg.FEFUNCA,
      {'type': 'table', 'tableValues': '0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1'},
      replacementComponentTransfer);
  // Color the highlight
  dom.createSvgElement(
      Svg.FEFLOOD, {
        'flood-color': this.REPLACEMENT_GLOW_COLOR,
        'flood-opacity': 1,
        'result': 'outColor',
      },
      replacementGlowFilter);
  dom.createSvgElement(
      Svg.FECOMPOSITE, {
        'in': 'outColor',
        'in2': 'outBlur',
        'operator': 'in',
        'result': 'outGlow',
      },
      replacementGlowFilter);
  dom.createSvgElement(
      Svg.FECOMPOSITE, {
        'in': 'SourceGraphic',
        'in2': 'outGlow',
        'operator': 'over',
      },
      replacementGlowFilter);
  this.replacementGlowFilterId = replacementGlowFilter.id;
  this.replacementGlowFilter_ = replacementGlowFilter;
};

/**
 * @override
 */
ConstantProvider.prototype.getCSS_ = function(selector) {
  return [
    /* eslint-disable indent */
    // Text.
    selector + ' .blocklyText,', selector + ' .blocklyFlyoutLabelText {',
    'font: ' + this.FIELD_TEXT_FONTWEIGHT + ' ' + this.FIELD_TEXT_FONTSIZE +
        'pt ' + this.FIELD_TEXT_FONTFAMILY + ';',
    '}',

    // Fields.
    selector + ' .blocklyText {', 'fill: #fff;', '}',
    selector + ' .blocklyNonEditableText>rect:not(.blocklyDropdownRect),',
    selector + ' .blocklyEditableText>rect:not(.blocklyDropdownRect) {',
    'fill: ' + this.FIELD_BORDER_RECT_COLOR + ';', '}',
    selector + ' .blocklyNonEditableText>text,',
    selector + ' .blocklyEditableText>text,',
    selector + ' .blocklyNonEditableText>g>text,',
    selector + ' .blocklyEditableText>g>text {', 'fill: #575E75;', '}',

    // Flyout labels.
    selector + ' .blocklyFlyoutLabelText {', 'fill: #575E75;', '}',

    // Bubbles.
    selector + ' .blocklyText.blocklyBubbleText {', 'fill: #575E75;', '}',

    // Editable field hover.
    selector + ' .blocklyDraggable:not(.blocklyDisabled)',
    ' .blocklyEditableText:not(.editing):hover>rect,',
    selector + ' .blocklyDraggable:not(.blocklyDisabled)',
    ' .blocklyEditableText:not(.editing):hover>.blocklyPath {', 'stroke: #fff;',
    'stroke-width: 2;', '}',

    // Text field input.
    selector + ' .blocklyHtmlInput {',
    'font-family: ' + this.FIELD_TEXT_FONTFAMILY + ';',
    'font-weight: ' + this.FIELD_TEXT_FONTWEIGHT + ';', 'color: #575E75;', '}',

    // Dropdown field.
    selector + ' .blocklyDropdownText {', 'fill: #fff !important;', '}',
    // Widget and Dropdown Div
    selector + '.blocklyWidgetDiv .goog-menuitem,',
    selector + '.blocklyDropDownDiv .goog-menuitem {',
    'font-family: ' + this.FIELD_TEXT_FONTFAMILY + ';', '}',
    selector + '.blocklyDropDownDiv .goog-menuitem-content {', 'color: #fff;',
    '}',

    // Connection highlight.
    selector + ' .blocklyHighlightedConnectionPath {',
    'stroke: ' + this.SELECTED_GLOW_COLOR + ';', '}',

    // Disabled outline paths.
    selector + ' .blocklyDisabled > .blocklyOutlinePath {',
    'fill: url(#blocklyDisabledPattern' + this.randomIdentifier + ')', '}',

    // Insertion marker.
    selector + ' .blocklyInsertionMarker>.blocklyPath {',
    'fill-opacity: ' + this.INSERTION_MARKER_OPACITY + ';', 'stroke: none;',
    '}',
    /* eslint-enable indent */
  ];
};

exports.ConstantProvider = ConstantProvider;
