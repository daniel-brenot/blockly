/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Thrasos renderer.
 * @class
 */

import blockRendering from 'blockly/core/renderers/common/block_rendering';
import object from 'blockly/core/utils/object';
import {BlockSvg} from 'blockly/core/block_svg';
import {RenderInfo} from 'blockly/core/renderers/thrasos/info.';
import {Renderer: BaseRenderer} from 'blockly/core/renderers/common/renderer';


/**
 * The thrasos renderer.
 * @param {string} name The renderer name.
 * @package
 * @constructor
 * @extends {BaseRenderer}
 * @alias Blockly.thrasos.Renderer
 */
function Renderer(name) {
  Renderer.superClass_.constructor.call(this, name);
}
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
