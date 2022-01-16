/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * The class representing a cursor that is used to navigate
 * between tab navigable fields.
 * @class
 */

import object from 'blockly/core/utils/object';
import {ASTNode} from 'blockly/core/keyboard_nav/ast_node';
import {BasicCursor} from 'blockly/core/keyboard_nav/basic_cursor';
import {Field} from 'blockly/core/field';


/**
 * A cursor for navigating between tab navigable fields.
 * @constructor
 * @extends {BasicCursor}
 * @alias Blockly.TabNavigateCursor
 */
function TabNavigateCursor() {
  TabNavigateCursor.superClass_.constructor.call(this);
}
object.inherits(TabNavigateCursor, BasicCursor);

/**
 * Skip all nodes except for tab navigable fields.
 * @param {?ASTNode} node The AST node to check whether it is valid.
 * @return {boolean} True if the node should be visited, false otherwise.
 * @override
 */
TabNavigateCursor.prototype.validNode_ = function(node) {
  let isValid = false;
  const type = node && node.getType();
  if (node) {
    const location = /** @type {Field} */ (node.getLocation());
    if (type === ASTNode.types.FIELD && location && location.isTabNavigable() &&
        location.isClickable()) {
      isValid = true;
    }
  }
  return isValid;
};

exports.TabNavigateCursor = TabNavigateCursor;
