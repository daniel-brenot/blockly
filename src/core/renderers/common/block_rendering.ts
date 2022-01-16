/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Namespace for block rendering functionality.
 * @namespace Blockly.blockRendering
 */
goog.module('blockly/core/renderers/common/block_rendering');

import debug from 'blockly/core/renderers/common/debug';
import deprecation from 'blockly/core/utils/deprecation';
import registry from 'blockly/core/registry';
import {BottomRow} from 'blockly/core/renderers/measurables/bottom_row';
import {Connection} from 'blockly/core/renderers/measurables/connection';
import {ConstantProvider} from 'blockly/core/renderers/common/constants';
import {Debug} from 'blockly/core/renderers/common/debugger';
import {Drawer} from 'blockly/core/renderers/common/drawer';
import {ExternalValueInput} from 'blockly/core/renderers/measurables/external_value_input';
import {Field} from 'blockly/core/renderers/measurables/field';
import {Hat} from 'blockly/core/renderers/measurables/hat';
import {IPathObject} from 'blockly/core/renderers/common/i_path_object';
import {Icon} from 'blockly/core/renderers/measurables/icon';
import {InRowSpacer} from 'blockly/core/renderers/measurables/in_row_spacer';
import {InlineInput} from 'blockly/core/renderers/measurables/inline_input';
import {InputConnection} from 'blockly/core/renderers/measurables/input_connection';
import {InputRow} from 'blockly/core/renderers/measurables/input_row';
import {JaggedEdge} from 'blockly/core/renderers/measurables/jagged_edge';
import {MarkerSvg} from 'blockly/core/renderers/common/marker_svg';
import {Measurable} from 'blockly/core/renderers/measurables/base';
import {NextConnection} from 'blockly/core/renderers/measurables/next_connection';
import {OutputConnection} from 'blockly/core/renderers/measurables/output_connection';
import {PathObject} from 'blockly/core/renderers/common/path_object';
import {PreviousConnection} from 'blockly/core/renderers/measurables/previous_connection';
import {RenderInfo} from 'blockly/core/renderers/common/info';
import {Renderer} from 'blockly/core/renderers/common/renderer';
import {RoundCorner} from 'blockly/core/renderers/measurables/round_corner';
import {Row} from 'blockly/core/renderers/measurables/row';
import {SpacerRow} from 'blockly/core/renderers/measurables/spacer_row';
import {SquareCorner} from 'blockly/core/renderers/measurables/square_corner';
import {StatementInput} from 'blockly/core/renderers/measurables/statement_input';
import {Theme} from 'blockly/core/theme';
import {TopRow} from 'blockly/core/renderers/measurables/top_row';
import {Types} from 'blockly/core/renderers/measurables/types';

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
