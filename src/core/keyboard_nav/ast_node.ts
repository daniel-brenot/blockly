/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * The class representing an AST node.
 * Used to traverse the Blockly AST.
 * @class
 */

import {Block} from 'blockly/core/block';
import {ConnectionType} from 'blockly/core/connection_type';
import {Connection} from 'blockly/core/connection';
import {Coordinate} from 'blockly/core/utils/coordinate';
import {Field} from 'blockly/core/field';
import {IASTNodeLocationWithBlock} from 'blockly/core/interfaces/i_ast_node_location_with_block';
import {IASTNodeLocation} from 'blockly/core/interfaces/i_ast_node_location';
import {Input} from 'blockly/core/input';
import {Workspace} from 'blockly/core/workspace';


/**
 * Class for an AST node.
 * It is recommended that you use one of the createNode methods instead of
 * creating a node directly.
 * @param {string} type The type of the location.
 *     Must be in ASTNode.types.
 * @param {!IASTNodeLocation} location The position in the AST.
 * @param {!ASTNode.Params=} opt_params Optional dictionary of options.
 * @constructor
 * @alias Blockly.ASTNode
 */
const ASTNode = function(type, location, opt_params) {
  if (!location) {
    throw Error('Cannot create a node without a location.');
  }

  /**
   * The type of the location.
   * One of ASTNode.types
   * @type {string}
   * @private
   */
  this.type_ = type;

  /**
   * Whether the location points to a connection.
   * @type {boolean}
   * @private
   */
  this.isConnection_ = ASTNode.isConnectionType_(type);

  /**
   * The location of the AST node.
   * @type {!IASTNodeLocation}
   * @private
   */
  this.location_ = location;

  /**
   * The coordinate on the workspace.
   * @type {Coordinate}
   * @private
   */
  this.wsCoordinate_ = null;

  this.processParams_(opt_params || null);
};

/**
 * @typedef {{
 *     wsCoordinate: Coordinate
 * }}
 */
ASTNode.Params;

/**
 * Object holding different types for an AST node.
 * @enum {string}
 */
ASTNode.types = {
  FIELD: 'field',
  BLOCK: 'block',
  INPUT: 'input',
  OUTPUT: 'output',
  NEXT: 'next',
  PREVIOUS: 'previous',
  STACK: 'stack',
  WORKSPACE: 'workspace',
};

/**
 * True to navigate to all fields. False to only navigate to clickable fields.
 * @type {boolean}
 */
ASTNode.NAVIGATE_ALL_FIELDS = false;

/**
 * The default y offset to use when moving the cursor from a stack to the
 * workspace.
 * @type {number}
 * @private
 */
ASTNode.DEFAULT_OFFSET_Y = -20;

/**
 * Whether an AST node of the given type points to a connection.
 * @param {string} type The type to check.  One of ASTNode.types.
 * @return {boolean} True if a node of the given type points to a connection.
 * @private
 */
ASTNode.isConnectionType_ = function(type) {
  switch (type) {
    case ASTNode.types.PREVIOUS:
    case ASTNode.types.NEXT:
    case ASTNode.types.INPUT:
    case ASTNode.types.OUTPUT:
      return true;
  }
  return false;
};

/**
 * Create an AST node pointing to a field.
 * @param {Field} field The location of the AST node.
 * @return {ASTNode} An AST node pointing to a field.
 */
ASTNode.createFieldNode = function(field) {
  if (!field) {
    return null;
  }
  return new ASTNode(ASTNode.types.FIELD, field);
};

/**
 * Creates an AST node pointing to a connection. If the connection has a parent
 * input then create an AST node of type input that will hold the connection.
 * @param {Connection} connection This is the connection the node will
 *     point to.
 * @return {ASTNode} An AST node pointing to a connection.
 */
ASTNode.createConnectionNode = function(connection) {
  if (!connection) {
    return null;
  }
  const type = connection.type;
  if (type === ConnectionType.INPUT_VALUE) {
    return ASTNode.createInputNode(connection.getParentInput());
  } else if (
      type === ConnectionType.NEXT_STATEMENT && connection.getParentInput()) {
    return ASTNode.createInputNode(connection.getParentInput());
  } else if (type === ConnectionType.NEXT_STATEMENT) {
    return new ASTNode(ASTNode.types.NEXT, connection);
  } else if (type === ConnectionType.OUTPUT_VALUE) {
    return new ASTNode(ASTNode.types.OUTPUT, connection);
  } else if (type === ConnectionType.PREVIOUS_STATEMENT) {
    return new ASTNode(ASTNode.types.PREVIOUS, connection);
  }
  return null;
};

/**
 * Creates an AST node pointing to an input. Stores the input connection as the
 *     location.
 * @param {Input} input The input used to create an AST node.
 * @return {ASTNode} An AST node pointing to a input.
 */
ASTNode.createInputNode = function(input) {
  if (!input || !input.connection) {
    return null;
  }
  return new ASTNode(ASTNode.types.INPUT, input.connection);
};

/**
 * Creates an AST node pointing to a block.
 * @param {Block} block The block used to create an AST node.
 * @return {ASTNode} An AST node pointing to a block.
 */
ASTNode.createBlockNode = function(block) {
  if (!block) {
    return null;
  }
  return new ASTNode(ASTNode.types.BLOCK, block);
};

/**
 * Create an AST node of type stack. A stack, represented by its top block, is
 *     the set of all blocks connected to a top block, including the top block.
 * @param {Block} topBlock A top block has no parent and can be found
 *     in the list returned by workspace.getTopBlocks().
 * @return {ASTNode} An AST node of type stack that points to the top
 *     block on the stack.
 */
ASTNode.createStackNode = function(topBlock) {
  if (!topBlock) {
    return null;
  }
  return new ASTNode(ASTNode.types.STACK, topBlock);
};

/**
 * Creates an AST node pointing to a workspace.
 * @param {!Workspace} workspace The workspace that we are on.
 * @param {Coordinate} wsCoordinate The position on the workspace
 *     for this node.
 * @return {ASTNode} An AST node pointing to a workspace and a position
 *     on the workspace.
 */
ASTNode.createWorkspaceNode = function(workspace, wsCoordinate) {
  if (!wsCoordinate || !workspace) {
    return null;
  }
  const params = {wsCoordinate: wsCoordinate};
  return new ASTNode(ASTNode.types.WORKSPACE, workspace, params);
};

/**
 * Gets the parent connection on a block.
 * This is either an output connection, previous connection or undefined.
 * If both connections exist return the one that is actually connected
 * to another block.
 * @param {!Block} block The block to find the parent connection on.
 * @return {Connection} The connection connecting to the parent of the
 *     block.
 * @private
 */
function getParentConnection(block) {
  let topConnection = block.outputConnection;
  if (!topConnection ||
      (block.previousConnection && block.previousConnection.isConnected())) {
    topConnection = block.previousConnection;
  }
  return topConnection;
}

/**
 * Creates an AST node for the top position on a block.
 * This is either an output connection, previous connection, or block.
 * @param {!Block} block The block to find the top most AST node on.
 * @return {ASTNode} The AST node holding the top most position on the
 *     block.
 */
ASTNode.createTopNode = function(block) {
  let astNode;
  const topConnection = getParentConnection(block);
  if (topConnection) {
    astNode = ASTNode.createConnectionNode(topConnection);
  } else {
    astNode = ASTNode.createBlockNode(block);
  }
  return astNode;
};

/**
 * Parse the optional parameters.
 * @param {?ASTNode.Params} params The user specified parameters.
 * @private
 */
ASTNode.prototype.processParams_ = function(params) {
  if (!params) {
    return;
  }
  if (params.wsCoordinate) {
    this.wsCoordinate_ = params.wsCoordinate;
  }
};

/**
 * Gets the value pointed to by this node.
 * It is the callers responsibility to check the node type to figure out what
 * type of object they get back from this.
 * @return {!IASTNodeLocation} The current field, connection, workspace, or
 *     block the cursor is on.
 */
ASTNode.prototype.getLocation = function() {
  return this.location_;
};

/**
 * The type of the current location.
 * One of ASTNode.types
 * @return {string} The type of the location.
 */
ASTNode.prototype.getType = function() {
  return this.type_;
};

/**
 * The coordinate on the workspace.
 * @return {Coordinate} The workspace coordinate or null if the
 *     location is not a workspace.
 */
ASTNode.prototype.getWsCoordinate = function() {
  return this.wsCoordinate_;
};

/**
 * Whether the node points to a connection.
 * @return {boolean} [description]
 * @package
 */
ASTNode.prototype.isConnection = function() {
  return this.isConnection_;
};

/**
 * Given an input find the next editable field or an input with a non null
 * connection in the same block. The current location must be an input
 * connection.
 * @return {ASTNode} The AST node holding the next field or connection
 *     or null if there is no editable field or input connection after the given
 *     input.
 * @private
 */
ASTNode.prototype.findNextForInput_ = function() {
  const location = /** @type {!Connection} */ (this.location_);
  const parentInput = location.getParentInput();
  const block = parentInput.getSourceBlock();
  const curIdx = block.inputList.indexOf(parentInput);
  for (let i = curIdx + 1; i < block.inputList.length; i++) {
    const input = block.inputList[i];
    const fieldRow = input.fieldRow;
    for (let j = 0; j < fieldRow.length; j++) {
      const field = fieldRow[j];
      if (field.isClickable() || ASTNode.NAVIGATE_ALL_FIELDS) {
        return ASTNode.createFieldNode(field);
      }
    }
    if (input.connection) {
      return ASTNode.createInputNode(input);
    }
  }
  return null;
};

/**
 * Given a field find the next editable field or an input with a non null
 * connection in the same block. The current location must be a field.
 * @return {ASTNode} The AST node pointing to the next field or
 *     connection or null if there is no editable field or input connection
 *     after the given input.
 * @private
 */
ASTNode.prototype.findNextForField_ = function() {
  const location = /** @type {!Field} */ (this.location_);
  const input = location.getParentInput();
  const block = location.getSourceBlock();
  const curIdx = block.inputList.indexOf(/** @type {!Input} */ (input));
  let fieldIdx = input.fieldRow.indexOf(location) + 1;
  for (let i = curIdx; i < block.inputList.length; i++) {
    const newInput = block.inputList[i];
    const fieldRow = newInput.fieldRow;
    while (fieldIdx < fieldRow.length) {
      if (fieldRow[fieldIdx].isClickable() || ASTNode.NAVIGATE_ALL_FIELDS) {
        return ASTNode.createFieldNode(fieldRow[fieldIdx]);
      }
      fieldIdx++;
    }
    fieldIdx = 0;
    if (newInput.connection) {
      return ASTNode.createInputNode(newInput);
    }
  }
  return null;
};

/**
 * Given an input find the previous editable field or an input with a non null
 * connection in the same block. The current location must be an input
 * connection.
 * @return {ASTNode} The AST node holding the previous field or
 *     connection.
 * @private
 */
ASTNode.prototype.findPrevForInput_ = function() {
  const location = /** @type {!Connection} */ (this.location_);
  const parentInput = location.getParentInput();
  const block = parentInput.getSourceBlock();
  const curIdx = block.inputList.indexOf(parentInput);
  for (let i = curIdx; i >= 0; i--) {
    const input = block.inputList[i];
    if (input.connection && input !== parentInput) {
      return ASTNode.createInputNode(input);
    }
    const fieldRow = input.fieldRow;
    for (let j = fieldRow.length - 1; j >= 0; j--) {
      const field = fieldRow[j];
      if (field.isClickable() || ASTNode.NAVIGATE_ALL_FIELDS) {
        return ASTNode.createFieldNode(field);
      }
    }
  }
  return null;
};

/**
 * Given a field find the previous editable field or an input with a non null
 * connection in the same block. The current location must be a field.
 * @return {ASTNode} The AST node holding the previous input or field.
 * @private
 */
ASTNode.prototype.findPrevForField_ = function() {
  const location = /** @type {!Field} */ (this.location_);
  const parentInput = location.getParentInput();
  const block = location.getSourceBlock();
  const curIdx = block.inputList.indexOf(
      /** @type {!Input} */ (parentInput));
  let fieldIdx = parentInput.fieldRow.indexOf(location) - 1;
  for (let i = curIdx; i >= 0; i--) {
    const input = block.inputList[i];
    if (input.connection && input !== parentInput) {
      return ASTNode.createInputNode(input);
    }
    const fieldRow = input.fieldRow;
    while (fieldIdx > -1) {
      if (fieldRow[fieldIdx].isClickable() || ASTNode.NAVIGATE_ALL_FIELDS) {
        return ASTNode.createFieldNode(fieldRow[fieldIdx]);
      }
      fieldIdx--;
    }
    // Reset the fieldIdx to the length of the field row of the previous input.
    if (i - 1 >= 0) {
      fieldIdx = block.inputList[i - 1].fieldRow.length - 1;
    }
  }
  return null;
};

/**
 * Navigate between stacks of blocks on the workspace.
 * @param {boolean} forward True to go forward. False to go backwards.
 * @return {ASTNode} The first block of the next stack or null if there
 * are no blocks on the workspace.
 * @private
 */
ASTNode.prototype.navigateBetweenStacks_ = function(forward) {
  let curLocation = this.getLocation();
  if (curLocation.getSourceBlock) {
    curLocation = /** @type {!IASTNodeLocationWithBlock} */ (curLocation)
                      .getSourceBlock();
  }
  if (!curLocation || !curLocation.workspace) {
    return null;
  }
  const curRoot = curLocation.getRootBlock();
  const topBlocks = curRoot.workspace.getTopBlocks(true);
  for (let i = 0; i < topBlocks.length; i++) {
    const topBlock = topBlocks[i];
    if (curRoot.id === topBlock.id) {
      const offset = forward ? 1 : -1;
      const resultIndex = i + offset;
      if (resultIndex === -1 || resultIndex === topBlocks.length) {
        return null;
      }
      return ASTNode.createStackNode(topBlocks[resultIndex]);
    }
  }
  throw Error('Couldn\'t find ' + (forward ? 'next' : 'previous') + ' stack?!');
};

/**
 * Finds the top most AST node for a given block.
 * This is either the previous connection, output connection or block depending
 * on what kind of connections the block has.
 * @param {!Block} block The block that we want to find the top
 *     connection on.
 * @return {!ASTNode} The AST node containing the top connection.
 * @private
 */
ASTNode.prototype.findTopASTNodeForBlock_ = function(block) {
  const topConnection = getParentConnection(block);
  if (topConnection) {
    return /** @type {!ASTNode} */ (
        ASTNode.createConnectionNode(topConnection));
  } else {
    return /** @type {!ASTNode} */ (ASTNode.createBlockNode(block));
  }
};

/**
 * Get the AST node pointing to the input that the block is nested under or if
 * the block is not nested then get the stack AST node.
 * @param {Block} block The source block of the current location.
 * @return {ASTNode} The AST node pointing to the input connection or
 *     the top block of the stack this block is in.
 * @private
 */
ASTNode.prototype.getOutAstNodeForBlock_ = function(block) {
  if (!block) {
    return null;
  }
  // If the block doesn't have a previous connection then it is the top of the
  // substack.
  const topBlock = block.getTopStackBlock();
  const topConnection = getParentConnection(topBlock);
  // If the top connection has a parentInput, create an AST node pointing to
  // that input.
  if (topConnection && topConnection.targetConnection &&
      topConnection.targetConnection.getParentInput()) {
    return ASTNode.createInputNode(
        topConnection.targetConnection.getParentInput());
  } else {
    // Go to stack level if you are not underneath an input.
    return ASTNode.createStackNode(topBlock);
  }
};

/**
 * Find the first editable field or input with a connection on a given block.
 * @param {!Block} block The source block of the current location.
 * @return {ASTNode} An AST node pointing to the first field or input.
 * Null if there are no editable fields or inputs with connections on the block.
 * @private
 */
ASTNode.prototype.findFirstFieldOrInput_ = function(block) {
  const inputs = block.inputList;
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const fieldRow = input.fieldRow;
    for (let j = 0; j < fieldRow.length; j++) {
      const field = fieldRow[j];
      if (field.isClickable() || ASTNode.NAVIGATE_ALL_FIELDS) {
        return ASTNode.createFieldNode(field);
      }
    }
    if (input.connection) {
      return ASTNode.createInputNode(input);
    }
  }
  return null;
};

/**
 * Finds the source block of the location of this node.
 * @return {Block} The source block of the location, or null if the node
 * is of type workspace.
 */
ASTNode.prototype.getSourceBlock = function() {
  if (this.getType() === ASTNode.types.BLOCK) {
    return /** @type {Block} */ (this.getLocation());
  } else if (this.getType() === ASTNode.types.STACK) {
    return /** @type {Block} */ (this.getLocation());
  } else if (this.getType() === ASTNode.types.WORKSPACE) {
    return null;
  } else {
    return /** @type {IASTNodeLocationWithBlock} */ (this.getLocation())
        .getSourceBlock();
  }
};

/**
 * Find the element to the right of the current element in the AST.
 * @return {ASTNode} An AST node that wraps the next field, connection,
 *     block, or workspace. Or null if there is no node to the right.
 */
ASTNode.prototype.next = function() {
  switch (this.type_) {
    case ASTNode.types.STACK:
      return this.navigateBetweenStacks_(true);

    case ASTNode.types.OUTPUT: {
      const connection = /** @type {!Connection} */ (this.location_);
      return ASTNode.createBlockNode(connection.getSourceBlock());
    }
    case ASTNode.types.FIELD:
      return this.findNextForField_();

    case ASTNode.types.INPUT:
      return this.findNextForInput_();

    case ASTNode.types.BLOCK: {
      const block = /** @type {!Block} */ (this.location_);
      const nextConnection = block.nextConnection;
      return ASTNode.createConnectionNode(nextConnection);
    }
    case ASTNode.types.PREVIOUS: {
      const connection = /** @type {!Connection} */ (this.location_);
      return ASTNode.createBlockNode(connection.getSourceBlock());
    }
    case ASTNode.types.NEXT: {
      const connection = /** @type {!Connection} */ (this.location_);
      const targetConnection = connection.targetConnection;
      return ASTNode.createConnectionNode(targetConnection);
    }
  }

  return null;
};

/**
 * Find the element one level below and all the way to the left of the current
 * location.
 * @return {ASTNode} An AST node that wraps the next field, connection,
 * workspace, or block. Or null if there is nothing below this node.
 */
ASTNode.prototype.in = function() {
  switch (this.type_) {
    case ASTNode.types.WORKSPACE: {
      const workspace = /** @type {!Workspace} */ (this.location_);
      const topBlocks = workspace.getTopBlocks(true);
      if (topBlocks.length > 0) {
        return ASTNode.createStackNode(topBlocks[0]);
      }
      break;
    }
    case ASTNode.types.STACK: {
      const block = /** @type {!Block} */ (this.location_);
      return this.findTopASTNodeForBlock_(block);
    }
    case ASTNode.types.BLOCK: {
      const block = /** @type {!Block} */ (this.location_);
      return this.findFirstFieldOrInput_(block);
    }
    case ASTNode.types.INPUT: {
      const connection = /** @type {!Connection} */ (this.location_);
      const targetConnection = connection.targetConnection;
      return ASTNode.createConnectionNode(targetConnection);
    }
  }

  return null;
};

/**
 * Find the element to the left of the current element in the AST.
 * @return {ASTNode} An AST node that wraps the previous field,
 * connection, workspace or block. Or null if no node exists to the left.
 * null.
 */
ASTNode.prototype.prev = function() {
  switch (this.type_) {
    case ASTNode.types.STACK:
      return this.navigateBetweenStacks_(false);

    case ASTNode.types.OUTPUT:
      return null;

    case ASTNode.types.FIELD:
      return this.findPrevForField_();

    case ASTNode.types.INPUT:
      return this.findPrevForInput_();

    case ASTNode.types.BLOCK: {
      const block = /** @type {!Block} */ (this.location_);
      const topConnection = getParentConnection(block);
      return ASTNode.createConnectionNode(topConnection);
    }
    case ASTNode.types.PREVIOUS: {
      const connection = /** @type {!Connection} */ (this.location_);
      const targetConnection = connection.targetConnection;
      if (targetConnection && !targetConnection.getParentInput()) {
        return ASTNode.createConnectionNode(targetConnection);
      }
      break;
    }
    case ASTNode.types.NEXT: {
      const connection = /** @type {!Connection} */ (this.location_);
      return ASTNode.createBlockNode(connection.getSourceBlock());
    }
  }

  return null;
};

/**
 * Find the next element that is one position above and all the way to the left
 * of the current location.
 * @return {ASTNode} An AST node that wraps the next field, connection,
 *     workspace or block. Or null if we are at the workspace level.
 */
ASTNode.prototype.out = function() {
  switch (this.type_) {
    case ASTNode.types.STACK: {
      const block = /** @type {!Block} */ (this.location_);
      const blockPos = block.getRelativeToSurfaceXY();
      // TODO: Make sure this is in the bounds of the workspace.
      const wsCoordinate =
          new Coordinate(blockPos.x, blockPos.y + ASTNode.DEFAULT_OFFSET_Y);
      return ASTNode.createWorkspaceNode(block.workspace, wsCoordinate);
    }
    case ASTNode.types.OUTPUT: {
      const connection = /** @type {!Connection} */ (this.location_);
      const target = connection.targetConnection;
      if (target) {
        return ASTNode.createConnectionNode(target);
      }
      return ASTNode.createStackNode(connection.getSourceBlock());
    }
    case ASTNode.types.FIELD: {
      const field = /** @type {!Field} */ (this.location_);
      return ASTNode.createBlockNode(field.getSourceBlock());
    }
    case ASTNode.types.INPUT: {
      const connection = /** @type {!Connection} */ (this.location_);
      return ASTNode.createBlockNode(connection.getSourceBlock());
    }
    case ASTNode.types.BLOCK: {
      const block = /** @type {!Block} */ (this.location_);
      return this.getOutAstNodeForBlock_(block);
    }
    case ASTNode.types.PREVIOUS: {
      const connection = /** @type {!Connection} */ (this.location_);
      return this.getOutAstNodeForBlock_(connection.getSourceBlock());
    }
    case ASTNode.types.NEXT: {
      const connection = /** @type {!Connection} */ (this.location_);
      return this.getOutAstNodeForBlock_(connection.getSourceBlock());
    }
  }

  return null;
};

exports.ASTNode = ASTNode;
