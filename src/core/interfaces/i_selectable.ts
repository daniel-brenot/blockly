/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview The interface for an object that is selectable.
 */



/**
 * The interface for an object that is selectable.
 * @namespace Blockly.ISelectable
 */

// eslint-disable-next-line no-unused-vars
import {IDeletable} from 'blockly/core/interfaces/i_deletable';
// eslint-disable-next-line no-unused-vars
import {IMovable} from 'blockly/core/interfaces/i_movable';


/**
 * The interface for an object that is selectable.
 * @extends {IDeletable}
 * @extends {IMovable}
 * @interface
 * @alias Blockly.ISelectable
 */
const ISelectable = function() {};

/**
 * @type {string}
 */
ISelectable.prototype.id;

/**
 * Select this.  Highlight it visually.
 * @return {void}
 */
ISelectable.prototype.select;

/**
 * Unselect this.  Unhighlight it visually.
 * @return {void}
 */
ISelectable.prototype.unselect;

exports.ISelectable = ISelectable;
