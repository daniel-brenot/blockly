/**
 * @license
 * Copyright 2011 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Functions for injecting Blockly into a web page.
 * @namespace Blockly.inject
 */

import Css from 'blockly/core/css';
import Tooltip from 'blockly/core/tooltip';
import Touch from 'blockly/core/touch';
import WidgetDiv from 'blockly/core/widgetdiv';
import aria from 'blockly/core/utils/aria';
import browserEvents from 'blockly/core/browser_events';
import bumpObjects from 'blockly/core/bump_objects';
import common from 'blockly/core/common';
import dom from 'blockly/core/utils/dom';
import userAgent from 'blockly/core/utils/useragent';
import {BlockDragSurfaceSvg} from 'blockly/core/block_drag_surface';
import {BlocklyOptions} from 'blockly/core/blockly_options';
import {DropDownDiv} from 'blockly/core/dropdowndiv';
import {Grid} from 'blockly/core/grid';
import {Msg} from 'blockly/core/msg';
import {Options} from 'blockly/core/options';
import {ScrollbarPair} from 'blockly/core/scrollbar_pair';
import {ShortcutRegistry} from 'blockly/core/shortcut_registry';
import {Svg} from 'blockly/core/utils/svg';
import {WorkspaceDragSurfaceSvg} from 'blockly/core/workspace_drag_surface_svg';
import {WorkspaceSvg} from 'blockly/core/workspace_svg';
import {Workspace} from 'blockly/core/workspace';


/**
 * Inject a Blockly editor into the specified container element (usually a div).
 * @param {Element|string} container Containing element, or its ID,
 *     or a CSS selector.
 * @param {BlocklyOptions=} opt_options Optional dictionary of options.
 * @return {!WorkspaceSvg} Newly created main workspace.
 * @alias Blockly.inject
 */
const inject = function(container, opt_options) {
  if (typeof container === 'string') {
    container =
        document.getElementById(container) || document.querySelector(container);
  }
  // Verify that the container is in document.
  if (!container || !dom.containsNode(document, container)) {
    throw Error('Error: container is not in current document.');
  }
  const options =
      new Options(opt_options || (/** @type {!BlocklyOptions} */ ({})));
  const subContainer = document.createElement('div');
  subContainer.className = 'injectionDiv';
  subContainer.tabIndex = 0;
  aria.setState(subContainer, aria.State.LABEL, Msg['WORKSPACE_ARIA_LABEL']);

  container.appendChild(subContainer);
  const svg = createDom(subContainer, options);

  // Create surfaces for dragging things. These are optimizations
  // so that the browser does not repaint during the drag.
  const blockDragSurface = new BlockDragSurfaceSvg(subContainer);

  const workspaceDragSurface = new WorkspaceDragSurfaceSvg(subContainer);

  const workspace =
      createMainWorkspace(svg, options, blockDragSurface, workspaceDragSurface);

  init(workspace);

  // Keep focus on the first workspace so entering keyboard navigation looks
  // correct.
  common.setMainWorkspace(workspace);

  common.svgResize(workspace);

  subContainer.addEventListener('focusin', function() {
    common.setMainWorkspace(workspace);
  });

  return workspace;
};

/**
 * Create the SVG image.
 * @param {!Element} container Containing element.
 * @param {!Options} options Dictionary of options.
 * @return {!Element} Newly created SVG image.
 */
const createDom = function(container, options) {
  // Sadly browsers (Chrome vs Firefox) are currently inconsistent in laying
  // out content in RTL mode.  Therefore Blockly forces the use of LTR,
  // then manually positions content in RTL as needed.
  container.setAttribute('dir', 'LTR');

  // Load CSS.
  Css.inject(options.hasCss, options.pathToMedia);

  // Build the SVG DOM.
  /*
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:html="http://www.w3.org/1999/xhtml"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
    class="blocklySvg">
    ...
  </svg>
  */
  const svg = dom.createSvgElement(
      Svg.SVG, {
        'xmlns': dom.SVG_NS,
        'xmlns:html': dom.HTML_NS,
        'xmlns:xlink': dom.XLINK_NS,
        'version': '1.1',
        'class': 'blocklySvg',
        'tabindex': '0',
      },
      container);
  /*
  <defs>
    ... filters go here ...
  </defs>
  */
  const defs = dom.createSvgElement(Svg.DEFS, {}, svg);
  // Each filter/pattern needs a unique ID for the case of multiple Blockly
  // instances on a page.  Browser behaviour becomes undefined otherwise.
  // https://neil.fraser.name/news/2015/11/01/
  const rnd = String(Math.random()).substring(2);

  options.gridPattern = Grid.createDom(rnd, options.gridOptions, defs);
  return svg;
};

/**
 * Create a main workspace and add it to the SVG.
 * @param {!Element} svg SVG element with pattern defined.
 * @param {!Options} options Dictionary of options.
 * @param {!BlockDragSurfaceSvg} blockDragSurface Drag surface SVG
 *     for the blocks.
 * @param {!WorkspaceDragSurfaceSvg} workspaceDragSurface Drag surface
 *     SVG for the workspace.
 * @return {!WorkspaceSvg} Newly created main workspace.
 */
const createMainWorkspace = function(
    svg, options, blockDragSurface, workspaceDragSurface) {
  options.parentWorkspace = null;
  const mainWorkspace =
      new WorkspaceSvg(options, blockDragSurface, workspaceDragSurface);
  const wsOptions = mainWorkspace.options;
  mainWorkspace.scale = wsOptions.zoomOptions.startScale;
  svg.appendChild(mainWorkspace.createDom('blocklyMainBackground'));

  // Set the theme name and renderer name onto the injection div.
  dom.addClass(
      mainWorkspace.getInjectionDiv(),
      mainWorkspace.getRenderer().getClassName());
  dom.addClass(
      mainWorkspace.getInjectionDiv(), mainWorkspace.getTheme().getClassName());

  if (!wsOptions.hasCategories && wsOptions.languageTree) {
    // Add flyout as an <svg> that is a sibling of the workspace SVG.
    const flyout = mainWorkspace.addFlyout(Svg.SVG);
    dom.insertAfter(flyout, svg);
  }
  if (wsOptions.hasTrashcan) {
    mainWorkspace.addTrashcan();
  }
  if (wsOptions.zoomOptions && wsOptions.zoomOptions.controls) {
    mainWorkspace.addZoomControls();
  }
  // Register the workspace svg as a UI component.
  mainWorkspace.getThemeManager().subscribe(
      svg, 'workspaceBackgroundColor', 'background-color');

  // A null translation will also apply the correct initial scale.
  mainWorkspace.translate(0, 0);

  mainWorkspace.addChangeListener(
      bumpObjects.bumpIntoBoundsHandler(mainWorkspace));

  // The SVG is now fully assembled.
  common.svgResize(mainWorkspace);
  WidgetDiv.createDom();
  DropDownDiv.createDom();
  Tooltip.createDom();
  return mainWorkspace;
};

/**
 * Initialize Blockly with various handlers.
 * @param {!WorkspaceSvg} mainWorkspace Newly created main workspace.
 */
const init = function(mainWorkspace) {
  const options = mainWorkspace.options;
  const svg = mainWorkspace.getParentSvg();

  // Suppress the browser's context menu.
  browserEvents.conditionalBind(
      /** @type {!Element} */ (svg.parentNode), 'contextmenu', null,
      function(e) {
        if (!browserEvents.isTargetInput(e)) {
          e.preventDefault();
        }
      });

  const workspaceResizeHandler =
      browserEvents.conditionalBind(window, 'resize', null, function() {
        mainWorkspace.hideChaff(true);
        common.svgResize(mainWorkspace);
        goog.module.get('blockly/core/bump_objects')
            .bumpTopObjectsIntoBounds(mainWorkspace);
      });
  mainWorkspace.setResizeHandlerWrapper(workspaceResizeHandler);

  bindDocumentEvents();

  if (options.languageTree) {
    const toolbox = mainWorkspace.getToolbox();
    const flyout = mainWorkspace.getFlyout(true);
    if (toolbox) {
      toolbox.init();
    } else if (flyout) {
      // Build a fixed flyout with the root blocks.
      flyout.init(mainWorkspace);
      flyout.show(options.languageTree);
      if (typeof flyout.scrollToStart === 'function') {
        flyout.scrollToStart();
      }
    }
  }

  if (options.hasTrashcan) {
    mainWorkspace.trashcan.init();
  }
  if (options.zoomOptions && options.zoomOptions.controls) {
    mainWorkspace.zoomControls_.init();
  }

  if (options.moveOptions && options.moveOptions.scrollbars) {
    const horizontalScroll = options.moveOptions.scrollbars === true ||
        !!options.moveOptions.scrollbars.horizontal;
    const verticalScroll = options.moveOptions.scrollbars === true ||
        !!options.moveOptions.scrollbars.vertical;
    mainWorkspace.scrollbar = new ScrollbarPair(
        mainWorkspace, horizontalScroll, verticalScroll,
        'blocklyMainWorkspaceScrollbar');
    mainWorkspace.scrollbar.resize();
  } else {
    mainWorkspace.setMetrics({x: 0.5, y: 0.5});
  }

  // Load the sounds.
  if (options.hasSounds) {
    loadSounds(options.pathToMedia, mainWorkspace);
  }
};

/**
 * Handle a key-down on SVG drawing surface. Does nothing if the main workspace
 * is not visible.
 * @param {!KeyboardEvent} e Key down event.
 */
// TODO (https://github.com/google/blockly/issues/1998) handle cases where there
// are multiple workspaces and non-main workspaces are able to accept input.
const onKeyDown = function(e) {
  const mainWorkspace = common.getMainWorkspace();
  if (!mainWorkspace) {
    return;
  }

  if (browserEvents.isTargetInput(e) ||
      (mainWorkspace.rendered && !mainWorkspace.isVisible())) {
    // When focused on an HTML text input widget, don't trap any keys.
    // Ignore keypresses on rendered workspaces that have been explicitly
    // hidden.
    return;
  }
  ShortcutRegistry.registry.onKeyDown(mainWorkspace, e);
};

/**
 * Whether event handlers have been bound. Document event handlers will only
 * be bound once, even if Blockly is destroyed and reinjected.
 * @type {boolean}
 */
let documentEventsBound = false;

/**
 * Bind document events, but only once.  Destroying and reinjecting Blockly
 * should not bind again.
 * Bind events for scrolling the workspace.
 * Most of these events should be bound to the SVG's surface.
 * However, 'mouseup' has to be on the whole document so that a block dragged
 * out of bounds and released will know that it has been released.
 * Also, 'keydown' has to be on the whole document since the browser doesn't
 * understand a concept of focus on the SVG image.
 */
function bindDocumentEvents() {
  if (!documentEventsBound) {
    browserEvents.conditionalBind(document, 'scroll', null, function() {
      const workspaces = Workspace.getAll();
      for (let i = 0, workspace; (workspace = workspaces[i]); i++) {
        if (workspace.updateInverseScreenCTM) {
          workspace.updateInverseScreenCTM();
        }
      }
    });
    browserEvents.conditionalBind(document, 'keydown', null, onKeyDown);
    // longStop needs to run to stop the context menu from showing up.  It
    // should run regardless of what other touch event handlers have run.
    browserEvents.bind(document, 'touchend', null, Touch.longStop);
    browserEvents.bind(document, 'touchcancel', null, Touch.longStop);
    // Some iPad versions don't fire resize after portrait to landscape change.
    if (userAgent.IPAD) {
      browserEvents.conditionalBind(
          window, 'orientationchange', document, function() {
            // TODO (#397): Fix for multiple Blockly workspaces.
            common.svgResize(/** @type {!WorkspaceSvg} */
                             (common.getMainWorkspace()));
          });
    }
  }
  documentEventsBound = true;
}

/**
 * Load sounds for the given workspace.
 * @param {string} pathToMedia The path to the media directory.
 * @param {!Workspace} workspace The workspace to load sounds for.
 */
const loadSounds = function(pathToMedia, workspace) {
  const audioMgr = workspace.getAudioManager();
  audioMgr.load(
      [
        pathToMedia + 'click.mp3',
        pathToMedia + 'click.wav',
        pathToMedia + 'click.ogg',
      ],
      'click');
  audioMgr.load(
      [
        pathToMedia + 'disconnect.wav',
        pathToMedia + 'disconnect.mp3',
        pathToMedia + 'disconnect.ogg',
      ],
      'disconnect');
  audioMgr.load(
      [
        pathToMedia + 'delete.mp3',
        pathToMedia + 'delete.ogg',
        pathToMedia + 'delete.wav',
      ],
      'delete');

  // Bind temporary hooks that preload the sounds.
  const soundBinds = [];
  const unbindSounds = function() {
    while (soundBinds.length) {
      browserEvents.unbind(soundBinds.pop());
    }
    audioMgr.preload();
  };

  // These are bound on mouse/touch events with
  // Blockly.browserEvents.conditionalBind, so they restrict the touch
  // identifier that will be recognized.  But this is really something that
  // happens on a click, not a drag, so that's not necessary.

  // Android ignores any sound not loaded as a result of a user action.
  soundBinds.push(browserEvents.conditionalBind(
      document, 'mousemove', null, unbindSounds, true));
  soundBinds.push(browserEvents.conditionalBind(
      document, 'touchstart', null, unbindSounds, true));
};

exports.inject = inject;
