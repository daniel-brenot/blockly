/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * A separator used for separating toolbox categories.
 * @class
 */
goog.module('blockly/core/toolbox/separator');

import Css from 'blockly/core/css';
import dom from 'blockly/core/utils/dom';
import object from 'blockly/core/utils/object';
import registry from 'blockly/core/registry';
import toolbox from 'blockly/core/utils/toolbox';
import {IToolbox} from 'blockly/core/interfaces/i_toolbox';
import {ToolboxItem} from 'blockly/core/toolbox/toolbox_item';


/**
 * Class for a toolbox separator. This is the thin visual line that appears on
 * the toolbox. This item is not interactable.
 * @param {!toolbox.SeparatorInfo} separatorDef The information
 *     needed to create a separator.
 * @param {!IToolbox} toolbox The parent toolbox for the separator.
 * @constructor
 * @extends {ToolboxItem}
 * @alias Blockly.ToolboxSeparator
 */
const ToolboxSeparator = function(separatorDef, toolbox) {
  ToolboxSeparator.superClass_.constructor.call(this, separatorDef, toolbox);
  /**
   * All the CSS class names that are used to create a separator.
   * @type {!ToolboxSeparator.CssConfig}
   * @protected
   */
  this.cssConfig_ = {'container': 'blocklyTreeSeparator'};

  const cssConfig = separatorDef['cssconfig'] || separatorDef['cssConfig'];
  object.mixin(this.cssConfig_, cssConfig);
};
object.inherits(ToolboxSeparator, ToolboxItem);

/**
 * All the CSS class names that are used to create a separator.
 * @typedef {{
 *            container:(string|undefined)
 *          }}
 */
ToolboxSeparator.CssConfig;

/**
 * Name used for registering a toolbox separator.
 * @const {string}
 */
ToolboxSeparator.registrationName = 'sep';

/**
 * @override
 */
ToolboxSeparator.prototype.init = function() {
  this.createDom_();
};

/**
 * Creates the DOM for a separator.
 * @return {!Element} The parent element for the separator.
 * @protected
 */
ToolboxSeparator.prototype.createDom_ = function() {
  const container = document.createElement('div');
  dom.addClass(container, this.cssConfig_['container']);
  this.htmlDiv_ = container;
  return container;
};

/**
 * @override
 */
ToolboxSeparator.prototype.getDiv = function() {
  return this.htmlDiv_;
};

/**
 * @override
 */
ToolboxSeparator.prototype.dispose = function() {
  dom.removeNode(this.htmlDiv_);
};

/**
 * CSS for Toolbox.  See css.js for use.
 */
Css.register(`
  .blocklyTreeSeparator {
    border-bottom: solid #e5e5e5 1px;
    height: 0;
    margin: 5px 0;
  }

  .blocklyToolboxDiv[layout="h"] .blocklyTreeSeparator {
    border-right: solid #e5e5e5 1px;
    border-bottom: none;
    height: auto;
    margin: 0 5px 0 5px;
    padding: 5px 0;
    width: 0;
  }
`);

registry.register(
    registry.Type.TOOLBOX_ITEM, ToolboxSeparator.registrationName,
    ToolboxSeparator);

exports.ToolboxSeparator = ToolboxSeparator;
