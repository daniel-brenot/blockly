/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Minimalist rendering drawer.
 * @class
 */

import object from 'blockly/core/utils/object';
import {BlockSvg} from 'blockly/core/block_svg';
import {Drawer: BaseDrawer} from 'blockly/core/renderers/common/drawer';
import {RenderInfo} from 'blockly/core/renderers/minimalist/info';


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
