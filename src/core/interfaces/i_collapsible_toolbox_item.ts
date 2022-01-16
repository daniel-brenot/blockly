/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview The interface for a collapsible toolbox item.
 */



/**
 * The interface for a collapsible toolbox item.
 * @namespace Blockly.ICollapsibleToolboxItem
 */

import {ISelectableToolboxItem} from 'blockly/core/interfaces/i_selectable_toolbox_item';
import {IToolboxItem} from 'blockly/core/interfaces/i_toolbox_item';


/**
 * Interface for an item in the toolbox that can be collapsed.
 * @extends {ISelectableToolboxItem}
 * @interface
 * @alias Blockly.ICollapsibleToolboxItem
 */
const ICollapsibleToolboxItem = function() {};

/**
 * Gets any children toolbox items. (ex. Gets the subcategories)
 * @return {!Array<!IToolboxItem>} The child toolbox items.
 */
ICollapsibleToolboxItem.prototype.getChildToolboxItems;

/**
 * Whether the toolbox item is expanded to show its child subcategories.
 * @return {boolean} True if the toolbox item shows its children, false if it
 *     is collapsed.
 * @public
 */
ICollapsibleToolboxItem.prototype.isExpanded;

/**
 * Toggles whether or not the toolbox item is expanded.
 * @public
 */
ICollapsibleToolboxItem.prototype.toggleExpanded;

exports.ICollapsibleToolboxItem = ICollapsibleToolboxItem;
