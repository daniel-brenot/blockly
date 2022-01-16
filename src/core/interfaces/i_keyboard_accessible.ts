/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview The interface for objects that handle keyboard shortcuts.
 */



/**
 * The interface for objects that handle keyboard shortcuts.
 * @namespace Blockly.IKeyboardAccessible
 */

import {ShortcutRegistry} from 'blockly/core/shortcut_registry';


/**
 * An interface for an object that handles keyboard shortcuts.
 * @interface
 * @alias Blockly.IKeyboardAccessible
 */
const IKeyboardAccessible = function() {};

/**
 * Handles the given keyboard shortcut.
 * @param {!ShortcutRegistry.KeyboardShortcut} shortcut The shortcut to be
 *     handled.
 * @return {boolean} True if the shortcut has been handled, false otherwise.
 */
IKeyboardAccessible.prototype.onShortcut;

exports.IKeyboardAccessible = IKeyboardAccessible;
