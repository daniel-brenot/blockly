/**
 * @license
 * Copyright 2014 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Object representing a workspace rendered as SVG.
 * @class
 */

import ContextMenu from 'blockly/core/contextmenu';
import Procedures from 'blockly/core/procedures';
import Tooltip from 'blockly/core/tooltip';
import Variables from 'blockly/core/variables';
import VariablesDynamic from 'blockly/core/variables_dynamic';
import WidgetDiv from 'blockly/core/widgetdiv';
import Xml from 'blockly/core/xml';
import arrayUtils from 'blockly/core/utils/array';
import blockRendering from 'blockly/core/renderers/common/block_rendering';
import blocks from 'blockly/core/serialization/blocks';
import browserEvents from 'blockly/core/browser_events';
import common from 'blockly/core/common';
import dom from 'blockly/core/utils/dom';
import eventUtils from 'blockly/core/events/utils';
import internalConstants from 'blockly/core/internal_constants';
import object from 'blockly/core/utils/object';
import registry from 'blockly/core/registry';
import svgMath from 'blockly/core/utils/svg_math';
import toolbox from 'blockly/core/utils/toolbox';
import userAgent from 'blockly/core/utils/useragent';
import utils from 'blockly/core/utils';
import {BlockDragSurfaceSvg} from 'blockly/core/block_drag_surface';
import {BlockSvg} from 'blockly/core/block_svg';
import {BlocklyOptions} from 'blockly/core/blockly_options';
import {Block} from 'blockly/core/block';
import {Classic} from 'blockly/core/theme/classic';
import {ComponentManager} from 'blockly/core/component_manager';
import {ConnectionDB} from 'blockly/core/connection_db';
import {ContextMenuRegistry} from 'blockly/core/contextmenu_registry';
import {Coordinate} from 'blockly/core/utils/coordinate';
import {Cursor} from 'blockly/core/keyboard_nav/cursor';
import {DropDownDiv} from 'blockly/core/dropdowndiv';
import {FlyoutButton} from 'blockly/core/flyout_button';
import {Gesture} from 'blockly/core/gesture';
import {Grid} from 'blockly/core/grid';
import {IASTNodeLocationSvg} from 'blockly/core/interfaces/i_ast_node_location_svg';
import {IBoundedElement} from 'blockly/core/interfaces/i_bounded_element';
import {IDragTarget} from 'blockly/core/interfaces/i_drag_target';
import {IFlyout} from 'blockly/core/interfaces/i_flyout';
import {IMetricsManager} from 'blockly/core/interfaces/i_metrics_manager';
import {IToolbox} from 'blockly/core/interfaces/i_toolbox';
import {MarkerManager} from 'blockly/core/marker_manager';
import {Marker} from 'blockly/core/keyboard_nav/marker';
import {Metrics} from 'blockly/core/utils/metrics';
import {Options} from 'blockly/core/options';
import {Rect} from 'blockly/core/utils/rect';
import {Renderer} from 'blockly/core/renderers/common/renderer';
import {ScrollbarPair} from 'blockly/core/scrollbar_pair';
import {Size} from 'blockly/core/utils/size';
import {Svg} from 'blockly/core/utils/svg';
import {ThemeManager} from 'blockly/core/theme_manager';
import {Theme} from 'blockly/core/theme';
import {TouchGesture} from 'blockly/core/touch_gesture';
import {Trashcan} from 'blockly/core/trashcan';
import {VariableModel} from 'blockly/core/variable_model';
import {WorkspaceAudio} from 'blockly/core/workspace_audio';
import {WorkspaceCommentSvg} from 'blockly/core/workspace_comment_svg';
import {WorkspaceComment} from 'blockly/core/workspace_comment';
import {WorkspaceDragSurfaceSvg} from 'blockly/core/workspace_drag_surface_svg';
import {Workspace} from 'blockly/core/workspace';
import {ZoomControls} from 'blockly/core/zoom_controls';
goog.require('blockly/core/events/events_block_create');
goog.require('blockly/core/events/events_theme_change');
goog.require('blockly/core/events/events_viewport');
goog.require('blockly/core/metrics_manager');
goog.require('blockly/core/msg');


/**
 * Class for a workspace.  This is an onscreen area with optional trashcan,
 * scrollbars, bubbles, and dragging.
 * @param {!Options} options Dictionary of options.
 * @param {BlockDragSurfaceSvg=} opt_blockDragSurface Drag surface for
 *     blocks.
 * @param {WorkspaceDragSurfaceSvg=} opt_wsDragSurface Drag surface for
 *     the workspace.
 * @extends {Workspace}
 * @implements {IASTNodeLocationSvg}
 * @constructor
 * @alias Blockly.WorkspaceSvg
 */
const WorkspaceSvg = function(
    options, opt_blockDragSurface, opt_wsDragSurface) {
  WorkspaceSvg.superClass_.constructor.call(this, options);

  const MetricsManagerClass = registry.getClassFromOptions(
      registry.Type.METRICS_MANAGER, options, true);
  /**
   * Object in charge of calculating metrics for the workspace.
   * @type {!IMetricsManager}
   * @private
   */
  this.metricsManager_ = new MetricsManagerClass(this);

  /**
   * Method to get all the metrics that have to do with a workspace.
   * @type {function():!Metrics}
   * @package
   */
  this.getMetrics = options.getMetrics ||
      this.metricsManager_.getMetrics.bind(this.metricsManager_);

  /**
   * Translates the workspace.
   * @type {function(!{x:number, y:number}):void}
   * @package
   */
  this.setMetrics =
      options.setMetrics || WorkspaceSvg.setTopLevelWorkspaceMetrics_;

  /**
   * @type {!ComponentManager}
   * @private
   */
  this.componentManager_ = new ComponentManager();

  this.connectionDBList = ConnectionDB.init(this.connectionChecker);

  if (opt_blockDragSurface) {
    this.blockDragSurface_ = opt_blockDragSurface;
  }

  if (opt_wsDragSurface) {
    this.workspaceDragSurface_ = opt_wsDragSurface;
  }

  this.useWorkspaceDragSurface_ =
      !!this.workspaceDragSurface_ && svgMath.is3dSupported();

  /**
   * List of currently highlighted blocks.  Block highlighting is often used to
   * visually mark blocks currently being executed.
   * @type {!Array<!BlockSvg>}
   * @private
   */
  this.highlightedBlocks_ = [];

  /**
   * Object in charge of loading, storing, and playing audio for a workspace.
   * @type {!WorkspaceAudio}
   * @private
   */
  this.audioManager_ = new WorkspaceAudio(
      /** @type {WorkspaceSvg} */ (options.parentWorkspace));

  /**
   * This workspace's grid object or null.
   * @type {Grid}
   * @private
   */
  this.grid_ = this.options.gridPattern ?
      new Grid(this.options.gridPattern, options.gridOptions) :
      null;

  /**
   * Manager in charge of markers and cursors.
   * @type {!MarkerManager}
   * @private
   */
  this.markerManager_ = new MarkerManager(this);

  /**
   * Map from function names to callbacks, for deciding what to do when a custom
   * toolbox category is opened.
   * @type {!Object<string, ?function(!Workspace):
   *     !toolbox.FlyoutDefinition>}
   * @private
   */
  this.toolboxCategoryCallbacks_ = Object.create(null);

  /**
   * Map from function names to callbacks, for deciding what to do when a button
   * is clicked.
   * @type {!Object<string, ?function(!FlyoutButton)>}
   * @private
   */
  this.flyoutButtonCallbacks_ = Object.create(null);

  const Variables = goog.module.get('blockly/core/variables');
  if (Variables && Variables.flyoutCategory) {
    this.registerToolboxCategoryCallback(
        Variables.CATEGORY_NAME, Variables.flyoutCategory);
  }

  const VariablesDynamic = goog.module.get('blockly/core/variables_dynamic');
  if (VariablesDynamic && VariablesDynamic.flyoutCategory) {
    this.registerToolboxCategoryCallback(
        VariablesDynamic.CATEGORY_NAME, VariablesDynamic.flyoutCategory);
  }

  const Procedures = goog.module.get('blockly/core/procedures');
  if (Procedures && Procedures.flyoutCategory) {
    this.registerToolboxCategoryCallback(
        Procedures.CATEGORY_NAME, Procedures.flyoutCategory);
    this.addChangeListener(Procedures.mutatorOpenListener);
  }

  /**
   * Object in charge of storing and updating the workspace theme.
   * @type {!ThemeManager}
   * @protected
   */
  this.themeManager_ = this.options.parentWorkspace ?
      this.options.parentWorkspace.getThemeManager() :
      new ThemeManager(this, this.options.theme || Classic);
  this.themeManager_.subscribeWorkspace(this);

  /**
   * The block renderer used for rendering blocks on this workspace.
   * @type {!Renderer}
   * @private
   */
  this.renderer_ = blockRendering.init(
      this.options.renderer || 'geras', this.getTheme(),
      this.options.rendererOverrides);

  /**
   * Cached parent SVG.
   * @type {SVGElement}
   * @private
   */
  this.cachedParentSvg_ = null;

  /**
   * True if keyboard accessibility mode is on, false otherwise.
   * @type {boolean}
   */
  this.keyboardAccessibilityMode = false;

  /**
   * The list of top-level bounded elements on the workspace.
   * @type {!Array<!IBoundedElement>}
   * @private
   */
  this.topBoundedElements_ = [];

  /**
   * The recorded drag targets.
   * @type {!Array<
   * {
   *   component: !IDragTarget,
   *   clientRect: !Rect
   * }>}
   * @private
   */
  this.dragTargetAreas_ = [];

  /**
   * The cached size of the parent svg element.
   * Used to compute svg metrics.
   * @type {!Size}
   * @private
   */
  this.cachedParentSvgSize_ = new Size(0, 0);
};
object.inherits(WorkspaceSvg, Workspace);

/**
 * A wrapper function called when a resize event occurs.
 * You can pass the result to `eventHandling.unbind`.
 * @type {?browserEvents.Data}
 * @private
 */
WorkspaceSvg.prototype.resizeHandlerWrapper_ = null;

/**
 * The render status of an SVG workspace.
 * Returns `false` for headless workspaces and true for instances of
 * `WorkspaceSvg`.
 * @type {boolean}
 */
WorkspaceSvg.prototype.rendered = true;

/**
 * Whether the workspace is visible.  False if the workspace has been hidden
 * by calling `setVisible(false)`.
 * @type {boolean}
 * @private
 */
WorkspaceSvg.prototype.isVisible_ = true;

/**
 * Is this workspace the surface for a flyout?
 * @type {boolean}
 */
WorkspaceSvg.prototype.isFlyout = false;

/**
 * Is this workspace the surface for a mutator?
 * @type {boolean}
 * @package
 */
WorkspaceSvg.prototype.isMutator = false;

/**
 * Whether this workspace has resizes enabled.
 * Disable during batch operations for a performance improvement.
 * @type {boolean}
 * @private
 */
WorkspaceSvg.prototype.resizesEnabled_ = true;

/**
 * Current horizontal scrolling offset in pixel units, relative to the
 * workspace origin.
 *
 * It is useful to think about a view, and a canvas moving beneath that
 * view. As the canvas moves right, this value becomes more positive, and
 * the view is now "seeing" the left side of the canvas. As the canvas moves
 * left, this value becomes more negative, and the view is now "seeing" the
 * right side of the canvas.
 *
 * The confusing thing about this value is that it does not, and must not
 * include the absoluteLeft offset. This is because it is used to calculate
 * the viewLeft value.
 *
 * The viewLeft is relative to the workspace origin (although in pixel
 * units). The workspace origin is the top-left corner of the workspace (at
 * least when it is enabled). It is shifted from the top-left of the blocklyDiv
 * so as not to be beneath the toolbox.
 *
 * When the workspace is enabled the viewLeft and workspace origin are at
 * the same X location. As the canvas slides towards the right beneath the view
 * this value (scrollX) becomes more positive, and the viewLeft becomes more
 * negative relative to the workspace origin (imagine the workspace origin
 * as a dot on the canvas sliding to the right as the canvas moves).
 *
 * So if the scrollX were to include the absoluteLeft this would in a way
 * "unshift" the workspace origin. This means that the viewLeft would be
 * representing the left edge of the blocklyDiv, rather than the left edge
 * of the workspace.
 *
 * @type {number}
 */
WorkspaceSvg.prototype.scrollX = 0;

/**
 * Current vertical scrolling offset in pixel units, relative to the
 * workspace origin.
 *
 * It is useful to think about a view, and a canvas moving beneath that
 * view. As the canvas moves down, this value becomes more positive, and the
 * view is now "seeing" the upper part of the canvas. As the canvas moves
 * up, this value becomes more negative, and the view is "seeing" the lower
 * part of the canvas.
 *
 * This confusing thing about this value is that it does not, and must not
 * include the absoluteTop offset. This is because it is used to calculate
 * the viewTop value.
 *
 * The viewTop is relative to the workspace origin (although in pixel
 * units). The workspace origin is the top-left corner of the workspace (at
 * least when it is enabled). It is shifted from the top-left of the
 * blocklyDiv so as not to be beneath the toolbox.
 *
 * When the workspace is enabled the viewTop and workspace origin are at the
 * same Y location. As the canvas slides towards the bottom this value
 * (scrollY) becomes more positive, and the viewTop becomes more negative
 * relative to the workspace origin (image in the workspace origin as a dot
 * on the canvas sliding downwards as the canvas moves).
 *
 * So if the scrollY were to include the absoluteTop this would in a way
 * "unshift" the workspace origin. This means that the viewTop would be
 * representing the top edge of the blocklyDiv, rather than the top edge of
 * the workspace.
 *
 * @type {number}
 */
WorkspaceSvg.prototype.scrollY = 0;

/**
 * Horizontal scroll value when scrolling started in pixel units.
 * @type {number}
 */
WorkspaceSvg.prototype.startScrollX = 0;

/**
 * Vertical scroll value when scrolling started in pixel units.
 * @type {number}
 */
WorkspaceSvg.prototype.startScrollY = 0;

/**
 * Distance from mouse to object being dragged.
 * @type {Coordinate}
 * @private
 */
WorkspaceSvg.prototype.dragDeltaXY_ = null;

/**
 * Current scale.
 * @type {number}
 */
WorkspaceSvg.prototype.scale = 1;

/**
 * Cached scale value. Used to detect changes in viewport.
 * @type {number}
 * @private
 */
WorkspaceSvg.prototype.oldScale_ = 1;

/**
 * Cached viewport top value. Used to detect changes in viewport.
 * @type {number}
 * @private
 */
WorkspaceSvg.prototype.oldTop_ = 0;

/**
 * Cached viewport left value. Used to detect changes in viewport.
 * @type {number}
 * @private
 */
WorkspaceSvg.prototype.oldLeft_ = 0;

/**
 * The workspace's trashcan (if any).
 * @type {Trashcan}
 */
WorkspaceSvg.prototype.trashcan = null;

/**
 * This workspace's scrollbars, if they exist.
 * @type {ScrollbarPair}
 */
WorkspaceSvg.prototype.scrollbar = null;

/**
 * Fixed flyout providing blocks which may be dragged into this workspace.
 * @type {IFlyout}
 * @private
 */
WorkspaceSvg.prototype.flyout_ = null;

/**
 * Category-based toolbox providing blocks which may be dragged into this
 * workspace.
 * @type {IToolbox}
 * @private
 */
WorkspaceSvg.prototype.toolbox_ = null;

/**
 * The current gesture in progress on this workspace, if any.
 * @type {TouchGesture}
 * @private
 */
WorkspaceSvg.prototype.currentGesture_ = null;

/**
 * This workspace's surface for dragging blocks, if it exists.
 * @type {BlockDragSurfaceSvg}
 * @private
 */
WorkspaceSvg.prototype.blockDragSurface_ = null;

/**
 * This workspace's drag surface, if it exists.
 * @type {WorkspaceDragSurfaceSvg}
 * @private
 */
WorkspaceSvg.prototype.workspaceDragSurface_ = null;

/**
 * Whether to move workspace to the drag surface when it is dragged.
 * True if it should move, false if it should be translated directly.
 * @type {boolean}
 * @private
 */
WorkspaceSvg.prototype.useWorkspaceDragSurface_ = false;

/**
 * Whether the drag surface is actively in use. When true, calls to
 * translate will translate the drag surface instead of the translating the
 * workspace directly.
 * This is set to true in setupDragSurface and to false in resetDragSurface.
 * @type {boolean}
 * @private
 */
WorkspaceSvg.prototype.isDragSurfaceActive_ = false;

/**
 * The first parent div with 'injectionDiv' in the name, or null if not set.
 * Access this with getInjectionDiv.
 * @type {Element}
 * @private
 */
WorkspaceSvg.prototype.injectionDiv_ = null;

/**
 * Last known position of the page scroll.
 * This is used to determine whether we have recalculated screen coordinate
 * stuff since the page scrolled.
 * @type {Coordinate}
 * @private
 */
WorkspaceSvg.prototype.lastRecordedPageScroll_ = null;

/**
 * Developers may define this function to add custom menu options to the
 * workspace's context menu or edit the workspace-created set of menu options.
 * @param {!Array<!Object>} options List of menu options to add to.
 * @param {!Event} e The right-click event that triggered the context menu.
 */
WorkspaceSvg.prototype.configureContextMenu;

/**
 * In a flyout, the target workspace where blocks should be placed after a drag.
 * Otherwise null.
 * @type {WorkspaceSvg}
 * @package
 */
WorkspaceSvg.prototype.targetWorkspace = null;

/**
 * Inverted screen CTM, for use in mouseToSvg.
 * @type {?SVGMatrix}
 * @private
 */
WorkspaceSvg.prototype.inverseScreenCTM_ = null;

/**
 * Inverted screen CTM is dirty, recalculate it.
 * @type {boolean}
 * @private
 */
WorkspaceSvg.prototype.inverseScreenCTMDirty_ = true;

/**
 * Get the marker manager for this workspace.
 * @return {!MarkerManager} The marker manager.
 */
WorkspaceSvg.prototype.getMarkerManager = function() {
  return this.markerManager_;
};

/**
 * Gets the metrics manager for this workspace.
 * @return {!IMetricsManager} The metrics manager.
 * @public
 */
WorkspaceSvg.prototype.getMetricsManager = function() {
  return this.metricsManager_;
};

/**
 * Sets the metrics manager for the workspace.
 * @param {!IMetricsManager} metricsManager The metrics manager.
 * @package
 */
WorkspaceSvg.prototype.setMetricsManager = function(metricsManager) {
  this.metricsManager_ = metricsManager;
  this.getMetrics = this.metricsManager_.getMetrics.bind(this.metricsManager_);
};

/**
 * Gets the component manager for this workspace.
 * @return {!ComponentManager} The component manager.
 * @public
 */
WorkspaceSvg.prototype.getComponentManager = function() {
  return this.componentManager_;
};

/**
 * Add the cursor SVG to this workspaces SVG group.
 * @param {SVGElement} cursorSvg The SVG root of the cursor to be added to the
 *     workspace SVG group.
 * @package
 */
WorkspaceSvg.prototype.setCursorSvg = function(cursorSvg) {
  this.markerManager_.setCursorSvg(cursorSvg);
};

/**
 * Add the marker SVG to this workspaces SVG group.
 * @param {SVGElement} markerSvg The SVG root of the marker to be added to the
 *     workspace SVG group.
 * @package
 */
WorkspaceSvg.prototype.setMarkerSvg = function(markerSvg) {
  this.markerManager_.setMarkerSvg(markerSvg);
};

/**
 * Get the marker with the given ID.
 * @param {string} id The ID of the marker.
 * @return {?Marker} The marker with the given ID or null if no marker
 *     with the given ID exists.
 * @package
 */
WorkspaceSvg.prototype.getMarker = function(id) {
  if (this.markerManager_) {
    return this.markerManager_.getMarker(id);
  }
  return null;
};

/**
 * The cursor for this workspace.
 * @return {?Cursor} The cursor for the workspace.
 */
WorkspaceSvg.prototype.getCursor = function() {
  if (this.markerManager_) {
    return this.markerManager_.getCursor();
  }
  return null;
};

/**
 * Get the block renderer attached to this workspace.
 * @return {!Renderer} The renderer attached to this
 *     workspace.
 */
WorkspaceSvg.prototype.getRenderer = function() {
  return this.renderer_;
};

/**
 * Get the theme manager for this workspace.
 * @return {!ThemeManager} The theme manager for this workspace.
 * @package
 */
WorkspaceSvg.prototype.getThemeManager = function() {
  return this.themeManager_;
};

/**
 * Get the workspace theme object.
 * @return {!Theme} The workspace theme object.
 */
WorkspaceSvg.prototype.getTheme = function() {
  return this.themeManager_.getTheme();
};

/**
 * Set the workspace theme object.
 * If no theme is passed, default to the `Classic` theme.
 * @param {Theme} theme The workspace theme object.
 */
WorkspaceSvg.prototype.setTheme = function(theme) {
  if (!theme) {
    theme = /** @type {!Theme} */ (Classic);
  }
  this.themeManager_.setTheme(theme);
};

/**
 * Refresh all blocks on the workspace after a theme update.
 * @package
 */
WorkspaceSvg.prototype.refreshTheme = function() {
  if (this.svgGroup_) {
    this.renderer_.refreshDom(this.svgGroup_, this.getTheme());
  }

  // Update all blocks in workspace that have a style name.
  this.updateBlockStyles_(this.getAllBlocks(false).filter(function(block) {
    return !!block.getStyleName();
  }));

  // Update current toolbox selection.
  this.refreshToolboxSelection();
  if (this.toolbox_) {
    this.toolbox_.refreshTheme();
  }

  // Re-render if workspace is visible
  if (this.isVisible()) {
    this.setVisible(true);
  }

  const event = new (eventUtils.get(eventUtils.THEME_CHANGE))(
      this.getTheme().name, this.id);
  eventUtils.fire(event);
};

/**
 * Updates all the blocks with new style.
 * @param {!Array<!Block>} blocks List of blocks to update the style
 *     on.
 * @private
 */
WorkspaceSvg.prototype.updateBlockStyles_ = function(blocks) {
  for (let i = 0, block; (block = blocks[i]); i++) {
    const blockStyleName = block.getStyleName();
    if (blockStyleName) {
      block.setStyle(blockStyleName);
      if (block.mutator) {
        block.mutator.updateBlockStyle();
      }
    }
  }
};

/**
 * Getter for the inverted screen CTM.
 * @return {?SVGMatrix} The matrix to use in mouseToSvg
 */
WorkspaceSvg.prototype.getInverseScreenCTM = function() {
  // Defer getting the screen CTM until we actually need it, this should
  // avoid forced reflows from any calls to updateInverseScreenCTM.
  if (this.inverseScreenCTMDirty_) {
    const ctm = this.getParentSvg().getScreenCTM();
    if (ctm) {
      this.inverseScreenCTM_ = ctm.inverse();
      this.inverseScreenCTMDirty_ = false;
    }
  }

  return this.inverseScreenCTM_;
};

/**
 * Mark the inverse screen CTM as dirty.
 */
WorkspaceSvg.prototype.updateInverseScreenCTM = function() {
  this.inverseScreenCTMDirty_ = true;
};

/**
 * Getter for isVisible
 * @return {boolean} Whether the workspace is visible.
 *     False if the workspace has been hidden by calling `setVisible(false)`.
 */
WorkspaceSvg.prototype.isVisible = function() {
  return this.isVisible_;
};

/**
 * Return the absolute coordinates of the top-left corner of this element,
 * scales that after canvas SVG element, if it's a descendant.
 * The origin (0,0) is the top-left corner of the Blockly SVG.
 * @param {!SVGElement} element SVG element to find the coordinates of.
 * @return {!Coordinate} Object with .x and .y properties.
 * @package
 */
WorkspaceSvg.prototype.getSvgXY = function(element) {
  let x = 0;
  let y = 0;
  let scale = 1;
  if (dom.containsNode(this.getCanvas(), element) ||
      dom.containsNode(this.getBubbleCanvas(), element)) {
    // Before the SVG canvas, scale the coordinates.
    scale = this.scale;
  }
  do {
    // Loop through this block and every parent.
    const xy = svgMath.getRelativeXY(element);
    if (element === this.getCanvas() || element === this.getBubbleCanvas()) {
      // After the SVG canvas, don't scale the coordinates.
      scale = 1;
    }
    x += xy.x * scale;
    y += xy.y * scale;
    element = /** @type {!SVGElement} */ (element.parentNode);
  } while (element && element !== this.getParentSvg());
  return new Coordinate(x, y);
};

/**
 * Gets the size of the workspace's parent SVG element.
 * @return {!Size} The cached width and height of the workspace's
 *     parent SVG element.
 * @package
 */
WorkspaceSvg.prototype.getCachedParentSvgSize = function() {
  const size = this.cachedParentSvgSize_;
  return new Size(size.width, size.height);
};

/**
 * Return the position of the workspace origin relative to the injection div
 * origin in pixels.
 * The workspace origin is where a block would render at position (0, 0).
 * It is not the upper left corner of the workspace SVG.
 * @return {!Coordinate} Offset in pixels.
 * @package
 */
WorkspaceSvg.prototype.getOriginOffsetInPixels = function() {
  return svgMath.getInjectionDivXY(this.getCanvas());
};

/**
 * Return the injection div that is a parent of this workspace.
 * Walks the DOM the first time it's called, then returns a cached value.
 * Note: We assume this is only called after the workspace has been injected
 * into the DOM.
 * @return {!Element} The first parent div with 'injectionDiv' in the name.
 * @package
 */
WorkspaceSvg.prototype.getInjectionDiv = function() {
  // NB: it would be better to pass this in at createDom, but is more likely to
  // break existing uses of Blockly.
  if (!this.injectionDiv_) {
    let element = this.svgGroup_;
    while (element) {
      const classes = element.getAttribute('class') || '';
      if ((' ' + classes + ' ').indexOf(' injectionDiv ') !== -1) {
        this.injectionDiv_ = element;
        break;
      }
      element = /** @type {!Element} */ (element.parentNode);
    }
  }
  return /** @type {!Element} */ (this.injectionDiv_);
};

/**
 * Get the SVG block canvas for the workspace.
 * @return {?SVGElement} The SVG group for the workspace.
 * @package
 */
WorkspaceSvg.prototype.getBlockCanvas = function() {
  return this.svgBlockCanvas_;
};

/**
 * Save resize handler data so we can delete it later in dispose.
 * @param {!browserEvents.Data} handler Data that can be passed to
 *     eventHandling.unbind.
 */
WorkspaceSvg.prototype.setResizeHandlerWrapper = function(handler) {
  this.resizeHandlerWrapper_ = handler;
};

/**
 * Create the workspace DOM elements.
 * @param {string=} opt_backgroundClass Either 'blocklyMainBackground' or
 *     'blocklyMutatorBackground'.
 * @return {!Element} The workspace's SVG group.
 */
WorkspaceSvg.prototype.createDom = function(opt_backgroundClass) {
  /**
   * <g class="blocklyWorkspace">
   *   <rect class="blocklyMainBackground" height="100%" width="100%"></rect>
   *   [Trashcan and/or flyout may go here]
   *   <g class="blocklyBlockCanvas"></g>
   *   <g class="blocklyBubbleCanvas"></g>
   * </g>
   * @type {SVGElement}
   */
  this.svgGroup_ =
      dom.createSvgElement(Svg.G, {'class': 'blocklyWorkspace'}, null);

  // Note that a <g> alone does not receive mouse events--it must have a
  // valid target inside it.  If no background class is specified, as in the
  // flyout, the workspace will not receive mouse events.
  if (opt_backgroundClass) {
    /** @type {SVGElement} */
    this.svgBackground_ = dom.createSvgElement(
        Svg.RECT,
        {'height': '100%', 'width': '100%', 'class': opt_backgroundClass},
        this.svgGroup_);

    if (opt_backgroundClass === 'blocklyMainBackground' && this.grid_) {
      this.svgBackground_.style.fill =
          'url(#' + this.grid_.getPatternId() + ')';
    } else {
      this.themeManager_.subscribe(
          this.svgBackground_, 'workspaceBackgroundColor', 'fill');
    }
  }
  /** @type {SVGElement} */
  this.svgBlockCanvas_ = dom.createSvgElement(
      Svg.G, {'class': 'blocklyBlockCanvas'}, this.svgGroup_);
  /** @type {SVGElement} */
  this.svgBubbleCanvas_ = dom.createSvgElement(
      Svg.G, {'class': 'blocklyBubbleCanvas'}, this.svgGroup_);

  if (!this.isFlyout) {
    browserEvents.conditionalBind(
        this.svgGroup_, 'mousedown', this, this.onMouseDown_, false, true);
    // This no-op works around https://bugs.webkit.org/show_bug.cgi?id=226683,
    // which otherwise prevents zoom/scroll events from being observed in
    // Safari. Once that bug is fixed it should be removed.
    document.body.addEventListener('wheel', function() {});
    browserEvents.conditionalBind(
        this.svgGroup_, 'wheel', this, this.onMouseWheel_);
  }

  // Determine if there needs to be a category tree, or a simple list of
  // blocks.  This cannot be changed later, since the UI is very different.
  if (this.options.hasCategories) {
    const ToolboxClass =
        registry.getClassFromOptions(registry.Type.TOOLBOX, this.options, true);
    this.toolbox_ = new ToolboxClass(this);
  }
  if (this.grid_) {
    this.grid_.update(this.scale);
  }
  this.recordDragTargets();
  const CursorClass =
      registry.getClassFromOptions(registry.Type.CURSOR, this.options);

  CursorClass && this.markerManager_.setCursor(new CursorClass());

  this.renderer_.createDom(this.svgGroup_, this.getTheme());
  return this.svgGroup_;
};

/**
 * Dispose of this workspace.
 * Unlink from all DOM elements to prevent memory leaks.
 * @suppress {checkTypes}
 */
WorkspaceSvg.prototype.dispose = function() {
  // Stop rerendering.
  this.rendered = false;
  if (this.currentGesture_) {
    this.currentGesture_.cancel();
  }
  if (this.svgGroup_) {
    dom.removeNode(this.svgGroup_);
    this.svgGroup_ = null;
  }
  this.svgBlockCanvas_ = null;
  this.svgBubbleCanvas_ = null;
  if (this.toolbox_) {
    this.toolbox_.dispose();
    this.toolbox_ = null;
  }
  if (this.flyout_) {
    this.flyout_.dispose();
    this.flyout_ = null;
  }
  if (this.trashcan) {
    this.trashcan.dispose();
    this.trashcan = null;
  }
  if (this.scrollbar) {
    this.scrollbar.dispose();
    this.scrollbar = null;
  }
  if (this.zoomControls_) {
    this.zoomControls_.dispose();
    this.zoomControls_ = null;
  }

  if (this.audioManager_) {
    this.audioManager_.dispose();
    this.audioManager_ = null;
  }

  if (this.grid_) {
    this.grid_.dispose();
    this.grid_ = null;
  }

  this.renderer_.dispose();

  if (this.markerManager_) {
    this.markerManager_.dispose();
    this.markerManager_ = null;
  }

  WorkspaceSvg.superClass_.dispose.call(this);

  // Dispose of theme manager after all blocks and mutators are disposed of.
  if (this.themeManager_) {
    this.themeManager_.unsubscribeWorkspace(this);
    this.themeManager_.unsubscribe(this.svgBackground_);
    if (!this.options.parentWorkspace) {
      this.themeManager_.dispose();
      this.themeManager_ = null;
    }
  }

  this.connectionDBList = null;

  this.toolboxCategoryCallbacks_ = null;
  this.flyoutButtonCallbacks_ = null;

  if (!this.options.parentWorkspace) {
    // Top-most workspace.  Dispose of the div that the
    // SVG is injected into (i.e. injectionDiv).
    const parentSvg = this.getParentSvg();
    if (parentSvg && parentSvg.parentNode) {
      dom.removeNode(parentSvg.parentNode);
    }
  }
  if (this.resizeHandlerWrapper_) {
    browserEvents.unbind(this.resizeHandlerWrapper_);
    this.resizeHandlerWrapper_ = null;
  }
};

/**
 * Obtain a newly created block.
 *
 * This block's SVG must still be initialized
 * ([initSvg]{@link BlockSvg#initSvg}) and it must be rendered
 * ([render]{@link BlockSvg#render}) before the block will be visible.
 * @param {!string} prototypeName Name of the language object containing
 *     type-specific functions for this block.
 * @param {string=} opt_id Optional ID.  Use this ID if provided, otherwise
 *     create a new ID.
 * @return {!BlockSvg} The created block.
 * @override
 */
WorkspaceSvg.prototype.newBlock = function(prototypeName, opt_id) {
  return new BlockSvg(this, prototypeName, opt_id);
};

/**
 * Add a trashcan.
 * @package
 */
WorkspaceSvg.prototype.addTrashcan = function() {
  const {Trashcan} = goog.module.get('blockly/core/trashcan');
  if (!Trashcan) {
    throw Error('Missing require for Blockly.Trashcan');
  }
  /** @type {Trashcan} */
  this.trashcan = new Trashcan(this);
  const svgTrashcan = this.trashcan.createDom();
  this.svgGroup_.insertBefore(svgTrashcan, this.svgBlockCanvas_);
};

/**
 * Add zoom controls.
 * @package
 */
WorkspaceSvg.prototype.addZoomControls = function() {
  const {ZoomControls} = goog.module.get('blockly/core/zoom_controls');
  if (!ZoomControls) {
    throw Error('Missing require for Blockly.ZoomControls');
  }
  /** @type {ZoomControls} */
  this.zoomControls_ = new ZoomControls(this);
  const svgZoomControls = this.zoomControls_.createDom();
  this.svgGroup_.appendChild(svgZoomControls);
};

/**
 * Add a flyout element in an element with the given tag name.
 * @param {string|
 * !Svg<!SVGSVGElement>|
 * !Svg<!SVGGElement>} tagName What type of tag the
 *     flyout belongs in.
 * @return {!Element} The element containing the flyout DOM.
 * @package
 */
WorkspaceSvg.prototype.addFlyout = function(tagName) {
  const workspaceOptions = new Options(
      /** @type {!BlocklyOptions} */
      ({
        'parentWorkspace': this,
        'rtl': this.RTL,
        'oneBasedIndex': this.options.oneBasedIndex,
        'horizontalLayout': this.horizontalLayout,
        'renderer': this.options.renderer,
        'rendererOverrides': this.options.rendererOverrides,
        'move': {
          'scrollbars': true,
        },
      }));
  workspaceOptions.toolboxPosition = this.options.toolboxPosition;
  if (this.horizontalLayout) {
    const HorizontalFlyout = registry.getClassFromOptions(
        registry.Type.FLYOUTS_HORIZONTAL_TOOLBOX, this.options, true);
    this.flyout_ = new HorizontalFlyout(workspaceOptions);
  } else {
    const VerticalFlyout = registry.getClassFromOptions(
        registry.Type.FLYOUTS_VERTICAL_TOOLBOX, this.options, true);
    this.flyout_ = new VerticalFlyout(workspaceOptions);
  }
  this.flyout_.autoClose = false;
  this.flyout_.getWorkspace().setVisible(true);

  // Return the element so that callers can place it in their desired
  // spot in the DOM.  For example, mutator flyouts do not go in the same place
  // as main workspace flyouts.
  return this.flyout_.createDom(tagName);
};

/**
 * Getter for the flyout associated with this workspace.  This flyout may be
 * owned by either the toolbox or the workspace, depending on toolbox
 * configuration.  It will be null if there is no flyout.
 * @param {boolean=} opt_own Whether to only return the workspace's own flyout.
 * @return {?IFlyout} The flyout on this workspace.
 * @package
 */
WorkspaceSvg.prototype.getFlyout = function(opt_own) {
  if (this.flyout_ || opt_own) {
    return this.flyout_;
  }
  if (this.toolbox_) {
    return this.toolbox_.getFlyout();
  }
  return null;
};

/**
 * Getter for the toolbox associated with this workspace, if one exists.
 * @return {?IToolbox} The toolbox on this workspace.
 * @package
 */
WorkspaceSvg.prototype.getToolbox = function() {
  return this.toolbox_;
};

/**
 * Update items that use screen coordinate calculations
 * because something has changed (e.g. scroll position, window size).
 * @private
 */
WorkspaceSvg.prototype.updateScreenCalculations_ = function() {
  this.updateInverseScreenCTM();
  this.recordDragTargets();
};

/**
 * If enabled, resize the parts of the workspace that change when the workspace
 * contents (e.g. block positions) change.  This will also scroll the
 * workspace contents if needed.
 * @package
 */
WorkspaceSvg.prototype.resizeContents = function() {
  if (!this.resizesEnabled_ || !this.rendered) {
    return;
  }
  if (this.scrollbar) {
    this.scrollbar.resize();
  }
  this.updateInverseScreenCTM();
};

/**
 * Resize and reposition all of the workspace chrome (toolbox,
 * trash, scrollbars etc.)
 * This should be called when something changes that
 * requires recalculating dimensions and positions of the
 * trash, zoom, toolbox, etc. (e.g. window resize).
 */
WorkspaceSvg.prototype.resize = function() {
  if (this.toolbox_) {
    this.toolbox_.position();
  }
  if (this.flyout_) {
    this.flyout_.position();
  }

  const positionables = this.componentManager_.getComponents(
      ComponentManager.Capability.POSITIONABLE, true);
  const metrics = this.getMetricsManager().getUiMetrics();
  const savedPositions = [];
  for (let i = 0, positionable; (positionable = positionables[i]); i++) {
    positionable.position(metrics, savedPositions);
    const boundingRect = positionable.getBoundingRectangle();
    if (boundingRect) {
      savedPositions.push(boundingRect);
    }
  }

  if (this.scrollbar) {
    this.scrollbar.resize();
  }
  this.updateScreenCalculations_();
};

/**
 * Resizes and repositions workspace chrome if the page has a new
 * scroll position.
 * @package
 */
WorkspaceSvg.prototype.updateScreenCalculationsIfScrolled = function() {
  /* eslint-disable indent */
  const currScroll = svgMath.getDocumentScroll();
  if (!Coordinate.equals(this.lastRecordedPageScroll_, currScroll)) {
    this.lastRecordedPageScroll_ = currScroll;
    this.updateScreenCalculations_();
  }
}; /* eslint-enable indent */

/**
 * Get the SVG element that forms the drawing surface.
 * @return {!SVGGElement} SVG group element.
 */
WorkspaceSvg.prototype.getCanvas = function() {
  return /** @type {!SVGGElement} */ (this.svgBlockCanvas_);
};

/**
 * Caches the width and height of the workspace's parent SVG element for use
 * with getSvgMetrics.
 * @param {?number} width The width of the parent SVG element.
 * @param {?number} height The height of the parent SVG element
 * @package
 */
WorkspaceSvg.prototype.setCachedParentSvgSize = function(width, height) {
  const svg = this.getParentSvg();
  if (width) {
    this.cachedParentSvgSize_.width = width;
    // This is set to support the public (but deprecated) Blockly.svgSize
    // method.
    svg.cachedWidth_ = width;
  }
  if (height) {
    this.cachedParentSvgSize_.height = height;
    // This is set to support the public (but deprecated) Blockly.svgSize
    // method.
    svg.cachedHeight_ = height;
  }
};

/**
 * Get the SVG element that forms the bubble surface.
 * @return {!SVGGElement} SVG group element.
 */
WorkspaceSvg.prototype.getBubbleCanvas = function() {
  return /** @type {!SVGGElement} */ (this.svgBubbleCanvas_);
};

/**
 * Get the SVG element that contains this workspace.
 * Note: We assume this is only called after the workspace has been injected
 * into the DOM.
 * @return {!SVGElement} SVG element.
 */
WorkspaceSvg.prototype.getParentSvg = function() {
  if (!this.cachedParentSvg_) {
    let element = this.svgGroup_;
    while (element) {
      if (element.tagName === 'svg') {
        this.cachedParentSvg_ = element;
        break;
      }
      element = /** @type {!SVGElement} */ (element.parentNode);
    }
  }
  return /** @type {!SVGElement} */ (this.cachedParentSvg_);
};

/**
 * Fires a viewport event if events are enabled and there is a change in
 * viewport values.
 * @package
 */
WorkspaceSvg.prototype.maybeFireViewportChangeEvent = function() {
  if (!eventUtils.isEnabled()) {
    return;
  }
  const scale = this.scale;
  const top = -this.scrollY;
  const left = -this.scrollX;
  if (scale === this.oldScale_ && Math.abs(top - this.oldTop_) < 1 &&
      Math.abs(left - this.oldLeft_) < 1) {
    // Ignore sub-pixel changes in top and left. Due to #4192 there are a lot of
    // negligible changes in viewport top/left.
    return;
  }
  const event = new (eventUtils.get(eventUtils.VIEWPORT_CHANGE))(
      top, left, scale, this.id, this.oldScale_);
  this.oldScale_ = scale;
  this.oldTop_ = top;
  this.oldLeft_ = left;
  eventUtils.fire(event);
};

/**
 * Translate this workspace to new coordinates.
 * @param {number} x Horizontal translation, in pixel units relative to the
 *    top left of the Blockly div.
 * @param {number} y Vertical translation, in pixel units relative to the
 *    top left of the Blockly div.
 */
WorkspaceSvg.prototype.translate = function(x, y) {
  if (this.useWorkspaceDragSurface_ && this.isDragSurfaceActive_) {
    this.workspaceDragSurface_.translateSurface(x, y);
  } else {
    const translation = 'translate(' + x + ',' + y + ') ' +
        'scale(' + this.scale + ')';
    this.svgBlockCanvas_.setAttribute('transform', translation);
    this.svgBubbleCanvas_.setAttribute('transform', translation);
  }
  // Now update the block drag surface if we're using one.
  if (this.blockDragSurface_) {
    this.blockDragSurface_.translateAndScaleGroup(x, y, this.scale);
  }
  // And update the grid if we're using one.
  if (this.grid_) {
    this.grid_.moveTo(x, y);
  }

  this.maybeFireViewportChangeEvent();
};

/**
 * Called at the end of a workspace drag to take the contents
 * out of the drag surface and put them back into the workspace SVG.
 * Does nothing if the workspace drag surface is not enabled.
 * @package
 */
WorkspaceSvg.prototype.resetDragSurface = function() {
  // Don't do anything if we aren't using a drag surface.
  if (!this.useWorkspaceDragSurface_) {
    return;
  }

  this.isDragSurfaceActive_ = false;

  const trans = this.workspaceDragSurface_.getSurfaceTranslation();
  this.workspaceDragSurface_.clearAndHide(this.svgGroup_);
  const translation = 'translate(' + trans.x + ',' + trans.y + ') ' +
      'scale(' + this.scale + ')';
  this.svgBlockCanvas_.setAttribute('transform', translation);
  this.svgBubbleCanvas_.setAttribute('transform', translation);
};

/**
 * Called at the beginning of a workspace drag to move contents of
 * the workspace to the drag surface.
 * Does nothing if the drag surface is not enabled.
 * @package
 */
WorkspaceSvg.prototype.setupDragSurface = function() {
  // Don't do anything if we aren't using a drag surface.
  if (!this.useWorkspaceDragSurface_) {
    return;
  }

  // This can happen if the user starts a drag, mouses up outside of the
  // document where the mouseup listener is registered (e.g. outside of an
  // iframe) and then moves the mouse back in the workspace.  On mobile and ff,
  // we get the mouseup outside the frame. On chrome and safari desktop we do
  // not.
  if (this.isDragSurfaceActive_) {
    return;
  }

  this.isDragSurfaceActive_ = true;

  // Figure out where we want to put the canvas back.  The order
  // in the is important because things are layered.
  const previousElement =
      /** @type {Element} */ (this.svgBlockCanvas_.previousSibling);
  const width = parseInt(this.getParentSvg().getAttribute('width'), 10);
  const height = parseInt(this.getParentSvg().getAttribute('height'), 10);
  const coord = svgMath.getRelativeXY(this.getCanvas());
  this.workspaceDragSurface_.setContentsAndShow(
      this.getCanvas(), this.getBubbleCanvas(), previousElement, width, height,
      this.scale);
  this.workspaceDragSurface_.translateSurface(coord.x, coord.y);
};

/**
 * Gets the drag surface blocks are moved to when a drag is started.
 * @return {?BlockDragSurfaceSvg} This workspace's block drag surface,
 *     if one is in use.
 * @package
 */
WorkspaceSvg.prototype.getBlockDragSurface = function() {
  return this.blockDragSurface_;
};

/**
 * Returns the horizontal offset of the workspace.
 * Intended for LTR/RTL compatibility in XML.
 * @return {number} Width.
 */
WorkspaceSvg.prototype.getWidth = function() {
  const metrics = this.getMetrics();
  return metrics ? metrics.viewWidth / this.scale : 0;
};

/**
 * Toggles the visibility of the workspace.
 * Currently only intended for main workspace.
 * @param {boolean} isVisible True if workspace should be visible.
 */
WorkspaceSvg.prototype.setVisible = function(isVisible) {
  this.isVisible_ = isVisible;
  if (!this.svgGroup_) {
    return;
  }

  // Tell the scrollbar whether its container is visible so it can
  // tell when to hide itself.
  if (this.scrollbar) {
    this.scrollbar.setContainerVisible(isVisible);
  }

  // Tell the flyout whether its container is visible so it can
  // tell when to hide itself.
  if (this.getFlyout()) {
    this.getFlyout().setContainerVisible(isVisible);
  }

  this.getParentSvg().style.display = isVisible ? 'block' : 'none';
  if (this.toolbox_) {
    // Currently does not support toolboxes in mutators.
    this.toolbox_.setVisible(isVisible);
  }
  if (isVisible) {
    const blocks = this.getAllBlocks(false);
    // Tell each block on the workspace to mark its fields as dirty.
    for (let i = blocks.length - 1; i >= 0; i--) {
      blocks[i].markDirty();
    }

    this.render();
    if (this.toolbox_) {
      this.toolbox_.position();
    }
  } else {
    this.hideChaff(true);
  }
};

/**
 * Render all blocks in workspace.
 */
WorkspaceSvg.prototype.render = function() {
  // Generate list of all blocks.
  const blocks = this.getAllBlocks(false);
  // Render each block.
  for (let i = blocks.length - 1; i >= 0; i--) {
    blocks[i].render(false);
  }

  if (this.currentGesture_) {
    const imList = this.currentGesture_.getInsertionMarkers();
    for (let i = 0; i < imList.length; i++) {
      imList[i].render(false);
    }
  }

  this.markerManager_.updateMarkers();
};

/**
 * Highlight or unhighlight a block in the workspace.  Block highlighting is
 * often used to visually mark blocks currently being executed.
 * @param {?string} id ID of block to highlight/unhighlight,
 *   or null for no block (used to unhighlight all blocks).
 * @param {boolean=} opt_state If undefined, highlight specified block and
 * automatically unhighlight all others.  If true or false, manually
 * highlight/unhighlight the specified block.
 */
WorkspaceSvg.prototype.highlightBlock = function(id, opt_state) {
  if (opt_state === undefined) {
    // Unhighlight all blocks.
    for (let i = 0, block; (block = this.highlightedBlocks_[i]); i++) {
      block.setHighlighted(false);
    }
    this.highlightedBlocks_.length = 0;
  }
  // Highlight/unhighlight the specified block.
  const block = id ? this.getBlockById(id) : null;
  if (block) {
    const state = (opt_state === undefined) || opt_state;
    // Using Set here would be great, but at the cost of IE10 support.
    if (!state) {
      arrayUtils.removeElem(this.highlightedBlocks_, block);
    } else if (this.highlightedBlocks_.indexOf(block) === -1) {
      this.highlightedBlocks_.push(block);
    }
    block.setHighlighted(state);
  }
};

/**
 * Pastes the provided block or workspace comment onto the workspace.
 * Does not check whether there is remaining capacity for the object, that
 * should be done before calling this method.
 * @param {!Object|!Element|!DocumentFragment} state The representation of the
 *     thing to paste.
 */
WorkspaceSvg.prototype.paste = function(state) {
  if (!this.rendered || !state['type'] && !state.tagName) {
    return;
  }
  if (this.currentGesture_) {
    this.currentGesture_.cancel();  // Dragging while pasting?  No.
  }

  // Checks if this is JSON. JSON has a type property, while elements don't.
  if (state['type']) {
    this.pasteBlock_(null, /** @type {!blocks.State} */ (state));
  } else {
    const xmlBlock = /** @type {!Element} */ (state);
    if (xmlBlock.tagName.toLowerCase() === 'comment') {
      this.pasteWorkspaceComment_(xmlBlock);
    } else {
      this.pasteBlock_(xmlBlock, null);
    }
  }
};

/**
 * Paste the provided block onto the workspace.
 * @param {?Element} xmlBlock XML block element.
 * @param {?blocks.State} jsonBlock JSON block
 *     representation.
 * @private
 */
WorkspaceSvg.prototype.pasteBlock_ = function(xmlBlock, jsonBlock) {
  eventUtils.disable();
  let block;
  try {
    let blockX = 0;
    let blockY = 0;
    if (xmlBlock) {
      block = Xml.domToBlock(xmlBlock, this);
      blockX = parseInt(xmlBlock.getAttribute('x'), 10);
      if (this.RTL) {
        blockX = -blockX;
      }
      blockY = parseInt(xmlBlock.getAttribute('y'), 10);
    } else if (jsonBlock) {
      block = blocks.append(jsonBlock, this);
      blockX = jsonBlock['x'] || 10;
      if (this.RTL) {
        blockX = this.getWidth() - blockX;
      }
      blockY = jsonBlock['y'] || 10;
    }

    // Move the duplicate to original position.
    if (!isNaN(blockX) && !isNaN(blockY)) {
      // Offset block until not clobbering another block and not in connection
      // distance with neighbouring blocks.
      let collide;
      do {
        collide = false;
        const allBlocks = this.getAllBlocks(false);
        for (let i = 0, otherBlock; (otherBlock = allBlocks[i]); i++) {
          const otherXY = otherBlock.getRelativeToSurfaceXY();
          if (Math.abs(blockX - otherXY.x) <= 1 &&
              Math.abs(blockY - otherXY.y) <= 1) {
            collide = true;
            break;
          }
        }
        if (!collide) {
          // Check for blocks in snap range to any of its connections.
          const connections = block.getConnections_(false);
          for (let i = 0, connection; (connection = connections[i]); i++) {
            const neighbour = connection.closest(
                internalConstants.SNAP_RADIUS, new Coordinate(blockX, blockY));
            if (neighbour.connection) {
              collide = true;
              break;
            }
          }
        }
        if (collide) {
          if (this.RTL) {
            blockX -= internalConstants.SNAP_RADIUS;
          } else {
            blockX += internalConstants.SNAP_RADIUS;
          }
          blockY += internalConstants.SNAP_RADIUS * 2;
        }
      } while (collide);
      block.moveTo(new Coordinate(blockX, blockY));
    }
  } finally {
    eventUtils.enable();
  }
  if (eventUtils.isEnabled() && !block.isShadow()) {
    eventUtils.fire(new (eventUtils.get(eventUtils.BLOCK_CREATE))(block));
  }
  block.select();
};

/**
 * Paste the provided comment onto the workspace.
 * @param {!Element} xmlComment XML workspace comment element.
 * @private
 * @suppress {checkTypes} Suppress checks while workspace comments are not
 *     bundled in.
 */
WorkspaceSvg.prototype.pasteWorkspaceComment_ = function(xmlComment) {
  eventUtils.disable();
  let comment;
  try {
    comment = goog.module.get('blockly/core/workspace_comment_svg')
                  .fromXml(xmlComment, this);
    // Move the duplicate to original position.
    let commentX = parseInt(xmlComment.getAttribute('x'), 10);
    let commentY = parseInt(xmlComment.getAttribute('y'), 10);
    if (!isNaN(commentX) && !isNaN(commentY)) {
      if (this.RTL) {
        commentX = -commentX;
      }
      // Offset workspace comment.
      // TODO (#1719): Properly offset comment such that it's not interfering
      // with any blocks.
      commentX += 50;
      commentY += 50;
      comment.moveBy(commentX, commentY);
    }
  } finally {
    eventUtils.enable();
  }
  if (eventUtils.isEnabled()) {
    goog.module.get('blockly/core/workspace_comment').fireCreateEvent(comment);
  }
  comment.select();
};

/**
 * Refresh the toolbox unless there's a drag in progress.
 * @package
 */
WorkspaceSvg.prototype.refreshToolboxSelection = function() {
  const ws = this.isFlyout ? this.targetWorkspace : this;
  if (ws && !ws.currentGesture_ && ws.toolbox_ && ws.toolbox_.getFlyout()) {
    ws.toolbox_.refreshSelection();
  }
};

/**
 * Rename a variable by updating its name in the variable map.  Update the
 *     flyout to show the renamed variable immediately.
 * @param {string} id ID of the variable to rename.
 * @param {string} newName New variable name.
 */
WorkspaceSvg.prototype.renameVariableById = function(id, newName) {
  WorkspaceSvg.superClass_.renameVariableById.call(this, id, newName);
  this.refreshToolboxSelection();
};

/**
 * Delete a variable by the passed in ID.   Update the flyout to show
 *     immediately that the variable is deleted.
 * @param {string} id ID of variable to delete.
 */
WorkspaceSvg.prototype.deleteVariableById = function(id) {
  WorkspaceSvg.superClass_.deleteVariableById.call(this, id);
  this.refreshToolboxSelection();
};

/**
 * Create a new variable with the given name.  Update the flyout to show the
 *     new variable immediately.
 * @param {string} name The new variable's name.
 * @param {?string=} opt_type The type of the variable like 'int' or 'string'.
 *     Does not need to be unique. Field_variable can filter variables based on
 *     their type. This will default to '' which is a specific type.
 * @param {?string=} opt_id The unique ID of the variable. This will default to
 *     a UUID.
 * @return {!VariableModel} The newly created variable.
 */
WorkspaceSvg.prototype.createVariable = function(name, opt_type, opt_id) {
  const newVar = WorkspaceSvg.superClass_.createVariable.call(
      this, name, opt_type, opt_id);
  this.refreshToolboxSelection();
  return newVar;
};

/**
 * Make a list of all the delete areas for this workspace.
 * @deprecated Use workspace.recordDragTargets. (2021 June)
 */
WorkspaceSvg.prototype.recordDeleteAreas = function() {
  utils.deprecation.warn(
      'WorkspaceSvg.prototype.recordDeleteAreas', 'June 2021', 'June 2022',
      'WorkspaceSvg.prototype.recordDragTargets');
  this.recordDragTargets();
};

/**
 * Make a list of all the delete areas for this workspace.
 */
WorkspaceSvg.prototype.recordDragTargets = function() {
  const dragTargets = this.componentManager_.getComponents(
      ComponentManager.Capability.DRAG_TARGET, true);

  this.dragTargetAreas_ = [];
  for (let i = 0, targetArea; (targetArea = dragTargets[i]); i++) {
    const rect = targetArea.getClientRect();
    if (rect) {
      this.dragTargetAreas_.push({
        component: targetArea,
        clientRect: rect,
      });
    }
  }
};


/**
 * Returns the drag target the mouse event is over.
 * @param {!Event} e Mouse move event.
 * @return {?IDragTarget} Null if not over a drag target, or the drag
 *     target the event is over.
 */
WorkspaceSvg.prototype.getDragTarget = function(e) {
  for (let i = 0, targetArea; (targetArea = this.dragTargetAreas_[i]); i++) {
    if (targetArea.clientRect.contains(e.clientX, e.clientY)) {
      return targetArea.component;
    }
  }
  return null;
};

/**
 * Handle a mouse-down on SVG drawing surface.
 * @param {!Event} e Mouse down event.
 * @private
 */
WorkspaceSvg.prototype.onMouseDown_ = function(e) {
  const gesture = this.getGesture(e);
  if (gesture) {
    gesture.handleWsStart(e, this);
  }
};

/**
 * Start tracking a drag of an object on this workspace.
 * @param {!Event} e Mouse down event.
 * @param {!Coordinate} xy Starting location of object.
 */
WorkspaceSvg.prototype.startDrag = function(e, xy) {
  // Record the starting offset between the bubble's location and the mouse.
  const point = browserEvents.mouseToSvg(
      e, this.getParentSvg(), this.getInverseScreenCTM());
  // Fix scale of mouse event.
  point.x /= this.scale;
  point.y /= this.scale;
  this.dragDeltaXY_ = Coordinate.difference(xy, point);
};

/**
 * Track a drag of an object on this workspace.
 * @param {!Event} e Mouse move event.
 * @return {!Coordinate} New location of object.
 */
WorkspaceSvg.prototype.moveDrag = function(e) {
  const point = browserEvents.mouseToSvg(
      e, this.getParentSvg(), this.getInverseScreenCTM());
  // Fix scale of mouse event.
  point.x /= this.scale;
  point.y /= this.scale;
  return Coordinate.sum(
      /** @type {!Coordinate} */ (this.dragDeltaXY_), point);
};

/**
 * Is the user currently dragging a block or scrolling the flyout/workspace?
 * @return {boolean} True if currently dragging or scrolling.
 */
WorkspaceSvg.prototype.isDragging = function() {
  return this.currentGesture_ !== null && this.currentGesture_.isDragging();
};

/**
 * Is this workspace draggable?
 * @return {boolean} True if this workspace may be dragged.
 */
WorkspaceSvg.prototype.isDraggable = function() {
  return this.options.moveOptions && this.options.moveOptions.drag;
};

/**
 * Is this workspace movable?
 *
 * This means the user can reposition the X Y coordinates of the workspace
 * through input. This can be through scrollbars, scroll wheel, dragging, or
 * through zooming with the scroll wheel or pinch (since the zoom is centered on
 * the mouse position). This does not include zooming with the zoom controls
 * since the X Y coordinates are decided programmatically.
 * @return {boolean} True if the workspace is movable, false otherwise.
 */
WorkspaceSvg.prototype.isMovable = function() {
  return (this.options.moveOptions && !!this.options.moveOptions.scrollbars) ||
      (this.options.moveOptions && this.options.moveOptions.wheel) ||
      (this.options.moveOptions && this.options.moveOptions.drag) ||
      (this.options.zoomOptions && this.options.zoomOptions.wheel) ||
      (this.options.zoomOptions && this.options.zoomOptions.pinch);
};

/**
 * Is this workspace movable horizontally?
 * @return {boolean} True if the workspace is movable horizontally, false
 *    otherwise.
 */
WorkspaceSvg.prototype.isMovableHorizontally = function() {
  const hasScrollbars = !!this.scrollbar;
  return this.isMovable() &&
      (!hasScrollbars ||
       (hasScrollbars && this.scrollbar.canScrollHorizontally()));
};

/**
 * Is this workspace movable vertically?
 * @return {boolean} True if the workspace is movable vertically, false
 *    otherwise.
 */
WorkspaceSvg.prototype.isMovableVertically = function() {
  const hasScrollbars = !!this.scrollbar;
  return this.isMovable() &&
      (!hasScrollbars ||
       (hasScrollbars && this.scrollbar.canScrollVertically()));
};

/**
 * Handle a mouse-wheel on SVG drawing surface.
 * @param {!Event} e Mouse wheel event.
 * @private
 */
WorkspaceSvg.prototype.onMouseWheel_ = function(e) {
  // Don't scroll or zoom anything if drag is in progress.
  if (Gesture.inProgress()) {
    e.preventDefault();
    e.stopPropagation();
    return;
  }
  const canWheelZoom =
      this.options.zoomOptions && this.options.zoomOptions.wheel;
  const canWheelMove =
      this.options.moveOptions && this.options.moveOptions.wheel;
  if (!canWheelZoom && !canWheelMove) {
    return;
  }

  const scrollDelta = browserEvents.getScrollDeltaPixels(e);

  // Zoom should also be enabled by the command key on Mac devices,
  // but not super on Unix.
  let commandKey;
  if (userAgent.MAC) {
    commandKey = e.metaKey;
  }

  if (canWheelZoom && (e.ctrlKey || commandKey || !canWheelMove)) {
    // Zoom.
    // The vertical scroll distance that corresponds to a click of a zoom
    // button.
    const PIXELS_PER_ZOOM_STEP = 50;
    const delta = -scrollDelta.y / PIXELS_PER_ZOOM_STEP;
    const position = browserEvents.mouseToSvg(
        e, this.getParentSvg(), this.getInverseScreenCTM());
    this.zoom(position.x, position.y, delta);
  } else {
    // Scroll.
    let x = this.scrollX - scrollDelta.x;
    let y = this.scrollY - scrollDelta.y;

    if (e.shiftKey && !scrollDelta.x) {
      // Scroll horizontally (based on vertical scroll delta).
      // This is needed as for some browser/system combinations which do not
      // set deltaX.
      x = this.scrollX - scrollDelta.y;
      y = this.scrollY;  // Don't scroll vertically.
    }
    this.scroll(x, y);
  }
  e.preventDefault();
};

/**
 * Calculate the bounding box for the blocks on the workspace.
 * Coordinate system: workspace coordinates.
 *
 * @return {!Rect} Contains the position and size of the
 *   bounding box containing the blocks on the workspace.
 */
WorkspaceSvg.prototype.getBlocksBoundingBox = function() {
  const topElements = this.getTopBoundedElements();
  // There are no blocks, return empty rectangle.
  if (!topElements.length) {
    return new Rect(0, 0, 0, 0);
  }

  // Initialize boundary using the first block.
  const boundary = topElements[0].getBoundingRectangle();

  // Start at 1 since the 0th block was used for initialization.
  for (let i = 1; i < topElements.length; i++) {
    const topElement = topElements[i];
    if (topElement.isInsertionMarker && topElement.isInsertionMarker()) {
      continue;
    }
    const blockBoundary = topElement.getBoundingRectangle();
    if (blockBoundary.top < boundary.top) {
      boundary.top = blockBoundary.top;
    }
    if (blockBoundary.bottom > boundary.bottom) {
      boundary.bottom = blockBoundary.bottom;
    }
    if (blockBoundary.left < boundary.left) {
      boundary.left = blockBoundary.left;
    }
    if (blockBoundary.right > boundary.right) {
      boundary.right = blockBoundary.right;
    }
  }
  return boundary;
};

/**
 * Clean up the workspace by ordering all the blocks in a column.
 */
WorkspaceSvg.prototype.cleanUp = function() {
  this.setResizesEnabled(false);
  eventUtils.setGroup(true);
  const topBlocks = this.getTopBlocks(true);
  let cursorY = 0;
  for (let i = 0, block; (block = topBlocks[i]); i++) {
    if (!block.isMovable()) {
      continue;
    }
    const xy = block.getRelativeToSurfaceXY();
    block.moveBy(-xy.x, cursorY - xy.y);
    block.snapToGrid();
    cursorY = block.getRelativeToSurfaceXY().y + block.getHeightWidth().height +
        this.renderer_.getConstants().MIN_BLOCK_HEIGHT;
  }
  eventUtils.setGroup(false);
  this.setResizesEnabled(true);
};

/**
 * Show the context menu for the workspace.
 * @param {!Event} e Mouse event.
 * @package
 */
WorkspaceSvg.prototype.showContextMenu = function(e) {
  if (this.options.readOnly || this.isFlyout) {
    return;
  }
  const menuOptions = ContextMenuRegistry.registry.getContextMenuOptions(
      ContextMenuRegistry.ScopeType.WORKSPACE, {workspace: this});

  // Allow the developer to add or modify menuOptions.
  if (this.configureContextMenu) {
    this.configureContextMenu(menuOptions, e);
  }

  ContextMenu.show(e, menuOptions, this.RTL);
};

/**
 * Modify the block tree on the existing toolbox.
 * @param {?toolbox.ToolboxDefinition} toolboxDef
 *    DOM tree of toolbox contents, string of toolbox contents, or JSON
 *    representing toolbox definition.
 */
WorkspaceSvg.prototype.updateToolbox = function(toolboxDef) {
  const parsedToolboxDef = toolbox.convertToolboxDefToJson(toolboxDef);

  if (!parsedToolboxDef) {
    if (this.options.languageTree) {
      throw Error('Can\'t nullify an existing toolbox.');
    }
    return;  // No change (null to null).
  }
  if (!this.options.languageTree) {
    throw Error('Existing toolbox is null.  Can\'t create new toolbox.');
  }

  if (toolbox.hasCategories(parsedToolboxDef)) {
    if (!this.toolbox_) {
      throw Error('Existing toolbox has no categories.  Can\'t change mode.');
    }
    this.options.languageTree = parsedToolboxDef;
    this.toolbox_.render(parsedToolboxDef);
  } else {
    if (!this.flyout_) {
      throw Error('Existing toolbox has categories.  Can\'t change mode.');
    }
    this.options.languageTree = parsedToolboxDef;
    this.flyout_.show(parsedToolboxDef);
  }
};

/**
 * Mark this workspace as the currently focused main workspace.
 */
WorkspaceSvg.prototype.markFocused = function() {
  if (this.options.parentWorkspace) {
    this.options.parentWorkspace.markFocused();
  } else {
    common.setMainWorkspace(this);
    // We call e.preventDefault in many event handlers which means we
    // need to explicitly grab focus (e.g from a textarea) because
    // the browser will not do it for us.  How to do this is browser dependent.
    this.setBrowserFocus();
  }
};

/**
 * Set the workspace to have focus in the browser.
 * @private
 */
WorkspaceSvg.prototype.setBrowserFocus = function() {
  // Blur whatever was focused since explicitly grabbing focus below does not
  // work in Edge.
  // In IE, SVGs can't be blurred or focused. Check to make sure the current
  // focus can be blurred before doing so.
  // See https://github.com/google/blockly/issues/4440
  if (document.activeElement && document.activeElement.blur) {
    document.activeElement.blur();
  }
  try {
    // Focus the workspace SVG - this is for Chrome and Firefox.
    this.getParentSvg().focus({preventScroll: true});
  } catch (e) {
    // IE and Edge do not support focus on SVG elements. When that fails
    // above, get the injectionDiv (the workspace's parent) and focus that
    // instead.  This doesn't work in Chrome.
    try {
      // In IE11, use setActive (which is IE only) so the page doesn't scroll
      // to the workspace gaining focus.
      this.getParentSvg().parentNode.setActive();
    } catch (e) {
      // setActive support was discontinued in Edge so when that fails, call
      // focus instead.
      this.getParentSvg().parentNode.focus({preventScroll: true});
    }
  }
};

/**
 * Zooms the workspace in or out relative to/centered on the given (x, y)
 * coordinate.
 * @param {number} x X coordinate of center, in pixel units relative to the
 *     top-left corner of the parentSVG.
 * @param {number} y Y coordinate of center, in pixel units relative to the
 *     top-left corner of the parentSVG.
 * @param {number} amount Amount of zooming. The formula for the new scale
 *     is newScale = currentScale * (scaleSpeed^amount). scaleSpeed is set in
 *     the workspace options. Negative amount values zoom out, and positive
 *     amount values zoom in.
 */
WorkspaceSvg.prototype.zoom = function(x, y, amount) {
  // Scale factor.
  const speed = this.options.zoomOptions.scaleSpeed;
  let scaleChange = Math.pow(speed, amount);
  const newScale = this.scale * scaleChange;
  if (this.scale === newScale) {
    return;  // No change in zoom.
  }

  // Clamp scale within valid range.
  if (newScale > this.options.zoomOptions.maxScale) {
    scaleChange = this.options.zoomOptions.maxScale / this.scale;
  } else if (newScale < this.options.zoomOptions.minScale) {
    scaleChange = this.options.zoomOptions.minScale / this.scale;
  }

  // Transform the x/y coordinates from the parentSVG's space into the
  // canvas' space, so that they are in workspace units relative to the top
  // left of the visible portion of the workspace.
  let matrix = this.getCanvas().getCTM();
  let center = this.getParentSvg().createSVGPoint();
  center.x = x;
  center.y = y;
  center = center.matrixTransform(matrix.inverse());
  x = center.x;
  y = center.y;

  // Find the new scrollX/scrollY so that the center remains in the same
  // position (relative to the center) after we zoom.
  // newScale and matrix.a should be identical (within a rounding error).
  matrix = matrix.translate(x * (1 - scaleChange), y * (1 - scaleChange))
               .scale(scaleChange);
  // scrollX and scrollY are in pixels.
  // The scrollX and scrollY still need to have absoluteLeft and absoluteTop
  // subtracted from them, but we'll leave that for setScale so that they're
  // correctly updated for the new flyout size if we have a simple toolbox.
  this.scrollX = matrix.e;
  this.scrollY = matrix.f;
  this.setScale(newScale);
};

/**
 * Zooming the blocks centered in the center of view with zooming in or out.
 * @param {number} type Type of zooming (-1 zooming out and 1 zooming in).
 */
WorkspaceSvg.prototype.zoomCenter = function(type) {
  const metrics = this.getMetrics();
  let x;
  let y;
  if (this.flyout_) {
    // If you want blocks in the center of the view (visible portion of the
    // workspace) to stay centered when the size of the view decreases (i.e.
    // when the size of the flyout increases) you need the center of the
    // *blockly div* to stay in the same pixel-position.
    // Note: This only works because of how scrollCenter positions blocks.
    x = metrics.svgWidth ? metrics.svgWidth / 2 : 0;
    y = metrics.svgHeight ? metrics.svgHeight / 2 : 0;
  } else {
    x = (metrics.viewWidth / 2) + metrics.absoluteLeft;
    y = (metrics.viewHeight / 2) + metrics.absoluteTop;
  }
  this.zoom(x, y, type);
};

/**
 * Zoom the blocks to fit in the workspace if possible.
 */
WorkspaceSvg.prototype.zoomToFit = function() {
  if (!this.isMovable()) {
    console.warn(
        'Tried to move a non-movable workspace. This could result' +
        ' in blocks becoming inaccessible.');
    return;
  }

  const metrics = this.getMetrics();
  let workspaceWidth = metrics.viewWidth;
  let workspaceHeight = metrics.viewHeight;
  const blocksBox = this.getBlocksBoundingBox();
  let blocksWidth = blocksBox.right - blocksBox.left;
  let blocksHeight = blocksBox.bottom - blocksBox.top;
  if (!blocksWidth) {
    return;  // Prevents zooming to infinity.
  }
  if (this.flyout_) {
    // We have to add the flyout size to both the workspace size and the
    // block size because the blocks we want to resize include the blocks in
    // the flyout, and the area we want to fit them includes the portion of
    // the workspace that is behind the flyout.
    if (this.horizontalLayout) {
      workspaceHeight += this.flyout_.getHeight();
      // Convert from pixels to workspace coordinates.
      blocksHeight += this.flyout_.getHeight() / this.scale;
    } else {
      workspaceWidth += this.flyout_.getWidth();
      // Convert from pixels to workspace coordinates.
      blocksWidth += this.flyout_.getWidth() / this.scale;
    }
  }

  // Scale Units: (pixels / workspaceUnit)
  const ratioX = workspaceWidth / blocksWidth;
  const ratioY = workspaceHeight / blocksHeight;
  eventUtils.disable();
  try {
    this.setScale(Math.min(ratioX, ratioY));
    this.scrollCenter();
  } finally {
    eventUtils.enable();
  }
  this.maybeFireViewportChangeEvent();
};

/**
 * Add a transition class to the block and bubble canvas, to animate any
 * transform changes.
 * @package
 */
WorkspaceSvg.prototype.beginCanvasTransition = function() {
  dom.addClass(
      /** @type {!SVGElement} */ (this.svgBlockCanvas_),
      'blocklyCanvasTransitioning');
  dom.addClass(
      /** @type {!SVGElement} */ (this.svgBubbleCanvas_),
      'blocklyCanvasTransitioning');
};

/**
 * Remove transition class from the block and bubble canvas.
 * @package
 */
WorkspaceSvg.prototype.endCanvasTransition = function() {
  dom.removeClass(
      /** @type {!SVGElement} */ (this.svgBlockCanvas_),
      'blocklyCanvasTransitioning');
  dom.removeClass(
      /** @type {!SVGElement} */ (this.svgBubbleCanvas_),
      'blocklyCanvasTransitioning');
};

/**
 * Center the workspace.
 */
WorkspaceSvg.prototype.scrollCenter = function() {
  if (!this.isMovable()) {
    console.warn(
        'Tried to move a non-movable workspace. This could result' +
        ' in blocks becoming inaccessible.');
    return;
  }

  const metrics = this.getMetrics();
  let x = (metrics.scrollWidth - metrics.viewWidth) / 2;
  let y = (metrics.scrollHeight - metrics.viewHeight) / 2;

  // Convert from workspace directions to canvas directions.
  x = -x - metrics.scrollLeft;
  y = -y - metrics.scrollTop;
  this.scroll(x, y);
};

/**
 * Scroll the workspace to center on the given block. If the block has other
 * blocks stacked below it, the workspace will be centered on the stack.
 * @param {?string} id ID of block center on.
 * @public
 */
WorkspaceSvg.prototype.centerOnBlock = function(id) {
  if (!this.isMovable()) {
    console.warn(
        'Tried to move a non-movable workspace. This could result' +
        ' in blocks becoming inaccessible.');
    return;
  }

  const block = id ? this.getBlockById(id) : null;
  if (!block) {
    return;
  }

  // XY is in workspace coordinates.
  const xy = block.getRelativeToSurfaceXY();
  // Height/width is in workspace units.
  const heightWidth = block.getHeightWidth();

  // Find the enter of the block in workspace units.
  const blockCenterY = xy.y + heightWidth.height / 2;

  // In RTL the block's position is the top right of the block, not top left.
  const multiplier = this.RTL ? -1 : 1;
  const blockCenterX = xy.x + (multiplier * heightWidth.width / 2);

  // Workspace scale, used to convert from workspace coordinates to pixels.
  const scale = this.scale;

  // Center of block in pixels, relative to workspace origin (center 0,0).
  // Scrolling to here would put the block in the top-left corner of the
  // visible workspace.
  const pixelX = blockCenterX * scale;
  const pixelY = blockCenterY * scale;

  const metrics = this.getMetrics();

  // viewHeight and viewWidth are in pixels.
  const halfViewWidth = metrics.viewWidth / 2;
  const halfViewHeight = metrics.viewHeight / 2;

  // Put the block in the center of the visible workspace instead.
  const scrollToCenterX = pixelX - halfViewWidth;
  const scrollToCenterY = pixelY - halfViewHeight;

  // Convert from workspace directions to canvas directions.
  const x = -scrollToCenterX;
  const y = -scrollToCenterY;

  this.scroll(x, y);
};

/**
 * Set the workspace's zoom factor.
 * @param {number} newScale Zoom factor. Units: (pixels / workspaceUnit).
 */
WorkspaceSvg.prototype.setScale = function(newScale) {
  if (this.options.zoomOptions.maxScale &&
      newScale > this.options.zoomOptions.maxScale) {
    newScale = this.options.zoomOptions.maxScale;
  } else if (
      this.options.zoomOptions.minScale &&
      newScale < this.options.zoomOptions.minScale) {
    newScale = this.options.zoomOptions.minScale;
  }
  this.scale = newScale;

  this.hideChaff(false);
  // Get the flyout, if any, whether our own or owned by the toolbox.
  const flyout = this.getFlyout(false);
  if (flyout && flyout.isVisible()) {
    flyout.reflow();
    this.recordDragTargets();
  }
  if (this.grid_) {
    this.grid_.update(this.scale);
  }

  // We call scroll instead of scrollbar.resize() so that we can center the
  // zoom correctly without scrollbars, but scroll does not resize the
  // scrollbars so we have to call resizeView/resizeContent as well.
  const metrics = this.getMetrics();

  this.scrollX -= metrics.absoluteLeft;
  this.scrollY -= metrics.absoluteTop;
  // The scroll values and the view values are additive inverses of
  // each other, so when we subtract from one we have to add to the other.
  metrics.viewLeft += metrics.absoluteLeft;
  metrics.viewTop += metrics.absoluteTop;

  this.scroll(this.scrollX, this.scrollY);
  if (this.scrollbar) {
    if (this.flyout_) {
      this.scrollbar.resizeView(metrics);
    } else {
      this.scrollbar.resizeContent(metrics);
    }
  }
};


/**
 * Get the workspace's zoom factor.  If the workspace has a parent, we call into
 * the parent to get the workspace scale.
 * @return {number} The workspace zoom factor. Units: (pixels / workspaceUnit).
 */
WorkspaceSvg.prototype.getScale = function() {
  if (this.options.parentWorkspace) {
    return this.options.parentWorkspace.getScale();
  }
  return this.scale;
};

/**
 * Scroll the workspace to a specified offset (in pixels), keeping in the
 * workspace bounds. See comment on workspaceSvg.scrollX for more detail on
 * the meaning of these values.
 * @param {number} x Target X to scroll to.
 * @param {number} y Target Y to scroll to.
 * @package
 */
WorkspaceSvg.prototype.scroll = function(x, y) {
  this.hideChaff(/* opt_onlyClosePopups= */ true);

  // Keep scrolling within the bounds of the content.
  const metrics = this.getMetrics();
  // Canvas coordinates (aka scroll coordinates) have inverse directionality
  // to workspace coordinates so we have to inverse them.
  x = Math.min(x, -metrics.scrollLeft);
  y = Math.min(y, -metrics.scrollTop);
  const maxXDisplacement = Math.max(0, metrics.scrollWidth - metrics.viewWidth);
  const maxXScroll = metrics.scrollLeft + maxXDisplacement;
  const maxYDisplacement =
      Math.max(0, metrics.scrollHeight - metrics.viewHeight);
  const maxYScroll = metrics.scrollTop + maxYDisplacement;
  x = Math.max(x, -maxXScroll);
  y = Math.max(y, -maxYScroll);
  this.scrollX = x;
  this.scrollY = y;

  if (this.scrollbar) {
    // The content position (displacement from the content's top-left to the
    // origin) plus the scroll position (displacement from the view's top-left
    // to the origin) gives us the distance from the view's top-left to the
    // content's top-left. Then we negate this so we get the displacement from
    // the content's top-left to the view's top-left, matching the
    // directionality of the scrollbars.
    this.scrollbar.set(
        -(x + metrics.scrollLeft), -(y + metrics.scrollTop), false);
  }
  // We have to shift the translation so that when the canvas is at 0, 0 the
  // workspace origin is not underneath the toolbox.
  x += metrics.absoluteLeft;
  y += metrics.absoluteTop;
  this.translate(x, y);
};

/**
 * Sets the X/Y translations of a top level workspace.
 * @param {!Object} xyRatio Contains an x and/or y property which is a float
 *     between 0 and 1 specifying the degree of scrolling.
 * @private
 * @this {WorkspaceSvg}
 */
WorkspaceSvg.setTopLevelWorkspaceMetrics_ = function(xyRatio) {
  const metrics = this.getMetrics();

  if (typeof xyRatio.x === 'number') {
    this.scrollX =
        -(metrics.scrollLeft +
          (metrics.scrollWidth - metrics.viewWidth) * xyRatio.x);
  }
  if (typeof xyRatio.y === 'number') {
    this.scrollY =
        -(metrics.scrollTop +
          (metrics.scrollHeight - metrics.viewHeight) * xyRatio.y);
  }
  // We have to shift the translation so that when the canvas is at 0, 0 the
  // workspace origin is not underneath the toolbox.
  const x = this.scrollX + metrics.absoluteLeft;
  const y = this.scrollY + metrics.absoluteTop;
  // We could call scroll here, but that has extra checks we don't need to do.
  this.translate(x, y);
};

/**
 * Find the block on this workspace with the specified ID.
 * @param {string} id ID of block to find.
 * @return {?BlockSvg} The sought after block, or null if not found.
 * @override
 */
WorkspaceSvg.prototype.getBlockById = function(id) {
  return /** @type {BlockSvg} */ (
      WorkspaceSvg.superClass_.getBlockById.call(this, id));
};

/**
 * Finds the top-level blocks and returns them.  Blocks are optionally sorted
 * by position; top to bottom (with slight LTR or RTL bias).
 * @param {boolean} ordered Sort the list if true.
 * @return {!Array<!BlockSvg>} The top-level block objects.
 * @override
 */
WorkspaceSvg.prototype.getTopBlocks = function(ordered) {
  return WorkspaceSvg.superClass_.getTopBlocks.call(this, ordered);
};

/**
 * Adds a block to the list of top blocks.
 * @param {!Block} block Block to add.
 */
WorkspaceSvg.prototype.addTopBlock = function(block) {
  this.addTopBoundedElement(/** @type {!BlockSvg} */ (block));
  WorkspaceSvg.superClass_.addTopBlock.call(this, block);
};

/**
 * Removes a block from the list of top blocks.
 * @param {!Block} block Block to remove.
 */
WorkspaceSvg.prototype.removeTopBlock = function(block) {
  this.removeTopBoundedElement(/** @type {!BlockSvg} */ (block));
  WorkspaceSvg.superClass_.removeTopBlock.call(this, block);
};

/**
 * Adds a comment to the list of top comments.
 * @param {!WorkspaceComment} comment comment to add.
 */
WorkspaceSvg.prototype.addTopComment = function(comment) {
  this.addTopBoundedElement(
      /** @type {!WorkspaceCommentSvg} */ (comment));
  WorkspaceSvg.superClass_.addTopComment.call(this, comment);
};

/**
 * Removes a comment from the list of top comments.
 * @param {!WorkspaceComment} comment comment to remove.
 */
WorkspaceSvg.prototype.removeTopComment = function(comment) {
  this.removeTopBoundedElement(
      /** @type {!WorkspaceCommentSvg} */ (comment));
  WorkspaceSvg.superClass_.removeTopComment.call(this, comment);
};

/**
 * Adds a bounded element to the list of top bounded elements.
 * @param {!IBoundedElement} element Bounded element to add.
 */
WorkspaceSvg.prototype.addTopBoundedElement = function(element) {
  this.topBoundedElements_.push(element);
};

/**
 * Removes a bounded element from the list of top bounded elements.
 * @param {!IBoundedElement} element Bounded element to remove.
 */
WorkspaceSvg.prototype.removeTopBoundedElement = function(element) {
  arrayUtils.removeElem(this.topBoundedElements_, element);
};

/**
 * Finds the top-level bounded elements and returns them.
 * @return {!Array<!IBoundedElement>} The top-level bounded elements.
 */
WorkspaceSvg.prototype.getTopBoundedElements = function() {
  return [].concat(this.topBoundedElements_);
};

/**
 * Update whether this workspace has resizes enabled.
 * If enabled, workspace will resize when appropriate.
 * If disabled, workspace will not resize until re-enabled.
 * Use to avoid resizing during a batch operation, for performance.
 * @param {boolean} enabled Whether resizes should be enabled.
 */
WorkspaceSvg.prototype.setResizesEnabled = function(enabled) {
  const reenabled = (!this.resizesEnabled_ && enabled);
  this.resizesEnabled_ = enabled;
  if (reenabled) {
    // Newly enabled.  Trigger a resize.
    this.resizeContents();
  }
};

/**
 * Dispose of all blocks in workspace, with an optimization to prevent resizes.
 */
WorkspaceSvg.prototype.clear = function() {
  this.setResizesEnabled(false);
  WorkspaceSvg.superClass_.clear.call(this);
  this.topBoundedElements_ = [];
  this.setResizesEnabled(true);
};

/**
 * Register a callback function associated with a given key, for clicks on
 * buttons and labels in the flyout.
 * For instance, a button specified by the XML
 * <button text="create variable" callbackKey="CREATE_VARIABLE"></button>
 * should be matched by a call to
 * registerButtonCallback("CREATE_VARIABLE", yourCallbackFunction).
 * @param {string} key The name to use to look up this function.
 * @param {function(!FlyoutButton)} func The function to call when the
 *     given button is clicked.
 */
WorkspaceSvg.prototype.registerButtonCallback = function(key, func) {
  if (typeof func !== 'function') {
    throw TypeError('Button callbacks must be functions.');
  }
  this.flyoutButtonCallbacks_[key] = func;
};

/**
 * Get the callback function associated with a given key, for clicks on buttons
 * and labels in the flyout.
 * @param {string} key The name to use to look up the function.
 * @return {?function(!FlyoutButton)} The function corresponding to the
 *     given key for this workspace; null if no callback is registered.
 */
WorkspaceSvg.prototype.getButtonCallback = function(key) {
  const result = this.flyoutButtonCallbacks_[key];
  return result ? result : null;
};

/**
 * Remove a callback for a click on a button in the flyout.
 * @param {string} key The name associated with the callback function.
 */
WorkspaceSvg.prototype.removeButtonCallback = function(key) {
  this.flyoutButtonCallbacks_[key] = null;
};

/**
 * Register a callback function associated with a given key, for populating
 * custom toolbox categories in this workspace.  See the variable and procedure
 * categories as an example.
 * @param {string} key The name to use to look up this function.
 * @param {function(!Workspace): !toolbox.FlyoutDefinition} func The function to
 *     call when the given toolbox category is opened.
 */
WorkspaceSvg.prototype.registerToolboxCategoryCallback = function(key, func) {
  if (typeof func !== 'function') {
    throw TypeError('Toolbox category callbacks must be functions.');
  }
  this.toolboxCategoryCallbacks_[key] = func;
};

/**
 * Get the callback function associated with a given key, for populating
 * custom toolbox categories in this workspace.
 * @param {string} key The name to use to look up the function.
 * @return {?function(!Workspace): !toolbox.FlyoutDefinition} The function
 *     corresponding to the given key for this workspace, or null if no function
 *     is registered.
 */
WorkspaceSvg.prototype.getToolboxCategoryCallback = function(key) {
  return this.toolboxCategoryCallbacks_[key] || null;
};

/**
 * Remove a callback for a click on a custom category's name in the toolbox.
 * @param {string} key The name associated with the callback function.
 */
WorkspaceSvg.prototype.removeToolboxCategoryCallback = function(key) {
  this.toolboxCategoryCallbacks_[key] = null;
};

/**
 * Look up the gesture that is tracking this touch stream on this workspace.
 * May create a new gesture.
 * @param {!Event} e Mouse event or touch event.
 * @return {?TouchGesture} The gesture that is tracking this touch
 *     stream, or null if no valid gesture exists.
 * @package
 */
WorkspaceSvg.prototype.getGesture = function(e) {
  const isStart =
      (e.type === 'mousedown' || e.type === 'touchstart' ||
       e.type === 'pointerdown');

  const gesture = this.currentGesture_;
  if (gesture) {
    if (isStart && gesture.hasStarted()) {
      console.warn('Tried to start the same gesture twice.');
      // That's funny.  We must have missed a mouse up.
      // Cancel it, rather than try to retrieve all of the state we need.
      gesture.cancel();
      return null;
    }
    return gesture;
  }

  // No gesture existed on this workspace, but this looks like the start of a
  // new gesture.
  if (isStart) {
    this.currentGesture_ = new TouchGesture(e, this);
    return this.currentGesture_;
  }
  // No gesture existed and this event couldn't be the start of a new gesture.
  return null;
};

/**
 * Clear the reference to the current gesture.
 * @package
 */
WorkspaceSvg.prototype.clearGesture = function() {
  this.currentGesture_ = null;
};

/**
 * Cancel the current gesture, if one exists.
 * @package
 */
WorkspaceSvg.prototype.cancelCurrentGesture = function() {
  if (this.currentGesture_) {
    this.currentGesture_.cancel();
  }
};

/**
 * Get the audio manager for this workspace.
 * @return {!WorkspaceAudio} The audio manager for this workspace.
 */
WorkspaceSvg.prototype.getAudioManager = function() {
  return this.audioManager_;
};

/**
 * Get the grid object for this workspace, or null if there is none.
 * @return {?Grid} The grid object for this workspace.
 * @package
 */
WorkspaceSvg.prototype.getGrid = function() {
  return this.grid_;
};

/**
 * Close tooltips, context menus, dropdown selections, etc.
 * @param {boolean=} opt_onlyClosePopups Whether only popups should be closed.
 */
WorkspaceSvg.prototype.hideChaff = function(opt_onlyClosePopups) {
  Tooltip.hide();
  WidgetDiv.hide();
  DropDownDiv.hideWithoutAnimation();

  const onlyClosePopups = !!opt_onlyClosePopups;
  const autoHideables = this.getComponentManager().getComponents(
      ComponentManager.Capability.AUTOHIDEABLE, true);
  autoHideables.forEach(
      (autoHideable) => autoHideable.autoHide(onlyClosePopups));
};

/**
 * Size the workspace when the contents change.  This also updates
 * scrollbars accordingly.
 * @param {!WorkspaceSvg} workspace The workspace to resize.
 * @alias Blockly.WorkspaceSvg.resizeSvgContents
 */
export function resizeSvgContents(workspace) {
  workspace.resizeContents();
}

exports.WorkspaceSvg = WorkspaceSvg;
