/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview The interface for a positionable UI element.
 */



/**
 * The interface for a positionable UI element.
 * @namespace Blockly.IPositionable
 */

import {IComponent} from 'blockly/core/interfaces/i_component';
import {MetricsManager} from 'blockly/core/metrics_manager';
import {Rect} from 'blockly/core/utils/rect';


/**
 * Interface for a component that is positioned on top of the workspace.
 * @extends {IComponent}
 * @interface
 * @alias Blockly.IPositionable
 */
const IPositionable = function() {};

/**
 * Positions the element. Called when the window is resized.
 * @param {!MetricsManager.UiMetrics} metrics The workspace metrics.
 * @param {!Array<!Rect>} savedPositions List of rectangles that
 *     are already on the workspace.
 */
IPositionable.prototype.position;

/**
 * Returns the bounding rectangle of the UI element in pixel units relative to
 * the Blockly injection div.
 * @return {?Rect} The UI elements's bounding box. Null if
 *   bounding box should be ignored by other UI elements.
 */
IPositionable.prototype.getBoundingRectangle;

exports.IPositionable = IPositionable;
