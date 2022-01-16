/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview The interface for an AST node location that has an associated
 * block.
 */



/**
 * The interface for an AST node location that has an associated
 * block.
 * @namespace Blockly.IASTNodeLocationWithBlock
 */

import {Block} from 'blockly/core/block';
import {IASTNodeLocation} from 'blockly/core/interfaces/i_ast_node_location';


/**
 * An AST node location that has an associated block.
 * @interface
 * @extends {IASTNodeLocation}
 * @alias Blockly.IASTNodeLocationWithBlock
 */
const IASTNodeLocationWithBlock = function() {};

/**
 * Get the source block associated with this node.
 * @return {Block} The source block.
 */
IASTNodeLocationWithBlock.prototype.getSourceBlock;

exports.IASTNodeLocationWithBlock = IASTNodeLocationWithBlock;
