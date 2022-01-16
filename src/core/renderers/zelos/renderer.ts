/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Zelos renderer.
 * @class
 */
goog.module('Blockly.zelos.Renderer');

import blockRendering from 'Blockly.blockRendering';
import object from 'Blockly.utils.object';
import {BlockSvg} from 'Blockly.BlockSvg';
import {ConnectionType} from 'Blockly.ConnectionType';
import {ConstantProvider} from 'Blockly.zelos.ConstantProvider';
import {Drawer} from 'Blockly.zelos.Drawer';
import {InsertionMarkerManager} from 'Blockly.InsertionMarkerManager';
import {MarkerSvg} from 'Blockly.zelos.MarkerSvg';
import {Marker} from 'Blockly.Marker';
import {PathObject} from 'Blockly.zelos.PathObject';
import {RenderInfo: BaseRenderInfo} from 'Blockly.blockRendering.RenderInfo';
import {RenderInfo} from 'Blockly.zelos.RenderInfo';
import {Renderer: BaseRenderer} from 'Blockly.blockRendering.Renderer';
import {Theme} from 'Blockly.Theme';
import {WorkspaceSvg} from 'Blockly.WorkspaceSvg';


/**
 * The zelos renderer.
 * @param {string} name The renderer name.
 * @package
 * @constructor
 * @extends {BaseRenderer}
 * @alias Blockly.zelos.Renderer
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
  return new Drawer(
      block,
      /** @type {!RenderInfo} */ (info));
};

/**
 * Create a new instance of the renderer's cursor drawer.
 * @param {!WorkspaceSvg} workspace The workspace the cursor belongs to.
 * @param {!Marker} marker The marker.
 * @return {!MarkerSvg} The object in charge of drawing
 *     the marker.
 * @package
 * @override
 */
Renderer.prototype.makeMarkerDrawer = function(workspace, marker) {
  return new MarkerSvg(workspace, this.getConstants(), marker);
};

/**
 * Create a new instance of a renderer path object.
 * @param {!SVGElement} root The root SVG element.
 * @param {!Theme.BlockStyle} style The style object to use for
 *     coloring.
 * @return {!PathObject} The renderer path object.
 * @package
 * @override
 */
Renderer.prototype.makePathObject = function(root, style) {
  return new PathObject(
      root, style,
      /** @type {!ConstantProvider} */ (this.getConstants()));
};

/**
 * @override
 */
Renderer.prototype.shouldHighlightConnection = function(conn) {
  return conn.type !== ConnectionType.INPUT_VALUE &&
      conn.type !== ConnectionType.OUTPUT_VALUE;
};

/**
 * @override
 */
Renderer.prototype.getConnectionPreviewMethod = function(
    closest, local, topBlock) {
  if (local.type === ConnectionType.OUTPUT_VALUE) {
    if (!closest.isConnected()) {
      return InsertionMarkerManager.PREVIEW_TYPE.INPUT_OUTLINE;
    }
    // TODO: Returning this is a total hack, because we don't want to show
    //   a replacement fade, we want to show an outline affect.
    //   Sadly zelos does not support showing an outline around filled
    //   inputs, so we have to pretend like the connected block is getting
    //   replaced.
    return InsertionMarkerManager.PREVIEW_TYPE.REPLACEMENT_FADE;
  }

  return Renderer.superClass_.getConnectionPreviewMethod(
      closest, local, topBlock);
};

blockRendering.register('zelos', Renderer);

exports.Renderer = Renderer;
