/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * XML element manipulation.
 * These methods are not specific to Blockly, and could be factored out into
 * a JavaScript framework such as Closure.
 * @namespace Blockly.utils.xml
 */

import {globalThis} from 'blockly/core/utils/global';


/**
 * Namespace for Blockly's XML.
 * @alias Blockly.utils.xml.NAME_SPACE
 */
const NAME_SPACE = 'https://developers.google.com/blockly/xml';
exports.NAME_SPACE = NAME_SPACE;

/**
 * The Document object to use.  By default this is just document, but
 * the Node.js build of Blockly (see scripts/package/node/core.js)
 * calls setDocument to supply a Document implementation from the
 * jsdom package instead.
 * @type {!Document}
 */
let xmlDocument = globalThis['document'];

/**
 * Get the document object to use for XML serialization.
 * @return {!Document} The document object.
 * @alias Blockly.utils.xml.getDocument
 */
export function getDocument() {
  return xmlDocument;
}

/**
 * Get the document object to use for XML serialization.
 * @param {!Document} document The document object to use.
 * @alias Blockly.utils.xml.setDocument
 */
export function setDocument(document) {
  xmlDocument = document;
}

/**
 * Create DOM element for XML.
 * @param {string} tagName Name of DOM element.
 * @return {!Element} New DOM element.
 * @alias Blockly.utils.xml.createElement
 */
export function createElement(tagName) {
  return xmlDocument.createElementNS(NAME_SPACE, tagName);
}

/**
 * Create text element for XML.
 * @param {string} text Text content.
 * @return {!Text} New DOM text node.
 * @alias Blockly.utils.xml.createTextNode
 */
export function createTextNode(text) {
  return xmlDocument.createTextNode(text);
}

/**
 * Converts an XML string into a DOM tree.
 * @param {string} text XML string.
 * @return {Document} The DOM document.
 * @throws if XML doesn't parse.
 * @alias Blockly.utils.xml.textToDomDocument
 */
export function textToDomDocument(text) {
  const oParser = new DOMParser();
  return oParser.parseFromString(text, 'text/xml');
}

/**
 * Converts a DOM structure into plain text.
 * Currently the text format is fairly ugly: all one line with no whitespace.
 * @param {!Node} dom A tree of XML nodes.
 * @return {string} Text representation.
 * @alias Blockly.utils.xml.domToText
 */
export function domToText(dom) {
  const oSerializer = new XMLSerializer();
  return oSerializer.serializeToString(dom);
}