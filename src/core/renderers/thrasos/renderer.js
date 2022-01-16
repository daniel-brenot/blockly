/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Thrasos renderer.
 * @class
 */
goog.module('Blockly.thrasos.Renderer');

import blockRendering from 'Blockly.blockRendering';
import object from 'Blockly.utils.object';
import {BlockSvg} from 'Blockly.BlockSvg';
import {RenderInfo} from 'Blockly.thrasos.RenderInfo';
import {Renderer: BaseRenderer} from 'Blockly.blockRendering.Renderer';


/**
 * The thrasos renderer.
 * @param {string} name The renderer name.
 * @package
 * @constructor
 * @extends {BaseRenderer}
 * @alias Blockly.thrasos.Renderer
 */
const Renderer = function(name) {
  Renderer.superClass_.constructor.call(this, name);
};
object.inherits(Renderer, BaseRenderer);

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


blockRendering.register('thrasos', Renderer);

exports.Renderer = Renderer;
