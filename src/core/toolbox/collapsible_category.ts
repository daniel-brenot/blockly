/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * A toolbox category used to organize blocks in the toolbox.
 * @class
 */

import aria from 'blockly/core/utils/aria';
import dom from 'blockly/core/utils/dom';
import object from 'blockly/core/utils/object';
import registry from 'blockly/core/registry';
import toolbox from 'blockly/core/utils/toolbox';
import {ICollapsibleToolboxItem} from 'blockly/core/interfaces/i_collapsible_toolbox_item';
import {IToolboxItem} from 'blockly/core/interfaces/i_toolbox_item';
import {IToolbox} from 'blockly/core/interfaces/i_toolbox';
import {ToolboxCategory} from 'blockly/core/toolbox/category';
import {ToolboxSeparator} from 'blockly/core/toolbox/separator';


/**
 * Class for a category in a toolbox that can be collapsed.
 * @param {!toolbox.CategoryInfo} categoryDef The information needed
 *     to create a category in the toolbox.
 * @param {!IToolbox} toolbox The parent toolbox for the category.
 * @param {ICollapsibleToolboxItem=} opt_parent The parent category or null if
 *     the category does not have a parent.
 * @constructor
 * @extends {ToolboxCategory}
 * @implements {ICollapsibleToolboxItem}
 * @alias Blockly.CollapsibleToolboxCategory
 */
const CollapsibleToolboxCategory = function(categoryDef, toolbox, opt_parent) {
  /**
   * Container for any child categories.
   * @type {?Element}
   * @protected
   */
  this.subcategoriesDiv_ = null;

  /**
   * Whether or not the category should display its subcategories.
   * @type {boolean}
   * @protected
   */
  this.expanded_ = false;

  /**
   * The child toolbox items for this category.
   * @type {!Array<!IToolboxItem>}
   * @protected
   */
  this.toolboxItems_ = [];

  CollapsibleToolboxCategory.superClass_.constructor.call(
      this, categoryDef, toolbox, opt_parent);
};

object.inherits(CollapsibleToolboxCategory, ToolboxCategory);

/**
 * All the CSS class names that are used to create a collapsible
 * category. This is all the properties from the regular category plus contents.
 * @typedef {{
 *            container:?string,
 *            row:?string,
 *            rowcontentcontainer:?string,
 *            icon:?string,
 *            label:?string,
 *            selected:?string,
 *            openicon:?string,
 *            closedicon:?string,
 *            contents:?string
 *          }}
 */
CollapsibleToolboxCategory.CssConfig;

/**
 * Name used for registering a collapsible toolbox category.
 * @const {string}
 */
CollapsibleToolboxCategory.registrationName = 'collapsibleCategory';

/**
 * @override
 */
CollapsibleToolboxCategory.prototype.makeDefaultCssConfig_ = function() {
  const cssConfig =
      CollapsibleToolboxCategory.superClass_.makeDefaultCssConfig_.call(this);
  cssConfig['contents'] = 'blocklyToolboxContents';
  return cssConfig;
};

/**
 * @override
 */
CollapsibleToolboxCategory.prototype.parseContents_ = function(categoryDef) {
  const contents = categoryDef['contents'];
  let prevIsFlyoutItem = true;

  if (categoryDef['custom']) {
    this.flyoutItems_ = categoryDef['custom'];
  } else if (contents) {
    for (let i = 0; i < contents.length; i++) {
      const itemDef = contents[i];
      // Separators can exist as either a flyout item or a toolbox item so
      // decide where it goes based on the type of the previous item.
      if (!registry.hasItem(registry.Type.TOOLBOX_ITEM, itemDef['kind']) ||
          (itemDef['kind'].toLowerCase() ===
               ToolboxSeparator.registrationName &&
           prevIsFlyoutItem)) {
        const flyoutItem = /** @type {toolbox.FlyoutItemInfo} */ (itemDef);
        this.flyoutItems_.push(flyoutItem);
        prevIsFlyoutItem = true;
      } else {
        this.createToolboxItem_(itemDef);
        prevIsFlyoutItem = false;
      }
    }
  }
};

/**
 * Creates a toolbox item and adds it to the list of toolbox items.
 * @param {!toolbox.ToolboxItemInfo} itemDef The information needed
 *     to create a toolbox item.
 * @private
 */
CollapsibleToolboxCategory.prototype.createToolboxItem_ = function(itemDef) {
  let registryName = itemDef['kind'];
  const categoryDef = /** @type {!toolbox.CategoryInfo} */ (itemDef);

  // Categories that are collapsible are created using a class registered under
  // a different name.
  if (registryName.toUpperCase() == 'CATEGORY' &&
      toolbox.isCategoryCollapsible(categoryDef)) {
    registryName = CollapsibleToolboxCategory.registrationName;
  }
  const ToolboxItemClass =
      registry.getClass(registry.Type.TOOLBOX_ITEM, registryName);
  const toolboxItem = new ToolboxItemClass(itemDef, this.parentToolbox_, this);
  this.toolboxItems_.push(toolboxItem);
};

/**
 * @override
 */
CollapsibleToolboxCategory.prototype.init = function() {
  CollapsibleToolboxCategory.superClass_.init.call(this);

  this.setExpanded(
      this.toolboxItemDef_['expanded'] === 'true' ||
      this.toolboxItemDef_['expanded']);
};

/**
 * @override
 */
CollapsibleToolboxCategory.prototype.createDom_ = function() {
  CollapsibleToolboxCategory.superClass_.createDom_.call(this);

  const subCategories = this.getChildToolboxItems();
  this.subcategoriesDiv_ = this.createSubCategoriesDom_(subCategories);
  aria.setRole(this.subcategoriesDiv_, aria.Role.GROUP);
  this.htmlDiv_.appendChild(this.subcategoriesDiv_);

  return this.htmlDiv_;
};

/**
 * @override
 */
CollapsibleToolboxCategory.prototype.createIconDom_ = function() {
  const toolboxIcon = document.createElement('span');
  if (!this.parentToolbox_.isHorizontal()) {
    dom.addClass(toolboxIcon, this.cssConfig_['icon']);
    toolboxIcon.style.visibility = 'visible';
  }

  toolboxIcon.style.display = 'inline-block';
  return toolboxIcon;
};

/**
 * Create the DOM for all subcategories.
 * @param {!Array<!IToolboxItem>} subcategories The subcategories.
 * @return {!Element} The div holding all the subcategories.
 * @protected
 */
CollapsibleToolboxCategory.prototype.createSubCategoriesDom_ = function(
    subcategories) {
  const contentsContainer = document.createElement('div');
  dom.addClass(contentsContainer, this.cssConfig_['contents']);

  for (let i = 0; i < subcategories.length; i++) {
    const newCategory = subcategories[i];
    newCategory.init();
    const newCategoryDiv = newCategory.getDiv();
    contentsContainer.appendChild(newCategoryDiv);
    if (newCategory.getClickTarget) {
      newCategory.getClickTarget().setAttribute('id', newCategory.getId());
    }
  }
  return contentsContainer;
};


/**
 * Opens or closes the current category.
 * @param {boolean} isExpanded True to expand the category, false to close.
 * @public
 */
CollapsibleToolboxCategory.prototype.setExpanded = function(isExpanded) {
  if (this.expanded_ === isExpanded) {
    return;
  }
  this.expanded_ = isExpanded;
  if (isExpanded) {
    this.subcategoriesDiv_.style.display = 'block';
    this.openIcon_(this.iconDom_);
  } else {
    this.subcategoriesDiv_.style.display = 'none';
    this.closeIcon_(this.iconDom_);
  }
  aria.setState(
      /** @type {!Element} */ (this.htmlDiv_), aria.State.EXPANDED, isExpanded);

  this.parentToolbox_.handleToolboxItemResize();
};

/**
 * @override
 */
CollapsibleToolboxCategory.prototype.setVisible_ = function(isVisible) {
  this.htmlDiv_.style.display = isVisible ? 'block' : 'none';
  const childToolboxItems = this.getChildToolboxItems();
  for (let i = 0; i < childToolboxItems.length; i++) {
    const child = childToolboxItems[i];
    child.setVisible_(isVisible);
  }
  this.isHidden_ = !isVisible;

  if (this.parentToolbox_.getSelectedItem() === this) {
    this.parentToolbox_.clearSelection();
  }
};

/**
 * Whether the category is expanded to show its child subcategories.
 * @return {boolean} True if the toolbox item shows its children, false if it
 *     is collapsed.
 * @public
 */
CollapsibleToolboxCategory.prototype.isExpanded = function() {
  return this.expanded_;
};

/**
 * @override
 */
CollapsibleToolboxCategory.prototype.isCollapsible = function() {
  return true;
};

/**
 * @override
 */
CollapsibleToolboxCategory.prototype.onClick = function(_e) {
  this.toggleExpanded();
};

/**
 * Toggles whether or not the category is expanded.
 * @public
 */
CollapsibleToolboxCategory.prototype.toggleExpanded = function() {
  this.setExpanded(!this.expanded_);
};

/**
 * @override
 */
CollapsibleToolboxCategory.prototype.getDiv = function() {
  return this.htmlDiv_;
};

/**
 * Gets any children toolbox items. (ex. Gets the subcategories)
 * @return {!Array<!IToolboxItem>} The child toolbox items.
 */
CollapsibleToolboxCategory.prototype.getChildToolboxItems = function() {
  return this.toolboxItems_;
};


registry.register(
    registry.Type.TOOLBOX_ITEM, CollapsibleToolboxCategory.registrationName,
    CollapsibleToolboxCategory);

exports.CollapsibleToolboxCategory = CollapsibleToolboxCategory;
