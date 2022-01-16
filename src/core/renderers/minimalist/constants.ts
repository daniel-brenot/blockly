/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * An object that provides constants for rendering blocks in the
 * minimalist renderer.
 * @class
 */
goog.module('Blockly.minimalist.ConstantProvider');

import object from 'Blockly.utils.object';
import {ConstantProvider: BaseConstantProvider} from 'Blockly.blockRendering.ConstantProvider';


/**
 * An object that provides constants for rendering blocks in the sample.
 * @constructor
 * @package
 * @extends {BaseConstantProvider}
 * @alias Blockly.minimalist.ConstantProvider
 */
function ConstantProvider() {
  ConstantProvider.superClass_.constructor.call(this);
}
object.inherits(ConstantProvider, BaseConstantProvider);

exports.ConstantProvider = ConstantProvider;
