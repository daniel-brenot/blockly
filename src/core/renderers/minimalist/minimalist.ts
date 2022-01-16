/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Re-exports of Blockly.minimalist.* modules.
 * @namespace Blockly.minimalist
 */
goog.module('Blockly.minimalist');

import {ConstantProvider} from 'Blockly.minimalist.ConstantProvider';
import {Drawer} from 'Blockly.minimalist.Drawer';
import {RenderInfo} from 'Blockly.minimalist.RenderInfo';
import {Renderer} from 'Blockly.minimalist.Renderer';

exports.ConstantProvider = ConstantProvider;
exports.Drawer = Drawer;
exports.RenderInfo = RenderInfo;
exports.Renderer = Renderer;
