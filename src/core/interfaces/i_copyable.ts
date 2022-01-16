/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview The interface for an object that is copyable.
 */

'use strict';

/**
 * The interface for an object that is copyable.
 * @namespace Blockly.ICopyable
 */
goog.module('Blockly.ICopyable');

import {ISelectable} from 'Blockly.ISelectable';
import {WorkspaceSvg} from 'Blockly.WorkspaceSvg';


/**
 * @extends {ISelectable}
 * @interface
 * @alias Blockly.ICopyable
 */
const ICopyable = function() {};

/**
 * Encode for copying.
 * @return {?ICopyable.CopyData} Copy metadata.
 * @package
 */
ICopyable.prototype.toCopyData;

/**
 * Copy Metadata.
 * @typedef {{
 *            saveInfo:(!Object|!Element),
 *            source:WorkspaceSvg,
 *            typeCounts:?Object
 *          }}
 */
ICopyable.CopyData;

exports.ICopyable = ICopyable;
