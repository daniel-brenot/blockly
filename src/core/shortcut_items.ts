/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Registers default keyboard shortcuts.
 * @namespace Blockly.ShortcutItems
 */

import clipboard from 'blockly/core/clipboard';
import common from 'blockly/core/common';
import {BlockSvg} from 'blockly/core/block_svg';
import {Gesture} from 'blockly/core/gesture';
import {ICopyable} from 'blockly/core/interfaces/i_copyable';
import {KeyCodes} from 'blockly/core/utils/keycodes';
import {ShortcutRegistry} from 'blockly/core/shortcut_registry';


/**
 * Object holding the names of the default shortcut items.
 * @enum {string}
 * @alias Blockly.ShortcutItems.names
 */
const names = {
  ESCAPE: 'escape',
  DELETE: 'delete',
  COPY: 'copy',
  CUT: 'cut',
  PASTE: 'paste',
  UNDO: 'undo',
  REDO: 'redo',
};
exports.names = names;

/**
 * Keyboard shortcut to hide chaff on escape.
 * @alias Blockly.ShortcutItems.registerEscape
 */
export function registerEscape() {
  /** @type {!ShortcutRegistry.KeyboardShortcut} */
  const escapeAction = {
    name: names.ESCAPE,
    preconditionFn: function(workspace) {
      return !workspace.options.readOnly;
    },
    callback: function(workspace) {
      workspace.hideChaff();
      return true;
    },
  };
  ShortcutRegistry.registry.register(escapeAction);
  ShortcutRegistry.registry.addKeyMapping(KeyCodes.ESC, escapeAction.name);
}

/**
 * Keyboard shortcut to delete a block on delete or backspace
 * @alias Blockly.ShortcutItems.registerDelete
 */
export function registerDelete() {
  /** @type {!ShortcutRegistry.KeyboardShortcut} */
  const deleteShortcut = {
    name: names.DELETE,
    preconditionFn: function(workspace) {
      const selected = common.getSelected();
      return !workspace.options.readOnly && selected && selected.isDeletable();
    },
    callback: function(workspace, e) {
      // Delete or backspace.
      // Stop the browser from going back to the previous page.
      // Do this first to prevent an error in the delete code from resulting in
      // data loss.
      e.preventDefault();
      // Don't delete while dragging.  Jeez.
      if (Gesture.inProgress()) {
        return false;
      }
      (/** @type {!BlockSvg} */ (common.getSelected())).checkAndDelete();
      return true;
    },
  };
  ShortcutRegistry.registry.register(deleteShortcut);
  ShortcutRegistry.registry.addKeyMapping(KeyCodes.DELETE, deleteShortcut.name);
  ShortcutRegistry.registry.addKeyMapping(
      KeyCodes.BACKSPACE, deleteShortcut.name);
}

/**
 * Keyboard shortcut to copy a block on ctrl+c, cmd+c, or alt+c.
 * @alias Blockly.ShortcutItems.registerCopy
 */
export function registerCopy() {
  /** @type {!ShortcutRegistry.KeyboardShortcut} */
  const copyShortcut = {
    name: names.COPY,
    preconditionFn: function(workspace) {
      const selected = common.getSelected();
      return !workspace.options.readOnly && !Gesture.inProgress() && selected &&
          selected.isDeletable() && selected.isMovable();
    },
    callback: function(workspace, e) {
      // Prevent the default copy behavior, which may beep or otherwise indicate
      // an error due to the lack of a selection.
      e.preventDefault();
      workspace.hideChaff();
      clipboard.copy(/** @type {!ICopyable} */ (common.getSelected()));
      return true;
    },
  };
  ShortcutRegistry.registry.register(copyShortcut);

  const ctrlC = ShortcutRegistry.registry.createSerializedKey(
      KeyCodes.C, [KeyCodes.CTRL]);
  ShortcutRegistry.registry.addKeyMapping(ctrlC, copyShortcut.name);

  const altC =
      ShortcutRegistry.registry.createSerializedKey(KeyCodes.C, [KeyCodes.ALT]);
  ShortcutRegistry.registry.addKeyMapping(altC, copyShortcut.name);

  const metaC = ShortcutRegistry.registry.createSerializedKey(
      KeyCodes.C, [KeyCodes.META]);
  ShortcutRegistry.registry.addKeyMapping(metaC, copyShortcut.name);
}

/**
 * Keyboard shortcut to copy and delete a block on ctrl+x, cmd+x, or alt+x.
 * @alias Blockly.ShortcutItems.registerCut
 */
export function registerCut() {
  /** @type {!ShortcutRegistry.KeyboardShortcut} */
  const cutShortcut = {
    name: names.CUT,
    preconditionFn: function(workspace) {
      const selected = common.getSelected();
      return !workspace.options.readOnly && !Gesture.inProgress() && selected &&
          selected.isDeletable() && selected.isMovable() &&
          !selected.workspace.isFlyout;
    },
    callback: function() {
      const selected = common.getSelected();
      if (!selected) {
        // Shouldn't happen but appeases the type system
        return false;
      }
      clipboard.copy(selected);
      (/** @type {!BlockSvg} */ (selected)).checkAndDelete();
      return true;
    },
  };

  ShortcutRegistry.registry.register(cutShortcut);

  const ctrlX = ShortcutRegistry.registry.createSerializedKey(
      KeyCodes.X, [KeyCodes.CTRL]);
  ShortcutRegistry.registry.addKeyMapping(ctrlX, cutShortcut.name);

  const altX =
      ShortcutRegistry.registry.createSerializedKey(KeyCodes.X, [KeyCodes.ALT]);
  ShortcutRegistry.registry.addKeyMapping(altX, cutShortcut.name);

  const metaX = ShortcutRegistry.registry.createSerializedKey(
      KeyCodes.X, [KeyCodes.META]);
  ShortcutRegistry.registry.addKeyMapping(metaX, cutShortcut.name);
}

/**
 * Keyboard shortcut to paste a block on ctrl+v, cmd+v, or alt+v.
 * @alias Blockly.ShortcutItems.registerPaste
 */
export function registerPaste() {
  /** @type {!ShortcutRegistry.KeyboardShortcut} */
  const pasteShortcut = {
    name: names.PASTE,
    preconditionFn: function(workspace) {
      return !workspace.options.readOnly && !Gesture.inProgress();
    },
    callback: function() {
      return clipboard.paste();
    },
  };

  ShortcutRegistry.registry.register(pasteShortcut);

  const ctrlV = ShortcutRegistry.registry.createSerializedKey(
      KeyCodes.V, [KeyCodes.CTRL]);
  ShortcutRegistry.registry.addKeyMapping(ctrlV, pasteShortcut.name);

  const altV =
      ShortcutRegistry.registry.createSerializedKey(KeyCodes.V, [KeyCodes.ALT]);
  ShortcutRegistry.registry.addKeyMapping(altV, pasteShortcut.name);

  const metaV = ShortcutRegistry.registry.createSerializedKey(
      KeyCodes.V, [KeyCodes.META]);
  ShortcutRegistry.registry.addKeyMapping(metaV, pasteShortcut.name);
}

/**
 * Keyboard shortcut to undo the previous action on ctrl+z, cmd+z, or alt+z.
 * @alias Blockly.ShortcutItems.registerUndo
 */
export function registerUndo() {
  /** @type {!ShortcutRegistry.KeyboardShortcut} */
  const undoShortcut = {
    name: names.UNDO,
    preconditionFn: function(workspace) {
      return !workspace.options.readOnly && !Gesture.inProgress();
    },
    callback: function(workspace) {
      // 'z' for undo 'Z' is for redo.
      workspace.hideChaff();
      workspace.undo(false);
      return true;
    },
  };
  ShortcutRegistry.registry.register(undoShortcut);

  const ctrlZ = ShortcutRegistry.registry.createSerializedKey(
      KeyCodes.Z, [KeyCodes.CTRL]);
  ShortcutRegistry.registry.addKeyMapping(ctrlZ, undoShortcut.name);

  const altZ =
      ShortcutRegistry.registry.createSerializedKey(KeyCodes.Z, [KeyCodes.ALT]);
  ShortcutRegistry.registry.addKeyMapping(altZ, undoShortcut.name);

  const metaZ = ShortcutRegistry.registry.createSerializedKey(
      KeyCodes.Z, [KeyCodes.META]);
  ShortcutRegistry.registry.addKeyMapping(metaZ, undoShortcut.name);
}

/**
 * Keyboard shortcut to redo the previous action on ctrl+shift+z, cmd+shift+z,
 * or alt+shift+z.
 * @alias Blockly.ShortcutItems.registerRedo
 */
export function registerRedo() {
  /** @type {!ShortcutRegistry.KeyboardShortcut} */
  const redoShortcut = {
    name: names.REDO,
    preconditionFn: function(workspace) {
      return !Gesture.inProgress() && !workspace.options.readOnly;
    },
    callback: function(workspace) {
      // 'z' for undo 'Z' is for redo.
      workspace.hideChaff();
      workspace.undo(true);
      return true;
    },
  };
  ShortcutRegistry.registry.register(redoShortcut);

  const ctrlShiftZ = ShortcutRegistry.registry.createSerializedKey(
      KeyCodes.Z, [KeyCodes.SHIFT, KeyCodes.CTRL]);
  ShortcutRegistry.registry.addKeyMapping(ctrlShiftZ, redoShortcut.name);

  const altShiftZ = ShortcutRegistry.registry.createSerializedKey(
      KeyCodes.Z, [KeyCodes.SHIFT, KeyCodes.ALT]);
  ShortcutRegistry.registry.addKeyMapping(altShiftZ, redoShortcut.name);

  const metaShiftZ = ShortcutRegistry.registry.createSerializedKey(
      KeyCodes.Z, [KeyCodes.SHIFT, KeyCodes.META]);
  ShortcutRegistry.registry.addKeyMapping(metaShiftZ, redoShortcut.name);

  // Ctrl-y is redo in Windows.  Command-y is never valid on Macs.
  const ctrlY = ShortcutRegistry.registry.createSerializedKey(
      KeyCodes.Y, [KeyCodes.CTRL]);
  ShortcutRegistry.registry.addKeyMapping(ctrlY, redoShortcut.name);
}

/**
 * Registers all default keyboard shortcut item. This should be called once per
 * instance of KeyboardShortcutRegistry.
 * @alias Blockly.ShortcutItems.registerDefaultShortcuts
 * @package
 */
export function registerDefaultShortcuts() {
  registerEscape();
  registerDelete();
  registerCopy();
  registerCut();
  registerPaste();
  registerUndo();
  registerRedo();
}

registerDefaultShortcuts();
