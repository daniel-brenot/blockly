/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Minimalist rendering drawer.
 * @class
 */
goog.module('Blockly.minimalist.Drawer');

import object from 'Blockly.utils.object';
import {BlockSvg} from 'Blockly.BlockSvg';
import {Drawer: BaseDrawer} from 'Blockly.blockRendering.Drawer';
import {RenderInfo} from 'Blockly.minimalist.RenderInfo';


/**
 * An object that draws a block based on the given rendering information.
 * @param {!BlockSvg} block The block to render.
 * @param {!RenderInfo} info An object containing all
 *   information needed to render this block.
 * @package
 * @constructor
 * @extends {BaseDrawer}
 * @alias Blockly.minimalist.Drawer
 */
function Drawer(block, info) {
  Drawer.superClass_.constructor.call(this, block, info);
}
object.inherits(Drawer, BaseDrawer);

exports.Drawer = Drawer;
