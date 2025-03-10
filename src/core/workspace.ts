/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Object representing a workspace.
 * @class
 */

import Abstract from 'blockly/core/events/events_abstract';
import arrayUtils from 'blockly/core/utils/array';
import eventUtils from 'blockly/core/events/utils';
import idGenerator from 'blockly/core/utils/idgenerator';
import math from 'blockly/core/utils/math';
import registry from 'blockly/core/registry';
import toolbox from 'blockly/core/utils/toolbox';
import {BlocklyOptions} from 'blockly/core/blockly_options';
import {Block} from 'blockly/core/block';
import {ConnectionDB} from 'blockly/core/connection_db';
import {IASTNodeLocation} from 'blockly/core/interfaces/i_ast_node_location';
import {IConnectionChecker} from 'blockly/core/interfaces/i_connection_checker';
import {Options} from 'blockly/core/options';
import {VariableMap} from 'blockly/core/variable_map';
import {VariableModel} from 'blockly/core/variable_model';
import {WorkspaceComment} from 'blockly/core/workspace_comment';
goog.require('blockly/core/connection_checker');


/**
 * Database of all workspaces.
 * @private
 */
const WorkspaceDB_ = Object.create(null);

/**
 * Class for a workspace.  This is a data structure that contains blocks.
 * There is no UI, and can be created headlessly.
 * @param {!Options=} opt_options Dictionary of options.
 * @constructor
 * @implements {IASTNodeLocation}
 * @alias Blockly.Workspace
 */
const Workspace = function(opt_options) {
  /** @type {string} */
  this.id = idGenerator.genUid();
  WorkspaceDB_[this.id] = this;
  /** @type {!Options} */
  this.options =
      opt_options || new Options(/** @type {!BlocklyOptions} */ ({}));
  /** @type {boolean} */
  this.RTL = !!this.options.RTL;
  /** @type {boolean} */
  this.horizontalLayout = !!this.options.horizontalLayout;
  /** @type {toolbox.Position} */
  this.toolboxPosition = this.options.toolboxPosition;

  const connectionCheckerClass = registry.getClassFromOptions(
      registry.Type.CONNECTION_CHECKER, this.options, true);
  /**
   * An object that encapsulates logic for safety, type, and dragging checks.
   * @type {!IConnectionChecker}
   */
  this.connectionChecker = new connectionCheckerClass(this);

  /**
   * @type {!Array<!Block>}
   * @private
   */
  this.topBlocks_ = [];
  /**
   * @type {!Array<!WorkspaceComment>}
   * @private
   */
  this.topComments_ = [];
  /**
   * @type {!Object}
   * @private
   */
  this.commentDB_ = Object.create(null);
  /**
   * @type {!Array<!Function>}
   * @private
   */
  this.listeners_ = [];
  /**
   * @type {!Array<!Abstract>}
   * @protected
   */
  this.undoStack_ = [];
  /**
   * @type {!Array<!Abstract>}
   * @protected
   */
  this.redoStack_ = [];
  /**
   * @type {!Object}
   * @private
   */
  this.blockDB_ = Object.create(null);
  /**
   * @type {!Object}
   * @private
   */
  this.typedBlocksDB_ = Object.create(null);

  /**
   * A map from variable type to list of variable names.  The lists contain all
   * of the named variables in the workspace, including variables
   * that are not currently in use.
   * @type {!VariableMap}
   * @private
   */
  this.variableMap_ = new VariableMap(this);

  /**
   * Blocks in the flyout can refer to variables that don't exist in the main
   * workspace.  For instance, the "get item in list" block refers to an "item"
   * variable regardless of whether the variable has been created yet.
   * A FieldVariable must always refer to a VariableModel.  We reconcile
   * these by tracking "potential" variables in the flyout.  These variables
   * become real when references to them are dragged into the main workspace.
   * @type {?VariableMap}
   * @private
   */
  this.potentialVariableMap_ = null;
};

/**
 * Returns `true` if the workspace is visible and `false` if it's headless.
 * @type {boolean}
 */
Workspace.prototype.rendered = false;

/**
 * Returns `true` if the workspace is currently in the process of a bulk clear.
 * @type {boolean}
 * @package
 */
Workspace.prototype.isClearing = false;

/**
 * Maximum number of undo events in stack. `0` turns off undo, `Infinity` sets
 * it to unlimited.
 * @type {number}
 */
Workspace.prototype.MAX_UNDO = 1024;

/**
 * Set of databases for rapid lookup of connection locations.
 * @type {Array<!ConnectionDB>}
 */
Workspace.prototype.connectionDBList = null;

/**
 * Dispose of this workspace.
 * Unlink from all DOM elements to prevent memory leaks.
 * @suppress {checkTypes}
 */
Workspace.prototype.dispose = function() {
  this.listeners_.length = 0;
  this.clear();
  // Remove from workspace database.
  delete WorkspaceDB_[this.id];
};

/**
 * Angle away from the horizontal to sweep for blocks.  Order of execution is
 * generally top to bottom, but a small angle changes the scan to give a bit of
 * a left to right bias (reversed in RTL).  Units are in degrees.
 * See: https://tvtropes.org/pmwiki/pmwiki.php/Main/DiagonalBilling
 */
Workspace.SCAN_ANGLE = 3;

/**
 * Compare function for sorting objects (blocks, comments, etc) by position;
 *    top to bottom (with slight LTR or RTL bias).
 * @param {!Block | !WorkspaceComment} a The first object to
 *    compare.
 * @param {!Block | !WorkspaceComment} b The second object to
 *    compare.
 * @return {number} The comparison value. This tells Array.sort() how to change
 *    object a's index.
 * @private
 */
Workspace.prototype.sortObjects_ = function(a, b) {
  const aXY = a.getRelativeToSurfaceXY();
  const bXY = b.getRelativeToSurfaceXY();
  return (aXY.y + Workspace.prototype.sortObjects_.offset * aXY.x) -
      (bXY.y + Workspace.prototype.sortObjects_.offset * bXY.x);
};

/**
 * Adds a block to the list of top blocks.
 * @param {!Block} block Block to add.
 */
Workspace.prototype.addTopBlock = function(block) {
  this.topBlocks_.push(block);
};

/**
 * Removes a block from the list of top blocks.
 * @param {!Block} block Block to remove.
 */
Workspace.prototype.removeTopBlock = function(block) {
  if (!arrayUtils.removeElem(this.topBlocks_, block)) {
    throw Error('Block not present in workspace\'s list of top-most blocks.');
  }
};

/**
 * Finds the top-level blocks and returns them.  Blocks are optionally sorted
 * by position; top to bottom (with slight LTR or RTL bias).
 * @param {boolean} ordered Sort the list if true.
 * @return {!Array<!Block>} The top-level block objects.
 */
Workspace.prototype.getTopBlocks = function(ordered) {
  // Copy the topBlocks_ list.
  const blocks = [].concat(this.topBlocks_);
  if (ordered && blocks.length > 1) {
    this.sortObjects_.offset = Math.sin(math.toRadians(Workspace.SCAN_ANGLE));
    if (this.RTL) {
      this.sortObjects_.offset *= -1;
    }
    blocks.sort(this.sortObjects_);
  }
  return blocks;
};

/**
 * Add a block to the list of blocks keyed by type.
 * @param {!Block} block Block to add.
 */
Workspace.prototype.addTypedBlock = function(block) {
  if (!this.typedBlocksDB_[block.type]) {
    this.typedBlocksDB_[block.type] = [];
  }
  this.typedBlocksDB_[block.type].push(block);
};

/**
 * Remove a block from the list of blocks keyed by type.
 * @param {!Block} block Block to remove.
 */
Workspace.prototype.removeTypedBlock = function(block) {
  arrayUtils.removeElem(this.typedBlocksDB_[block.type], block);
  if (!this.typedBlocksDB_[block.type].length) {
    delete this.typedBlocksDB_[block.type];
  }
};

/**
 * Finds the blocks with the associated type and returns them. Blocks are
 * optionally sorted by position; top to bottom (with slight LTR or RTL bias).
 * @param {string} type The type of block to search for.
 * @param {boolean} ordered Sort the list if true.
 * @return {!Array<!Block>} The blocks of the given type.
 */
Workspace.prototype.getBlocksByType = function(type, ordered) {
  if (!this.typedBlocksDB_[type]) {
    return [];
  }
  const blocks = this.typedBlocksDB_[type].slice(0);
  if (ordered && blocks.length > 1) {
    this.sortObjects_.offset = Math.sin(math.toRadians(Workspace.SCAN_ANGLE));
    if (this.RTL) {
      this.sortObjects_.offset *= -1;
    }
    blocks.sort(this.sortObjects_);
  }

  return blocks.filter(function(block) {
    return !block.isInsertionMarker();
  });
};

/**
 * Adds a comment to the list of top comments.
 * @param {!WorkspaceComment} comment comment to add.
 * @package
 */
Workspace.prototype.addTopComment = function(comment) {
  this.topComments_.push(comment);

  // Note: If the comment database starts to hold block comments, this may need
  // to move to a separate function.
  if (this.commentDB_[comment.id]) {
    console.warn(
        'Overriding an existing comment on this workspace, with id "' +
        comment.id + '"');
  }
  this.commentDB_[comment.id] = comment;
};

/**
 * Removes a comment from the list of top comments.
 * @param {!WorkspaceComment} comment comment to remove.
 * @package
 */
Workspace.prototype.removeTopComment = function(comment) {
  if (!arrayUtils.removeElem(this.topComments_, comment)) {
    throw Error(
        'Comment not present in workspace\'s list of top-most ' +
        'comments.');
  }
  // Note: If the comment database starts to hold block comments, this may need
  // to move to a separate function.
  delete this.commentDB_[comment.id];
};

/**
 * Finds the top-level comments and returns them.  Comments are optionally
 * sorted by position; top to bottom (with slight LTR or RTL bias).
 * @param {boolean} ordered Sort the list if true.
 * @return {!Array<!WorkspaceComment>} The top-level comment objects.
 * @package
 */
Workspace.prototype.getTopComments = function(ordered) {
  // Copy the topComments_ list.
  const comments = [].concat(this.topComments_);
  if (ordered && comments.length > 1) {
    this.sortObjects_.offset = Math.sin(math.toRadians(Workspace.SCAN_ANGLE));
    if (this.RTL) {
      this.sortObjects_.offset *= -1;
    }
    comments.sort(this.sortObjects_);
  }
  return comments;
};

/**
 * Find all blocks in workspace.  Blocks are optionally sorted
 * by position; top to bottom (with slight LTR or RTL bias).
 * @param {boolean} ordered Sort the list if true.
 * @return {!Array<!Block>} Array of blocks.
 */
Workspace.prototype.getAllBlocks = function(ordered) {
  let blocks;
  if (ordered) {
    // Slow, but ordered.
    const topBlocks = this.getTopBlocks(true);
    blocks = [];
    for (let i = 0; i < topBlocks.length; i++) {
      blocks.push.apply(blocks, topBlocks[i].getDescendants(true));
    }
  } else {
    // Fast, but in no particular order.
    blocks = this.getTopBlocks(false);
    for (let i = 0; i < blocks.length; i++) {
      blocks.push.apply(blocks, blocks[i].getChildren(false));
    }
  }

  // Insertion markers exist on the workspace for rendering reasons, but aren't
  // "real" blocks from a developer perspective.
  const filtered = blocks.filter(function(block) {
    return !block.isInsertionMarker();
  });

  return filtered;
};

/**
 * Dispose of all blocks and comments in workspace.
 */
Workspace.prototype.clear = function() {
  this.isClearing = true;
  try {
    const existingGroup = eventUtils.getGroup();
    if (!existingGroup) {
      eventUtils.setGroup(true);
    }
    while (this.topBlocks_.length) {
      this.topBlocks_[0].dispose(false);
    }
    while (this.topComments_.length) {
      this.topComments_[this.topComments_.length - 1].dispose();
    }
    if (!existingGroup) {
      eventUtils.setGroup(false);
    }
    this.variableMap_.clear();
    if (this.potentialVariableMap_) {
      this.potentialVariableMap_.clear();
    }
  } finally {
    this.isClearing = false;
  }
};

/* Begin functions that are just pass-throughs to the variable map. */
/**
 * Rename a variable by updating its name in the variable map. Identify the
 * variable to rename with the given ID.
 * @param {string} id ID of the variable to rename.
 * @param {string} newName New variable name.
 */
Workspace.prototype.renameVariableById = function(id, newName) {
  this.variableMap_.renameVariableById(id, newName);
};

/**
 * Create a variable with a given name, optional type, and optional ID.
 * @param {string} name The name of the variable. This must be unique across
 *     variables and procedures.
 * @param {?string=} opt_type The type of the variable like 'int' or 'string'.
 *     Does not need to be unique. Field_variable can filter variables based on
 *     their type. This will default to '' which is a specific type.
 * @param {?string=} opt_id The unique ID of the variable. This will default to
 *     a UUID.
 * @return {!VariableModel} The newly created variable.
 */
Workspace.prototype.createVariable = function(name, opt_type, opt_id) {
  return this.variableMap_.createVariable(name, opt_type, opt_id);
};

/**
 * Find all the uses of the given variable, which is identified by ID.
 * @param {string} id ID of the variable to find.
 * @return {!Array<!Block>} Array of block usages.
 */
Workspace.prototype.getVariableUsesById = function(id) {
  return this.variableMap_.getVariableUsesById(id);
};

/**
 * Delete a variables by the passed in ID and all of its uses from this
 * workspace. May prompt the user for confirmation.
 * @param {string} id ID of variable to delete.
 */
Workspace.prototype.deleteVariableById = function(id) {
  this.variableMap_.deleteVariableById(id);
};

/**
 * Find the variable by the given name and return it. Return null if not found.
 * @param {string} name The name to check for.
 * @param {string=} opt_type The type of the variable.  If not provided it
 *     defaults to the empty string, which is a specific type.
 * @return {?VariableModel} The variable with the given name.
 */
// TODO (#1559): Possibly delete this function after resolving #1559.
Workspace.prototype.getVariable = function(name, opt_type) {
  return this.variableMap_.getVariable(name, opt_type);
};

/**
 * Find the variable by the given ID and return it. Return null if not found.
 * @param {string} id The ID to check for.
 * @return {?VariableModel} The variable with the given ID.
 */
Workspace.prototype.getVariableById = function(id) {
  return this.variableMap_.getVariableById(id);
};

/**
 * Find the variable with the specified type. If type is null, return list of
 *     variables with empty string type.
 * @param {?string} type Type of the variables to find.
 * @return {!Array<!VariableModel>} The sought after variables of the
 *     passed in type. An empty array if none are found.
 */
Workspace.prototype.getVariablesOfType = function(type) {
  return this.variableMap_.getVariablesOfType(type);
};

/**
 * Return all variable types.
 * @return {!Array<string>} List of variable types.
 * @package
 */
Workspace.prototype.getVariableTypes = function() {
  return this.variableMap_.getVariableTypes(this);
};

/**
 * Return all variables of all types.
 * @return {!Array<!VariableModel>} List of variable models.
 */
Workspace.prototype.getAllVariables = function() {
  return this.variableMap_.getAllVariables();
};

/**
 * Returns all variable names of all types.
 * @return {!Array<string>} List of all variable names of all types.
 */
Workspace.prototype.getAllVariableNames = function() {
  return this.variableMap_.getAllVariableNames();
};

/* End functions that are just pass-throughs to the variable map. */

/**
 * Returns the horizontal offset of the workspace.
 * Intended for LTR/RTL compatibility in XML.
 * Not relevant for a headless workspace.
 * @return {number} Width.
 */
Workspace.prototype.getWidth = function() {
  return 0;
};

/**
 * Obtain a newly created block.
 * @param {!string} prototypeName Name of the language object containing
 *     type-specific functions for this block.
 * @param {string=} opt_id Optional ID.  Use this ID if provided, otherwise
 *     create a new ID.
 * @return {!Block} The created block.
 */
Workspace.prototype.newBlock = function(prototypeName, opt_id) {
  const {Block} = goog.module.get('blockly/core/block');
  return new Block(this, prototypeName, opt_id);
};

/**
 * The number of blocks that may be added to the workspace before reaching
 *     the maxBlocks.
 * @return {number} Number of blocks left.
 */
Workspace.prototype.remainingCapacity = function() {
  if (isNaN(this.options.maxBlocks)) {
    return Infinity;
  }

  return this.options.maxBlocks - this.getAllBlocks(false).length;
};

/**
 * The number of blocks of the given type that may be added to the workspace
 *    before reaching the maxInstances allowed for that type.
 * @param {string} type Type of block to return capacity for.
 * @return {number} Number of blocks of type left.
 */
Workspace.prototype.remainingCapacityOfType = function(type) {
  if (!this.options.maxInstances) {
    return Infinity;
  }

  const maxInstanceOfType = (this.options.maxInstances[type] !== undefined) ?
      this.options.maxInstances[type] :
      Infinity;

  return maxInstanceOfType - this.getBlocksByType(type, false).length;
};

/**
 * Check if there is remaining capacity for blocks of the given counts to be
 *    created. If the total number of blocks represented by the map is more than
 *    the total remaining capacity, it returns false. If a type count is more
 *    than the remaining capacity for that type, it returns false.
 * @param {!Object} typeCountsMap A map of types to counts (usually representing
 *    blocks to be created).
 * @return {boolean} True if there is capacity for the given map,
 *    false otherwise.
 */
Workspace.prototype.isCapacityAvailable = function(typeCountsMap) {
  if (!this.hasBlockLimits()) {
    return true;
  }
  let copyableBlocksCount = 0;
  for (const type in typeCountsMap) {
    if (typeCountsMap[type] > this.remainingCapacityOfType(type)) {
      return false;
    }
    copyableBlocksCount += typeCountsMap[type];
  }
  if (copyableBlocksCount > this.remainingCapacity()) {
    return false;
  }
  return true;
};

/**
 * Checks if the workspace has any limits on the maximum number of blocks,
 *    or the maximum number of blocks of specific types.
 * @return {boolean} True if it has block limits, false otherwise.
 */
Workspace.prototype.hasBlockLimits = function() {
  return this.options.maxBlocks !== Infinity || !!this.options.maxInstances;
};

/**
 * Gets the undo stack for workplace.
 * @return {!Array<!Abstract>} undo stack
 * @package
 */
Workspace.prototype.getUndoStack = function() {
  return this.undoStack_;
};

/**
 * Gets the redo stack for workplace.
 * @return {!Array<!Abstract>} redo stack
 * @package
 */
Workspace.prototype.getRedoStack = function() {
  return this.redoStack_;
};

/**
 * Undo or redo the previous action.
 * @param {boolean} redo False if undo, true if redo.
 */
Workspace.prototype.undo = function(redo) {
  const inputStack = redo ? this.redoStack_ : this.undoStack_;
  const outputStack = redo ? this.undoStack_ : this.redoStack_;
  const inputEvent = inputStack.pop();
  if (!inputEvent) {
    return;
  }
  let events = [inputEvent];
  // Do another undo/redo if the next one is of the same group.
  while (inputStack.length && inputEvent.group &&
         inputEvent.group === inputStack[inputStack.length - 1].group) {
    events.push(inputStack.pop());
  }
  // Push these popped events on the opposite stack.
  for (let i = 0; i < events.length; i++) {
    const event = events[i];
    outputStack.push(event);
  }
  events = eventUtils.filter(events, redo);
  eventUtils.setRecordUndo(false);
  try {
    for (let i = 0; i < events.length; i++) {
      const event = events[i];
      event.run(redo);
    }
  } finally {
    eventUtils.setRecordUndo(true);
  }
};

/**
 * Clear the undo/redo stacks.
 */
Workspace.prototype.clearUndo = function() {
  this.undoStack_.length = 0;
  this.redoStack_.length = 0;
  // Stop any events already in the firing queue from being undoable.
  eventUtils.clearPendingUndo();
};

/**
 * When something in this workspace changes, call a function.
 * Note that there may be a few recent events already on the stack.  Thus the
 * new change listener might be called with events that occurred a few
 * milliseconds before the change listener was added.
 * @param {!Function} func Function to call.
 * @return {!Function} Obsolete return value, ignore.
 */
Workspace.prototype.addChangeListener = function(func) {
  this.listeners_.push(func);
  return func;
};

/**
 * Stop listening for this workspace's changes.
 * @param {!Function} func Function to stop calling.
 */
Workspace.prototype.removeChangeListener = function(func) {
  arrayUtils.removeElem(this.listeners_, func);
};

/**
 * Fire a change event.
 * @param {!Abstract} event Event to fire.
 */
Workspace.prototype.fireChangeListener = function(event) {
  if (event.recordUndo) {
    this.undoStack_.push(event);
    this.redoStack_.length = 0;
    while (this.undoStack_.length > this.MAX_UNDO && this.MAX_UNDO >= 0) {
      this.undoStack_.shift();
    }
  }
  for (let i = 0; i < this.listeners_.length; i++) {
    const func = this.listeners_[i];
    func(event);
  }
};

/**
 * Find the block on this workspace with the specified ID.
 * @param {string} id ID of block to find.
 * @return {?Block} The sought after block, or null if not found.
 */
Workspace.prototype.getBlockById = function(id) {
  return this.blockDB_[id] || null;
};

/**
 * Set a block on this workspace with the specified ID.
 * @param {string} id ID of block to set.
 * @param {Block} block The block to set.
 * @package
 */
Workspace.prototype.setBlockById = function(id, block) {
  this.blockDB_[id] = block;
};

/**
 * Delete a block off this workspace with the specified ID.
 * @param {string} id ID of block to delete.
 * @package
 */
Workspace.prototype.removeBlockById = function(id) {
  delete this.blockDB_[id];
};

/**
 * Find the comment on this workspace with the specified ID.
 * @param {string} id ID of comment to find.
 * @return {?WorkspaceComment} The sought after comment, or null if not
 *     found.
 * @package
 */
Workspace.prototype.getCommentById = function(id) {
  return this.commentDB_[id] || null;
};

/**
 * Checks whether all value and statement inputs in the workspace are filled
 * with blocks.
 * @param {boolean=} opt_shadowBlocksAreFilled An optional argument controlling
 *     whether shadow blocks are counted as filled. Defaults to true.
 * @return {boolean} True if all inputs are filled, false otherwise.
 */
Workspace.prototype.allInputsFilled = function(opt_shadowBlocksAreFilled) {
  const blocks = this.getTopBlocks(false);
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (!block.allInputsFilled(opt_shadowBlocksAreFilled)) {
      return false;
    }
  }
  return true;
};

/**
 * Return the variable map that contains "potential" variables.
 * These exist in the flyout but not in the workspace.
 * @return {?VariableMap} The potential variable map.
 * @package
 */
Workspace.prototype.getPotentialVariableMap = function() {
  return this.potentialVariableMap_;
};

/**
 * Create and store the potential variable map for this workspace.
 * @package
 */
Workspace.prototype.createPotentialVariableMap = function() {
  this.potentialVariableMap_ = new VariableMap(this);
};

/**
 * Return the map of all variables on the workspace.
 * @return {!VariableMap} The variable map.
 */
Workspace.prototype.getVariableMap = function() {
  return this.variableMap_;
};

/**
 * Set the map of all variables on the workspace.
 * @param {!VariableMap} variableMap The variable map.
 * @package
 */
Workspace.prototype.setVariableMap = function(variableMap) {
  this.variableMap_ = variableMap;
};

/**
 * Find the workspace with the specified ID.
 * @param {string} id ID of workspace to find.
 * @return {?Workspace} The sought after workspace or null if not found.
 */
Workspace.getById = function(id) {
  return WorkspaceDB_[id] || null;
};

/**
 * Find all workspaces.
 * @return {!Array<!Workspace>} Array of workspaces.
 */
Workspace.getAll = function() {
  const workspaces = [];
  for (const workspaceId in WorkspaceDB_) {
    workspaces.push(WorkspaceDB_[workspaceId]);
  }
  return workspaces;
};

exports.Workspace = Workspace;
