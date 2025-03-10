/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * An object that provides constants for rendering blocks in Geras
 * mode.
 * @class
 */

import object from 'blockly/core/utils/object';
import {ConstantProvider: BaseConstantProvider} from 'blockly/core/renderers/common/constants';


/**
 * An object that provides constants for rendering blocks in Geras mode.
 * @constructor
 * @package
 * @extends {BaseConstantProvider}
 * @alias Blockly.geras.ConstantProvider
 */
const ConstantProvider = function() {
  ConstantProvider.superClass_.constructor.call(this);

  /**
   * @override
   */
  this.FIELD_TEXT_BASELINE_CENTER = false;

  // The dark/shadow path in classic rendering is the same as the normal block
  // path, but translated down one and right one.
  this.DARK_PATH_OFFSET = 1;

  /**
   * The maximum width of a bottom row that follows a statement input and has
   * inputs inline.
   * @type {number}
   */
  this.MAX_BOTTOM_WIDTH = 30;

  /**
   * @override
   */
  this.STATEMENT_BOTTOM_SPACER = -this.NOTCH_HEIGHT / 2;
};
object.inherits(ConstantProvider, BaseConstantProvider);


/**
 * @override
 */
ConstantProvider.prototype.getCSS_ = function(selector) {
  return ConstantProvider.superClass_.getCSS_.call(this, selector).concat([
    /* eslint-disable indent */
    // Insertion marker.
    selector + ' .blocklyInsertionMarker>.blocklyPathLight,',
    selector + ' .blocklyInsertionMarker>.blocklyPathDark {',
    'fill-opacity: ' + this.INSERTION_MARKER_OPACITY + ';', 'stroke: none;',
    '}',
    /* eslint-enable indent */
  ]);
};

exports.ConstantProvider = ConstantProvider;
