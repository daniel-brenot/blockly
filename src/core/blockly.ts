/**
 * @license
 * Copyright 2011 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * The top level namespace used to access the Blockly library.
 * @namespace Blockly
 */
goog.module('blockly/core/blockly');
goog.module.declareLegacyNamespace();

import ContextMenu from 'blockly/core/contextmenu';
import ContextMenuItems from 'blockly/core/contextmenu_items';
import Css from 'blockly/core/css';
import Events from 'blockly/core/events/events';
import Extensions from 'blockly/core/extensions';
import Procedures from 'blockly/core/procedures';
import ShortcutItems from 'blockly/core/shortcut_items';
import Themes from 'blockly/core/theme/themes';
import Tooltip from 'blockly/core/tooltip';
import Touch from 'blockly/core/touch';
import Variables from 'blockly/core/variables';
import VariablesDynamic from 'blockly/core/variables_dynamic';
import WidgetDiv from 'blockly/core/widgetdiv';
import Xml from 'blockly/core/xml';
import blockAnimations from 'blockly/core/block_animations';
import blockRendering from 'blockly/core/renderers/common/block_rendering';
import browserEvents from 'blockly/core/browser_events';
import bumpObjects from 'blockly/core/bump_objects';
import clipboard from 'blockly/core/clipboard';
import color from 'blockly/core/utils/colour';
import common from 'blockly/core/common';
import constants from 'blockly/core/constants';
import deprecation from 'blockly/core/utils/deprecation';
import dialog from 'blockly/core/dialog';
import fieldRegistry from 'blockly/core/field_registry';
import geras from 'blockly/core/renderers/geras/geras';
import internalConstants from 'blockly/core/internal_constants';
import minimalist from 'blockly/core/renderers/minimalist/minimalist';
import registry from 'blockly/core/registry';
import serializationBlocks from 'blockly/core/serialization/blocks';
import serializationExceptions from 'blockly/core/serialization/exceptions';
import serializationPriorities from 'blockly/core/serialization/priorities';
import serializationRegistry from 'blockly/core/serialization/registry';
import serializationVariables from 'blockly/core/serialization/variables';
import serializationWorkspaces from 'blockly/core/serialization/workspaces';
import svgMath from 'blockly/core/utils/svg_math';
import thrasos from 'blockly/core/renderers/thrasos/thrasos.';
import toolbox from 'blockly/core/utils/toolbox';
import uiPosition from 'blockly/core/positionable_helpers';
import utils from 'blockly/core/utils';
import zelos from 'blockly/core/renderers/zelos/zelos';
import {Align, Input} from 'blockly/core/input';
import {ASTNode} from 'blockly/core/keyboard_nav/ast_node';
import {BasicCursor} from 'blockly/core/keyboard_nav/basic_cursor';
import {BlockDragSurfaceSvg} from 'blockly/core/block_drag_surface';
import {BlockDragger} from 'blockly/core/block_dragger';
import {BlockSvg} from 'blockly/core/block_svg';
import {BlocklyOptions} from 'blockly/core/blockly_options';
import {Blocks} from 'blockly/core/blocks';
import {Block} from 'blockly/core/block';
import {BubbleDragger} from 'blockly/core/bubble_dragger';
import {Bubble} from 'blockly/core/bubble';
import {CollapsibleToolboxCategory} from 'blockly/core/toolbox/collapsible_category';
import {Comment} from 'blockly/core/comment';
import {ComponentManager} from 'blockly/core/component_manager';
import {ConnectionChecker} from 'blockly/core/connection_checker';
import {ConnectionDB} from 'blockly/core/connection_db';
import {ConnectionType} from 'blockly/core/connection_type';
import {Connection} from 'blockly/core/connection';
import {ContextMenuRegistry} from 'blockly/core/contextmenu_registry';
import {Cursor} from 'blockly/core/keyboard_nav/cursor';
import {DeleteArea} from 'blockly/core/delete_area';
import {DragTarget} from 'blockly/core/drag_target';
import {DropDownDiv} from 'blockly/core/dropdowndiv';
import {FieldAngle} from 'blockly/core/field_angle';
import {FieldCheckbox} from 'blockly/core/field_checkbox';
import {FieldColor} from 'blockly/core/field_colour';
import {FieldDropdown} from 'blockly/core/field_dropdown';
import {FieldImage} from 'blockly/core/field_image';
import {FieldLabelSerializable} from 'blockly/core/field_label_serializable';
import {FieldLabel} from 'blockly/core/field_label';
import {FieldMultilineInput} from 'blockly/core/field_multilineinput';
import {FieldNumber} from 'blockly/core/field_number';
import {FieldTextInput} from 'blockly/core/field_textinput';
import {FieldVariable} from 'blockly/core/field_variable';
import {Field} from 'blockly/core/field';
import {FlyoutButton} from 'blockly/core/flyout_button';
import {FlyoutMetricsManager} from 'blockly/core/flyout_metrics_manager';
import {Flyout} from 'blockly/core/flyout_base';
import {Generator} from 'blockly/core/generator';
import {Gesture} from 'blockly/core/gesture';
import {Grid} from 'blockly/core/grid';
import {HorizontalFlyout} from 'blockly/core/flyout_horizontal';
import {IASTNodeLocationSvg} from 'blockly/core/interfaces/i_ast_node_location_svg';
import {IASTNodeLocationWithBlock} from 'blockly/core/interfaces/i_ast_node_location_with_block';
import {IASTNodeLocation} from 'blockly/core/interfaces/i_ast_node_location';
import {IAutoHideable} from 'blockly/core/interfaces/i_autohideable';
import {IBlockDragger} from 'blockly/core/interfaces/i_block_dragger';
import {IBoundedElement} from 'blockly/core/interfaces/i_bounded_element';
import {IBubble} from 'blockly/core/interfaces/i_bubble';
import {ICollapsibleToolboxItem} from 'blockly/core/interfaces/i_collapsible_toolbox_item';
import {IComponent} from 'blockly/core/interfaces/i_component';
import {IConnectionChecker} from 'blockly/core/interfaces/i_connection_checker';
import {IContextMenu} from 'blockly/core/interfaces/i_contextmenu';
import {ICopyable} from 'blockly/core/interfaces/i_copyable';
import {IDeletable} from 'blockly/core/interfaces/i_deletable';
import {IDeleteArea} from 'blockly/core/interfaces/i_delete_area';
import {IDragTarget} from 'blockly/core/interfaces/i_drag_target';
import {IDraggable} from 'blockly/core/interfaces/i_draggable';
import {IFlyout} from 'blockly/core/interfaces/i_flyout';
import {IKeyboardAccessible} from 'blockly/core/interfaces/i_keyboard_accessible';
import {IMetricsManager} from 'blockly/core/interfaces/i_metrics_manager';
import {IMovable} from 'blockly/core/interfaces/i_movable';
import {IPositionable} from 'blockly/core/interfaces/i_positionable';
import {IRegistrableField} from 'blockly/core/interfaces/i_registrable_field';
import {IRegistrable} from 'blockly/core/interfaces/i_registrable';
import {ISelectableToolboxItem} from 'blockly/core/interfaces/i_selectable_toolbox_item';
import {ISelectable} from 'blockly/core/interfaces/i_selectable';
import {ISerializer} from 'blockly/core/interfaces/i_serializer';
import {IStyleable} from 'blockly/core/interfaces/i_styleable';
import {IToolboxItem} from 'blockly/core/interfaces/i_toolbox_item';
import {IToolbox} from 'blockly/core/interfaces/i_toolbox';
import {Icon} from 'blockly/core/icon';
import {InsertionMarkerManager} from 'blockly/core/insertion_marker_manager';
import {Marker} from 'blockly/core/keyboard_nav/marker';
import {MarkerManager} from 'blockly/core/marker_manager';
import {MenuItem} from 'blockly/core/menuitem';
import {Menu} from 'blockly/core/menu';
import {MetricsManager} from 'blockly/core/metrics_manager';
import {Mutator} from 'blockly/core/mutator';
import {Msg} from 'blockly/core/msg';
import {Names} from 'blockly/core/names';
import {Options} from 'blockly/core/options';
import {RenderedConnection} from 'blockly/core/rendered_connection';
import {ScrollbarPair} from 'blockly/core/scrollbar_pair';
import {Scrollbar} from 'blockly/core/scrollbar';
import {ShortcutRegistry} from 'blockly/core/shortcut_registry';
import {TabNavigateCursor} from 'blockly/core/keyboard_nav/tab_navigate_cursor';
import {ThemeManager} from 'blockly/core/theme_manager';
import {Theme} from 'blockly/core/theme';
import {ToolboxCategory} from 'blockly/core/toolbox/category';
import {ToolboxItem} from 'blockly/core/toolbox/toolbox_item';
import {ToolboxSeparator} from 'blockly/core/toolbox/separator';
import {Toolbox} from 'blockly/core/toolbox/toolbox';
import {TouchGesture} from 'blockly/core/touch_gesture';
import {Trashcan} from 'blockly/core/trashcan';
import {VariableMap} from 'blockly/core/variable_map';
import {VariableModel} from 'blockly/core/variable_model';
import {VerticalFlyout} from 'blockly/core/flyout_vertical';
import {Warning} from 'blockly/core/warning';
import {WorkspaceAudio} from 'blockly/core/workspace_audio';
import {WorkspaceCommentSvg} from 'blockly/core/workspace_comment_svg';
import {WorkspaceComment} from 'blockly/core/workspace_comment';
import {WorkspaceDragSurfaceSvg} from 'blockly/core/workspace_drag_surface_svg';
import {WorkspaceDragger} from 'blockly/core/workspace_dragger';
import {WorkspaceSvg, resizeSvgContents} from 'blockly/core/workspace_svg';
import {Workspace} from 'blockly/core/workspace';
import {ZoomControls} from 'blockly/core/zoom_controls';
import {globalThis} from 'blockly/core/utils/global';
import {inject} from 'blockly/core/inject';
import {inputTypes} from 'blockly/core/input_types';
goog.require('blockly/core/events/events_block_create');
goog.require('blockly/core/events/workspace_events');
goog.require('blockly/core/events/events_ui');
goog.require('blockly/core/events/events_ui_base');
goog.require('blockly/core/events/events_var_create');


/**
 * Blockly core version.
 * This constant is overridden by the build script (npm run build) to the value
 * of the version in package.json. This is done by the Closure Compiler in the
 * buildCompressed gulp task.
 * For local builds, you can pass --define='Blockly.VERSION=X.Y.Z' to the
 * compiler to override this constant.
 * @define {string}
 * @alias Blockly.VERSION
 */
exports.VERSION = 'uncompiled';

/*
 * Top-level functions and properties on the Blockly namespace.
 * These are used only in external code. Do not reference these
 * from internal code as importing from this file can cause circular
 * dependencies. Do not add new functions here. There is probably a better
 * namespace to put new functions on.
 */

/*
 * Aliases for input alignments used in block defintions.
 */

/**
 * @see Blockly.Input.Align.LEFT
 * @alias Blockly.ALIGN_LEFT
 */
exports.ALIGN_LEFT = Align.LEFT;

/**
 * @see Blockly.Input.Align.CENTRE
 * @alias Blockly.ALIGN_CENTRE
 */
exports.ALIGN_CENTRE = Align.CENTRE;

/**
 * @see Blockly.Input.Align.RIGHT
 * @alias Blockly.ALIGN_RIGHT
 */
exports.ALIGN_RIGHT = Align.RIGHT;

/*
 * Aliases for constants used for connection and input types.
 */

/**
 * @see ConnectionType.INPUT_VALUE
 * @alias Blockly.INPUT_VALUE
 */
exports.INPUT_VALUE = ConnectionType.INPUT_VALUE;

/**
 * @see ConnectionType.OUTPUT_VALUE
 * @alias Blockly.OUTPUT_VALUE
 */
exports.OUTPUT_VALUE = ConnectionType.OUTPUT_VALUE;

/**
 * @see ConnectionType.NEXT_STATEMENT
 * @alias Blockly.NEXT_STATEMENT
 */
exports.NEXT_STATEMENT = ConnectionType.NEXT_STATEMENT;

/**
 * @see ConnectionType.PREVIOUS_STATEMENT
 * @alias Blockly.PREVIOUS_STATEMENT
 */
exports.PREVIOUS_STATEMENT = ConnectionType.PREVIOUS_STATEMENT;

/**
 * @see inputTypes.DUMMY_INPUT
 * @alias Blockly.DUMMY_INPUT
 */
exports.DUMMY_INPUT = inputTypes.DUMMY;

/**
 * Aliases for toolbox positions.
 */

/**
 * @see toolbox.Position.TOP
 * @alias Blockly.TOOLBOX_AT_TOP
 */
exports.TOOLBOX_AT_TOP = toolbox.Position.TOP;

/**
 * @see toolbox.Position.BOTTOM
 * @alias Blockly.TOOLBOX_AT_BOTTOM
 */
exports.TOOLBOX_AT_BOTTOM = toolbox.Position.BOTTOM;

/**
 * @see toolbox.Position.LEFT
 * @alias Blockly.TOOLBOX_AT_LEFT
 */
exports.TOOLBOX_AT_LEFT = toolbox.Position.LEFT;

/**
 * @see toolbox.Position.RIGHT
 * @alias Blockly.TOOLBOX_AT_RIGHT
 */
exports.TOOLBOX_AT_RIGHT = toolbox.Position.RIGHT;

/*
 * Other aliased functions.
 */

/**
 * Size the SVG image to completely fill its container. Call this when the view
 * actually changes sizes (e.g. on a window resize/device orientation change).
 * See workspace.resizeContents to resize the workspace when the contents
 * change (e.g. when a block is added or removed).
 * Record the height/width of the SVG image.
 * @param {!WorkspaceSvg} workspace Any workspace in the SVG.
 * @see blockly/core/common.svgResize
 * @alias Blockly.svgResize
 */
exports.svgResize = common.svgResize;

/**
 * Close tooltips, context menus, dropdown selections, etc.
 * @param {boolean=} opt_onlyClosePopups Whether only popups should be closed.
 * @see Blockly.WorkspaceSvg.hideChaff
 * @alias Blockly.hideChaff
 */
export function hideChaff(opt_onlyClosePopups) {
  common.getMainWorkspace().hideChaff(opt_onlyClosePopups);
}

/**
 * Returns the main workspace.  Returns the last used main workspace (based on
 * focus).  Try not to use this function, particularly if there are multiple
 * Blockly instances on a page.
 * @return {!Workspace} The main workspace.
 * @see blockly/core/common.getMainWorkspace
 * @alias Blockly.getMainWorkspace
 */
exports.getMainWorkspace = common.getMainWorkspace;

/**
 * Define blocks from an array of JSON block definitions, as might be generated
 * by the Blockly Developer Tools.
 * @param {!Array<!Object>} jsonArray An array of JSON block definitions.
 * @see blockly/core/common.defineBlocksWithJsonArray
 * @alias Blockly.defineBlocksWithJsonArray
 */
exports.defineBlocksWithJsonArray = common.defineBlocksWithJsonArray;

/**
 * Set the parent container.  This is the container element that the WidgetDiv,
 * DropDownDiv, and Tooltip are rendered into the first time `Blockly.inject`
 * is called.
 * This method is a NOP if called after the first ``Blockly.inject``.
 * @param {!Element} container The container element.
 * @see blockly/core/common.setParentContainer
 * @alias Blockly.setParentContainer
 */
exports.setParentContainer = common.setParentContainer;

/*
 * Aliased functions and properties that used to be on the Blockly namespace.
 * Everything in this section is deprecated. Both external and internal code
 * should avoid using these functions and use the designated replacements.
 * Anything in this section may be removed in a future version of Blockly.
 */

// Add accessors for properties on Blockly that have now been deprecated.
Object.defineProperties(exports, {
  /**
   * Wrapper to window.alert() that app developers may override to
   * provide alternatives to the modal browser window.
   * @name Blockly.alert
   * @type {!function(string, function()=)}
   * @deprecated Use Blockly.dialog.alert / .setAlert() instead.
   *     (December 2021)
   * @suppress {checkTypes}
   */
  alert: {
    set: function(newAlert) {
      deprecation.warn('Blockly.alert', 'December 2021', 'December 2022');
      dialog.setAlert(newAlert);
    },
    get: function() {
      deprecation.warn(
          'Blockly.alert', 'December 2021', 'December 2022',
          'Blockly.dialog.alert()');
      return dialog.alert;
    },
  },
  /**
   * Wrapper to window.confirm() that app developers may override to
   * provide alternatives to the modal browser window.
   * @name Blockly.confirm
   * @type {!function(string, function()=)}
   * @deprecated Use Blockly.dialog.confirm / .setConfirm() instead.
   *     (December 2021)
   * @suppress {checkTypes}
   */
  confirm: {
    set: function(newConfirm) {
      deprecation.warn('Blockly.confirm', 'December 2021', 'December 2022');
      dialog.setConfirm(newConfirm);
    },
    get: function() {
      deprecation.warn(
          'Blockly.confirm', 'December 2021', 'December 2022',
          'Blockly.dialog.confirm()');
      return dialog.confirm;
    },
  },
  /**
   * The main workspace most recently used.
   * Set by Blockly.WorkspaceSvg.prototype.markFocused
   * @name Blockly.mainWorkspace
   * @type {Workspace}
   * @suppress {checkTypes}
   */
  mainWorkspace: {
    set: function(x) {
      common.setMainWorkspace(x);
    },
    get: function() {
      return common.getMainWorkspace();
    },
  },
  /**
   * Wrapper to window.prompt() that app developers may override to
   * provide alternatives to the modal browser window. Built-in
   * browser prompts are often used for better text input experience
   * on mobile device. We strongly recommend testing mobile when
   * overriding this.
   * @name Blockly.prompt
   * @type {!function(string, string, function()=)}
   * @deprecated Use Blockly.dialog.prompt / .setPrompt() instead.
   *     (December 2021)
   * @suppress {checkTypes}
   */
  prompt: {
    set: function(newPrompt) {
      deprecation.warn('Blockly.prompt', 'December 2021', 'December 2022');
      dialog.setPrompt(newPrompt);
    },
    get: function() {
      deprecation.warn(
          'Blockly.prompt', 'December 2021', 'December 2022',
          'Blockly.dialog.prompt()');
      return dialog.prompt;
    },
  },
  /**
   * Currently selected block.
   * @name Blockly.selected
   * @type {?ICopyable}
   * @suppress {checkTypes}
   */
  selected: {
    get: function() {
      return common.getSelected();
    },
    set: function(newSelection) {
      common.setSelected(newSelection);
    },
  },
  /**
   * The richness of block colors, regardless of the hue.
   * Must be in the range of 0 (inclusive) to 1 (exclusive).
   * @name Blockly.HSV_SATURATION
   * @type {number}
   * @suppress {checkTypes}
   */
  HSV_SATURATION: {
    get: function() {
      return utils.color.getHsvSaturation();
    },
    set: function(newValue) {
      utils.color.setHsvSaturation(newValue);
    },
  },
  /**
   * The intensity of block colors, regardless of the hue.
   * Must be in the range of 0 (inclusive) to 1 (exclusive).
   * @name Blockly.HSV_VALUE
   * @type {number}
   * @suppress {checkTypes}
   */
  HSV_VALUE: {
    get: function() {
      return utils.color.getHsvValue();
    },
    set: function(newValue) {
      utils.color.setHsvValue(newValue);
    },
  },
});

/**
 * Returns the dimensions of the specified SVG image.
 * @param {!SVGElement} svg SVG image.
 * @return {!Size} Contains width and height properties.
 * @deprecated Use workspace.setCachedParentSvgSize. (2021 March 5)
 * @see Blockly.WorkspaceSvg.setCachedParentSvgSize
 * @alias Blockly.svgSize
 */
exports.svgSize = svgMath.svgSize;

/**
 * Size the workspace when the contents change.  This also updates
 * scrollbars accordingly.
 * @param {!WorkspaceSvg} workspace The workspace to resize.
 * @deprecated Use workspace.resizeContents. (2021 December)
 * @see Blockly.WorkspaceSvg.resizeContents
 * @alias Blockly.resizeSvgContents
 */
export function resizeSvgContentsLocal(workspace) {
  deprecation.warn(
      'Blockly.resizeSvgContents', 'December 2021', 'December 2022',
      'Blockly.WorkspaceSvg.resizeSvgContents');
  resizeSvgContents(workspace);
}

/**
 * Copy a block or workspace comment onto the local clipboard.
 * @param {!ICopyable} toCopy Block or Workspace Comment to be copied.
 * @deprecated Use Blockly.clipboard.copy(). (2021 December)
 * @see Blockly.clipboard.copy
 * @alias Blockly.copy
 */
export function copy(toCopy) {
  deprecation.warn(
      'Blockly.copy', 'December 2021', 'December 2022',
      'Blockly.clipboard.copy');
  clipboard.copy(toCopy);
}

/**
 * Paste a block or workspace comment on to the main workspace.
 * @return {boolean} True if the paste was successful, false otherwise.
 * @deprecated Use Blockly.clipboard.paste(). (2021 December)
 * @see Blockly.clipboard.paste
 * @alias Blockly.paste
 */
export function paste() {
  deprecation.warn(
      'Blockly.paste', 'December 2021', 'December 2022',
      'Blockly.clipboard.paste');
  return clipboard.paste();
}

/**
 * Duplicate this block and its children, or a workspace comment.
 * @param {!ICopyable} toDuplicate Block or Workspace Comment to be
 *     copied.
 * @deprecated Use Blockly.clipboard.duplicate(). (2021 December)
 * @see Blockly.clipboard.duplicate
 * @alias Blockly.duplicate
 */
export function duplicate(toDuplicate) {
  deprecation.warn(
      'Blockly.duplicate', 'December 2021', 'December 2022',
      'Blockly.clipboard.duplicate');
  clipboard.duplicate(toDuplicate);
}

/**
 * Is the given string a number (includes negative and decimals).
 * @param {string} str Input string.
 * @return {boolean} True if number, false otherwise.
 * @deprecated Use Blockly.utils.string.isNumber(str). (2021 December)
 * @see Blockly.utils.string.isNumber
 * @alias Blockly.isNumber
 */
export function isNumber(str) {
  deprecation.warn(
      'Blockly.isNumber', 'December 2021', 'December 2022',
      'Blockly.utils.string.isNumber');
  return utils.string.isNumber(str);
}

/**
 * Convert a hue (HSV model) into an RGB hex triplet.
 * @param {number} hue Hue on a color wheel (0-360).
 * @return {string} RGB code, e.g. '#5ba65b'.
 * @deprecated Use Blockly.utils.color.hueToHex(). (2021 December)
 * @see Blockly.utils.color.hueToHex
 * @alias Blockly.hueToHex
 */
export function hueToHex(hue) {
  deprecation.warn(
      'Blockly.hueToHex', 'December 2021', 'December 2022',
      'Blockly.utils.color.hueToHex');
  return color.hueToHex(hue);
}

/**
 * Bind an event handler that should be called regardless of whether it is part
 * of the active touch stream.
 * Use this for events that are not part of a multi-part gesture (e.g.
 * mouseover for tooltips).
 * @param {!EventTarget} node Node upon which to listen.
 * @param {string} name Event name to listen to (e.g. 'mousedown').
 * @param {?Object} thisObject The value of 'this' in the function.
 * @param {!Function} func Function to call when event is triggered.
 * @return {!browserEvents.Data} Opaque data that can be passed to
 *     unbindEvent_.
 * @deprecated Use Blockly.browserEvents.bind(). (December 2021)
 * @see Blockly.browserEvents.bind
 * @alias Blockly.bindEvent_
 */
export function bindEvent_(node, name, thisObject, func) {
  deprecation.warn(
      'Blockly.bindEvent_', 'December 2021', 'December 2022',
      'Blockly.browserEvents.bind');
  return browserEvents.bind(node, name, thisObject, func);
}

/**
 * Unbind one or more events event from a function call.
 * @param {!browserEvents.Data} bindData Opaque data from bindEvent_.
 *     This list is emptied during the course of calling this function.
 * @return {!Function} The function call.
 * @deprecated Use Blockly.browserEvents.unbind(). (December 2021)
 * @see browserEvents.unbind
 * @alias Blockly.unbindEvent_
 */
export function unbindEvent_(bindData) {
  deprecation.warn(
      'Blockly.unbindEvent_', 'December 2021', 'December 2022',
      'Blockly.browserEvents.unbind');
  return browserEvents.unbind(bindData);
}

/**
 * Bind an event handler that can be ignored if it is not part of the active
 * touch stream.
 * Use this for events that either start or continue a multi-part gesture (e.g.
 * mousedown or mousemove, which may be part of a drag or click).
 * @param {!EventTarget} node Node upon which to listen.
 * @param {string} name Event name to listen to (e.g. 'mousedown').
 * @param {?Object} thisObject The value of 'this' in the function.
 * @param {!Function} func Function to call when event is triggered.
 * @param {boolean=} opt_noCaptureIdentifier True if triggering on this event
 *     should not block execution of other event handlers on this touch or
 *     other simultaneous touches.  False by default.
 * @param {boolean=} opt_noPreventDefault True if triggering on this event
 *     should prevent the default handler.  False by default.  If
 *     opt_noPreventDefault is provided, opt_noCaptureIdentifier must also be
 *     provided.
 * @return {!browserEvents.Data} Opaque data that can be passed to
 *     unbindEvent_.
 * @deprecated Use Blockly.browserEvents.conditionalBind(). (December 2021)
 * @see browserEvents.conditionalBind
 * @alias Blockly.bindEventWithChecks_
 */
const bindEventWithChecks_ = function(
    node, name, thisObject, func, opt_noCaptureIdentifier,
    opt_noPreventDefault) {
  deprecation.warn(
      'Blockly.bindEventWithChecks_', 'December 2021', 'December 2022',
      'Blockly.browserEvents.conditionalBind');
  return browserEvents.conditionalBind(
      node, name, thisObject, func, opt_noCaptureIdentifier,
      opt_noPreventDefault);
};
exports.bindEventWithChecks_ = bindEventWithChecks_;

// Aliases to allow external code to access these values for legacy reasons.
exports.LINE_MODE_MULTIPLIER = internalConstants.LINE_MODE_MULTIPLIER;
exports.PAGE_MODE_MULTIPLIER = internalConstants.PAGE_MODE_MULTIPLIER;
exports.DRAG_RADIUS = internalConstants.DRAG_RADIUS;
exports.FLYOUT_DRAG_RADIUS = internalConstants.FLYOUT_DRAG_RADIUS;
exports.SNAP_RADIUS = internalConstants.SNAP_RADIUS;
exports.CONNECTING_SNAP_RADIUS = internalConstants.CONNECTING_SNAP_RADIUS;
exports.CURRENT_CONNECTION_PREFERENCE =
    internalConstants.CURRENT_CONNECTION_PREFERENCE;
exports.BUMP_DELAY = internalConstants.BUMP_DELAY;
exports.BUMP_RANDOMNESS = internalConstants.BUMP_RANDOMNESS;
exports.COLLAPSE_CHARS = internalConstants.COLLAPSE_CHARS;
exports.LONGPRESS = internalConstants.LONGPRESS;
exports.SOUND_LIMIT = internalConstants.SOUND_LIMIT;
exports.DRAG_STACK = internalConstants.DRAG_STACK;
exports.SPRITE = internalConstants.SPRITE;
exports.DRAG_NONE = internalConstants.DRAG_NONE;
exports.DRAG_STICKY = internalConstants.DRAG_STICKY;
exports.DRAG_BEGIN = internalConstants.DRAG_BEGIN;
exports.DRAG_FREE = internalConstants.DRAG_FREE;
exports.OPPOSITE_TYPE = internalConstants.OPPOSITE_TYPE;
exports.RENAME_VARIABLE_ID = internalConstants.RENAME_VARIABLE_ID;
exports.DELETE_VARIABLE_ID = internalConstants.DELETE_VARIABLE_ID;
exports.COLLAPSED_INPUT_NAME = constants.COLLAPSED_INPUT_NAME;
exports.COLLAPSED_FIELD_NAME = constants.COLLAPSED_FIELD_NAME;

/**
 * String for use in the "custom" attribute of a category in toolbox XML.
 * This string indicates that the category should be dynamically populated with
 * variable blocks.
 * @const {string}
 * @alias Blockly.VARIABLE_CATEGORY_NAME
 */
exports.VARIABLE_CATEGORY_NAME = Variables.CATEGORY_NAME;

/**
 * String for use in the "custom" attribute of a category in toolbox XML.
 * This string indicates that the category should be dynamically populated with
 * variable blocks.
 * @const {string}
 * @alias Blockly.VARIABLE_DYNAMIC_CATEGORY_NAME
 */
exports.VARIABLE_DYNAMIC_CATEGORY_NAME = VariablesDynamic.CATEGORY_NAME;
/**
 * String for use in the "custom" attribute of a category in toolbox XML.
 * This string indicates that the category should be dynamically populated with
 * procedure blocks.
 * @const {string}
 * @alias Blockly.PROCEDURE_CATEGORY_NAME
 */
exports.PROCEDURE_CATEGORY_NAME = Procedures.CATEGORY_NAME;

// Re-export submodules that no longer declareLegacyNamespace.
exports.ASTNode = ASTNode;
exports.BasicCursor = BasicCursor;
exports.Block = Block;
exports.BlocklyOptions = BlocklyOptions;
exports.BlockDragger = BlockDragger;
exports.BlockDragSurfaceSvg = BlockDragSurfaceSvg;
exports.BlockSvg = BlockSvg;
exports.Blocks = Blocks;
exports.Bubble = Bubble;
exports.BubbleDragger = BubbleDragger;
exports.CollapsibleToolboxCategory = CollapsibleToolboxCategory;
exports.Comment = Comment;
exports.ComponentManager = ComponentManager;
exports.Connection = Connection;
exports.ConnectionType = ConnectionType;
exports.ConnectionChecker = ConnectionChecker;
exports.ConnectionDB = ConnectionDB;
exports.ContextMenu = ContextMenu;
exports.ContextMenuItems = ContextMenuItems;
exports.ContextMenuRegistry = ContextMenuRegistry;
exports.Css = Css;
exports.Cursor = Cursor;
exports.DeleteArea = DeleteArea;
exports.DragTarget = DragTarget;
exports.DropDownDiv = DropDownDiv;
exports.Events = Events;
exports.Extensions = Extensions;
exports.Field = Field;
exports.FieldAngle = FieldAngle;
exports.FieldCheckbox = FieldCheckbox;
exports.FieldColor = FieldColor;
exports.FieldDropdown = FieldDropdown;
exports.FieldImage = FieldImage;
exports.FieldLabel = FieldLabel;
exports.FieldLabelSerializable = FieldLabelSerializable;
exports.FieldMultilineInput = FieldMultilineInput;
exports.FieldNumber = FieldNumber;
exports.FieldTextInput = FieldTextInput;
exports.FieldVariable = FieldVariable;
exports.Flyout = Flyout;
exports.FlyoutButton = FlyoutButton;
exports.FlyoutMetricsManager = FlyoutMetricsManager;
exports.Generator = Generator;
exports.Gesture = Gesture;
exports.Grid = Grid;
exports.HorizontalFlyout = HorizontalFlyout;
exports.IASTNodeLocation = IASTNodeLocation;
exports.IASTNodeLocationSvg = IASTNodeLocationSvg;
exports.IASTNodeLocationWithBlock = IASTNodeLocationWithBlock;
exports.IAutoHideable = IAutoHideable;
exports.IBlockDragger = IBlockDragger;
exports.IBoundedElement = IBoundedElement;
exports.IBubble = IBubble;
exports.ICollapsibleToolboxItem = ICollapsibleToolboxItem;
exports.IComponent = IComponent;
exports.IConnectionChecker = IConnectionChecker;
exports.IContextMenu = IContextMenu;
exports.Icon = Icon;
exports.ICopyable = ICopyable;
exports.IDeletable = IDeletable;
exports.IDeleteArea = IDeleteArea;
exports.IDragTarget = IDragTarget;
exports.IDraggable = IDraggable;
exports.IFlyout = IFlyout;
exports.IKeyboardAccessible = IKeyboardAccessible;
exports.IMetricsManager = IMetricsManager;
exports.IMovable = IMovable;
exports.Input = Input;
exports.InsertionMarkerManager = InsertionMarkerManager;
exports.IPositionable = IPositionable;
exports.IRegistrable = IRegistrable;
exports.IRegistrableField = IRegistrableField;
exports.ISelectable = ISelectable;
exports.ISelectableToolboxItem = ISelectableToolboxItem;
exports.IStyleable = IStyleable;
exports.IToolbox = IToolbox;
exports.IToolboxItem = IToolboxItem;
exports.Marker = Marker;
exports.MarkerManager = MarkerManager;
exports.Menu = Menu;
exports.MenuItem = MenuItem;
exports.MetricsManager = MetricsManager;
exports.Mutator = Mutator;
exports.Msg = Msg;
exports.Names = Names;
exports.Options = Options;
exports.Procedures = Procedures;
exports.RenderedConnection = RenderedConnection;
exports.Scrollbar = Scrollbar;
exports.ScrollbarPair = ScrollbarPair;
exports.ShortcutItems = ShortcutItems;
exports.ShortcutRegistry = ShortcutRegistry;
exports.TabNavigateCursor = TabNavigateCursor;
exports.Theme = Theme;
exports.Themes = Themes;
exports.ThemeManager = ThemeManager;
exports.Toolbox = Toolbox;
exports.ToolboxCategory = ToolboxCategory;
exports.ToolboxItem = ToolboxItem;
exports.ToolboxSeparator = ToolboxSeparator;
exports.Tooltip = Tooltip;
exports.Touch = Touch;
exports.TouchGesture = TouchGesture;
exports.Trashcan = Trashcan;
exports.VariableMap = VariableMap;
exports.VariableModel = VariableModel;
exports.Variables = Variables;
exports.VariablesDynamic = VariablesDynamic;
exports.VerticalFlyout = VerticalFlyout;
exports.Warning = Warning;
exports.WidgetDiv = WidgetDiv;
exports.Workspace = Workspace;
exports.WorkspaceAudio = WorkspaceAudio;
exports.WorkspaceComment = WorkspaceComment;
exports.WorkspaceCommentSvg = WorkspaceCommentSvg;
exports.WorkspaceDragSurfaceSvg = WorkspaceDragSurfaceSvg;
exports.WorkspaceDragger = WorkspaceDragger;
exports.WorkspaceSvg = WorkspaceSvg;
exports.Xml = Xml;
exports.ZoomControls = ZoomControls;
exports.blockAnimations = blockAnimations;
exports.blockRendering = blockRendering;
exports.browserEvents = browserEvents;
exports.bumpObjects = bumpObjects;
exports.clipboard = clipboard;
exports.common = common;
/** @deprecated Use Blockly.ConnectionType instead. */
exports.connectionTypes = ConnectionType;
exports.constants = constants;
exports.dialog = dialog;
exports.fieldRegistry = fieldRegistry;
exports.geras = geras;
exports.inject = inject;
exports.inputTypes = inputTypes;
exports.minimalist = minimalist;
exports.registry = registry;
exports.serialization = {
  blocks: serializationBlocks,
  exceptions: serializationExceptions,
  priorities: serializationPriorities,
  registry: serializationRegistry,
  variables: serializationVariables,
  workspaces: serializationWorkspaces,
  ISerializer: ISerializer,
};
exports.thrasos = thrasos;
exports.uiPosition = uiPosition;
exports.utils = utils;
exports.zelos = zelos;

// If Blockly is compiled with ADVANCED_COMPILATION and/or loaded as a
// CJS or ES module there will not be a Blockly global variable
// created.  This can cause problems because a very common way of
// loading translations is to use a <script> tag to load one of
// msg/js/*.js, which consists of lines like:
//
// Blockly.Msg["ADD_COMMENT"] = "Add Comment";
// Blockly.Msg["CLEAN_UP"] = "Clean up Blocks";
//
// This obviously only works if Blockly.Msg is the Msg export from the
// Blockly.Msg module - so make sure it is, but only if there is not
// yet a Blockly global variable.
if (!('blockly/core/blockly' in globalThis)) {
  globalThis['blockly/core/blockly'] = {'Msg': Msg};
}

// Temporary hack to copy accessor properties from exports to the
// global Blockly object as the routine to copy exports in
// goog.exportPath_ (see closure/goog/base.js) invoked by
// declareLegacyNamespace only copies normal data properties, not
// accessors.  This can be removed once all remaining calls to
// declareLegacyNamspace have been removed.
//
// This is only needed in uncompiled mode (see
// google/blockly-samples#902); in compiled mode the exports object is
// already the value of globalThis['blockly/core/blockly'].
//
// Note that this code will still attempt to redefine accessors on a
// previously-imported copy of the Blockly library if both are
// imported in uncompiled mode.  This will fail with TypeError as the
// accessors are nonconfigurable (which is good, as otherwise one
// accessors on one copy would call get/set functions on the other
// copy!)
/* eslint-disable-next-line no-undef */
if (!COMPILED && typeof globalThis['blockly/core/blockly'] === 'object' &&
    globalThis['blockly/core/blockly'] !== exports) {
  const descriptors = Object.getOwnPropertyDescriptors(exports);
  const accessors = {};
  for (const key in descriptors) {
    if (descriptors[key].get || descriptors[key].set) {
      accessors[key] = descriptors[key];
    }
  }
  Object.defineProperties(globalThis['blockly/core/blockly'], accessors);
}
