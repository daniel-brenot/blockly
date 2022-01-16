/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Re-exports of Blockly.minimalist.* modules.
 * @namespace Blockly.minimalist
 */
goog.module('blockly/core/renderers/minimalist/minimalist');

import {ConstantProvider} from 'blockly/core/renderers/minimalist/constants';
import {Drawer} from 'blockly/core/renderers/minimalist/drawer';
import {RenderInfo} from 'blockly/core/renderers/minimalist/info';
import {Renderer} from 'blockly/core/renderers/minimalist/renderer';

exports.ConstantProvider = ConstantProvider;
exports.Drawer = Drawer;
exports.RenderInfo = RenderInfo;
exports.Renderer = Renderer;
