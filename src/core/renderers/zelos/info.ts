/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Makecode/scratch-style renderer.
 * @class
 */

import {Align} from 'blockly/core/input';
import object from 'blockly/core/utils/object';
import {BlockSvg} from 'blockly/core/block_svg';
import {BottomRow} from 'blockly/core/renderers/zelos/measurables/bottom_row';
import {ConstantProvider} from 'blockly/core/renderers/zelos/constants';
import {FieldImage} from 'blockly/core/field_image';
import {FieldLabel} from 'blockly/core/field_label';
import {FieldTextInput} from 'blockly/core/field_textinput';
import {InRowSpacer} from 'blockly/core/renderers/measurables/in_row_spacer';
import {Measurable} from 'blockly/core/renderers/measurables/base';
import {RenderInfo: BaseRenderInfo} from 'blockly/core/renderers/common/info';
import {Renderer} from 'blockly/core/renderers/zelos/renderer';
import {RightConnectionShape} from 'blockly/core/renderers/zelos/measurables/row_elements';
import {StatementInput} from 'blockly/core/renderers/zelos/measurables/inputs';
import {TopRow} from 'blockly/core/renderers/zelos/measurables/top_row';
import {Types} from 'blockly/core/renderers/measurables/types';
import {inputTypes} from 'blockly/core/input_types';


/**
 * An object containing all sizing information needed to draw this block.
 *
 * This measure pass does not propagate changes to the block (although fields
 * may choose to rerender when getSize() is called).  However, calling it
 * repeatedly may be expensive.
 *
 * @param {!Renderer} renderer The renderer in use.
 * @param {!BlockSvg} block The block to measure.
 * @constructor
 * @package
 * @extends {BaseRenderInfo}
 * @alias Blockly.zelos.RenderInfo
 */
const RenderInfo = function(renderer, block) {
  RenderInfo.superClass_.constructor.call(this, renderer, block);

  /**
   * An object with rendering information about the top row of the block.
   * @type {!TopRow}
   * @override
   */
  this.topRow = new TopRow(this.constants_);

  /**
   * An object with rendering information about the bottom row of the block.
   * @type {!BottomRow}
   * @override
   */
  this.bottomRow = new BottomRow(this.constants_);

  /**
   * @override
   */
  this.isInline = true;

  /**
   * Whether the block should be rendered as a multi-line block, either because
   * it's not inline or because it has been collapsed.
   * @type {boolean}
   */
  this.isMultiRow = !block.getInputsInline() || block.isCollapsed();

  /**
   * Whether or not the block has a statement input in one of its rows.
   * @type {boolean}
   */
  this.hasStatementInput = block.statementInputCount > 0;

  /**
   * An object with rendering information about the right connection shape.
   * @type {RightConnectionShape}
   */
  this.rightSide =
      this.outputConnection ? new RightConnectionShape(this.constants_) : null;
};
object.inherits(RenderInfo, BaseRenderInfo);

/**
 * Get the block renderer in use.
 * @return {!Renderer} The block renderer in use.
 * @package
 */
RenderInfo.prototype.getRenderer = function() {
  return /** @type {!Renderer} */ (this.renderer_);
};

/**
 * @override
 */
RenderInfo.prototype.measure = function() {
  // Modifying parent measure method to add `adjustXPosition_`.
  this.createRows_();
  this.addElemSpacing_();
  this.addRowSpacing_();
  this.adjustXPosition_();
  this.computeBounds_();
  this.alignRowElements_();
  this.finalize_();
};

/**
 * @override
 */
RenderInfo.prototype.shouldStartNewRow_ = function(input, lastInput) {
  // If this is the first input, just add to the existing row.
  // That row is either empty or has some icons in it.
  if (!lastInput) {
    return false;
  }
  // A statement input or an input following one always gets a new row.
  if (input.type === inputTypes.STATEMENT ||
      lastInput.type === inputTypes.STATEMENT) {
    return true;
  }
  // Value and dummy inputs get new row if inputs are not inlined.
  if (input.type === inputTypes.VALUE || input.type === inputTypes.DUMMY) {
    return !this.isInline || this.isMultiRow;
  }
  return false;
};


/**
 * @override
 */
RenderInfo.prototype.getDesiredRowWidth_ = function(row) {
  if (row.hasStatement) {
    const rightCornerWidth = this.constants_.INSIDE_CORNERS.rightWidth || 0;
    return this.width - this.startX - rightCornerWidth;
  }
  return RenderInfo.superClass_.getDesiredRowWidth_.call(this, row);
};

/**
 * @override
 */
RenderInfo.prototype.getInRowSpacing_ = function(prev, next) {
  if (!prev || !next) {
    // No need for padding at the beginning or end of the row if the
    // output shape is dynamic.
    if (this.outputConnection && this.outputConnection.isDynamicShape &&
        !this.hasStatementInput && !this.bottomRow.hasNextConnection) {
      return this.constants_.NO_PADDING;
    }
  }
  if (!prev) {
    // Statement input padding.
    if (next && Types.isStatementInput(next)) {
      return this.constants_.STATEMENT_INPUT_PADDING_LEFT;
    }
  }
  // Spacing between a rounded corner and a previous or next connection.
  if (prev && Types.isLeftRoundedCorner(prev) && next) {
    if (Types.isPreviousConnection(next) || Types.isNextConnection(next)) {
      return next.notchOffset - this.constants_.CORNER_RADIUS;
    }
  }
  // Spacing between a square corner and a hat.
  if (prev && Types.isLeftSquareCorner(prev) && next && Types.isHat(next)) {
    return this.constants_.NO_PADDING;
  }
  return this.constants_.MEDIUM_PADDING;
};

/**
 * @override
 */
RenderInfo.prototype.getSpacerRowHeight_ = function(prev, next) {
  // If we have an empty block add a spacer to increase the height.
  if (Types.isTopRow(prev) && Types.isBottomRow(next)) {
    return this.constants_.EMPTY_BLOCK_SPACER_HEIGHT;
  }
  const followsStatement = Types.isInputRow(prev) && prev.hasStatement;
  const precedesStatement = Types.isInputRow(next) && next.hasStatement;
  if (precedesStatement || followsStatement) {
    const cornerHeight = this.constants_.INSIDE_CORNERS.rightHeight || 0;
    const height = Math.max(this.constants_.NOTCH_HEIGHT, cornerHeight);
    return precedesStatement && followsStatement ?
        Math.max(height, this.constants_.DUMMY_INPUT_MIN_HEIGHT) :
        height;
  }
  // Top and bottom rows act as a spacer so we don't need any extra padding.
  if (Types.isTopRow(prev)) {
    if (!prev.hasPreviousConnection &&
        (!this.outputConnection || this.hasStatementInput)) {
      return Math.abs(
          this.constants_.NOTCH_HEIGHT - this.constants_.CORNER_RADIUS);
    }
    return this.constants_.NO_PADDING;
  }
  if (Types.isBottomRow(next)) {
    if (!this.outputConnection) {
      const topHeight = Math.max(
                            this.topRow.minHeight,
                            Math.max(
                                this.constants_.NOTCH_HEIGHT,
                                this.constants_.CORNER_RADIUS)) -
          this.constants_.CORNER_RADIUS;
      return topHeight;
    } else if (!next.hasNextConnection && this.hasStatementInput) {
      return Math.abs(
          this.constants_.NOTCH_HEIGHT - this.constants_.CORNER_RADIUS);
    }
    return this.constants_.NO_PADDING;
  }
  return this.constants_.MEDIUM_PADDING;
};

/**
 * @override
 */
RenderInfo.prototype.getSpacerRowWidth_ = function(prev, next) {
  const width = this.width - this.startX;
  if ((Types.isInputRow(prev) && prev.hasStatement) ||
      (Types.isInputRow(next) && next.hasStatement)) {
    return Math.max(width, this.constants_.STATEMENT_INPUT_SPACER_MIN_WIDTH);
  }
  return width;
};

/**
 * @override
 */
RenderInfo.prototype.getElemCenterline_ = function(row, elem) {
  if (row.hasStatement && !Types.isSpacer(elem) &&
      !Types.isStatementInput(elem)) {
    return row.yPos + this.constants_.EMPTY_STATEMENT_INPUT_HEIGHT / 2;
  }
  if (Types.isInlineInput(elem)) {
    const connectedBlock = elem.connectedBlock;
    if (connectedBlock && connectedBlock.outputConnection &&
        connectedBlock.nextConnection) {
      return row.yPos + connectedBlock.height / 2;
    }
  }
  return RenderInfo.superClass_.getElemCenterline_.call(this, row, elem);
};

/**
 * @override
 */
RenderInfo.prototype.addInput_ = function(input, activeRow) {
  // If we have two dummy inputs on the same row, one aligned left and the other
  // right, keep track of the right aligned dummy input so we can add padding
  // later.
  if (input.type === inputTypes.DUMMY && activeRow.hasDummyInput &&
      activeRow.align === Align.LEFT && input.align === Align.RIGHT) {
    activeRow.rightAlignedDummyInput = input;
  } else if (input.type === inputTypes.STATEMENT) {
    // Handle statements without next connections correctly.
    activeRow.elements.push(new StatementInput(this.constants_, input));
    activeRow.hasStatement = true;

    if (activeRow.align === null) {
      activeRow.align = input.align;
    }
    return;
  }
  RenderInfo.superClass_.addInput_.call(this, input, activeRow);
};

/**
 * @override
 */
RenderInfo.prototype.addAlignmentPadding_ = function(row, missingSpace) {
  if (row.rightAlignedDummyInput) {
    let alignmentDivider;
    for (let i = 0; i < row.elements.length; i++) {
      const elem = row.elements[i];
      if (Types.isSpacer(elem)) {
        alignmentDivider = elem;
      }
      if (Types.isField(elem) &&
          elem.parentInput === row.rightAlignedDummyInput) {
        break;
      }
    }
    if (alignmentDivider) {
      alignmentDivider.width += missingSpace;
      row.width += missingSpace;
      return;
    }
  }
  RenderInfo.superClass_.addAlignmentPadding_.call(this, row, missingSpace);
};

/**
 * Adjust the x position of fields to bump all non-label fields in the first row
 * past the notch position.  This must be called before ``computeBounds`` is
 * called.
 * @protected
 */
RenderInfo.prototype.adjustXPosition_ = function() {
  const notchTotalWidth =
      this.constants_.NOTCH_OFFSET_LEFT + this.constants_.NOTCH_WIDTH;
  let minXPos = notchTotalWidth;
  // Run through every input row on the block and only apply bump logic to the
  // first input row (if the block has prev connection) and every input row that
  // has a prev and next notch.
  for (let i = 2; i < this.rows.length - 1; i += 2) {
    const prevSpacer = this.rows[i - 1];
    const row = this.rows[i];
    const nextSpacer = this.rows[i + 1];

    const hasPrevNotch = i === 2 ? !!this.topRow.hasPreviousConnection :
                                   !!prevSpacer.followsStatement;
    const hasNextNotch = i + 2 >= this.rows.length - 1 ?
        !!this.bottomRow.hasNextConnection :
        !!nextSpacer.precedesStatement;

    if (Types.isInputRow(row) && row.hasStatement) {
      row.measure();
      minXPos = row.width - row.getLastInput().width + notchTotalWidth;
    } else if (
        hasPrevNotch && (i === 2 || hasNextNotch) && Types.isInputRow(row) &&
        !row.hasStatement) {
      let xCursor = row.xPos;
      let prevInRowSpacer = null;
      for (let j = 0; j < row.elements.length; j++) {
        const elem = row.elements[j];
        if (Types.isSpacer(elem)) {
          prevInRowSpacer = elem;
        }
        if (prevInRowSpacer && (Types.isField(elem) || Types.isInput(elem))) {
          if (xCursor < minXPos &&
              !(Types.isField(elem) &&
                (elem.field instanceof FieldLabel ||
                 elem.field instanceof FieldImage))) {
            const difference = minXPos - xCursor;
            prevInRowSpacer.width += difference;
          }
        }
        xCursor += elem.width;
      }
    }
  }
};

/**
 * Finalize the output connection info.  In particular, set the height of the
 * output connection to match that of the block.  For the right side, add a
 * right connection shape element and have it match the dimensions of the
 * output connection.
 * @protected
 */
RenderInfo.prototype.finalizeOutputConnection_ = function() {
  // Dynamic output connections depend on the height of the block.
  if (!this.outputConnection || !this.outputConnection.isDynamicShape) {
    return;
  }
  let yCursor = 0;
  // Determine the block height.
  for (let i = 0; i < this.rows.length; i++) {
    const row = this.rows[i];
    row.yPos = yCursor;
    yCursor += row.height;
  }
  this.height = yCursor;

  // Adjust the height of the output connection.
  const blockHeight = this.bottomRow.hasNextConnection ?
      this.height - this.bottomRow.descenderHeight :
      this.height;
  const connectionHeight = this.outputConnection.shape.height(blockHeight);
  const connectionWidth = this.outputConnection.shape.width(blockHeight);

  this.outputConnection.height = connectionHeight;
  this.outputConnection.width = connectionWidth;
  this.outputConnection.startX = connectionWidth;
  this.outputConnection.connectionOffsetY =
      this.outputConnection.shape.connectionOffsetY(connectionHeight);
  this.outputConnection.connectionOffsetX =
      this.outputConnection.shape.connectionOffsetX(connectionWidth);

  // Add the right connection measurable.
  // Don't add it if we have a value-to-statement or a value-to-stack block.
  let rightConnectionWidth = 0;
  if (!this.hasStatementInput && !this.bottomRow.hasNextConnection) {
    rightConnectionWidth = connectionWidth;
    this.rightSide.height = connectionHeight;
    this.rightSide.width = rightConnectionWidth;
    this.rightSide.centerline = connectionHeight / 2;
    this.rightSide.xPos = this.width + rightConnectionWidth;
  }
  this.startX = connectionWidth;
  this.width += connectionWidth + rightConnectionWidth;
  this.widthWithChildren += connectionWidth + rightConnectionWidth;
};

/**
 * Finalize horizontal alignment of elements on the block.  In particular,
 * reduce the implicit spacing created by the left and right output connection
 * shapes by adding setting negative spacing onto the leftmost and rightmost
 * spacers.
 * @protected
 */
RenderInfo.prototype.finalizeHorizontalAlignment_ = function() {
  if (!this.outputConnection || this.hasStatementInput ||
      this.bottomRow.hasNextConnection) {
    return;
  }
  let totalNegativeSpacing = 0;
  for (let i = 0; i < this.rows.length; i++) {
    const row = this.rows[i];
    if (!Types.isInputRow(row)) {
      continue;
    }
    const firstElem = row.elements[1];
    const lastElem = row.elements[row.elements.length - 2];
    let leftNegPadding = this.getNegativeSpacing_(firstElem);
    let rightNegPadding = this.getNegativeSpacing_(lastElem);
    totalNegativeSpacing = leftNegPadding + rightNegPadding;
    const minBlockWidth =
        this.constants_.MIN_BLOCK_WIDTH + this.outputConnection.width * 2;
    if (this.width - totalNegativeSpacing < minBlockWidth) {
      // Maintain a minimum block width, split negative spacing between left
      // and right edge.
      totalNegativeSpacing = this.width - minBlockWidth;
      leftNegPadding = totalNegativeSpacing / 2;
      rightNegPadding = totalNegativeSpacing / 2;
    }
    // Add a negative spacer on the start and end of the block.
    row.elements.unshift(new InRowSpacer(this.constants_, -leftNegPadding));
    row.elements.push(new InRowSpacer(this.constants_, -rightNegPadding));
  }
  if (totalNegativeSpacing) {
    this.width -= totalNegativeSpacing;
    this.widthWithChildren -= totalNegativeSpacing;
    this.rightSide.xPos -= totalNegativeSpacing;
    for (let i = 0; i < this.rows.length; i++) {
      const row = this.rows[i];
      if (Types.isTopOrBottomRow(row)) {
        row.elements[1].width -= totalNegativeSpacing;
        row.elements[1].widthWithConnectedBlocks -= totalNegativeSpacing;
      }
      row.width -= totalNegativeSpacing;
      row.widthWithConnectedBlocks -= totalNegativeSpacing;
    }
  }
};

/**
 * Calculate the spacing to reduce the left and right edges by based on the
 * outer and inner connection shape.
 * @param {Measurable} elem The first or last element on
 *     a block.
 * @return {number} The amount of spacing to reduce the first or last spacer.
 * @protected
 */
RenderInfo.prototype.getNegativeSpacing_ = function(elem) {
  if (!elem) {
    return 0;
  }
  const connectionWidth = this.outputConnection.width;
  const outerShape = this.outputConnection.shape.type;
  const constants =
      /** @type {!ConstantProvider} */ (this.constants_);
  if (this.isMultiRow && this.inputRows.length > 1) {
    switch (outerShape) {
      case constants.SHAPES.ROUND: {
        // Special case for multi-row round reporter blocks.
        const maxWidth = this.constants_.MAX_DYNAMIC_CONNECTION_SHAPE_WIDTH;
        const width = this.height / 2 > maxWidth ? maxWidth : this.height / 2;
        const topPadding = this.constants_.SMALL_PADDING;
        const roundPadding =
            width * (1 - Math.sin(Math.acos((width - topPadding) / width)));
        return connectionWidth - roundPadding;
      }
      default:
        return 0;
    }
  }
  if (Types.isInlineInput(elem)) {
    const connectedBlock = elem.connectedBlock;
    const innerShape = connectedBlock ?
        connectedBlock.pathObject.outputShapeType :
        elem.shape.type;
    // Special case for value to stack / value to statement blocks.
    if (connectedBlock && connectedBlock.outputConnection &&
        (connectedBlock.statementInputCount || connectedBlock.nextConnection)) {
      return 0;
    }
    // Special case for hexagonal output.
    if (outerShape === constants.SHAPES.HEXAGONAL &&
        outerShape !== innerShape) {
      return 0;
    }
    return connectionWidth -
        this.constants_.SHAPE_IN_SHAPE_PADDING[outerShape][innerShape];
  } else if (Types.isField(elem)) {
    // Special case for text inputs.
    if (outerShape === constants.SHAPES.ROUND &&
        elem.field instanceof FieldTextInput) {
      return connectionWidth - (2.75 * constants.GRID_UNIT);
    }
    return connectionWidth -
        this.constants_.SHAPE_IN_SHAPE_PADDING[outerShape][0];
  } else if (Types.isIcon(elem)) {
    return this.constants_.SMALL_PADDING;
  }
  return 0;
};

/**
 * Finalize vertical alignment of rows on a block.  In particular, reduce the
 * implicit spacing when a non-shadow block is connected to any of an input
 * row's inline inputs.
 * @protected
 */
RenderInfo.prototype.finalizeVerticalAlignment_ = function() {
  if (this.outputConnection) {
    return;
  }
  // Run through every input row on the block and only apply tight nesting logic
  // to input rows that have a prev and next notch.
  for (let i = 2; i < this.rows.length - 1; i += 2) {
    const prevSpacer = this.rows[i - 1];
    const row = this.rows[i];
    const nextSpacer = this.rows[i + 1];

    const firstRow = i === 2;
    const hasPrevNotch = firstRow ? !!this.topRow.hasPreviousConnection :
                                    !!prevSpacer.followsStatement;
    const hasNextNotch = i + 2 >= this.rows.length - 1 ?
        !!this.bottomRow.hasNextConnection :
        !!nextSpacer.precedesStatement;

    if (hasPrevNotch) {
      const hasSingleTextOrImageField = row.elements.length === 3 &&
          (row.elements[1].field instanceof FieldLabel ||
           row.elements[1].field instanceof FieldImage);
      if (!firstRow && hasSingleTextOrImageField) {
        // Remove some padding if we have a single image or text field.
        prevSpacer.height -= this.constants_.SMALL_PADDING;
        nextSpacer.height -= this.constants_.SMALL_PADDING;
        row.height -= this.constants_.MEDIUM_PADDING;
      } else if (!firstRow && !hasNextNotch) {
        // Add a small padding so the notch doesn't clash with inputs/fields.
        prevSpacer.height += this.constants_.SMALL_PADDING;
      } else if (hasNextNotch) {
        // Determine if the input row has non-shadow connected blocks.
        let hasNonShadowConnectedBlocks = false;
        const minVerticalTightNestingHeight = 40;
        for (let j = 0; j < row.elements.length; j++) {
          const elem = row.elements[j];
          if (Types.isInlineInput(elem) && elem.connectedBlock &&
              !elem.connectedBlock.isShadow() &&
              elem.connectedBlock.getHeightWidth().height >=
                  minVerticalTightNestingHeight) {
            hasNonShadowConnectedBlocks = true;
            break;
          }
        }
        // Apply tight-nesting if we have both a prev and next notch and the
        // block has non-shadow connected blocks.
        if (hasNonShadowConnectedBlocks) {
          prevSpacer.height -= this.constants_.SMALL_PADDING;
          nextSpacer.height -= this.constants_.SMALL_PADDING;
        }
      }
    }
  }
};

/**
 * @override
 */
RenderInfo.prototype.finalize_ = function() {
  this.finalizeOutputConnection_();
  this.finalizeHorizontalAlignment_();
  this.finalizeVerticalAlignment_();
  RenderInfo.superClass_.finalize_.call(this);

  if (this.rightSide) {
    this.widthWithChildren += this.rightSide.width;
  }
};

exports.RenderInfo = RenderInfo;
