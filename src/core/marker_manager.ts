/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Object in charge of managing markers and the cursor.
 * @class
 */

import {Cursor} from 'blockly/core/keyboard_nav/cursor';
import {Marker} from 'blockly/core/keyboard_nav/marker';
import {WorkspaceSvg} from 'blockly/core/workspace_svg';


/**
 * Class to manage the multiple markers and the cursor on a workspace.
 * @param {!WorkspaceSvg} workspace The workspace for the marker manager.
 * @constructor
 * @alias Blockly.MarkerManager
 * @package
 */
const MarkerManager = function(workspace) {
  /**
   * The cursor.
   * @type {?Cursor}
   * @private
   */
  this.cursor_ = null;

  /**
   * The cursor's SVG element.
   * @type {?SVGElement}
   * @private
   */
  this.cursorSvg_ = null;

  /**
   * The map of markers for the workspace.
   * @type {!Object<string, !Marker>}
   * @private
   */
  this.markers_ = Object.create(null);

  /**
   * The workspace this marker manager is associated with.
   * @type {!WorkspaceSvg}
   * @private
   */
  this.workspace_ = workspace;
};

/**
 * The name of the local marker.
 * @type {string}
 * @const
 */
MarkerManager.LOCAL_MARKER = 'local_marker_1';

/**
 * Register the marker by adding it to the map of markers.
 * @param {string} id A unique identifier for the marker.
 * @param {!Marker} marker The marker to register.
 */
MarkerManager.prototype.registerMarker = function(id, marker) {
  if (this.markers_[id]) {
    this.unregisterMarker(id);
  }
  marker.setDrawer(
      this.workspace_.getRenderer().makeMarkerDrawer(this.workspace_, marker));
  this.setMarkerSvg(marker.getDrawer().createDom());
  this.markers_[id] = marker;
};

/**
 * Unregister the marker by removing it from the map of markers.
 * @param {string} id The ID of the marker to unregister.
 */
MarkerManager.prototype.unregisterMarker = function(id) {
  const marker = this.markers_[id];
  if (marker) {
    marker.dispose();
    delete this.markers_[id];
  } else {
    throw Error(
        'Marker with ID ' + id + ' does not exist. ' +
        'Can only unregister markers that exist.');
  }
};

/**
 * Get the cursor for the workspace.
 * @return {?Cursor} The cursor for this workspace.
 */
MarkerManager.prototype.getCursor = function() {
  return this.cursor_;
};

/**
 * Get a single marker that corresponds to the given ID.
 * @param {string} id A unique identifier for the marker.
 * @return {?Marker} The marker that corresponds to the given ID,
 *     or null if none exists.
 */
MarkerManager.prototype.getMarker = function(id) {
  return this.markers_[id] || null;
};

/**
 * Sets the cursor and initializes the drawer for use with keyboard navigation.
 * @param {Cursor} cursor The cursor used to move around this workspace.
 */
MarkerManager.prototype.setCursor = function(cursor) {
  if (this.cursor_ && this.cursor_.getDrawer()) {
    this.cursor_.getDrawer().dispose();
  }
  this.cursor_ = cursor;
  if (this.cursor_) {
    const drawer = this.workspace_.getRenderer().makeMarkerDrawer(
        this.workspace_, this.cursor_);
    this.cursor_.setDrawer(drawer);
    this.setCursorSvg(this.cursor_.getDrawer().createDom());
  }
};

/**
 * Add the cursor SVG to this workspace SVG group.
 * @param {?SVGElement} cursorSvg The SVG root of the cursor to be added to the
 *     workspace SVG group.
 * @package
 */
MarkerManager.prototype.setCursorSvg = function(cursorSvg) {
  if (!cursorSvg) {
    this.cursorSvg_ = null;
    return;
  }

  this.workspace_.getBlockCanvas().appendChild(cursorSvg);
  this.cursorSvg_ = cursorSvg;
};

/**
 * Add the marker SVG to this workspaces SVG group.
 * @param {?SVGElement} markerSvg The SVG root of the marker to be added to the
 *     workspace SVG group.
 * @package
 */
MarkerManager.prototype.setMarkerSvg = function(markerSvg) {
  if (!markerSvg) {
    this.markerSvg_ = null;
    return;
  }

  if (this.workspace_.getBlockCanvas()) {
    if (this.cursorSvg_) {
      this.workspace_.getBlockCanvas().insertBefore(markerSvg, this.cursorSvg_);
    } else {
      this.workspace_.getBlockCanvas().appendChild(markerSvg);
    }
  }
};

/**
 * Redraw the attached cursor SVG if needed.
 * @package
 */
MarkerManager.prototype.updateMarkers = function() {
  if (this.workspace_.keyboardAccessibilityMode && this.cursorSvg_) {
    this.workspace_.getCursor().draw();
  }
};

/**
 * Dispose of the marker manager.
 * Go through and delete all markers associated with this marker manager.
 * @suppress {checkTypes}
 * @package
 */
MarkerManager.prototype.dispose = function() {
  const markerIds = Object.keys(this.markers_);
  for (let i = 0, markerId; (markerId = markerIds[i]); i++) {
    this.unregisterMarker(markerId);
  }
  this.markers_ = null;
  if (this.cursor_) {
    this.cursor_.dispose();
    this.cursor_ = null;
  }
};

exports.MarkerManager = MarkerManager;
