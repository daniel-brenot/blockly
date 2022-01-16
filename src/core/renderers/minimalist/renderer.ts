/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Minimalist renderer.
 * @class
 */
goog.module('Blockly.minimalist.Renderer');

import blockRendering from 'Blockly.blockRendering';
import object from 'Blockly.utils.object';
import {BlockSvg} from 'Blockly.BlockSvg';
import {ConstantProvider} from 'Blockly.minimalist.ConstantProvider';
import {Drawer} from 'Blockly.minimalist.Drawer';
import {RenderInfo: BaseRenderInfo} from 'Blockly.blockRendering.RenderInfo';
import {RenderInfo} from 'Blockly.minimalist.RenderInfo';
import {Renderer: BaseRenderer} from 'Blockly.blockRendering.Renderer';


/**
 * The minimalist renderer.
 * @param {string} name The renderer name.
 * @package
 * @constructor
 * @extends {BaseRenderer}
 * @alias Blockly.minimalist.Renderer
 */
const Renderer = function(name) {
  Renderer.superClass_.constructor.call(this, name);
};
object.inherits(Renderer, BaseRenderer);

/**
 * Create a new instance of the renderer's constant provider.
 * @return {!ConstantProvider} The constant provider.
 * @protected
 * @override
 */
Renderer.prototype.makeConstants_ = function() {
  return new ConstantProvider();
};

/**
 * Create a new instance of the renderer's render info object.
 * @param {!BlockSvg} block The block to measure.
 * @return {!RenderInfo} The render info object.
 * @protected
 * @override
 */
Renderer.prototype.makeRenderInfo_ = function(block) {
  return new RenderInfo(this, block);
};

/**
 * Create a new instance of the renderer's drawer.
 * @param {!BlockSvg} block The block to render.
 * @param {!BaseRenderInfo} info An object containing all
 *   information needed to render this block.
 * @return {!Drawer} The drawer.
 * @protected
 * @override
 */
Renderer.prototype.makeDrawer_ = function(block, info) {
  return new Drawer(block, /** @type {!RenderInfo} */ (info));
};

blockRendering.register('minimalist', Renderer);

exports.Renderer = Renderer;
