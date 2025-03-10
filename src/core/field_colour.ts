/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Color input field.
 * @class
 */

import Css from 'blockly/core/css';
import aria from 'blockly/core/utils/aria';
import browserEvents from 'blockly/core/browser_events';
import color from 'blockly/core/utils/colour';
import dom from 'blockly/core/utils/dom';
import fieldRegistry from 'blockly/core/field_registry';
import idGenerator from 'blockly/core/utils/idgenerator';
import object from 'blockly/core/utils/object';
import {DropDownDiv} from 'blockly/core/dropdowndiv';
import {Field} from 'blockly/core/field';
import {KeyCodes} from 'blockly/core/utils/keycodes';
import {Size} from 'blockly/core/utils/size';
goog.require('blockly/core/events/events_block_change');


/**
 * Class for a color input field.
 * @param {string=} opt_value The initial value of the field. Should be in
 *    '#rrggbb' format. Defaults to the first value in the default color array.
 * @param {Function=} opt_validator A function that is called to validate
 *    changes to the field's value. Takes in a color string & returns a
 *    validated color string ('#rrggbb' format), or null to abort the
 *    change.Blockly.
 * @param {Object=} opt_config A map of options used to configure the field.
 *    See the [field creation documentation]{@link
 *    https://developers.google.com/blockly/guides/create-custom-blocks/fields/built-in-fields/color}
 *    for a list of properties this parameter supports.
 * @extends {Field}
 * @constructor
 * @alias Blockly.FieldColor
 */
const FieldColor = function(opt_value, opt_validator, opt_config) {
  FieldColor.superClass_.constructor.call(
      this, opt_value, opt_validator, opt_config);

  /**
   * The field's color picker element.
   * @type {?Element}
   * @private
   */
  this.picker_ = null;

  /**
   * Index of the currently highlighted element.
   * @type {?number}
   * @private
   */
  this.highlightedIndex_ = null;

  /**
   * Mouse click event data.
   * @type {?browserEvents.Data}
   * @private
   */
  this.onClickWrapper_ = null;

  /**
   * Mouse move event data.
   * @type {?browserEvents.Data}
   * @private
   */
  this.onMouseMoveWrapper_ = null;

  /**
   * Mouse enter event data.
   * @type {?browserEvents.Data}
   * @private
   */
  this.onMouseEnterWrapper_ = null;

  /**
   * Mouse leave event data.
   * @type {?browserEvents.Data}
   * @private
   */
  this.onMouseLeaveWrapper_ = null;

  /**
   * Key down event data.
   * @type {?browserEvents.Data}
   * @private
   */
  this.onKeyDownWrapper_ = null;
};
object.inherits(FieldColor, Field);

/**
 * Construct a FieldColor from a JSON arg object.
 * @param {!Object} options A JSON object with options (color).
 * @return {!FieldColor} The new field instance.
 * @package
 * @nocollapse
 */
FieldColor.fromJson = function(options) {
  // `this` might be a subclass of FieldColor if that class doesn't override
  // the static fromJson method.
  return new this(options['color'], undefined, options);
};

/**
 * Serializable fields are saved by the XML renderer, non-serializable fields
 * are not. Editable fields should also be serializable.
 * @type {boolean}
 */
FieldColor.prototype.SERIALIZABLE = true;

/**
 * Mouse cursor style when over the hotspot that initiates the editor.
 */
FieldColor.prototype.CURSOR = 'default';

/**
 * Used to tell if the field needs to be rendered the next time the block is
 * rendered. Color fields are statically sized, and only need to be
 * rendered at initialization.
 * @type {boolean}
 * @protected
 */
FieldColor.prototype.isDirty_ = false;

/**
 * Array of colors used by this field.  If null, use the global list.
 * @type {Array<string>}
 * @private
 */
FieldColor.prototype.colors_ = null;

/**
 * Array of color tooltips used by this field.  If null, use the global list.
 * @type {Array<string>}
 * @private
 */
FieldColor.prototype.titles_ = null;

/**
 * Number of color columns used by this field.  If 0, use the global setting.
 * By default use the global constants for columns.
 * @type {number}
 * @private
 */
FieldColor.prototype.columns_ = 0;

/**
 * Configure the field based on the given map of options.
 * @param {!Object} config A map of options to configure the field based on.
 * @protected
 * @override
 */
FieldColor.prototype.configure_ = function(config) {
  FieldColor.superClass_.configure_.call(this, config);
  if (config['colorOptions']) {
    this.colors_ = config['colorOptions'];
    this.titles_ = config['colorTitles'];
  }
  if (config['columns']) {
    this.columns_ = config['columns'];
  }
};

/**
 * Create the block UI for this color field.
 * @package
 */
FieldColor.prototype.initView = function() {
  this.size_ = new Size(
      this.getConstants().FIELD_COLOR_DEFAULT_WIDTH,
      this.getConstants().FIELD_COLOR_DEFAULT_HEIGHT);
  if (!this.getConstants().FIELD_COLOR_FULL_BLOCK) {
    this.createBorderRect_();
    this.borderRect_.style['fillOpacity'] = '1';
  } else {
    this.clickTarget_ = this.sourceBlock_.getSvgRoot();
  }
};

/**
 * @override
 */
FieldColor.prototype.applyColor = function() {
  if (!this.getConstants().FIELD_COLOR_FULL_BLOCK) {
    if (this.borderRect_) {
      this.borderRect_.style.fill = /** @type {string} */ (this.getValue());
    }
  } else {
    this.sourceBlock_.pathObject.svgPath.setAttribute('fill', this.getValue());
    this.sourceBlock_.pathObject.svgPath.setAttribute('stroke', '#fff');
  }
};

/**
 * Ensure that the input value is a valid color.
 * @param {*=} opt_newValue The input value.
 * @return {?string} A valid color, or null if invalid.
 * @protected
 */
FieldColor.prototype.doClassValidation_ = function(opt_newValue) {
  if (typeof opt_newValue !== 'string') {
    return null;
  }
  return color.parse(opt_newValue);
};

/**
 * Update the value of this color field, and update the displayed color.
 * @param {*} newValue The value to be saved. The default validator guarantees
 * that this is a color in '#rrggbb' format.
 * @protected
 */
FieldColor.prototype.doValueUpdate_ = function(newValue) {
  this.value_ = newValue;
  if (this.borderRect_) {
    this.borderRect_.style.fill = /** @type {string} */ (newValue);
  } else if (this.sourceBlock_ && this.sourceBlock_.rendered) {
    this.sourceBlock_.pathObject.svgPath.setAttribute('fill', newValue);
    this.sourceBlock_.pathObject.svgPath.setAttribute('stroke', '#fff');
  }
};

/**
 * Get the text for this field.  Used when the block is collapsed.
 * @return {string} Text representing the value of this field.
 */
FieldColor.prototype.getText = function() {
  let color = /** @type {string} */ (this.value_);
  // Try to use #rgb format if possible, rather than #rrggbb.
  if (/^#(.)\1(.)\2(.)\3$/.test(color)) {
    color = '#' + color[1] + color[3] + color[5];
  }
  return color;
};

/**
 * An array of color strings for the palette.
 * Copied from goog.ui.ColorPicker.SIMPLE_GRID_COLORS
 * All color pickers use this unless overridden with setColors.
 * @type {!Array<string>}
 */
FieldColor.COLORS = [
  // grays
  '#ffffff',
  '#cccccc',
  '#c0c0c0',
  '#999999',
  '#666666',
  '#333333',
  '#000000',
  // reds
  '#ffcccc',
  '#ff6666',
  '#ff0000',
  '#cc0000',
  '#990000',
  '#660000',
  '#330000',
  // oranges
  '#ffcc99',
  '#ff9966',
  '#ff9900',
  '#ff6600',
  '#cc6600',
  '#993300',
  '#663300',
  // yellows
  '#ffff99',
  '#ffff66',
  '#ffcc66',
  '#ffcc33',
  '#cc9933',
  '#996633',
  '#663333',
  // olives
  '#ffffcc',
  '#ffff33',
  '#ffff00',
  '#ffcc00',
  '#999900',
  '#666600',
  '#333300',
  // greens
  '#99ff99',
  '#66ff99',
  '#33ff33',
  '#33cc00',
  '#009900',
  '#006600',
  '#003300',
  // turquoises
  '#99ffff',
  '#33ffff',
  '#66cccc',
  '#00cccc',
  '#339999',
  '#336666',
  '#003333',
  // blues
  '#ccffff',
  '#66ffff',
  '#33ccff',
  '#3366ff',
  '#3333ff',
  '#000099',
  '#000066',
  // purples
  '#ccccff',
  '#9999ff',
  '#6666cc',
  '#6633ff',
  '#6600cc',
  '#333399',
  '#330099',
  // violets
  '#ffccff',
  '#ff99ff',
  '#cc66cc',
  '#cc33cc',
  '#993399',
  '#663366',
  '#330033',
];

/**
 * The default value for this field.
 * @type {*}
 * @protected
 */
FieldColor.prototype.DEFAULT_VALUE = FieldColor.COLORS[0];

/**
 * An array of tooltip strings for the palette.  If not the same length as
 * COLORS, the color's hex code will be used for any missing titles.
 * All color pickers use this unless overridden with setColors.
 * @type {!Array<string>}
 */
FieldColor.TITLES = [];

/**
 * Number of columns in the palette.
 * All color pickers use this unless overridden with setColumns.
 */
FieldColor.COLUMNS = 7;

/**
 * Set a custom color grid for this field.
 * @param {Array<string>} colors Array of colors for this block,
 *     or null to use default (FieldColor.COLORS).
 * @param {Array<string>=} opt_titles Optional array of color tooltips,
 *     or null to use default (FieldColor.TITLES).
 * @return {!FieldColor} Returns itself (for method chaining).
 */
FieldColor.prototype.setColors = function(colors, opt_titles) {
  this.colors_ = colors;
  if (opt_titles) {
    this.titles_ = opt_titles;
  }
  return this;
};

/**
 * Set a custom grid size for this field.
 * @param {number} columns Number of columns for this block,
 *     or 0 to use default (FieldColor.COLUMNS).
 * @return {!FieldColor} Returns itself (for method chaining).
 */
FieldColor.prototype.setColumns = function(columns) {
  this.columns_ = columns;
  return this;
};

/**
 * Create and show the color field's editor.
 * @protected
 */
FieldColor.prototype.showEditor_ = function() {
  this.dropdownCreate_();
  DropDownDiv.getContentDiv().appendChild(this.picker_);

  DropDownDiv.showPositionedByField(this, this.dropdownDispose_.bind(this));

  // Focus so we can start receiving keyboard events.
  this.picker_.focus({preventScroll: true});
};

/**
 * Handle a click on a color cell.
 * @param {!MouseEvent} e Mouse event.
 * @private
 */
FieldColor.prototype.onClick_ = function(e) {
  const cell = /** @type {!Element} */ (e.target);
  const color = cell && cell.label;
  if (color !== null) {
    this.setValue(color);
    DropDownDiv.hideIfOwner(this);
  }
};

/**
 * Handle a key down event. Navigate around the grid with the
 * arrow keys. Enter selects the highlighted color.
 * @param {!KeyboardEvent} e Keyboard event.
 * @private
 */
FieldColor.prototype.onKeyDown_ = function(e) {
  let handled = false;
  if (e.keyCode === KeyCodes.UP) {
    this.moveHighlightBy_(0, -1);
    handled = true;
  } else if (e.keyCode === KeyCodes.DOWN) {
    this.moveHighlightBy_(0, 1);
    handled = true;
  } else if (e.keyCode === KeyCodes.LEFT) {
    this.moveHighlightBy_(-1, 0);
    handled = true;
  } else if (e.keyCode === KeyCodes.RIGHT) {
    this.moveHighlightBy_(1, 0);
    handled = true;
  } else if (e.keyCode === KeyCodes.ENTER) {
    // Select the highlighted color.
    const highlighted = this.getHighlighted_();
    if (highlighted) {
      const color = highlighted && highlighted.label;
      if (color !== null) {
        this.setValue(color);
      }
    }
    DropDownDiv.hideWithoutAnimation();
    handled = true;
  }
  if (handled) {
    e.stopPropagation();
  }
};

/**
 * Move the currently highlighted position by dx and dy.
 * @param {number} dx Change of x
 * @param {number} dy Change of y
 * @private
 */
FieldColor.prototype.moveHighlightBy_ = function(dx, dy) {
  const colors = this.colors_ || FieldColor.COLORS;
  const columns = this.columns_ || FieldColor.COLUMNS;

  // Get the current x and y coordinates
  let x = this.highlightedIndex_ % columns;
  let y = Math.floor(this.highlightedIndex_ / columns);

  // Add the offset
  x += dx;
  y += dy;

  if (dx < 0) {
    // Move left one grid cell, even in RTL.
    // Loop back to the end of the previous row if we have room.
    if (x < 0 && y > 0) {
      x = columns - 1;
      y--;
    } else if (x < 0) {
      x = 0;
    }
  } else if (dx > 0) {
    // Move right one grid cell, even in RTL.
    // Loop to the start of the next row, if there's room.
    if (x > columns - 1 && y < Math.floor(colors.length / columns) - 1) {
      x = 0;
      y++;
    } else if (x > columns - 1) {
      x--;
    }
  } else if (dy < 0) {
    // Move up one grid cell, stop at the top.
    if (y < 0) {
      y = 0;
    }
  } else if (dy > 0) {
    // Move down one grid cell, stop at the bottom.
    if (y > Math.floor(colors.length / columns) - 1) {
      y = Math.floor(colors.length / columns) - 1;
    }
  }

  // Move the highlight to the new coordinates.
  const cell =
      /** @type {!Element} */ (this.picker_.childNodes[y].childNodes[x]);
  const index = (y * columns) + x;
  this.setHighlightedCell_(cell, index);
};

/**
 * Handle a mouse move event. Highlight the hovered color.
 * @param {!MouseEvent} e Mouse event.
 * @private
 */
FieldColor.prototype.onMouseMove_ = function(e) {
  const cell = /** @type {!Element} */ (e.target);
  const index = cell && Number(cell.getAttribute('data-index'));
  if (index !== null && index !== this.highlightedIndex_) {
    this.setHighlightedCell_(cell, index);
  }
};

/**
 * Handle a mouse enter event. Focus the picker.
 * @private
 */
FieldColor.prototype.onMouseEnter_ = function() {
  this.picker_.focus({preventScroll: true});
};

/**
 * Handle a mouse leave event. Blur the picker and unhighlight
 * the currently highlighted color.
 * @private
 */
FieldColor.prototype.onMouseLeave_ = function() {
  this.picker_.blur();
  const highlighted = this.getHighlighted_();
  if (highlighted) {
    dom.removeClass(highlighted, 'blocklyColorHighlighted');
  }
};

/**
 * Returns the currently highlighted item (if any).
 * @return {?HTMLElement} Highlighted item (null if none).
 * @private
 */
FieldColor.prototype.getHighlighted_ = function() {
  const columns = this.columns_ || FieldColor.COLUMNS;
  const x = this.highlightedIndex_ % columns;
  const y = Math.floor(this.highlightedIndex_ / columns);
  const row = this.picker_.childNodes[y];
  if (!row) {
    return null;
  }
  const col = /** @type {HTMLElement} */ (row.childNodes[x]);
  return col;
};

/**
 * Update the currently highlighted cell.
 * @param {!Element} cell the new cell to highlight
 * @param {number} index the index of the new cell
 * @private
 */
FieldColor.prototype.setHighlightedCell_ = function(cell, index) {
  // Unhighlight the current item.
  const highlighted = this.getHighlighted_();
  if (highlighted) {
    dom.removeClass(highlighted, 'blocklyColorHighlighted');
  }
  // Highlight new item.
  dom.addClass(cell, 'blocklyColorHighlighted');
  // Set new highlighted index.
  this.highlightedIndex_ = index;

  // Update accessibility roles.
  aria.setState(
      /** @type {!Element} */ (this.picker_), aria.State.ACTIVEDESCENDANT,
      cell.getAttribute('id'));
};

/**
 * Create a color picker dropdown editor.
 * @private
 */
FieldColor.prototype.dropdownCreate_ = function() {
  const columns = this.columns_ || FieldColor.COLUMNS;
  const colors = this.colors_ || FieldColor.COLORS;
  const titles = this.titles_ || FieldColor.TITLES;
  const selectedColor = this.getValue();
  // Create the palette.
  const table = document.createElement('table');
  table.className = 'blocklyColorTable';
  table.tabIndex = 0;
  table.dir = 'ltr';
  aria.setRole(table, aria.Role.GRID);
  aria.setState(table, aria.State.EXPANDED, true);
  aria.setState(
      table, aria.State.ROWCOUNT, Math.floor(colors.length / columns));
  aria.setState(table, aria.State.COLCOUNT, columns);
  let row;
  for (let i = 0; i < colors.length; i++) {
    if (i % columns === 0) {
      row = document.createElement('tr');
      aria.setRole(row, aria.Role.ROW);
      table.appendChild(row);
    }
    const cell = document.createElement('td');
    row.appendChild(cell);
    cell.label = colors[i];  // This becomes the value, if clicked.
    cell.title = titles[i] || colors[i];
    cell.id = idGenerator.getNextUniqueId();
    cell.setAttribute('data-index', i);
    aria.setRole(cell, aria.Role.GRIDCELL);
    aria.setState(cell, aria.State.LABEL, colors[i]);
    aria.setState(cell, aria.State.SELECTED, colors[i] === selectedColor);
    cell.style.backgroundColor = colors[i];
    if (colors[i] === selectedColor) {
      cell.className = 'blocklyColorSelected';
      this.highlightedIndex_ = i;
    }
  }

  // Configure event handler on the table to listen for any event in a cell.
  this.onClickWrapper_ =
      browserEvents.conditionalBind(table, 'click', this, this.onClick_, true);
  this.onMouseMoveWrapper_ = browserEvents.conditionalBind(
      table, 'mousemove', this, this.onMouseMove_, true);
  this.onMouseEnterWrapper_ = browserEvents.conditionalBind(
      table, 'mouseenter', this, this.onMouseEnter_, true);
  this.onMouseLeaveWrapper_ = browserEvents.conditionalBind(
      table, 'mouseleave', this, this.onMouseLeave_, true);
  this.onKeyDownWrapper_ =
      browserEvents.conditionalBind(table, 'keydown', this, this.onKeyDown_);

  this.picker_ = table;
};

/**
 * Disposes of events and DOM-references belonging to the color editor.
 * @private
 */
FieldColor.prototype.dropdownDispose_ = function() {
  if (this.onClickWrapper_) {
    browserEvents.unbind(this.onClickWrapper_);
    this.onClickWrapper_ = null;
  }
  if (this.onMouseMoveWrapper_) {
    browserEvents.unbind(this.onMouseMoveWrapper_);
    this.onMouseMoveWrapper_ = null;
  }
  if (this.onMouseEnterWrapper_) {
    browserEvents.unbind(this.onMouseEnterWrapper_);
    this.onMouseEnterWrapper_ = null;
  }
  if (this.onMouseLeaveWrapper_) {
    browserEvents.unbind(this.onMouseLeaveWrapper_);
    this.onMouseLeaveWrapper_ = null;
  }
  if (this.onKeyDownWrapper_) {
    browserEvents.unbind(this.onKeyDownWrapper_);
    this.onKeyDownWrapper_ = null;
  }
  this.picker_ = null;
  this.highlightedIndex_ = null;
};

/**
 * CSS for color picker.  See css.js for use.
 */
Css.register(`
  .blocklyColorTable {
    border-collapse: collapse;
    display: block;
    outline: none;
    padding: 1px;
  }

  .blocklyColorTable>tr>td {
    border: .5px solid #888;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    height: 20px;
    padding: 0;
    width: 20px;
  }

  .blocklyColorTable>tr>td.blocklyColorHighlighted {
    border-color: #eee;
    box-shadow: 2px 2px 7px 2px rgba(0,0,0,.3);
    position: relative;
  }

  .blocklyColorSelected, .blocklyColorSelected:hover {
    border-color: #eee !important;
    outline: 1px solid #333;
    position: relative;
  }
`);

fieldRegistry.register('field_color', FieldColor);

exports.FieldColor = FieldColor;
