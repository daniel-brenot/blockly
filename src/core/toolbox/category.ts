/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * A toolbox category used to organize blocks in the toolbox.
 * @class
 */

import Css from 'blockly/core/css';
import aria from 'blockly/core/utils/aria';
import colorUtils from 'blockly/core/utils/colour';
import dom from 'blockly/core/utils/dom';
import object from 'blockly/core/utils/object';
import parsing from 'blockly/core/utils/parsing';
import registry from 'blockly/core/registry';
import toolbox from 'blockly/core/utils/toolbox';
import {ICollapsibleToolboxItem} from 'blockly/core/interfaces/i_collapsible_toolbox_item';
import {ISelectableToolboxItem} from 'blockly/core/interfaces/i_selectable_toolbox_item';
import {IToolbox} from 'blockly/core/interfaces/i_toolbox';
import {ToolboxItem} from 'blockly/core/toolbox/toolbox_item';


/**
 * Class for a category in a toolbox.
 * @param {!toolbox.CategoryInfo} categoryDef The information needed
 *     to create a category in the toolbox.
 * @param {!IToolbox} toolbox The parent toolbox for the category.
 * @param {ICollapsibleToolboxItem=} opt_parent The parent category or null if
 *     the category does not have a parent.
 * @constructor
 * @extends {ToolboxItem}
 * @implements {ISelectableToolboxItem}
 * @alias Blockly.ToolboxCategory
 */
const ToolboxCategory = function(categoryDef, toolbox, opt_parent) {
  ToolboxCategory.superClass_.constructor.call(
      this, categoryDef, toolbox, opt_parent);

  /**
   * The name that will be displayed on the category.
   * @type {string}
   * @protected
   */
  this.name_ = parsing.replaceMessageReferences(categoryDef['name']);

  /**
   * The color of the category.
   * @type {string}
   * @protected
   */
  this.color_ = this.getColor_(categoryDef);

  /**
   * The html container for the category.
   * @type {?Element}
   * @protected
   */
  this.htmlDiv_ = null;

  /**
   * The html element for the category row.
   * @type {?Element}
   * @protected
   */
  this.rowDiv_ = null;

  /**
   * The html element that holds children elements of the category row.
   * @type {?Element}
   * @protected
   */
  this.rowContents_ = null;

  /**
   * The html element for the toolbox icon.
   * @type {?Element}
   * @protected
   */
  this.iconDom_ = null;

  /**
   * The html element for the toolbox label.
   * @type {?Element}
   * @protected
   */
  this.labelDom_ = null;

  /**
   * All the css class names that are used to create a category.
   * @type {!ToolboxCategory.CssConfig}
   * @protected
   */
  this.cssConfig_ = this.makeDefaultCssConfig_();

  const cssConfig = categoryDef['cssconfig'] || categoryDef['cssConfig'];
  object.mixin(this.cssConfig_, cssConfig);

  /**
   * True if the category is meant to be hidden, false otherwise.
   * @type {boolean}
   * @protected
   */
  this.isHidden_ = false;

  /**
   * True if this category is disabled, false otherwise.
   * @type {boolean}
   * @protected
   */
  this.isDisabled_ = false;

  /**
   * The flyout items for this category.
   * @type {string|!toolbox.FlyoutItemInfoArray}
   * @protected
   */
  this.flyoutItems_ = [];

  this.parseContents_(categoryDef);
};

object.inherits(ToolboxCategory, ToolboxItem);

/**
 * All the CSS class names that are used to create a category.
 * @typedef {{
 *            container:(string|undefined),
 *            row:(string|undefined),
 *            rowcontentcontainer:(string|undefined),
 *            icon:(string|undefined),
 *            label:(string|undefined),
 *            selected:(string|undefined),
 *            openicon:(string|undefined),
 *            closedicon:(string|undefined)
 *          }}
 */
ToolboxCategory.CssConfig;

/**
 * Name used for registering a toolbox category.
 * @const {string}
 */
ToolboxCategory.registrationName = 'category';

/**
 * The number of pixels to move the category over at each nested level.
 * @type {number}
 */
ToolboxCategory.nestedPadding = 19;

/**
 * The width in pixels of the strip of color next to each category.
 * @type {number}
 */
ToolboxCategory.borderWidth = 8;

/**
 * The default color of the category. This is used as the background color of
 * the category when it is selected.
 * @type {string}
 */
ToolboxCategory.defaultBackgroundColor = '#57e';

/**
 * Creates an object holding the default classes for a category.
 * @return {!ToolboxCategory.CssConfig} The configuration object holding
 *    all the CSS classes for a category.
 * @protected
 */
ToolboxCategory.prototype.makeDefaultCssConfig_ = function() {
  return {
    'container': 'blocklyToolboxCategory',
    'row': 'blocklyTreeRow',
    'rowcontentcontainer': 'blocklyTreeRowContentContainer',
    'icon': 'blocklyTreeIcon',
    'label': 'blocklyTreeLabel',
    'contents': 'blocklyToolboxContents',
    'selected': 'blocklyTreeSelected',
    'openicon': 'blocklyTreeIconOpen',
    'closedicon': 'blocklyTreeIconClosed',
  };
};

/**
 * Parses the contents array depending on if the category is a dynamic category,
 * or if its contents are meant to be shown in the flyout.
 * @param {!toolbox.CategoryInfo} categoryDef The information needed
 *     to create a category.
 * @protected
 */
ToolboxCategory.prototype.parseContents_ = function(categoryDef) {
  const contents = categoryDef['contents'];

  if (categoryDef['custom']) {
    this.flyoutItems_ = categoryDef['custom'];
  } else if (contents) {
    for (let i = 0; i < contents.length; i++) {
      const itemDef = contents[i];
      const flyoutItem =
          /** @type {toolbox.FlyoutItemInfo} */ (itemDef);
      this.flyoutItems_.push(flyoutItem);
    }
  }
};

/**
 * @override
 */
ToolboxCategory.prototype.init = function() {
  this.createDom_();
  if (this.toolboxItemDef_['hidden'] === 'true') {
    this.hide();
  }
};

/**
 * Creates the DOM for the category.
 * @return {!Element} The parent element for the category.
 * @protected
 */
ToolboxCategory.prototype.createDom_ = function() {
  this.htmlDiv_ = this.createContainer_();
  aria.setRole(this.htmlDiv_, aria.Role.TREEITEM);
  aria.setState(
      /** @type {!Element} */ (this.htmlDiv_), aria.State.SELECTED, false);
  aria.setState(
      /** @type {!Element} */ (this.htmlDiv_), aria.State.LEVEL, this.level_);

  this.rowDiv_ = this.createRowContainer_();
  this.rowDiv_.style.pointerEvents = 'auto';
  this.htmlDiv_.appendChild(this.rowDiv_);

  this.rowContents_ = this.createRowContentsContainer_();
  this.rowContents_.style.pointerEvents = 'none';
  this.rowDiv_.appendChild(this.rowContents_);

  this.iconDom_ = this.createIconDom_();
  aria.setRole(this.iconDom_, aria.Role.PRESENTATION);
  this.rowContents_.appendChild(this.iconDom_);

  this.labelDom_ = this.createLabelDom_(this.name_);
  this.rowContents_.appendChild(this.labelDom_);
  aria.setState(
      /** @type {!Element} */ (this.htmlDiv_), aria.State.LABELLEDBY,
      this.labelDom_.getAttribute('id'));

  this.addColorBorder_(this.color_);

  return this.htmlDiv_;
};

/**
 * Creates the container that holds the row and any subcategories.
 * @return {!Element} The div that holds the icon and the label.
 * @protected
 */
ToolboxCategory.prototype.createContainer_ = function() {
  const container = document.createElement('div');
  dom.addClass(container, this.cssConfig_['container']);
  return container;
};

/**
 * Creates the parent of the contents container. All clicks will happen on this
 * div.
 * @return {!Element} The div that holds the contents container.
 * @protected
 */
ToolboxCategory.prototype.createRowContainer_ = function() {
  const rowDiv = document.createElement('div');
  dom.addClass(rowDiv, this.cssConfig_['row']);
  let nestedPadding = ToolboxCategory.nestedPadding * this.getLevel();
  nestedPadding = nestedPadding.toString() + 'px';
  this.workspace_.RTL ? rowDiv.style.paddingRight = nestedPadding :
                        rowDiv.style.paddingLeft = nestedPadding;
  return rowDiv;
};

/**
 * Creates the container for the label and icon.
 * This is necessary so we can set all subcategory pointer events to none.
 * @return {!Element} The div that holds the icon and the label.
 * @protected
 */
ToolboxCategory.prototype.createRowContentsContainer_ = function() {
  const contentsContainer = document.createElement('div');
  dom.addClass(contentsContainer, this.cssConfig_['rowcontentcontainer']);
  return contentsContainer;
};

/**
 * Creates the span that holds the category icon.
 * @return {!Element} The span that holds the category icon.
 * @protected
 */
ToolboxCategory.prototype.createIconDom_ = function() {
  const toolboxIcon = document.createElement('span');
  if (!this.parentToolbox_.isHorizontal()) {
    dom.addClass(toolboxIcon, this.cssConfig_['icon']);
  }

  toolboxIcon.style.display = 'inline-block';
  return toolboxIcon;
};

/**
 * Creates the span that holds the category label.
 * This should have an ID for accessibility purposes.
 * @param {string} name The name of the category.
 * @return {!Element} The span that holds the category label.
 * @protected
 */
ToolboxCategory.prototype.createLabelDom_ = function(name) {
  const toolboxLabel = document.createElement('span');
  toolboxLabel.setAttribute('id', this.getId() + '.label');
  toolboxLabel.textContent = name;
  dom.addClass(toolboxLabel, this.cssConfig_['label']);
  return toolboxLabel;
};

/**
 * Updates the color for this category.
 * @public
 */
ToolboxCategory.prototype.refreshTheme = function() {
  this.color_ = this.getColor_(/** @type {toolbox.CategoryInfo} **/
                                 (this.toolboxItemDef_));
  this.addColorBorder_(this.color_);
};

/**
 * Add the strip of color to the toolbox category.
 * @param {string} color The category color.
 * @protected
 */
ToolboxCategory.prototype.addColorBorder_ = function(color) {
  if (color) {
    const border =
        ToolboxCategory.borderWidth + 'px solid ' + (color || '#ddd');
    if (this.workspace_.RTL) {
      this.rowDiv_.style.borderRight = border;
    } else {
      this.rowDiv_.style.borderLeft = border;
    }
  }
};

/**
 * Gets either the color or the style for a category.
 * @param {!toolbox.CategoryInfo} categoryDef The object holding
 *    information on the category.
 * @return {string} The hex color for the category.
 * @protected
 */
ToolboxCategory.prototype.getColor_ = function(categoryDef) {
  const styleName =
      categoryDef['categorystyle'] || categoryDef['categoryStyle'];
  const color = categoryDef['color'];

  if (color && styleName) {
    console.warn(
        'Toolbox category "' + this.name_ +
        '" must not have both a style and a color');
  } else if (styleName) {
    return this.getColorfromStyle_(styleName);
  } else {
    return this.parseColor_(color);
  }
  return '';
};

/**
 * Sets the color for the category using the style name and returns the new
 * color as a hex string.
 * @param {string} styleName Name of the style.
 * @return {string} The hex color for the category.
 * @private
 */
ToolboxCategory.prototype.getColorfromStyle_ = function(styleName) {
  const theme = this.workspace_.getTheme();
  if (styleName && theme) {
    const style = theme.categoryStyles[styleName];
    if (style && style.color) {
      return this.parseColor_(style.color);
    } else {
      console.warn(
          'Style "' + styleName + '" must exist and contain a color value');
    }
  }
  return '';
};

/**
 * Gets the HTML element that is clickable.
 * The parent toolbox element receives clicks. The parent toolbox will add an ID
 * to this element so it can pass the onClick event to the correct toolboxItem.
 * @return {!Element} The HTML element that receives clicks.
 * @public
 */
ToolboxCategory.prototype.getClickTarget = function() {
  return /** @type {!Element} */ (this.rowDiv_);
};

/**
 * Parses the color on the category.
 * @param {number|string} colorValue HSV hue value (0 to 360), #RRGGBB string,
 *     or a message reference string pointing to one of those two values.
 * @return {string} The hex color for the category.
 * @private
 */
ToolboxCategory.prototype.parseColor_ = function(colorValue) {
  // Decode the color for any potential message references
  // (eg. `%{BKY_MATH_HUE}`).
  const color = parsing.replaceMessageReferences(colorValue);
  if (color == null || color === '') {
    // No attribute. No color.
    return '';
  } else {
    const hue = Number(color);
    if (!isNaN(hue)) {
      return colorUtils.hueToHex(hue);
    } else {
      const hex = colorUtils.parse(color);
      if (hex) {
        return hex;
      } else {
        console.warn(
            'Toolbox category "' + this.name_ +
            '" has unrecognized color attribute: ' + color);
        return '';
      }
    }
  }
};

/**
 * Adds appropriate classes to display an open icon.
 * @param {?Element} iconDiv The div that holds the icon.
 * @protected
 */
ToolboxCategory.prototype.openIcon_ = function(iconDiv) {
  if (!iconDiv) {
    return;
  }
  dom.removeClasses(iconDiv, this.cssConfig_['closedicon']);
  dom.addClass(iconDiv, this.cssConfig_['openicon']);
};

/**
 * Adds appropriate classes to display a closed icon.
 * @param {?Element} iconDiv The div that holds the icon.
 * @protected
 */
ToolboxCategory.prototype.closeIcon_ = function(iconDiv) {
  if (!iconDiv) {
    return;
  }
  dom.removeClasses(iconDiv, this.cssConfig_['openicon']);
  dom.addClass(iconDiv, this.cssConfig_['closedicon']);
};

/**
 * Sets whether the category is visible or not.
 * For a category to be visible its parent category must also be expanded.
 * @param {boolean} isVisible True if category should be visible.
 * @protected
 */
ToolboxCategory.prototype.setVisible_ = function(isVisible) {
  this.htmlDiv_.style.display = isVisible ? 'block' : 'none';
  this.isHidden_ = !isVisible;

  if (this.parentToolbox_.getSelectedItem() === this) {
    this.parentToolbox_.clearSelection();
  }
};

/**
 * Hide the category.
 */
ToolboxCategory.prototype.hide = function() {
  this.setVisible_(false);
};

/**
 * Show the category. Category will only appear if its parent category is also
 * expanded.
 */
ToolboxCategory.prototype.show = function() {
  this.setVisible_(true);
};

/**
 * Whether the category is visible.
 * A category is only visible if all of its ancestors are expanded and isHidden_
 * is false.
 * @return {boolean} True if the category is visible, false otherwise.
 * @public
 */
ToolboxCategory.prototype.isVisible = function() {
  return !this.isHidden_ && this.allAncestorsExpanded_();
};

/**
 * Whether all ancestors of a category (parent and parent's parent, etc.) are
 * expanded.
 * @return {boolean} True only if every ancestor is expanded
 * @protected
 */
ToolboxCategory.prototype.allAncestorsExpanded_ = function() {
  let category = this;
  while (category.getParent()) {
    category = category.getParent();
    if (!category.isExpanded()) {
      return false;
    }
  }
  return true;
};

/**
 * @override
 */
ToolboxCategory.prototype.isSelectable = function() {
  return this.isVisible() && !this.isDisabled_;
};

/**
 * Handles when the toolbox item is clicked.
 * @param {!Event} _e Click event to handle.
 * @public
 */
ToolboxCategory.prototype.onClick = function(_e) {
  // No-op
};

/**
 * Sets the current category as selected.
 * @param {boolean} isSelected True if this category is selected, false
 *     otherwise.
 * @public
 */
ToolboxCategory.prototype.setSelected = function(isSelected) {
  if (isSelected) {
    const defaultColor =
        this.parseColor_(ToolboxCategory.defaultBackgroundColor);
    this.rowDiv_.style.backgroundColor = this.color_ || defaultColor;
    dom.addClass(this.rowDiv_, this.cssConfig_['selected']);
  } else {
    this.rowDiv_.style.backgroundColor = '';
    dom.removeClass(this.rowDiv_, this.cssConfig_['selected']);
  }
  aria.setState(
      /** @type {!Element} */ (this.htmlDiv_), aria.State.SELECTED, isSelected);
};

/**
 * Sets whether the category is disabled.
 * @param {boolean} isDisabled True to disable the category, false otherwise.
 */
ToolboxCategory.prototype.setDisabled = function(isDisabled) {
  this.isDisabled_ = isDisabled;
  this.getDiv().setAttribute('disabled', isDisabled);
  isDisabled ? this.getDiv().setAttribute('disabled', 'true') :
               this.getDiv().removeAttribute('disabled');
};

/**
 * Gets the name of the category. Used for emitting events.
 * @return {string} The name of the toolbox item.
 * @public
 */
ToolboxCategory.prototype.getName = function() {
  return this.name_;
};

/**
 * @override
 */
ToolboxCategory.prototype.getParent = function() {
  return this.parent_;
};

/**
 * @override
 */
ToolboxCategory.prototype.getDiv = function() {
  return this.htmlDiv_;
};

/**
 * Gets the contents of the category. These are items that are meant to be
 * displayed in the flyout.
 * @return {!toolbox.FlyoutItemInfoArray|string} The definition
 *     of items to be displayed in the flyout.
 * @public
 */
ToolboxCategory.prototype.getContents = function() {
  return this.flyoutItems_;
};

/**
 * Updates the contents to be displayed in the flyout.
 * If the flyout is open when the contents are updated, refreshSelection on the
 * toolbox must also be called.
 * @param {!toolbox.FlyoutDefinition|string} contents The contents
 *     to be displayed in the flyout. A string can be supplied to create a
 *     dynamic category.
 * @public
 */
ToolboxCategory.prototype.updateFlyoutContents = function(contents) {
  this.flyoutItems_ = [];

  if (typeof contents === 'string') {
    this.toolboxItemDef_['custom'] = contents;
  } else {
    // Removes old custom field when contents is updated.
    delete this.toolboxItemDef_['custom'];
    this.toolboxItemDef_['contents'] =
        toolbox.convertFlyoutDefToJsonArray(contents);
  }
  this.parseContents_(
      /** @type {toolbox.CategoryInfo} */ (this.toolboxItemDef_));
};

/**
 * @override
 */
ToolboxCategory.prototype.dispose = function() {
  dom.removeNode(this.htmlDiv_);
};

/**
 * CSS for Toolbox.  See css.js for use.
 */
Css.register(`
  .blocklyTreeRow:not(.blocklyTreeSelected):hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  .blocklyToolboxDiv[layout="h"] .blocklyToolboxCategory {
    margin: 1px 5px 1px 0;
  }

  .blocklyToolboxDiv[dir="RTL"][layout="h"] .blocklyToolboxCategory {
    margin: 1px 0 1px 5px;
  }

  .blocklyTreeRow {
    height: 22px;
    line-height: 22px;
    margin-bottom: 3px;
    padding-right: 8px;
    white-space: nowrap;
  }

  .blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {
    margin-left: 8px;
    padding-right: 0;
  }

  .blocklyTreeIcon {
    background-image: url(<<<PATH>>>/sprites.png);
    height: 16px;
    vertical-align: middle;
    visibility: hidden;
    width: 16px;
  }

  .blocklyTreeIconClosed {
    background-position: -32px -1px;
  }

  .blocklyToolboxDiv[dir="RTL"] .blocklyTreeIconClosed {
    background-position: 0 -1px;
  }

  .blocklyTreeSelected>.blocklyTreeIconClosed {
    background-position: -32px -17px;
  }

  .blocklyToolboxDiv[dir="RTL"] .blocklyTreeSelected>.blocklyTreeIconClosed {
    background-position: 0 -17px;
  }

  .blocklyTreeIconOpen {
    background-position: -16px -1px;
  }

  .blocklyTreeSelected>.blocklyTreeIconOpen {
    background-position: -16px -17px;
  }

  .blocklyTreeLabel {
    cursor: default;
    font: 16px sans-serif;
    padding: 0 3px;
    vertical-align: middle;
  }

  .blocklyToolboxDelete .blocklyTreeLabel {
    cursor: url("<<<PATH>>>/handdelete.cur"), auto;
  }

  .blocklyTreeSelected .blocklyTreeLabel {
    color: #fff;
  }
`);

registry.register(
    registry.Type.TOOLBOX_ITEM, ToolboxCategory.registrationName,
    ToolboxCategory);

exports.ToolboxCategory = ToolboxCategory;
