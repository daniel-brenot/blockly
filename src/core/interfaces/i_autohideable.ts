/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview The interface for a component that is automatically hidden
 * when WorkspaceSvg.hideChaff is called.
 */



/**
 * The interface for a component that is automatically hidden
 * when WorkspaceSvg.hideChaff is called.
 * @namespace Blockly.IAutoHideable
 */

import {IComponent} from 'blockly/core/interfaces/i_component';


/**
 * Interface for a component that can be automatically hidden.
 * @extends {IComponent}
 * @interface
 * @alias Blockly.IAutoHideable
 */
const IAutoHideable = function() {};

/**
 * Hides the component. Called in WorkspaceSvg.hideChaff.
 * @param {boolean} onlyClosePopups Whether only popups should be closed.
 *   Flyouts should not be closed if this is true.
 */
IAutoHideable.prototype.autoHide;

exports.IAutoHideable = IAutoHideable;
