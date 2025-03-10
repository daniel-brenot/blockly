/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Wrapper functions around JS functions for showing
 * alert/confirmation dialogs.
 */



/**
 * Wrapper functions around JS functions for showing alert/confirmation dialogs.
 * @namespace Blockly.dialog
 */

let alertImplementation = function(message, opt_callback) {
  window.alert(message);
  if (opt_callback) {
    opt_callback();
  }
};

let confirmImplementation = function(message, callback) {
  callback(window.confirm(message));
};

let promptImplementation = function(message, defaultValue, callback) {
  callback(window.prompt(message, defaultValue));
};

/**
 * Wrapper to window.alert() that app developers may override via setAlert to
 * provide alternatives to the modal browser window.
 * @param {string} message The message to display to the user.
 * @param {function()=} opt_callback The callback when the alert is dismissed.
 * @alias Blockly.dialog.alert
 */
export function alert(message, opt_callback) {
  alertImplementation(message, opt_callback);
}

/**
 * Sets the function to be run when Blockly.dialog.alert() is called.
 * @param {!function(string, function()=)} alertFunction The function to be run.
 * @see Blockly.dialog.alert
 * @alias Blockly.dialog.setAlert
 */
export function setAlert(alertFunction) {
  alertImplementation = alertFunction;
}

/**
 * Wrapper to window.confirm() that app developers may override via setConfirm
 * to provide alternatives to the modal browser window.
 * @param {string} message The message to display to the user.
 * @param {!function(boolean)} callback The callback for handling user response.
 * @alias Blockly.dialog.confirm
 */
export function confirm(message, callback) {
  confirmImplementation(message, callback);
}

/**
 * Sets the function to be run when Blockly.dialog.confirm() is called.
 * @param {!function(string, !function(boolean))} confirmFunction The function
 *    to be run.
 * @see Blockly.dialog.confirm
 * @alias Blockly.dialog.setConfirm
 */
export function setConfirm(confirmFunction) {
  confirmImplementation = confirmFunction;
}

/**
 * Wrapper to window.prompt() that app developers may override via setPrompt to
 * provide alternatives to the modal browser window. Built-in browser prompts
 * are often used for better text input experience on mobile device. We strongly
 * recommend testing mobile when overriding this.
 * @param {string} message The message to display to the user.
 * @param {string} defaultValue The value to initialize the prompt with.
 * @param {!function(?string)} callback The callback for handling user response.
 * @alias Blockly.dialog.prompt
 */
export function prompt(message, defaultValue, callback) {
  promptImplementation(message, defaultValue, callback);
}

/**
 * Sets the function to be run when Blockly.dialog.prompt() is called.
 * @param {!function(string, string, !function(?string))} promptFunction The
 *    function to be run.
 * @see Blockly.dialog.prompt
 * @alias Blockly.dialog.setPrompt
 */
export function setPrompt(promptFunction) {
  promptImplementation = promptFunction;
}
