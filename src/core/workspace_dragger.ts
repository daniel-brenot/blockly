/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Methods for dragging a workspace visually.
 * @class
 */

import common from 'blockly/core/common';
import {Coordinate} from 'blockly/core/utils/coordinate';
import {WorkspaceSvg} from 'blockly/core/workspace_svg';


/**
 * Class for a workspace dragger.  It moves the workspace around when it is
 * being dragged by a mouse or touch.
 * Note that the workspace itself manages whether or not it has a drag surface
 * and how to do translations based on that.  This simply passes the right
 * commands based on events.
 * @param {!WorkspaceSvg} workspace The workspace to drag.
 * @constructor
 * @alias Blockly.WorkspaceDragger
 */
const WorkspaceDragger = function(workspace) {
  /**
   * @type {!WorkspaceSvg}
   * @private
   */
  this.workspace_ = workspace;

  /**
   * Whether horizontal scroll is enabled.
   * @type {boolean}
   * @private
   */
  this.horizontalScrollEnabled_ = this.workspace_.isMovableHorizontally();

  /**
   * Whether vertical scroll is enabled.
   * @type {boolean}
   * @private
   */
  this.verticalScrollEnabled_ = this.workspace_.isMovableVertically();

  /**
   * The scroll position of the workspace at the beginning of the drag.
   * Coordinate system: pixel coordinates.
   * @type {!Coordinate}
   * @protected
   */
  this.startScrollXY_ = new Coordinate(workspace.scrollX, workspace.scrollY);
};

/**
 * Sever all links from this object.
 * @package
 * @suppress {checkTypes}
 */
WorkspaceDragger.prototype.dispose = function() {
  this.workspace_ = null;
};

/**
 * Start dragging the workspace.
 * @package
 */
WorkspaceDragger.prototype.startDrag = function() {
  if (common.getSelected()) {
    common.getSelected().unselect();
  }
  this.workspace_.setupDragSurface();
};

/**
 * Finish dragging the workspace and put everything back where it belongs.
 * @param {!Coordinate} currentDragDeltaXY How far the pointer has
 *     moved from the position at the start of the drag, in pixel coordinates.
 * @package
 */
WorkspaceDragger.prototype.endDrag = function(currentDragDeltaXY) {
  // Make sure everything is up to date.
  this.drag(currentDragDeltaXY);
  this.workspace_.resetDragSurface();
};

/**
 * Move the workspace based on the most recent mouse movements.
 * @param {!Coordinate} currentDragDeltaXY How far the pointer has
 *     moved from the position at the start of the drag, in pixel coordinates.
 * @package
 */
WorkspaceDragger.prototype.drag = function(currentDragDeltaXY) {
  const newXY = Coordinate.sum(this.startScrollXY_, currentDragDeltaXY);

  if (this.horizontalScrollEnabled_ && this.verticalScrollEnabled_) {
    this.workspace_.scroll(newXY.x, newXY.y);
  } else if (this.horizontalScrollEnabled_) {
    this.workspace_.scroll(newXY.x, this.workspace_.scrollY);
  } else if (this.verticalScrollEnabled_) {
    this.workspace_.scroll(this.workspace_.scrollX, newXY.y);
  } else {
    throw new TypeError('Invalid state.');
  }
};

exports.WorkspaceDragger = WorkspaceDragger;
