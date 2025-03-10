/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Methods for adding highlights on block, for rendering in
 * compatibility mode.
 * @class
 */

import svgPaths from 'blockly/core/utils/svg_paths';
import {ConstantProvider} from 'blockly/core/renderers/common/constants';
import {HighlightConstantProvider} from 'blockly/core/renderers/geras/highlight_constants';
import {RenderInfo} from 'blockly/core/renderers/geras/info';
import {Renderer} from 'blockly/core/renderers/geras/renderer';
import {Types} from 'blockly/core/renderers/measurables/types';


/**
 * An object that adds highlights to a block based on the given rendering
 * information.
 *
 * Highlighting is interesting because the highlights do not fully enclose the
 * block.  Instead, they are positioned based on a light source in the top left.
 * This means that rendering highlights requires exact information about the
 * position of each part of the block.  The resulting paths are not continuous
 * or closed paths.  The highlights for tabs and notches are loosely based on
 * tab and notch shapes, but are not exactly the same.
 *
 * @param {!RenderInfo} info An object containing all
 *     information needed to render this block.
 * @package
 * @constructor
 * @alias Blockly.geras.Highlighter
 */
const Highlighter = function(info) {
  this.info_ = info;
  this.steps_ = '';
  this.inlineSteps_ = '';

  this.RTL_ = this.info_.RTL;

  const renderer = /** @type {!Renderer} */ (info.getRenderer());

  /**
   * The renderer's constant provider.
   * @type {!ConstantProvider}
   */
  this.constants_ = renderer.getConstants();

  /**
   * @type {!HighlightConstantProvider}
   */
  this.highlightConstants_ = renderer.getHighlightConstants();
  /**
   * The offset between the block's main path and highlight path.
   * @type {number}
   * @private
   */
  this.highlightOffset_ = this.highlightConstants_.OFFSET;

  this.outsideCornerPaths_ = this.highlightConstants_.OUTSIDE_CORNER;
  this.insideCornerPaths_ = this.highlightConstants_.INSIDE_CORNER;
  this.puzzleTabPaths_ = this.highlightConstants_.PUZZLE_TAB;
  this.notchPaths_ = this.highlightConstants_.NOTCH;
  this.startPaths_ = this.highlightConstants_.START_HAT;
  this.jaggedTeethPaths_ = this.highlightConstants_.JAGGED_TEETH;
};

/**
 * Get the steps for the highlight path.
 * @return {string} The steps for the highlight path.
 * @package
 */
Highlighter.prototype.getPath = function() {
  return this.steps_ + '\n' + this.inlineSteps_;
};

Highlighter.prototype.drawTopCorner = function(row) {
  this.steps_ += svgPaths.moveBy(row.xPos, this.info_.startY);
  for (let i = 0, elem; (elem = row.elements[i]); i++) {
    if (Types.isLeftSquareCorner(elem)) {
      this.steps_ += this.highlightConstants_.START_POINT;
    } else if (Types.isLeftRoundedCorner(elem)) {
      this.steps_ += this.outsideCornerPaths_.topLeft(this.RTL_);
    } else if (Types.isPreviousConnection(elem)) {
      this.steps_ += this.notchPaths_.pathLeft;
    } else if (Types.isHat(elem)) {
      this.steps_ += this.startPaths_.path(this.RTL_);
    } else if (Types.isSpacer(elem) && elem.width !== 0) {
      // The end point of the spacer needs to be offset by the highlight amount.
      // So instead of using the spacer's width for a relative horizontal, use
      // its width and position for an absolute horizontal move.
      this.steps_ += svgPaths.lineOnAxis(
          'H', elem.xPos + elem.width - this.highlightOffset_);
    }
  }

  const right = row.xPos + row.width - this.highlightOffset_;
  this.steps_ += svgPaths.lineOnAxis('H', right);
};

Highlighter.prototype.drawJaggedEdge_ = function(row) {
  if (this.info_.RTL) {
    const remainder =
        row.height - this.jaggedTeethPaths_.height - this.highlightOffset_;
    this.steps_ +=
        this.jaggedTeethPaths_.pathLeft + svgPaths.lineOnAxis('v', remainder);
  }
};

Highlighter.prototype.drawValueInput = function(row) {
  const input = row.getLastInput();
  if (this.RTL_) {
    const belowTabHeight = row.height - input.connectionHeight;

    this.steps_ +=
        svgPaths.moveTo(
            input.xPos + input.width - this.highlightOffset_, row.yPos) +
        this.puzzleTabPaths_.pathDown(this.RTL_) +
        svgPaths.lineOnAxis('v', belowTabHeight);
  } else {
    this.steps_ += svgPaths.moveTo(input.xPos + input.width, row.yPos) +
        this.puzzleTabPaths_.pathDown(this.RTL_);
  }
};

Highlighter.prototype.drawStatementInput = function(row) {
  const input = row.getLastInput();
  if (this.RTL_) {
    const innerHeight = row.height - (2 * this.insideCornerPaths_.height);
    this.steps_ += svgPaths.moveTo(input.xPos, row.yPos) +
        this.insideCornerPaths_.pathTop(this.RTL_) +
        svgPaths.lineOnAxis('v', innerHeight) +
        this.insideCornerPaths_.pathBottom(this.RTL_) +
        svgPaths.lineTo(
            row.width - input.xPos - this.insideCornerPaths_.width, 0);
  } else {
    this.steps_ += svgPaths.moveTo(input.xPos, row.yPos + row.height) +
        this.insideCornerPaths_.pathBottom(this.RTL_) +
        svgPaths.lineTo(
            row.width - input.xPos - this.insideCornerPaths_.width, 0);
  }
};

Highlighter.prototype.drawRightSideRow = function(row) {
  const rightEdge = row.xPos + row.width - this.highlightOffset_;
  if (row.followsStatement) {
    this.steps_ += svgPaths.lineOnAxis('H', rightEdge);
  }
  if (this.RTL_) {
    this.steps_ += svgPaths.lineOnAxis('H', rightEdge);
    if (row.height > this.highlightOffset_) {
      this.steps_ += svgPaths.lineOnAxis(
          'V', row.yPos + row.height - this.highlightOffset_);
    }
  }
};

Highlighter.prototype.drawBottomRow = function(row) {
  // Highlight the vertical edge of the bottom row on the input side.
  // Highlighting is always from the top left, both in LTR and RTL.
  if (this.RTL_) {
    this.steps_ +=
        svgPaths.lineOnAxis('V', row.baseline - this.highlightOffset_);
  } else {
    const cornerElem = this.info_.bottomRow.elements[0];
    if (Types.isLeftSquareCorner(cornerElem)) {
      this.steps_ += svgPaths.moveTo(
          row.xPos + this.highlightOffset_,
          row.baseline - this.highlightOffset_);
    } else if (Types.isLeftRoundedCorner(cornerElem)) {
      this.steps_ += svgPaths.moveTo(row.xPos, row.baseline);
      this.steps_ += this.outsideCornerPaths_.bottomLeft();
    }
  }
};

Highlighter.prototype.drawLeft = function() {
  const outputConnection = this.info_.outputConnection;
  if (outputConnection) {
    const tabBottom =
        outputConnection.connectionOffsetY + outputConnection.height;
    // Draw a line up to the bottom of the tab.
    if (this.RTL_) {
      this.steps_ += svgPaths.moveTo(this.info_.startX, tabBottom);
    } else {
      const left = this.info_.startX + this.highlightOffset_;
      const bottom = this.info_.bottomRow.baseline - this.highlightOffset_;
      this.steps_ += svgPaths.moveTo(left, bottom);
      this.steps_ += svgPaths.lineOnAxis('V', tabBottom);
    }
    this.steps_ += this.puzzleTabPaths_.pathUp(this.RTL_);
  }

  if (!this.RTL_) {
    const topRow = this.info_.topRow;
    if (Types.isLeftRoundedCorner(topRow.elements[0])) {
      this.steps_ += svgPaths.lineOnAxis('V', this.outsideCornerPaths_.height);
    } else {
      this.steps_ +=
          svgPaths.lineOnAxis('V', topRow.capline + this.highlightOffset_);
    }
  }
};

Highlighter.prototype.drawInlineInput = function(input) {
  const offset = this.highlightOffset_;

  // Relative to the block's left.
  const connectionRight = input.xPos + input.connectionWidth;
  const yPos = input.centerline - input.height / 2;
  const bottomHighlightWidth = input.width - input.connectionWidth;
  const startY = yPos + offset;

  if (this.RTL_) {
    const aboveTabHeight = input.connectionOffsetY - offset;
    const belowTabHeight = input.height -
        (input.connectionOffsetY + input.connectionHeight) + offset;

    const startX = connectionRight - offset;

    this.inlineSteps_ += svgPaths.moveTo(startX, startY) +
        // Right edge above tab.
        svgPaths.lineOnAxis('v', aboveTabHeight) +
        // Back of tab.
        this.puzzleTabPaths_.pathDown(this.RTL_) +
        // Right edge below tab.
        svgPaths.lineOnAxis('v', belowTabHeight) +
        // Bottom.
        svgPaths.lineOnAxis('h', bottomHighlightWidth);
  } else {
    this.inlineSteps_ +=
        // Go to top right corner.
        svgPaths.moveTo(input.xPos + input.width + offset, startY) +
        // Highlight right edge, bottom.
        svgPaths.lineOnAxis('v', input.height) +
        svgPaths.lineOnAxis('h', -bottomHighlightWidth) +
        // Go to top of tab.
        svgPaths.moveTo(connectionRight, yPos + input.connectionOffsetY) +
        // Short highlight glint at bottom of tab.
        this.puzzleTabPaths_.pathDown(this.RTL_);
  }
};

exports.Highlighter = Highlighter;
