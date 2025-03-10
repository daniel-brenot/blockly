/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * An item in the toolbox.
 * @class
 */

import idGenerator from 'blockly/core/utils/idgenerator';
import toolbox from 'blockly/core/utils/toolbox';
import {ICollapsibleToolboxItem} from 'blockly/core/interfaces/i_collapsible_toolbox_item';
import {IToolboxItem} from 'blockly/core/interfaces/i_toolbox_item';
import {IToolbox} from 'blockly/core/interfaces/i_toolbox';
import {WorkspaceSvg} from 'blockly/core/workspace_svg';


/**
 * Class for an item in the toolbox.
 * @param {!toolbox.ToolboxItemInfo} toolboxItemDef The JSON defining the
 *     toolbox item.
 * @param {!IToolbox} toolbox The toolbox that holds the toolbox item.
 * @param {ICollapsibleToolboxItem=} opt_parent The parent toolbox item
 *     or null if the category does not have a parent.
 * @constructor
 * @implements {IToolboxItem}
 * @alias Blockly.ToolboxItem
 */
const ToolboxItem = function(toolboxItemDef, toolbox, opt_parent) {
  /**
   * The id for the category.
   * @type {string}
   * @protected
   */
  this.id_ = toolboxItemDef['toolboxitemid'] || idGenerator.getNextUniqueId();

  /**
   * The parent of the category.
   * @type {?ICollapsibleToolboxItem}
   * @protected
   */
  this.parent_ = opt_parent || null;

  /**
   * The level that the category is nested at.
   * @type {number}
   * @protected
   */
  this.level_ = this.parent_ ? this.parent_.getLevel() + 1 : 0;

  /**
   * The JSON definition of the toolbox item.
   * @type {!toolbox.ToolboxItemInfo}
   * @protected
   */
  this.toolboxItemDef_ = toolboxItemDef;

  /**
   * The toolbox this category belongs to.
   * @type {!IToolbox}
   * @protected
   */
  this.parentToolbox_ = toolbox;

  /**
   * The workspace of the parent toolbox.
   * @type {!WorkspaceSvg}
   * @protected
   */
  this.workspace_ = this.parentToolbox_.getWorkspace();
};

/**
 * Initializes the toolbox item.
 * This includes creating the DOM and updating the state of any items based
 * on the info object.
 * @public
 */
ToolboxItem.prototype.init = function() {
  // No-op by default.
};

/**
 * Gets the div for the toolbox item.
 * @return {?Element} The div for the toolbox item.
 * @public
 */
ToolboxItem.prototype.getDiv = function() {
  return null;
};

/**
 * Gets a unique identifier for this toolbox item.
 * @return {string} The ID for the toolbox item.
 * @public
 */
ToolboxItem.prototype.getId = function() {
  return this.id_;
};

/**
 * Gets the parent if the toolbox item is nested.
 * @return {?IToolboxItem} The parent toolbox item, or null if
 *     this toolbox item is not nested.
 * @public
 */
ToolboxItem.prototype.getParent = function() {
  return null;
};

/**
 * Gets the nested level of the category.
 * @return {number} The nested level of the category.
 * @package
 */
ToolboxItem.prototype.getLevel = function() {
  return this.level_;
};

/**
 * Whether the toolbox item is selectable.
 * @return {boolean} True if the toolbox item can be selected.
 * @public
 */
ToolboxItem.prototype.isSelectable = function() {
  return false;
};

/**
 * Whether the toolbox item is collapsible.
 * @return {boolean} True if the toolbox item is collapsible.
 * @public
 */
ToolboxItem.prototype.isCollapsible = function() {
  return false;
};

/**
 * Dispose of this toolbox item. No-op by default.
 * @public
 */
ToolboxItem.prototype.dispose = function() {};

exports.ToolboxItem = ToolboxItem;
