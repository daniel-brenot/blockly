/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Object representing a mutator dialog.  A mutator allows the
 * user to change the shape of a block using a nested blocks editor.
 * @class
 */

import Abstract from 'blockly/core/events/events_abstract';
import dom from 'blockly/core/utils/dom';
import eventUtils from 'blockly/core/events/utils';
import internalConstants from 'blockly/core/internal_constants';
import object from 'blockly/core/utils/object';
import toolbox from 'blockly/core/utils/toolbox';
import xml from 'blockly/core/utils/xml';
import {BlockChange} from 'blockly/core/events/events_block_change';
import {BlockSvg} from 'blockly/core/block_svg';
import {BlocklyOptions} from 'blockly/core/blockly_options';
import {Block} from 'blockly/core/block';
import {Bubble} from 'blockly/core/bubble';
import {Connection} from 'blockly/core/connection';
import {Coordinate} from 'blockly/core/utils/coordinate';
import {Icon} from 'blockly/core/icon';
import {Options} from 'blockly/core/options';
import {Svg} from 'blockly/core/utils/svg';
import {WorkspaceSvg} from 'blockly/core/workspace_svg';
import {Workspace} from 'blockly/core/workspace';
goog.require('blockly/core/events/events_bubble_open');


/**
 * Class for a mutator dialog.
 * @param {!Array<string>} quarkNames List of names of sub-blocks for flyout.
 * @extends {Icon}
 * @constructor
 * @alias Blockly.Mutator
 */
function Mutator(quarkNames) {
  Mutator.superClass_.constructor.call(this, null);
  this.quarkNames_ = quarkNames;
}
object.inherits(Mutator, Icon);

/**
 * Workspace in the mutator's bubble.
 * @type {?WorkspaceSvg}
 * @private
 */
Mutator.prototype.workspace_ = null;

/**
 * Width of workspace.
 * @private
 */
Mutator.prototype.workspaceWidth_ = 0;

/**
 * Height of workspace.
 * @private
 */
Mutator.prototype.workspaceHeight_ = 0;

/**
 * Set the block this mutator is associated with.
 * @param {!BlockSvg} block The block associated with this mutator.
 * @package
 */
Mutator.prototype.setBlock = function(block) {
  this.block_ = block;
};

/**
 * Returns the workspace inside this mutator icon's bubble.
 * @return {?WorkspaceSvg} The workspace inside this mutator icon's
 *     bubble or null if the mutator isn't open.
 * @package
 */
Mutator.prototype.getWorkspace = function() {
  return this.workspace_;
};

/**
 * Draw the mutator icon.
 * @param {!Element} group The icon group.
 * @protected
 */
Mutator.prototype.drawIcon_ = function(group) {
  // Square with rounded corners.
  dom.createSvgElement(
      Svg.RECT, {
        'class': 'blocklyIconShape',
        'rx': '4',
        'ry': '4',
        'height': '16',
        'width': '16',
      },
      group);
  // Gear teeth.
  dom.createSvgElement(
      Svg.PATH, {
        'class': 'blocklyIconSymbol',
        'd': 'm4.203,7.296 0,1.368 -0.92,0.677 -0.11,0.41 0.9,1.559 0.41,' +
            '0.11 1.043,-0.457 1.187,0.683 0.127,1.134 0.3,0.3 1.8,0 0.3,' +
            '-0.299 0.127,-1.138 1.185,-0.682 1.046,0.458 0.409,-0.11 0.9,' +
            '-1.559 -0.11,-0.41 -0.92,-0.677 0,-1.366 0.92,-0.677 0.11,' +
            '-0.41 -0.9,-1.559 -0.409,-0.109 -1.046,0.458 -1.185,-0.682 ' +
            '-0.127,-1.138 -0.3,-0.299 -1.8,0 -0.3,0.3 -0.126,1.135 -1.187,' +
            '0.682 -1.043,-0.457 -0.41,0.11 -0.899,1.559 0.108,0.409z',
      },
      group);
  // Axle hole.
  dom.createSvgElement(
      Svg.CIRCLE,
      {'class': 'blocklyIconShape', 'r': '2.7', 'cx': '8', 'cy': '8'}, group);
};

/**
 * Clicking on the icon toggles if the mutator bubble is visible.
 * Disable if block is uneditable.
 * @param {!Event} e Mouse click event.
 * @protected
 * @override
 */
Mutator.prototype.iconClick_ = function(e) {
  if (this.block_.isEditable()) {
    Icon.prototype.iconClick_.call(this, e);
  }
};

/**
 * Create the editor for the mutator's bubble.
 * @return {!SVGElement} The top-level node of the editor.
 * @private
 */
Mutator.prototype.createEditor_ = function() {
  /* Create the editor.  Here's the markup that will be generated:
  <svg>
    [Workspace]
  </svg>
  */
  this.svgDialog_ = dom.createSvgElement(
      Svg.SVG, {'x': Bubble.BORDER_WIDTH, 'y': Bubble.BORDER_WIDTH}, null);
  // Convert the list of names into a list of XML objects for the flyout.
  let quarkXml;
  if (this.quarkNames_.length) {
    quarkXml = xml.createElement('xml');
    for (let i = 0, quarkName; (quarkName = this.quarkNames_[i]); i++) {
      const element = xml.createElement('block');
      element.setAttribute('type', quarkName);
      quarkXml.appendChild(element);
    }
  } else {
    quarkXml = null;
  }
  const workspaceOptions = new Options(
      /** @type {!BlocklyOptions} */
      ({
        // If you want to enable disabling, also remove the
        // event filter from workspaceChanged_ .
        'disable': false,
        'parentWorkspace': this.block_.workspace,
        'media': this.block_.workspace.options.pathToMedia,
        'rtl': this.block_.RTL,
        'horizontalLayout': false,
        'renderer': this.block_.workspace.options.renderer,
        'rendererOverrides': this.block_.workspace.options.rendererOverrides,
      }));
  workspaceOptions.toolboxPosition =
      this.block_.RTL ? toolbox.Position.RIGHT : toolbox.Position.LEFT;
  const hasFlyout = !!quarkXml;
  if (hasFlyout) {
    workspaceOptions.languageTree = toolbox.convertToolboxDefToJson(quarkXml);
  }
  this.workspace_ = new WorkspaceSvg(workspaceOptions);
  this.workspace_.isMutator = true;
  this.workspace_.addChangeListener(eventUtils.disableOrphans);

  // Mutator flyouts go inside the mutator workspace's <g> rather than in
  // a top level SVG. Instead of handling scale themselves, mutators
  // inherit scale from the parent workspace.
  // To fix this, scale needs to be applied at a different level in the DOM.
  const flyoutSvg = hasFlyout ? this.workspace_.addFlyout(Svg.G) : null;
  const background = this.workspace_.createDom('blocklyMutatorBackground');

  if (flyoutSvg) {
    // Insert the flyout after the <rect> but before the block canvas so that
    // the flyout is underneath in z-order.  This makes blocks layering during
    // dragging work properly.
    background.insertBefore(flyoutSvg, this.workspace_.svgBlockCanvas_);
  }
  this.svgDialog_.appendChild(background);

  return this.svgDialog_;
};

/**
 * Add or remove the UI indicating if this icon may be clicked or not.
 */
Mutator.prototype.updateEditable = function() {
  Mutator.superClass_.updateEditable.call(this);
  if (!this.block_.isInFlyout) {
    if (this.block_.isEditable()) {
      if (this.iconGroup_) {
        dom.removeClass(
            /** @type {!Element} */ (this.iconGroup_),
            'blocklyIconGroupReadonly');
      }
    } else {
      // Close any mutator bubble.  Icon is not clickable.
      this.setVisible(false);
      if (this.iconGroup_) {
        dom.addClass(
            /** @type {!Element} */ (this.iconGroup_),
            'blocklyIconGroupReadonly');
      }
    }
  }
};

/**
 * Resize the bubble to match the size of the workspace.
 * @private
 */
Mutator.prototype.resizeBubble_ = function() {
  const doubleBorderWidth = 2 * Bubble.BORDER_WIDTH;
  const workspaceSize = this.workspace_.getCanvas().getBBox();
  let width = workspaceSize.width + workspaceSize.x;
  let height = workspaceSize.height + doubleBorderWidth * 3;
  const flyout = this.workspace_.getFlyout();
  if (flyout) {
    const flyoutScrollMetrics =
        flyout.getWorkspace().getMetricsManager().getScrollMetrics();
    height = Math.max(height, flyoutScrollMetrics.height + 20);
    width += flyout.getWidth();
  }
  if (this.block_.RTL) {
    width = -workspaceSize.x;
  }
  width += doubleBorderWidth * 3;
  // Only resize if the size difference is significant.  Eliminates shuddering.
  if (Math.abs(this.workspaceWidth_ - width) > doubleBorderWidth ||
      Math.abs(this.workspaceHeight_ - height) > doubleBorderWidth) {
    // Record some layout information for workspace metrics.
    this.workspaceWidth_ = width;
    this.workspaceHeight_ = height;
    // Resize the bubble.
    this.bubble_.setBubbleSize(
        width + doubleBorderWidth, height + doubleBorderWidth);
    this.svgDialog_.setAttribute('width', this.workspaceWidth_);
    this.svgDialog_.setAttribute('height', this.workspaceHeight_);
    this.workspace_.setCachedParentSvgSize(
        this.workspaceWidth_, this.workspaceHeight_);
  }

  if (this.block_.RTL) {
    // Scroll the workspace to always left-align.
    const translation = 'translate(' + this.workspaceWidth_ + ',0)';
    this.workspace_.getCanvas().setAttribute('transform', translation);
  }
  this.workspace_.resize();
};

/**
 * A method handler for when the bubble is moved.
 * @private
 */
Mutator.prototype.onBubbleMove_ = function() {
  if (this.workspace_) {
    this.workspace_.recordDragTargets();
  }
};

/**
 * Show or hide the mutator bubble.
 * @param {boolean} visible True if the bubble should be visible.
 */
Mutator.prototype.setVisible = function(visible) {
  if (visible === this.isVisible()) {
    // No change.
    return;
  }
  eventUtils.fire(new (eventUtils.get(eventUtils.BUBBLE_OPEN))(
      this.block_, visible, 'mutator'));
  if (visible) {
    // Create the bubble.
    this.bubble_ = new Bubble(
        /** @type {!WorkspaceSvg} */ (this.block_.workspace),
        this.createEditor_(), this.block_.pathObject.svgPath,
        /** @type {!Coordinate} */ (this.iconXY_), null, null);
    // Expose this mutator's block's ID on its top-level SVG group.
    this.bubble_.setSvgId(this.block_.id);
    this.bubble_.registerMoveEvent(this.onBubbleMove_.bind(this));
    const tree = this.workspace_.options.languageTree;
    const flyout = this.workspace_.getFlyout();
    if (tree) {
      flyout.init(this.workspace_);
      flyout.show(tree);
    }

    this.rootBlock_ = this.block_.decompose(this.workspace_);
    const blocks = this.rootBlock_.getDescendants(false);
    for (let i = 0, child; (child = blocks[i]); i++) {
      child.render();
    }
    // The root block should not be draggable or deletable.
    this.rootBlock_.setMovable(false);
    this.rootBlock_.setDeletable(false);
    let margin;
    let x;
    if (flyout) {
      margin = flyout.CORNER_RADIUS * 2;
      x = this.rootBlock_.RTL ? flyout.getWidth() + margin : margin;
    } else {
      margin = 16;
      x = margin;
    }
    if (this.block_.RTL) {
      x = -x;
    }
    this.rootBlock_.moveBy(x, margin);
    // Save the initial connections, then listen for further changes.
    if (this.block_.saveConnections) {
      const thisMutator = this;
      const mutatorBlock =
          /** @type {{saveConnections: function(!Block)}} */ (this.block_);
      mutatorBlock.saveConnections(this.rootBlock_);
      this.sourceListener_ = function() {
        mutatorBlock.saveConnections(thisMutator.rootBlock_);
      };
      this.block_.workspace.addChangeListener(this.sourceListener_);
    }
    this.resizeBubble_();
    // When the mutator's workspace changes, update the source block.
    this.workspace_.addChangeListener(this.workspaceChanged_.bind(this));
    // Update the source block immediately after the bubble becomes visible.
    this.updateWorkspace_();
    this.applyColor();
  } else {
    // Dispose of the bubble.
    this.svgDialog_ = null;
    this.workspace_.dispose();
    this.workspace_ = null;
    this.rootBlock_ = null;
    this.bubble_.dispose();
    this.bubble_ = null;
    this.workspaceWidth_ = 0;
    this.workspaceHeight_ = 0;
    if (this.sourceListener_) {
      this.block_.workspace.removeChangeListener(this.sourceListener_);
      this.sourceListener_ = null;
    }
  }
};

/**
 * Fired whenever a change is made to the mutator's workspace.
 * @param {!Abstract} e Custom data for event.
 * @private
 */
Mutator.prototype.workspaceChanged_ = function(e) {
  if (!(e.isUiEvent ||
        (e.type === eventUtils.CHANGE && e.element === 'disabled') ||
        e.type === eventUtils.CREATE)) {
    this.updateWorkspace_();
  }
};

/**
 * Updates the source block when the mutator's blocks are changed.
 * Bump down any block that's too high.
 * @private
 */
Mutator.prototype.updateWorkspace_ = function() {
  if (!this.workspace_.isDragging()) {
    const blocks = this.workspace_.getTopBlocks(false);
    const MARGIN = 20;

    for (let b = 0, block; (block = blocks[b]); b++) {
      const blockXY = block.getRelativeToSurfaceXY();

      // Bump any block that's above the top back inside.
      if (blockXY.y < MARGIN) {
        block.moveBy(0, MARGIN - blockXY.y);
      }
      // Bump any block overlapping the flyout back inside.
      if (block.RTL) {
        let right = -MARGIN;
        const flyout = this.workspace_.getFlyout();
        if (flyout) {
          right -= flyout.getWidth();
        }
        if (blockXY.x > right) {
          block.moveBy(right - blockXY.x, 0);
        }
      } else if (blockXY.x < MARGIN) {
        block.moveBy(MARGIN - blockXY.x, 0);
      }
    }
  }

  // When the mutator's workspace changes, update the source block.
  if (this.rootBlock_.workspace === this.workspace_) {
    eventUtils.setGroup(true);
    const block = /** @type {!BlockSvg} */ (this.block_);
    const oldExtraState = BlockChange.getExtraBlockState_(block);

    // Switch off rendering while the source block is rebuilt.
    const savedRendered = block.rendered;
    // TODO(#4288): We should not be setting the rendered property to false.
    block.rendered = false;

    // Allow the source block to rebuild itself.
    block.compose(this.rootBlock_);
    // Restore rendering and show the changes.
    block.rendered = savedRendered;
    // Mutation may have added some elements that need initializing.
    block.initSvg();

    if (block.rendered) {
      block.render();
    }

    const newExtraState = BlockChange.getExtraBlockState_(block);
    if (oldExtraState !== newExtraState) {
      eventUtils.fire(new (eventUtils.get(eventUtils.BLOCK_CHANGE))(
          block, 'mutation', null, oldExtraState, newExtraState));
      // Ensure that any bump is part of this mutation's event group.
      const group = eventUtils.getGroup();
      setTimeout(function() {
        eventUtils.setGroup(group);
        block.bumpNeighbours();
        eventUtils.setGroup(false);
      }, internalConstants.BUMP_DELAY);
    }

    // Don't update the bubble until the drag has ended, to avoid moving blocks
    // under the cursor.
    if (!this.workspace_.isDragging()) {
      this.resizeBubble_();
    }
    eventUtils.setGroup(false);
  }
};

/**
 * Dispose of this mutator.
 */
Mutator.prototype.dispose = function() {
  this.block_.mutator = null;
  Icon.prototype.dispose.call(this);
};

/**
 * Update the styles on all blocks in the mutator.
 * @public
 */
Mutator.prototype.updateBlockStyle = function() {
  const ws = this.workspace_;

  if (ws && ws.getAllBlocks(false)) {
    const workspaceBlocks = ws.getAllBlocks(false);
    for (let i = 0, block; (block = workspaceBlocks[i]); i++) {
      block.setStyle(block.getStyleName());
    }

    const flyout = ws.getFlyout();
    if (flyout) {
      const flyoutBlocks = flyout.workspace_.getAllBlocks(false);
      for (let i = 0, block; (block = flyoutBlocks[i]); i++) {
        block.setStyle(block.getStyleName());
      }
    }
  }
};

/**
 * Reconnect an block to a mutated input.
 * @param {Connection} connectionChild Connection on child block.
 * @param {!Block} block Parent block.
 * @param {string} inputName Name of input on parent block.
 * @return {boolean} True iff a reconnection was made, false otherwise.
 */
Mutator.reconnect = function(connectionChild, block, inputName) {
  if (!connectionChild || !connectionChild.getSourceBlock().workspace) {
    return false;  // No connection or block has been deleted.
  }
  const connectionParent = block.getInput(inputName).connection;
  const currentParent = connectionChild.targetBlock();
  if ((!currentParent || currentParent === block) &&
      connectionParent.targetConnection !== connectionChild) {
    if (connectionParent.isConnected()) {
      // There's already something connected here.  Get rid of it.
      connectionParent.disconnect();
    }
    connectionParent.connect(connectionChild);
    return true;
  }
  return false;
};

/**
 * Get the parent workspace of a workspace that is inside a mutator, taking into
 * account whether it is a flyout.
 * @param {Workspace} workspace The workspace that is inside a mutator.
 * @return {?Workspace} The mutator's parent workspace or null.
 * @public
 */
Mutator.findParentWs = function(workspace) {
  let outerWs = null;
  if (workspace && workspace.options) {
    const parent = workspace.options.parentWorkspace;
    // If we were in a flyout in a mutator, need to go up two levels to find
    // the actual parent.
    if (workspace.isFlyout) {
      if (parent && parent.options) {
        outerWs = parent.options.parentWorkspace;
      }
    } else if (parent) {
      outerWs = parent;
    }
  }
  return outerWs;
};

exports.Mutator = Mutator;
