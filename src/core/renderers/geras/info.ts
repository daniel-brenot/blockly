/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Old (compatibility) renderer.
 * Geras: spirit of old age.
 * @class
 */

import object from 'blockly/core/utils/object';
import {BlockSvg} from 'blockly/core/block_svg';
import {ExternalValueInput} from 'blockly/core/renderers/measurables/external_value_input';
import {Field} from 'blockly/core/renderers/measurables/field';
import {InRowSpacer} from 'blockly/core/renderers/measurables/in_row_spacer';
import {InlineInput} from 'blockly/core/renderers/geras/measurables/inline_input';
import {InputRow} from 'blockly/core/renderers/measurables/input_row';
import {RenderInfo: BaseRenderInfo} from 'blockly/core/renderers/common/info';
import {Renderer} from 'blockly/core/renderers/geras/renderer';
import {StatementInput} from 'blockly/core/renderers/geras/measurables/statement_input';
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
 * @alias Blockly.geras.RenderInfo
 */
function RenderInfo(renderer, block) {
  RenderInfo.superClass_.constructor.call(this, renderer, block);
}
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
RenderInfo.prototype.populateBottomRow_ = function() {
  RenderInfo.superClass_.populateBottomRow_.call(this);

  const followsStatement = this.block_.inputList.length &&
      this.block_.inputList[this.block_.inputList.length - 1].type ===
          inputTypes.STATEMENT;

  // The minimum height of the bottom row is smaller in Geras than in other
  // renderers, because the dark path adds a pixel.
  // If one of the row's elements has a greater height this will be overwritten
  // in the compute pass.
  if (!followsStatement) {
    this.bottomRow.minHeight =
        this.constants_.MEDIUM_PADDING - this.constants_.DARK_PATH_OFFSET;
  }
};

/**
 * @override
 */
RenderInfo.prototype.addInput_ = function(input, activeRow) {
  // Non-dummy inputs have visual representations onscreen.
  if (this.isInline && input.type === inputTypes.VALUE) {
    activeRow.elements.push(new InlineInput(this.constants_, input));
    activeRow.hasInlineInput = true;
  } else if (input.type === inputTypes.STATEMENT) {
    activeRow.elements.push(new StatementInput(this.constants_, input));
    activeRow.hasStatement = true;
  } else if (input.type === inputTypes.VALUE) {
    activeRow.elements.push(new ExternalValueInput(this.constants_, input));
    activeRow.hasExternalInput = true;
  } else if (input.type === inputTypes.DUMMY) {
    // Dummy inputs have no visual representation, but the information is still
    // important.
    activeRow.minHeight =
        Math.max(activeRow.minHeight, this.constants_.DUMMY_INPUT_MIN_HEIGHT);
    activeRow.hasDummyInput = true;
  }
  // Ignore row alignment if inline.
  if (!this.isInline && activeRow.align === null) {
    activeRow.align = input.align;
  }
};

/**
 * @override
 */
RenderInfo.prototype.addElemSpacing_ = function() {
  let hasExternalInputs = false;
  for (let i = 0, row; (row = this.rows[i]); i++) {
    if (row.hasExternalInput) {
      hasExternalInputs = true;
    }
  }
  for (let i = 0, row; (row = this.rows[i]); i++) {
    const oldElems = row.elements;
    row.elements = [];
    // No spacing needed before the corner on the top row or the bottom row.
    if (row.startsWithElemSpacer()) {
      // There's a spacer before the first element in the row.
      row.elements.push(new InRowSpacer(
          this.constants_, this.getInRowSpacing_(null, oldElems[0])));
    }
    if (!oldElems.length) {
      continue;
    }
    for (let e = 0; e < oldElems.length - 1; e++) {
      row.elements.push(oldElems[e]);
      const spacing = this.getInRowSpacing_(oldElems[e], oldElems[e + 1]);
      row.elements.push(new InRowSpacer(this.constants_, spacing));
    }
    row.elements.push(oldElems[oldElems.length - 1]);
    if (row.endsWithElemSpacer()) {
      let spacing = this.getInRowSpacing_(oldElems[oldElems.length - 1], null);
      if (hasExternalInputs && row.hasDummyInput) {
        spacing += this.constants_.TAB_WIDTH;
      }
      // There's a spacer after the last element in the row.
      row.elements.push(new InRowSpacer(this.constants_, spacing));
    }
  }
};

/**
 * @override
 */
RenderInfo.prototype.getInRowSpacing_ = function(prev, next) {
  if (!prev) {
    // Between an editable field and the beginning of the row.
    if (next && Types.isField(next) &&
        (/** @type {Field} */ (next)).isEditable) {
      return this.constants_.MEDIUM_PADDING;
    }
    // Inline input at the beginning of the row.
    if (next && Types.isInlineInput(next)) {
      return this.constants_.MEDIUM_LARGE_PADDING;
    }
    if (next && Types.isStatementInput(next)) {
      return this.constants_.STATEMENT_INPUT_PADDING_LEFT;
    }
    // Anything else at the beginning of the row.
    return this.constants_.LARGE_PADDING;
  }

  // Spacing between a non-input and the end of the row or a statement input.
  if (!Types.isInput(prev) && (!next || Types.isStatementInput(next))) {
    // Between an editable field and the end of the row.
    if (Types.isField(prev) && (/** @type {Field} */ (prev)).isEditable) {
      return this.constants_.MEDIUM_PADDING;
    }
    // Padding at the end of an icon-only row to make the block shape clearer.
    if (Types.isIcon(prev)) {
      return (this.constants_.LARGE_PADDING * 2) + 1;
    }
    if (Types.isHat(prev)) {
      return this.constants_.NO_PADDING;
    }
    // Establish a minimum width for a block with a previous or next connection.
    if (Types.isPreviousOrNextConnection(prev)) {
      return this.constants_.LARGE_PADDING;
    }
    // Between rounded corner and the end of the row.
    if (Types.isLeftRoundedCorner(prev)) {
      return this.constants_.MIN_BLOCK_WIDTH;
    }
    // Between a jagged edge and the end of the row.
    if (Types.isJaggedEdge(prev)) {
      return this.constants_.NO_PADDING;
    }
    // Between noneditable fields and icons and the end of the row.
    return this.constants_.LARGE_PADDING;
  }

  // Between inputs and the end of the row.
  if (Types.isInput(prev) && !next) {
    if (Types.isExternalInput(prev)) {
      return this.constants_.NO_PADDING;
    } else if (Types.isInlineInput(prev)) {
      return this.constants_.LARGE_PADDING;
    } else if (Types.isStatementInput(prev)) {
      return this.constants_.NO_PADDING;
    }
  }

  // Spacing between a non-input and an input.
  if (!Types.isInput(prev) && next && Types.isInput(next)) {
    // Between an editable field and an input.
    if (Types.isField(prev) && (/** @type {Field} */ (prev)).isEditable) {
      if (Types.isInlineInput(next)) {
        return this.constants_.SMALL_PADDING;
      } else if (Types.isExternalInput(next)) {
        return this.constants_.SMALL_PADDING;
      }
    } else {
      if (Types.isInlineInput(next)) {
        return this.constants_.MEDIUM_LARGE_PADDING;
      } else if (Types.isExternalInput(next)) {
        return this.constants_.MEDIUM_LARGE_PADDING;
      } else if (Types.isStatementInput(next)) {
        return this.constants_.LARGE_PADDING;
      }
    }
    return this.constants_.LARGE_PADDING - 1;
  }

  // Spacing between an icon and an icon or field.
  if (Types.isIcon(prev) && next && !Types.isInput(next)) {
    return this.constants_.LARGE_PADDING;
  }

  // Spacing between an inline input and a field.
  if (Types.isInlineInput(prev) && next && Types.isField(next)) {
    // Editable field after inline input.
    if ((/** @type {Field} */ (next)).isEditable) {
      return this.constants_.MEDIUM_PADDING;
    } else {
      // Noneditable field after inline input.
      return this.constants_.LARGE_PADDING;
    }
  }

  if (Types.isLeftSquareCorner(prev) && next) {
    // Spacing between a hat and a corner
    if (Types.isHat(next)) {
      return this.constants_.NO_PADDING;
    }
    // Spacing between a square corner and a previous or next connection
    if (Types.isPreviousConnection(next)) {
      return next.notchOffset;
    } else if (Types.isNextConnection(next)) {
      // Next connections are shifted slightly to the left (in both LTR and RTL)
      // to make the dark path under the previous connection show through.
      const offset = (this.RTL ? 1 : -1) * this.constants_.DARK_PATH_OFFSET / 2;
      return next.notchOffset + offset;
    }
  }

  // Spacing between a rounded corner and a previous or next connection.
  if (Types.isLeftRoundedCorner(prev) && next) {
    if (Types.isPreviousConnection(next)) {
      return next.notchOffset - this.constants_.CORNER_RADIUS;
    } else if (Types.isNextConnection(next)) {
      // Next connections are shifted slightly to the left (in both LTR and RTL)
      // to make the dark path under the previous connection show through.
      const offset = (this.RTL ? 1 : -1) * this.constants_.DARK_PATH_OFFSET / 2;
      return next.notchOffset - this.constants_.CORNER_RADIUS + offset;
    }
  }

  // Spacing between two fields of the same editability.
  if (Types.isField(prev) && next && Types.isField(next) &&
      ((/** @type {Field} */ (prev)).isEditable ===
       (/** @type {Field} */ (next)).isEditable)) {
    return this.constants_.LARGE_PADDING;
  }

  // Spacing between anything and a jagged edge.
  if (next && Types.isJaggedEdge(next)) {
    return this.constants_.LARGE_PADDING;
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
  // Top and bottom rows act as a spacer so we don't need any extra padding.
  if (Types.isTopRow(prev) || Types.isBottomRow(next)) {
    return this.constants_.NO_PADDING;
  }
  if (prev.hasExternalInput && next.hasExternalInput) {
    return this.constants_.LARGE_PADDING;
  }
  if (!prev.hasStatement && next.hasStatement) {
    return this.constants_.BETWEEN_STATEMENT_PADDING_Y;
  }
  if (prev.hasStatement && next.hasStatement) {
    return this.constants_.LARGE_PADDING;
  }
  if (!prev.hasStatement && next.hasDummyInput) {
    return this.constants_.LARGE_PADDING;
  }
  if (prev.hasDummyInput) {
    return this.constants_.LARGE_PADDING;
  }
  return this.constants_.MEDIUM_PADDING;
};

/**
 * @override
 */
RenderInfo.prototype.getElemCenterline_ = function(row, elem) {
  if (Types.isSpacer(elem)) {
    return row.yPos + elem.height / 2;
  }
  if (Types.isBottomRow(row)) {
    const baseline = row.yPos + row.height - row.descenderHeight;
    if (Types.isNextConnection(elem)) {
      return baseline + elem.height / 2;
    }
    return baseline - elem.height / 2;
  }
  if (Types.isTopRow(row)) {
    if (Types.isHat(elem)) {
      return row.capline - elem.height / 2;
    }
    return row.capline + elem.height / 2;
  }

  let result = row.yPos;
  if (Types.isField(elem) || Types.isIcon(elem)) {
    result += (elem.height / 2);
    if ((row.hasInlineInput || row.hasStatement) &&
        elem.height + this.constants_.TALL_INPUT_FIELD_OFFSET_Y <= row.height) {
      result += this.constants_.TALL_INPUT_FIELD_OFFSET_Y;
    }
  } else if (Types.isInlineInput(elem)) {
    result += elem.height / 2;
  } else {
    result += (row.height / 2);
  }
  return result;
};

/**
 * @override
 */
RenderInfo.prototype.alignRowElements_ = function() {
  if (!this.isInline) {
    RenderInfo.superClass_.alignRowElements_.call(this);
    return;
  }

  // Walk backgrounds through rows on the block, keeping track of the right
  // input edge.
  let nextRightEdge = 0;
  let prevInput = null;
  for (let i = this.rows.length - 1, row; (row = this.rows[i]); i--) {
    row.nextRightEdge = nextRightEdge;
    if (Types.isInputRow(row)) {
      if (row.hasStatement) {
        this.alignStatementRow_(
            /** @type {!InputRow} */ (row));
      }
      if (prevInput && prevInput.hasStatement && row.width < prevInput.width) {
        row.nextRightEdge = prevInput.width;
      } else {
        nextRightEdge = row.width;
      }
      prevInput = row;
    }
  }
  // Walk down each row from the top, comparing the prev and next right input
  // edges and setting the desired width to the max of the two.
  let prevRightEdge = 0;
  for (let i = 0, row; (row = this.rows[i]); i++) {
    if (row.hasStatement) {
      prevRightEdge = this.getDesiredRowWidth_(row);
    } else if (Types.isSpacer(row)) {
      // Set the spacer row to the max of the prev or next input width.
      row.width = Math.max(prevRightEdge, row.nextRightEdge);
    } else {
      const currentWidth = row.width;
      const desiredWidth = Math.max(prevRightEdge, row.nextRightEdge);
      const missingSpace = desiredWidth - currentWidth;
      if (missingSpace > 0) {
        this.addAlignmentPadding_(row, missingSpace);
      }
      prevRightEdge = row.width;
    }
  }
};

/**
 * @override
 */
RenderInfo.prototype.getDesiredRowWidth_ = function(row) {
  // Limit the width of a statement row when a block is inline.
  if (this.isInline && row.hasStatement) {
    return this.statementEdge + this.constants_.MAX_BOTTOM_WIDTH + this.startX;
  }
  return RenderInfo.superClass_.getDesiredRowWidth_.call(this, row);
};

/**
 * @override
 */
RenderInfo.prototype.finalize_ = function() {
  // Performance note: this could be combined with the draw pass, if the time
  // that this takes is excessive.  But it shouldn't be, because it only
  // accesses and sets properties that already exist on the objects.
  let widestRowWithConnectedBlocks = 0;
  let yCursor = 0;
  for (let i = 0, row; (row = this.rows[i]); i++) {
    row.yPos = yCursor;
    row.xPos = this.startX;
    yCursor += row.height;

    widestRowWithConnectedBlocks =
        Math.max(widestRowWithConnectedBlocks, row.widthWithConnectedBlocks);
    // Add padding to the bottom row if block height is less than minimum
    const heightWithoutHat = yCursor - this.topRow.ascenderHeight;
    if (row === this.bottomRow &&
        heightWithoutHat < this.constants_.MIN_BLOCK_HEIGHT) {
      // But the hat height shouldn't be part of this.
      const diff = this.constants_.MIN_BLOCK_HEIGHT - heightWithoutHat;
      this.bottomRow.height += diff;
      yCursor += diff;
    }
    this.recordElemPositions_(row);
  }
  if (this.outputConnection && this.block_.nextConnection &&
      this.block_.nextConnection.isConnected()) {
    // Include width of connected block in value to stack width measurement.
    widestRowWithConnectedBlocks = Math.max(
        widestRowWithConnectedBlocks,
        this.block_.nextConnection.targetBlock().getHeightWidth().width -
            this.constants_.DARK_PATH_OFFSET);
  }

  this.bottomRow.baseline = yCursor - this.bottomRow.descenderHeight;

  // The dark (lowlight) adds to the size of the block in both x and y.
  this.widthWithChildren = widestRowWithConnectedBlocks + this.startX +
      this.constants_.DARK_PATH_OFFSET;
  this.width += this.constants_.DARK_PATH_OFFSET;
  this.height = yCursor + this.constants_.DARK_PATH_OFFSET;
  this.startY = this.topRow.capline;
};

exports.RenderInfo = RenderInfo;
