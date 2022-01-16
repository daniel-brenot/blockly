/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Namespace for block rendering functionality.
 * @namespace Blockly.blockRendering
 */
goog.module('Blockly.blockRendering');

import debug from 'Blockly.blockRendering.debug';
import deprecation from 'Blockly.utils.deprecation';
import registry from 'Blockly.registry';
import {BottomRow} from 'Blockly.blockRendering.BottomRow';
import {Connection} from 'Blockly.blockRendering.Connection';
import {ConstantProvider} from 'Blockly.blockRendering.ConstantProvider';
import {Debug} from 'Blockly.blockRendering.Debug';
import {Drawer} from 'Blockly.blockRendering.Drawer';
import {ExternalValueInput} from 'Blockly.blockRendering.ExternalValueInput';
import {Field} from 'Blockly.blockRendering.Field';
import {Hat} from 'Blockly.blockRendering.Hat';
import {IPathObject} from 'Blockly.blockRendering.IPathObject';
import {Icon} from 'Blockly.blockRendering.Icon';
import {InRowSpacer} from 'Blockly.blockRendering.InRowSpacer';
import {InlineInput} from 'Blockly.blockRendering.InlineInput';
import {InputConnection} from 'Blockly.blockRendering.InputConnection';
import {InputRow} from 'Blockly.blockRendering.InputRow';
import {JaggedEdge} from 'Blockly.blockRendering.JaggedEdge';
import {MarkerSvg} from 'Blockly.blockRendering.MarkerSvg';
import {Measurable} from 'Blockly.blockRendering.Measurable';
import {NextConnection} from 'Blockly.blockRendering.NextConnection';
import {OutputConnection} from 'Blockly.blockRendering.OutputConnection';
import {PathObject} from 'Blockly.blockRendering.PathObject';
import {PreviousConnection} from 'Blockly.blockRendering.PreviousConnection';
import {RenderInfo} from 'Blockly.blockRendering.RenderInfo';
import {Renderer} from 'Blockly.blockRendering.Renderer';
import {RoundCorner} from 'Blockly.blockRendering.RoundCorner';
import {Row} from 'Blockly.blockRendering.Row';
import {SpacerRow} from 'Blockly.blockRendering.SpacerRow';
import {SquareCorner} from 'Blockly.blockRendering.SquareCorner';
import {StatementInput} from 'Blockly.blockRendering.StatementInput';
import {Theme} from 'Blockly.Theme';
import {TopRow} from 'Blockly.blockRendering.TopRow';
import {Types} from 'Blockly.blockRendering.Types';

/**
 * Returns whether the debugger is turned on.
 * @return {boolean} Whether the debugger is turned on.
 * @alias Blockly.blockRendering.isDebuggerEnabled
 * @package
 */
export function isDebuggerEnabled() {
  deprecation.warn(
      'Blockly.blockRendering.isDebuggerEnabled()', 'September 2021',
      'September 2022', 'Blockly.blockRendering.debug.isDebuggerEnabled()');
  return debug.isDebuggerEnabled();
}

/**
 * Registers a new renderer.
 * @param {string} name The name of the renderer.
 * @param {!Function} rendererClass The new renderer class
 *     to register.
 * @throws {Error} if a renderer with the same name has already been registered.
 */
export function register(name, rendererClass) {
  registry.register(registry.Type.RENDERER, name, rendererClass);
}

/**
 * Unregisters the renderer registered with the given name.
 * @param {string} name The name of the renderer.
 * @alias Blockly.blockRendering.unregister
 */
export function unregister(name) {
  registry.unregister(registry.Type.RENDERER, name);
}

/**
 * Turn on the blocks debugger.
 * @package
 * @alias Blockly.blockRendering.startDebugger
 */
export function startDebugger() {
  deprecation.warn(
      'Blockly.blockRendering.startDebugger()', 'September 2021',
      'September 2022', 'Blockly.blockRendering.debug.startDebugger()');
  debug.startDebugger();
}

/**
 * Turn off the blocks debugger.
 * @package
 * @alias Blockly.blockRendering.stopDebugger
 */
export function stopDebugger() {
  deprecation.warn(
      'Blockly.blockRendering.stopDebugger()', 'September 2021',
      'September 2022', 'Blockly.blockRendering.debug.stopDebugger()');
  debug.stopDebugger();
}

/**
 * Initialize anything needed for rendering (constants, etc).
 * @param {!string} name Name of the renderer to initialize.
 * @param {!Theme} theme The workspace theme object.
 * @param {Object=} opt_rendererOverrides Rendering constant overrides.
 * @return {!Renderer} The new instance of a renderer.
 *     Already initialized.
 * @package
 * @alias Blockly.blockRendering.init
 */
export function init(name, theme, opt_rendererOverrides) {
  const rendererClass = registry.getClass(registry.Type.RENDERER, name);
  const renderer = new rendererClass(name);
  renderer.init(theme, opt_rendererOverrides);
  return renderer;
}

exports.BottomRow = BottomRow;
exports.Connection = Connection;
exports.ConstantProvider = ConstantProvider;
exports.Debug = Debug;
exports.Drawer = Drawer;
exports.ExternalValueInput = ExternalValueInput;
exports.Field = Field;
exports.Hat = Hat;
exports.Icon = Icon;
exports.InRowSpacer = InRowSpacer;
exports.InlineInput = InlineInput;
exports.InputConnection = InputConnection;
exports.InputRow = InputRow;
exports.IPathObject = IPathObject;
exports.JaggedEdge = JaggedEdge;
exports.MarkerSvg = MarkerSvg;
exports.Measurable = Measurable;
exports.NextConnection = NextConnection;
exports.OutputConnection = OutputConnection;
exports.PathObject = PathObject;
exports.PreviousConnection = PreviousConnection;
exports.Renderer = Renderer;
exports.RenderInfo = RenderInfo;
exports.RoundCorner = RoundCorner;
exports.Row = Row;
exports.SpacerRow = SpacerRow;
exports.SquareCorner = SquareCorner;
exports.StatementInput = StatementInput;
exports.TopRow = TopRow;
exports.Types = Types;
exports.debug = debug;
