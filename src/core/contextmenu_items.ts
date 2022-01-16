/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Registers default context menu items.
 * @namespace Blockly.ContextMenuItems
 */

import Events from 'blockly/core/events/events';
import clipboard from 'blockly/core/clipboard';
import dialog from 'blockly/core/dialog';
import eventUtils from 'blockly/core/events/utils';
import idGenerator from 'blockly/core/utils/idgenerator';
import userAgent from 'blockly/core/utils/useragent';
import {BlockSvg} from 'blockly/core/block_svg';
import {ContextMenuRegistry} from 'blockly/core/contextmenu_registry';
import {Msg} from 'blockly/core/msg';
import {WorkspaceSvg} from 'blockly/core/workspace_svg';
import {inputTypes} from 'blockly/core/input_types';


/**
 * Option to undo previous action.
 * @alias Blockly.ContextMenuItems.registerUndo
 */
export function registerUndo() {
  /** @type {!ContextMenuRegistry.RegistryItem} */
  const undoOption = {
    displayText: function() {
      return Msg['UNDO'];
    },
    preconditionFn: function(/** @type {!ContextMenuRegistry.Scope} */
                             scope) {
      if (scope.workspace.getUndoStack().length > 0) {
        return 'enabled';
      }
      return 'disabled';
    },
    callback: function(/** @type {!ContextMenuRegistry.Scope} */
                       scope) {
      scope.workspace.undo(false);
    },
    scopeType: ContextMenuRegistry.ScopeType.WORKSPACE,
    id: 'undoWorkspace',
    weight: 1,
  };
  ContextMenuRegistry.registry.register(undoOption);
}

/**
 * Option to redo previous action.
 * @alias Blockly.ContextMenuItems.registerRedo
 */
export function registerRedo() {
  /** @type {!ContextMenuRegistry.RegistryItem} */
  const redoOption = {
    displayText: function() {
      return Msg['REDO'];
    },
    preconditionFn: function(/** @type {!ContextMenuRegistry.Scope} */
                             scope) {
      if (scope.workspace.getRedoStack().length > 0) {
        return 'enabled';
      }
      return 'disabled';
    },
    callback: function(/** @type {!ContextMenuRegistry.Scope} */
                       scope) {
      scope.workspace.undo(true);
    },
    scopeType: ContextMenuRegistry.ScopeType.WORKSPACE,
    id: 'redoWorkspace',
    weight: 2,
  };
  ContextMenuRegistry.registry.register(redoOption);
}

/**
 * Option to clean up blocks.
 * @alias Blockly.ContextMenuItems.registerCleanup
 */
export function registerCleanup() {
  /** @type {!ContextMenuRegistry.RegistryItem} */
  const cleanOption = {
    displayText: function() {
      return Msg['CLEAN_UP'];
    },
    preconditionFn: function(/** @type {!ContextMenuRegistry.Scope} */
                             scope) {
      if (scope.workspace.isMovable()) {
        if (scope.workspace.getTopBlocks(false).length > 1) {
          return 'enabled';
        }
        return 'disabled';
      }
      return 'hidden';
    },
    callback: function(/** @type {!ContextMenuRegistry.Scope} */
                       scope) {
      scope.workspace.cleanUp();
    },
    scopeType: ContextMenuRegistry.ScopeType.WORKSPACE,
    id: 'cleanWorkspace',
    weight: 3,
  };
  ContextMenuRegistry.registry.register(cleanOption);
}

/**
 * Creates a callback to collapse or expand top blocks.
 * @param {boolean} shouldCollapse Whether a block should collapse.
 * @param {!Array<BlockSvg>} topBlocks Top blocks in the workspace.
 * @private
 */
function toggleOption_(shouldCollapse, topBlocks) {
  const DELAY = 10;
  let ms = 0;
  let timeoutCounter = 0;
  const timeoutFn = function(block) {
    timeoutCounter--;
    block.setCollapsed(shouldCollapse);
    if (timeoutCounter === 0) {
      Events.setGroup(false);
    }
  };
  Events.setGroup(true);
  for (let i = 0; i < topBlocks.length; i++) {
    let block = topBlocks[i];
    while (block) {
      timeoutCounter++;
      setTimeout(timeoutFn.bind(null, block), ms);
      block = block.getNextBlock();
      ms += DELAY;
    }
  }
}

/**
 * Option to collapse all blocks.
 * @alias Blockly.ContextMenuItems.registerCollapse
 */
export function registerCollapse() {
  /** @type {!ContextMenuRegistry.RegistryItem} */
  const collapseOption = {
    displayText: function() {
      return Msg['COLLAPSE_ALL'];
    },
    preconditionFn: function(/** @type {!ContextMenuRegistry.Scope} */
                             scope) {
      if (scope.workspace.options.collapse) {
        const topBlocks = scope.workspace.getTopBlocks(false);
        for (let i = 0; i < topBlocks.length; i++) {
          let block = topBlocks[i];
          while (block) {
            if (!block.isCollapsed()) {
              return 'enabled';
            }
            block = block.getNextBlock();
          }
        }
        return 'disabled';
      }
      return 'hidden';
    },
    callback: function(/** @type {!ContextMenuRegistry.Scope} */
                       scope) {
      toggleOption_(true, scope.workspace.getTopBlocks(true));
    },
    scopeType: ContextMenuRegistry.ScopeType.WORKSPACE,
    id: 'collapseWorkspace',
    weight: 4,
  };
  ContextMenuRegistry.registry.register(collapseOption);
}

/**
 * Option to expand all blocks.
 * @alias Blockly.ContextMenuItems.registerExpand
 */
export function registerExpand() {
  /** @type {!ContextMenuRegistry.RegistryItem} */
  const expandOption = {
    displayText: function() {
      return Msg['EXPAND_ALL'];
    },
    preconditionFn: function(/** @type {!ContextMenuRegistry.Scope} */
                             scope) {
      if (scope.workspace.options.collapse) {
        const topBlocks = scope.workspace.getTopBlocks(false);
        for (let i = 0; i < topBlocks.length; i++) {
          let block = topBlocks[i];
          while (block) {
            if (block.isCollapsed()) {
              return 'enabled';
            }
            block = block.getNextBlock();
          }
        }
        return 'disabled';
      }
      return 'hidden';
    },
    callback: function(/** @type {!ContextMenuRegistry.Scope} */
                       scope) {
      toggleOption_(false, scope.workspace.getTopBlocks(true));
    },
    scopeType: ContextMenuRegistry.ScopeType.WORKSPACE,
    id: 'expandWorkspace',
    weight: 5,
  };
  ContextMenuRegistry.registry.register(expandOption);
}

/**
 * Adds a block and its children to a list of deletable blocks.
 * @param {!BlockSvg} block to delete.
 * @param {!Array<!BlockSvg>} deleteList list of blocks that can be deleted.
 *     This will be
 *    modified in place with the given block and its descendants.
 * @private
 */
function addDeletableBlocks_(block, deleteList) {
  if (block.isDeletable()) {
    Array.prototype.push.apply(deleteList, block.getDescendants(false));
  } else {
    const children = /* eslint-disable-next-line indent */
        /** @type {!Array<!BlockSvg>} */ (block.getChildren(false));
    for (let i = 0; i < children.length; i++) {
      addDeletableBlocks_(children[i], deleteList);
    }
  }
}

/**
 * Constructs a list of blocks that can be deleted in the given workspace.
 * @param {!WorkspaceSvg} workspace to delete all blocks from.
 * @return {!Array<!BlockSvg>} list of blocks to delete.
 * @private
 */
function getDeletableBlocks_(workspace) {
  const deleteList = [];
  const topBlocks = workspace.getTopBlocks(true);
  for (let i = 0; i < topBlocks.length; i++) {
    addDeletableBlocks_(topBlocks[i], deleteList);
  }
  return deleteList;
}

/**
 * Deletes the given blocks. Used to delete all blocks in the workspace.
 * @param {!Array<!BlockSvg>} deleteList list of blocks to delete.
 * @param {string} eventGroup event group ID with which all delete events should
 *     be associated.
 * @private
 */
function deleteNext_(deleteList, eventGroup) {
  const DELAY = 10;
  eventUtils.setGroup(eventGroup);
  const block = deleteList.shift();
  if (block) {
    if (block.workspace) {
      block.dispose(false, true);
      setTimeout(deleteNext_, DELAY, deleteList, eventGroup);
    } else {
      deleteNext_(deleteList, eventGroup);
    }
  }
  eventUtils.setGroup(false);
}

/**
 * Option to delete all blocks.
 * @alias Blockly.ContextMenuItems.registerDeleteAll
 */
export function registerDeleteAll() {
  /** @type {!ContextMenuRegistry.RegistryItem} */
  const deleteOption = {
    displayText: function(/** @type {!ContextMenuRegistry.Scope} */
                          scope) {
      if (!scope.workspace) {
        return;
      }
      const deletableBlocksLength = getDeletableBlocks_(scope.workspace).length;
      if (deletableBlocksLength === 1) {
        return Msg['DELETE_BLOCK'];
      } else {
        return Msg['DELETE_X_BLOCKS'].replace(
            '%1', String(deletableBlocksLength));
      }
    },
    preconditionFn: function(/** @type {!ContextMenuRegistry.Scope} */
                             scope) {
      if (!scope.workspace) {
        return;
      }
      const deletableBlocksLength = getDeletableBlocks_(scope.workspace).length;
      return deletableBlocksLength > 0 ? 'enabled' : 'disabled';
    },
    callback: function(/** @type {!ContextMenuRegistry.Scope} */
                       scope) {
      if (!scope.workspace) {
        return;
      }
      scope.workspace.cancelCurrentGesture();
      const deletableBlocks = getDeletableBlocks_(scope.workspace);
      const eventGroup = idGenerator.genUid();
      if (deletableBlocks.length < 2) {
        deleteNext_(deletableBlocks, eventGroup);
      } else {
        dialog.confirm(
            Msg['DELETE_ALL_BLOCKS'].replace(
                '%1', String(deletableBlocks.length)),
            function(ok) {
              if (ok) {
                deleteNext_(deletableBlocks, eventGroup);
              }
            });
      }
    },
    scopeType: ContextMenuRegistry.ScopeType.WORKSPACE,
    id: 'workspaceDelete',
    weight: 6,
  };
  ContextMenuRegistry.registry.register(deleteOption);
}

/**
 * Registers all workspace-scoped context menu items.
 * @private
 */
function registerWorkspaceOptions_() {
  registerUndo();
  registerRedo();
  registerCleanup();
  registerCollapse();
  registerExpand();
  registerDeleteAll();
}

/**
 * Option to duplicate a block.
 * @alias Blockly.ContextMenuItems.registerDuplicate
 */
export function registerDuplicate() {
  /** @type {!ContextMenuRegistry.RegistryItem} */
  const duplicateOption = {
    displayText: function() {
      return Msg['DUPLICATE_BLOCK'];
    },
    preconditionFn: function(/** @type {!ContextMenuRegistry.Scope} */
                             scope) {
      const block = scope.block;
      if (!block.isInFlyout && block.isDeletable() && block.isMovable()) {
        if (block.isDuplicatable()) {
          return 'enabled';
        }
        return 'disabled';
      }
      return 'hidden';
    },
    callback: function(/** @type {!ContextMenuRegistry.Scope} */
                       scope) {
      if (scope.block) {
        clipboard.duplicate(scope.block);
      }
    },
    scopeType: ContextMenuRegistry.ScopeType.BLOCK,
    id: 'blockDuplicate',
    weight: 1,
  };
  ContextMenuRegistry.registry.register(duplicateOption);
}

/**
 * Option to add or remove block-level comment.
 * @alias Blockly.ContextMenuItems.registerComment
 */
export function registerComment() {
  /** @type {!ContextMenuRegistry.RegistryItem} */
  const commentOption = {
    displayText: function(/** @type {!ContextMenuRegistry.Scope} */
                          scope) {
      if (scope.block.getCommentIcon()) {
        // If there's already a comment,  option is to remove.
        return Msg['REMOVE_COMMENT'];
      }
      // If there's no comment yet, option is to add.
      return Msg['ADD_COMMENT'];
    },
    preconditionFn: function(/** @type {!ContextMenuRegistry.Scope} */
                             scope) {
      const block = scope.block;
      // IE doesn't support necessary features for comment editing.
      if (!userAgent.IE && !block.isInFlyout &&
          block.workspace.options.comments && !block.isCollapsed() &&
          block.isEditable()) {
        return 'enabled';
      }
      return 'hidden';
    },
    callback: function(/** @type {!ContextMenuRegistry.Scope} */
                       scope) {
      const block = scope.block;
      if (block.getCommentIcon()) {
        block.setCommentText(null);
      } else {
        block.setCommentText('');
      }
    },
    scopeType: ContextMenuRegistry.ScopeType.BLOCK,
    id: 'blockComment',
    weight: 2,
  };
  ContextMenuRegistry.registry.register(commentOption);
}

/**
 * Option to inline variables.
 * @alias Blockly.ContextMenuItems.registerInline
 */
export function registerInline() {
  /** @type {!ContextMenuRegistry.RegistryItem} */
  const inlineOption = {
    displayText: function(/** @type {!ContextMenuRegistry.Scope} */
                          scope) {
      return (scope.block.getInputsInline()) ? Msg['EXTERNAL_INPUTS'] :
                                               Msg['INLINE_INPUTS'];
    },
    preconditionFn: function(/** @type {!ContextMenuRegistry.Scope} */
                             scope) {
      const block = scope.block;
      if (!block.isInFlyout && block.isMovable() && !block.isCollapsed()) {
        for (let i = 1; i < block.inputList.length; i++) {
          // Only display this option if there are two value or dummy inputs
          // next to each other.
          if (block.inputList[i - 1].type !== inputTypes.STATEMENT &&
              block.inputList[i].type !== inputTypes.STATEMENT) {
            return 'enabled';
          }
        }
      }
      return 'hidden';
    },
    callback: function(/** @type {!ContextMenuRegistry.Scope} */
                       scope) {
      scope.block.setInputsInline(!scope.block.getInputsInline());
    },
    scopeType: ContextMenuRegistry.ScopeType.BLOCK,
    id: 'blockInline',
    weight: 3,
  };
  ContextMenuRegistry.registry.register(inlineOption);
}

/**
 * Option to collapse or expand a block.
 * @alias Blockly.ContextMenuItems.registerCollapseExpandBlock
 */
export function registerCollapseExpandBlock() {
  /** @type {!ContextMenuRegistry.RegistryItem} */
  const collapseExpandOption = {
    displayText: function(/** @type {!ContextMenuRegistry.Scope} */
                          scope) {
      return scope.block.isCollapsed() ? Msg['EXPAND_BLOCK'] :
                                         Msg['COLLAPSE_BLOCK'];
    },
    preconditionFn: function(/** @type {!ContextMenuRegistry.Scope} */
                             scope) {
      const block = scope.block;
      if (!block.isInFlyout && block.isMovable() &&
          block.workspace.options.collapse) {
        return 'enabled';
      }
      return 'hidden';
    },
    callback: function(/** @type {!ContextMenuRegistry.Scope} */
                       scope) {
      scope.block.setCollapsed(!scope.block.isCollapsed());
    },
    scopeType: ContextMenuRegistry.ScopeType.BLOCK,
    id: 'blockCollapseExpand',
    weight: 4,
  };
  ContextMenuRegistry.registry.register(collapseExpandOption);
}

/**
 * Option to disable or enable a block.
 * @alias Blockly.ContextMenuItems.registerDisable
 */
export function registerDisable() {
  /** @type {!ContextMenuRegistry.RegistryItem} */
  const disableOption = {
    displayText: function(/** @type {!ContextMenuRegistry.Scope} */
                          scope) {
      return (scope.block.isEnabled()) ? Msg['DISABLE_BLOCK'] :
                                         Msg['ENABLE_BLOCK'];
    },
    preconditionFn: function(/** @type {!ContextMenuRegistry.Scope} */
                             scope) {
      const block = scope.block;
      if (!block.isInFlyout && block.workspace.options.disable &&
          block.isEditable()) {
        if (block.getInheritedDisabled()) {
          return 'disabled';
        }
        return 'enabled';
      }
      return 'hidden';
    },
    callback: function(/** @type {!ContextMenuRegistry.Scope} */
                       scope) {
      const block = scope.block;
      const group = eventUtils.getGroup();
      if (!group) {
        eventUtils.setGroup(true);
      }
      block.setEnabled(!block.isEnabled());
      if (!group) {
        eventUtils.setGroup(false);
      }
    },
    scopeType: ContextMenuRegistry.ScopeType.BLOCK,
    id: 'blockDisable',
    weight: 5,
  };
  ContextMenuRegistry.registry.register(disableOption);
}

/**
 * Option to delete a block.
 * @alias Blockly.ContextMenuItems.registerDelete
 */
export function registerDelete() {
  /** @type {!ContextMenuRegistry.RegistryItem} */
  const deleteOption = {
    displayText: function(/** @type {!ContextMenuRegistry.Scope} */
                          scope) {
      const block = scope.block;
      // Count the number of blocks that are nested in this block.
      let descendantCount = block.getDescendants(false).length;
      const nextBlock = block.getNextBlock();
      if (nextBlock) {
        // Blocks in the current stack would survive this block's deletion.
        descendantCount -= nextBlock.getDescendants(false).length;
      }
      return (descendantCount === 1) ?
          Msg['DELETE_BLOCK'] :
          Msg['DELETE_X_BLOCKS'].replace('%1', String(descendantCount));
    },
    preconditionFn: function(/** @type {!ContextMenuRegistry.Scope} */
                             scope) {
      if (!scope.block.isInFlyout && scope.block.isDeletable()) {
        return 'enabled';
      }
      return 'hidden';
    },
    callback: function(/** @type {!ContextMenuRegistry.Scope} */
                       scope) {
      if (scope.block) {
        scope.block.checkAndDelete();
      }
    },
    scopeType: ContextMenuRegistry.ScopeType.BLOCK,
    id: 'blockDelete',
    weight: 6,
  };
  ContextMenuRegistry.registry.register(deleteOption);
}

/**
 * Option to open help for a block.
 * @alias Blockly.ContextMenuItems.registerHelp
 */
export function registerHelp() {
  /** @type {!ContextMenuRegistry.RegistryItem} */
  const helpOption = {
    displayText: function() {
      return Msg['HELP'];
    },
    preconditionFn: function(/** @type {!ContextMenuRegistry.Scope} */
                             scope) {
      const block = scope.block;
      const url = (typeof block.helpUrl === 'function') ? block.helpUrl() :
                                                          block.helpUrl;
      if (url) {
        return 'enabled';
      }
      return 'hidden';
    },
    callback: function(/** @type {!ContextMenuRegistry.Scope} */
                       scope) {
      scope.block.showHelp();
    },
    scopeType: ContextMenuRegistry.ScopeType.BLOCK,
    id: 'blockHelp',
    weight: 7,
  };
  ContextMenuRegistry.registry.register(helpOption);
}

/**
 * Registers all block-scoped context menu items.
 * @private
 */
function registerBlockOptions_() {
  registerDuplicate();
  registerComment();
  registerInline();
  registerCollapseExpandBlock();
  registerDisable();
  registerDelete();
  registerHelp();
}

/**
 * Registers all default context menu items. This should be called once per
 * instance of ContextMenuRegistry.
 * @package
 * @alias Blockly.ContextMenuItems.registerDefaultOptions
 */
export function registerDefaultOptions() {
  registerWorkspaceOptions_();
  registerBlockOptions_();
}

registerDefaultOptions();
