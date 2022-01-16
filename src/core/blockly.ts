/**
 * @license
 * Copyright 2011 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * The top level namespace used to access the Blockly library.
 * @namespace Blockly
 */
goog.module('Blockly');
goog.module.declareLegacyNamespace();

import ContextMenu from 'Blockly.ContextMenu';
import ContextMenuItems from 'Blockly.ContextMenuItems';
import Css from 'Blockly.Css';
import Events from 'Blockly.Events';
import Extensions from 'Blockly.Extensions';
import Procedures from 'Blockly.Procedures';
import ShortcutItems from 'Blockly.ShortcutItems';
import Themes from 'Blockly.Themes';
import Tooltip from 'Blockly.Tooltip';
import Touch from 'Blockly.Touch';
import Variables from 'Blockly.Variables';
import VariablesDynamic from 'Blockly.VariablesDynamic';
import WidgetDiv from 'Blockly.WidgetDiv';
import Xml from 'Blockly.Xml';
import blockAnimations from 'Blockly.blockAnimations';
import blockRendering from 'Blockly.blockRendering';
import browserEvents from 'Blockly.browserEvents';
import bumpObjects from 'Blockly.bumpObjects';
import clipboard from 'Blockly.clipboard';
import color from 'Blockly.utils.color';
import common from 'blockly/core/common';
import constants from 'Blockly.constants';
import deprecation from 'Blockly.utils.deprecation';
import dialog from 'Blockly.dialog';
import fieldRegistry from 'Blockly.fieldRegistry';
import geras from 'Blockly.geras';
import internalConstants from 'Blockly.internalConstants';
import minimalist from 'Blockly.minimalist';
import registry from 'Blockly.registry';
import serializationBlocks from 'Blockly.serialization.blocks';
import serializationExceptions from 'Blockly.serialization.exceptions';
import serializationPriorities from 'Blockly.serialization.priorities';
import serializationRegistry from 'Blockly.serialization.registry';
import serializationVariables from 'Blockly.serialization.variables';
import serializationWorkspaces from 'Blockly.serialization.workspaces';
import svgMath from 'Blockly.utils.svgMath';
import thrasos from 'Blockly.thrasos';
import toolbox from 'Blockly.utils.toolbox';
import uiPosition from 'Blockly.uiPosition';
import utils from 'Blockly.utils';
import zelos from 'Blockly.zelos';
import {Align, Input} from 'Blockly.Input';
import {ASTNode} from 'Blockly.ASTNode';
import {BasicCursor} from 'Blockly.BasicCursor';
import {BlockDragSurfaceSvg} from 'Blockly.BlockDragSurfaceSvg';
import {BlockDragger} from 'Blockly.BlockDragger';
import {BlockSvg} from 'Blockly.BlockSvg';
import {BlocklyOptions} from 'Blockly.BlocklyOptions';
import {Blocks} from 'blockly/core/blocks';
import {Block} from 'Blockly.Block';
import {BubbleDragger} from 'Blockly.BubbleDragger';
import {Bubble} from 'Blockly.Bubble';
import {CollapsibleToolboxCategory} from 'Blockly.CollapsibleToolboxCategory';
import {Comment} from 'Blockly.Comment';
import {ComponentManager} from 'Blockly.ComponentManager';
import {ConnectionChecker} from 'Blockly.ConnectionChecker';
import {ConnectionDB} from 'Blockly.ConnectionDB';
import {ConnectionType} from 'Blockly.ConnectionType';
import {Connection} from 'Blockly.Connection';
import {ContextMenuRegistry} from 'Blockly.ContextMenuRegistry';
import {Cursor} from 'Blockly.Cursor';
import {DeleteArea} from 'Blockly.DeleteArea';
import {DragTarget} from 'Blockly.DragTarget';
import {DropDownDiv} from 'Blockly.DropDownDiv';
import {FieldAngle} from 'Blockly.FieldAngle';
import {FieldCheckbox} from 'Blockly.FieldCheckbox';
import {FieldColor} from 'Blockly.FieldColor';
import {FieldDropdown} from 'Blockly.FieldDropdown';
import {FieldImage} from 'Blockly.FieldImage';
import {FieldLabelSerializable} from 'Blockly.FieldLabelSerializable';
import {FieldLabel} from 'Blockly.FieldLabel';
import {FieldMultilineInput} from 'Blockly.FieldMultilineInput';
import {FieldNumber} from 'Blockly.FieldNumber';
import {FieldTextInput} from 'Blockly.FieldTextInput';
import {FieldVariable} from 'Blockly.FieldVariable';
import {Field} from 'Blockly.Field';
import {FlyoutButton} from 'Blockly.FlyoutButton';
import {FlyoutMetricsManager} from 'Blockly.FlyoutMetricsManager';
import {Flyout} from 'Blockly.Flyout';
import {Generator} from 'Blockly.Generator';
import {Gesture} from 'Blockly.Gesture';
import {Grid} from 'Blockly.Grid';
import {HorizontalFlyout} from 'Blockly.HorizontalFlyout';
import {IASTNodeLocationSvg} from 'Blockly.IASTNodeLocationSvg';
import {IASTNodeLocationWithBlock} from 'Blockly.IASTNodeLocationWithBlock';
import {IASTNodeLocation} from 'Blockly.IASTNodeLocation';
import {IAutoHideable} from 'Blockly.IAutoHideable';
import {IBlockDragger} from 'Blockly.IBlockDragger';
import {IBoundedElement} from 'Blockly.IBoundedElement';
import {IBubble} from 'Blockly.IBubble';
import {ICollapsibleToolboxItem} from 'Blockly.ICollapsibleToolboxItem';
import {IComponent} from 'Blockly.IComponent';
import {IConnectionChecker} from 'Blockly.IConnectionChecker';
import {IContextMenu} from 'Blockly.IContextMenu';
import {ICopyable} from 'Blockly.ICopyable';
import {IDeletable} from 'Blockly.IDeletable';
import {IDeleteArea} from 'Blockly.IDeleteArea';
import {IDragTarget} from 'Blockly.IDragTarget';
import {IDraggable} from 'Blockly.IDraggable';
import {IFlyout} from 'Blockly.IFlyout';
import {IKeyboardAccessible} from 'Blockly.IKeyboardAccessible';
import {IMetricsManager} from 'Blockly.IMetricsManager';
import {IMovable} from 'Blockly.IMovable';
import {IPositionable} from 'Blockly.IPositionable';
import {IRegistrableField} from 'Blockly.IRegistrableField';
import {IRegistrable} from 'Blockly.IRegistrable';
import {ISelectableToolboxItem} from 'Blockly.ISelectableToolboxItem';
import {ISelectable} from 'Blockly.ISelectable';
import {ISerializer} from 'Blockly.serialization.ISerializer';
import {IStyleable} from 'Blockly.IStyleable';
import {IToolboxItem} from 'Blockly.IToolboxItem';
import {IToolbox} from 'Blockly.IToolbox';
import {Icon} from 'Blockly.Icon';
import {InsertionMarkerManager} from 'Blockly.InsertionMarkerManager';
import {Marker} from 'Blockly.Marker';
import {MarkerManager} from 'Blockly.MarkerManager';
import {MenuItem} from 'Blockly.MenuItem';
import {Menu} from 'Blockly.Menu';
import {MetricsManager} from 'Blockly.MetricsManager';
import {Mutator} from 'Blockly.Mutator';
import {Msg} from 'Blockly.Msg';
import {Names} from 'Blockly.Names';
import {Options} from 'Blockly.Options';
import {RenderedConnection} from 'Blockly.RenderedConnection';
import {ScrollbarPair} from 'Blockly.ScrollbarPair';
import {Scrollbar} from 'Blockly.Scrollbar';
import {ShortcutRegistry} from 'Blockly.ShortcutRegistry';
import {TabNavigateCursor} from 'Blockly.TabNavigateCursor';
import {ThemeManager} from 'Blockly.ThemeManager';
import {Theme} from 'Blockly.Theme';
import {ToolboxCategory} from 'Blockly.ToolboxCategory';
import {ToolboxItem} from 'Blockly.ToolboxItem';
import {ToolboxSeparator} from 'Blockly.ToolboxSeparator';
import {Toolbox} from 'Blockly.Toolbox';
import {TouchGesture} from 'Blockly.TouchGesture';
import {Trashcan} from 'Blockly.Trashcan';
import {VariableMap} from 'Blockly.VariableMap';
import {VariableModel} from 'Blockly.VariableModel';
import {VerticalFlyout} from 'Blockly.VerticalFlyout';
import {Warning} from 'Blockly.Warning';
import {WorkspaceAudio} from 'Blockly.WorkspaceAudio';
import {WorkspaceCommentSvg} from 'Blockly.WorkspaceCommentSvg';
import {WorkspaceComment} from 'Blockly.WorkspaceComment';
import {WorkspaceDragSurfaceSvg} from 'Blockly.WorkspaceDragSurfaceSvg';
import {WorkspaceDragger} from 'Blockly.WorkspaceDragger';
import {WorkspaceSvg, resizeSvgContents} from 'Blockly.WorkspaceSvg';
import {Workspace} from 'Blockly.Workspace';
import {ZoomControls} from 'Blockly.ZoomControls';
import {globalThis} from 'Blockly.utils.global';
import {inject} from 'Blockly.inject';
import {inputTypes} from 'Blockly.inputTypes';
goog.require('Blockly.Events.BlockCreate');
goog.require('Blockly.Events.FinishedLoading');
goog.require('Blockly.Events.Ui');
goog.require('Blockly.Events.UiBase');
goog.require('Blockly.Events.VarCreate');


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
const hideChaff = function(opt_onlyClosePopups) {
  common.getMainWorkspace().hideChaff(opt_onlyClosePopups);
};
exports.hideChaff = hideChaff;

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
const resizeSvgContentsLocal = function(workspace) {
  deprecation.warn(
      'Blockly.resizeSvgContents', 'December 2021', 'December 2022',
      'Blockly.WorkspaceSvg.resizeSvgContents');
  resizeSvgContents(workspace);
};
exports.resizeSvgContents = resizeSvgContentsLocal;

/**
 * Copy a block or workspace comment onto the local clipboard.
 * @param {!ICopyable} toCopy Block or Workspace Comment to be copied.
 * @deprecated Use Blockly.clipboard.copy(). (2021 December)
 * @see Blockly.clipboard.copy
 * @alias Blockly.copy
 */
const copy = function(toCopy) {
  deprecation.warn(
      'Blockly.copy', 'December 2021', 'December 2022',
      'Blockly.clipboard.copy');
  clipboard.copy(toCopy);
};
exports.copy = copy;

/**
 * Paste a block or workspace comment on to the main workspace.
 * @return {boolean} True if the paste was successful, false otherwise.
 * @deprecated Use Blockly.clipboard.paste(). (2021 December)
 * @see Blockly.clipboard.paste
 * @alias Blockly.paste
 */
const paste = function() {
  deprecation.warn(
      'Blockly.paste', 'December 2021', 'December 2022',
      'Blockly.clipboard.paste');
  return clipboard.paste();
};
exports.paste = paste;

/**
 * Duplicate this block and its children, or a workspace comment.
 * @param {!ICopyable} toDuplicate Block or Workspace Comment to be
 *     copied.
 * @deprecated Use Blockly.clipboard.duplicate(). (2021 December)
 * @see Blockly.clipboard.duplicate
 * @alias Blockly.duplicate
 */
const duplicate = function(toDuplicate) {
  deprecation.warn(
      'Blockly.duplicate', 'December 2021', 'December 2022',
      'Blockly.clipboard.duplicate');
  clipboard.duplicate(toDuplicate);
};
exports.duplicate = duplicate;

/**
 * Is the given string a number (includes negative and decimals).
 * @param {string} str Input string.
 * @return {boolean} True if number, false otherwise.
 * @deprecated Use Blockly.utils.string.isNumber(str). (2021 December)
 * @see Blockly.utils.string.isNumber
 * @alias Blockly.isNumber
 */
const isNumber = function(str) {
  deprecation.warn(
      'Blockly.isNumber', 'December 2021', 'December 2022',
      'Blockly.utils.string.isNumber');
  return utils.string.isNumber(str);
};
exports.isNumber = isNumber;

/**
 * Convert a hue (HSV model) into an RGB hex triplet.
 * @param {number} hue Hue on a color wheel (0-360).
 * @return {string} RGB code, e.g. '#5ba65b'.
 * @deprecated Use Blockly.utils.color.hueToHex(). (2021 December)
 * @see Blockly.utils.color.hueToHex
 * @alias Blockly.hueToHex
 */
const hueToHex = function(hue) {
  deprecation.warn(
      'Blockly.hueToHex', 'December 2021', 'December 2022',
      'Blockly.utils.color.hueToHex');
  return color.hueToHex(hue);
};
exports.hueToHex = hueToHex;

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
const bindEvent_ = function(node, name, thisObject, func) {
  deprecation.warn(
      'Blockly.bindEvent_', 'December 2021', 'December 2022',
      'Blockly.browserEvents.bind');
  return browserEvents.bind(node, name, thisObject, func);
};
exports.bindEvent_ = bindEvent_;

/**
 * Unbind one or more events event from a function call.
 * @param {!browserEvents.Data} bindData Opaque data from bindEvent_.
 *     This list is emptied during the course of calling this function.
 * @return {!Function} The function call.
 * @deprecated Use Blockly.browserEvents.unbind(). (December 2021)
 * @see browserEvents.unbind
 * @alias Blockly.unbindEvent_
 */
const unbindEvent_ = function(bindData) {
  deprecation.warn(
      'Blockly.unbindEvent_', 'December 2021', 'December 2022',
      'Blockly.browserEvents.unbind');
  return browserEvents.unbind(bindData);
};
exports.unbindEvent_ = unbindEvent_;

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
if (!('Blockly' in globalThis)) {
  globalThis['Blockly'] = {'Msg': Msg};
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
// already the value of globalThis['Blockly'].
//
// Note that this code will still attempt to redefine accessors on a
// previously-imported copy of the Blockly library if both are
// imported in uncompiled mode.  This will fail with TypeError as the
// accessors are nonconfigurable (which is good, as otherwise one
// accessors on one copy would call get/set functions on the other
// copy!)
/* eslint-disable-next-line no-undef */
if (!COMPILED && typeof globalThis['Blockly'] === 'object' &&
    globalThis['Blockly'] !== exports) {
  const descriptors = Object.getOwnPropertyDescriptors(exports);
  const accessors = {};
  for (const key in descriptors) {
    if (descriptors[key].get || descriptors[key].set) {
      accessors[key] = descriptors[key];
    }
  }
  Object.defineProperties(globalThis['Blockly'], accessors);
}
