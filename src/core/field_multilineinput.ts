/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Text Area field.
 * @class
 */

import Css from 'blockly/core/css';
import WidgetDiv from 'blockly/core/widgetdiv';
import aria from 'blockly/core/utils/aria';
import dom from 'blockly/core/utils/dom';
import fieldRegistry from 'blockly/core/field_registry';
import object from 'blockly/core/utils/object';
import parsing from 'blockly/core/utils/parsing';
import userAgent from 'blockly/core/utils/useragent';
import {FieldTextInput} from 'blockly/core/field_textinput';
import {Field} from 'blockly/core/field';
import {KeyCodes} from 'blockly/core/utils/keycodes';
import {Svg} from 'blockly/core/utils/svg';


/**
 * Class for an editable text area field.
 * @param {string=} opt_value The initial content of the field. Should cast to a
 *    string. Defaults to an empty string if null or undefined.
 * @param {Function=} opt_validator An optional function that is called
 *     to validate any constraints on what the user entered.  Takes the new
 *     text as an argument and returns either the accepted text, a replacement
 *     text, or null to abort the change.
 * @param {Object=} opt_config A map of options used to configure the field.
 *    See the [field creation documentation]{@link
 * https://developers.google.com/blockly/guides/create-custom-blocks/fields/built-in-fields/multiline-text-input#creation}
 *    for a list of properties this parameter supports.
 * @extends {FieldTextInput}
 * @constructor
 * @alias Blockly.FieldMultilineInput
 */
const FieldMultilineInput = function(opt_value, opt_validator, opt_config) {
  FieldMultilineInput.superClass_.constructor.call(
      this, opt_value, opt_validator, opt_config);

  /**
   * The SVG group element that will contain a text element for each text row
   *     when initialized.
   * @type {SVGGElement}
   */
  this.textGroup_ = null;

  /**
   * Defines the maximum number of lines of field.
   * If exceeded, scrolling functionality is enabled.
   * @type {number}
   * @protected
   */
  this.maxLines_ = Infinity;

  /**
   * Whether Y overflow is currently occurring.
   * @type {boolean}
   * @protected
   */
  this.isOverflowedY_ = false;
};
object.inherits(FieldMultilineInput, FieldTextInput);

/**
 * @override
 */
FieldMultilineInput.prototype.configure_ = function(config) {
  FieldMultilineInput.superClass_.configure_.call(this, config);
  config.maxLines && this.setMaxLines(config.maxLines);
};

/**
 * Construct a FieldMultilineInput from a JSON arg object,
 * dereferencing any string table references.
 * @param {!Object} options A JSON object with options (text, and spellcheck).
 * @return {!FieldMultilineInput} The new field instance.
 * @package
 * @nocollapse
 */
FieldMultilineInput.fromJson = function(options) {
  const text = parsing.replaceMessageReferences(options['text']);
  // `this` might be a subclass of FieldMultilineInput if that class doesn't
  // override the static fromJson method.
  return new this(text, undefined, options);
};

/**
 * Serializes this field's value to XML. Should only be called by Blockly.Xml.
 * @param {!Element} fieldElement The element to populate with info about the
 *    field's state.
 * @return {!Element} The element containing info about the field's state.
 * @package
 */
FieldMultilineInput.prototype.toXml = function(fieldElement) {
  // Replace '\n' characters with HTML-escaped equivalent '&#10'. This is
  // needed so the plain-text representation of the XML produced by
  // `Blockly.Xml.domToText` will appear on a single line (this is a limitation
  // of the plain-text format).
  fieldElement.textContent = this.getValue().replace(/\n/g, '&#10;');
  return fieldElement;
};

/**
 * Sets the field's value based on the given XML element. Should only be
 * called by Blockly.Xml.
 * @param {!Element} fieldElement The element containing info about the
 *    field's state.
 * @package
 */
FieldMultilineInput.prototype.fromXml = function(fieldElement) {
  this.setValue(fieldElement.textContent.replace(/&#10;/g, '\n'));
};

/**
 * Saves this field's value.
 * @return {*} The state of this field.
 * @package
 */
FieldMultilineInput.prototype.saveState = function() {
  const legacyState = this.saveLegacyState(FieldMultilineInput);
  if (legacyState !== null) {
    return legacyState;
  }
  return this.getValue();
};

/**
 * Sets the field's value based on the given state.
 * @param {*} state The state of the variable to assign to this variable field.
 * @override
 * @package
 */
FieldMultilineInput.prototype.loadState = function(state) {
  if (this.loadLegacyState(Field, state)) {
    return;
  }
  this.setValue(state);
};

/**
 * Create the block UI for this field.
 * @package
 */
FieldMultilineInput.prototype.initView = function() {
  this.createBorderRect_();
  this.textGroup_ = dom.createSvgElement(
      Svg.G, {
        'class': 'blocklyEditableText',
      },
      this.fieldGroup_);
};

/**
 * Get the text from this field as displayed on screen.  May differ from getText
 * due to ellipsis, and other formatting.
 * @return {string} Currently displayed text.
 * @protected
 * @override
 */
FieldMultilineInput.prototype.getDisplayText_ = function() {
  let textLines = this.getText();
  if (!textLines) {
    // Prevent the field from disappearing if empty.
    return Field.NBSP;
  }
  const lines = textLines.split('\n');
  textLines = '';
  const displayLinesNumber =
      this.isOverflowedY_ ? this.maxLines_ : lines.length;
  for (let i = 0; i < displayLinesNumber; i++) {
    let text = lines[i];
    if (text.length > this.maxDisplayLength) {
      // Truncate displayed string and add an ellipsis ('...').
      text = text.substring(0, this.maxDisplayLength - 4) + '...';
    } else if (this.isOverflowedY_ && i === displayLinesNumber - 1) {
      text = text.substring(0, text.length - 3) + '...';
    }
    // Replace whitespace with non-breaking spaces so the text doesn't collapse.
    text = text.replace(/\s/g, Field.NBSP);

    textLines += text;
    if (i !== displayLinesNumber - 1) {
      textLines += '\n';
    }
  }
  if (this.sourceBlock_.RTL) {
    // The SVG is LTR, force value to be RTL.
    textLines += '\u200F';
  }
  return textLines;
};

/**
 * Called by setValue if the text input is valid. Updates the value of the
 * field, and updates the text of the field if it is not currently being
 * edited (i.e. handled by the htmlInput_). Is being redefined here to update
 * overflow state of the field.
 * @param {*} newValue The value to be saved. The default validator guarantees
 * that this is a string.
 * @protected
 */
FieldMultilineInput.prototype.doValueUpdate_ = function(newValue) {
  FieldMultilineInput.superClass_.doValueUpdate_.call(this, newValue);
  this.isOverflowedY_ = this.value_.split('\n').length > this.maxLines_;
};

/**
 * Updates the text of the textElement.
 * @protected
 */
FieldMultilineInput.prototype.render_ = function() {
  // Remove all text group children.
  let currentChild;
  while ((currentChild = this.textGroup_.firstChild)) {
    this.textGroup_.removeChild(currentChild);
  }

  // Add in text elements into the group.
  const lines = this.getDisplayText_().split('\n');
  let y = 0;
  for (let i = 0; i < lines.length; i++) {
    const lineHeight = this.getConstants().FIELD_TEXT_HEIGHT +
        this.getConstants().FIELD_BORDER_RECT_Y_PADDING;
    const span = dom.createSvgElement(
        Svg.TEXT, {
          'class': 'blocklyText blocklyMultilineText',
          'x': this.getConstants().FIELD_BORDER_RECT_X_PADDING,
          'y': y + this.getConstants().FIELD_BORDER_RECT_Y_PADDING,
          'dy': this.getConstants().FIELD_TEXT_BASELINE,
        },
        this.textGroup_);
    span.appendChild(document.createTextNode(lines[i]));
    y += lineHeight;
  }

  if (this.isBeingEdited_) {
    const htmlInput = /** @type {!HTMLElement} */ (this.htmlInput_);
    if (this.isOverflowedY_) {
      dom.addClass(htmlInput, 'blocklyHtmlTextAreaInputOverflowedY');
    } else {
      dom.removeClass(htmlInput, 'blocklyHtmlTextAreaInputOverflowedY');
    }
  }

  this.updateSize_();

  if (this.isBeingEdited_) {
    if (this.sourceBlock_.RTL) {
      // in RTL, we need to let the browser reflow before resizing
      // in order to get the correct bounding box of the borderRect
      // avoiding issue #2777.
      setTimeout(this.resizeEditor_.bind(this), 0);
    } else {
      this.resizeEditor_();
    }
    const htmlInput = /** @type {!HTMLElement} */ (this.htmlInput_);
    if (!this.isTextValid_) {
      dom.addClass(htmlInput, 'blocklyInvalidInput');
      aria.setState(htmlInput, aria.State.INVALID, true);
    } else {
      dom.removeClass(htmlInput, 'blocklyInvalidInput');
      aria.setState(htmlInput, aria.State.INVALID, false);
    }
  }
};

/**
 * Updates the size of the field based on the text.
 * @protected
 */
FieldMultilineInput.prototype.updateSize_ = function() {
  const nodes = this.textGroup_.childNodes;
  let totalWidth = 0;
  let totalHeight = 0;
  for (let i = 0; i < nodes.length; i++) {
    const tspan = /** @type {!Element} */ (nodes[i]);
    const textWidth = dom.getTextWidth(tspan);
    if (textWidth > totalWidth) {
      totalWidth = textWidth;
    }
    totalHeight += this.getConstants().FIELD_TEXT_HEIGHT +
        (i > 0 ? this.getConstants().FIELD_BORDER_RECT_Y_PADDING : 0);
  }
  if (this.isBeingEdited_) {
    // The default width is based on the longest line in the display text,
    // but when it's being edited, width should be calculated based on the
    // absolute longest line, even if it would be truncated after editing.
    // Otherwise we would get wrong editor width when there are more
    // lines than this.maxLines_.
    const actualEditorLines = this.value_.split('\n');
    const dummyTextElement = dom.createSvgElement(
        Svg.TEXT, {'class': 'blocklyText blocklyMultilineText'});
    const fontSize = this.getConstants().FIELD_TEXT_FONTSIZE;
    const fontWeight = this.getConstants().FIELD_TEXT_FONTWEIGHT;
    const fontFamily = this.getConstants().FIELD_TEXT_FONTFAMILY;

    for (let i = 0; i < actualEditorLines.length; i++) {
      if (actualEditorLines[i].length > this.maxDisplayLength) {
        actualEditorLines[i] =
            actualEditorLines[i].substring(0, this.maxDisplayLength);
      }
      dummyTextElement.textContent = actualEditorLines[i];
      const lineWidth = dom.getFastTextWidth(
          dummyTextElement, fontSize, fontWeight, fontFamily);
      if (lineWidth > totalWidth) {
        totalWidth = lineWidth;
      }
    }

    const scrollbarWidth =
        this.htmlInput_.offsetWidth - this.htmlInput_.clientWidth;
    totalWidth += scrollbarWidth;
  }
  if (this.borderRect_) {
    totalHeight += this.getConstants().FIELD_BORDER_RECT_Y_PADDING * 2;
    totalWidth += this.getConstants().FIELD_BORDER_RECT_X_PADDING * 2;
    this.borderRect_.setAttribute('width', totalWidth);
    this.borderRect_.setAttribute('height', totalHeight);
  }
  this.size_.width = totalWidth;
  this.size_.height = totalHeight;

  this.positionBorderRect_();
};

/**
 * Show the inline free-text editor on top of the text.
 * Overrides the default behaviour to force rerender in order to
 * correct block size, based on editor text.
 * @param {Event=} _opt_e Optional mouse event that triggered the field to open,
 *     or undefined if triggered programmatically.
 * @param {boolean=} opt_quietInput True if editor should be created without
 *     focus.  Defaults to false.
 * @override
 */
FieldMultilineInput.prototype.showEditor_ = function(_opt_e, opt_quietInput) {
  FieldMultilineInput.superClass_.showEditor_.call(
      this, _opt_e, opt_quietInput);
  this.forceRerender();
};

/**
 * Create the text input editor widget.
 * @return {!HTMLTextAreaElement} The newly created text input editor.
 * @protected
 */
FieldMultilineInput.prototype.widgetCreate_ = function() {
  const div = WidgetDiv.getDiv();
  const scale = this.workspace_.getScale();

  const htmlInput =
      /** @type {HTMLTextAreaElement} */ (document.createElement('textarea'));
  htmlInput.className = 'blocklyHtmlInput blocklyHtmlTextAreaInput';
  htmlInput.setAttribute('spellcheck', this.spellcheck_);
  const fontSize = (this.getConstants().FIELD_TEXT_FONTSIZE * scale) + 'pt';
  div.style.fontSize = fontSize;
  htmlInput.style.fontSize = fontSize;
  const borderRadius = (FieldTextInput.BORDERRADIUS * scale) + 'px';
  htmlInput.style.borderRadius = borderRadius;
  const paddingX = this.getConstants().FIELD_BORDER_RECT_X_PADDING * scale;
  const paddingY = this.getConstants().FIELD_BORDER_RECT_Y_PADDING * scale / 2;
  htmlInput.style.padding =
      paddingY + 'px ' + paddingX + 'px ' + paddingY + 'px ' + paddingX + 'px';
  const lineHeight = this.getConstants().FIELD_TEXT_HEIGHT +
      this.getConstants().FIELD_BORDER_RECT_Y_PADDING;
  htmlInput.style.lineHeight = (lineHeight * scale) + 'px';

  div.appendChild(htmlInput);

  htmlInput.value = htmlInput.defaultValue = this.getEditorText_(this.value_);
  htmlInput.untypedDefaultValue_ = this.value_;
  htmlInput.oldValue_ = null;
  if (userAgent.GECKO) {
    // In FF, ensure the browser reflows before resizing to avoid issue #2777.
    setTimeout(this.resizeEditor_.bind(this), 0);
  } else {
    this.resizeEditor_();
  }

  this.bindInputEvents_(htmlInput);

  return htmlInput;
};

/**
 * Sets the maxLines config for this field.
 * @param {number} maxLines Defines the maximum number of lines allowed,
 *     before scrolling functionality is enabled.
 */
FieldMultilineInput.prototype.setMaxLines = function(maxLines) {
  if (typeof maxLines === 'number' && maxLines > 0 &&
      maxLines !== this.maxLines_) {
    this.maxLines_ = maxLines;
    this.forceRerender();
  }
};

/**
 * Returns the maxLines config of this field.
 * @return {number} The maxLines config value.
 */
FieldMultilineInput.prototype.getMaxLines = function() {
  return this.maxLines_;
};

/**
 * Handle key down to the editor. Override the text input definition of this
 * so as to not close the editor when enter is typed in.
 * @param {!Event} e Keyboard event.
 * @protected
 */
FieldMultilineInput.prototype.onHtmlInputKeyDown_ = function(e) {
  if (e.keyCode !== KeyCodes.ENTER) {
    FieldMultilineInput.superClass_.onHtmlInputKeyDown_.call(this, e);
  }
};

/**
 * CSS for multiline field.  See css.js for use.
 */
Css.register(`
  .blocklyHtmlTextAreaInput {
    font-family: monospace;
    resize: none;
    overflow: hidden;
    height: 100%;
    text-align: left;
  }

  .blocklyHtmlTextAreaInputOverflowedY {
    overflow-y: scroll;
  }
`);

fieldRegistry.register('field_multilinetext', FieldMultilineInput);

exports.FieldMultilineInput = FieldMultilineInput;
