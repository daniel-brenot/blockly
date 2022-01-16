/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Minimalist render info object.
 * @class
 */

import object from 'blockly/core/utils/object';
import {BlockSvg} from 'blockly/core/block_svg';
import {RenderInfo: BaseRenderInfo} from 'blockly/core/renderers/common/info';
import {Renderer} from 'blockly/core/renderers/minimalist/renderer';


/**
 * An object containing all sizing information needed to draw this block.
 *
 * This measure pass does not propagate changes to the block (although fields
 * may choose to rerender when getSize() is called).  However, calling it
 * repeatedly may be expensive.
 *
 * @param {!Renderer} renderer The renderer in use.
 * @param {!BlockSvg} block The block to measure.
 * @constructor
 * @package
 * @extends {BaseRenderInfo}
 * @alias Blockly.minimalist.RenderInfo
 */
function RenderInfo(renderer, block) {
  RenderInfo.superClass_.constructor.call(this, renderer, block);
}
object.inherits(RenderInfo, BaseRenderInfo);

/**
 * Get the block renderer in use.
 * @return {!Renderer} The block renderer in use.
 * @package
 */
RenderInfo.prototype.getRenderer = function() {
  return /** @type {!Renderer} */ (this.renderer_);
};

exports.RenderInfo = RenderInfo;
