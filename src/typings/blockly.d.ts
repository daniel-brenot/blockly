declare module "utils/idgenerator" {
    namespace internal {
        /**
         * Generate a random unique ID.  This should be globally unique.
         * 87 characters ^ 20 length > 128 bits (better than a UUID).
         * @return {string} A globally unique ID string.
         */
        function genUid(): string;
    }
    /**
     * Generate the next unique element IDs.
     * IDs are compatible with the HTML4 id attribute restrictions:
     * Use only ASCII letters, digits, '_', '-' and '.'
     *
     * For UUIDs use genUid (below) instead; this ID generator should
     * primarily be used for IDs that end up in the DOM.
     *
     * @return {string} The next unique identifier.
     * @alias Blockly.utils.idGenerator.getNextUniqueId
     */
    export function getNextUniqueId(): string;
    /**
     * Generate a random unique ID.
     * @see internal.genUid
     * @return {string} A globally unique ID string.
     * @alias Blockly.utils.idGenerator.genUid
     */
    export function genUid(): string;
    export { internal as TEST_ONLY };
}
declare module "utils/object" {
    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * @fileoverview Utility methods for objects.
     */
    /**
     * Utility methods for objects.
     * @namespace Blockly.utils.object
     */
    /**
     * Inherit the prototype methods from one constructor into another.
     * @param {!Function} childCtor Child class.
     * @param {!Function} parentCtor Parent class.
     * @suppress {strictMissingProperties} superClass_ is not defined on Function.
     * @alias Blockly.utils.object.inherits
     */
    export function inherits(childCtor: Function, parentCtor: Function): void;
    /**
     * Copies all the members of a source object to a target object.
     * @param {!Object} target Target.
     * @param {!Object} source Source.
     * @alias Blockly.utils.object.mixin
     */
    export function mixin(target: any, source: any): void;
    /**
     * Complete a deep merge of all members of a source object with a target object.
     * @param {!Object} target Target.
     * @param {!Object} source Source.
     * @return {!Object} The resulting object.
     * @alias Blockly.utils.object.deepMerge
     */
    export function deepMerge(target: any, source: any): any;
    /**
     * Returns an array of a given object's own enumerable property values.
     * @param {!Object} obj Object containing values.
     * @return {!Array} Array of values.
     * @alias Blockly.utils.object.values
     */
    export function values(obj: any): any[];
}
declare module "connection_type" {
    /**
     * *
     */
    export type ConnectionType = number;
    export namespace ConnectionType {
        const INPUT_VALUE: number;
        const OUTPUT_VALUE: number;
        const NEXT_STATEMENT: number;
        const PREVIOUS_STATEMENT: number;
    }
}
declare module "utils/global" {
    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * @fileoverview Provides a reference to the global object.
     */
    /**
     * Provides a reference to the global object.
     * @namespace Blockly.utils.global
     */
    /**
     * Reference to the global object.
     *
     * More info on this implementation here:
     * https://docs.google.com/document/d/1NAeW4Wk7I7FV0Y2tcUFvQdGMc89k2vdgSXInw8_nvCI
     */
    export const globalThis: any;
}
declare module "utils/useragent" {
    /**
     * The raw useragent string.
     * @type {string}
     */
    let rawUserAgent: string;
    /** @type {boolean} */
    let isIe: boolean;
    /** @type {boolean} */
    let isEdge: boolean;
    /** @type {boolean} */
    let isJavaFx: boolean;
    /** @type {boolean} */
    let isChrome: boolean;
    /** @type {boolean} */
    let isWebKit: boolean;
    /** @type {boolean} */
    let isGecko: boolean;
    /** @type {boolean} */
    let isAndroid: boolean;
    /** @type {boolean} */
    let isIPad: boolean;
    /** @type {boolean} */
    let isIPod: boolean;
    /** @type {boolean} */
    let isIPhone: boolean;
    /** @type {boolean} */
    let isMac: boolean;
    /** @type {boolean} */
    let isTablet: boolean;
    /** @type {boolean} */
    let isMobile: boolean;
    export { rawUserAgent as raw, isIe as IE, isEdge as EDGE, isJavaFx as JavaFx, isChrome as CHROME, isWebKit as WEBKIT, isGecko as GECKO, isAndroid as ANDROID, isIPad as IPAD, isIPod as IPOD, isIPhone as IPHONE, isMac as MAC, isTablet as TABLET, isMobile as MOBILE };
}
declare module "utils/svg" {
    /**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * @fileoverview Defines the Svg class. Its constants enumerate
     * all SVG tag names used by Blockly.
     */
    /**
     * Defines the Svg class. Its constants enumerate
     * all SVG tag names used by Blockly.
     * @class
     */
    /**
     * A name with the type of the SVG element stored in the generic.
     * @param {string} tagName The SVG element tag name.
     * @constructor
     * @template T
     * @private
     * @alias Blockly.utils.Svg
     */
    export class Svg<T> {
        constructor(tagName: any);
        /**
         * @type {string}
         * @private
         */
        private tagName_;
        /**
         * Returns the SVG element tag name.
         * @return {string} The name.
         * @override
         */
        toString(): string;
    }
    export namespace Svg {
        const ANIMATE: Svg<SVGAnimateElement>;
        const CIRCLE: Svg<SVGCircleElement>;
        const CLIPPATH: Svg<SVGClipPathElement>;
        const DEFS: Svg<SVGDefsElement>;
        const FECOMPOSITE: Svg<SVGFECompositeElement>;
        const FECOMPONENTTRANSFER: Svg<SVGFEComponentTransferElement>;
        const FEFLOOD: Svg<SVGFEFloodElement>;
        const FEFUNCA: Svg<SVGFEFuncAElement>;
        const FEGAUSSIANBLUR: Svg<SVGFEGaussianBlurElement>;
        const FEPOINTLIGHT: Svg<SVGFEPointLightElement>;
        const FESPECULARLIGHTING: Svg<SVGFESpecularLightingElement>;
        const FILTER: Svg<SVGFilterElement>;
        const FOREIGNOBJECT: Svg<SVGForeignObjectElement>;
        const G: Svg<SVGGElement>;
        const IMAGE: Svg<SVGImageElement>;
        const LINE: Svg<SVGLineElement>;
        const PATH: Svg<SVGPathElement>;
        const PATTERN: Svg<SVGPatternElement>;
        const POLYGON: Svg<SVGPolygonElement>;
        const RECT: Svg<SVGRectElement>;
        const SVG: Svg<SVGSVGElement>;
        const TEXT: Svg<SVGTextElement>;
        const TSPAN: Svg<SVGTSpanElement>;
    }
}
declare module "utils/dom" {
    /**
     * Required name space for SVG elements.
     * @const
     * @alias Blockly.utils.dom.SVG_NS
     */
    export const SVG_NS: "http://www.w3.org/2000/svg";
    /**
     * Required name space for HTML elements.
     * @const
     * @alias Blockly.utils.dom.HTML_NS
     */
    export const HTML_NS: "http://www.w3.org/1999/xhtml";
    /**
     * Required name space for XLINK elements.
     * @const
     * @alias Blockly.utils.dom.XLINK_NS
     */
    export const XLINK_NS: "http://www.w3.org/1999/xlink";
    /**
     * *
     */
    export type NodeType = number;
    export namespace NodeType {
        const ELEMENT_NODE: number;
        const TEXT_NODE: number;
        const COMMENT_NODE: number;
        const DOCUMENT_POSITION_CONTAINED_BY: number;
    }
    /**
     * Helper method for creating SVG elements.
     * @param {string|Svg<T>} name Element's tag name.
     * @param {!Object} attrs Dictionary of attribute names and values.
     * @param {Element=} opt_parent Optional parent on which to append the element.
     * @return {T} Newly created SVG element.  The return type is {!SVGElement} if
     *     name is a string or a more specific type if it a member of Svg.
     * @template T
     * @alias Blockly.utils.dom.createSvgElement
     */
    export function createSvgElement<T>(name: string | Svg<T>, attrs: any, opt_parent?: Element | undefined): T;
    /**
     * Add a CSS class to a element.
     * Similar to Closure's goog.dom.classes.add, except it handles SVG elements.
     * @param {!Element} element DOM element to add class to.
     * @param {string} className Name of class to add.
     * @return {boolean} True if class was added, false if already present.
     * @alias Blockly.utils.dom.addClass
     */
    export function addClass(element: Element, className: string): boolean;
    /**
     * Removes multiple calsses from an element.
     * @param {!Element} element DOM element to remove classes from.
     * @param {string} classNames A string of one or multiple class names for an
     *    element.
     * @alias Blockly.utils.dom.removeClasses
     */
    export function removeClasses(element: Element, classNames: string): void;
    /**
     * Remove a CSS class from a element.
     * Similar to Closure's goog.dom.classes.remove, except it handles SVG elements.
     * @param {!Element} element DOM element to remove class from.
     * @param {string} className Name of class to remove.
     * @return {boolean} True if class was removed, false if never present.
     * @alias Blockly.utils.dom.removeClass
     */
    export function removeClass(element: Element, className: string): boolean;
    /**
     * Checks if an element has the specified CSS class.
     * Similar to Closure's goog.dom.classes.has, except it handles SVG elements.
     * @param {!Element} element DOM element to check.
     * @param {string} className Name of class to check.
     * @return {boolean} True if class exists, false otherwise.
     * @alias Blockly.utils.dom.hasClass
     */
    export function hasClass(element: Element, className: string): boolean;
    /**
     * Removes a node from its parent. No-op if not attached to a parent.
     * @param {?Node} node The node to remove.
     * @return {?Node} The node removed if removed; else, null.
     * @alias Blockly.utils.dom.removeNode
     */
    export function removeNode(node: Node | null): Node | null;
    /**
     * Insert a node after a reference node.
     * Contrast with node.insertBefore function.
     * @param {!Element} newNode New element to insert.
     * @param {!Element} refNode Existing element to precede new node.
     * @alias Blockly.utils.dom.insertAfter
     */
    export function insertAfter(newNode: Element, refNode: Element): void;
    /**
     * Whether a node contains another node.
     * @param {!Node} parent The node that should contain the other node.
     * @param {!Node} descendant The node to test presence of.
     * @return {boolean} Whether the parent node contains the descendant node.
     * @alias Blockly.utils.dom.containsNode
     */
    export function containsNode(parent: Node, descendant: Node): boolean;
    /**
     * Sets the CSS transform property on an element. This function sets the
     * non-vendor-prefixed and vendor-prefixed versions for backwards compatibility
     * with older browsers. See https://caniuse.com/#feat=transforms2d
     * @param {!Element} element Element to which the CSS transform will be applied.
     * @param {string} transform The value of the CSS `transform` property.
     * @alias Blockly.utils.dom.setCssTransform
     */
    export function setCssTransform(element: Element, transform: string): void;
    /**
     * Start caching text widths. Every call to this function MUST also call
     * stopTextWidthCache. Caches must not survive between execution threads.
     * @alias Blockly.utils.dom.startTextWidthCache
     */
    export function startTextWidthCache(): void;
    /**
     * Stop caching field widths. Unless caching was already on when the
     * corresponding call to startTextWidthCache was made.
     * @alias Blockly.utils.dom.stopTextWidthCache
     */
    export function stopTextWidthCache(): void;
    /**
     * Gets the width of a text element, caching it in the process.
     * @param {!Element} textElement An SVG 'text' element.
     * @return {number} Width of element.
     * @alias Blockly.utils.dom.getTextWidth
     */
    export function getTextWidth(textElement: Element): number;
    /**
     * Gets the width of a text element using a faster method than `getTextWidth`.
     * This method requires that we know the text element's font family and size in
     * advance. Similar to `getTextWidth`, we cache the width we compute.
     * @param {!Element} textElement An SVG 'text' element.
     * @param {number} fontSize The font size to use.
     * @param {string} fontWeight The font weight to use.
     * @param {string} fontFamily The font family to use.
     * @return {number} Width of element.
     * @alias Blockly.utils.dom.getFastTextWidth
     */
    export function getFastTextWidth(textElement: Element, fontSize: number, fontWeight: string, fontFamily: string): number;
    /**
     * Gets the width of a text element using a faster method than `getTextWidth`.
     * This method requires that we know the text element's font family and size in
     * advance. Similar to `getTextWidth`, we cache the width we compute.
     * This method is similar to ``getFastTextWidth`` but expects the font size
     * parameter to be a string.
     * @param {!Element} textElement An SVG 'text' element.
     * @param {string} fontSize The font size to use.
     * @param {string} fontWeight The font weight to use.
     * @param {string} fontFamily The font family to use.
     * @return {number} Width of element.
     * @alias Blockly.utils.dom.getFastTextWidthWithSizeString
     */
    export function getFastTextWidthWithSizeString(textElement: Element, fontSize: string, fontWeight: string, fontFamily: string): number;
    /**
     * Measure a font's metrics. The height and baseline values.
     * @param {string} text Text to measure the font dimensions of.
     * @param {string} fontSize The font size to use.
     * @param {string} fontWeight The font weight to use.
     * @param {string} fontFamily The font family to use.
     * @return {{height: number, baseline: number}} Font measurements.
     * @alias Blockly.utils.dom.measureFontMetrics
     */
    export function measureFontMetrics(text: string, fontSize: string, fontWeight: string, fontFamily: string): {
        height: number;
        baseline: number;
    };
    import { Svg } from "utils/svg";
}
declare module "utils/xml" {
    /**
     * Namespace for Blockly's XML.
     * @alias Blockly.utils.xml.NAME_SPACE
     */
    export const NAME_SPACE: "https://developers.google.com/blockly/xml";
    /**
     * Get the document object to use for XML serialization.
     * @return {!Document} The document object.
     * @alias Blockly.utils.xml.getDocument
     */
    export function getDocument(): Document;
    /**
     * Get the document object to use for XML serialization.
     * @param {!Document} document The document object to use.
     * @alias Blockly.utils.xml.setDocument
     */
    export function setDocument(document: Document): void;
    /**
     * Create DOM element for XML.
     * @param {string} tagName Name of DOM element.
     * @return {!Element} New DOM element.
     * @alias Blockly.utils.xml.createElement
     */
    export function createElement(tagName: string): Element;
    /**
     * Create text element for XML.
     * @param {string} text Text content.
     * @return {!Text} New DOM text node.
     * @alias Blockly.utils.xml.createTextNode
     */
    export function createTextNode(text: string): Text;
    /**
     * Converts an XML string into a DOM tree.
     * @param {string} text XML string.
     * @return {Document} The DOM document.
     * @throws if XML doesn't parse.
     * @alias Blockly.utils.xml.textToDomDocument
     */
    export function textToDomDocument(text: string): Document;
    /**
     * Converts a DOM structure into plain text.
     * Currently the text format is fairly ugly: all one line with no whitespace.
     * @param {!Node} dom A tree of XML nodes.
     * @return {string} Text representation.
     * @alias Blockly.utils.xml.domToText
     */
    export function domToText(dom: Node): string;
}
declare module "utils/string" {
    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * @fileoverview Utility methods for string manipulation.
     * These methods are not specific to Blockly, and could be factored out into
     * a JavaScript framework such as Closure.
     */
    /**
     * Utility methods for string manipulation.
     * These methods are not specific to Blockly, and could be factored out into
     * a JavaScript framework such as Closure.
     * @namespace Blockly.utils.string
     */
    /**
     * Fast prefix-checker.
     * Copied from Closure's goog.string.startsWith.
     * @param {string} str The string to check.
     * @param {string} prefix A string to look for at the start of `str`.
     * @return {boolean} True if `str` begins with `prefix`.
     * @alias Blockly.utils.string.startsWith
     */
    export function startsWith(str: string, prefix: string): boolean;
    /**
     * Given an array of strings, return the length of the shortest one.
     * @param {!Array<string>} array Array of strings.
     * @return {number} Length of shortest string.
     * @alias Blockly.utils.string.shortestStringLength
     */
    export function shortestStringLength(array: Array<string>): number;
    /**
     * Given an array of strings, return the length of the common prefix.
     * Words may not be split.  Any space after a word is included in the length.
     * @param {!Array<string>} array Array of strings.
     * @param {number=} opt_shortest Length of shortest string.
     * @return {number} Length of common prefix.
     * @alias Blockly.utils.string.commonWordPrefix
     */
    export function commonWordPrefix(array: Array<string>, opt_shortest?: number | undefined): number;
    /**
     * Given an array of strings, return the length of the common suffix.
     * Words may not be split.  Any space after a word is included in the length.
     * @param {!Array<string>} array Array of strings.
     * @param {number=} opt_shortest Length of shortest string.
     * @return {number} Length of common suffix.
     * @alias Blockly.utils.string.commonWordSuffix
     */
    export function commonWordSuffix(array: Array<string>, opt_shortest?: number | undefined): number;
    /**
     * Wrap text to the specified width.
     * @param {string} text Text to wrap.
     * @param {number} limit Width to wrap each line.
     * @return {string} Wrapped text.
     * @alias Blockly.utils.string.wrap
     */
    export function wrap(text: string, limit: number): string;
    /**
     * Is the given string a number (includes negative and decimals).
     * @param {string} str Input string.
     * @return {boolean} True if number, false otherwise.
     * @alias Blockly.utils.string.isNumber
     */
    export function isNumber(str: string): boolean;
}
declare module "internal_constants" {
    /**
     * The multiplier for scroll wheel deltas using the line delta mode.
     * @type {number}
     * @alias Blockly.internalConstants.LINE_MODE_MULTIPLIER
     */
    export const LINE_MODE_MULTIPLIER: number;
    /**
     * The multiplier for scroll wheel deltas using the page delta mode.
     * @type {number}
     * @alias Blockly.internalConstants.PAGE_MODE_MULTIPLIER
     */
    export const PAGE_MODE_MULTIPLIER: number;
    /**
     * Number of pixels the mouse must move before a drag starts.
     * @alias Blockly.internalConstants.DRAG_RADIUS
     */
    export const DRAG_RADIUS: 5;
    /**
     * Number of pixels the mouse must move before a drag/scroll starts from the
     * flyout.  Because the drag-intention is determined when this is reached, it is
     * larger than DRAG_RADIUS so that the drag-direction is clearer.
     * @alias Blockly.internalConstants.FLYOUT_DRAG_RADIUS
     */
    export const FLYOUT_DRAG_RADIUS: 10;
    /**
     * Maximum misalignment between connections for them to snap together.
     * @alias Blockly.internalConstants.SNAP_RADIUS
     */
    export const SNAP_RADIUS: 28;
    /**
     * Maximum misalignment between connections for them to snap together,
     * when a connection is already highlighted.
     * @alias Blockly.internalConstants.CONNECTING_SNAP_RADIUS
     */
    export const CONNECTING_SNAP_RADIUS: 28;
    /**
     * How much to prefer staying connected to the current connection over moving to
     * a new connection.  The current previewed connection is considered to be this
     * much closer to the matching connection on the block than it actually is.
     * @alias Blockly.internalConstants.CURRENT_CONNECTION_PREFERENCE
     */
    export const CURRENT_CONNECTION_PREFERENCE: 8;
    /**
     * Delay in ms between trigger and bumping unconnected block out of alignment.
     * @alias Blockly.internalConstants.BUMP_DELAY
     */
    export const BUMP_DELAY: 250;
    /**
     * Maximum randomness in workspace units for bumping a block.
     * @alias Blockly.internalConstants.BUMP_RANDOMNESS
     */
    export const BUMP_RANDOMNESS: 10;
    /**
     * Number of characters to truncate a collapsed block to.
     * @alias Blockly.internalConstants.COLLAPSE_CHARS
     */
    export const COLLAPSE_CHARS: 30;
    /**
     * Length in ms for a touch to become a long press.
     * @alias Blockly.internalConstants.LONGPRESS
     */
    export const LONGPRESS: 750;
    /**
     * Prevent a sound from playing if another sound preceded it within this many
     * milliseconds.
     * @alias Blockly.internalConstants.SOUND_LIMIT
     */
    export const SOUND_LIMIT: 100;
    /**
     * When dragging a block out of a stack, split the stack in two (true), or drag
     * out the block healing the stack (false).
     * @alias Blockly.internalConstants.DRAG_STACK
     */
    export const DRAG_STACK: true;
    /**
     * The richness of block colors, regardless of the hue.
     * Must be in the range of 0 (inclusive) to 1 (exclusive).
     * @alias Blockly.internalConstants.HSV_SATURATION
     */
    export const HSV_SATURATION: 0.45;
    /**
     * The intensity of block colors, regardless of the hue.
     * Must be in the range of 0 (inclusive) to 1 (exclusive).
     * @alias Blockly.internalConstants.HSV_VALUE
     */
    export const HSV_VALUE: 0.65;
    export namespace SPRITE {
        const width: number;
        const height: number;
        const url: string;
    }
    /**
     * ENUM for no drag operation.
     * @const
     * @alias Blockly.internalConstants.DRAG_NONE
     */
    export const DRAG_NONE: 0;
    /**
     * ENUM for inside the sticky DRAG_RADIUS.
     * @const
     * @alias Blockly.internalConstants.DRAG_STICKY
     */
    export const DRAG_STICKY: 1;
    /**
     * ENUM for inside the non-sticky DRAG_RADIUS, for differentiating between
     * clicks and drags.
     * @const
     * @alias Blockly.internalConstants.DRAG_BEGIN
     */
    export const DRAG_BEGIN: 1;
    /**
     * ENUM for freely draggable (outside the DRAG_RADIUS, if one applies).
     * @const
     * @alias Blockly.internalConstants.DRAG_FREE
     */
    export const DRAG_FREE: 2;
    /**
     * Lookup table for determining the opposite type of a connection.
     * @const
     * @alias Blockly.internalConstants.OPPOSITE_TYPE
     */
    export const OPPOSITE_TYPE: any[];
    /**
     * String for use in the "custom" attribute of a category in toolbox XML.
     * This string indicates that the category should be dynamically populated with
     * variable blocks.
     * @const {string}
     * @alias Blockly.internalConstants.VARIABLE_CATEGORY_NAME
     */
    export const VARIABLE_CATEGORY_NAME: "VARIABLE";
    /**
     * String for use in the "custom" attribute of a category in toolbox XML.
     * This string indicates that the category should be dynamically populated with
     * variable blocks.
     * @const {string}
     * @alias Blockly.internalConstants.VARIABLE_DYNAMIC_CATEGORY_NAME
     */
    export const VARIABLE_DYNAMIC_CATEGORY_NAME: "VARIABLE_DYNAMIC";
    /**
     * String for use in the "custom" attribute of a category in toolbox XML.
     * This string indicates that the category should be dynamically populated with
     * procedure blocks.
     * @const {string}
     * @alias Blockly.internalConstants.PROCEDURE_CATEGORY_NAME
     */
    export const PROCEDURE_CATEGORY_NAME: "PROCEDURE";
    /**
     * String for use in the dropdown created in field_variable.
     * This string indicates that this option in the dropdown is 'Rename
     * variable...' and if selected, should trigger the prompt to rename a variable.
     * @const {string}
     * @alias Blockly.internalConstants.RENAME_VARIABLE_ID
     */
    export const RENAME_VARIABLE_ID: "RENAME_VARIABLE_ID";
    /**
     * String for use in the dropdown created in field_variable.
     * This string indicates that this option in the dropdown is 'Delete the "%1"
     * variable' and if selected, should trigger the prompt to delete a variable.
     * @const {string}
     * @alias Blockly.internalConstants.DELETE_VARIABLE_ID
     */
    export const DELETE_VARIABLE_ID: "DELETE_VARIABLE_ID";
}
declare module "msg" {
    export {};
}
declare module "blocks" {
    /**
     * @license
     * Copyright 2013 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * @fileoverview A mapping of block type names to block prototype objects.
     */
    /**
     * A mapping of block type names to block prototype objects.
     * @namespace Blockly.blocks
     */
    /**
     * A mapping of block type names to block prototype objects.
     * @type {!Object<string,!Object>}
     * @alias Blockly.blocks.Blocks
     */
    export const Blocks: {
        [x: string]: any;
    };
}
declare module "interfaces/i_deletable" {
    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * @fileoverview The interface for an object that is deletable.
     */
    /**
     * The interface for an object that is deletable.
     * @namespace Blockly.IDeletable
     */
    /**
     * The interface for an object that can be deleted.
     * @interface
     * @alias Blockly.IDeletable
     */
    export class IDeletable {
    }
}
declare module "interfaces/i_movable" {
    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * @fileoverview The interface for an object that is movable.
     */
    /**
     * The interface for an object that is movable.
     * @namespace Blockly.IMovable
     */
    /**
     * The interface for an object that is movable.
     * @interface
     * @alias Blockly.IMovable
     */
    export class IMovable {
    }
}
declare module "interfaces/i_selectable" {
    /**
     * The interface for an object that is selectable.
     * @extends {IDeletable}
     * @extends {IMovable}
     * @interface
     * @alias Blockly.ISelectable
     */
    export class ISelectable {
        /**
         * @type {string}
         */
        id: string;
    }
}
declare module "dialog" {
    /**
     * Wrapper to window.alert() that app developers may override via setAlert to
     * provide alternatives to the modal browser window.
     * @param {string} message The message to display to the user.
     * @param {function()=} opt_callback The callback when the alert is dismissed.
     * @alias Blockly.dialog.alert
     */
    export function alert(message: string, opt_callback?: (() => any) | undefined): void;
    /**
     * Sets the function to be run when Blockly.dialog.alert() is called.
     * @param {!function(string, function()=)} alertFunction The function to be run.
     * @see Blockly.dialog.alert
     * @alias Blockly.dialog.setAlert
     */
    export function setAlert(alertFunction: (arg0: string, arg1: (() => any) | undefined) => any): void;
    /**
     * Wrapper to window.confirm() that app developers may override via setConfirm
     * to provide alternatives to the modal browser window.
     * @param {string} message The message to display to the user.
     * @param {!function(boolean)} callback The callback for handling user response.
     * @alias Blockly.dialog.confirm
     */
    export function confirm(message: string, callback: (arg0: boolean) => any): void;
    /**
     * Sets the function to be run when Blockly.dialog.confirm() is called.
     * @param {!function(string, !function(boolean))} confirmFunction The function
     *    to be run.
     * @see Blockly.dialog.confirm
     * @alias Blockly.dialog.setConfirm
     */
    export function setConfirm(confirmFunction: (arg0: string, arg1: (arg0: boolean) => any) => any): void;
    /**
     * Wrapper to window.prompt() that app developers may override via setPrompt to
     * provide alternatives to the modal browser window. Built-in browser prompts
     * are often used for better text input experience on mobile device. We strongly
     * recommend testing mobile when overriding this.
     * @param {string} message The message to display to the user.
     * @param {string} defaultValue The value to initialize the prompt with.
     * @param {!function(?string)} callback The callback for handling user response.
     * @alias Blockly.dialog.prompt
     */
    export function prompt(message: string, defaultValue: string, callback: (arg0: string | null) => any): void;
    /**
     * Sets the function to be run when Blockly.dialog.prompt() is called.
     * @param {!function(string, string, !function(?string))} promptFunction The
     *    function to be run.
     * @see Blockly.dialog.prompt
     * @alias Blockly.dialog.setPrompt
     */
    export function setPrompt(promptFunction: (arg0: string, arg1: string, arg2: (arg0: string | null) => any) => any): void;
}
declare module "utils/array" {
    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * @fileoverview Utility methods related to arrays.
     */
    /**
     * @namespace Blockly.utils.array
     */
    /**
     * Removes the first occurrence of a particular value from an array.
     * @param {!Array} arr Array from which to remove value.
     * @param {*} value Value to remove.
     * @return {boolean} True if an element was removed.
     * @alias Blockly.array.removeElem
     * @package
     */
    export function removeElem(arr: any[], value: any): boolean;
}
declare module "utils/math" {
    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * @fileoverview Utility methods for math.
     * These methods are not specific to Blockly, and could be factored out into
     * a JavaScript framework such as Closure.
     */
    /**
     * Utility methods for math.
     * These methods are not specific to Blockly, and could be factored out into
     * a JavaScript framework such as Closure.
     * @namespace Blockly.utils.math
     */
    /**
     * Converts degrees to radians.
     * Copied from Closure's goog.math.toRadians.
     * @param {number} angleDegrees Angle in degrees.
     * @return {number} Angle in radians.
     * @alias Blockly.utils.math.toRadians
     */
    export function toRadians(angleDegrees: number): number;
    /**
     * Converts radians to degrees.
     * Copied from Closure's goog.math.toDegrees.
     * @param {number} angleRadians Angle in radians.
     * @return {number} Angle in degrees.
     * @alias Blockly.utils.math.toDegrees
     */
    export function toDegrees(angleRadians: number): number;
    /**
     * Clamp the provided number between the lower bound and the upper bound.
     * @param {number} lowerBound The desired lower bound.
     * @param {number} number The number to clamp.
     * @param {number} upperBound The desired upper bound.
     * @return {number} The clamped number.
     * @alias Blockly.utils.math.clamp
     */
    export function clamp(lowerBound: number, number: number, upperBound: number): number;
}
declare module "serialization/priorities" {
    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * @fileoverview The top level namespace for priorities of plugin serializers.
     * Includes constants for the priorities of different plugin
     * serializers. Higher priorities are deserialized first.
     */
    /**
     * The top level namespace for priorities of plugin serializers.
     * Includes constants for the priorities of different plugin serializers. Higher
     * priorities are deserialized first.
     * @namespace Blockly.serialization.priorities
     */
    /**
     * The priority for deserializing variables.
     * @type {number}
     * @const
     * @alias Blockly.serialization.priorities.VARIABLES
     */
    export const VARIABLES: number;
    /**
     * The priority for deserializing blocks.
     * @type {number}
     * @const
     * @alias Blockly.serialization.priorities.BLOCKS
     */
    export const BLOCKS: number;
}
declare module "interfaces/i_serializer" {
    /**
     * Serializes and deserializes a plugin or system.
     * @interface
     * @alias Blockly.serialization.ISerializer.ISerializer
     */
    export class ISerializer {
        /**
         * A priority value used to determine the order of deserializing state.
         * More positive priorities are deserialized before less positive
         * priorities. Eg if you have priorities (0, -10, 10, 100) the order of
         * deserialiation will be (100, 10, 0, -10).
         * If two serializers have the same priority, they are deserialized in an
         * arbitrary order relative to each other.
         * @type {number}
         */
        priority: number;
        /**
         * Saves the state of the plugin or system.
         * @param {!Workspace} workspace The workspace the system to serialize is
         *     associated with.
         * @return {?} A JS object containing the system's state, or null if
         *     there is no state to record.
         */
        save(workspace: Workspace): unknown;
        /**
         * Loads the state of the plugin or system.
         * @param {?} state The state of the system to deserialize. This will always
         *     be non-null.
         * @param {!Workspace} workspace The workspace the system to deserialize is
         *     associated with.
         */
        load(state: unknown, workspace: Workspace): void;
        /**
         * Clears the state of the plugin or system.
         * @param {!Workspace} workspace The workspace the system to clear the state
         *     of is associated with.
         */
        clear(workspace: Workspace): void;
    }
    import { Workspace } from "workspace";
}
declare module "serialization/registry" {
    /**
     * Registers the given serializer so that it can be used for serialization and
     * deserialization.
     * @param {string} name The name of the serializer to register.
     * @param {ISerializer} serializer The serializer to register.
     * @alias Blockly.serialization.registry.register
     */
    export function register(name: string, serializer: ISerializer): void;
    /**
     * Unregisters the serializer associated with the given name.
     * @param {string} name The name of the serializer to unregister.
     * @alias Blockly.serialization.registry.unregister
     */
    export function unregister(name: string): void;
    import { ISerializer } from "interfaces/i_serializer";
}
declare module "serialization/exceptions" {
    /**
     * @alias Blockly.serialization.exceptions.DeserializationError
     */
    export class DeserializationError extends Error {
    }
    /**
     * Represents an error where the serialized state is expected to provide a
     * block type, but it is not provided.
     * @alias Blockly.serialization.exceptions.MissingBlockType
     */
    export class MissingBlockType extends DeserializationError {
        /**
         * @param {!State} state The state object which is missing the block type.
         * @package
         */
        constructor(state: any);
        /**
         * The state object containing the bad name.
         * @type {!State}
         */
        state: any;
    }
    /**
     * Represents an error where deserialization encountered a block that did
     * not have a connection that was defined in the serialized state.
     * @alias Blockly.serialization.exceptions.MissingConnection
     */
    export class MissingConnection extends DeserializationError {
        /**
         * @param {string} connection The name of the connection that is missing. E.g.
         *     'IF0', or 'next'.
         * @param {!Block} block The block missing the connection.
         * @param {!State} state The state object containing the bad connection.
         * @package
         */
        constructor(connection: string, block: Block, state: any);
        /**
         * The block missing the connection.
         * @type {!Block}
         */
        block: Block;
        /**
         * The state object containing the bad name.
         * @type {!State}
         */
        state: any;
    }
    /**
     * Represents an error where deserialization tried to connect two connections
     * that were not compatible.
     * @alias Blockly.serialization.exceptions.BadConnectionCheck
     */
    export class BadConnectionCheck extends DeserializationError {
        /**
         * @param {string} reason The reason the connections were not compatible.
         * @param {string} childConnection The name of the incompatible child
         *     connection. E.g. 'output' or 'previous'.
         * @param {!Block} childBlock The child block that could not connect
         *     to its parent.
         * @param {!State} childState The state object representing the child block.
         * @package
         */
        constructor(reason: string, childConnection: string, childBlock: Block, childState: any);
        /**
         * The block that could not connect to its parent.
         * @type {!Block}
         */
        childBlock: Block;
        /**
         * The state object representing the block that could not connect to its
         * parent.
         * @type {!State}
         */
        childState: any;
    }
    /**
     * Represents an error where deserialization encountered a real block as it
     * was deserializing children of a shadow.
     * This is an error because it is an invariant of Blockly that shadow blocks
     * do not have real children.
     * @alias Blockly.serialization.exceptions.RealChildOfShadow
     */
    export class RealChildOfShadow extends DeserializationError {
        /**
         * @param {!State} state The state object representing the real block.
         * @package
         */
        constructor(state: any);
        /**
         * The state object representing the real block.
         * @type {!State}
         */
        state: any;
    }
    import { Block } from "block";
}
declare module "utils/size" {
    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * @fileoverview Utility methods for size calculation.
     * These methods are not specific to Blockly, and could be factored out into
     * a JavaScript framework such as Closure.
     */
    /**
     * Utility methods for size calculation.
     * These methods are not specific to Blockly, and could be factored out into
     * a JavaScript framework such as Closure.
     * @class
     */
    /**
     * Class for representing sizes consisting of a width and height.
     * @param {number} width Width.
     * @param {number} height Height.
     * @struct
     * @constructor
     * @alias Blockly.utils.Size
     */
    export class Size {
        /**
         * Compares sizes for equality.
         * @param {?Size} a A Size.
         * @param {?Size} b A Size.
         * @return {boolean} True iff the sizes have equal widths and equal
         *     heights, or if both are null.
         */
        static equals(a: Size | null, b: Size | null): boolean;
        constructor(width: any, height: any);
        /**
         * Width
         * @type {number}
         */
        width: number;
        /**
         * Height
         * @type {number}
         */
        height: number;
    }
}
declare module "input_types" {
    /**
     * *
     */
    export type inputTypes = number;
    export namespace inputTypes {
        const VALUE: number;
        const STATEMENT: number;
        const DUMMY: number;
    }
}
declare module "serialization/blocks" {
    /**
     * Represents the state of a connection.
     */
    export type ConnectionState = {
        shadow: (any | undefined);
        block: (any | undefined);
    };
    /**
     * Represents the state of a connection.
     * @typedef {{
     *   shadow: (!State|undefined),
     *   block: (!State|undefined)
     * }}
     * @alias Blockly.serialization.blocks.ConnectionState
     */
    export let ConnectionState: any;
    /**
     * Represents the state of a given block.
     * @typedef {{
     *     type: string,
     *     id: (string|undefined),
     *     x: (number|undefined),
     *     y: (number|undefined),
     *     collapsed: (boolean|undefined),
     *     enabled: (boolean|undefined),
     *     inline: (boolean|undefined),
     *     data: (string|undefined),
     *     extra-state: (*|undefined),
     *     icons: (!Object<string, *>|undefined),
     *     fields: (!Object<string, *>|undefined),
     *     inputs: (!Object<string, !ConnectionState>|undefined),
     *     next: (!ConnectionState|undefined)
     * }}
     * @alias Blockly.serialization.blocks.State
     */
    export let State: any;
    /**
     * Returns the state of the given block as a plain JavaScript object.
     * @param {!Block} block The block to serialize.
     * @param {{addCoordinates: (boolean|undefined), addInputBlocks:
     *     (boolean|undefined), addNextBlocks: (boolean|undefined),
     *     doFullSerialization: (boolean|undefined)}=} param1
     *     addCoordinates: If true, the coordinates of the block are added to the
     *       serialized state. False by default.
     *     addinputBlocks: If true, children of the block which are connected to
     *       inputs will be serialized. True by default.
     *     addNextBlocks: If true, children of the block which are connected to the
     *       block's next connection (if it exists) will be serialized.
     *       True by default.
     *     doFullSerialization: If true, fields that normally just save a reference
     *       to some external state (eg variables) will instead serialize all of the
     *       info about that state. This supports deserializing the block into a
     *       workspace where that state doesn't yet exist. True by default.
     * @return {?State} The serialized state of the block, or null if the block
     *     could not be serialied (eg it was an insertion marker).
     * @alias Blockly.serialization.blocks.save
     */
    export function save(block: Block, { addCoordinates, addInputBlocks, addNextBlocks, doFullSerialization, }?: {
        addCoordinates: (boolean | undefined);
        addInputBlocks: (boolean | undefined);
        addNextBlocks: (boolean | undefined);
        doFullSerialization: (boolean | undefined);
    } | undefined): any | null;
    /**
     * Loads the block represented by the given state into the given workspace.
     * @param {!State} state The state of a block to deserialize into the workspace.
     * @param {!Workspace} workspace The workspace to add the block to.
     * @param {{recordUndo: (boolean|undefined)}=} param1
     *     recordUndo: If true, events triggered by this function will be undo-able
     *       by the user. False by default.
     * @return {!Block} The block that was just loaded.
     * @alias Blockly.serialization.blocks.append
     */
    export function append(state: any, workspace: Workspace, { recordUndo }?: {
        recordUndo: (boolean | undefined);
    } | undefined): Block;
    /**
     * Loads the block represented by the given state into the given workspace.
     * This is defined internally so that the extra parameters don't clutter our
     * external API.
     * But it is exported so that other places within Blockly can call it directly
     * with the extra parameters.
     * @param {!State} state The state of a block to deserialize into the workspace.
     * @param {!Workspace} workspace The workspace to add the block to.
     * @param {{parentConnection: (!Connection|undefined), isShadow:
     *     (boolean|undefined), recordUndo: (boolean|undefined)}=} param1
     *     parentConnection: If provided, the system will attempt to connect the
     *       block to this connection after it is created. Undefined by default.
     *     isShadow: If true, the block will be set to a shadow block after it is
     *       created. False by default.
     *     recordUndo: If true, events triggered by this function will be undo-able
     *       by the user. False by default.
     * @return {!Block} The block that was just appended.
     * @alias Blockly.serialization.blocks.appendInternal
     * @package
     */
    export function appendInternal(state: any, workspace: Workspace, { parentConnection, isShadow, recordUndo, }?: {
        parentConnection: (Connection | undefined);
        isShadow: (boolean | undefined);
        recordUndo: (boolean | undefined);
    } | undefined): Block;
    import { Block } from "block";
    import { Workspace } from "workspace";
    import { Connection } from "connection";
}
declare module "utils/deprecation" {
    /**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * @fileoverview Helper function for warning developers about deprecations.
     * This method is not specific to Blockly.
     */
    /**
     * Helper function for warning developers about deprecations.
     * This method is not specific to Blockly.
     * @namespace Blockly.utils.deprecation
     */
    /**
     * Warn developers that a function or property is deprecated.
     * @param {string} name The name of the function or property.
     * @param {string} deprecationDate The date of deprecation.
     *     Prefer 'month yyyy' or 'quarter yyyy' format.
     * @param {string} deletionDate The date of deletion, in the same format as the
     *     deprecation date.
     * @param {string=} opt_use The name of a function or property to use instead,
     *     if any.
     * @alias Blockly.utils.deprecation.warn
     * @package
     */
    export function warn(name: string, deprecationDate: string, deletionDate: string, opt_use?: string | undefined): void;
}
declare module "css" {
    /**
     * Add some CSS to the blob that will be injected later.  Allows optional
     * components such as fields and the toolbox to store separate CSS.
     * @param {string|!Array<string>} cssContent Multiline CSS string or an array of
     *    single lines of CSS.
     * @alias Blockly.Css.register
     */
    export function register(cssContent: string | Array<string>): void;
    /**
     * Inject the CSS into the DOM.  This is preferable over using a regular CSS
     * file since:
     * a) It loads synchronously and doesn't force a redraw later.
     * b) It speeds up loading by not blocking on a separate HTTP transfer.
     * c) The CSS content may be made dynamic depending on init options.
     * @param {boolean} hasCss If false, don't inject CSS
     *     (providing CSS becomes the document's responsibility).
     * @param {string} pathToMedia Path from page to the Blockly media directory.
     * @alias Blockly.Css.inject
     */
    export function inject(hasCss: boolean, pathToMedia: string): void;
    /**
     * The CSS content for Blockly.
     * @alias Blockly.Css.content
     */
    export let content: string;
}
declare module "utils/aria" {
    /**
     * *
     */
    export type Role = string;
    export namespace Role {
        const GRID: string;
        const GRIDCELL: string;
        const GROUP: string;
        const LISTBOX: string;
        const MENU: string;
        const MENUITEM: string;
        const MENUITEMCHECKBOX: string;
        const OPTION: string;
        const PRESENTATION: string;
        const ROW: string;
        const TREE: string;
        const TREEITEM: string;
    }
    /**
     * *
     */
    export type State = string;
    export namespace State {
        const ACTIVEDESCENDANT: string;
        const COLCOUNT: string;
        const DISABLED: string;
        const EXPANDED: string;
        const INVALID: string;
        const LABEL: string;
        const LABELLEDBY: string;
        const LEVEL: string;
        const ORIENTATION: string;
        const POSINSET: string;
        const ROWCOUNT: string;
        const SELECTED: string;
        const SETSIZE: string;
        const VALUEMAX: string;
        const VALUEMIN: string;
    }
    /**
     * Sets the role of an element.
     *
     * Similar to Closure's goog.a11y.aria
     *
     * @param {!Element} element DOM node to set role of.
     * @param {!Role} roleName Role name.
     * @alias Blockly.utils.aria.setRole
     */
    export function setRole(element: Element, roleName: Role): void;
    /**
     * Sets the state or property of an element.
     * Copied from Closure's goog.a11y.aria
     * @param {!Element} element DOM node where we set state.
     * @param {!State} stateName State attribute being set.
     *     Automatically adds prefix 'aria-' to the state name if the attribute is
     *     not an extra attribute.
     * @param {string|boolean|number|!Array<string>} value Value
     * for the state attribute.
     * @alias Blockly.utils.aria.setState
     */
    export function setState(element: Element, stateName: State, value: string | boolean | number | Array<string>): void;
}
declare module "utils/color" {
    /**
     * Parses a color from a string.
     * .parse('red') -> '#ff0000'
     * .parse('#f00') -> '#ff0000'
     * .parse('#ff0000') -> '#ff0000'
     * .parse('0xff0000') -> '#ff0000'
     * .parse('rgb(255, 0, 0)') -> '#ff0000'
     * @param {string|number} str Color in some CSS format.
     * @return {?string} A string containing a hex representation of the color,
     *   or null if can't be parsed.
     * @alias Blockly.utils.color.parse
     */
    export function parse(str: string | number): string | null;
    /**
     * Converts a color from RGB to hex representation.
     * @param {number} r Amount of red, int between 0 and 255.
     * @param {number} g Amount of green, int between 0 and 255.
     * @param {number} b Amount of blue, int between 0 and 255.
     * @return {string} Hex representation of the color.
     * @alias Blockly.utils.color.rgbToHex
     */
    export function rgbToHex(r: number, g: number, b: number): string;
    /**
     * Converts a color to RGB.
     * @param {string} color String representing color in any
     *     color format ('#ff0000', 'red', '0xff000', etc).
     * @return {!Array<number>} RGB representation of the color.
     * @alias Blockly.utils.color.hexToRgb
     */
    export function hexToRgb(color: string): Array<number>;
    /**
     * Converts an HSV triplet to hex representation.
     * @param {number} h Hue value in [0, 360].
     * @param {number} s Saturation value in [0, 1].
     * @param {number} v Brightness in [0, 255].
     * @return {string} Hex representation of the color.
     * @alias Blockly.utils.color.hsvToHex
     */
    export function hsvToHex(h: number, s: number, v: number): string;
    /**
     * Blend two colors together, using the specified factor to indicate the
     * weight given to the first color.
     * @param {string} color1 First color.
     * @param {string} color2 Second color.
     * @param {number} factor The weight to be given to color1 over color2.
     *     Values should be in the range [0, 1].
     * @return {?string} Combined color represented in hex.
     * @alias Blockly.utils.color.blend
     */
    export function blend(color1: string, color2: string, factor: number): string | null;
    /**
     * A map that contains the 16 basic color keywords as defined by W3C:
     * https://www.w3.org/TR/2018/REC-css-color-3-20180619/#html4
     * The keys of this map are the lowercase "readable" names of the colors,
     * while the values are the "hex" values.
     *
     * @type {!Object<string, string>}
     * @alias Blockly.utils.color.names
     */
    export const names: {
        [x: string]: string;
    };
    /**
     * Convert a hue (HSV model) into an RGB hex triplet.
     * @param {number} hue Hue on a color wheel (0-360).
     * @return {string} RGB code, e.g. '#5ba65b'.
     * @alias Blockly.utils.color.hueToHex
     */
    export function hueToHex(hue: number): string;
}
declare module "utils/parsing" {
    /**
     * Parse a string with any number of interpolation tokens (%1, %2, ...).
     * It will also replace string table references (e.g., %{bky_my_msg} and
     * %{BKY_MY_MSG} will both be replaced with the value in
     * Msg['MY_MSG']). Percentage sign characters '%' may be self-escaped
     * (e.g., '%%').
     * @param {string} message Text which might contain string table references and
     *     interpolation tokens.
     * @return {!Array<string|number>} Array of strings and numbers.
     * @alias Blockly.parsing.tokenizeInterpolation
     */
    export function tokenizeInterpolation(message: string): Array<string | number>;
    /**
     * Replaces string table references in a message, if the message is a string.
     * For example, "%{bky_my_msg}" and "%{BKY_MY_MSG}" will both be replaced with
     * the value in Msg['MY_MSG'].
     * @param {string|?} message Message, which may be a string that contains
     *     string table references.
     * @return {string} String with message references replaced.
     * @alias Blockly.parsing.replaceMessageReferences
     */
    export function replaceMessageReferences(message: string | unknown): string;
    /**
     * Validates that any %{MSG_KEY} references in the message refer to keys of
     * the Msg string table.
     * @param {string} message Text which might contain string table references.
     * @return {boolean} True if all message references have matching values.
     *     Otherwise, false.
     * @alias Blockly.parsing.checkMessageReferences
     */
    export function checkMessageReferences(message: string): boolean;
    /**
     * Parse a block color from a number or string, as provided in a block
     * definition.
     * @param {number|string} color HSV hue value (0 to 360), #RRGGBB string,
     *     or a message reference string pointing to one of those two values.
     * @return {{hue: ?number, hex: string}} An object containing the color as
     *     a #RRGGBB string, and the hue if the input was an HSV hue value.
     * @throws {Error} If the color cannot be parsed.
     * @alias Blockly.parsing.parseBlockColor
     */
    export function parseBlockColor(color: number | string): {
        hue: number | null;
        hex: string;
    };
}
declare module "interfaces/i_toolbox_item" {
    /**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * @fileoverview The interface for a toolbox item.
     */
    /**
     * The interface for a toolbox item.
     * @namespace Blockly.IToolboxItem
     */
    /**
     * Interface for an item in the toolbox.
     * @interface
     * @alias Blockly.IToolboxItem
     */
    export class IToolboxItem {
    }
}
declare module "interfaces/i_selectable_toolbox_item" {
    /**
     * Interface for an item in the toolbox that can be selected.
     * @extends {IToolboxItem}
     * @interface
     * @alias Blockly.ISelectableToolboxItem
     */
    export class ISelectableToolboxItem {
    }
}
declare module "interfaces/i_collapsible_toolbox_item" {
    /**
     * Interface for an item in the toolbox that can be collapsed.
     * @extends {ISelectableToolboxItem}
     * @interface
     * @alias Blockly.ICollapsibleToolboxItem
     */
    export class ICollapsibleToolboxItem {
    }
}
declare module "utils/coordinate" {
    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * @fileoverview Utility methods for coordinate manipulation.
     * These methods are not specific to Blockly, and could be factored out into
     * a JavaScript framework such as Closure.
     */
    /**
     * Utility methods for coordinate manipulation.
     * These methods are not specific to Blockly, and could be factored out into
     * a JavaScript framework such as Closure.
     * @class
     */
    /**
     * Class for representing coordinates and positions.
     * @param {number} x Left.
     * @param {number} y Top.
     * @struct
     * @constructor
     * @alias Blockly.utils.Coordinate
     */
    export class Coordinate {
        /**
         * Compares coordinates for equality.
         * @param {?Coordinate} a A Coordinate.
         * @param {?Coordinate} b A Coordinate.
         * @return {boolean} True iff the coordinates are equal, or if both are null.
         */
        static equals(a: Coordinate | null, b: Coordinate | null): boolean;
        /**
         * Returns the distance between two coordinates.
         * @param {!Coordinate} a A Coordinate.
         * @param {!Coordinate} b A Coordinate.
         * @return {number} The distance between `a` and `b`.
         */
        static distance(a: Coordinate, b: Coordinate): number;
        /**
         * Returns the magnitude of a coordinate.
         * @param {!Coordinate} a A Coordinate.
         * @return {number} The distance between the origin and `a`.
         */
        static magnitude(a: Coordinate): number;
        /**
         * Returns the difference between two coordinates as a new
         * Coordinate.
         * @param {!Coordinate|!SVGPoint} a An x/y coordinate.
         * @param {!Coordinate|!SVGPoint} b An x/y coordinate.
         * @return {!Coordinate} A Coordinate representing the difference
         *     between `a` and `b`.
         */
        static difference(a: Coordinate | SVGPoint, b: Coordinate | SVGPoint): Coordinate;
        /**
         * Returns the sum of two coordinates as a new Coordinate.
         * @param {!Coordinate|!SVGPoint} a An x/y coordinate.
         * @param {!Coordinate|!SVGPoint} b An x/y coordinate.
         * @return {!Coordinate} A Coordinate representing the sum of
         *     the two coordinates.
         */
        static sum(a: Coordinate | SVGPoint, b: Coordinate | SVGPoint): Coordinate;
        constructor(x: any, y: any);
        /**
         * X-value
         * @type {number}
         */
        x: number;
        /**
         * Y-value
         * @type {number}
         */
        y: number;
        /**
         * Creates a new copy of this coordinate.
         * @return {!Coordinate} A copy of this coordinate.
         */
        clone(): Coordinate;
        /**
         * Scales this coordinate by the given scale factor.
         * @param {number} s The scale factor to use for both x and y dimensions.
         * @return {!Coordinate} This coordinate after scaling.
         */
        scale(s: number): Coordinate;
        /**
         * Translates this coordinate by the given offsets.
         * respectively.
         * @param {number} tx The value to translate x by.
         * @param {number} ty The value to translate y by.
         * @return {!Coordinate} This coordinate after translating.
         */
        translate(tx: number, ty: number): Coordinate;
    }
}
declare module "interfaces/i_registrable" {
    /**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * @fileoverview The interface for a Blockly component that can be registered.
     *    (Ex. Toolbox, Fields, Renderers)
     */
    /**
     * The interface for a Blockly component that can be registered.
     *    (Ex. Toolbox, Fields, Renderers)
     * @namespace Blockly.IRegistrable
     */
    /**
     * The interface for a Blockly component that can be registered.
     * @interface
     * @alias Blockly.IRegistrable
     */
    export class IRegistrable {
    }
}
declare module "interfaces/i_flyout" {
    /**
     * Interface for a flyout.
     * @extends {IRegistrable}
     * @interface
     * @alias Blockly.IFlyout
     */
    export class IFlyout {
        /**
         * Whether the flyout is laid out horizontally or not.
         * @type {boolean}
         */
        horizontalLayout: boolean;
        /**
         * Is RTL vs LTR.
         * @type {boolean}
         */
        RTL: boolean;
        /**
         * The target workspace
         * @type {?WorkspaceSvg}
         */
        targetWorkspace: WorkspaceSvg | null;
        /**
         * Margin around the edges of the blocks in the flyout.
         * @type {number}
         * @const
         */
        MARGIN: number;
        /**
         * Does the flyout automatically close when a block is created?
         * @type {boolean}
         */
        autoClose: boolean;
        /**
         * Corner radius of the flyout background.
         * @type {number}
         * @const
         */
        CORNER_RADIUS: number;
    }
    import { WorkspaceSvg } from "workspace_svg";
}
declare module "interfaces/i_toolbox" {
    /**
     * Interface for a toolbox.
     * @extends {IRegistrable}
     * @interface
     * @alias Blockly.IToolbox
     */
    export class IToolbox {
    }
}
declare module "toolbox/toolbox_item" {
    /**
     * Class for an item in the toolbox.
     * @param {!toolbox.ToolboxItemInfo} toolboxItemDef The JSON defining the
     *     toolbox item.
     * @param {!IToolbox} toolbox The toolbox that holds the toolbox item.
     * @param {ICollapsibleToolboxItem=} opt_parent The parent toolbox item
     *     or null if the category does not have a parent.
     * @constructor
     * @implements {IToolboxItem}
     * @alias Blockly.ToolboxItem
     */
    export class ToolboxItem implements IToolboxItem {
        constructor(toolboxItemDef: any, toolbox: any, opt_parent: any);
        /**
         * The id for the category.
         * @type {string}
         * @protected
         */
        protected id_: string;
        /**
         * The parent of the category.
         * @type {?ICollapsibleToolboxItem}
         * @protected
         */
        protected parent_: ICollapsibleToolboxItem | null;
        /**
         * The level that the category is nested at.
         * @type {number}
         * @protected
         */
        protected level_: number;
        /**
         * The JSON definition of the toolbox item.
         * @type {!toolbox.ToolboxItemInfo}
         * @protected
         */
        protected toolboxItemDef_: any;
        /**
         * The toolbox this category belongs to.
         * @type {!IToolbox}
         * @protected
         */
        protected parentToolbox_: IToolbox;
        /**
         * The workspace of the parent toolbox.
         * @type {!WorkspaceSvg}
         * @protected
         */
        protected workspace_: WorkspaceSvg;
        /**
         * Initializes the toolbox item.
         * This includes creating the DOM and updating the state of any items based
         * on the info object.
         * @public
         */
        public init(): void;
        /**
         * Gets the div for the toolbox item.
         * @return {?Element} The div for the toolbox item.
         * @public
         */
        public getDiv(): Element | null;
        /**
         * Gets a unique identifier for this toolbox item.
         * @return {string} The ID for the toolbox item.
         * @public
         */
        public getId(): string;
        /**
         * Gets the parent if the toolbox item is nested.
         * @return {?IToolboxItem} The parent toolbox item, or null if
         *     this toolbox item is not nested.
         * @public
         */
        public getParent(): IToolboxItem | null;
        /**
         * Gets the nested level of the category.
         * @return {number} The nested level of the category.
         * @package
         */
        getLevel(): number;
        /**
         * Whether the toolbox item is selectable.
         * @return {boolean} True if the toolbox item can be selected.
         * @public
         */
        public isSelectable(): boolean;
        /**
         * Whether the toolbox item is collapsible.
         * @return {boolean} True if the toolbox item is collapsible.
         * @public
         */
        public isCollapsible(): boolean;
        /**
         * Dispose of this toolbox item. No-op by default.
         * @public
         */
        public dispose(): void;
    }
    import { IToolboxItem } from "interfaces/i_toolbox_item";
    import { ICollapsibleToolboxItem } from "interfaces/i_collapsible_toolbox_item";
    import { IToolbox } from "interfaces/i_toolbox";
    import { WorkspaceSvg } from "workspace_svg";
}
declare module "toolbox/category" {
    import { ToolboxItem } from "toolbox/toolbox_item";
    export class ToolboxCategory extends ToolboxItem {
        /**
         * Class for a category in a toolbox.
         * @param {!toolbox.CategoryInfo} categoryDef The information needed
         *     to create a category in the toolbox.
         * @param {!IToolbox} toolbox The parent toolbox for the category.
         * @param {ICollapsibleToolboxItem=} opt_parent The parent category or null if
         *     the category does not have a parent.
         * @constructor
         * @extends {ToolboxItem}
         * @implements {ISelectableToolboxItem}
         * @alias Blockly.ToolboxCategory
         */
        constructor(categoryDef: toolbox.CategoryInfo, toolbox: IToolbox, opt_parent?: ICollapsibleToolboxItem | undefined);
        /**
         * The name that will be displayed on the category.
         * @type {string}
         * @protected
         */
        protected name_: string;
        /**
         * The color of the category.
         * @type {string}
         * @protected
         */
        protected color_: string;
        /**
         * The html container for the category.
         * @type {?Element}
         * @protected
         */
        protected htmlDiv_: Element | null;
        /**
         * The html element for the category row.
         * @type {?Element}
         * @protected
         */
        protected rowDiv_: Element | null;
        /**
         * The html element that holds children elements of the category row.
         * @type {?Element}
         * @protected
         */
        protected rowContents_: Element | null;
        /**
         * The html element for the toolbox icon.
         * @type {?Element}
         * @protected
         */
        protected iconDom_: Element | null;
        /**
         * The html element for the toolbox label.
         * @type {?Element}
         * @protected
         */
        protected labelDom_: Element | null;
        /**
         * All the css class names that are used to create a category.
         * @type {!ToolboxCategory.CssConfig}
         * @protected
         */
        protected cssConfig_: ToolboxCategory.CssConfig;
        /**
         * True if the category is meant to be hidden, false otherwise.
         * @type {boolean}
         * @protected
         */
        protected isHidden_: boolean;
        /**
         * True if this category is disabled, false otherwise.
         * @type {boolean}
         * @protected
         */
        protected isDisabled_: boolean;
        /**
         * The flyout items for this category.
         * @type {string|!toolbox.FlyoutItemInfoArray}
         * @protected
         */
        protected flyoutItems_: string | toolbox.FlyoutItemInfoArray;
        /**
         * Creates an object holding the default classes for a category.
         * @return {!ToolboxCategory.CssConfig} The configuration object holding
         *    all the CSS classes for a category.
         * @protected
         */
        protected makeDefaultCssConfig_(): ToolboxCategory.CssConfig;
        /**
         * Parses the contents array depending on if the category is a dynamic category,
         * or if its contents are meant to be shown in the flyout.
         * @param {!toolbox.CategoryInfo} categoryDef The information needed
         *     to create a category.
         * @protected
         */
        protected parseContents_(categoryDef: toolbox.CategoryInfo): void;
        /**
         * @override
         */
        override init(): void;
        /**
         * Creates the DOM for the category.
         * @return {!Element} The parent element for the category.
         * @protected
         */
        protected createDom_(): Element;
        /**
         * Creates the container that holds the row and any subcategories.
         * @return {!Element} The div that holds the icon and the label.
         * @protected
         */
        protected createContainer_(): Element;
        /**
         * Creates the parent of the contents container. All clicks will happen on this
         * div.
         * @return {!Element} The div that holds the contents container.
         * @protected
         */
        protected createRowContainer_(): Element;
        /**
         * Creates the container for the label and icon.
         * This is necessary so we can set all subcategory pointer events to none.
         * @return {!Element} The div that holds the icon and the label.
         * @protected
         */
        protected createRowContentsContainer_(): Element;
        /**
         * Creates the span that holds the category icon.
         * @return {!Element} The span that holds the category icon.
         * @protected
         */
        protected createIconDom_(): Element;
        /**
         * Creates the span that holds the category label.
         * This should have an ID for accessibility purposes.
         * @param {string} name The name of the category.
         * @return {!Element} The span that holds the category label.
         * @protected
         */
        protected createLabelDom_(name: string): Element;
        /**
         * Updates the color for this category.
         * @public
         */
        public refreshTheme(): void;
        /**
         * Add the strip of color to the toolbox category.
         * @param {string} color The category color.
         * @protected
         */
        protected addColorBorder_(color: string): void;
        /**
         * Gets either the color or the style for a category.
         * @param {!toolbox.CategoryInfo} categoryDef The object holding
         *    information on the category.
         * @return {string} The hex color for the category.
         * @protected
         */
        protected getColor_(categoryDef: toolbox.CategoryInfo): string;
        /**
         * Sets the color for the category using the style name and returns the new
         * color as a hex string.
         * @param {string} styleName Name of the style.
         * @return {string} The hex color for the category.
         * @private
         */
        private getColorfromStyle_;
        /**
         * Gets the HTML element that is clickable.
         * The parent toolbox element receives clicks. The parent toolbox will add an ID
         * to this element so it can pass the onClick event to the correct toolboxItem.
         * @return {!Element} The HTML element that receives clicks.
         * @public
         */
        public getClickTarget(): Element;
        /**
         * Parses the color on the category.
         * @param {number|string} colorValue HSV hue value (0 to 360), #RRGGBB string,
         *     or a message reference string pointing to one of those two values.
         * @return {string} The hex color for the category.
         * @private
         */
        private parseColor_;
        /**
         * Adds appropriate classes to display an open icon.
         * @param {?Element} iconDiv The div that holds the icon.
         * @protected
         */
        protected openIcon_(iconDiv: Element | null): void;
        /**
         * Adds appropriate classes to display a closed icon.
         * @param {?Element} iconDiv The div that holds the icon.
         * @protected
         */
        protected closeIcon_(iconDiv: Element | null): void;
        /**
         * Sets whether the category is visible or not.
         * For a category to be visible its parent category must also be expanded.
         * @param {boolean} isVisible True if category should be visible.
         * @protected
         */
        protected setVisible_(isVisible: boolean): void;
        /**
         * Hide the category.
         */
        hide(): void;
        /**
         * Show the category. Category will only appear if its parent category is also
         * expanded.
         */
        show(): void;
        /**
         * Whether the category is visible.
         * A category is only visible if all of its ancestors are expanded and isHidden_
         * is false.
         * @return {boolean} True if the category is visible, false otherwise.
         * @public
         */
        public isVisible(): boolean;
        /**
         * Whether all ancestors of a category (parent and parent's parent, etc.) are
         * expanded.
         * @return {boolean} True only if every ancestor is expanded
         * @protected
         */
        protected allAncestorsExpanded_(): boolean;
        /**
         * @override
         */
        override isSelectable(): boolean;
        /**
         * Handles when the toolbox item is clicked.
         * @param {!Event} _e Click event to handle.
         * @public
         */
        public onClick(_e: Event): void;
        /**
         * Sets the current category as selected.
         * @param {boolean} isSelected True if this category is selected, false
         *     otherwise.
         * @public
         */
        public setSelected(isSelected: boolean): void;
        /**
         * Sets whether the category is disabled.
         * @param {boolean} isDisabled True to disable the category, false otherwise.
         */
        setDisabled(isDisabled: boolean): void;
        /**
         * Gets the name of the category. Used for emitting events.
         * @return {string} The name of the toolbox item.
         * @public
         */
        public getName(): string;
        /**
         * @override
         */
        override getParent(): any;
        /**
         * @override
         */
        override getDiv(): Element;
        /**
         * Gets the contents of the category. These are items that are meant to be
         * displayed in the flyout.
         * @return {!toolbox.FlyoutItemInfoArray|string} The definition
         *     of items to be displayed in the flyout.
         * @public
         */
        public getContents(): any | string;
        /**
         * Updates the contents to be displayed in the flyout.
         * If the flyout is open when the contents are updated, refreshSelection on the
         * toolbox must also be called.
         * @param {!toolbox.FlyoutDefinition|string} contents The contents
         *     to be displayed in the flyout. A string can be supplied to create a
         *     dynamic category.
         * @public
         */
        public updateFlyoutContents(contents: toolbox.FlyoutDefinition | string): void;
        /**
         * @override
         */
        override dispose(): void;
    }
    export namespace ToolboxCategory {
        const registrationName: string;
        const nestedPadding: number;
        const borderWidth: number;
        const defaultBackgroundColor: string;
        /**
         * All the CSS class names that are used to create a category.
         */
        type CssConfig = {
            container: (string | undefined);
            row: (string | undefined);
            rowcontentcontainer: (string | undefined);
            icon: (string | undefined);
            label: (string | undefined);
            selected: (string | undefined);
            openicon: (string | undefined);
            closedicon: (string | undefined);
        };
    }
    import * as toolbox from "utils/toolbox";
    import { IToolbox } from "interfaces/i_toolbox";
    import { ICollapsibleToolboxItem } from "interfaces/i_collapsible_toolbox_item";
}
declare module "toolbox/separator" {
    import { ToolboxItem } from "toolbox/toolbox_item";
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
    export class ToolboxSeparator extends ToolboxItem {
        constructor(separatorDef: any, toolbox: any);
        /**
         * All the CSS class names that are used to create a separator.
         * @type {!ToolboxSeparator.CssConfig}
         * @protected
         */
        protected cssConfig_: ToolboxSeparator.CssConfig;
        /**
         * @override
         */
        override init(): void;
        /**
         * Creates the DOM for a separator.
         * @return {!Element} The parent element for the separator.
         * @protected
         */
        protected createDom_(): Element;
        htmlDiv_: HTMLDivElement;
        /**
         * @override
         */
        override getDiv(): HTMLDivElement;
        /**
         * @override
         */
        override dispose(): void;
    }
    export namespace ToolboxSeparator {
        const registrationName: string;
        /**
         * All the CSS class names that are used to create a separator.
         */
        type CssConfig = {
            container: (string | undefined);
        };
    }
}
declare module "utils/toolbox" {
/**
 * The information needed to create a block in the toolbox.
 * Note that disabled has a different type for backwards compatibility.
 * @typedef {{
 *            kind:string,
 *            blockxml:(string|!Node|undefined),
 *            type:(string|undefined),
 *            gap:(string|number|undefined),
 *            disabled: (string|boolean|undefined),
 *            enabled: (boolean|undefined),
 *            id: (string|undefined),
 *            x: (number|undefined),
 *            y: (number|undefined),
 *            collapsed: (boolean|undefined),
 *            inline: (boolean|undefined),
 *            data: (string|undefined),
 *            extra-state: (*|undefined),
 *            icons: (!Object<string, *>|undefined),
 *            fields: (!Object<string, *>|undefined),
 *            inputs: (!Object<string, !ConnectionState>|undefined),
 *            next: (!ConnectionState|undefined)
 *          }}
 * @alias Blockly.utils.toolbox.BlockInfo
 */
export type BlockInfo = any;
    /**
 * An array holding flyout items.
 * @typedef {
 *            Array<!FlyoutItemInfo>
     *          }
     * @alias Blockly.utils.toolbox.FlyoutItemInfoArray
     */
    export type FlyoutItemInfoArray = any;

    /**
     * The information needed to create a separator in the toolbox.
     */
    export type SeparatorInfo = {
        kind: string;
        id: (string | undefined);
        gap: (number | undefined);
        cssconfig: (ToolboxSeparator.CssConfig | undefined);
    };
    /**
     * The information needed to create a separator in the toolbox.
     * @typedef {{
     *            kind:string,
     *            id:(string|undefined),
     *            gap:(number|undefined),
     *            cssconfig:(!ToolboxSeparator.CssConfig|undefined)
     *          }}
     * @alias Blockly.utils.toolbox.SeparatorInfo
     */
    export let SeparatorInfo: any;
    /**
     * The information needed to create a button in the toolbox.
     */
    export type ButtonInfo = {
        kind: string;
        text: string;
        callbackkey: string;
    };
    /**
     * The information needed to create a button in the toolbox.
     * @typedef {{
     *            kind:string,
     *            text:string,
     *            callbackkey:string
     *          }}
     * @alias Blockly.utils.toolbox.ButtonInfo
     */
    export let ButtonInfo: any;
    /**
     * The information needed to create a label in the toolbox.
     */
    export type LabelInfo = {
        kind: string;
        text: string;
        id: (string | undefined);
    };
    /**
     * The information needed to create a label in the toolbox.
     * @typedef {{
     *            kind:string,
     *            text:string,
     *            id:(string|undefined)
     *          }}
     * @alias Blockly.utils.toolbox.LabelInfo
     */
    export let LabelInfo: any;
    /**
     * The information needed to create either a button or a label in the flyout.
     */
    export type ButtonOrLabelInfo = ButtonInfo | LabelInfo;
    /**
     * The information needed to create either a button or a label in the flyout.
     * @typedef {ButtonInfo|
     *           LabelInfo}
     * @alias Blockly.utils.toolbox.ButtonOrLabelInfo
     */
    export let ButtonOrLabelInfo: any;
    /**
     * The information needed to create a category in the toolbox.
     */
    export type StaticCategoryInfo = {
        kind: string;
        name: string;
        contents: Array<ToolboxItemInfo>;
        id: (string | undefined);
        categorystyle: (string | undefined);
        color: (string | undefined);
        cssconfig: (ToolboxCategory.CssConfig | undefined);
        hidden: (string | undefined);
    };
    /**
     * The information needed to create a category in the toolbox.
     * @typedef {{
     *            kind:string,
     *            name:string,
     *            contents:!Array<!ToolboxItemInfo>,
     *            id:(string|undefined),
     *            categorystyle:(string|undefined),
     *            color:(string|undefined),
     *            cssconfig:(!ToolboxCategory.CssConfig|undefined),
     *            hidden:(string|undefined)
     *          }}
     * @alias Blockly.utils.toolbox.StaticCategoryInfo
     */
    export let StaticCategoryInfo: any;
    /**
     * The information needed to create a custom category.
     */
    export type DynamicCategoryInfo = {
        kind: string;
        custom: string;
        id: (string | undefined);
        categorystyle: (string | undefined);
        color: (string | undefined);
        cssconfig: (ToolboxCategory.CssConfig | undefined);
        hidden: (string | undefined);
    };
    /**
     * The information needed to create a custom category.
     * @typedef {{
     *            kind:string,
     *            custom:string,
     *            id:(string|undefined),
     *            categorystyle:(string|undefined),
     *            color:(string|undefined),
     *            cssconfig:(!ToolboxCategory.CssConfig|undefined),
     *            hidden:(string|undefined)
     *          }}
     * @alias Blockly.utils.toolbox.DynamicCategoryInfo
     */
    export let DynamicCategoryInfo: any;
    /**
     * The information needed to create either a dynamic or static category.
     */
    export type CategoryInfo = StaticCategoryInfo | DynamicCategoryInfo;
    /**
     * The information needed to create either a dynamic or static category.
     * @typedef {StaticCategoryInfo|
     *           DynamicCategoryInfo}
     * @alias Blockly.utils.toolbox.CategoryInfo
     */
    export let CategoryInfo: any;
    /**
     * Any information that can be used to create an item in the toolbox.
     */
    export type ToolboxItemInfo = FlyoutItemInfo | StaticCategoryInfo;
    /**
     * Any information that can be used to create an item in the toolbox.
     * @typedef {FlyoutItemInfo|
     *           StaticCategoryInfo}
     * @alias Blockly.utils.toolbox.ToolboxItemInfo
     */
    export let ToolboxItemInfo: any;
    /**
     * All the different types that can be displayed in a flyout.
     */
    export type FlyoutItemInfo = any | SeparatorInfo | ButtonInfo | LabelInfo | DynamicCategoryInfo;
    /**
     * All the different types that can be displayed in a flyout.
     * @typedef {BlockInfo|
     *           SeparatorInfo|
     *           ButtonInfo|
     *           LabelInfo|
     *           DynamicCategoryInfo}
     * @alias Blockly.utils.toolbox.FlyoutItemInfo
     */
    export let FlyoutItemInfo: any;
    /**
     * The JSON definition of a toolbox.
     */
    export type ToolboxInfo = {
        kind: (string | undefined);
        contents: Array<ToolboxItemInfo>;
    };
    /**
     * The JSON definition of a toolbox.
     * @typedef {{
     *            kind:(string|undefined),
     *            contents:!Array<!ToolboxItemInfo>
     *          }}
     * @alias Blockly.utils.toolbox.ToolboxInfo
     */
    export let ToolboxInfo: any;
    /**
     * An array holding flyout items.
     * @typedef {
     *            Array<!FlyoutItemInfo>
     *          }
     * @alias Blockly.utils.toolbox.FlyoutItemInfoArray
     */
    export let FlyoutItemInfoArray: any;
    /**
     * All of the different types that can create a toolbox.
     */
    export type ToolboxDefinition = Node | ToolboxInfo | string;
    /**
     * All of the different types that can create a toolbox.
     * @typedef {Node|
     *           ToolboxInfo|
     *           string}
     * @alias Blockly.utils.toolbox.ToolboxDefinition
     */
    export let ToolboxDefinition: any;
    /**
     * All of the different types that can be used to show items in a flyout.
     */
    export type FlyoutDefinition = any | NodeList | ToolboxInfo | Array<Node>;
    /**
     * All of the different types that can be used to show items in a flyout.
     * @typedef {FlyoutItemInfoArray|
     *           NodeList|
     *           ToolboxInfo|
     *           Array<!Node>}
     * @alias Blockly.utils.toolbox.FlyoutDefinition
     */
    export let FlyoutDefinition: any;
    /**
     * *
     */
    export type Position = number;
    export namespace Position {
        const TOP: number;
        const BOTTOM: number;
        const LEFT: number;
        const RIGHT: number;
    }
    /**
     * Converts the toolbox definition into toolbox JSON.
     * @param {?ToolboxDefinition} toolboxDef The definition
     *     of the toolbox in one of its many forms.
     * @return {?ToolboxInfo} Object holding information
     *     for creating a toolbox.
     * @alias Blockly.utils.toolbox.convertToolboxDefToJson
     * @package
     */
    export function convertToolboxDefToJson(toolboxDef: ToolboxDefinition | null): ToolboxInfo | null;
    /**
     * Converts the flyout definition into a list of flyout items.
     * @param {?FlyoutDefinition} flyoutDef The definition of
     *    the flyout in one of its many forms.
     * @return {!FlyoutItemInfoArray} A list of flyout items.
     * @alias Blockly.utils.toolbox.convertFlyoutDefToJsonArray
     * @package
     */
    export function convertFlyoutDefToJsonArray(flyoutDef: FlyoutDefinition | null): any;
    /**
     * Whether or not the toolbox definition has categories.
     * @param {?ToolboxInfo} toolboxJson Object holding
     *     information for creating a toolbox.
     * @return {boolean} True if the toolbox has categories.
     * @alias Blockly.utils.toolbox.hasCategories
     * @package
     */
    export function hasCategories(toolboxJson: ToolboxInfo | null): boolean;
    /**
     * Whether or not the category is collapsible.
     * @param {!CategoryInfo} categoryInfo Object holing
     *    information for creating a category.
     * @return {boolean} True if the category has subcategories.
     * @alias Blockly.utils.toolbox.isCategoryCollapsible
     * @package
     */
    export function isCategoryCollapsible(categoryInfo: CategoryInfo): boolean;
    /**
     * Parse the provided toolbox tree into a consistent DOM format.
     * @param {?Node|?string} toolboxDef DOM tree of blocks, or text representation
     *    of same.
     * @return {?Node} DOM tree of blocks, or null.
     * @alias Blockly.utils.toolbox.parseToolboxTree
     */
    export function parseToolboxTree(toolboxDef: (Node | (string | null)) | null): Node | null;
    import { ToolboxSeparator } from "toolbox/separator";
    import { ToolboxCategory } from "toolbox/category";
}
declare module "blockly_options" {
    /**
     * @license
     * Copyright 2016 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * @fileoverview Object that defines user-specified options for the workspace.
     */
    /**
     * Object that defines user-specified options for the workspace.
     * @namespace Blockly.BlocklyOptions
     */
    /**
     * Blockly options.
     * This interface is further described in
     * `typings/parts/blockly-interfaces.d.ts`.
     * @interface
     * @alias Blockly.BlocklyOptions
     */
    export class BlocklyOptions {
    }
}
declare module "utils/svg_paths" {
    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * @fileoverview Methods for creating parts of SVG path strings.  See
     * developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths
     */
    /**
     * Methods for creating parts of SVG path strings.  See
     * @namespace Blockly.utils.svgPaths
     */
    /**
     * Create a string representing the given x, y pair.  It does not matter whether
     * the coordinate is relative or absolute.  The result has leading
     * and trailing spaces, and separates the x and y coordinates with a comma but
     * no space.
     * @param {number} x The x coordinate.
     * @param {number} y The y coordinate.
     * @return {string} A string of the format ' x,y '
     * @alias Blockly.utils.svgPaths.point
     */
    export function point(x: number, y: number): string;
    /**
     * Draw a cubic or quadratic curve.  See
     * developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#Cubic_B%C3%A9zier_Curve
     * These coordinates are unitless and hence in the user coordinate system.
     * @param {string} command The command to use.
     *     Should be one of: c, C, s, S, q, Q.
     * @param {!Array<string>} points  An array containing all of the points to pass
     *     to the curve command, in order.  The points are represented as strings of
     *     the format ' x, y '.
     * @return {string} A string defining one or more Bezier curves.  See the MDN
     *     documentation for exact format.
     * @alias Blockly.utils.svgPaths.curve
     */
    export function curve(command: string, points: Array<string>): string;
    /**
     * Move the cursor to the given position without drawing a line.
     * The coordinates are absolute.
     * These coordinates are unitless and hence in the user coordinate system.
     * See developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Line_commands
     * @param {number} x The absolute x coordinate.
     * @param {number} y The absolute y coordinate.
     * @return {string} A string of the format ' M x,y '
     * @alias Blockly.utils.svgPaths.moveTo
     */
    export function moveTo(x: number, y: number): string;
    /**
     * Move the cursor to the given position without drawing a line.
     * Coordinates are relative.
     * These coordinates are unitless and hence in the user coordinate system.
     * See developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Line_commands
     * @param {number} dx The relative x coordinate.
     * @param {number} dy The relative y coordinate.
     * @return {string} A string of the format ' m dx,dy '
     * @alias Blockly.utils.svgPaths.moveBy
     */
    export function moveBy(dx: number, dy: number): string;
    /**
     * Draw a line from the current point to the end point, which is the current
     * point shifted by dx along the x-axis and dy along the y-axis.
     * These coordinates are unitless and hence in the user coordinate system.
     * See developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Line_commands
     * @param {number} dx The relative x coordinate.
     * @param {number} dy The relative y coordinate.
     * @return {string} A string of the format ' l dx,dy '
     * @alias Blockly.utils.svgPaths.lineTo
     */
    export function lineTo(dx: number, dy: number): string;
    /**
     * Draw multiple lines connecting all of the given points in order.  This is
     * equivalent to a series of 'l' commands.
     * These coordinates are unitless and hence in the user coordinate system.
     * See developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Line_commands
     * @param {!Array<string>} points An array containing all of the points to
     *     draw lines to, in order.  The points are represented as strings of the
     *     format ' dx,dy '.
     * @return {string} A string of the format ' l (dx,dy)+ '
     * @alias Blockly.utils.svgPaths.line
     */
    export function line(points: Array<string>): string;
    /**
     * Draw a horizontal or vertical line.
     * The first argument specifies the direction and whether the given position is
     * relative or absolute.
     * These coordinates are unitless and hence in the user coordinate system.
     * See developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#LineTo_path_commands
     * @param {string} command The command to prepend to the coordinate.  This
     *     should be one of: V, v, H, h.
     * @param {number} val The coordinate to pass to the command.  It may be
     *     absolute or relative.
     * @return {string} A string of the format ' command val '
     * @alias Blockly.utils.svgPaths.lineOnAxis
     */
    export function lineOnAxis(command: string, val: number): string;
    /**
     * Draw an elliptical arc curve.
     * These coordinates are unitless and hence in the user coordinate system.
     * See developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#Elliptical_Arc_Curve
     * @param {string} command The command string.  Either 'a' or 'A'.
     * @param {string} flags The flag string.  See the MDN documentation for a
     *     description and examples.
     * @param {number} radius The radius of the arc to draw.
     * @param {string} point The point to move the cursor to after drawing the arc,
     *     specified either in absolute or relative coordinates depending on the
     *     command.
     * @return {string} A string of the format 'command radius radius flags point'
     * @alias Blockly.utils.svgPaths.arc
     */
    export function arc(command: string, flags: string, radius: number, point: string): string;
}
declare module "utils/style" {
    /**
     * Gets the height and width of an element.
     * Similar to Closure's goog.style.getSize
     * @param {!Element} element Element to get size of.
     * @return {!Size} Object with width/height properties.
     * @alias Blockly.utils.style.getSize
     */
    export function getSize(element: Element): Size;
    /**
     * Retrieves a computed style value of a node. It returns empty string if the
     * value cannot be computed (which will be the case in Internet Explorer) or
     * "none" if the property requested is an SVG one and it has not been
     * explicitly set (firefox and webkit).
     *
     * Copied from Closure's goog.style.getComputedStyle
     *
     * @param {!Element} element Element to get style of.
     * @param {string} property Property to get (camel-case).
     * @return {string} Style value.
     * @alias Blockly.utils.style.getComputedStyle
     */
    export function getComputedStyle(element: Element, property: string): string;
    /**
     * Gets the cascaded style value of a node, or null if the value cannot be
     * computed (only Internet Explorer can do this).
     *
     * Copied from Closure's goog.style.getCascadedStyle
     *
     * @param {!Element} element Element to get style of.
     * @param {string} style Property to get (camel-case).
     * @return {string} Style value.
     * @alias Blockly.utils.style.getCascadedStyle
     */
    export function getCascadedStyle(element: Element, style: string): string;
    /**
     * Returns a Coordinate object relative to the top-left of the HTML document.
     * Similar to Closure's goog.style.getPageOffset
     * @param {!Element} el Element to get the page offset for.
     * @return {!Coordinate} The page offset.
     * @alias Blockly.utils.style.getPageOffset
     */
    export function getPageOffset(el: Element): Coordinate;
    /**
     * Calculates the viewport coordinates relative to the document.
     * Similar to Closure's goog.style.getViewportPageOffset
     * @return {!Coordinate} The page offset of the viewport.
     * @alias Blockly.utils.style.getViewportPageOffset
     */
    export function getViewportPageOffset(): Coordinate;
    /**
     * Shows or hides an element from the page. Hiding the element is done by
     * setting the display property to "none", removing the element from the
     * rendering hierarchy so it takes up no space. To show the element, the default
     * inherited display property is restored (defined either in stylesheets or by
     * the browser's default style rules).
     * Copied from Closure's goog.style.getViewportPageOffset
     *
     * @param {!Element} el Element to show or hide.
     * @param {*} isShown True to render the element in its default style,
     *     false to disable rendering the element.
     * @alias Blockly.utils.style.setElementShown
     */
    export function setElementShown(el: Element, isShown: any): void;
    /**
     * Returns true if the element is using right to left (RTL) direction.
     * Copied from Closure's goog.style.isRightToLeft
     *
     * @param {!Element} el The element to test.
     * @return {boolean} True for right to left, false for left to right.
     * @alias Blockly.utils.style.isRightToLeft
     */
    export function isRightToLeft(el: Element): boolean;
    /**
     * Gets the computed border widths (on all sides) in pixels
     * Copied from Closure's goog.style.getBorderBox
     * @param {!Element} element  The element to get the border widths for.
     * @return {!Object} The computed border widths.
     * @alias Blockly.utils.style.getBorderBox
     */
    export function getBorderBox(element: Element): any;
    /**
     * Changes the scroll position of `container` with the minimum amount so
     * that the content and the borders of the given `element` become visible.
     * If the element is bigger than the container, its top left corner will be
     * aligned as close to the container's top left corner as possible.
     * Copied from Closure's goog.style.scrollIntoContainerView
     *
     * @param {!Element} element The element to make visible.
     * @param {!Element} container The container to scroll. If not set, then the
     *     document scroll element will be used.
     * @param {boolean=} opt_center Whether to center the element in the container.
     *     Defaults to false.
     * @alias Blockly.utils.style.scrollIntoContainerView
     */
    export function scrollIntoContainerView(element: Element, container: Element, opt_center?: boolean | undefined): void;
    /**
     * Calculate the scroll position of `container` with the minimum amount so
     * that the content and the borders of the given `element` become visible.
     * If the element is bigger than the container, its top left corner will be
     * aligned as close to the container's top left corner as possible.
     * Copied from Closure's goog.style.getContainerOffsetToScrollInto
     *
     * @param {!Element} element The element to make visible.
     * @param {!Element} container The container to scroll. If not set, then the
     *     document scroll element will be used.
     * @param {boolean=} opt_center Whether to center the element in the container.
     *     Defaults to false.
     * @return {!Coordinate} The new scroll position of the container,
     *     in form of goog.math.Coordinate(scrollLeft, scrollTop).
     * @alias Blockly.utils.style.getContainerOffsetToScrollInto
     */
    export function getContainerOffsetToScrollInto(element: Element, container: Element, opt_center?: boolean | undefined): Coordinate;
    import { Size } from "utils/size";
    import { Coordinate } from "utils/coordinate";
}
declare module "utils/rect" {
    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * @fileoverview Utility methods for rectangle manipulation.
     * These methods are not specific to Blockly, and could be factored out into
     * a JavaScript framework such as Closure.
     */
    /**
     * Utility methods for rectangle manipulation.
     * These methods are not specific to Blockly, and could be factored out into
     * a JavaScript framework such as Closure.
     * @class
     */
    /**
     * Class for representing rectangular regions.
     * @param {number} top Top.
     * @param {number} bottom Bottom.
     * @param {number} left Left.
     * @param {number} right Right.
     * @struct
     * @constructor
     * @alias Blockly.utils.Rect
     */
    export class Rect {
        constructor(top: any, bottom: any, left: any, right: any);
        /** @type {number} */
        top: number;
        /** @type {number} */
        bottom: number;
        /** @type {number} */
        left: number;
        /** @type {number} */
        right: number;
        /**
         * Tests whether this rectangle contains a x/y coordinate.
         *
         * @param {number} x The x coordinate to test for containment.
         * @param {number} y The y coordinate to test for containment.
         * @return {boolean} Whether this rectangle contains given coordinate.
         */
        contains(x: number, y: number): boolean;
        /**
         * Tests whether this rectangle intersects the provided rectangle.
         * Assumes that the coordinate system increases going down and left.
         * @param {!Rect} other The other rectangle to check for
         *    intersection with.
         * @return {boolean} Whether this rectangle intersects the provided rectangle.
         */
        intersects(other: Rect): boolean;
    }
}
declare module "utils/svg_math" {
    export namespace TEST_ONLY {
        export { XY_REGEX };
        export { XY_STYLE_REGEX };
    }
    /**
     * Return the coordinates of the top-left corner of this element relative to
     * its parent.  Only for SVG elements and children (e.g. rect, g, path).
     * @param {!Element} element SVG element to find the coordinates of.
     * @return {!Coordinate} Object with .x and .y properties.
     * @alias Blockly.svgMath.getRelativeXY
     */
    export function getRelativeXY(element: Element): Coordinate;
    /**
     * Return the coordinates of the top-left corner of this element relative to
     * the div Blockly was injected into.
     * @param {!Element} element SVG element to find the coordinates of. If this is
     *     not a child of the div Blockly was injected into, the behaviour is
     *     undefined.
     * @return {!Coordinate} Object with .x and .y properties.
     * @alias Blockly.svgMath.getInjectionDivXY
     */
    export function getInjectionDivXY(element: Element): Coordinate;
    /**
     * Check if 3D transforms are supported by adding an element
     * and attempting to set the property.
     * @return {boolean} True if 3D transforms are supported.
     * @alias Blockly.svgMath.is3dSupported
     */
    export function is3dSupported(): boolean;
    /**
     * Get the position of the current viewport in window coordinates.  This takes
     * scroll into account.
     * @return {!Rect} An object containing window width, height, and
     *     scroll position in window coordinates.
     * @alias Blockly.svgMath.getViewportBBox
     * @package
     */
    export function getViewportBBox(): Rect;
    /**
     * Gets the document scroll distance as a coordinate object.
     * Copied from Closure's goog.dom.getDocumentScroll.
     * @return {!Coordinate} Object with values 'x' and 'y'.
     * @alias Blockly.svgMath.getDocumentScroll
     */
    export function getDocumentScroll(): Coordinate;
    /**
     * Converts screen coordinates to workspace coordinates.
     * @param {!WorkspaceSvg} ws The workspace to find the coordinates on.
     * @param {!Coordinate} screenCoordinates The screen coordinates to
     * be converted to workspace coordinates
     * @return {!Coordinate} The workspace coordinates.
     * @alias Blockly.svgMath.screenToWsCoordinates
     */
    export function screenToWsCoordinates(ws: WorkspaceSvg, screenCoordinates: Coordinate): Coordinate;
    /**
     * Returns the dimensions of the specified SVG image.
     * @param {!SVGElement} svg SVG image.
     * @return {!Size} Contains width and height properties.
     * @deprecated Use workspace.getCachedParentSvgSize. (2021 March 5)
     * @alias Blockly.utils.svgMath.svgSize
     */
    export function svgSize(svg: SVGElement): Size;
    /**
     * Static regex to pull the x,y values out of an SVG translate() directive.
     * Note that Firefox and IE (9,10) return 'translate(12)' instead of
     * 'translate(12, 0)'.
     * Note that IE (9,10) returns 'translate(16 8)' instead of 'translate(16, 8)'.
     * Note that IE has been reported to return scientific notation (0.123456e-42).
     * @type {!RegExp}
     */
    const XY_REGEX: RegExp;
    /**
     * Static regex to pull the x,y values out of a translate() or translate3d()
     * style property.
     * Accounts for same exceptions as XY_REGEX.
     * @type {!RegExp}
     */
    const XY_STYLE_REGEX: RegExp;
    import { Coordinate } from "utils/coordinate";
    import { Rect } from "utils/rect";
    import { WorkspaceSvg } from "workspace_svg";
    import { Size } from "utils/size";
    export {};
}
declare module "rendered_connection" {
    export class RenderedConnection extends Connection {
        /**
         * Class for a connection between blocks that may be rendered on screen.
         * @param {!BlockSvg} source The block establishing this connection.
         * @param {number} type The type of the connection.
         * @extends {Connection}
         * @constructor
         * @alias Blockly.RenderedConnection
         */
        constructor(source: BlockSvg, type: number);
        /**
         * Connection database for connections of this type on the current workspace.
         * @const {!ConnectionDB}
         * @private
         */
        private db_;
        /**
         * Connection database for connections compatible with this type on the
         * current workspace.
         * @const {!ConnectionDB}
         * @private
         */
        private dbOpposite_;
        /**
         * Workspace units, (0, 0) is top left of block.
         * @type {!Coordinate}
         * @private
         */
        private offsetInBlock_;
        /**
         * Describes the state of this connection's tracked-ness.
         * @type {RenderedConnection.TrackedState}
         * @private
         */
        private trackedState_;
        /**
         * Connection this connection connects to.  Null if not connected.
         * @type {RenderedConnection}
         */
        targetConnection: RenderedConnection;
        /**
         * Dispose of this connection. Remove it from the database (if it is
         * tracked) and call the super-function to deal with connected blocks.
         * @override
         * @package
         */
        override dispose(): void;
        /**
         * Get the source block for this connection.
         * @return {!BlockSvg} The source block.
         * @override
         */
        override getSourceBlock(): BlockSvg;
        /**
         * Returns the block that this connection connects to.
         * @return {?BlockSvg} The connected block or null if none is connected.
         * @override
         */
        override targetBlock(): BlockSvg | null;
        /**
         * Returns the distance between this connection and another connection in
         * workspace units.
         * @param {!Connection} otherConnection The other connection to measure
         *     the distance to.
         * @return {number} The distance between connections, in workspace units.
         */
        distanceFrom(otherConnection: Connection): number;
        /**
         * Move the block(s) belonging to the connection to a point where they don't
         * visually interfere with the specified connection.
         * @param {!Connection} staticConnection The connection to move away
         *     from.
         * @package
         */
        bumpAwayFrom(staticConnection: Connection): void;
        /**
         * Change the connection's coordinates.
         * @param {number} x New absolute x coordinate, in workspace coordinates.
         * @param {number} y New absolute y coordinate, in workspace coordinates.
         */
        moveTo(x: number, y: number): void;
        x: number;
        y: number;
        /**
         * Change the connection's coordinates.
         * @param {number} dx Change to x coordinate, in workspace units.
         * @param {number} dy Change to y coordinate, in workspace units.
         */
        moveBy(dx: number, dy: number): void;
        /**
         * Move this connection to the location given by its offset within the block and
         * the location of the block's top left corner.
         * @param {!Coordinate} blockTL The location of the top left
         *     corner of the block, in workspace coordinates.
         */
        moveToOffset(blockTL: Coordinate): void;
        /**
         * Set the offset of this connection relative to the top left of its block.
         * @param {number} x The new relative x, in workspace units.
         * @param {number} y The new relative y, in workspace units.
         */
        setOffsetInBlock(x: number, y: number): void;
        /**
         * Get the offset of this connection relative to the top left of its block.
         * @return {!Coordinate} The offset of the connection.
         * @package
         */
        getOffsetInBlock(): Coordinate;
        /**
         * Move the blocks on either side of this connection right next to each other.
         * @package
         */
        tighten(): void;
        /**
         * Find the closest compatible connection to this connection.
         * All parameters are in workspace units.
         * @param {number} maxLimit The maximum radius to another connection.
         * @param {!Coordinate} dxy Offset between this connection's location
         *     in the database and the current location (as a result of dragging).
         * @return {!{connection: ?Connection, radius: number}} Contains two
         *     properties: 'connection' which is either another connection or null,
         *     and 'radius' which is the distance.
         */
        closest(maxLimit: number, dxy: Coordinate): {
            connection: Connection | null;
            radius: number;
        };
        /**
         * Add highlighting around this connection.
         */
        highlight(): void;
        /**
         * Remove the highlighting around this connection.
         */
        unhighlight(): void;
        /**
         * Set whether this connections is tracked in the database or not.
         * @param {boolean} doTracking If true, start tracking. If false, stop tracking.
         * @package
         */
        setTracking(doTracking: boolean): void;
        /**
         * Stop tracking this connection, as well as all down-stream connections on
         * any block attached to this connection. This happens when a block is
         * collapsed.
         *
         * Also closes down-stream icons/bubbles.
         * @package
         */
        stopTrackingAll(): void;
        /**
         * Start tracking this connection, as well as all down-stream connections on
         * any block attached to this connection. This happens when a block is expanded.
         * @return {!Array<!Block>} List of blocks to render.
         */
        startTrackingAll(): Array<Block>;
        /**
         * Check if the two connections can be dragged to connect to each other.
         * @param {!Connection} candidate A nearby connection to check.
         * @param {number=} maxRadius The maximum radius allowed for connections, in
         *     workspace units.
         * @return {boolean} True if the connection is allowed, false otherwise.
         * @deprecated July 2020
         */
        isConnectionAllowed(candidate: Connection, maxRadius?: number | undefined): boolean;
        /**
         * Behavior after a connection attempt fails.
         * Bumps this connection away from the other connection. Called when an
         * attempted connection fails.
         * @param {!Connection} otherConnection Connection that this connection
         *     failed to connect to.
         * @package
         */
        onFailedConnect(otherConnection: Connection): void;
        /**
         * Disconnect two blocks that are connected by this connection.
         * @param {!Block} parentBlock The superior block.
         * @param {!Block} childBlock The inferior block.
         * @protected
         * @override
         */
        protected override disconnectInternal_(parentBlock: Block, childBlock: Block): void;
        /**
         * Respawn the shadow block if there was one connected to the this connection.
         * Render/rerender blocks as needed.
         * @protected
         * @override
         */
        protected override respawnShadow_(): void;
        /**
         * Find all nearby compatible connections to this connection.
         * Type checking does not apply, since this function is used for bumping.
         * @param {number} maxLimit The maximum radius to another connection, in
         *     workspace units.
         * @return {!Array<!Connection>} List of connections.
         * @package
         */
        neighbours(maxLimit: number): Array<Connection>;
        /**
         * Connect two connections together.  This is the connection on the superior
         * block.  Rerender blocks as needed.
         * @param {!Connection} childConnection Connection on inferior block.
         * @protected
         */
        protected connect_(childConnection: Connection): void;
        /**
         * Function to be called when this connection's compatible types have changed.
         * @protected
         */
        protected onCheckChanged_(): void;
    }
    export namespace RenderedConnection {
        namespace TrackedState {
            const WILL_TRACK: number;
            const UNTRACKED: number;
            const TRACKED: number;
        }
        /**
         * Enum for different kinds of tracked states.
         *
         * WILL_TRACK means that this connection will add itself to
         * the db on the next moveTo call it receives.
         *
         * UNTRACKED means that this connection will not add
         * itself to the database until setTracking(true) is explicitly called.
         *
         * TRACKED means that this connection is currently being tracked.
         */
        type TrackedState = number;
    }
    import { BlockSvg } from "block_svg";
    import { Connection } from "connection";
    import { Coordinate } from "utils/coordinate";
    import { Block } from "block";
}
declare module "interfaces/i_connection_checker" {
    /**
     * Class for connection type checking logic.
     * @interface
     * @alias Blockly.IConnectionChecker
     */
    export class IConnectionChecker {
    }
}
declare module "constants" {
    /**
     * *
     */
    export type ALIGN = number;
    export namespace ALIGN {
        const LEFT: number;
        const CENTRE: number;
        const RIGHT: number;
    }
    /**
     * The language-neutral ID given to the collapsed input.
     * @const {string}
     * @alias Blockly.constants.COLLAPSED_INPUT_NAME
     */
    export const COLLAPSED_INPUT_NAME: "_TEMP_COLLAPSED_INPUT";
    /**
     * The language-neutral ID given to the collapsed field.
     * @const {string}
     * @alias Blockly.constants.COLLAPSED_FIELD_NAME
     */
    export const COLLAPSED_FIELD_NAME: "_TEMP_COLLAPSED_FIELD";
}
declare module "connection_db" {
    export class ConnectionDB {
        /**
         * Initialize a set of connection DBs for a workspace.
         * @param {!IConnectionChecker} checker The workspace's
         *     connection checker, used to decide if connections are valid during a
         *     drag.
         * @return {!Array<!ConnectionDB>} Array of databases.
         */
        static init(checker: IConnectionChecker): Array<ConnectionDB>;
        /**
         * Database of connections.
         * Connections are stored in order of their vertical component.  This way
         * connections in an area may be looked up quickly using a binary search.
         * @param {!IConnectionChecker} checker The workspace's
         *     connection type checker, used to decide if connections are valid during a
         *     drag.
         * @constructor
         * @alias Blockly.ConnectionDB
         */
        constructor(checker: IConnectionChecker);
        /**
         * Array of connections sorted by y position in workspace units.
         * @type {!Array<!RenderedConnection>}
         * @private
         */
        private connections_;
        /**
         * The workspace's connection type checker, used to decide if connections are
         * valid during a drag.
         * @type {!IConnectionChecker}
         * @private
         */
        private connectionChecker_;
        /**
         * Add a connection to the database. Should not already exist in the database.
         * @param {!RenderedConnection} connection The connection to be added.
         * @param {number} yPos The y position used to decide where to insert the
         *    connection.
         * @package
         */
        addConnection(connection: RenderedConnection, yPos: number): void;
        /**
         * Finds the index of the given connection.
         *
         * Starts by doing a binary search to find the approximate location, then
         * linearly searches nearby for the exact connection.
         * @param {!RenderedConnection} conn The connection to find.
         * @param {number} yPos The y position used to find the index of the connection.
         * @return {number} The index of the connection, or -1 if the connection was
         *     not found.
         * @private
         */
        private findIndexOfConnection_;
        /**
         * Finds the correct index for the given y position.
         * @param {number} yPos The y position used to decide where to
         *    insert the connection.
         * @return {number} The candidate index.
         * @private
         */
        private calculateIndexForYPos_;
        /**
         * Remove a connection from the database.  Must already exist in DB.
         * @param {!RenderedConnection} connection The connection to be removed.
         * @param {number} yPos The y position used to find the index of the connection.
         * @throws {Error} If the connection cannot be found in the database.
         */
        removeConnection(connection: RenderedConnection, yPos: number): void;
        /**
         * Find all nearby connections to the given connection.
         * Type checking does not apply, since this function is used for bumping.
         * @param {!RenderedConnection} connection The connection whose
         *     neighbours should be returned.
         * @param {number} maxRadius The maximum radius to another connection.
         * @return {!Array<!RenderedConnection>} List of connections.
         */
        getNeighbours(connection: RenderedConnection, maxRadius: number): Array<RenderedConnection>;
        /**
         * Is the candidate connection close to the reference connection.
         * Extremely fast; only looks at Y distance.
         * @param {number} index Index in database of candidate connection.
         * @param {number} baseY Reference connection's Y value.
         * @param {number} maxRadius The maximum radius to another connection.
         * @return {boolean} True if connection is in range.
         * @private
         */
        private isInYRange_;
        /**
         * Find the closest compatible connection to this connection.
         * @param {!RenderedConnection} conn The connection searching for a compatible
         *     mate.
         * @param {number} maxRadius The maximum radius to another connection.
         * @param {!Coordinate} dxy Offset between this connection's
         *     location in the database and the current location (as a result of
         *     dragging).
         * @return {!{connection: RenderedConnection, radius: number}}
         *     Contains two properties: 'connection' which is either another
         *     connection or null, and 'radius' which is the distance.
         */
        searchForClosest(conn: RenderedConnection, maxRadius: number, dxy: Coordinate): {
            connection: RenderedConnection;
            radius: number;
        };
    }
    import { RenderedConnection } from "rendered_connection";
    import { Coordinate } from "utils/coordinate";
    import { IConnectionChecker } from "interfaces/i_connection_checker";
}
declare module "interfaces/i_ast_node_location" {
    /**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * @fileoverview The interface for an AST node location.
     */
    /**
     * The interface for an AST node location.
     * @namespace Blockly.IASTNodeLocation
     */
    /**
     * An AST node location interface.
     * @interface
     * @alias Blockly.IASTNodeLocation
     */
    export class IASTNodeLocation {
    }
}
declare module "theme" {
    /**
     * Class for a theme.
     * @param {string} name Theme name.
     * @param {!Object<string, Theme.BlockStyle>=} opt_blockStyles A map
     *     from style names (strings) to objects with style attributes for blocks.
     * @param {!Object<string, Theme.CategoryStyle>=} opt_categoryStyles A
     *     map from style names (strings) to objects with style attributes for
     *     categories.
     * @param {!Theme.ComponentStyle=} opt_componentStyles A map of Blockly
     *     component names to style value.
     * @constructor
     * @alias Blockly.Theme
     */
    export class Theme {
        /**
         * Define a new Blockly theme.
         * @param {string} name The name of the theme.
         * @param {!Object} themeObj An object containing theme properties.
         * @return {!Theme} A new Blockly theme.
         */
        static defineTheme(name: string, themeObj: any): Theme;
        constructor(name: any, opt_blockStyles: any, opt_categoryStyles: any, opt_componentStyles: any);
        /**
         * The theme name. This can be used to reference a specific theme in CSS.
         * @type {string}
         */
        name: string;
        /**
         * The block styles map.
         * @type {!Object<string, !Theme.BlockStyle>}
         * @package
         */
        blockStyles: {
            [x: string]: Theme.BlockStyle;
        };
        /**
         * The category styles map.
         * @type {!Object<string, Theme.CategoryStyle>}
         * @package
         */
        categoryStyles: {
            [x: string]: Theme.CategoryStyle;
        };
        /**
         * The UI components styles map.
         * @type {!Theme.ComponentStyle}
         * @package
         */
        componentStyles: Theme.ComponentStyle;
        /**
         * The font style.
         * @type {!Theme.FontStyle}
         * @package
         */
        fontStyle: Theme.FontStyle;
        /**
         * Whether or not to add a 'hat' on top of all blocks with no previous or
         * output connections.
         * @type {?boolean}
         * @package
         */
        startHats: boolean | null;
        /**
         * Gets the class name that identifies this theme.
         * @return {string} The CSS class name.
         * @package
         */
        getClassName(): string;
        /**
         * Overrides or adds a style to the blockStyles map.
         * @param {string} blockStyleName The name of the block style.
         * @param {Theme.BlockStyle} blockStyle The block style.
         */
        setBlockStyle(blockStyleName: string, blockStyle: Theme.BlockStyle): void;
        /**
         * Overrides or adds a style to the categoryStyles map.
         * @param {string} categoryStyleName The name of the category style.
         * @param {Theme.CategoryStyle} categoryStyle The category style.
         */
        setCategoryStyle(categoryStyleName: string, categoryStyle: Theme.CategoryStyle): void;
        /**
         * Gets the style for a given Blockly UI component.  If the style value is a
         * string, we attempt to find the value of any named references.
         * @param {string} componentName The name of the component.
         * @return {?string} The style value.
         */
        getComponentStyle(componentName: string): string | null;
        /**
         * Configure a specific Blockly UI component with a style value.
         * @param {string} componentName The name of the component.
         * @param {*} styleValue The style value.
         */
        setComponentStyle(componentName: string, styleValue: any): void;
        /**
         * Configure a theme's font style.
         * @param {Theme.FontStyle} fontStyle The font style.
         */
        setFontStyle(fontStyle: Theme.FontStyle): void;
        /**
         * Configure a theme's start hats.
         * @param {boolean} startHats True if the theme enables start hats, false
         *     otherwise.
         */
        setStartHats(startHats: boolean): void;
    }
    export namespace Theme {
        /**
         * A block style.
         */
        type BlockStyle = {
            colorPrimary: string;
            colorSecondary: string;
            colorTertiary: string;
            hat: string;
        };
        /**
         * A category style.
         */
        type CategoryStyle = {
            color: string;
        };
        /**
         * A component style.
         */
        type ComponentStyle = {
            workspaceBackgroundColor: string | null;
            toolboxBackgroundColor: string | null;
            toolboxForegroundColor: string | null;
            flyoutBackgroundColor: string | null;
            flyoutForegroundColor: string | null;
            flyoutOpacity: number | null;
            scrollbarColor: string | null;
            scrollbarOpacity: number | null;
            insertionMarkerColor: string | null;
            insertionMarkerOpacity: number | null;
            markerColor: string | null;
            cursorColor: string | null;
            selectedGlowColor: string | null;
            selectedGlowOpacity: number | null;
            replacementGlowColor: string | null;
            replacementGlowOpacity: number | null;
        };
        /**
         * A font style.
         */
        type FontStyle = {
            family: string | null;
            weight: string | null;
            size: number | null;
        };
    }
}
declare module "theme/classic" {
    /**
     * Classic theme.
     * Contains multi-colored border to create shadow effect.
     * @type {Theme}
     * @alias Blockly.Themes.Classic
     */
    export const Classic: Theme;
    import { Theme } from "theme";
}
declare module "utils/metrics" {
    /**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * @fileoverview Workspace metrics definitions.
     */
    /**
     * Workspace metrics definitions.
     * @namespace Blockly.utils.Metrics
     */
    /**
     * @record
     * @alias Blockly.utils.Metrics
     */
    export class Metrics {
        /**
         * Height of the visible portion of the workspace.
         * @type {number}
         */
        viewHeight: number;
        /**
         * Width of the visible portion of the workspace.
         * @type {number}
         */
        viewWidth: number;
        /**
         * Height of the content.
         * @type {number}
         */
        contentHeight: number;
        /**
         * Width of the content.
         * @type {number}
         */
        contentWidth: number;
        /**
         * Height of the scroll area.
         * @type {number}
         */
        scrollHeight: number;
        /**
         * Width of the scroll area.
         * @type {number}
         */
        scrollWidth: number;
        /**
         * Top-edge of the visible portion of the workspace, relative to the workspace
         * origin.
         * @type {number}
         */
        viewTop: number;
        /**
         * Left-edge of the visible portion of the workspace, relative to the workspace
         * origin.
         * @type {number}
         */
        viewLeft: number;
        /**
         * Top-edge of the content, relative to the workspace origin.
         * @type {number}
         */
        contentTop: number;
        /**
         * Left-edge of the content relative to the workspace origin.
         * @type {number}
         */
        contentLeft: number;
        /**
         * Top-edge of the scroll area, relative to the workspace origin.
         * @type {number}
         */
        scrollTop: number;
        /**
         * Left-edge of the scroll area relative to the workspace origin.
         * @type {number}
         */
        scrollLeft: number;
        /**
         * Top-edge of the visible portion of the workspace, relative to the blocklyDiv.
         * @type {number}
         */
        absoluteTop: number;
        /**
         * Left-edge of the visible portion of the workspace, relative to the
         * blocklyDiv.
         * @type {number}
         */
        absoluteLeft: number;
        /**
         * Height of the Blockly div (the view + the toolbox, simple of otherwise).
         * @type {number}
         */
        svgHeight: number;
        /**
         * Width of the Blockly div (the view + the toolbox, simple or otherwise).
         * @type {number}
         */
        svgWidth: number;
        /**
         * Width of the toolbox, if it exists.  Otherwise zero.
         * @type {number}
         */
        toolboxWidth: number;
        /**
         * Height of the toolbox, if it exists.  Otherwise zero.
         * @type {number}
         */
        toolboxHeight: number;
        /**
         * Top, bottom, left or right. Use TOOLBOX_AT constants to compare.
         * @type {number}
         */
        toolboxPosition: number;
        /**
         * Width of the flyout if it is always open.  Otherwise zero.
         * @type {number}
         */
        flyoutWidth: number;
        /**
         * Height of the flyout if it is always open.  Otherwise zero.
         * @type {number}
         */
        flyoutHeight: number;
    }
}
declare module "options" {
    export class Options {
        /**
         * Parse the user-specified move options, using reasonable defaults where
         *    behaviour is unspecified.
         * @param {!Object} options Dictionary of options.
         * @param {boolean} hasCategories Whether the workspace has categories or not.
         * @return {!Options.MoveOptions} Normalized move options.
         * @private
         */
        private static parseMoveOptions_;
        /**
         * Parse the user-specified zoom options, using reasonable defaults where
         * behaviour is unspecified.  See zoom documentation:
         *   https://developers.google.com/blockly/guides/configure/web/zoom
         * @param {!Object} options Dictionary of options.
         * @return {!Options.ZoomOptions} Normalized zoom options.
         * @private
         */
        private static parseZoomOptions_;
        /**
         * Parse the user-specified grid options, using reasonable defaults where
         * behaviour is unspecified. See grid documentation:
         *   https://developers.google.com/blockly/guides/configure/web/grid
         * @param {!Object} options Dictionary of options.
         * @return {!Options.GridOptions} Normalized grid options.
         * @private
         */
        private static parseGridOptions_;
        /**
         * Parse the user-specified theme options, using the classic theme as a default.
         *   https://developers.google.com/blockly/guides/configure/web/themes
         * @param {!Object} options Dictionary of options.
         * @return {!Theme} A Blockly Theme.
         * @private
         */
        private static parseThemeOptions_;
        /**
         * Parse the user-specified options, using reasonable defaults where behaviour
         * is unspecified.
         * @param {!BlocklyOptions} options Dictionary of options.
         *     Specification:
         * https://developers.google.com/blockly/guides/get-started/web#configuration
         * @constructor
         * @alias Blockly.Options
         */
        constructor(options: BlocklyOptions);
        /** @type {boolean} */
        RTL: boolean;
        /** @type {boolean} */
        oneBasedIndex: boolean;
        /** @type {boolean} */
        collapse: boolean;
        /** @type {boolean} */
        comments: boolean;
        /** @type {boolean} */
        disable: boolean;
        /** @type {boolean} */
        readOnly: boolean;
        /** @type {number} */
        maxBlocks: number;
        /** @type {?Object<string, number>} */
        maxInstances: {
            [x: string]: number;
        } | null;
        /** @type {string} */
        pathToMedia: string;
        /** @type {boolean} */
        hasCategories: boolean;
        /** @type {!Options.MoveOptions} */
        moveOptions: Options.MoveOptions;
        /** @deprecated  January 2019 */
        hasScrollbars: boolean;
        /** @type {boolean} */
        hasTrashcan: boolean;
        /** @type {number} */
        maxTrashcanContents: number;
        /** @type {boolean} */
        hasSounds: boolean;
        /** @type {boolean} */
        hasCss: boolean;
        /** @type {boolean} */
        horizontalLayout: boolean;
        /** @type {?toolbox.ToolboxInfo} */
        languageTree: toolbox.ToolboxInfo | null;
        /** @type {!Options.GridOptions} */
        gridOptions: Options.GridOptions;
        /** @type {!Options.ZoomOptions} */
        zoomOptions: Options.ZoomOptions;
        /** @type {!toolbox.Position} */
        toolboxPosition: toolbox.Position;
        /** @type {!Theme} */
        theme: Theme;
        /** @type {string} */
        renderer: string;
        /** @type {?Object} */
        rendererOverrides: any | null;
        /**
         * The SVG element for the grid pattern.
         * Created during injection.
         * @type {?SVGElement}
         */
        gridPattern: SVGElement | null;
        /**
         * The parent of the current workspace, or null if there is no parent
         * workspace.  We can assert that this is of type WorkspaceSvg as opposed to
         * Workspace as this is only used in a rendered workspace.
         * @type {WorkspaceSvg}
         */
        parentWorkspace: WorkspaceSvg;
        /**
         * Map of plugin type to name of registered plugin or plugin class.
         * @type {!Object<string, (function(new:?, ...?)|string)>}
         */
        plugins: {
            [x: string]: ((new (...args: unknown[]) => unknown) | string);
        };
    }
    export namespace Options {
        /**
         * Grid Options.
         */
        type GridOptions = {
            color: string;
            length: number;
            snap: boolean;
            spacing: number;
        };
        /**
         * Move Options.
         */
        type MoveOptions = {
            drag: boolean;
            scrollbars: (boolean | Options.ScrollbarOptions);
            wheel: boolean;
        };
        /**
         * Scrollbar Options.
         */
        type ScrollbarOptions = {
            horizontal: boolean;
            vertical: boolean;
        };
        /**
         * Zoom Options.
         */
        type ZoomOptions = {
            controls: boolean;
            maxScale: number;
            minScale: number;
            pinch: boolean;
            scaleSpeed: number;
            startScale: number;
            wheel: boolean;
        };
    }
    import * as toolbox from "utils/toolbox";
    import { Theme } from "theme";
    import { WorkspaceSvg } from "workspace_svg";
    import { BlocklyOptions } from "blockly_options";
}
declare module "names" {
    export class Names {
        /**
         * Do the given two entity names refer to the same entity?
         * Blockly names are case-insensitive.
         * @param {string} name1 First name.
         * @param {string} name2 Second name.
         * @return {boolean} True if names are the same.
         */
        static equals(name1: string, name2: string): boolean;
        /**
         * Class for a database of entity names (variables, procedures, etc).
         * @param {string} reservedWords A comma-separated string of words that are
         *     illegal for use as names in a language (e.g. 'new,if,this,...').
         * @param {string=} opt_variablePrefix Some languages need a '$' or a namespace
         *     before all variable names (but not procedure names).
         * @constructor
         * @alias Blockly.Names
         */
        constructor(reservedWords: string, opt_variablePrefix?: string | undefined);
        variablePrefix_: string;
        reservedDict_: any;
        /**
         * When JavaScript (or most other languages) is generated, variable 'foo' and
         * procedure 'foo' would collide.  However, Blockly has no such problems since
         * variable get 'foo' and procedure call 'foo' are unambiguous.
         * Therefore, Blockly keeps a separate realm name to disambiguate.
         * getName('foo', 'VARIABLE') -> 'foo'
         * getName('foo', 'PROCEDURE') -> 'foo2'
         */
        /**
         * Empty the database and start from scratch.  The reserved words are kept.
         */
        reset(): void;
        db_: any;
        dbReverse_: any;
        variableMap_: VariableMap;
        /**
         * Set the variable map that maps from variable name to variable object.
         * @param {!VariableMap} map The map to track.
         */
        setVariableMap(map: VariableMap): void;
        /**
         * Get the name for a user-defined variable, based on its ID.
         * This should only be used for variables of realm
         * internalConstants.VARIABLE_CATEGORY_NAME.
         * @param {string} id The ID to look up in the variable map.
         * @return {?string} The name of the referenced variable, or null if there was
         *     no variable map or the variable was not found in the map.
         * @private
         */
        private getNameForUserVariable_;
        /**
         * Generate names for user variables, but only ones that are being used.
         * @param {!Workspace} workspace Workspace to generate variables from.
         */
        populateVariables(workspace: Workspace): void;
        /**
         * Generate names for procedures.
         * @param {!Workspace} workspace Workspace to generate procedures from.
         */
        populateProcedures(workspace: Workspace): void;
        /**
         * Convert a Blockly entity name to a legal exportable entity name.
         * @param {string} nameOrId The Blockly entity name (no constraints) or
         *     variable ID.
         * @param {string} realm The realm of entity in Blockly
         *     ('VARIABLE', 'PROCEDURE', 'DEVELOPER_VARIABLE', etc...).
         * @return {string} An entity name that is legal in the exported language.
         */
        getName(nameOrId: string, realm: string): string;
        /**
         * Return a list of all known user-created names in a specified realm.
         * @param {string} realm The realm of entity in Blockly
         *     ('VARIABLE', 'PROCEDURE', 'DEVELOPER_VARIABLE', etc...).
         * @return {!Array<string>} A list of Blockly entity names (no constraints).
         */
        getUserNames(realm: string): Array<string>;
        /**
         * Convert a Blockly entity name to a legal exportable entity name.
         * Ensure that this is a new name not overlapping any previously defined name.
         * Also check against list of reserved words for the current language and
         * ensure name doesn't collide.
         * @param {string} name The Blockly entity name (no constraints).
         * @param {string} realm The realm of entity in Blockly
         *     ('VARIABLE', 'PROCEDURE', 'DEVELOPER_VARIABLE', etc...).
         * @return {string} An entity name that is legal in the exported language.
         */
        getDistinctName(name: string, realm: string): string;
        /**
         * Given a proposed entity name, generate a name that conforms to the
         * [_A-Za-z][_A-Za-z0-9]* format that most languages consider legal for
         * variable and function names.
         * @param {string} name Potentially illegal entity name.
         * @return {string} Safe entity name.
         * @private
         */
        private safeName_;
    }
    export namespace Names {
        const DEVELOPER_VARIABLE_TYPE: string;
    }
    import { VariableMap } from "variable_map";
    import { Workspace } from "workspace";
}
declare module "events/events_var_base" {
    /**
     * Abstract class for a variable event.
     * @param {!VariableModel=} opt_variable The variable this event
     *     corresponds to.  Undefined for a blank event.
     * @extends {Abstract}
     * @constructor
     * @alias Blockly.Events.VarBase
     */
    export class VarBase {
        constructor(opt_variable: any);
        isBlank: boolean;
        /**
         * The variable id for the variable this event pertains to.
         * @type {string}
         */
        varId: string;
        /**
         * The workspace identifier for this event.
         * @type {string}
         */
        workspaceId: string;
        /**
         * Encode the event as JSON.
         * @return {!Object} JSON representation.
         */
        toJson(): any;
        /**
         * Decode the JSON event.
         * @param {!Object} json JSON representation.
         */
        fromJson(json: any): void;
    }
}
declare module "events/events_var_delete" {
    /**
     * Class for a variable deletion event.
     * @param {!VariableModel=} opt_variable The deleted variable. Undefined
     *     for a blank event.
     * @extends {VarBase}
     * @constructor
     * @alias Blockly.Events.VarDelete
     */
    export class VarDelete {
        constructor(opt_variable: any);
        varType: any;
        varName: any;
        /**
         * Encode the event as JSON.
         * @return {!Object} JSON representation.
         */
        toJson(): any;
        /**
         * Decode the JSON event.
         * @param {!Object} json JSON representation.
         */
        fromJson(json: any): void;
        /**
         * Run a variable deletion event.
         * @param {boolean} forward True if run forward, false if run backward (undo).
         */
        run(forward: boolean): void;
        /**
         * Type of this event.
         * @type {string}
         */
        type: string;
    }
}
declare module "events/events_var_rename" {
    /**
     * Class for a variable rename event.
     * @param {!VariableModel=} opt_variable The renamed variable. Undefined
     *     for a blank event.
     * @param {string=} newName The new name the variable will be changed to.
     * @extends {VarBase}
     * @constructor
     * @alias Blockly.Events.VarRename
     */
    export class VarRename {
        constructor(opt_variable: any, newName: any);
        oldName: any;
        newName: any;
        /**
         * Encode the event as JSON.
         * @return {!Object} JSON representation.
         */
        toJson(): any;
        /**
         * Decode the JSON event.
         * @param {!Object} json JSON representation.
         */
        fromJson(json: any): void;
        /**
         * Run a variable rename event.
         * @param {boolean} forward True if run forward, false if run backward (undo).
         */
        run(forward: boolean): void;
        /**
         * Type of this event.
         * @type {string}
         */
        type: string;
    }
}
declare module "variable_map" {
    export class VariableMap {
        /**
         * Class for a variable map.  This contains a dictionary data structure with
         * variable types as keys and lists of variables as values.  The list of
         * variables are the type indicated by the key.
         * @param {!Workspace} workspace The workspace this map belongs to.
         * @constructor
         * @alias Blockly.VariableMap
         */
        constructor(workspace: Workspace);
        /**
         * A map from variable type to list of variable names.  The lists contain all
         * of the named variables in the workspace, including variables
         * that are not currently in use.
         * @type {!Object<string, !Array<VariableModel>>}
         * @private
         */
        private variableMap_;
        /**
         * The workspace this map belongs to.
         * @type {!Workspace}
         */
        workspace: Workspace;
        /**
         * Clear the variable map.
         */
        clear(): void;
        /**
         * Rename the given variable by updating its name in the variable map.
         * @param {!VariableModel} variable Variable to rename.
         * @param {string} newName New variable name.
         * @package
         */
        renameVariable(variable: VariableModel, newName: string): void;
        /**
         * Rename a variable by updating its name in the variable map. Identify the
         * variable to rename with the given ID.
         * @param {string} id ID of the variable to rename.
         * @param {string} newName New variable name.
         */
        renameVariableById(id: string, newName: string): void;
        /**
         * Update the name of the given variable and refresh all references to it.
         * The new name must not conflict with any existing variable names.
         * @param {!VariableModel} variable Variable to rename.
         * @param {string} newName New variable name.
         * @param {!Array<!Block>} blocks The list of all blocks in the
         *     workspace.
         * @private
         */
        private renameVariableAndUses_;
        /**
         * Update the name of the given variable to the same name as an existing
         * variable.  The two variables are coalesced into a single variable with the ID
         * of the existing variable that was already using newName.
         * Refresh all references to the variable.
         * @param {!VariableModel} variable Variable to rename.
         * @param {string} newName New variable name.
         * @param {!VariableModel} conflictVar The variable that was already
         *     using newName.
         * @param {!Array<!Block>} blocks The list of all blocks in the
         *     workspace.
         * @private
         */
        private renameVariableWithConflict_;
        /**
         * Create a variable with a given name, optional type, and optional ID.
         * @param {string} name The name of the variable. This must be unique across
         *     variables and procedures.
         * @param {?string=} opt_type The type of the variable like 'int' or 'string'.
         *     Does not need to be unique. Field_variable can filter variables based on
         *     their type. This will default to '' which is a specific type.
         * @param {?string=} opt_id The unique ID of the variable. This will default to
         *     a UUID.
         * @return {!VariableModel} The newly created variable.
         */
        createVariable(name: string, opt_type?: (string | null) | undefined, opt_id?: (string | null) | undefined): VariableModel;
        /**
         * Delete a variable.
         * @param {!VariableModel} variable Variable to delete.
         */
        deleteVariable(variable: VariableModel): void;
        /**
         * Delete a variables by the passed in ID and all of its uses from this
         * workspace. May prompt the user for confirmation.
         * @param {string} id ID of variable to delete.
         */
        deleteVariableById(id: string): void;
        /**
         * Deletes a variable and all of its uses from this workspace without asking the
         * user for confirmation.
         * @param {!VariableModel} variable Variable to delete.
         * @param {!Array<!Block>} uses An array of uses of the variable.
         * @package
         */
        deleteVariableInternal(variable: VariableModel, uses: Array<Block>): void;
        /**
         * Find the variable by the given name and type and return it.  Return null if
         *     it is not found.
         * @param {string} name The name to check for.
         * @param {?string=} opt_type The type of the variable.  If not provided it
         *     defaults to the empty string, which is a specific type.
         * @return {?VariableModel} The variable with the given name, or null if
         *     it was not found.
         */
        getVariable(name: string, opt_type?: (string | null) | undefined): VariableModel | null;
        /**
         * Find the variable by the given ID and return it.  Return null if not found.
         * @param {string} id The ID to check for.
         * @return {?VariableModel} The variable with the given ID.
         */
        getVariableById(id: string): VariableModel | null;
        /**
         * Get a list containing all of the variables of a specified type. If type is
         *     null, return list of variables with empty string type.
         * @param {?string} type Type of the variables to find.
         * @return {!Array<!VariableModel>} The sought after variables of the
         *     passed in type. An empty array if none are found.
         */
        getVariablesOfType(type: string | null): Array<VariableModel>;
        /**
         * Return all variable and potential variable types.  This list always contains
         * the empty string.
         * @param {?Workspace} ws The workspace used to look for potential
         * variables. This can be different than the workspace stored on this object
         * if the passed in ws is a flyout workspace.
         * @return {!Array<string>} List of variable types.
         * @package
         */
        getVariableTypes(ws: Workspace | null): Array<string>;
        /**
         * Return all variables of all types.
         * @return {!Array<!VariableModel>} List of variable models.
         */
        getAllVariables(): Array<VariableModel>;
        /**
         * Returns all of the variable names of all types.
         * @return {!Array<string>} All of the variable names of all types.
         */
        getAllVariableNames(): Array<string>;
        /**
         * Find all the uses of a named variable.
         * @param {string} id ID of the variable to find.
         * @return {!Array<!Block>} Array of block usages.
         */
        getVariableUsesById(id: string): Array<Block>;
    }
    import { Workspace } from "workspace";
    import { VariableModel } from "variable_model";
    import { Block } from "block";
}
declare module "events/events_comment_create" {
    /**
     * Class for a comment creation event.
     * @param {!WorkspaceComment=} opt_comment The created comment.
     *     Undefined for a blank event.
     * @extends {CommentBase}
     * @constructor
     * @alias Blockly.Events.CommentCreate
     */
    export class CommentCreate {
        constructor(opt_comment: any);
        xml: any;
        /**
         * Encode the event as JSON.
         * @return {!Object} JSON representation.
         */
        toJson(): any;
        /**
         * Decode the JSON event.
         * @param {!Object} json JSON representation.
         */
        fromJson(json: any): void;
        /**
         * Run a creation event.
         * @param {boolean} forward True if run forward, false if run backward (undo).
         */
        run(forward: boolean): void;
        /**
         * Type of this event.
         * @type {string}
         */
        type: string;
    }
}
declare module "events/events_comment_delete" {
    /**
     * Class for a comment deletion event.
     * @param {!WorkspaceComment=} opt_comment The deleted comment.
     *     Undefined for a blank event.
     * @extends {CommentBase}
     * @constructor
     * @alias Blockly.Events.CommentDelete
     */
    export class CommentDelete {
        constructor(opt_comment: any);
        xml: any;
        /**
         * Encode the event as JSON.
         * @return {!Object} JSON representation.
         */
        toJson(): any;
        /**
         * Decode the JSON event.
         * @param {!Object} json JSON representation.
         */
        fromJson(json: any): void;
        /**
         * Run a creation event.
         * @param {boolean} forward True if run forward, false if run backward (undo).
         */
        run(forward: boolean): void;
        /**
         * Type of this event.
         * @type {string}
         */
        type: string;
    }
}
declare module "events/events_comment_base" {
    /**
     * Abstract class for a comment event.
     * @param {!WorkspaceComment=} opt_comment The comment this event
     *     corresponds to.  Undefined for a blank event.
     * @extends {AbstractEvents}
     * @constructor
     * @alias Blockly.Events.CommentBase
     */
    export class CommentBase {
        /**
         * Helper function for Comment[Create|Delete]
         * @param {!CommentCreate|!CommentDelete} event
         *     The event to run.
         * @param {boolean} create if True then Create, if False then Delete
         */
        static CommentCreateDeleteHelper(event: CommentCreate | CommentDelete, create: boolean): void;
        constructor(opt_comment: any);
        /**
         * Whether or not an event is blank.
         * @type {boolean}
         */
        isBlank: boolean;
        /**
         * The ID of the comment this event pertains to.
         * @type {string}
         */
        commentId: string;
        /**
         * The workspace identifier for this event.
         * @type {string}
         */
        workspaceId: string;
        /**
         * The event group id for the group this event belongs to. Groups define
         * events that should be treated as an single action from the user's
         * perspective, and should be undone together.
         * @type {string}
         */
        group: string;
        /**
         * Sets whether the event should be added to the undo stack.
         * @type {boolean}
         */
        recordUndo: boolean;
        /**
         * Encode the event as JSON.
         * @return {!Object} JSON representation.
         */
        toJson(): any;
        /**
         * Decode the JSON event.
         * @param {!Object} json JSON representation.
         */
        fromJson(json: any): void;
    }
    import { CommentCreate } from "events/events_comment_create";
    import { CommentDelete } from "events/events_comment_delete";
}
declare module "events/events_comment_change" {
    /**
     * Class for a comment change event.
     * @param {!WorkspaceComment=} opt_comment The comment that is being
     *     changed.  Undefined for a blank event.
     * @param {string=} opt_oldContents Previous contents of the comment.
     * @param {string=} opt_newContents New contents of the comment.
     * @extends {CommentBase}
     * @constructor
     * @alias Blockly.Events.CommentChange
     */
    export class CommentChange {
        constructor(opt_comment: any, opt_oldContents: any, opt_newContents: any);
        oldContents_: any;
        newContents_: any;
        /**
         * Encode the event as JSON.
         * @return {!Object} JSON representation.
         */
        toJson(): any;
        /**
         * Decode the JSON event.
         * @param {!Object} json JSON representation.
         */
        fromJson(json: any): void;
        /**
         * Does this event record any change of state?
         * @return {boolean} False if something changed.
         */
        isNull(): boolean;
        /**
         * Run a change event.
         * @param {boolean} forward True if run forward, false if run backward (undo).
         */
        run(forward: boolean): void;
        /**
         * Type of this event.
         * @type {string}
         */
        type: string;
    }
}
declare module "events/events_comment_move" {
    /**
     * Class for a comment move event.  Created before the move.
     * @param {!WorkspaceComment=} opt_comment The comment that is being
     *     moved.  Undefined for a blank event.
     * @extends {CommentBase}
     * @constructor
     * @alias Blockly.Events.CommentMove
     */
    export class CommentMove {
        constructor(opt_comment: any);
        /**
         * The comment that is being moved.  Will be cleared after recording the new
         * location.
         * @type {WorkspaceComment}
         */
        comment_: WorkspaceComment;
        /**
         * The location before the move, in workspace coordinates.
         * @type {!Coordinate}
         */
        oldCoordinate_: Coordinate;
        /**
         * The location after the move, in workspace coordinates.
         * @type {Coordinate}
         */
        newCoordinate_: Coordinate;
        /**
         * Record the comment's new location.  Called after the move.  Can only be
         * called once.
         */
        recordNew(): void;
        /**
         * Override the location before the move.  Use this if you don't create the
         * event until the end of the move, but you know the original location.
         * @param {!Coordinate} xy The location before the move,
         *     in workspace coordinates.
         */
        setOldCoordinate(xy: Coordinate): void;
        /**
         * Encode the event as JSON.
         * @return {!Object} JSON representation.
         */
        toJson(): any;
        /**
         * Decode the JSON event.
         * @param {!Object} json JSON representation.
         */
        fromJson(json: any): void;
        /**
         * Does this event record any change of state?
         * @return {boolean} False if something changed.
         */
        isNull(): boolean;
        /**
         * Run a move event.
         * @param {boolean} forward True if run forward, false if run backward (undo).
         */
        run(forward: boolean): void;
        /**
         * Type of this event.
         * @type {string}
         */
        type: string;
    }
    import { WorkspaceComment } from "workspace_comment";
    import { Coordinate } from "utils/coordinate";
}
declare module "workspace_comment" {
    /**
     * Class for a workspace comment.
     * @param {!Workspace} workspace The block's workspace.
     * @param {string} content The content of this workspace comment.
     * @param {number} height Height of the comment.
     * @param {number} width Width of the comment.
     * @param {string=} opt_id Optional ID.  Use this ID if provided, otherwise
     *     create a new ID.
     * @constructor
     * @alias Blockly.WorkspaceComment
     */
    export class WorkspaceComment {
        /**
         * Fire a create event for the given workspace comment, if comments are enabled.
         * @param {!WorkspaceComment} comment The comment that was just created.
         * @package
         */
        static fireCreateEvent(comment: WorkspaceComment): void;
        /**
         * Decode an XML comment tag and create a comment on the workspace.
         * @param {!Element} xmlComment XML comment element.
         * @param {!Workspace} workspace The workspace.
         * @return {!WorkspaceComment} The created workspace comment.
         * @package
         */
        static fromXml(xmlComment: Element, workspace: Workspace): WorkspaceComment;
        /**
         * Decode an XML comment tag and return the results in an object.
         * @param {!Element} xml XML comment element.
         * @return {{w: number, h: number, x: number, y: number, content: string}} An
         *     object containing the id, size, position, and comment string.
         * @package
         */
        static parseAttributes(xml: Element): {
            w: number;
            h: number;
            x: number;
            y: number;
            content: string;
        };
        constructor(workspace: any, content: any, height: any, width: any, opt_id: any);
        /** @type {string} */
        id: string;
        /**
         * The comment's position in workspace units.  (0, 0) is at the workspace's
         * origin; scale does not change this value.
         * @type {!Coordinate}
         * @protected
         */
        protected xy_: Coordinate;
        /**
         * The comment's height in workspace units.  Scale does not change this value.
         * @type {number}
         * @protected
         */
        protected height_: number;
        /**
         * The comment's width in workspace units.  Scale does not change this value.
         * @type {number}
         * @protected
         */
        protected width_: number;
        /**
         * @type {!Workspace}
         */
        workspace: Workspace;
        /**
         * @protected
         * @type {boolean}
         */
        protected RTL: boolean;
        /**
         * @type {boolean}
         * @private
         */
        private deletable_;
        /**
         * @type {boolean}
         * @private
         */
        private movable_;
        /**
         * @type {boolean}
         * @private
         */
        private editable_;
        /**
         * @protected
         * @type {string}
         */
        protected content_: string;
        /**
         * Whether this comment has been disposed.
         * @protected
         * @type {boolean}
         */
        protected disposed_: boolean;
        /**
         * @package
         * @type {boolean}
         */
        isComment: boolean;
        /**
         * Dispose of this comment.
         * @package
         */
        dispose(): void;
        /**
         * Get comment height.
         * @return {number} Comment height.
         * @package
         */
        getHeight(): number;
        /**
         * Set comment height.
         * @param {number} height Comment height.
         * @package
         */
        setHeight(height: number): void;
        /**
         * Get comment width.
         * @return {number} Comment width.
         * @package
         */
        getWidth(): number;
        /**
         * Set comment width.
         * @param {number} width comment width.
         * @package
         */
        setWidth(width: number): void;
        /**
         * Get stored location.
         * @return {!Coordinate} The comment's stored location.
         *   This is not valid if the comment is currently being dragged.
         * @package
         */
        getXY(): Coordinate;
        /**
         * Move a comment by a relative offset.
         * @param {number} dx Horizontal offset, in workspace units.
         * @param {number} dy Vertical offset, in workspace units.
         * @package
         */
        moveBy(dx: number, dy: number): void;
        /**
         * Get whether this comment is deletable or not.
         * @return {boolean} True if deletable.
         * @package
         */
        isDeletable(): boolean;
        /**
         * Set whether this comment is deletable or not.
         * @param {boolean} deletable True if deletable.
         * @package
         */
        setDeletable(deletable: boolean): void;
        /**
         * Get whether this comment is movable or not.
         * @return {boolean} True if movable.
         * @package
         */
        isMovable(): boolean;
        /**
         * Set whether this comment is movable or not.
         * @param {boolean} movable True if movable.
         * @package
         */
        setMovable(movable: boolean): void;
        /**
         * Get whether this comment is editable or not.
         * @return {boolean} True if editable.
         */
        isEditable(): boolean;
        /**
         * Set whether this comment is editable or not.
         * @param {boolean} editable True if editable.
         */
        setEditable(editable: boolean): void;
        /**
         * Returns this comment's text.
         * @return {string} Comment text.
         * @package
         */
        getContent(): string;
        /**
         * Set this comment's content.
         * @param {string} content Comment content.
         * @package
         */
        setContent(content: string): void;
        /**
         * Encode a comment subtree as XML with XY coordinates.
         * @param {boolean=} opt_noId True if the encoder should skip the comment ID.
         * @return {!Element} Tree of XML elements.
         * @package
         */
        toXmlWithXY(opt_noId?: boolean | undefined): Element;
        /**
         * Encode a comment subtree as XML, but don't serialize the XY coordinates.
         * This method avoids some expensive metrics-related calls that are made in
         * toXmlWithXY().
         * @param {boolean=} opt_noId True if the encoder should skip the comment ID.
         * @return {!Element} Tree of XML elements.
         * @package
         */
        toXml(opt_noId?: boolean | undefined): Element;
    }
    import { Coordinate } from "utils/coordinate";
    import { Workspace } from "workspace";
}
declare module "connection_checker" {
    /**
     * Class for connection type checking logic.
     * @implements {IConnectionChecker}
     * @constructor
     * @alias Blockly.ConnectionChecker
     */
    export class ConnectionChecker implements IConnectionChecker {
        /**
         * Check whether the current connection can connect with the target
         * connection.
         * @param {Connection} a Connection to check compatibility with.
         * @param {Connection} b Connection to check compatibility with.
         * @param {boolean} isDragging True if the connection is being made by dragging
         *     a block.
         * @param {number=} opt_distance The max allowable distance between the
         *     connections for drag checks.
         * @return {boolean} Whether the connection is legal.
         * @public
         */
        public canConnect(a: Connection, b: Connection, isDragging: boolean, opt_distance?: number | undefined): boolean;
        /**
         * Checks whether the current connection can connect with the target
         * connection, and return an error code if there are problems.
         * @param {Connection} a Connection to check compatibility with.
         * @param {Connection} b Connection to check compatibility with.
         * @param {boolean} isDragging True if the connection is being made by dragging
         *     a block.
         * @param {number=} opt_distance The max allowable distance between the
         *     connections for drag checks.
         * @return {number} Connection.CAN_CONNECT if the connection is legal,
         *    an error code otherwise.
         * @public
         */
        public canConnectWithReason(a: Connection, b: Connection, isDragging: boolean, opt_distance?: number | undefined): number;
        /**
         * Helper method that translates a connection error code into a string.
         * @param {number} errorCode The error code.
         * @param {Connection} a One of the two connections being checked.
         * @param {Connection} b The second of the two connections being
         *     checked.
         * @return {string} A developer-readable error string.
         * @public
         */
        public getErrorMessage(errorCode: number, a: Connection, b: Connection): string;
        /**
         * Check that connecting the given connections is safe, meaning that it would
         * not break any of Blockly's basic assumptions (e.g. no self connections).
         * @param {Connection} a The first of the connections to check.
         * @param {Connection} b The second of the connections to check.
         * @return {number} An enum with the reason this connection is safe or unsafe.
         * @public
         */
        public doSafetyChecks(a: Connection, b: Connection): number;
        /**
         * Check whether this connection is compatible with another connection with
         * respect to the value type system.  E.g. square_root("Hello") is not
         * compatible.
         * @param {!Connection} a Connection to compare.
         * @param {!Connection} b Connection to compare against.
         * @return {boolean} True if the connections share a type.
         * @public
         */
        public doTypeChecks(a: Connection, b: Connection): boolean;
        /**
         * Check whether this connection can be made by dragging.
         * @param {!RenderedConnection} a Connection to compare.
         * @param {!RenderedConnection} b Connection to compare against.
         * @param {number} distance The maximum allowable distance between connections.
         * @return {boolean} True if the connection is allowed during a drag.
         * @public
         */
        public doDragChecks(a: RenderedConnection, b: RenderedConnection, distance: number): boolean;
        /**
         * Helper function for drag checking.
         * @param {!Connection} a The connection to check, which must be a
         *     statement input or next connection.
         * @param {!Connection} b A nearby connection to check, which
         *     must be a previous connection.
         * @return {boolean} True if the connection is allowed, false otherwise.
         * @protected
         */
        protected canConnectToPrevious_(a: Connection, b: Connection): boolean;
    }
    import { IConnectionChecker } from "interfaces/i_connection_checker";
    import { Connection } from "connection";
    import { RenderedConnection } from "rendered_connection";
}
declare module "workspace" {
    export class Workspace {
        /**
         * Find the workspace with the specified ID.
         * @param {string} id ID of workspace to find.
         * @return {?Workspace} The sought after workspace or null if not found.
         */
        static getById(id: string): Workspace | null;
        /**
         * Find all workspaces.
         * @return {!Array<!Workspace>} Array of workspaces.
         */
        static getAll(): Array<Workspace>;
        /**
         * Class for a workspace.  This is a data structure that contains blocks.
         * There is no UI, and can be created headlessly.
         * @param {!Options=} opt_options Dictionary of options.
         * @constructor
         * @implements {IASTNodeLocation}
         * @alias Blockly.Workspace
         */
        constructor(opt_options?: Options | undefined);
        /** @type {string} */
        id: string;
        /** @type {!Options} */
        options: Options;
        /** @type {boolean} */
        RTL: boolean;
        /** @type {boolean} */
        horizontalLayout: boolean;
        /** @type {toolbox.Position} */
        toolboxPosition: toolbox.Position;
        /**
         * An object that encapsulates logic for safety, type, and dragging checks.
         * @type {!IConnectionChecker}
         */
        connectionChecker: IConnectionChecker;
        /**
         * @type {!Array<!Block>}
         * @private
         */
        private topBlocks_;
        /**
         * @type {!Array<!WorkspaceComment>}
         * @private
         */
        private topComments_;
        /**
         * @type {!Object}
         * @private
         */
        private commentDB_;
        /**
         * @type {!Array<!Function>}
         * @private
         */
        private listeners_;
        /**
         * @type {!Array<!Abstract>}
         * @protected
         */
        protected undoStack_: Array<typeof Abstract>;
        /**
         * @type {!Array<!Abstract>}
         * @protected
         */
        protected redoStack_: Array<typeof Abstract>;
        /**
         * @type {!Object}
         * @private
         */
        private blockDB_;
        /**
         * @type {!Object}
         * @private
         */
        private typedBlocksDB_;
        /**
         * A map from variable type to list of variable names.  The lists contain all
         * of the named variables in the workspace, including variables
         * that are not currently in use.
         * @type {!VariableMap}
         * @private
         */
        private variableMap_;
        /**
         * Blocks in the flyout can refer to variables that don't exist in the main
         * workspace.  For instance, the "get item in list" block refers to an "item"
         * variable regardless of whether the variable has been created yet.
         * A FieldVariable must always refer to a VariableModel.  We reconcile
         * these by tracking "potential" variables in the flyout.  These variables
         * become real when references to them are dragged into the main workspace.
         * @type {?VariableMap}
         * @private
         */
        private potentialVariableMap_;
        /**
         * Dispose of this workspace.
         * Unlink from all DOM elements to prevent memory leaks.
         * @suppress {checkTypes}
         */
        dispose(): void;
        /**
         * Compare function for sorting objects (blocks, comments, etc) by position;
         *    top to bottom (with slight LTR or RTL bias).
         * @param {!Block | !WorkspaceComment} a The first object to
         *    compare.
         * @param {!Block | !WorkspaceComment} b The second object to
         *    compare.
         * @return {number} The comparison value. This tells Array.sort() how to change
         *    object a's index.
         * @private
         */
        private sortObjects_;
        /**
         * Adds a block to the list of top blocks.
         * @param {!Block} block Block to add.
         */
        addTopBlock(block: Block): void;
        /**
         * Removes a block from the list of top blocks.
         * @param {!Block} block Block to remove.
         */
        removeTopBlock(block: Block): void;
        /**
         * Finds the top-level blocks and returns them.  Blocks are optionally sorted
         * by position; top to bottom (with slight LTR or RTL bias).
         * @param {boolean} ordered Sort the list if true.
         * @return {!Array<!Block>} The top-level block objects.
         */
        getTopBlocks(ordered: boolean): Array<Block>;
        /**
         * Add a block to the list of blocks keyed by type.
         * @param {!Block} block Block to add.
         */
        addTypedBlock(block: Block): void;
        /**
         * Remove a block from the list of blocks keyed by type.
         * @param {!Block} block Block to remove.
         */
        removeTypedBlock(block: Block): void;
        /**
         * Finds the blocks with the associated type and returns them. Blocks are
         * optionally sorted by position; top to bottom (with slight LTR or RTL bias).
         * @param {string} type The type of block to search for.
         * @param {boolean} ordered Sort the list if true.
         * @return {!Array<!Block>} The blocks of the given type.
         */
        getBlocksByType(type: string, ordered: boolean): Array<Block>;
        /**
         * Adds a comment to the list of top comments.
         * @param {!WorkspaceComment} comment comment to add.
         * @package
         */
        addTopComment(comment: WorkspaceComment): void;
        /**
         * Removes a comment from the list of top comments.
         * @param {!WorkspaceComment} comment comment to remove.
         * @package
         */
        removeTopComment(comment: WorkspaceComment): void;
        /**
         * Finds the top-level comments and returns them.  Comments are optionally
         * sorted by position; top to bottom (with slight LTR or RTL bias).
         * @param {boolean} ordered Sort the list if true.
         * @return {!Array<!WorkspaceComment>} The top-level comment objects.
         * @package
         */
        getTopComments(ordered: boolean): Array<WorkspaceComment>;
        /**
         * Find all blocks in workspace.  Blocks are optionally sorted
         * by position; top to bottom (with slight LTR or RTL bias).
         * @param {boolean} ordered Sort the list if true.
         * @return {!Array<!Block>} Array of blocks.
         */
        getAllBlocks(ordered: boolean): Array<Block>;
        /**
         * Dispose of all blocks and comments in workspace.
         */
        clear(): void;
        isClearing: boolean;
        /**
         * Rename a variable by updating its name in the variable map. Identify the
         * variable to rename with the given ID.
         * @param {string} id ID of the variable to rename.
         * @param {string} newName New variable name.
         */
        renameVariableById(id: string, newName: string): void;
        /**
         * Create a variable with a given name, optional type, and optional ID.
         * @param {string} name The name of the variable. This must be unique across
         *     variables and procedures.
         * @param {?string=} opt_type The type of the variable like 'int' or 'string'.
         *     Does not need to be unique. Field_variable can filter variables based on
         *     their type. This will default to '' which is a specific type.
         * @param {?string=} opt_id The unique ID of the variable. This will default to
         *     a UUID.
         * @return {!VariableModel} The newly created variable.
         */
        createVariable(name: string, opt_type?: (string | null) | undefined, opt_id?: (string | null) | undefined): VariableModel;
        /**
         * Find all the uses of the given variable, which is identified by ID.
         * @param {string} id ID of the variable to find.
         * @return {!Array<!Block>} Array of block usages.
         */
        getVariableUsesById(id: string): Array<Block>;
        /**
         * Delete a variables by the passed in ID and all of its uses from this
         * workspace. May prompt the user for confirmation.
         * @param {string} id ID of variable to delete.
         */
        deleteVariableById(id: string): void;
        /**
         * Find the variable by the given name and return it. Return null if not found.
         * @param {string} name The name to check for.
         * @param {string=} opt_type The type of the variable.  If not provided it
         *     defaults to the empty string, which is a specific type.
         * @return {?VariableModel} The variable with the given name.
         */
        getVariable(name: string, opt_type?: string | undefined): VariableModel | null;
        /**
         * Find the variable by the given ID and return it. Return null if not found.
         * @param {string} id The ID to check for.
         * @return {?VariableModel} The variable with the given ID.
         */
        getVariableById(id: string): VariableModel | null;
        /**
         * Find the variable with the specified type. If type is null, return list of
         *     variables with empty string type.
         * @param {?string} type Type of the variables to find.
         * @return {!Array<!VariableModel>} The sought after variables of the
         *     passed in type. An empty array if none are found.
         */
        getVariablesOfType(type: string | null): Array<VariableModel>;
        /**
         * Return all variable types.
         * @return {!Array<string>} List of variable types.
         * @package
         */
        getVariableTypes(): Array<string>;
        /**
         * Return all variables of all types.
         * @return {!Array<!VariableModel>} List of variable models.
         */
        getAllVariables(): Array<VariableModel>;
        /**
         * Returns all variable names of all types.
         * @return {!Array<string>} List of all variable names of all types.
         */
        getAllVariableNames(): Array<string>;
        /**
         * Returns the horizontal offset of the workspace.
         * Intended for LTR/RTL compatibility in XML.
         * Not relevant for a headless workspace.
         * @return {number} Width.
         */
        getWidth(): number;
        /**
         * Obtain a newly created block.
         * @param {!string} prototypeName Name of the language object containing
         *     type-specific functions for this block.
         * @param {string=} opt_id Optional ID.  Use this ID if provided, otherwise
         *     create a new ID.
         * @return {!Block} The created block.
         */
        newBlock(prototypeName: string, opt_id?: string | undefined): Block;
        /**
         * The number of blocks that may be added to the workspace before reaching
         *     the maxBlocks.
         * @return {number} Number of blocks left.
         */
        remainingCapacity(): number;
        /**
         * The number of blocks of the given type that may be added to the workspace
         *    before reaching the maxInstances allowed for that type.
         * @param {string} type Type of block to return capacity for.
         * @return {number} Number of blocks of type left.
         */
        remainingCapacityOfType(type: string): number;
        /**
         * Check if there is remaining capacity for blocks of the given counts to be
         *    created. If the total number of blocks represented by the map is more than
         *    the total remaining capacity, it returns false. If a type count is more
         *    than the remaining capacity for that type, it returns false.
         * @param {!Object} typeCountsMap A map of types to counts (usually representing
         *    blocks to be created).
         * @return {boolean} True if there is capacity for the given map,
         *    false otherwise.
         */
        isCapacityAvailable(typeCountsMap: any): boolean;
        /**
         * Checks if the workspace has any limits on the maximum number of blocks,
         *    or the maximum number of blocks of specific types.
         * @return {boolean} True if it has block limits, false otherwise.
         */
        hasBlockLimits(): boolean;
        /**
         * Gets the undo stack for workplace.
         * @return {!Array<!Abstract>} undo stack
         * @package
         */
        getUndoStack(): Array<typeof Abstract>;
        /**
         * Gets the redo stack for workplace.
         * @return {!Array<!Abstract>} redo stack
         * @package
         */
        getRedoStack(): Array<typeof Abstract>;
        /**
         * Undo or redo the previous action.
         * @param {boolean} redo False if undo, true if redo.
         */
        undo(redo: boolean): void;
        /**
         * Clear the undo/redo stacks.
         */
        clearUndo(): void;
        /**
         * When something in this workspace changes, call a function.
         * Note that there may be a few recent events already on the stack.  Thus the
         * new change listener might be called with events that occurred a few
         * milliseconds before the change listener was added.
         * @param {!Function} func Function to call.
         * @return {!Function} Obsolete return value, ignore.
         */
        addChangeListener(func: Function): Function;
        /**
         * Stop listening for this workspace's changes.
         * @param {!Function} func Function to stop calling.
         */
        removeChangeListener(func: Function): void;
        /**
         * Fire a change event.
         * @param {!Abstract} event Event to fire.
         */
        fireChangeListener(event: typeof Abstract): void;
        /**
         * Find the block on this workspace with the specified ID.
         * @param {string} id ID of block to find.
         * @return {?Block} The sought after block, or null if not found.
         */
        getBlockById(id: string): Block | null;
        /**
         * Set a block on this workspace with the specified ID.
         * @param {string} id ID of block to set.
         * @param {Block} block The block to set.
         * @package
         */
        setBlockById(id: string, block: Block): void;
        /**
         * Delete a block off this workspace with the specified ID.
         * @param {string} id ID of block to delete.
         * @package
         */
        removeBlockById(id: string): void;
        /**
         * Find the comment on this workspace with the specified ID.
         * @param {string} id ID of comment to find.
         * @return {?WorkspaceComment} The sought after comment, or null if not
         *     found.
         * @package
         */
        getCommentById(id: string): WorkspaceComment | null;
        /**
         * Checks whether all value and statement inputs in the workspace are filled
         * with blocks.
         * @param {boolean=} opt_shadowBlocksAreFilled An optional argument controlling
         *     whether shadow blocks are counted as filled. Defaults to true.
         * @return {boolean} True if all inputs are filled, false otherwise.
         */
        allInputsFilled(opt_shadowBlocksAreFilled?: boolean | undefined): boolean;
        /**
         * Return the variable map that contains "potential" variables.
         * These exist in the flyout but not in the workspace.
         * @return {?VariableMap} The potential variable map.
         * @package
         */
        getPotentialVariableMap(): VariableMap | null;
        /**
         * Create and store the potential variable map for this workspace.
         * @package
         */
        createPotentialVariableMap(): void;
        /**
         * Return the map of all variables on the workspace.
         * @return {!VariableMap} The variable map.
         */
        getVariableMap(): VariableMap;
        /**
         * Set the map of all variables on the workspace.
         * @param {!VariableMap} variableMap The variable map.
         * @package
         */
        setVariableMap(variableMap: VariableMap): void;
        /**
         * Returns `true` if the workspace is visible and `false` if it's headless.
         * @type {boolean}
         */
        rendered: boolean;
        /**
         * Maximum number of undo events in stack. `0` turns off undo, `Infinity` sets
         * it to unlimited.
         * @type {number}
         */
        MAX_UNDO: number;
        /**
         * Set of databases for rapid lookup of connection locations.
         * @type {Array<!ConnectionDB>}
         */
        connectionDBList: Array<ConnectionDB>;
    }
    export namespace Workspace {
        const SCAN_ANGLE: number;
    }
    import { Options } from "options";
    import * as toolbox from "utils/toolbox";
    import { IConnectionChecker } from "interfaces/i_connection_checker";
    import * as Abstract from "events/events_abstract";
    import { Block } from "block";
    import { WorkspaceComment } from "workspace_comment";
    import { VariableModel } from "variable_model";
    import { VariableMap } from "variable_map";
    import { ConnectionDB } from "connection_db";
}
declare module "events/events_var_create" {
    /**
     * Class for a variable creation event.
     * @param {!VariableModel=} opt_variable The created variable. Undefined
     *     for a blank event.
     * @extends {VarBase}
     * @constructor
     * @alias Blockly.Events.VarCreate
     */
    export class VarCreate {
        constructor(opt_variable: any);
        varType: any;
        varName: any;
        /**
         * Encode the event as JSON.
         * @return {!Object} JSON representation.
         */
        toJson(): any;
        /**
         * Decode the JSON event.
         * @param {!Object} json JSON representation.
         */
        fromJson(json: any): void;
        /**
         * Run a variable creation event.
         * @param {boolean} forward True if run forward, false if run backward (undo).
         */
        run(forward: boolean): void;
        /**
         * Type of this event.
         * @type {string}
         */
        type: string;
    }
}
declare module "variable_model" {
    /**
     * Class for a variable model.
     * Holds information for the variable including name, ID, and type.
     * @param {!Workspace} workspace The variable's workspace.
     * @param {string} name The name of the variable.  This is the user-visible name
     *     (e.g. 'my var' or '私の変数'), not the generated name.
     * @param {string=} opt_type The type of the variable like 'int' or 'string'.
     *     Does not need to be unique. Field_variable can filter variables based on
     *     their type. This will default to '' which is a specific type.
     * @param {string=} opt_id The unique ID of the variable. This will default to
     *     a UUID.
     * @see {Blockly.FieldVariable}
     * @constructor
     * @alias Blockly.VariableModel
     */
    export class VariableModel {
        /**
         * A custom compare function for the VariableModel objects.
         * @param {VariableModel} var1 First variable to compare.
         * @param {VariableModel} var2 Second variable to compare.
         * @return {number} -1 if name of var1 is less than name of var2, 0 if equal,
         *     and 1 if greater.
         * @package
         */
        static compareByName(var1: VariableModel, var2: VariableModel): number;
        constructor(workspace: any, name: any, opt_type: any, opt_id: any);
        /**
         * The workspace the variable is in.
         * @type {!Workspace}
         */
        workspace: Workspace;
        /**
         * The name of the variable, typically defined by the user.  It may be
         * changed by the user.
         * @type {string}
         */
        name: string;
        /**
         * The type of the variable, such as 'int' or 'sound_effect'. This may be
         * used to build a list of variables of a specific type. By default this is
         * the empty string '', which is a specific type.
         * @see {Blockly.FieldVariable}
         * @type {string}
         */
        type: string;
        /**
         * A unique ID for the variable. This should be defined at creation and
         * not change, even if the name changes. In most cases this should be a
         * UUID.
         * @type {string}
         * @private
         */
        private id_;
        /**
         * @return {string} The ID for the variable.
         */
        getId(): string;
    }
    import { Workspace } from "workspace";
}
declare module "variables" {
    /**
     * Find all user-created variables that are in use in the workspace.
     * For use by generators.
     * To get a list of all variables on a workspace, including unused variables,
     * call Workspace.getAllVariables.
     * @param {!Workspace} ws The workspace to search for variables.
     * @return {!Array<!VariableModel>} Array of variable models.
     * @alias Blockly.Variables.allUsedVarModels
     */
    export function allUsedVarModels(ws: Workspace): Array<VariableModel>;
    /**
     * Find all developer variables used by blocks in the workspace.
     * Developer variables are never shown to the user, but are declared as global
     * variables in the generated code.
     * To declare developer variables, define the getDeveloperVariables function on
     * your block and return a list of variable names.
     * For use by generators.
     * @param {!Workspace} workspace The workspace to search.
     * @return {!Array<string>} A list of non-duplicated variable names.
     * @alias Blockly.Variables.allDeveloperVariables
     */
    export function allDeveloperVariables(workspace: Workspace): Array<string>;
    /**
     * Construct the elements (blocks and button) required by the flyout for the
     * variable category.
     * @param {!Workspace} workspace The workspace containing variables.
     * @return {!Array<!Element>} Array of XML elements.
     * @alias Blockly.Variables.flyoutCategory
     */
    export function flyoutCategory(workspace: Workspace): Array<Element>;
    /**
     * Construct the blocks required by the flyout for the variable category.
     * @param {!Workspace} workspace The workspace containing variables.
     * @return {!Array<!Element>} Array of XML block elements.
     * @alias Blockly.Variables.flyoutCategoryBlocks
     */
    export function flyoutCategoryBlocks(workspace: Workspace): Array<Element>;
    /**
     * @alias Blockly.Variables.VAR_LETTER_OPTIONS
     */
    export const VAR_LETTER_OPTIONS: "ijkmnopqrstuvwxyzabcdefgh";
    /**
     * Return a new variable name that is not yet being used. This will try to
     * generate single letter variable names in the range 'i' to 'z' to start with.
     * If no unique name is located it will try 'i' to 'z', 'a' to 'h',
     * then 'i2' to 'z2' etc.  Skip 'l'.
     * @param {!Workspace} workspace The workspace to be unique in.
     * @return {string} New variable name.
     * @alias Blockly.Variables.generateUniqueName
     */
    export function generateUniqueName(workspace: Workspace): string;
    /**
     * Returns a unique name that is not present in the usedNames array. This
     * will try to generate single letter names in the range a -> z (skip l). It
     * will start with the character passed to startChar.
     * @param {string} startChar The character to start the search at.
     * @param {!Array<string>} usedNames A list of all of the used names.
     * @return {string} A unique name that is not present in the usedNames array.
     * @alias Blockly.Variables.generateUniqueNameFromOptions
     */
    export function generateUniqueNameFromOptions(startChar: string, usedNames: Array<string>): string;
    /**
     * Handles "Create Variable" button in the default variables toolbox category.
     * It will prompt the user for a variable name, including re-prompts if a name
     * is already in use among the workspace's variables.
     *
     * Custom button handlers can delegate to this function, allowing variables
     * types and after-creation processing. More complex customization (e.g.,
     * prompting for variable type) is beyond the scope of this function.
     *
     * @param {!Workspace} workspace The workspace on which to create the
     *     variable.
     * @param {function(?string=)=} opt_callback A callback. It will be passed an
     *     acceptable new variable name, or null if change is to be aborted (cancel
     *     button), or undefined if an existing variable was chosen.
     * @param {string=} opt_type The type of the variable like 'int', 'string', or
     *     ''. This will default to '', which is a specific type.
     * @alias Blockly.Variables.createVariableButtonHandler
     */
    export function createVariableButtonHandler(workspace: Workspace, opt_callback?: ((arg0: (string | null) | undefined) => any) | undefined, opt_type?: string | undefined): void;
    /**
     * Opens a prompt that allows the user to enter a new name for a variable.
     * Triggers a rename if the new name is valid. Or re-prompts if there is a
     * collision.
     * @param {!Workspace} workspace The workspace on which to rename the
     *     variable.
     * @param {!VariableModel} variable Variable to rename.
     * @param {function(?string=)=} opt_callback A callback. It will
     *     be passed an acceptable new variable name, or null if change is to be
     *     aborted (cancel button), or undefined if an existing variable was chosen.
     * @alias Blockly.Variables.renameVariable
     */
    export function renameVariable(workspace: Workspace, variable: VariableModel, opt_callback?: ((arg0: (string | null) | undefined) => any) | undefined): void;
    /**
     * Prompt the user for a new variable name.
     * @param {string} promptText The string of the prompt.
     * @param {string} defaultText The default value to show in the prompt's field.
     * @param {function(?string)} callback A callback. It will return the new
     *     variable name, or null if the user picked something illegal.
     * @alias Blockly.Variables.promptName
     */
    export function promptName(promptText: string, defaultText: string, callback: (arg0: string | null) => any): void;
    /**
     * Check whether there exists a variable with the given name of any type.
     * @param {string} name The name to search for.
     * @param {!Workspace} workspace The workspace to search for the
     *     variable.
     * @return {?VariableModel} The variable with the given name,
     *     or null if none was found.
     * @alias Blockly.Variables.nameUsedWithAnyType
     */
    export function nameUsedWithAnyType(name: string, workspace: Workspace): VariableModel | null;
    /**
     * Generate DOM objects representing a variable field.
     * @param {!VariableModel} variableModel The variable model to
     *     represent.
     * @return {?Element} The generated DOM.
     * @alias Blockly.Variables.generateVariableFieldDom
     */
    export function generateVariableFieldDom(variableModel: VariableModel): Element | null;
    /**
     * Helper function to look up or create a variable on the given workspace.
     * If no variable exists, creates and returns it.
     * @param {!Workspace} workspace The workspace to search for the
     *     variable.  It may be a flyout workspace or main workspace.
     * @param {?string} id The ID to use to look up or create the variable, or null.
     * @param {string=} opt_name The string to use to look up or create the
     *     variable.
     * @param {string=} opt_type The type to use to look up or create the variable.
     * @return {!VariableModel} The variable corresponding to the given ID
     *     or name + type combination.
     * @alias Blockly.Variables.getOrCreateVariablePackage
     */
    export function getOrCreateVariablePackage(workspace: Workspace, id: string | null, opt_name?: string | undefined, opt_type?: string | undefined): VariableModel;
    /**
     * Look up  a variable on the given workspace.
     * Always looks in the main workspace before looking in the flyout workspace.
     * Always prefers lookup by ID to lookup by name + type.
     * @param {!Workspace} workspace The workspace to search for the
     *     variable.  It may be a flyout workspace or main workspace.
     * @param {?string} id The ID to use to look up the variable, or null.
     * @param {string=} opt_name The string to use to look up the variable.
     *     Only used if lookup by ID fails.
     * @param {string=} opt_type The type to use to look up the variable.
     *     Only used if lookup by ID fails.
     * @return {?VariableModel} The variable corresponding to the given ID
     *     or name + type combination, or null if not found.
     * @alias Blockly.Variables.getVariable
     */
    export function getVariable(workspace: Workspace, id: string | null, opt_name?: string | undefined, opt_type?: string | undefined): VariableModel | null;
    /**
     * Helper function to get the list of variables that have been added to the
     * workspace after adding a new block, using the given list of variables that
     * were in the workspace before the new block was added.
     * @param {!Workspace} workspace The workspace to inspect.
     * @param {!Array<!VariableModel>} originalVariables The array of
     *     variables that existed in the workspace before adding the new block.
     * @return {!Array<!VariableModel>} The new array of variables that
     *     were freshly added to the workspace after creating the new block,
     *     or [] if no new variables were added to the workspace.
     * @alias Blockly.Variables.getAddedVariables
     * @package
     */
    export function getAddedVariables(workspace: Workspace, originalVariables: Array<VariableModel>): Array<VariableModel>;
    import { Workspace } from "workspace";
    import { VariableModel } from "variable_model";
}
declare module "events/events_block_base" {
    /**
     * Abstract class for a block event.
     * @param {!Block=} opt_block The block this event corresponds to.
     *     Undefined for a blank event.
     * @extends {Abstract}
     * @constructor
     * @alias Blockly.Events.BlockBase
     */
    export class BlockBase {
        constructor(opt_block: any);
        isBlank: boolean;
        /**
         * The block ID for the block this event pertains to
         * @type {string}
         */
        blockId: string;
        /**
         * The workspace identifier for this event.
         * @type {string}
         */
        workspaceId: string;
        /**
         * Encode the event as JSON.
         * @return {!Object} JSON representation.
         */
        toJson(): any;
        /**
         * Decode the JSON event.
         * @param {!Object} json JSON representation.
         */
        fromJson(json: any): void;
    }
}
declare module "events/events_block_change" {
    export class BlockChange {
        /**
         * Returns the extra state of the given block (either as XML or a JSO, depending
         * on the block's definition).
         * @param {!BlockSvg} block The block to get the extra state of.
         * @return {string} A stringified version of the extra state of the given block.
         * @package
         */
        static getExtraBlockState_(block: BlockSvg): string;
        /**
         * Class for a block change event.
         * @param {!Block=} opt_block The changed block.  Undefined for a blank
         *     event.
         * @param {string=} opt_element One of 'field', 'comment', 'disabled', etc.
         * @param {?string=} opt_name Name of input or field affected, or null.
         * @param {*=} opt_oldValue Previous value of element.
         * @param {*=} opt_newValue New value of element.
         * @extends {BlockBase}
         * @constructor
         * @alias Blockly.Events.BlockChange
         */
        constructor(opt_block?: Block | undefined, opt_element?: string | undefined, opt_name?: (string | null) | undefined, opt_oldValue?: any | undefined, opt_newValue?: any | undefined);
        element: string;
        name: string;
        oldValue: any;
        newValue: any;
        /**
         * Encode the event as JSON.
         * @return {!Object} JSON representation.
         */
        toJson(): any;
        /**
         * Decode the JSON event.
         * @param {!Object} json JSON representation.
         */
        fromJson(json: any): void;
        /**
         * Does this event record any change of state?
         * @return {boolean} False if something changed.
         */
        isNull(): boolean;
        /**
         * Run a change event.
         * @param {boolean} forward True if run forward, false if run backward (undo).
         */
        run(forward: boolean): void;
        /**
         * Type of this event.
         * @type {string}
         */
        type: string;
    }
    import { BlockSvg } from "block_svg";
    import { Block } from "block";
}
declare module "procedures" {
    /**
     * The default argument for a procedures_mutatorarg block.
     * @type {string}
     * @alias Blockly.Procedures.DEFAULT_ARG
     */
    export const DEFAULT_ARG: string;
    /**
     * Procedure block type.
     */
    export type ProcedureBlock = {
        getProcedureCall: () => string;
        renameProcedure: (arg0: string, arg1: string) => any;
        getProcedureDef: () => any[];
    };
    /**
     * Procedure block type.
     * @typedef {{
     *    getProcedureCall: function():string,
     *    renameProcedure: function(string,string),
     *    getProcedureDef: function():!Array
     * }}
     * @alias Blockly.Procedures.ProcedureBlock
     */
    export let ProcedureBlock: any;
    /**
     * Find all user-created procedure definitions in a workspace.
     * @param {!Workspace} root Root workspace.
     * @return {!Array<!Array<!Array>>} Pair of arrays, the
     *     first contains procedures without return variables, the second with.
     *     Each procedure is defined by a three-element list of name, parameter
     *     list, and return value boolean.
     * @alias Blockly.Procedures.allProcedures
     */
    export function allProcedures(root: Workspace): Array<Array<any[]>>;
    /**
     * Ensure two identically-named procedures don't exist.
     * Take the proposed procedure name, and return a legal name i.e. one that
     * is not empty and doesn't collide with other procedures.
     * @param {string} name Proposed procedure name.
     * @param {!Block} block Block to disambiguate.
     * @return {string} Non-colliding name.
     * @alias Blockly.Procedures.findLegalName
     */
    export function findLegalName(name: string, block: Block): string;
    /**
     * Return if the given name is already a procedure name.
     * @param {string} name The questionable name.
     * @param {!Workspace} workspace The workspace to scan for collisions.
     * @param {Block=} opt_exclude Optional block to exclude from
     *     comparisons (one doesn't want to collide with oneself).
     * @return {boolean} True if the name is used, otherwise return false.
     * @alias Blockly.Procedures.isNameUsed
     */
    export function isNameUsed(name: string, workspace: Workspace, opt_exclude?: Block | undefined): boolean;
    /**
     * Rename a procedure.  Called by the editable field.
     * @param {string} name The proposed new name.
     * @return {string} The accepted name.
     * @this {Field}
     * @alias Blockly.Procedures.rename
     */
    export function rename(name: string): string;
    /**
     * Construct the blocks required by the flyout for the procedure category.
     * @param {!Workspace} workspace The workspace containing procedures.
     * @return {!Array<!Element>} Array of XML block elements.
     * @alias Blockly.Procedures.flyoutCategory
     */
    export function flyoutCategory(workspace: Workspace): Array<Element>;
    /**
     * Listens for when a procedure mutator is opened. Then it triggers a flyout
     * update and adds a mutator change listener to the mutator workspace.
     * @param {!Abstract} e The event that triggered this listener.
     * @alias Blockly.Procedures.mutatorOpenListener
     * @package
     */
    export function mutatorOpenListener(e: typeof Abstract): void;
    /**
     * Find all the callers of a named procedure.
     * @param {string} name Name of procedure.
     * @param {!Workspace} workspace The workspace to find callers in.
     * @return {!Array<!Block>} Array of caller blocks.
     * @alias Blockly.Procedures.getCallers
     */
    export function getCallers(name: string, workspace: Workspace): Array<Block>;
    /**
     * When a procedure definition changes its parameters, find and edit all its
     * callers.
     * @param {!Block} defBlock Procedure definition block.
     * @alias Blockly.Procedures.mutateCallers
     */
    export function mutateCallers(defBlock: Block): void;
    /**
     * Find the definition block for the named procedure.
     * @param {string} name Name of procedure.
     * @param {!Workspace} workspace The workspace to search.
     * @return {?Block} The procedure definition block, or null not found.
     * @alias Blockly.Procedures.getDefinition
     */
    export function getDefinition(name: string, workspace: Workspace): Block | null;
    import { Workspace } from "workspace";
    import { Block } from "block";
    import * as Abstract from "events/events_abstract";
}
declare module "variables_dynamic" {
    function stringButtonClickHandler(button: any): void;
    function numberButtonClickHandler(button: any): void;
    function colorButtonClickHandler(button: any): void;
    /**
     * Construct the elements (blocks and button) required by the flyout for the
     * variable category.
     * @param {!Workspace} workspace The workspace containing variables.
     * @return {!Array<!Element>} Array of XML elements.
     * @alias Blockly.VariablesDynamic.flyoutCategory
     */
    export function flyoutCategory(workspace: Workspace): Array<Element>;
    /**
     * Construct the blocks required by the flyout for the variable category.
     * @param {!Workspace} workspace The workspace containing variables.
     * @return {!Array<!Element>} Array of XML block elements.
     * @alias Blockly.VariablesDynamic.flyoutCategoryBlocks
     */
    export function flyoutCategoryBlocks(workspace: Workspace): Array<Element>;
    import { Workspace } from "workspace";
    export { stringButtonClickHandler as onCreateVariableButtonClick_String, numberButtonClickHandler as onCreateVariableButtonClick_Number, colorButtonClickHandler as onCreateVariableButtonClick_Color };
}
declare module "renderers/common/debug" {
    /**
     * Returns whether the debugger is turned on.
     * @return {boolean} Whether the debugger is turned on.
     * @alias Blockly.blockRendering.debug.isDebuggerEnabled
     * @package
     */
    export function isDebuggerEnabled(): boolean;
    /**
     * Turn on the blocks debugger.
     * @package
     * @alias Blockly.blockRendering.debug.startDebugger
     */
    export function startDebugger(): void;
    /**
     * Turn off the blocks debugger.
     * @package
     * @alias Blockly.blockRendering.debug.stopDebugger
     */
    export function stopDebugger(): void;
}
declare module "renderers/common/constants" {
    /**
     * An object that provides constants for rendering blocks.
     * @constructor
     * @package
     * @alias Blockly.blockRendering.ConstantProvider
     */
    export class ConstantProvider {
        /**
         * The size of an empty spacer.
         * @type {number}
         */
        NO_PADDING: number;
        /**
         * The size of small padding.
         * @type {number}
         */
        SMALL_PADDING: number;
        /**
         * The size of medium padding.
         * @type {number}
         */
        MEDIUM_PADDING: number;
        /**
         * The size of medium-large padding.
         * @type {number}
         */
        MEDIUM_LARGE_PADDING: number;
        /**
         * The size of large padding.
         * @type {number}
         */
        LARGE_PADDING: number;
        /**
         * Offset from the top of the row for placing fields on inline input rows
         * and statement input rows.
         * Matches existing rendering (in 2019).
         * @type {number}
         */
        TALL_INPUT_FIELD_OFFSET_Y: number;
        /**
         * The height of the puzzle tab used for input and output connections.
         * @type {number}
         */
        TAB_HEIGHT: number;
        /**
         * The offset from the top of the block at which a puzzle tab is positioned.
         * @type {number}
         */
        TAB_OFFSET_FROM_TOP: number;
        /**
         * Vertical overlap of the puzzle tab, used to make it look more like a puzzle
         * piece.
         * @type {number}
         */
        TAB_VERTICAL_OVERLAP: number;
        /**
         * The width of the puzzle tab used for input and output connections.
         * @type {number}
         */
        TAB_WIDTH: number;
        /**
         * The width of the notch used for previous and next connections.
         * @type {number}
         */
        NOTCH_WIDTH: number;
        /**
         * The height of the notch used for previous and next connections.
         * @type {number}
         */
        NOTCH_HEIGHT: number;
        /**
         * The minimum width of the block.
         * @type {number}
         */
        MIN_BLOCK_WIDTH: number;
        EMPTY_BLOCK_SPACER_HEIGHT: number;
        /**
         * The minimum height of a dummy input row.
         * @type {number}
         */
        DUMMY_INPUT_MIN_HEIGHT: number;
        /**
         * The minimum height of a dummy input row in a shadow block.
         * @type {number}
         */
        DUMMY_INPUT_SHADOW_MIN_HEIGHT: number;
        /**
         * Rounded corner radius.
         * @type {number}
         */
        CORNER_RADIUS: number;
        /**
         * Offset from the left side of a block or the inside of a statement input to
         * the left side of the notch.
         * @type {number}
         */
        NOTCH_OFFSET_LEFT: number;
        /**
         * Additional offset added to the statement input's width to account for the
         * notch.
         * @type {number}
         */
        STATEMENT_INPUT_NOTCH_OFFSET: number;
        STATEMENT_BOTTOM_SPACER: number;
        STATEMENT_INPUT_PADDING_LEFT: number;
        /**
         * Vertical padding between consecutive statement inputs.
         * @type {number}
         */
        BETWEEN_STATEMENT_PADDING_Y: number;
        /**
         * The top row's minimum height.
         * @type {number}
         */
        TOP_ROW_MIN_HEIGHT: number;
        /**
         * The top row's minimum height if it precedes a statement.
         * @type {number}
         */
        TOP_ROW_PRECEDES_STATEMENT_MIN_HEIGHT: number;
        /**
         * The bottom row's minimum height.
         * @type {number}
         */
        BOTTOM_ROW_MIN_HEIGHT: number;
        /**
         * The bottom row's minimum height if it follows a statement input.
         * @type {number}
         */
        BOTTOM_ROW_AFTER_STATEMENT_MIN_HEIGHT: number;
        /**
         * Whether to add a 'hat' on top of all blocks with no previous or output
         * connections. Can be overridden by 'hat' property on Theme.BlockStyle.
         * @type {boolean}
         */
        ADD_START_HATS: boolean;
        /**
         * Height of the top hat.
         * @type {number}
         */
        START_HAT_HEIGHT: number;
        /**
         * Width of the top hat.
         * @type {number}
         */
        START_HAT_WIDTH: number;
        SPACER_DEFAULT_HEIGHT: number;
        MIN_BLOCK_HEIGHT: number;
        EMPTY_INLINE_INPUT_PADDING: number;
        /**
         * The height of an empty inline input.
         * @type {number}
         */
        EMPTY_INLINE_INPUT_HEIGHT: number;
        EXTERNAL_VALUE_INPUT_PADDING: number;
        /**
         * The height of an empty statement input.  Note that in the old rendering
         * this varies slightly depending on whether the block has external or inline
         * inputs. In the new rendering this is consistent.  It seems unlikely that
         * the old behaviour was intentional.
         * @type {number}
         */
        EMPTY_STATEMENT_INPUT_HEIGHT: number;
        START_POINT: string;
        /**
         * Height of SVG path for jagged teeth at the end of collapsed blocks.
         * @type {number}
         */
        JAGGED_TEETH_HEIGHT: number;
        /**
         * Width of SVG path for jagged teeth at the end of collapsed blocks.
         * @type {number}
         */
        JAGGED_TEETH_WIDTH: number;
        /**
         * Point size of text.
         * @type {number}
         */
        FIELD_TEXT_FONTSIZE: number;
        /**
         * Text font weight.
         * @type {string}
         */
        FIELD_TEXT_FONTWEIGHT: string;
        /**
         * Text font family.
         * @type {string}
         */
        FIELD_TEXT_FONTFAMILY: string;
        /**
         * Height of text.  This constant is dynamically set in ``setFontConstants_``
         * to be the height of the text based on the font used.
         * @type {number}
         */
        FIELD_TEXT_HEIGHT: number;
        /**
         * Text baseline.  This constant is dynamically set in ``setFontConstants_``
         * to be the baseline of the text based on the font used.
         * @type {number}
         */
        FIELD_TEXT_BASELINE: number;
        /**
         * A field's border rect corner radius.
         * @type {number}
         */
        FIELD_BORDER_RECT_RADIUS: number;
        /**
         * A field's border rect default height.
         * @type {number}
         */
        FIELD_BORDER_RECT_HEIGHT: number;
        /**
         * A field's border rect X padding.
         * @type {number}
         */
        FIELD_BORDER_RECT_X_PADDING: number;
        /**
         * A field's border rect Y padding.
         * @type {number}
         */
        FIELD_BORDER_RECT_Y_PADDING: number;
        /**
         * The backing color of a field's border rect.
         * @type {string}
         * @package
         */
        FIELD_BORDER_RECT_COLOR: string;
        /**
         * A field's text element's dominant baseline.
         * @type {boolean}
         */
        FIELD_TEXT_BASELINE_CENTER: boolean;
        /**
         * A dropdown field's border rect height.
         * @type {number}
         */
        FIELD_DROPDOWN_BORDER_RECT_HEIGHT: number;
        /**
         * Whether or not a dropdown field should add a border rect when in a shadow
         * block.
         * @type {boolean}
         */
        FIELD_DROPDOWN_NO_BORDER_RECT_SHADOW: boolean;
        /**
         * Whether or not a dropdown field's div should be colored to match the
         * block colors.
         * @type {boolean}
         */
        FIELD_DROPDOWN_COLORED_DIV: boolean;
        /**
         * Whether or not a dropdown field uses a text or SVG arrow.
         * @type {boolean}
         */
        FIELD_DROPDOWN_SVG_ARROW: boolean;
        /**
         * A dropdown field's SVG arrow padding.
         * @type {number}
         */
        FIELD_DROPDOWN_SVG_ARROW_PADDING: number;
        /**
         * A dropdown field's SVG arrow size.
         * @type {number}
         */
        FIELD_DROPDOWN_SVG_ARROW_SIZE: number;
        /**
         * A dropdown field's SVG arrow datauri.
         * @type {string}
         */
        FIELD_DROPDOWN_SVG_ARROW_DATAURI: string;
        /**
         * Whether or not to show a box shadow around the widget div. This is only a
         * feature of full block fields.
         * @type {boolean}
         */
        FIELD_TEXTINPUT_BOX_SHADOW: boolean;
        /**
         * Whether or not the color field should display its color value on the
         * entire block.
         * @type {boolean}
         */
        FIELD_COLOR_FULL_BLOCK: boolean;
        /**
         * A color field's default width.
         * @type {number}
         */
        FIELD_COLOR_DEFAULT_WIDTH: number;
        /**
         * A color field's default height.
         * @type {number}
         */
        FIELD_COLOR_DEFAULT_HEIGHT: number;
        /**
         * A checkbox field's X offset.
         * @type {number}
         */
        FIELD_CHECKBOX_X_OFFSET: number;
        /**
         * A random identifier used to ensure a unique ID is used for each
         * filter/pattern for the case of multiple Blockly instances on a page.
         * @type {string}
         * @package
         */
        randomIdentifier: string;
        /**
         * The defs tag that contains all filters and patterns for this Blockly
         * instance.
         * @type {?SVGElement}
         * @private
         */
        private defs_;
        /**
         * The ID of the emboss filter, or the empty string if no filter is set.
         * @type {string}
         * @package
         */
        embossFilterId: string;
        /**
         * The <filter> element to use for highlighting, or null if not set.
         * @type {SVGElement}
         * @private
         */
        private embossFilter_;
        /**
         * The ID of the disabled pattern, or the empty string if no pattern is set.
         * @type {string}
         * @package
         */
        disabledPatternId: string;
        /**
         * The <pattern> element to use for disabled blocks, or null if not set.
         * @type {SVGElement}
         * @private
         */
        private disabledPattern_;
        /**
         * The ID of the debug filter, or the empty string if no pattern is set.
         * @type {string}
         * @package
         */
        debugFilterId: string;
        /**
         * The <filter> element to use for a debug highlight, or null if not set.
         * @type {SVGElement}
         * @private
         */
        private debugFilter_;
        /**
         * The <style> element to use for injecting renderer specific CSS.
         * @type {HTMLStyleElement}
         * @private
         */
        private cssNode_;
        /**
         * Cursor color.
         * @type {string}
         * @package
         */
        CURSOR_COLOR: string;
        /**
         * Immovable marker color.
         * @type {string}
         * @package
         */
        MARKER_COLOR: string;
        /**
         * Width of the horizontal cursor.
         * @type {number}
         * @package
         */
        CURSOR_WS_WIDTH: number;
        /**
         * Height of the horizontal cursor.
         * @type {number}
         * @package
         */
        WS_CURSOR_HEIGHT: number;
        /**
         * Padding around a stack.
         * @type {number}
         * @package
         */
        CURSOR_STACK_PADDING: number;
        /**
         * Padding around a block.
         * @type {number}
         * @package
         */
        CURSOR_BLOCK_PADDING: number;
        /**
         * Stroke of the cursor.
         * @type {number}
         * @package
         */
        CURSOR_STROKE_WIDTH: number;
        /**
         * Whether text input and color fields fill up the entire source block.
         * @type {boolean}
         * @package
         */
        FULL_BLOCK_FIELDS: boolean;
        /**
         * The main color of insertion markers, in hex.  The block is rendered a
         * transparent grey by changing the fill opacity in CSS.
         * @type {string}
         * @package
         */
        INSERTION_MARKER_COLOR: string;
        /**
         * The insertion marker opacity.
         * @type {number}
         * @package
         */
        INSERTION_MARKER_OPACITY: number;
        /**
         * Enum for connection shapes.
         * @enum {number}
         */
        SHAPES: {
            PUZZLE: number;
            NOTCH: number;
        };
        /**
         * Initialize shape objects based on the constants set in the constructor.
         * @package
         */
        init(): void;
        /**
         * An object containing sizing and path information about collapsed block
         * indicators.
         * @type {!Object}
         */
        JAGGED_TEETH: any;
        /**
         * An object containing sizing and path information about notches.
         * @type {!Object}
         */
        NOTCH: any;
        /**
         * An object containing sizing and path information about start hats
         * @type {!Object}
         */
        START_HAT: any;
        /**
         * An object containing sizing and path information about puzzle tabs.
         * @type {!Object}
         */
        PUZZLE_TAB: any;
        /**
         * An object containing sizing and path information about inside corners
         * @type {!Object}
         */
        INSIDE_CORNERS: any;
        /**
         * An object containing sizing and path information about outside corners.
         * @type {!Object}
         */
        OUTSIDE_CORNERS: any;
        /**
         * Refresh constants properties that depend on the theme.
         * @param {!Theme} theme The current workspace theme.
         * @package
         */
        setTheme(theme: Theme): void;
        /**
         * The block styles map.
         * @type {Object<string, !Theme.BlockStyle>}
         * @package
         */
        blockStyles: {
            [x: string]: Theme.BlockStyle;
        };
        /**
         * Sets dynamic properties that depend on other values or theme properties.
         * @param {!Theme} theme The current workspace theme.
         * @protected
         */
        protected setDynamicProperties_(theme: Theme): void;
        /**
         * Set constants related to fonts.
         * @param {!Theme} theme The current workspace theme.
         * @protected
         */
        protected setFontConstants_(theme: Theme): void;
        /**
         * Set constants from a theme's component styles.
         * @param {!Theme} theme The current workspace theme.
         * @protected
         */
        protected setComponentConstants_(theme: Theme): void;
        /**
         * Get or create a block style based on a single color value.  Generate a name
         * for the style based on the color.
         * @param {string} color #RRGGBB color string.
         * @return {{style: !Theme.BlockStyle, name: string}} An object
         *     containing the style and an autogenerated name for that style.
         * @package
         */
        getBlockStyleForColor(color: string): {
            style: Theme.BlockStyle;
            name: string;
        };
        /**
         * Gets the BlockStyle for the given block style name.
         * @param {?string} blockStyleName The name of the block style.
         * @return {!Theme.BlockStyle} The named block style, or a default style
         *     if no style with the given name was found.
         */
        getBlockStyle(blockStyleName: string | null): Theme.BlockStyle;
        /**
         * Create a block style object based on the given color.
         * @param {string} color #RRGGBB color string.
         * @return {!Theme.BlockStyle} A populated block style based on the
         *     given color.
         * @protected
         */
        protected createBlockStyle_(color: string): Theme.BlockStyle;
        /**
         * Get a full block style object based on the input style object.  Populate
         * any missing values.
         * @param {{
         *     colorPrimary:string,
         *     colorSecondary:(string|undefined),
         *     colorTertiary:(string|undefined),
         *     hat:(string|undefined)
         * }} blockStyle A full or partial block style object.
       
         * @return {!Theme.BlockStyle} A full block style object, with all
         *     required properties populated.
         * @protected
         */
        protected validatedBlockStyle_(blockStyle: {
            colorPrimary: string;
            colorSecondary: (string | undefined);
            colorTertiary: (string | undefined);
            hat: (string | undefined);
        }): Theme.BlockStyle;
        /**
         * Generate a secondary color from the passed in primary color.
         * @param {string} inputColor Primary color.
         * @return {string} The generated secondary color.
         * @protected
         */
        protected generateSecondaryColor_(inputColor: string): string;
        /**
         * Generate a tertiary color from the passed in primary color.
         * @param {string} inputColor Primary color.
         * @return {string} The generated tertiary color.
         * @protected
         */
        protected generateTertiaryColor_(inputColor: string): string;
        /**
         * Dispose of this constants provider.
         * Delete all DOM elements that this provider created.
         * @package
         */
        dispose(): void;
        /**
         * @return {!Object} An object containing sizing and path information about
         *     collapsed block indicators.
         * @package
         */
        makeJaggedTeeth(): any;
        /**
         * @return {!Object} An object containing sizing and path information about
         *     start hats.
         * @package
         */
        makeStartHat(): any;
        /**
         * @return {!Object} An object containing sizing and path information about
         *     puzzle tabs.
         * @package
         */
        makePuzzleTab(): any;
        /**
         * @return {!Object} An object containing sizing and path information about
         *     notches.
         * @package
         */
        makeNotch(): any;
        /**
         * @return {!Object} An object containing sizing and path information about
         *     inside corners.
         * @package
         */
        makeInsideCorners(): any;
        /**
         * @return {!Object} An object containing sizing and path information about
         *     outside corners.
         * @package
         */
        makeOutsideCorners(): any;
        /**
         * Get an object with connection shape and sizing information based on the type
         * of the connection.
         * @param {!RenderedConnection} connection The connection to find a
         *     shape object for
         * @return {!Object} The shape object for the connection.
         * @package
         */
        shapeFor(connection: RenderedConnection): any;
        /**
         * Create any DOM elements that this renderer needs (filters, patterns, etc).
         * @param {!SVGElement} svg The root of the workspace's SVG.
         * @param {string} tagName The name to use for the CSS style tag.
         * @param {string} selector The CSS selector to use.
         * @suppress {strictModuleDepCheck} Debug renderer only included in playground.
         * @package
         */
        createDom(svg: SVGElement, tagName: string, selector: string): void;
        /**
         * Create a filter for highlighting the currently rendering block during
         * render debugging.
         * @private
         */
        private createDebugFilter;
        /**
         * Inject renderer specific CSS into the page.
         * @param {string} tagName The name of the style tag to use.
         * @param {string} selector The CSS selector to use.
         * @protected
         */
        protected injectCSS_(tagName: string, selector: string): void;
        /**
         * Get any renderer specific CSS to inject when the renderer is initialized.
         * @param {string} selector CSS selector to use.
         * @return {!Array<string>} Array of CSS strings.
         * @protected
         */
        protected getCSS_(selector: string): Array<string>;
    }
    import { Theme } from "theme";
    import { RenderedConnection } from "rendered_connection";
}
declare module "renderers/measurables/in_row_spacer" {
    /**
     * An object containing information about a spacer between two elements on a
     * row.
     * @param {!ConstantProvider} constants The rendering
     *   constants provider.
     * @param {number} width The width of the spacer.
     * @package
     * @constructor
     * @extends {Measurable}
     * @alias Blockly.blockRendering.InRowSpacer
     */
    export class InRowSpacer extends Measurable {
        constructor(constants: any, width: any);
        width: any;
        height: any;
    }
    import { Measurable } from "renderers/common/block_rendering";
}
declare module "interfaces/i_registrable_field" {
    /**
     * A registrable field.
     * Note: We are not using an interface here as we are interested in defining the
     * static methods of a field rather than the instance methods.
     */
    export type IRegistrableField = {
        fromJson: IRegistrableField.fromJson;
    };
    export namespace IRegistrableField {
        type fromJson = (arg0: any) => Field;
    }
    import { Field } from "field";
}
declare module "field_registry" {
    /**
     * Registers a field type.
     * fieldRegistry.fromJson uses this registry to
     * find the appropriate field type.
     * @param {string} type The field type name as used in the JSON definition.
     * @param {!IRegistrableField} fieldClass The field class containing a
     *     fromJson function that can construct an instance of the field.
     * @throws {Error} if the type name is empty, the field is already
     *     registered, or the fieldClass is not an object containing a fromJson
     *     function.
     * @alias Blockly.fieldRegistry.register
     */
    export function register(type: string, fieldClass: IRegistrableField): void;
    /**
     * Unregisters the field registered with the given type.
     * @param {string} type The field type name as used in the JSON definition.
     * @alias Blockly.fieldRegistry.unregister
     */
    export function unregister(type: string): void;
    /**
     * Construct a Field from a JSON arg object.
     * Finds the appropriate registered field by the type name as registered using
     * fieldRegistry.register.
     * @param {!Object} options A JSON object with a type and options specific
     *     to the field type.
     * @return {?Field} The new field instance or null if a field wasn't
     *     found with the given type name
     * @alias Blockly.fieldRegistry.fromJson
     * @package
     */
    export function fromJson(options: any): Field | null;
    import { IRegistrableField } from "interfaces/i_registrable_field";
    import { Field } from "field";
}
declare module "field_label" {
    /**
     * Class for a non-editable, non-serializable text field.
     * @param {string=} opt_value The initial value of the field. Should cast to a
     *    string. Defaults to an empty string if null or undefined.
     * @param {string=} opt_class Optional CSS class for the field's text.
     * @param {Object=} opt_config A map of options used to configure the field.
     *    See the [field creation documentation]{@link
     * https://developers.google.com/blockly/guides/create-custom-blocks/fields/built-in-fields/label#creation}
     *    for a list of properties this parameter supports.
     * @extends {Field}
     * @constructor
     * @alias Blockly.FieldLabel
     */
    export class FieldLabel extends Field {
        /**
         * Construct a FieldLabel from a JSON arg object,
         * dereferencing any string table references.
         * @param {!Object} options A JSON object with options (text, and class).
         * @return {!FieldLabel} The new field instance.
         * @package
         * @nocollapse
         */
        static fromJson(options: any): FieldLabel;
        constructor(opt_value: any, opt_class: any, opt_config: any);
        /**
         * The html class name to use for this field.
         * @type {?string}
         * @private
         */
        private class_;
        /**
         * @override
         */
        override configure_(config: any): void;
        /**
         * Create block UI for this label.
         * @package
         */
        initView(): void;
        /**
         * Ensure that the input value casts to a valid string.
         * @param {*=} opt_newValue The input value.
         * @return {?string} A valid string, or null if invalid.
         * @protected
         */
        protected doClassValidation_(opt_newValue?: any | undefined): string | null;
        /**
         * Set the CSS class applied to the field's textElement_.
         * @param {?string} cssClass The new CSS class name, or null to remove.
         */
        setClass(cssClass: string | null): void;
        /**
         * The default value for this field.
         * @type {*}
         * @protected
         */
        protected DEFAULT_VALUE: any;
        /**
         * Editable fields usually show some sort of UI indicating they are
         * editable. This field should not.
         * @type {boolean}
         */
        EDITABLE: boolean;
    }
    import { Field } from "field";
}
declare module "input" {
    export class Input {
        /**
         * Class for an input with an optional field.
         * @param {number} type The type of the input.
         * @param {string} name Language-neutral identifier which may used to find this
         *     input again.
         * @param {!Block} block The block containing this input.
         * @param {Connection} connection Optional connection for this input.
         * @constructor
         * @alias Blockly.Input
         */
        constructor(type: number, name: string, block: Block, connection: Connection);
        /** @type {number} */
        type: number;
        /** @type {string} */
        name: string;
        /**
         * @type {!Block}
         * @private
         */
        private sourceBlock_;
        /** @type {Connection} */
        connection: Connection;
        /** @type {!Array<!Field>} */
        fieldRow: Array<Field>;
        /**
         * Get the source block for this input.
         * @return {?Block} The source block, or null if there is none.
         */
        getSourceBlock(): Block | null;
        /**
         * Add a field (or label from string), and all prefix and suffix fields, to the
         * end of the input's field row.
         * @param {string|!Field} field Something to add as a field.
         * @param {string=} opt_name Language-neutral identifier which may used to find
         *     this field again.  Should be unique to the host block.
         * @return {!Input} The input being append to (to allow chaining).
         */
        appendField(field: string | Field, opt_name?: string | undefined): Input;
        /**
         * Inserts a field (or label from string), and all prefix and suffix fields, at
         * the location of the input's field row.
         * @param {number} index The index at which to insert field.
         * @param {string|!Field} field Something to add as a field.
         * @param {string=} opt_name Language-neutral identifier which may used to find
         *     this field again.  Should be unique to the host block.
         * @return {number} The index following the last inserted field.
         */
        insertFieldAt(index: number, field: string | Field, opt_name?: string | undefined): number;
        /**
         * Remove a field from this input.
         * @param {string} name The name of the field.
         * @param {boolean=} opt_quiet True to prevent an error if field is not present.
         * @return {boolean} True if operation succeeds, false if field is not present
         *     and opt_quiet is true.
         * @throws {Error} if the field is not present and opt_quiet is false.
         */
        removeField(name: string, opt_quiet?: boolean | undefined): boolean;
        /**
         * Gets whether this input is visible or not.
         * @return {boolean} True if visible.
         */
        isVisible(): boolean;
        /**
         * Sets whether this input is visible or not.
         * Should only be used to collapse/uncollapse a block.
         * @param {boolean} visible True if visible.
         * @return {!Array<!BlockSvg>} List of blocks to render.
         * @package
         */
        setVisible(visible: boolean): Array<BlockSvg>;
        visible_: any;
        /**
         * Mark all fields on this input as dirty.
         * @package
         */
        markDirty(): void;
        /**
         * Change a connection's compatibility.
         * @param {string|Array<string>|null} check Compatible value type or
         *     list of value types.  Null if all types are compatible.
         * @return {!Input} The input being modified (to allow chaining).
         */
        setCheck(check: string | Array<string> | null): Input;
        /**
         * Change the alignment of the connection's field(s).
         * @param {number} align One of the values of constants.ALIGN.
         *   In RTL mode directions are reversed, and ALIGN.RIGHT aligns to the left.
         * @return {!Input} The input being modified (to allow chaining).
         */
        setAlign(align: number): Input;
        align: number;
        /**
         * Changes the connection's shadow block.
         * @param {?Element} shadow DOM representation of a block or null.
         * @return {!Input} The input being modified (to allow chaining).
         */
        setShadowDom(shadow: Element | null): Input;
        /**
         * Returns the XML representation of the connection's shadow block.
         * @return {?Element} Shadow DOM representation of a block or null.
         */
        getShadowDom(): Element | null;
        /**
         * Initialize the fields on this input.
         */
        init(): void;
        /**
         * Sever all links to this input.
         * @suppress {checkTypes}
         */
        dispose(): void;
    }
    import { Connection } from "connection";
    import { Field } from "field";
    import { Block } from "block";
    import { BlockSvg } from "block_svg";
}
declare module "renderers/measurables/input_connection" {
    /**
     * The base class to represent an input that takes up space on a block
     * during rendering
     * @param {!ConstantProvider} constants The rendering
     *   constants provider.
     * @param {!Input} input The input to measure and store information for.
     * @package
     * @constructor
     * @extends {Connection}
     * @alias Blockly.blockRendering.InputConnection
     */
    export class InputConnection {
        constructor(constants: any, input: any);
        input: any;
        align: any;
        connectedBlock: any;
        connectedBlockWidth: any;
        connectedBlockHeight: any;
        connectionOffsetX: number;
        connectionOffsetY: number;
    }
}
declare module "renderers/measurables/row" {
    /**
     * An object representing a single row on a rendered block and all of its
     * subcomponents.
     * @param {!ConstantProvider} constants The rendering
     *   constants provider.
     * @package
     * @constructor
     * @alias Blockly.blockRendering.Row
     */
    export class Row {
        constructor(constants: any);
        /**
         * The type of this rendering object.
         * @package
         * @type {number}
         */
        type: number;
        /**
         * An array of elements contained in this row.
         * @package
         * @type {!Array<!Measurable>}
         */
        elements: Array<Measurable>;
        /**
         * The height of the row.
         * @package
         * @type {number}
         */
        height: number;
        /**
         * The width of the row, from the left edge of the block to the right.
         * Does not include child blocks unless they are inline.
         * @package
         * @type {number}
         */
        width: number;
        /**
         * The minimum height of the row.
         * @package
         * @type {number}
         */
        minHeight: number;
        /**
         * The minimum width of the row, from the left edge of the block to the right.
         * Does not include child blocks unless they are inline.
         * @package
         * @type {number}
         */
        minWidth: number;
        /**
         * The width of the row, from the left edge of the block to the edge of the
         * block or any connected child blocks.
         * @package
         * @type {number}
         */
        widthWithConnectedBlocks: number;
        /**
         * The Y position of the row relative to the origin of the block's svg group.
         * @package
         * @type {number}
         */
        yPos: number;
        /**
         * The X position of the row relative to the origin of the block's svg group.
         * @package
         * @type {number}
         */
        xPos: number;
        /**
         * Whether the row has any external inputs.
         * @package
         * @type {boolean}
         */
        hasExternalInput: boolean;
        /**
         * Whether the row has any statement inputs.
         * @package
         * @type {boolean}
         */
        hasStatement: boolean;
        /**
         * Whether the row has any inline inputs.
         * @package
         * @type {boolean}
         */
        hasInlineInput: boolean;
        /**
         * Whether the row has any dummy inputs.
         * @package
         * @type {boolean}
         */
        hasDummyInput: boolean;
        /**
         * Whether the row has a jagged edge.
         * @package
         * @type {boolean}
         */
        hasJaggedEdge: boolean;
        /**
         * The renderer's constant provider.
         * @type {!ConstantProvider}
         * @protected
         */
        protected constants_: ConstantProvider;
        notchOffset: number;
        /**
         * Alignment of the row.
         * @package
         * @type {?number}
         */
        align: number | null;
        /**
         * Get the last input on this row, if it has one.
         * @return {InputConnection} The last input on the row,
         *     or null.
         * @package
         */
        getLastInput(): InputConnection;
        /**
         * Inspect all subcomponents and populate all size properties on the row.
         * @package
         */
        measure(): void;
        /**
         * Determines whether this row should start with an element spacer.
         * @return {boolean} Whether the row should start with a spacer.
         * @package
         */
        startsWithElemSpacer(): boolean;
        /**
         * Determines whether this row should end with an element spacer.
         * @return {boolean} Whether the row should end with a spacer.
         * @package
         */
        endsWithElemSpacer(): boolean;
        /**
         * Convenience method to get the first spacer element on this row.
         * @return {InRowSpacer} The first spacer element on
         *   this row.
         * @package
         */
        getFirstSpacer(): InRowSpacer;
        /**
         * Convenience method to get the last spacer element on this row.
         * @return {InRowSpacer} The last spacer element on
         *   this row.
         * @package
         */
        getLastSpacer(): InRowSpacer;
    }
    import { Measurable } from "renderers/measurables/base";
    import { ConstantProvider } from "renderers/common/constants";
    import { InputConnection } from "renderers/measurables/input_connection";
    import { InRowSpacer } from "renderers/measurables/in_row_spacer";
}
declare module "renderers/measurables/types" {
    /**
     * *
     */
    export type Types = number;
    export namespace Types {
        const LEFT_CORNER: number;
        const RIGHT_CORNER: number;
        const nextTypeValue_: number;
        /**
         * Get the enum flag value of an existing type or register a new type.
         * @param {!string} type The name of the type.
         * @return {!number} The enum flag value associated with that type.
         * @package
         */
        function getType(type: string): number;
        /**
         * Whether a measurable stores information about a field.
         * @param {!Measurable} elem The element to check.
         * @return {number} 1 if the object stores information about a field.
         * @package
         */
        function isField(elem: Measurable): number;
        /**
         * Whether a measurable stores information about a hat.
         * @param {!Measurable} elem The element to check.
         * @return {number} 1 if the object stores information about a hat.
         * @package
         */
        function isHat(elem: Measurable): number;
        /**
         * Whether a measurable stores information about an icon.
         * @param {!Measurable} elem The element to check.
         * @return {number} 1 if the object stores information about an icon.
         * @package
         */
        function isIcon(elem: Measurable): number;
        /**
         * Whether a measurable stores information about a spacer.
         * @param {!Measurable|!Row} elem
         *     The element to check.
         * @return {number} 1 if the object stores information about a spacer.
         * @package
         */
        function isSpacer(elem: Measurable | Row): number;
        /**
         * Whether a measurable stores information about an in-row spacer.
         * @param {!Measurable} elem The element to check.
         * @return {number} 1 if the object stores information about an
         *   in-row spacer.
         * @package
         */
        function isInRowSpacer(elem: Measurable): number;
        /**
         * Whether a measurable stores information about an input.
         * @param {!Measurable} elem The element to check.
         * @return {number} 1 if the object stores information about an input.
         * @package
         */
        function isInput(elem: Measurable): number;
        /**
         * Whether a measurable stores information about an external input.
         * @param {!Measurable} elem The element to check.
         * @return {number} 1 if the object stores information about an
         *   external input.
         * @package
         */
        function isExternalInput(elem: Measurable): number;
        /**
         * Whether a measurable stores information about an inline input.
         * @param {!Measurable} elem The element to check.
         * @return {number} 1 if the object stores information about an
         *   inline input.
         * @package
         */
        function isInlineInput(elem: Measurable): number;
        /**
         * Whether a measurable stores information about a statement input.
         * @param {!Measurable} elem The element to check.
         * @return {number} 1 if the object stores information about a
         *   statement input.
         * @package
         */
        function isStatementInput(elem: Measurable): number;
        /**
         * Whether a measurable stores information about a previous connection.
         * @param {!Measurable} elem The element to check.
         * @return {number} 1 if the object stores information about a
         *   previous connection.
         * @package
         */
        function isPreviousConnection(elem: Measurable): number;
        /**
         * Whether a measurable stores information about a next connection.
         * @param {!Measurable} elem The element to check.
         * @return {number} 1 if the object stores information about a
         *   next connection.
         * @package
         */
        function isNextConnection(elem: Measurable): number;
        /**
         * Whether a measurable stores information about a previous or next connection.
         * @param {!Measurable} elem The element to check.
         * @return {number} 1 if the object stores information about a previous or
         *   next connection.
         * @package
         */
        function isPreviousOrNextConnection(elem: Measurable): number;
        /**
         * Whether a measurable stores information about a left round corner.
         * @param {!Measurable} elem The element to check.
         * @return {number} 1 if the object stores information about a
         *   left round corner.
         * @package
         */
        function isLeftRoundedCorner(elem: Measurable): number;
        /**
         * Whether a measurable stores information about a right round corner.
         * @param {!Measurable} elem The element to check.
         * @return {number} 1 if the object stores information about a
         *   right round corner.
         * @package
         */
        function isRightRoundedCorner(elem: Measurable): number;
        /**
         * Whether a measurable stores information about a left square corner.
         * @param {!Measurable} elem The element to check.
         * @return {number} 1 if the object stores information about a
         *   left square corner.
         * @package
         */
        function isLeftSquareCorner(elem: Measurable): number;
        /**
         * Whether a measurable stores information about a right square corner.
         * @param {!Measurable} elem The element to check.
         * @return {number} 1 if the object stores information about a
         *   right square corner.
         * @package
         */
        function isRightSquareCorner(elem: Measurable): number;
        /**
         * Whether a measurable stores information about a corner.
         * @param {!Measurable} elem The element to check.
         * @return {number} 1 if the object stores information about a
         *   corner.
         * @package
         */
        function isCorner(elem: Measurable): number;
        /**
         * Whether a measurable stores information about a jagged edge.
         * @param {!Measurable} elem The element to check.
         * @return {number} 1 if the object stores information about a jagged edge.
         * @package
         */
        function isJaggedEdge(elem: Measurable): number;
        /**
         * Whether a measurable stores information about a row.
         * @param {!Row} row The row to check.
         * @return {number} 1 if the object stores information about a row.
         * @package
         */
        function isRow(row: Row): number;
        /**
         * Whether a measurable stores information about a between-row spacer.
         * @param {!Row} row The row to check.
         * @return {number} 1 if the object stores information about a
         *   between-row spacer.
         * @package
         */
        function isBetweenRowSpacer(row: Row): number;
        /**
         * Whether a measurable stores information about a top row.
         * @param {!Row} row The row to check.
         * @return {number} 1 if the object stores information about a top row.
         * @package
         */
        function isTopRow(row: Row): number;
        /**
         * Whether a measurable stores information about a bottom row.
         * @param {!Row} row The row to check.
         * @return {number} 1 if the object stores information about a bottom row.
         * @package
         */
        function isBottomRow(row: Row): number;
        /**
         * Whether a measurable stores information about a top or bottom row.
         * @param {!Row} row The row to check.
         * @return {number} 1 if the object stores information about a top or
         *   bottom row.
         * @package
         */
        function isTopOrBottomRow(row: Row): number;
        /**
         * Whether a measurable stores information about an input row.
         * @param {!Row} row The row to check.
         * @return {number} 1 if the object stores information about an input row.
         * @package
         */
        function isInputRow(row: Row): number;
    }
    import { Measurable } from "renderers/measurables/base";
    import { Row } from "renderers/measurables/row";
}
declare module "renderers/measurables/base" {
    /**
     * The base class to represent a part of a block that takes up space during
     * rendering.  The constructor for each non-spacer Measurable records the size
     * of the block element (e.g. field, statement input).
     * @param {!ConstantProvider} constants The rendering
     *   constants provider.
     * @package
     * @constructor
     * @alias Blockly.blockRendering.Measurable
     */
    export class Measurable {
        constructor(constants: any);
        width: number;
        height: number;
        type: number;
        xPos: number;
        centerline: number;
        /**
         * The renderer's constant provider.
         * @type {!ConstantProvider}
         * @protected
         */
        protected constants_: ConstantProvider;
        notchOffset: number;
    }
    import { ConstantProvider } from "renderers/common/constants";
}
declare module "renderers/measurables/connection" {
    /**
     * The base class to represent a connection and the space that it takes up on
     * the block.
     * @param {!ConstantProvider} constants The rendering
     *   constants provider.
     * @param {!RenderedConnection} connectionModel The connection object on
     *     the block that this represents.
     * @package
     * @constructor
     * @extends {Measurable}
     * @alias Blockly.blockRendering.Connection
     */
    export class Connection {
        constructor(constants: any, connectionModel: any);
        connectionModel: any;
        shape: any;
        isDynamicShape: boolean;
    }
}
declare module "renderers/measurables/next_connection" {
    /**
     * An object containing information about the space a next connection takes
     * up during rendering.
     * @param {!ConstantProvider} constants The rendering
     *   constants provider.
     * @param {RenderedConnection} connectionModel The connection object on
     *     the block that this represents.
     * @package
     * @constructor
     * @extends {Connection}
     * @alias Blockly.blockRendering.NextConnection
     */
    export class NextConnection {
        constructor(constants: any, connectionModel: any);
        height: any;
        width: any;
    }
}
declare module "renderers/measurables/bottom_row" {
    /**
     * An object containing information about what elements are in the bottom row of
     * a block as well as spacing information for the bottom row.
     * Elements in a bottom row can consist of corners, spacers and next
     * connections.
     * @param {!ConstantProvider} constants The rendering
     *   constants provider.
     * @package
     * @constructor
     * @extends {Row}
     * @alias Blockly.blockRendering.BottomRow
     */
    export class BottomRow extends Row {
        constructor(constants: any);
        /**
         * Whether this row has a next connection.
         * @package
         * @type {boolean}
         */
        hasNextConnection: boolean;
        /**
         * The next connection on the row, if any.
         * @package
         * @type {NextConnection}
         */
        connection: NextConnection;
        /**
         * The amount that the bottom of the block extends below the horizontal edge,
         * e.g. because of a next connection.  Must be non-negative (see #2820).
         * @package
         * @type {number}
         */
        descenderHeight: number;
        /**
         * The Y position of the bottom edge of the block, relative to the origin
         * of the block rendering.
         * @type {number}
         */
        baseline: number;
        /**
         * Returns whether or not the bottom row has a left square corner.
         * @param {!BlockSvg} block The block whose bottom row this represents.
         * @return {boolean} Whether or not the bottom row has a left square corner.
         */
        hasLeftSquareCorner(block: BlockSvg): boolean;
        /**
         * Returns whether or not the bottom row has a right square corner.
         * @param {!BlockSvg} _block The block whose bottom row this represents.
         * @return {boolean} Whether or not the bottom row has a right square corner.
         */
        hasRightSquareCorner(_block: BlockSvg): boolean;
        /**
         * @override
         */
        override measure(): void;
        width: number;
        height: number;
        widthWithConnectedBlocks: number;
        /**
         * @override
         */
        override startsWithElemSpacer(): boolean;
        /**
         * @override
         */
        override endsWithElemSpacer(): boolean;
    }
    import { NextConnection } from "renderers/measurables/next_connection";
    import { BlockSvg } from "block_svg";
    import { Row } from "renderers/measurables/row";
}
declare module "renderers/measurables/external_value_input" {
    /**
     * An object containing information about the space an external value input
     * takes up during rendering
     * @param {!ConstantProvider} constants The rendering
     *   constants provider.
     * @param {!Input} input The external value input to measure and store
     *     information for.
     * @package
     * @constructor
     * @extends {InputConnection}
     * @alias Blockly.blockRendering.ExternalValueInput
     */
    export class ExternalValueInput {
        constructor(constants: any, input: any);
        height: any;
        width: any;
        connectionOffsetY: any;
        connectionHeight: any;
        connectionWidth: any;
    }
}
declare module "renderers/measurables/field" {
    /**
     * An object containing information about the space a field takes up during
     * rendering
     * @param {!ConstantProvider} constants The rendering
     *   constants provider.
     * @param {!BlocklyField} field The field to measure and store information for.
     * @param {!Input} parentInput The parent input for the field.
     * @package
     * @constructor
     * @extends {Measurable}
     * @alias Blockly.blockRendering.Field
     */
    export class Field {
        constructor(constants: any, field: any, parentInput: any);
        field: any;
        isEditable: any;
        flipRtl: any;
        height: any;
        width: any;
        parentInput: any;
    }
}
declare module "renderers/measurables/hat" {
    /**
     * An object containing information about the space a hat takes up during
     * rendering.
     * @param {!ConstantProvider} constants The rendering
     *   constants provider.
     * @package
     * @constructor
     * @extends {Measurable}
     * @alias Blockly.blockRendering.Hat
     */
    export class Hat {
        constructor(constants: any);
        height: any;
        width: any;
        ascenderHeight: any;
    }
}
declare module "block_drag_surface" {
    /**
     * Class for a drag surface for the currently dragged block. This is a separate
     * SVG that contains only the currently moving block, or nothing.
     * @param {!Element} container Containing element.
     * @constructor
     * @alias Blockly.BlockDragSurfaceSvg
     */
    export class BlockDragSurfaceSvg {
        constructor(container: any);
        /**
         * @type {!Element}
         * @private
         */
        private container_;
        /**
         * Create the drag surface and inject it into the container.
         */
        createDom(): void;
        SVG_: SVGElement | null;
        dragGroup_: SVGElement | null;
        /**
         * Set the SVG blocks on the drag surface's group and show the surface.
         * Only one block group should be on the drag surface at a time.
         * @param {!SVGElement} blocks Block or group of blocks to place on the drag
         * surface.
         */
        setBlocksAndShow(blocks: SVGElement): void;
        surfaceXY_: any;
        /**
         * Translate and scale the entire drag surface group to the given position, to
         * keep in sync with the workspace.
         * @param {number} x X translation in pixel coordinates.
         * @param {number} y Y translation in pixel coordinates.
         * @param {number} scale Scale of the group.
         */
        translateAndScaleGroup(x: number, y: number, scale: number): void;
        scale_: number;
        /**
         * Translate the drag surface's SVG based on its internal state.
         * @private
         */
        private translateSurfaceInternal_;
        /**
         * Translates the entire surface by a relative offset.
         * @param {number} deltaX Horizontal offset in pixel units.
         * @param {number} deltaY Vertical offset in pixel units.
         */
        translateBy(deltaX: number, deltaY: number): void;
        /**
         * Translate the entire drag surface during a drag.
         * We translate the drag surface instead of the blocks inside the surface
         * so that the browser avoids repainting the SVG.
         * Because of this, the drag coordinates must be adjusted by scale.
         * @param {number} x X translation for the entire surface.
         * @param {number} y Y translation for the entire surface.
         */
        translateSurface(x: number, y: number): void;
        /**
         * Reports the surface translation in scaled workspace coordinates.
         * Use this when finishing a drag to return blocks to the correct position.
         * @return {!Coordinate} Current translation of the surface.
         */
        getSurfaceTranslation(): Coordinate;
        /**
         * Provide a reference to the drag group (primarily for
         * BlockSvg.getRelativeToSurfaceXY).
         * @return {?SVGElement} Drag surface group element.
         */
        getGroup(): SVGElement | null;
        /**
         * Returns the SVG drag surface.
         * @returns {?SVGElement} The SVG drag surface.
         */
        getSvgRoot(): SVGElement | null;
        /**
         * Get the current blocks on the drag surface, if any (primarily
         * for BlockSvg.getRelativeToSurfaceXY).
         * @return {?Element} Drag surface block DOM element, or null if no blocks
         *     exist.
         */
        getCurrentBlock(): Element | null;
        /**
         * Gets the translation of the child block surface
         * This surface is in charge of keeping track of how much the workspace has
         * moved.
         * @return {!Coordinate} The amount the workspace has been moved.
         */
        getWsTranslation(): Coordinate;
        /**
         * Clear the group and hide the surface; move the blocks off onto the provided
         * element.
         * If the block is being deleted it doesn't need to go back to the original
         * surface, since it would be removed immediately during dispose.
         * @param {Element=} opt_newSurface Surface the dragging blocks should be moved
         *     to, or null if the blocks should be removed from this surface without
         *     being moved to a different surface.
         */
        clearAndHide(opt_newSurface?: Element | undefined): void;
        /**
         * Cached value for the translation of the child drag surface in pixel units.
         * Since the child drag surface tracks the translation of the workspace this is
         * ultimately the translation of the workspace.
         * @type {!Coordinate}
         * @private
         */
        private childSurfaceXY_;
    }
    import { Coordinate } from "utils/coordinate";
}
declare module "interfaces/i_contextmenu" {
    /**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * @fileoverview The interface for an object that supports a right-click.
     */
    /**
     * The interface for an object that supports a right-click.
     * @namespace Blockly.IContextMenu
     */
    /**
     * @interface
     * @alias Blockly.IContextMenu
     */
    export class IContextMenu {
    }
}
declare module "interfaces/i_draggable" {
    /**
     * The interface for an object that can be dragged.
     * @extends {IDeletable}
     * @interface
     * @alias Blockly.IDraggable
     */
    export class IDraggable {
    }
}
declare module "interfaces/i_bubble" {
    /**
     * A bubble interface.
     * @interface
     * @extends {IDraggable}
     * @extends {IContextMenu}
     * @alias Blockly.IBubble
     */
    export class IBubble {
    }
}
declare module "interfaces/i_metrics_manager" {
    /**
     * Interface for a metrics manager.
     * @interface
     * @alias Blockly.IMetricsManager
     */
    export class IMetricsManager {
    }
}
declare module "metrics_manager" {
    export class MetricsManager {
        /**
         * The manager for all workspace metrics calculations.
         * @param {!WorkspaceSvg} workspace The workspace to calculate metrics
         *     for.
         * @implements {IMetricsManager}
         * @constructor
         * @alias Blockly.MetricsManager
         */
        constructor(workspace: WorkspaceSvg);
        /**
         * The workspace to calculate metrics for.
         * @type {!WorkspaceSvg}
         * @protected
         */
        protected workspace_: WorkspaceSvg;
        /**
         * Gets the dimensions of the given workspace component, in pixel coordinates.
         * @param {?IToolbox|?IFlyout} elem The element to get the
         *     dimensions of, or null.  It should be a toolbox or flyout, and should
         *     implement getWidth() and getHeight().
         * @return {!Size} An object containing width and height
         *     attributes, which will both be zero if elem did not exist.
         * @protected
         */
        protected getDimensionsPx_(elem: (IToolbox | (IFlyout | null)) | null): Size;
        /**
         * Gets the width and the height of the flyout on the workspace in pixel
         * coordinates. Returns 0 for the width and height if the workspace has a
         * category toolbox instead of a simple toolbox.
         * @param {boolean=} opt_own Whether to only return the workspace's own flyout.
         * @return {!MetricsManager.ToolboxMetrics} The width and height of the
         *     flyout.
         * @public
         */
        public getFlyoutMetrics(opt_own?: boolean | undefined): MetricsManager.ToolboxMetrics;
        /**
         * Gets the width, height and position of the toolbox on the workspace in pixel
         * coordinates. Returns 0 for the width and height if the workspace has a simple
         * toolbox instead of a category toolbox. To get the width and height of a
         * simple toolbox @see {@link getFlyoutMetrics}.
         * @return {!MetricsManager.ToolboxMetrics} The object with the width,
         *     height and position of the toolbox.
         * @public
         */
        public getToolboxMetrics(): MetricsManager.ToolboxMetrics;
        /**
         * Gets the width and height of the workspace's parent SVG element in pixel
         * coordinates. This area includes the toolbox and the visible workspace area.
         * @return {!Size} The width and height of the workspace's parent
         *     SVG element.
         * @public
         */
        public getSvgMetrics(): Size;
        /**
         * Gets the absolute left and absolute top in pixel coordinates.
         * This is where the visible workspace starts in relation to the SVG container.
         * @return {!MetricsManager.AbsoluteMetrics} The absolute metrics for
         *     the workspace.
         * @public
         */
        public getAbsoluteMetrics(): MetricsManager.AbsoluteMetrics;
        /**
         * Gets the metrics for the visible workspace in either pixel or workspace
         * coordinates. The visible workspace does not include the toolbox or flyout.
         * @param {boolean=} opt_getWorkspaceCoordinates True to get the view metrics in
         *     workspace coordinates, false to get them in pixel coordinates.
         * @return {!MetricsManager.ContainerRegion} The width, height, top and
         *     left of the viewport in either workspace coordinates or pixel
         *     coordinates.
         * @public
         */
        public getViewMetrics(opt_getWorkspaceCoordinates?: boolean | undefined): MetricsManager.ContainerRegion;
        /**
         * Gets content metrics in either pixel or workspace coordinates.
         * The content area is a rectangle around all the top bounded elements on the
         * workspace (workspace comments and blocks).
         * @param {boolean=} opt_getWorkspaceCoordinates True to get the content metrics
         *     in workspace coordinates, false to get them in pixel coordinates.
         * @return {!MetricsManager.ContainerRegion} The
         *     metrics for the content container.
         * @public
         */
        public getContentMetrics(opt_getWorkspaceCoordinates?: boolean | undefined): MetricsManager.ContainerRegion;
        /**
         * Returns whether the scroll area has fixed edges.
         * @return {boolean} Whether the scroll area has fixed edges.
         * @package
         */
        hasFixedEdges(): boolean;
        /**
         * Computes the fixed edges of the scroll area.
         * @param {!MetricsManager.ContainerRegion=} opt_viewMetrics The view
         *     metrics if they have been previously computed. Passing in null may cause
         *     the view metrics to be computed again, if it is needed.
         * @return {!MetricsManager.FixedEdges} The fixed edges of the scroll
         *     area.
         * @protected
         */
        protected getComputedFixedEdges_(opt_viewMetrics?: MetricsManager.ContainerRegion | undefined): MetricsManager.FixedEdges;
        /**
         * Returns the content area with added padding.
         * @param {!MetricsManager.ContainerRegion} viewMetrics The view
         *     metrics.
         * @param {!MetricsManager.ContainerRegion} contentMetrics The content
         *     metrics.
         * @return {{top: number, bottom: number, left: number, right: number}} The
         *     padded content area.
         * @protected
         */
        protected getPaddedContent_(viewMetrics: MetricsManager.ContainerRegion, contentMetrics: MetricsManager.ContainerRegion): {
            top: number;
            bottom: number;
            left: number;
            right: number;
        };
        /**
         * Returns the metrics for the scroll area of the workspace.
         * @param {boolean=} opt_getWorkspaceCoordinates True to get the scroll metrics
         *     in workspace coordinates, false to get them in pixel coordinates.
         * @param {!MetricsManager.ContainerRegion=} opt_viewMetrics The view
         *     metrics if they have been previously computed. Passing in null may cause
         *     the view metrics to be computed again, if it is needed.
         * @param {!MetricsManager.ContainerRegion=} opt_contentMetrics The
         *     content metrics if they have been previously computed. Passing in null
         *     may cause the content metrics to be computed again, if it is needed.
         * @return {!MetricsManager.ContainerRegion} The metrics for the scroll
         *    container.
         */
        getScrollMetrics(opt_getWorkspaceCoordinates?: boolean | undefined, opt_viewMetrics?: MetricsManager.ContainerRegion | undefined, opt_contentMetrics?: MetricsManager.ContainerRegion | undefined): MetricsManager.ContainerRegion;
        /**
         * Returns common metrics used by UI elements.
         * @return {!MetricsManager.UiMetrics} The UI metrics.
         */
        getUiMetrics(): MetricsManager.UiMetrics;
        /**
         * Returns an object with all the metrics required to size scrollbars for a
         * top level workspace.  The following properties are computed:
         * Coordinate system: pixel coordinates, -left, -up, +right, +down
         * .viewHeight: Height of the visible portion of the workspace.
         * .viewWidth: Width of the visible portion of the workspace.
         * .contentHeight: Height of the content.
         * .contentWidth: Width of the content.
         * .scrollHeight: Height of the scroll area.
         * .scrollWidth: Width of the scroll area.
         * .svgHeight: Height of the Blockly div (the view + the toolbox,
         *    simple or otherwise),
         * .svgWidth: Width of the Blockly div (the view + the toolbox,
         *    simple or otherwise),
         * .viewTop: Top-edge of the visible portion of the workspace, relative to
         *     the workspace origin.
         * .viewLeft: Left-edge of the visible portion of the workspace, relative to
         *     the workspace origin.
         * .contentTop: Top-edge of the content, relative to the workspace origin.
         * .contentLeft: Left-edge of the content relative to the workspace origin.
         * .scrollTop: Top-edge of the scroll area, relative to the workspace origin.
         * .scrollLeft: Left-edge of the scroll area relative to the workspace origin.
         * .absoluteTop: Top-edge of the visible portion of the workspace, relative
         *     to the blocklyDiv.
         * .absoluteLeft: Left-edge of the visible portion of the workspace, relative
         *     to the blocklyDiv.
         * .toolboxWidth: Width of the toolbox, if it exists.  Otherwise zero.
         * .toolboxHeight: Height of the toolbox, if it exists.  Otherwise zero.
         * .flyoutWidth: Width of the flyout if it is always open.  Otherwise zero.
         * .flyoutHeight: Height of the flyout if it is always open.  Otherwise zero.
         * .toolboxPosition: Top, bottom, left or right. Use TOOLBOX_AT constants to
         *     compare.
         * @return {!Metrics} Contains size and position metrics of a top
         *     level workspace.
         * @public
         */
        public getMetrics(): Metrics;
    }
    export namespace MetricsManager {
        /**
         * Describes the width, height and location of the toolbox on the main
         * workspace.
         */
        type ToolboxMetrics = {
            width: number;
            height: number;
            position: toolboxUtils.Position;
        };
        /**
         * Describes where the viewport starts in relation to the workspace SVG.
         */
        type AbsoluteMetrics = {
            left: number;
            top: number;
        };
        /**
         * All the measurements needed to describe the size and location of a container.
         */
        type ContainerRegion = {
            height: number;
            width: number;
            top: number;
            left: number;
        };
        /**
         * Describes fixed edges of the workspace.
         */
        type FixedEdges = {
            top: (number | undefined);
            bottom: (number | undefined);
            left: (number | undefined);
            right: (number | undefined);
        };
        /**
         * Common metrics used for UI elements.
         */
        type UiMetrics = {
            viewMetrics: MetricsManager.ContainerRegion;
            absoluteMetrics: MetricsManager.AbsoluteMetrics;
            toolboxMetrics: MetricsManager.ToolboxMetrics;
        };
    }
    import { WorkspaceSvg } from "workspace_svg";
    import { IToolbox } from "interfaces/i_toolbox";
    import { IFlyout } from "interfaces/i_flyout";
    import { Size } from "utils/size";
    import { Metrics } from "utils/metrics";
    import * as toolboxUtils from "utils/toolbox";
}
declare module "scrollbar" {
    /**
     * A note on units: most of the numbers that are in CSS pixels are scaled if the
     * scrollbar is in a mutator.
     */
    export class Scrollbar {
        /**
         * @param {!Metrics} first An object containing computed
         *     measurements of a workspace.
         * @param {!Metrics} second Another object containing computed
         *     measurements of a workspace.
         * @return {boolean} Whether the two sets of metrics are equivalent.
         * @private
         */
        private static metricsAreEquivalent_;
        /**
         * Class for a pure SVG scrollbar.
         * This technique offers a scrollbar that is guaranteed to work, but may not
         * look or behave like the system's scrollbars.
         * @param {!WorkspaceSvg} workspace Workspace to bind the scrollbar to.
         * @param {boolean} horizontal True if horizontal, false if vertical.
         * @param {boolean=} opt_pair True if scrollbar is part of a horiz/vert pair.
         * @param {string=} opt_class A class to be applied to this scrollbar.
         * @param {number=} opt_margin The margin to apply to this scrollbar.
         * @constructor
         * @alias Blockly.Scrollbar
         */
        constructor(workspace: WorkspaceSvg, horizontal: boolean, opt_pair?: boolean | undefined, opt_class?: string | undefined, opt_margin?: number | undefined);
        /**
         * The workspace this scrollbar is bound to.
         * @type {!WorkspaceSvg}
         * @private
         */
        private workspace_;
        /**
         * Whether this scrollbar is part of a pair.
         * @type {boolean}
         * @private
         */
        private pair_;
        /**
         * Whether this is a horizontal scrollbar.
         * @type {boolean}
         * @private
         */
        private horizontal_;
        /**
         * Margin around the scrollbar (between the scrollbar and the edge of the
         * viewport in pixels).
         * @type {number}
         * @const
         * @private
         */
        private margin_;
        /**
         * Previously recorded metrics from the workspace.
         * @type {?Metrics}
         * @private
         */
        private oldHostMetrics_;
        /**
         * The ratio of handle position offset to workspace content displacement.
         * @type {?number}
         * @package
         */
        ratio: number | null;
        /**
         * The upper left corner of the scrollbar's SVG group in CSS pixels relative
         * to the scrollbar's origin.  This is usually relative to the injection div
         * origin.
         * @type {Coordinate}
         * @package
         */
        position: Coordinate;
        lengthAttribute_: string;
        positionAttribute_: string;
        onMouseDownBarWrapper_: any[][];
        onMouseDownHandleWrapper_: any[][];
        /**
         * Dispose of this scrollbar.
         * Unlink from all DOM elements to prevent memory leaks.
         * @suppress {checkTypes}
         */
        dispose(): void;
        outerSvg_: SVGSVGElement;
        svgGroup_: SVGGElement;
        svgBackground_: SVGRectElement;
        svgHandle_: SVGRectElement;
        /**
         * Constrain the handle's length within the minimum (0) and maximum
         * (scrollbar background) values allowed for the scrollbar.
         * @param {number} value Value that is potentially out of bounds, in CSS pixels.
         * @return {number} Constrained value, in CSS pixels.
         * @private
         */
        private constrainHandleLength_;
        /**
         * Set the length of the scrollbar's handle and change the SVG attribute
         * accordingly.
         * @param {number} newLength The new scrollbar handle length in CSS pixels.
         * @private
         */
        private setHandleLength_;
        handleLength_: number;
        /**
         * Constrain the handle's position within the minimum (0) and maximum values
         * allowed for the scrollbar.
         * @param {number} value Value that is potentially out of bounds, in CSS pixels.
         * @return {number} Constrained value, in CSS pixels.
         * @private
         */
        private constrainHandlePosition_;
        /**
         * Set the offset of the scrollbar's handle from the scrollbar's position, and
         * change the SVG attribute accordingly.
         * @param {number} newPosition The new scrollbar handle offset in CSS pixels.
         */
        setHandlePosition(newPosition: number): void;
        handlePosition_: number;
        /**
         * Set the size of the scrollbar's background and change the SVG attribute
         * accordingly.
         * @param {number} newSize The new scrollbar background length in CSS pixels.
         * @private
         */
        private setScrollbarLength_;
        scrollbarLength_: number;
        /**
         * Set the position of the scrollbar's SVG group in CSS pixels relative to the
         * scrollbar's origin.  This sets the scrollbar's location within the workspace.
         * @param {number} x The new x coordinate.
         * @param {number} y The new y coordinate.
         * @package
         */
        setPosition(x: number, y: number): void;
        /**
         * Recalculate the scrollbar's location and its length.
         * @param {Metrics=} opt_metrics A data structure of from the
         *     describing all the required dimensions.  If not provided, it will be
         *     fetched from the host object.
         */
        resize(opt_metrics?: Metrics | undefined): void;
        /**
         * Returns whether the a resizeView is necessary by comparing the passed
         * hostMetrics with cached old host metrics.
         * @param {!Metrics} hostMetrics A data structure describing all
         *     the required dimensions, possibly fetched from the host object.
         * @return {boolean} Whether a resizeView is necessary.
         * @private
         */
        private requiresViewResize_;
        /**
         * Recalculate a horizontal scrollbar's location and length.
         * @param {!Metrics} hostMetrics A data structure describing all
         *     the required dimensions, possibly fetched from the host object.
         * @private
         */
        private resizeHorizontal_;
        /**
         * Recalculate a horizontal scrollbar's location on the screen and path length.
         * This should be called when the layout or size of the window has changed.
         * @param {!Metrics} hostMetrics A data structure describing all
         *     the required dimensions, possibly fetched from the host object.
         */
        resizeViewHorizontal(hostMetrics: Metrics): void;
        /**
         * Recalculate a horizontal scrollbar's location within its path and length.
         * This should be called when the contents of the workspace have changed.
         * @param {!Metrics} hostMetrics A data structure describing all
         *     the required dimensions, possibly fetched from the host object.
         */
        resizeContentHorizontal(hostMetrics: Metrics): void;
        /**
         * Recalculate a vertical scrollbar's location and length.
         * @param {!Metrics} hostMetrics A data structure describing all
         *     the required dimensions, possibly fetched from the host object.
         * @private
         */
        private resizeVertical_;
        /**
         * Recalculate a vertical scrollbar's location on the screen and path length.
         * This should be called when the layout or size of the window has changed.
         * @param {!Metrics} hostMetrics A data structure describing all
         *     the required dimensions, possibly fetched from the host object.
         */
        resizeViewVertical(hostMetrics: Metrics): void;
        /**
         * Recalculate a vertical scrollbar's location within its path and length.
         * This should be called when the contents of the workspace have changed.
         * @param {!Metrics} hostMetrics A data structure describing all
         *     the required dimensions, possibly fetched from the host object.
         */
        resizeContentVertical(hostMetrics: Metrics): void;
        /**
         * Create all the DOM elements required for a scrollbar.
         * The resulting widget is not sized.
         * @param {string=} opt_class A class to be applied to this scrollbar.
         * @private
         */
        private createDom_;
        /**
         * Is the scrollbar visible.  Non-paired scrollbars disappear when they aren't
         * needed.
         * @return {boolean} True if visible.
         */
        isVisible(): boolean;
        /**
         * Set whether the scrollbar's container is visible and update
         * display accordingly if visibility has changed.
         * @param {boolean} visible Whether the container is visible
         */
        setContainerVisible(visible: boolean): void;
        containerVisible_: boolean;
        /**
         * Set whether the scrollbar is visible.
         * Only applies to non-paired scrollbars.
         * @param {boolean} visible True if visible.
         */
        setVisible(visible: boolean): void;
        isVisible_: boolean;
        /**
         * Update visibility of scrollbar based on whether it thinks it should
         * be visible and whether its containing workspace is visible.
         * We cannot rely on the containing workspace being hidden to hide us
         * because it is not necessarily our parent in the DOM.
         */
        updateDisplay_(): void;
        /**
         * Scroll by one pageful.
         * Called when scrollbar background is clicked.
         * @param {!Event} e Mouse down event.
         * @private
         */
        private onMouseDownBar_;
        /**
         * Start a dragging operation.
         * Called when scrollbar handle is clicked.
         * @param {!Event} e Mouse down event.
         * @private
         */
        private onMouseDownHandle_;
        startDragHandle: number;
        startDragMouse_: number;
        /**
         * Drag the scrollbar's handle.
         * @param {!Event} e Mouse up event.
         * @private
         */
        private onMouseMoveHandle_;
        /**
         * Release the scrollbar handle and reset state accordingly.
         * @private
         */
        private onMouseUpHandle_;
        /**
         * Hide chaff and stop binding to mouseup and mousemove events.  Call this to
         * wrap up loose ends associated with the scrollbar.
         * @private
         */
        private cleanUp_;
        /**
         * Helper to calculate the ratio of handle position to scrollbar view size.
         * @return {number} Ratio.
         * @package
         */
        getRatio_(): number;
        /**
         * Updates workspace metrics based on new scroll ratio. Called when scrollbar is
         * moved.
         * @private
         */
        private updateMetrics_;
        /**
         * Set the scrollbar handle's position.
         * @param {number} value The content displacement, relative to the view in
         *    pixels.
         * @param {boolean=} updateMetrics Whether to update metrics on this set call.
         *    Defaults to true.
         */
        set(value: number, updateMetrics?: boolean | undefined): void;
        /**
         * Record the origin of the workspace that the scrollbar is in, in pixels
         * relative to the injection div origin. This is for times when the scrollbar is
         * used in an object whose origin isn't the same as the main workspace
         * (e.g. in a flyout.)
         * @param {number} x The x coordinate of the scrollbar's origin, in CSS pixels.
         * @param {number} y The y coordinate of the scrollbar's origin, in CSS pixels.
         */
        setOrigin(x: number, y: number): void;
        origin_: Coordinate;
    }
    export namespace Scrollbar {
        const scrollbarThickness: number;
        const DEFAULT_SCROLLBAR_MARGIN: number;
    }
    import { Coordinate } from "utils/coordinate";
    import { Metrics } from "utils/metrics";
    import { WorkspaceSvg } from "workspace_svg";
}
declare module "bubble" {
    export class Bubble {
        /**
         * Stop binding to the global mouseup and mousemove events.
         * @private
         */
        private static unbindDragEvents_;
        /**
         * Handle a mouse-up event while dragging a bubble's border or resize handle.
         * @param {!Event} _e Mouse up event.
         * @private
         */
        private static bubbleMouseUp_;
        /**
         * Create the text for a non editable bubble.
         * @param {string} text The text to display.
         * @return {!SVGTextElement} The top-level node of the text.
         * @package
         */
        static textToDom(text: string): SVGTextElement;
        /**
         * Creates a bubble that can not be edited.
         * @param {!SVGTextElement} paragraphElement The text element for the non
         *     editable bubble.
         * @param {!BlockSvg} block The block that the bubble is attached to.
         * @param {!Coordinate} iconXY The coordinate of the icon.
         * @return {!Bubble} The non editable bubble.
         * @package
         */
        static createNonEditableBubble(paragraphElement: SVGTextElement, block: BlockSvg, iconXY: Coordinate): Bubble;
        /**
         * Class for UI bubble.
         * @param {!WorkspaceSvg} workspace The workspace on which to draw the
         *     bubble.
         * @param {!Element} content SVG content for the bubble.
         * @param {!Element} shape SVG element to avoid eclipsing.
         * @param {!Coordinate} anchorXY Absolute position of bubble's
         *     anchor point.
         * @param {?number} bubbleWidth Width of bubble, or null if not resizable.
         * @param {?number} bubbleHeight Height of bubble, or null if not resizable.
         * @implements {IBubble}
         * @constructor
         * @alias Blockly.Bubble
         */
        constructor(workspace: WorkspaceSvg, content: Element, shape: Element, anchorXY: Coordinate, bubbleWidth: number | null, bubbleHeight: number | null);
        workspace_: WorkspaceSvg;
        content_: Element;
        shape_: Element;
        /**
         * Method to call on resize of bubble.
         * @type {?function()}
         * @private
         */
        private resizeCallback_;
        /**
         * Method to call on move of bubble.
         * @type {?function()}
         * @private
         */
        private moveCallback_;
        /**
         * Mouse down on bubbleBack_ event data.
         * @type {?browserEvents.Data}
         * @private
         */
        private onMouseDownBubbleWrapper_;
        /**
         * Mouse down on resizeGroup_ event data.
         * @type {?browserEvents.Data}
         * @private
         */
        private onMouseDownResizeWrapper_;
        /**
         * Describes whether this bubble has been disposed of (nodes and event
         * listeners removed from the page) or not.
         * @type {boolean}
         * @package
         */
        disposed: boolean;
        arrow_radians_: number;
        rendered_: boolean;
        /**
         * Create the bubble's DOM.
         * @param {!Element} content SVG content for the bubble.
         * @param {boolean} hasResize Add diagonal resize gripper if true.
         * @return {!SVGElement} The bubble's SVG group.
         * @private
         */
        private createDom_;
        bubbleGroup_: SVGGElement;
        bubbleArrow_: SVGPathElement;
        bubbleBack_: SVGRectElement;
        resizeGroup_: SVGGElement;
        /**
         * Return the root node of the bubble's SVG group.
         * @return {!SVGElement} The root SVG node of the bubble's group.
         */
        getSvgRoot(): SVGElement;
        /**
         * Expose the block's ID on the bubble's top-level SVG group.
         * @param {string} id ID of block.
         */
        setSvgId(id: string): void;
        /**
         * Handle a mouse-down on bubble's border.
         * @param {!Event} e Mouse down event.
         * @private
         */
        private bubbleMouseDown_;
        /**
         * Show the context menu for this bubble.
         * @param {!Event} _e Mouse event.
         * @package
         */
        showContextMenu(_e: Event): void;
        /**
         * Get whether this bubble is deletable or not.
         * @return {boolean} True if deletable.
         * @package
         */
        isDeletable(): boolean;
        /**
         * Update the style of this bubble when it is dragged over a delete area.
         * @param {boolean} _enable True if the bubble is about to be deleted, false
         *     otherwise.
         */
        setDeleteStyle(_enable: boolean): void;
        /**
         * Handle a mouse-down on bubble's resize corner.
         * @param {!Event} e Mouse down event.
         * @private
         */
        private resizeMouseDown_;
        /**
         * Resize this bubble to follow the mouse.
         * @param {!Event} e Mouse move event.
         * @private
         */
        private resizeMouseMove_;
        autoLayout_: boolean;
        /**
         * Register a function as a callback event for when the bubble is resized.
         * @param {!Function} callback The function to call on resize.
         */
        registerResizeEvent(callback: Function): void;
        /**
         * Register a function as a callback event for when the bubble is moved.
         * @param {!Function} callback The function to call on move.
         */
        registerMoveEvent(callback: Function): void;
        /**
         * Move this bubble to the top of the stack.
         * @return {boolean} Whether or not the bubble has been moved.
         * @package
         */
        promote(): boolean;
        /**
         * Notification that the anchor has moved.
         * Update the arrow and bubble accordingly.
         * @param {!Coordinate} xy Absolute location.
         */
        setAnchorLocation(xy: Coordinate): void;
        anchorXY_: Coordinate;
        /**
         * Position the bubble so that it does not fall off-screen.
         * @private
         */
        private layoutBubble_;
        relativeLeft_: any;
        relativeTop_: any;
        /**
         * Calculate the what percentage of the bubble overlaps with the visible
         * workspace (what percentage of the bubble is visible).
         * @param {!{x: number, y: number}} relativeMin The position of the top-left
         *     corner of the bubble relative to the anchor point.
         * @param {!MetricsManager.ContainerRegion} viewMetrics The view metrics
         *     of the workspace the bubble will appear in.
         * @return {number} The percentage of the bubble that is visible.
         * @private
         */
        private getOverlap_;
        /**
         * Calculate what the optimal horizontal position of the top-left corner of the
         * bubble is (relative to the anchor point) so that the most area of the
         * bubble is shown.
         * @param {!MetricsManager.ContainerRegion} viewMetrics The view metrics
         *     of the workspace the bubble will appear in.
         * @return {number} The optimal horizontal position of the top-left corner
         *     of the bubble.
         * @private
         */
        private getOptimalRelativeLeft_;
        /**
         * Calculate what the optimal vertical position of the top-left corner of
         * the bubble is (relative to the anchor point) so that the most area of the
         * bubble is shown.
         * @param {!MetricsManager.ContainerRegion} viewMetrics The view metrics
         *     of the workspace the bubble will appear in.
         * @return {number} The optimal vertical position of the top-left corner
         *     of the bubble.
         * @private
         */
        private getOptimalRelativeTop_;
        /**
         * Move the bubble to a location relative to the anchor's centre.
         * @private
         */
        private positionBubble_;
        /**
         * Move the bubble group to the specified location in workspace coordinates.
         * @param {number} x The x position to move to.
         * @param {number} y The y position to move to.
         * @package
         */
        moveTo(x: number, y: number): void;
        /**
         * Triggers a move callback if one exists at the end of a drag.
         * @param {boolean} adding True if adding, false if removing.
         * @package
         */
        setDragging(adding: boolean): void;
        /**
         * Get the dimensions of this bubble.
         * @return {!Size} The height and width of the bubble.
         */
        getBubbleSize(): Size;
        /**
         * Size this bubble.
         * @param {number} width Width of the bubble.
         * @param {number} height Height of the bubble.
         */
        setBubbleSize(width: number, height: number): void;
        width_: number;
        height_: number;
        /**
         * Draw the arrow between the bubble and the origin.
         * @private
         */
        private renderArrow_;
        /**
         * Change the color of a bubble.
         * @param {string} hexColor Hex code of color.
         */
        setColor(hexColor: string): void;
        /**
         * Dispose of this bubble.
         */
        dispose(): void;
        /**
         * Move this bubble during a drag, taking into account whether or not there is
         * a drag surface.
         * @param {BlockDragSurfaceSvg} dragSurface The surface that carries
         *     rendered items during a drag, or null if no drag surface is in use.
         * @param {!Coordinate} newLoc The location to translate to, in
         *     workspace coordinates.
         * @package
         */
        moveDuringDrag(dragSurface: BlockDragSurfaceSvg, newLoc: Coordinate): void;
        /**
         * Return the coordinates of the top-left corner of this bubble's body relative
         * to the drawing surface's origin (0,0), in workspace units.
         * @return {!Coordinate} Object with .x and .y properties.
         */
        getRelativeToSurfaceXY(): Coordinate;
        /**
         * Set whether auto-layout of this bubble is enabled.  The first time a bubble
         * is shown it positions itself to not cover any blocks.  Once a user has
         * dragged it to reposition, it renders where the user put it.
         * @param {boolean} enable True if auto-layout should be enabled, false
         *     otherwise.
         * @package
         */
        setAutoLayout(enable: boolean): void;
    }
    export namespace Bubble {
        const BORDER_WIDTH: number;
        const ARROW_THICKNESS: number;
        const ARROW_ANGLE: number;
        const ARROW_BEND: number;
        const ANCHOR_RADIUS: number;
        const onMouseUpWrapper_: any[][] | null;
        const onMouseMoveWrapper_: any[][] | null;
    }
    import { WorkspaceSvg } from "workspace_svg";
    import { Coordinate } from "utils/coordinate";
    import { Size } from "utils/size";
    import { BlockDragSurfaceSvg } from "block_drag_surface";
    import { BlockSvg } from "block_svg";
}
declare module "icon" {
    /**
     * Class for an icon.
     * @param {BlockSvg} block The block associated with this icon.
     * @constructor
     * @abstract
     * @alias Blockly.Icon
     */
    export class Icon {
        constructor(block: any);
        /**
         * The block this icon is attached to.
         * @type {BlockSvg}
         * @protected
         */
        protected block_: BlockSvg;
        /**
         * The icon SVG group.
         * @type {?SVGGElement}
         */
        iconGroup_: SVGGElement | null;
        /**
         * Create the icon on the block.
         */
        createIcon(): void;
        /**
         * Dispose of this icon.
         */
        dispose(): void;
        /**
         * Add or remove the UI indicating if this icon may be clicked or not.
         */
        updateEditable(): void;
        /**
         * Is the associated bubble visible?
         * @return {boolean} True if the bubble is visible.
         */
        isVisible(): boolean;
        /**
         * Clicking on the icon toggles if the bubble is visible.
         * @param {!Event} e Mouse click event.
         * @protected
         */
        protected iconClick_(e: Event): void;
        /**
         * Change the color of the associated bubble to match its block.
         */
        applyColor(): void;
        /**
         * Notification that the icon has moved.  Update the arrow accordingly.
         * @param {!Coordinate} xy Absolute location in workspace coordinates.
         */
        setIconLocation(xy: Coordinate): void;
        iconXY_: Coordinate | null;
        /**
         * Notification that the icon has moved, but we don't really know where.
         * Recompute the icon's location from scratch.
         */
        computeIconLocation(): void;
        /**
         * Returns the center of the block's icon relative to the surface.
         * @return {?Coordinate} Object with x and y properties in
         *     workspace coordinates.
         */
        getIconLocation(): Coordinate | null;
        /**
         * Get the size of the icon as used for rendering.
         * This differs from the actual size of the icon, because it bulges slightly
         * out of its row rather than increasing the height of its row.
         * @return {!Size} Height and width.
         */
        getCorrectedSize(): Size;
        /**
         * Does this icon get hidden when the block is collapsed.
         */
        collapseHidden: boolean;
        /**
         * Height and width of icons.
         * @const
         */
        SIZE: number;
        /**
         * Bubble UI (if visible).
         * @type {?Bubble}
         * @protected
         */
        protected bubble_: Bubble | null;
    }
    import { BlockSvg } from "block_svg";
    import { Coordinate } from "utils/coordinate";
    import { Size } from "utils/size";
    import { Bubble } from "bubble";
}
declare module "renderers/measurables/icon" {
    /**
     * An object containing information about the space an icon takes up during
     * rendering
     * @param {!ConstantProvider} constants The rendering
     *   constants provider.
     * @param {!BlocklyIcon} icon The icon to measure and store information for.
     * @package
     * @constructor
     * @extends {Measurable}
     * @alias Blockly.blockRendering.Icon
     */
    export class Icon {
        constructor(constants: any, icon: any);
        icon: any;
        isVisible: any;
        height: any;
        width: any;
    }
}
declare module "renderers/measurables/inline_input" {
    /**
     * An object containing information about the space an inline input takes up
     * during rendering
     * @param {!ConstantProvider} constants The rendering
     *   constants provider.
     * @param {!Input} input The inline input to measure and store
     *     information for.
     * @package
     * @constructor
     * @extends {InputConnection}
     * @alias Blockly.blockRendering.InlineInput
     */
    export class InlineInput {
        constructor(constants: any, input: any);
        height: any;
        width: any;
        connectionHeight: any;
        connectionWidth: any;
        connectionOffsetY: any;
        connectionOffsetX: any;
    }
}
declare module "renderers/measurables/input_row" {
    export class InputRow extends Row {
        /**
         * An object containing information about a row that holds one or more inputs.
         * @param {!ConstantProvider} constants The rendering
         *   constants provider.
         * @package
         * @constructor
         * @extends {Row}
         * @alias Blockly.blockRendering.InputRow
         */
        constructor(constants: ConstantProvider);
        /**
         * The total width of all blocks connected to this row.
         * @type {number}
         * @package
         */
        connectedBlockWidths: number;
        /**
         * Inspect all subcomponents and populate all size properties on the row.
         * @package
         */
        measure(): void;
        width: any;
        height: any;
        widthWithConnectedBlocks: any;
        /**
         * @override
         */
        override endsWithElemSpacer(): boolean;
    }
    import { ConstantProvider } from "renderers/common/constants";
    import { Row } from "renderers/measurables/row";
}
declare module "renderers/measurables/jagged_edge" {
    /**
     * An object containing information about the jagged edge of a collapsed block
     * takes up during rendering
     * @param {!ConstantProvider} constants The rendering
     *   constants provider.
     * @package
     * @constructor
     * @extends {Measurable}
     * @alias Blockly.blockRendering.JaggedEdge
     */
    export class JaggedEdge {
        constructor(constants: any);
        height: any;
        width: any;
    }
}
declare module "renderers/measurables/output_connection" {
    /**
     * An object containing information about the space an output connection takes
     * up during rendering.
     * @param {!ConstantProvider} constants The rendering
     *   constants provider.
     * @param {RenderedConnection} connectionModel The connection object on
     *     the block that this represents.
     * @package
     * @constructor
     * @extends {Connection}
     * @alias Blockly.blockRendering.OutputConnection
     */
    export class OutputConnection {
        constructor(constants: any, connectionModel: any);
        height: any;
        width: any;
        startX: any;
        connectionOffsetY: any;
        connectionOffsetX: number;
    }
}
declare module "renderers/measurables/previous_connection" {
    /**
     * An object containing information about the space a previous connection takes
     * up during rendering.
     * @param {!ConstantProvider} constants The rendering
     *   constants provider.
     * @param {RenderedConnection} connectionModel The connection object on
     *     the block that this represents.
     * @package
     * @constructor
     * @extends {Connection}
     * @alias Blockly.blockRendering.PreviousConnection
     */
    export class PreviousConnection {
        constructor(constants: any, connectionModel: any);
        height: any;
        width: any;
    }
}
declare module "renderers/common/drawer" {
    export class Drawer {
        /**
         * An object that draws a block based on the given rendering information.
         * @param {!BlockSvg} block The block to render.
         * @param {!RenderInfo} info An object containing all
         *   information needed to render this block.
         * @package
         * @constructor
         * @alias Blockly.blockRendering.Drawer
         */
        constructor(block: BlockSvg, info: RenderInfo);
        block_: BlockSvg;
        info_: RenderInfo;
        topLeft_: import("utils/coordinate").Coordinate;
        outlinePath_: string;
        inlinePath_: string;
        /**
         * The renderer's constant provider.
         * @type {!ConstantProvider}
         * @protected
         */
        protected constants_: ConstantProvider;
        /**
         * Draw the block to the workspace. Here "drawing" means setting SVG path
         * elements and moving fields, icons, and connections on the screen.
         *
         * The pieces of the paths are pushed into arrays of "steps", which are then
         * joined with spaces and set directly on the block.  This guarantees that
         * the steps are separated by spaces for improved readability, but isn't
         * required.
         * @package
         */
        draw(): void;
        /**
         * Save sizing information back to the block
         * Most of the rendering information can be thrown away at the end of the
         * render. Anything that needs to be kept around should be set in this function.
         * @protected
         */
        protected recordSizeOnBlock_(): void;
        /**
         * Hide icons that were marked as hidden.
         * @protected
         */
        protected hideHiddenIcons_(): void;
        /**
         * Create the outline of the block.  This is a single continuous path.
         * @protected
         */
        protected drawOutline_(): void;
        /**
         * Add steps for the top corner of the block, taking into account
         * details such as hats and rounded corners.
         * @protected
         */
        protected drawTop_(): void;
        /**
         * Add steps for the jagged edge of a row on a collapsed block.
         * @param {!Row} row The row to draw the side of.
         * @protected
         */
        protected drawJaggedEdge_(row: Row): void;
        /**
         * Add steps for an external value input, rendered as a notch in the side
         * of the block.
         * @param {!Row} row The row that this input belongs to.
         * @protected
         */
        protected drawValueInput_(row: Row): void;
        /**
         * Add steps for a statement input.
         * @param {!Row} row The row that this input belongs to.
         * @protected
         */
        protected drawStatementInput_(row: Row): void;
        /**
         * Add steps for the right side of a row that does not have value or
         * statement input connections.
         * @param {!Row} row The row to draw the side of.
         * @protected
         */
        protected drawRightSideRow_(row: Row): void;
        /**
         * Add steps for the bottom edge of a block, possibly including a notch
         * for the next connection.
         * @protected
         */
        protected drawBottom_(): void;
        /**
         * Add steps for the left side of the block, which may include an output
         * connection
         * @protected
         */
        protected drawLeft_(): void;
        /**
         * Draw the internals of the block: inline inputs, fields, and icons.  These do
         * not depend on the outer path for placement.
         * @protected
         */
        protected drawInternals_(): void;
        /**
         * Push a field or icon's new position to its SVG root.
         * @param {!Icon|!Field} fieldInfo
         *     The rendering information for the field or icon.
         * @protected
         */
        protected layoutField_(fieldInfo: Icon | Field): void;
        /**
         * Add steps for an inline input.
         * @param {!InlineInput} input The information about the
         * input to render.
         * @protected
         */
        protected drawInlineInput_(input: InlineInput): void;
        /**
         * Position the connection on an inline value input, taking into account
         * RTL and the small gap between the parent block and child block which lets the
         * parent block's dark path show through.
         * @param {InlineInput} input The information about
         * the input that the connection is on.
         * @protected
         */
        protected positionInlineInputConnection_(input: InlineInput): void;
        /**
         * Position the connection on a statement input, taking into account
         * RTL and the small gap between the parent block and child block which lets the
         * parent block's dark path show through.
         * @param {!Row} row The row that the connection is on.
         * @protected
         */
        protected positionStatementInputConnection_(row: Row): void;
        /**
         * Position the connection on an external value input, taking into account
         * RTL and the small gap between the parent block and child block which lets the
         * parent block's dark path show through.
         * @param {!Row} row The row that the connection is on.
         * @protected
         */
        protected positionExternalValueConnection_(row: Row): void;
        /**
         * Position the previous connection on a block.
         * @protected
         */
        protected positionPreviousConnection_(): void;
        /**
         * Position the next connection on a block.
         * @protected
         */
        protected positionNextConnection_(): void;
        /**
         * Position the output connection on a block.
         * @protected
         */
        protected positionOutputConnection_(): void;
    }
    import { BlockSvg } from "block_svg";
    import { RenderInfo } from "renderers/common/info";
    import { ConstantProvider } from "renderers/common/constants";
    import { Row } from "renderers/measurables/row";
    import { Icon } from "renderers/measurables/icon";
    import { Field } from "renderers/measurables/field";
    import { InlineInput } from "renderers/measurables/inline_input";
}
declare module "renderers/common/i_path_object" {
    /**
     * An interface for a block's path object.
     * @param {!SVGElement} _root The root SVG element.
     * @param {!ConstantProvider} _constants The renderer's
     *     constants.
     * @interface
     * @alias Blockly.blockRendering.IPathObject
     */
    export class IPathObject {
        /**
         * The primary path of the block.
         * @type {!SVGElement}
         */
        svgPath: SVGElement;
        /**
         * The renderer's constant provider.
         * @type {!ConstantProvider}
         */
        constants: ConstantProvider;
        /**
         * The primary path of the block.
         * @type {!Theme.BlockStyle}
         */
        style: Theme.BlockStyle;
        /**
         * Holds the cursors SVG element when the cursor is attached to the block.
         * This is null if there is no cursor on the block.
         * @type {SVGElement}
         */
        cursorSvg: SVGElement;
        /**
         * Holds the markers SVG element when the marker is attached to the block.
         * This is null if there is no marker on the block.
         * @type {SVGElement}
         */
        markerSvg: SVGElement;
    }
    import { ConstantProvider } from "renderers/common/constants";
    import { Theme } from "theme";
}
declare module "interfaces/i_component" {
    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * @fileoverview Interface for a workspace component that can be registered with
     * the ComponentManager.
     */
    /**
     * Interface for a workspace component that can be registered with
     * the ComponentManager.
     * @namespace Blockly.IComponent
     */
    /**
     * The interface for a workspace component that can be registered with the
     * ComponentManager.
     * @interface
     * @alias Blockly.IComponent
     */
    export class IComponent {
    }
    export namespace IComponent {
        const id: string;
    }
}
declare module "interfaces/i_autohideable" {
    export interface IAutoHideable extends IComponent {
    
        /**
          * Hides the component. Called in Blockly.hideChaff.
          * @param {boolean} onlyClosePopups Whether only popups should be closed.
          *   Flyouts should not be closed if this is true.
          */
        autoHide(onlyClosePopups: boolean): void;
    }
    import { IComponent } from "interfaces/i_component";
}
declare module "interfaces/i_drag_target" {
    /**
     * Interface for a component with custom behaviour when a block or bubble is
     * dragged over or dropped on top of it.
     * @extends {IComponent}
     * @interface
     * @alias Blockly.IDragTarget
     */
    export class IDragTarget {
    }
}
declare module "interfaces/i_delete_area" {
    /**
     * Interface for a component that can delete a block or bubble that is dropped
     * on top of it.
     * @extends {IDragTarget}
     * @interface
     * @alias Blockly.IDeleteArea
     */
    export class IDeleteArea {
    }
}
declare module "interfaces/i_positionable" {
    /**
     * Interface for a component that is positioned on top of the workspace.
     * @extends {IComponent}
     * @interface
     * @alias Blockly.IPositionable
     */
    export class IPositionable {
    }
}
declare module "component_manager" {
    export class ComponentManager {
        /**
         * A map of the components registered with the workspace, mapped to id.
         * @type {!Object<string, !ComponentManager.ComponentDatum>}
         * @private
         */
        private componentData_;
        /**
         * A map of capabilities to component IDs.
         * @type {!Object<string, !Array<string>>}
         * @private
         */
        private capabilityToComponentIds_;
        /**
         * Adds a component.
         * @param {!ComponentManager.ComponentDatum} componentInfo The data for
         *   the component to register.
         * @param {boolean=} opt_allowOverrides True to prevent an error when overriding
         *     an already registered item.
         */
        addComponent(componentInfo: ComponentManager.ComponentDatum, opt_allowOverrides?: boolean | undefined): void;
        /**
         * Removes a component.
         * @param {string} id The ID of the component to remove.
         */
        removeComponent(id: string): void;
        /**
         * Adds a capability to a existing registered component.
         * @param {string} id The ID of the component to add the capability to.
         * @param {string|!ComponentManager.Capability<T>} capability The
         *     capability to add.
         * @template T
         */
        addCapability<T>(id: string, capability: any): void;
        /**
         * Removes a capability from an existing registered component.
         * @param {string} id The ID of the component to remove the capability from.
         * @param {string|!ComponentManager.Capability<T>} capability The
         *     capability to remove.
         * @template T
         */
        removeCapability<T_2>(id: string, capability: any): void;
        /**
         * Returns whether the component with this id has the specified capability.
         * @param {string} id The ID of the component to check.
         * @param {string|!ComponentManager.Capability<T>} capability The
         *     capability to check for.
         * @return {boolean} Whether the component has the capability.
         * @template T
         */
        hasCapability<T_4>(id: string, capability: any): boolean;
        /**
         * Gets the component with the given ID.
         * @param {string} id The ID of the component to get.
         * @return {!IComponent|undefined} The component with the given name
         *    or undefined if not found.
         */
        getComponent(id: string): IComponent | undefined;
        /**
         * Gets all the components with the specified capability.
         * @param {string|!ComponentManager.Capability<T>
         *   } capability The capability of the component.
         * @param {boolean} sorted Whether to return list ordered by weights.
         * @return {!Array<T>} The components that match the specified capability.
         * @template T
         */
        getComponents<T_6>(capability: any, sorted: boolean): T_6[];
    }
    export namespace ComponentManager {
        /**
         * A name with the capability of the element stored in the generic.
         * @param {string} name The name of the component capability.
         * @constructor
         * @template T
         */
        class Capability<T> {
            /**
             * Returns the name of the capability.
             * @return {string} The name.
             * @override
             */
            toString(): string;
        }
        namespace Capability {
            const POSITIONABLE: any;
            const DRAG_TARGET: any;
            const DELETE_AREA: any;
            const AUTOHIDEABLE: any;
        }
        const name_: string;
        /**
         * An object storing component information.
         */
        type ComponentDatum = {
            component: IComponent;
            capabilities: (Array<string | ComponentManager.Capability<IComponent>>);
            weight: number;
        };
    }
    import { IComponent } from "interfaces/i_component";
}
declare module "insertion_marker_manager" {
    export class InsertionMarkerManager {
        /**
         * Class that controls updates to connections during drags.  It is primarily
         * responsible for finding the closest eligible connection and highlighting or
         * unhighlighting it as needed during a drag.
         * @param {!BlockSvg} block The top block in the stack being dragged.
         * @constructor
         * @alias Blockly.InsertionMarkerManager
         */
        constructor(block: BlockSvg);
        /**
         * The top block in the stack being dragged.
         * Does not change during a drag.
         * @type {!BlockSvg}
         * @private
         */
        private topBlock_;
        /**
         * The workspace on which these connections are being dragged.
         * Does not change during a drag.
         * @type {!WorkspaceSvg}
         * @private
         */
        private workspace_;
        /**
         * The last connection on the stack, if it's not the last connection on the
         * first block.
         * Set in initAvailableConnections, if at all.
         * @type {RenderedConnection}
         * @private
         */
        private lastOnStack_;
        /**
         * The insertion marker corresponding to the last block in the stack, if
         * that's not the same as the first block in the stack.
         * Set in initAvailableConnections, if at all
         * @type {BlockSvg}
         * @private
         */
        private lastMarker_;
        /**
         * The insertion marker that shows up between blocks to show where a block
         * would go if dropped immediately.
         * @type {BlockSvg}
         * @private
         */
        private firstMarker_;
        /**
         * The connection that this block would connect to if released immediately.
         * Updated on every mouse move.
         * This is not on any of the blocks that are being dragged.
         * @type {RenderedConnection}
         * @private
         */
        private closestConnection_;
        /**
         * The connection that would connect to this.closestConnection_ if this block
         * were released immediately.
         * Updated on every mouse move.
         * This is on the top block that is being dragged or the last block in the
         * dragging stack.
         * @type {RenderedConnection}
         * @private
         */
        private localConnection_;
        /**
         * Whether the block would be deleted if it were dropped immediately.
         * Updated on every mouse move.
         * @type {boolean}
         * @private
         */
        private wouldDeleteBlock_;
        /**
         * Connection on the insertion marker block that corresponds to
         * this.localConnection_ on the currently dragged block.
         * @type {RenderedConnection}
         * @private
         */
        private markerConnection_;
        /**
         * The block that currently has an input being highlighted, or null.
         * @type {BlockSvg}
         * @private
         */
        private highlightedBlock_;
        /**
         * The block being faded to indicate replacement, or null.
         * @type {BlockSvg}
         * @private
         */
        private fadedBlock_;
        /**
         * The connections on the dragging blocks that are available to connect to
         * other blocks.  This includes all open connections on the top block, as well
         * as the last connection on the block stack.
         * Does not change during a drag.
         * @type {!Array<!RenderedConnection>}
         * @private
         */
        private availableConnections_;
        /**
         * Sever all links from this object.
         * @package
         */
        dispose(): void;
        /**
         * Update the available connections for the top block. These connections can
         * change if a block is unplugged and the stack is healed.
         * @package
         */
        updateAvailableConnections(): void;
        /**
         * Return whether the block would be deleted if dropped immediately, based on
         * information from the most recent move event.
         * @return {boolean} True if the block would be deleted if dropped immediately.
         * @package
         */
        wouldDeleteBlock(): boolean;
        /**
         * Return whether the block would be connected if dropped immediately, based on
         * information from the most recent move event.
         * @return {boolean} True if the block would be connected if dropped
         *   immediately.
         * @package
         */
        wouldConnectBlock(): boolean;
        /**
         * Connect to the closest connection and render the results.
         * This should be called at the end of a drag.
         * @package
         */
        applyConnections(): void;
        /**
         * Update connections based on the most recent move location.
         * @param {!Coordinate} dxy Position relative to drag start,
         *     in workspace units.
         * @param {?IDragTarget} dragTarget The drag target that the block is
         *     currently over.
         * @package
         */
        update(dxy: Coordinate, dragTarget: IDragTarget | null): void;
        /**
         * Create an insertion marker that represents the given block.
         * @param {!BlockSvg} sourceBlock The block that the insertion marker
         *     will represent.
         * @return {!BlockSvg} The insertion marker that represents the given
         *     block.
         * @private
         */
        private createMarkerBlock_;
        /**
         * Populate the list of available connections on this block stack.  This should
         * only be called once, at the beginning of a drag.
         * If the stack has more than one block, this function will populate
         * lastOnStack_ and create the corresponding insertion marker.
         * @return {!Array<!RenderedConnection>} A list of available
         *     connections.
         * @private
         */
        private initAvailableConnections_;
        /**
         * Whether the previews (insertion marker and replacement marker) should be
         * updated based on the closest candidate and the current drag distance.
         * @param {!Object} candidate An object containing a local connection, a closest
         *     connection, and a radius.  Returned by getCandidate_.
         * @param {!Coordinate} dxy Position relative to drag start,
         *     in workspace units.
         * @return {boolean} Whether the preview should be updated.
         * @private
         */
        private shouldUpdatePreviews_;
        /**
         * Find the nearest valid connection, which may be the same as the current
         * closest connection.
         * @param {!Coordinate} dxy Position relative to drag start,
         *     in workspace units.
         * @return {!Object} An object containing a local connection, a closest
         *     connection, and a radius.
         * @private
         */
        private getCandidate_;
        /**
         * Decide the radius at which to start searching for the closest connection.
         * @return {number} The radius at which to start the search for the closest
         *     connection.
         * @private
         */
        private getStartRadius_;
        /**
         * Whether ending the drag would delete the block.
         * @param {!Object} candidate An object containing a local connection, a closest
         *    connection, and a radius.
         * @param {?IDragTarget} dragTarget The drag target that the block is
         *     currently over.
         * @return {boolean} Whether dropping the block immediately would delete the
         *    block.
         * @private
         */
        private shouldDelete_;
        /**
         * Show an insertion marker or replacement highlighting during a drag, if
         * needed.
         * At the beginning of this function, this.localConnection_ and
         * this.closestConnection_ should both be null.
         * @param {!Object} candidate An object containing a local connection, a closest
         *     connection, and a radius.
         * @private
         */
        private maybeShowPreview_;
        /**
         * A preview should be shown.  This function figures out if it should be a block
         * highlight or an insertion marker, and shows the appropriate one.
         * @private
         */
        private showPreview_;
        /**
         * Show an insertion marker or replacement highlighting during a drag, if
         * needed.
         * At the end of this function, this.localConnection_ and
         * this.closestConnection_ should both be null.
         * @param {!Object} candidate An object containing a local connection, a closest
         *     connection, and a radius.
         * @private
         */
        private maybeHidePreview_;
        /**
         * A preview should be hidden.  This function figures out if it is a block
         *  highlight or an insertion marker, and hides the appropriate one.
         * @private
         */
        private hidePreview_;
        /**
         * Shows an insertion marker connected to the appropriate blocks (based on
         * manager state).
         * @private
         */
        private showInsertionMarker_;
        /**
         * Disconnects and hides the current insertion marker. Should return the blocks
         * to their original state.
         * @private
         */
        private hideInsertionMarker_;
        /**
         * Shows an outline around the input the closest connection belongs to.
         * @private
         */
        private showInsertionInputOutline_;
        /**
         * Hides any visible input outlines.
         * @private
         */
        private hideInsertionInputOutline_;
        /**
         * Shows a replacement fade affect on the closest connection's target block
         * (the block that is currently connected to it).
         * @private
         */
        private showReplacementFade_;
        /**
         * Hides/Removes any visible fade affects.
         * @private
         */
        private hideReplacementFade_;
        /**
         * Get a list of the insertion markers that currently exist.  Drags have 0, 1,
         * or 2 insertion markers.
         * @return {!Array<!BlockSvg>} A possibly empty list of insertion
         *     marker blocks.
         * @package
         */
        getInsertionMarkers(): Array<BlockSvg>;
    }
    export namespace InsertionMarkerManager {
        namespace PREVIEW_TYPE {
            const INSERTION_MARKER: number;
            const INPUT_OUTLINE: number;
            const REPLACEMENT_FADE: number;
        }
        /**
         * An enum describing different kinds of previews the InsertionMarkerManager
         * could display.
         */
        type PREVIEW_TYPE = number;
        const DUPLICATE_BLOCK_ERROR: string;
    }
    import { Coordinate } from "utils/coordinate";
    import { IDragTarget } from "interfaces/i_drag_target";
    import { BlockSvg } from "block_svg";
}
declare module "interfaces/i_ast_node_location_svg" {
    /**
     * An AST node location SVG interface.
     * @interface
     * @extends {IASTNodeLocation}
     * @alias Blockly.IASTNodeLocationSvg
     */
    export class IASTNodeLocationSvg {
    }
}
declare module "keyboard_nav/marker" {
    /**
     * Class for a marker.
     * This is used in keyboard navigation to save a location in the Blockly AST.
     * @constructor
     * @alias Blockly.Marker
     */
    export class Marker {
        /**
         * The color of the marker.
         * @type {?string}
         */
        color: string | null;
        /**
         * The current location of the marker.
         * @type {ASTNode}
         * @private
         */
        private curNode_;
        /**
         * The object in charge of drawing the visual representation of the current
         * node.
         * @type {MarkerSvg}
         * @private
         */
        private drawer_;
        /**
         * The type of the marker.
         * @type {string}
         */
        type: string;
        /**
         * Sets the object in charge of drawing the marker.
         * @param {MarkerSvg} drawer The object in charge of
         *     drawing the marker.
         */
        setDrawer(drawer: MarkerSvg): void;
        /**
         * Get the current drawer for the marker.
         * @return {MarkerSvg} The object in charge of drawing
         *     the marker.
         */
        getDrawer(): MarkerSvg;
        /**
         * Gets the current location of the marker.
         * @return {ASTNode} The current field, connection, or block the marker
         *     is on.
         */
        getCurNode(): ASTNode;
        /**
         * Set the location of the marker and call the update method.
         * Setting isStack to true will only work if the newLocation is the top most
         * output or previous connection on a stack.
         * @param {ASTNode} newNode The new location of the marker.
         */
        setCurNode(newNode: ASTNode): void;
        /**
         * Redraw the current marker.
         * @package
         */
        draw(): void;
        /**
         * Hide the marker SVG.
         */
        hide(): void;
        /**
         * Dispose of this marker.
         */
        dispose(): void;
    }
    import { MarkerSvg } from "renderers/common/marker_svg";
    import { ASTNode } from "keyboard_nav/ast_node";
}
declare module "events/events_ui_base" {
    /**
     * Base class for a UI event.
     * UI events are events that don't need to be sent over the wire for multi-user
     * editing to work (e.g. scrolling the workspace, zooming, opening toolbox
     * categories).
     * UI events do not undo or redo.
     * @param {string=} opt_workspaceId The workspace identifier for this event.
     *    Undefined for a blank event.
     * @extends {Abstract}
     * @constructor
     * @alias Blockly.Events.UiBase
     */
    export class UiBase {
        constructor(opt_workspaceId: any);
        /**
         * Whether or not the event is blank (to be populated by fromJson).
         * @type {boolean}
         */
        isBlank: boolean;
        /**
         * The workspace identifier for this event.
         * @type {string}
         */
        workspaceId: string;
        recordUndo: boolean;
        /**
         * Whether or not the event is a UI event.
         * @type {boolean}
         */
        isUiEvent: boolean;
    }
}
declare module "events/events_marker_move" {
    /**
     * Class for a marker move event.
     * @param {?Block=} opt_block The affected block. Null if current node
     *    is of type workspace. Undefined for a blank event.
     * @param {boolean=} isCursor Whether this is a cursor event. Undefined for a
     *    blank event.
     * @param {?ASTNode=} opt_oldNode The old node the marker used to be on.
     *    Undefined for a blank event.
     * @param {!ASTNode=} opt_newNode The new node the marker is now on.
     *    Undefined for a blank event.
     * @extends {UiBase}
     * @constructor
     * @alias Blockly.Events.MarkerMove
     */
    export class MarkerMove {
        constructor(opt_block: any, isCursor: any, opt_oldNode: any, opt_newNode: any);
        /**
         * The workspace identifier for this event.
         * @type {?string}
         */
        blockId: string | null;
        /**
         * The old node the marker used to be on.
         * @type {?ASTNode|undefined}
         */
        oldNode: (ASTNode | undefined) | null;
        /**
         * The new node the  marker is now on.
         * @type {ASTNode|undefined}
         */
        newNode: ASTNode | undefined;
        /**
         * Whether this is a cursor event.
         * @type {boolean|undefined}
         */
        isCursor: boolean | undefined;
        /**
         * Encode the event as JSON.
         * @return {!Object} JSON representation.
         */
        toJson(): any;
        /**
         * Decode the JSON event.
         * @param {!Object} json JSON representation.
         */
        fromJson(json: any): void;
        /**
         * Type of this event.
         * @type {string}
         */
        type: string;
    }
    import { ASTNode } from "keyboard_nav/ast_node";
}
declare module "renderers/common/marker_svg" {
    export class MarkerSvg {
        /**
         * Class for a marker.
         * @param {!WorkspaceSvg} workspace The workspace the marker belongs to.
         * @param {!ConstantProvider} constants The constants for
         *     the renderer.
         * @param {!Marker} marker The marker to draw.
         * @constructor
         * @alias Blockly.blockRendering.MarkerSvg
         */
        constructor(workspace: WorkspaceSvg, constants: ConstantProvider, marker: Marker);
        /**
         * The workspace the marker belongs to.
         * @type {!WorkspaceSvg}
         * @private
         */
        private workspace_;
        /**
         * The marker to draw.
         * @type {!Marker}
         * @private
         */
        private marker_;
        /**
         * The workspace, field, or block that the marker SVG element should be
         * attached to.
         * @type {IASTNodeLocationSvg}
         * @private
         */
        private parent_;
        /**
         * The constants necessary to draw the marker.
         * @type {ConstantProvider}
         * @protected
         */
        protected constants_: ConstantProvider;
        /**
         * The current SVG element for the marker.
         * @type {Element}
         */
        currentMarkerSvg: Element;
        /**
         * The color of the marker.
         * @type {string}
         */
        color_: string;
        /**
         * Return the root node of the SVG or null if none exists.
         * @return {SVGElement} The root SVG node.
         */
        getSvgRoot(): SVGElement;
        /**
         * Get the marker.
         * @return {!Marker} The marker to draw for.
         */
        getMarker(): Marker;
        /**
         * True if the marker should be drawn as a cursor, false otherwise.
         * A cursor is drawn as a flashing line. A marker is drawn as a solid line.
         * @return {boolean} True if the marker is a cursor, false otherwise.
         */
        isCursor(): boolean;
        /**
         * Create the DOM element for the marker.
         * @return {!SVGElement} The marker controls SVG group.
         * @package
         */
        createDom(): SVGElement;
        svgGroup_: SVGGElement;
        /**
         * Attaches the SVG root of the marker to the SVG group of the parent.
         * @param {!IASTNodeLocationSvg} newParent The workspace, field, or
         *     block that the marker SVG element should be attached to.
         * @protected
         */
        protected setParent_(newParent: IASTNodeLocationSvg): void;
        /**
         * Update the marker.
         * @param {ASTNode} oldNode The previous node the marker was on or null.
         * @param {ASTNode} curNode The node that we want to draw the marker for.
         */
        draw(oldNode: ASTNode, curNode: ASTNode): void;
        /**
         * Update the marker's visible state based on the type of curNode..
         * @param {!ASTNode} curNode The node that we want to draw the marker for.
         * @protected
         */
        protected showAtLocation_(curNode: ASTNode): void;
        /**************************
         * Display
         **************************/
        /**
         * Show the marker as a combination of the previous connection and block,
         * the output connection and block, or just the block.
         * @param {!ASTNode} curNode The node to draw the marker for.
         * @private
         */
        private showWithBlockPrevOutput_;
        /**
         * Position and display the marker for a block.
         * @param {!ASTNode} curNode The node to draw the marker for.
         * @protected
         */
        protected showWithBlock_(curNode: ASTNode): void;
        /**
         * Position and display the marker for a previous connection.
         * @param {!ASTNode} curNode The node to draw the marker for.
         * @protected
         */
        protected showWithPrevious_(curNode: ASTNode): void;
        /**
         * Position and display the marker for an output connection.
         * @param {!ASTNode} curNode The node to draw the marker for.
         * @protected
         */
        protected showWithOutput_(curNode: ASTNode): void;
        /**
         * Position and display the marker for a workspace coordinate.
         * This is a horizontal line.
         * @param {!ASTNode} curNode The node to draw the marker for.
         * @protected
         */
        protected showWithCoordinates_(curNode: ASTNode): void;
        /**
         * Position and display the marker for a field.
         * This is a box around the field.
         * @param {!ASTNode} curNode The node to draw the marker for.
         * @protected
         */
        protected showWithField_(curNode: ASTNode): void;
        /**
         * Position and display the marker for an input.
         * This is a puzzle piece.
         * @param {!ASTNode} curNode The node to draw the marker for.
         * @protected
         */
        protected showWithInput_(curNode: ASTNode): void;
        /**
         * Position and display the marker for a next connection.
         * This is a horizontal line.
         * @param {!ASTNode} curNode The node to draw the marker for.
         * @protected
         */
        protected showWithNext_(curNode: ASTNode): void;
        /**
         * Position and display the marker for a stack.
         * This is a box with extra padding around the entire stack of blocks.
         * @param {!ASTNode} curNode The node to draw the marker for.
         * @protected
         */
        protected showWithStack_(curNode: ASTNode): void;
        /**
         * Show the current marker.
         * @protected
         */
        protected showCurrent_(): void;
        /**************************
         * Position
         **************************/
        /**
         * Position the marker for a block.
         * Displays an outline of the top half of a rectangle around a block.
         * @param {number} width The width of the block.
         * @param {number} markerOffset The extra padding for around the block.
         * @param {number} markerHeight The height of the marker.
         * @protected
         */
        protected positionBlock_(width: number, markerOffset: number, markerHeight: number): void;
        /**
         * Position the marker for an input connection.
         * Displays a filled in puzzle piece.
         * @param {!RenderedConnection} connection The connection to position
         *     marker around.
         * @protected
         */
        protected positionInput_(connection: RenderedConnection): void;
        /**
         * Move and show the marker at the specified coordinate in workspace units.
         * Displays a horizontal line.
         * @param {number} x The new x, in workspace units.
         * @param {number} y The new y, in workspace units.
         * @param {number} width The new width, in workspace units.
         * @protected
         */
        protected positionLine_(x: number, y: number, width: number): void;
        /**
         * Position the marker for an output connection.
         * Displays a puzzle outline and the top and bottom path.
         * @param {number} width The width of the block.
         * @param {number} height The height of the block.
         * @param {!Object} connectionShape The shape object for the connection.
         * @protected
         */
        protected positionOutput_(width: number, height: number, connectionShape: any): void;
        /**
         * Position the marker for a previous connection.
         * Displays a half rectangle with a notch in the top to represent the previous
         * connection.
         * @param {number} width The width of the block.
         * @param {number} markerOffset The offset of the marker from around the block.
         * @param {number} markerHeight The height of the marker.
         * @param {!Object} connectionShape The shape object for the connection.
         * @protected
         */
        protected positionPrevious_(width: number, markerOffset: number, markerHeight: number, connectionShape: any): void;
        /**
         * Move and show the marker at the specified coordinate in workspace units.
         * Displays a filled in rectangle.
         * @param {number} x The new x, in workspace units.
         * @param {number} y The new y, in workspace units.
         * @param {number} width The new width, in workspace units.
         * @param {number} height The new height, in workspace units.
         * @protected
         */
        protected positionRect_(x: number, y: number, width: number, height: number): void;
        /**
         * Flip the SVG paths in RTL.
         * @param {!SVGElement} markerSvg The marker that we want to flip.
         * @private
         */
        private flipRtl_;
        /**
         * Hide the marker.
         */
        hide(): void;
        /**
         * Fire event for the marker or marker.
         * @param {ASTNode} oldNode The old node the marker used to be on.
         * @param {!ASTNode} curNode The new node the marker is currently on.
         * @private
         */
        private fireMarkerEvent_;
        /**
         * Get the properties to make a marker blink.
         * @return {!Object} The object holding attributes to make the marker blink.
         * @protected
         */
        protected getBlinkProperties_(): any;
        /**
         * Create the marker SVG.
         * @return {Element} The SVG node created.
         * @protected
         */
        protected createDomInternal_(): Element;
        markerSvg_: SVGGElement;
        markerSvgLine_: SVGRectElement;
        markerSvgRect_: SVGRectElement;
        markerInput_: SVGPathElement;
        markerBlock_: SVGPathElement;
        /**
         * Apply the marker's color.
         * @param {!ASTNode} _curNode The node that we want to draw the marker
         *    for.
         * @protected
         */
        protected applyColor_(_curNode: ASTNode): void;
        /**
         * Dispose of this marker.
         */
        dispose(): void;
    }
    import { ConstantProvider } from "renderers/common/constants";
    import { Marker } from "keyboard_nav/marker";
    import { IASTNodeLocationSvg } from "interfaces/i_ast_node_location_svg";
    import { ASTNode } from "keyboard_nav/ast_node";
    import { RenderedConnection } from "rendered_connection";
    import { WorkspaceSvg } from "workspace_svg";
}
declare module "renderers/common/path_object" {
    export class PathObject {
        /**
         * An object that handles creating and setting each of the SVG elements
         * used by the renderer.
         * @param {!SVGElement} root The root SVG element.
         * @param {!Theme.BlockStyle} style The style object to use for
         *     coloring.
         * @param {!ConstantProvider} constants The renderer's
         *     constants.
         * @constructor
         * @implements {IPathObject}
         * @package
         * @alias Blockly.blockRendering.PathObject
         */
        constructor(root: SVGElement, style: Theme.BlockStyle, constants: ConstantProvider);
        /**
         * The renderer's constant provider.
         * @type {!ConstantProvider}
         * @package
         */
        constants: ConstantProvider;
        svgRoot: SVGElement;
        /**
         * The primary path of the block.
         * @type {!SVGElement}
         * @package
         */
        svgPath: SVGElement;
        /**
         * The style object to use when coloring block paths.
         * @type {!Theme.BlockStyle}
         * @package
         */
        style: Theme.BlockStyle;
        /**
         * Holds the cursors svg element when the cursor is attached to the block.
         * This is null if there is no cursor on the block.
         * @type {SVGElement}
         * @package
         */
        cursorSvg: SVGElement;
        /**
         * Holds the markers svg element when the marker is attached to the block.
         * This is null if there is no marker on the block.
         * @type {SVGElement}
         * @package
         */
        markerSvg: SVGElement;
        /**
         * Set the path generated by the renderer onto the respective SVG element.
         * @param {string} pathString The path.
         * @package
         */
        setPath(pathString: string): void;
        /**
         * Flip the SVG paths in RTL.
         * @package
         */
        flipRTL(): void;
        /**
         * Add the cursor SVG to this block's SVG group.
         * @param {SVGElement} cursorSvg The SVG root of the cursor to be added to the
         *     block SVG group.
         * @package
         */
        setCursorSvg(cursorSvg: SVGElement): void;
        /**
         * Add the marker SVG to this block's SVG group.
         * @param {SVGElement} markerSvg The SVG root of the marker to be added to the
         *     block SVG group.
         * @package
         */
        setMarkerSvg(markerSvg: SVGElement): void;
        /**
         * Apply the stored colors to the block's path, taking into account whether
         * the paths belong to a shadow block.
         * @param {!Block} block The source block.
         * @package
         */
        applyColor(block: Block): void;
        /**
         * Set the style.
         * @param {!Theme.BlockStyle} blockStyle The block style to use.
         * @package
         */
        setStyle(blockStyle: Theme.BlockStyle): void;
        /**
         * Add or remove the given CSS class on the path object's root SVG element.
         * @param {string} className The name of the class to add or remove
         * @param {boolean} add True if the class should be added.  False if it should
         *     be removed.
         * @protected
         */
        protected setClass_(className: string, add: boolean): void;
        /**
         * Set whether the block shows a highlight or not.  Block highlighting is
         * often used to visually mark blocks currently being executed.
         * @param {boolean} enable True if highlighted.
         * @package
         */
        updateHighlighted(enable: boolean): void;
        /**
         * Updates the look of the block to reflect a shadow state.
         * @param {boolean} shadow True if the block is a shadow block.
         * @protected
         */
        protected updateShadow_(shadow: boolean): void;
        /**
         * Updates the look of the block to reflect a disabled state.
         * @param {boolean} disabled True if disabled.
         * @protected
         */
        protected updateDisabled_(disabled: boolean): void;
        /**
         * Add or remove styling showing that a block is selected.
         * @param {boolean} enable True if selection is enabled, false otherwise.
         * @package
         */
        updateSelected(enable: boolean): void;
        /**
         * Add or remove styling showing that a block is dragged over a delete area.
         * @param {boolean} enable True if the block is being dragged over a delete
         *     area, false otherwise.
         * @package
         */
        updateDraggingDelete(enable: boolean): void;
        /**
         * Add or remove styling showing that a block is an insertion marker.
         * @param {boolean} enable True if the block is an insertion marker, false
         *     otherwise.
         * @package
         */
        updateInsertionMarker(enable: boolean): void;
        /**
         * Add or remove styling showing that a block is movable.
         * @param {boolean} enable True if the block is movable, false otherwise.
         * @package
         */
        updateMovable(enable: boolean): void;
        /**
         * Add or remove styling that shows that if the dragging block is dropped, this
         * block will be replaced.  If a shadow block, it will disappear.  Otherwise it
         * will bump.
         * @param {boolean} enable True if styling should be added.
         * @package
         */
        updateReplacementFade(enable: boolean): void;
        /**
         * Add or remove styling that shows that if the dragging block is dropped, this
         * block will be connected to the input.
         * @param {Connection} _conn The connection on the input to highlight.
         * @param {boolean} _enable True if styling should be added.
         * @package
         */
        updateShapeForInputHighlight(_conn: Connection, _enable: boolean): void;
    }
    import { ConstantProvider } from "renderers/common/constants";
    import { Theme } from "theme";
    import { Block } from "block";
    import { Connection } from "connection";
}
declare module "renderers/common/renderer" {
    /**
     * The base class for a block renderer.
     * @param {string} name The renderer name.
     * @package
     * @constructor
     * @implements {IRegistrable}
     * @alias Blockly.blockRendering.Renderer
     */
    export class Renderer implements IRegistrable {
        constructor(name: any);
        /**
         * The renderer name.
         * @type {string}
         * @package
         */
        name: string;
        /**
         * The renderer's constant provider.
         * @type {ConstantProvider}
         * @private
         */
        private constants_;
        /**
         * Rendering constant overrides, passed in through options.
         * @type {?Object}
         * @package
         */
        overrides: any | null;
        /**
         * Gets the class name that identifies this renderer.
         * @return {string} The CSS class name.
         * @package
         */
        getClassName(): string;
        /**
         * Initialize the renderer.
         * @param {!Theme} theme The workspace theme object.
         * @param {Object=} opt_rendererOverrides Rendering constant overrides.
         * @package
         */
        init(theme: Theme, opt_rendererOverrides?: any | undefined): void;
        /**
         * Create any DOM elements that this renderer needs.
         * @param {!SVGElement} svg The root of the workspace's SVG.
         * @param {!Theme} theme The workspace theme object.
         * @package
         */
        createDom(svg: SVGElement, theme: Theme): void;
        /**
         * Refresh the renderer after a theme change.
         * @param {!SVGElement} svg The root of the workspace's SVG.
         * @param {!Theme} theme The workspace theme object.
         * @package
         */
        refreshDom(svg: SVGElement, theme: Theme): void;
        /**
         * Dispose of this renderer.
         * Delete all DOM elements that this renderer and its constants created.
         * @package
         */
        dispose(): void;
        /**
         * Create a new instance of the renderer's constant provider.
         * @return {!ConstantProvider} The constant provider.
         * @protected
         */
        protected makeConstants_(): ConstantProvider;
        /**
         * Create a new instance of the renderer's render info object.
         * @param {!BlockSvg} block The block to measure.
         * @return {!RenderInfo} The render info object.
         * @protected
         */
        protected makeRenderInfo_(block: BlockSvg): RenderInfo;
        /**
         * Create a new instance of the renderer's drawer.
         * @param {!BlockSvg} block The block to render.
         * @param {!RenderInfo} info An object containing all
         *   information needed to render this block.
         * @return {!Drawer} The drawer.
         * @protected
         */
        protected makeDrawer_(block: BlockSvg, info: RenderInfo): Drawer;
        /**
         * Create a new instance of the renderer's debugger.
         * @return {!Debug} The renderer debugger.
         * @suppress {strictModuleDepCheck} Debug renderer only included in playground.
         * @protected
         */
        protected makeDebugger_(): Debug;
        /**
         * Create a new instance of the renderer's marker drawer.
         * @param {!WorkspaceSvg} workspace The workspace the marker belongs to.
         * @param {!Marker} marker The marker.
         * @return {!MarkerSvg} The object in charge of drawing
         *     the marker.
         * @package
         */
        makeMarkerDrawer(workspace: WorkspaceSvg, marker: Marker): MarkerSvg;
        /**
         * Create a new instance of a renderer path object.
         * @param {!SVGElement} root The root SVG element.
         * @param {!Theme.BlockStyle} style The style object to use for
         *     coloring.
         * @return {!IPathObject} The renderer path object.
         * @package
         */
        makePathObject(root: SVGElement, style: Theme.BlockStyle): IPathObject;
        /**
         * Get the current renderer's constant provider.  We assume that when this is
         * called, the renderer has already been initialized.
         * @return {!ConstantProvider} The constant provider.
         * @package
         */
        getConstants(): ConstantProvider;
        /**
         * Determine whether or not to highlight a connection.
         * @param {Connection} _conn The connection to determine whether or not
         *     to highlight.
         * @return {boolean} True if we should highlight the connection.
         * @package
         */
        shouldHighlightConnection(_conn: Connection): boolean;
        /**
         * Checks if an orphaned block can connect to the "end" of the topBlock's
         * block-clump. If the clump is a row the end is the last input. If the clump
         * is a stack, the end is the last next connection. If the clump is neither,
         * then this returns false.
         * @param {!BlockSvg} topBlock The top block of the block clump we want to try
         *     and connect to.
         * @param {!BlockSvg} orphanBlock The orphan block that wants to find
         *     a home.
         * @param {number} localType The type of the connection being dragged.
         * @return {boolean} Whether there is a home for the orphan or not.
         * @package
         */
        orphanCanConnectAtEnd(topBlock: BlockSvg, orphanBlock: BlockSvg, localType: number): boolean;
        /**
         * Chooses a connection preview method based on the available connection, the
         * current dragged connection, and the block being dragged.
         * @param {!RenderedConnection} closest The available connection.
         * @param {!RenderedConnection} local The connection currently being
         *     dragged.
         * @param {!BlockSvg} topBlock The block currently being dragged.
         * @return {!InsertionMarkerManager.PREVIEW_TYPE} The preview type
         *     to display.
         * @package
         */
        getConnectionPreviewMethod(closest: RenderedConnection, local: RenderedConnection, topBlock: BlockSvg): InsertionMarkerManager.PREVIEW_TYPE;
        /**
         * Render the block.
         * @param {!BlockSvg} block The block to render.
         * @package
         */
        render(block: BlockSvg): void;
    }
    import { IRegistrable } from "interfaces/i_registrable";
    import { Theme } from "theme";
    import { ConstantProvider } from "renderers/common/constants";
    import { BlockSvg } from "block_svg";
    import { RenderInfo } from "renderers/common/info";
    import { Drawer } from "renderers/common/drawer";
    import { Debug } from "renderers/common/debugger";
    import { WorkspaceSvg } from "workspace_svg";
    import { Marker } from "keyboard_nav/marker";
    import { MarkerSvg } from "renderers/common/marker_svg";
    import { IPathObject } from "renderers/common/i_path_object";
    import { Connection } from "connection";
    import { RenderedConnection } from "rendered_connection";
    import { InsertionMarkerManager } from "insertion_marker_manager";
}
declare module "renderers/measurables/round_corner" {
    /**
     * An object containing information about the space a rounded corner takes up
     * during rendering.
     * @param {!ConstantProvider} constants The rendering
     *   constants provider.
     * @param {string=} opt_position The position of this corner.
     * @package
     * @constructor
     * @extends {Measurable}
     * @alias Blockly.blockRendering.RoundCorner
     */
    export class RoundCorner {
        constructor(constants: any, opt_position: any);
        type: number;
        width: any;
        height: number;
    }
}
declare module "renderers/measurables/spacer_row" {
    /**
     * An object containing information about a spacer between two rows.
     * @param {!ConstantProvider} constants The rendering
     *   constants provider.
     * @param {number} height The height of the spacer.
     * @param {number} width The width of the spacer.
     * @package
     * @constructor
     * @extends {Row}
     * @alias Blockly.blockRendering.SpacerRow
     */
    export class SpacerRow extends Row {
        constructor(constants: any, height: any, width: any);
        width: any;
        height: any;
        followsStatement: boolean;
        widthWithConnectedBlocks: number;
        elements: InRowSpacer[];
        /**
         * @override
         */
        override measure(): void;
    }
    import { InRowSpacer } from "renderers/measurables/in_row_spacer";
    import { Row } from "renderers/measurables/row";
}
declare module "renderers/measurables/square_corner" {
    /**
     * An object containing information about the space a square corner takes up
     * during rendering.
     * @param {!ConstantProvider} constants The rendering
     *   constants provider.
     * @param {string=} opt_position The position of this corner.
     * @package
     * @constructor
     * @extends {Measurable}
     * @alias Blockly.blockRendering.SquareCorner
     */
    export class SquareCorner {
        constructor(constants: any, opt_position: any);
        type: number;
        height: any;
        width: any;
    }
}
declare module "renderers/measurables/statement_input" {
    /**
     * An object containing information about the space a statement input takes up
     * during rendering
     * @param {!ConstantProvider} constants The rendering
     *   constants provider.
     * @param {!Input} input The statement input to measure and store
     *     information for.
     * @package
     * @constructor
     * @extends {InputConnection}
     * @alias Blockly.blockRendering.StatementInput
     */
    export class StatementInput {
        constructor(constants: any, input: any);
        height: any;
        width: any;
    }
}
declare module "renderers/measurables/top_row" {
    /**
     * An object containing information about what elements are in the top row of a
     * block as well as sizing information for the top row.
     * Elements in a top row can consist of corners, hats, spacers, and previous
     * connections.
     * After this constructor is called, the row will contain all non-spacer
     * elements it needs.
     * @param {!ConstantProvider} constants The rendering
     *   constants provider.
     * @package
     * @constructor
     * @extends {Row}
     * @alias Blockly.blockRendering.TopRow
     */
    export class TopRow extends Row {
        constructor(constants: any);
        /**
         * The starting point for drawing the row, in the y direction.
         * This allows us to draw hats and similar shapes that don't start at the
         * origin. Must be non-negative (see #2820).
         * @package
         * @type {number}
         */
        capline: number;
        /**
         * How much the row extends up above its capline.
         * @type {number}
         */
        ascenderHeight: number;
        /**
         * Whether the block has a previous connection.
         * @package
         * @type {boolean}
         */
        hasPreviousConnection: boolean;
        /**
         * The previous connection on the block, if any.
         * @type {PreviousConnection}
         */
        connection: PreviousConnection;
        /**
         * Returns whether or not the top row has a left square corner.
         * @param {!BlockSvg} block The block whose top row this represents.
         * @return {boolean} Whether or not the top row has a left square corner.
         */
        hasLeftSquareCorner(block: BlockSvg): boolean;
        /**
         * Returns whether or not the top row has a right square corner.
         * @param {!BlockSvg} _block The block whose top row this represents.
         * @return {boolean} Whether or not the top row has a right square corner.
         */
        hasRightSquareCorner(_block: BlockSvg): boolean;
        /**
         * @override
         */
        override measure(): void;
        width: number;
        height: number;
        widthWithConnectedBlocks: number;
        /**
         * @override
         */
        override startsWithElemSpacer(): boolean;
        /**
         * @override
         */
        override endsWithElemSpacer(): boolean;
    }
    import { PreviousConnection } from "renderers/measurables/previous_connection";
    import { BlockSvg } from "block_svg";
    import { Row } from "renderers/measurables/row";
}
declare module "renderers/common/info" {
    export class RenderInfo {
        /**
         * An object containing all sizing information needed to draw this block.
         *
         * This measure pass does not propagate changes to the block (although fields
         * may choose to rerender when getSize() is called).  However, calling it
         * repeatedly may be expensive.
         *
         * @param {!Renderer} renderer The renderer in use.
         * @param {!BlockSvg} block The block to measure.
         * @constructor
         * @package
         * @alias Blockly.blockRendering.RenderInfo
         */
        constructor(renderer: Renderer, block: BlockSvg);
        block_: BlockSvg;
        /**
         * The block renderer in use.
         * @type {!Renderer}
         * @protected
         */
        protected renderer_: Renderer;
        /**
         * The renderer's constant provider.
         * @type {!ConstantProvider}
         * @protected
         */
        protected constants_: ConstantProvider;
        /**
         * A measurable representing the output connection if the block has one.
         * Otherwise null.
         * @type {OutputConnection}
         */
        outputConnection: OutputConnection;
        /**
         * Whether the block should be rendered as a single line, either because it's
         * inline or because it has been collapsed.
         * @type {boolean}
         */
        isInline: boolean;
        /**
         * Whether the block is collapsed.
         * @type {boolean}
         */
        isCollapsed: boolean;
        /**
         * Whether the block is an insertion marker.  Insertion markers are the same
         * shape as normal blocks, but don't show fields.
         * @type {boolean}
         */
        isInsertionMarker: boolean;
        /**
         * True if the block should be rendered right-to-left.
         * @type {boolean}
         */
        RTL: boolean;
        /**
         * The height of the rendered block, including child blocks.
         * @type {number}
         */
        height: number;
        /**
         * The width of the rendered block, including child blocks.
         * @type {number}
         */
        widthWithChildren: number;
        /**
         * The width of the rendered block, excluding child blocks.  This is the right
         * edge of the block when rendered LTR.
         * @type {number}
         */
        width: number;
        /**
         *
         * @type {number}
         */
        statementEdge: number;
        /**
         * An array of Row objects containing sizing information.
         * @type {!Array<!Row>}
         */
        rows: Array<Row>;
        /**
         * An array of input rows on the block.
         * @type {!Array<!InputRow>}
         */
        inputRows: Array<InputRow>;
        /**
         * An array of measurable objects containing hidden icons.
         * @type {!Array<!Icon>}
         */
        hiddenIcons: Array<Icon>;
        /**
         * An object with rendering information about the top row of the block.
         * @type {!TopRow}
         */
        topRow: TopRow;
        /**
         * An object with rendering information about the bottom row of the block.
         * @type {!BottomRow}
         */
        bottomRow: BottomRow;
        startX: number;
        startY: number;
        /**
         * Get the block renderer in use.
         * @return {!Renderer} The block renderer in use.
         * @package
         */
        getRenderer(): Renderer;
        /**
         * Populate and return an object containing all sizing information needed to
         * draw this block.
         *
         * This measure pass does not propagate changes to the block (although fields
         * may choose to rerender when getSize() is called).  However, calling it
         * repeatedly may be expensive.
         *
         * @package
         */
        measure(): void;
        /**
         * Create rows of Measurable objects representing all renderable parts of the
         * block.
         * @protected
         */
        protected createRows_(): void;
        /**
         * Create all non-spacer elements that belong on the top row.
         * @package
         */
        populateTopRow_(): void;
        /**
         * Create all non-spacer elements that belong on the bottom row.
         * @package
         */
        populateBottomRow_(): void;
        /**
         * Add an input element to the active row, if needed, and record the type of the
         * input on the row.
         * @param {!Input} input The input to record information about.
         * @param {!Row} activeRow The row that is currently being
         *     populated.
         * @protected
         */
        protected addInput_(input: Input, activeRow: Row): void;
        /**
         * Decide whether to start a new row between the two Blockly.Inputs.
         * @param {!Input} input The first input to consider
         * @param {Input} lastInput The input that follows.
         * @return {boolean} True if the next input should be rendered on a new row.
         * @protected
         */
        protected shouldStartNewRow_(input: Input, lastInput: Input): boolean;
        /**
         * Add horizontal spacing between and around elements within each row.
         * @protected
         */
        protected addElemSpacing_(): void;
        /**
         * Calculate the width of a spacer element in a row based on the previous and
         * next elements in that row.  For instance, extra padding is added between two
         * editable fields.
         * @param {Measurable} prev The element before the
         *     spacer.
         * @param {Measurable} next The element after the spacer.
         * @return {number} The size of the spacing between the two elements.
         * @protected
         */
        protected getInRowSpacing_(prev: Measurable, next: Measurable): number;
        /**
         * Figure out where the right edge of the block and right edge of statement
         * inputs should be placed.
         * @protected
         */
        protected computeBounds_(): void;
        /**
         * Extra spacing may be necessary to make sure that the right sides of all
         * rows line up.  This can only be calculated after a first pass to calculate
         * the sizes of all rows.
         * @protected
         */
        protected alignRowElements_(): void;
        /**
         * Calculate the desired width of an input row.
         * @param {!Row} _row The input row.
         * @return {number} The desired width of the input row.
         * @protected
         */
        protected getDesiredRowWidth_(_row: Row): number;
        /**
         * Modify the given row to add the given amount of padding around its fields.
         * The exact location of the padding is based on the alignment property of the
         * last input in the field.
         * @param {Row} row The row to add padding to.
         * @param {number} missingSpace How much padding to add.
         * @protected
         */
        protected addAlignmentPadding_(row: Row, missingSpace: number): void;
        /**
         * Align the elements of a statement row based on computed bounds.
         * Unlike other types of rows, statement rows add space in multiple places.
         * @param {!InputRow} row The statement row to resize.
         * @protected
         */
        protected alignStatementRow_(row: InputRow): void;
        /**
         * Add spacers between rows and set their sizes.
         * @protected
         */
        protected addRowSpacing_(): void;
        /**
         * Create a spacer row to go between prev and next, and set its size.
         * @param {!Row} prev The previous row.
         * @param {!Row} next The next row.
         * @return {!SpacerRow} The newly created spacer row.
         * @protected
         */
        protected makeSpacerRow_(prev: Row, next: Row): SpacerRow;
        /**
         * Calculate the width of a spacer row.
         * @param {!Row} _prev The row before the spacer.
         * @param {!Row} _next The row after the spacer.
         * @return {number} The desired width of the spacer row between these two rows.
         * @protected
         */
        protected getSpacerRowWidth_(_prev: Row, _next: Row): number;
        /**
         * Calculate the height of a spacer row.
         * @param {!Row} _prev The row before the spacer.
         * @param {!Row} _next The row after the spacer.
         * @return {number} The desired height of the spacer row between these two rows.
         * @protected
         */
        protected getSpacerRowHeight_(_prev: Row, _next: Row): number;
        /**
         * Calculate the centerline of an element in a rendered row.
         * This base implementation puts the centerline at the middle of the row
         * vertically, with no special cases.  You will likely need extra logic to
         * handle (at minimum) top and bottom rows.
         * @param {!Row} row The row containing the element.
         * @param {!Measurable} elem The element to place.
         * @return {number} The desired centerline of the given element, as an offset
         *     from the top left of the block.
         * @protected
         */
        protected getElemCenterline_(row: Row, elem: Measurable): number;
        /**
         * Record final position information on elements on the given row, for use in
         * drawing.  At minimum this records xPos and centerline on each element.
         * @param {!Row} row The row containing the elements.
         * @protected
         */
        protected recordElemPositions_(row: Row): void;
        /**
         * Make any final changes to the rendering information object.  In particular,
         * store the y position of each row, and record the height of the full block.
         * @protected
         */
        protected finalize_(): void;
    }
    import { BlockSvg } from "block_svg";
    import { Renderer } from "renderers/common/renderer";
    import { ConstantProvider } from "renderers/common/constants";
    import { OutputConnection } from "renderers/measurables/output_connection";
    import { Row } from "renderers/measurables/row";
    import { InputRow } from "renderers/measurables/input_row";
    import { Icon } from "renderers/measurables/icon";
    import { TopRow } from "renderers/measurables/top_row";
    import { BottomRow } from "renderers/measurables/bottom_row";
    import { Input } from "input";
    import { Measurable } from "renderers/measurables/base";
    import { SpacerRow } from "renderers/measurables/spacer_row";
}
declare module "renderers/common/debugger" {
    export class Debug {
        /**
         * An object that renders rectangles and dots for debugging rendering code.
         * @param {!ConstantProvider} constants The renderer's
         *     constants.
         * @package
         * @constructor
         * @alias Blockly.blockRendering.Debug
         */
        constructor(constants: ConstantProvider);
        /**
         * An array of SVG elements that have been created by this object.
         * @type {Array<!SVGElement>}
         * @private
         */
        private debugElements_;
        /**
         * The SVG root of the block that is being rendered.  Debug elements will
         * be attached to this root.
         * @type {SVGElement}
         * @private
         */
        private svgRoot_;
        /**
         * The renderer's constant provider.
         * @type {!ConstantProvider}
         * @private
         */
        private constants_;
        /**
         * Remove all elements the this object created on the last pass.
         * @package
         */
        clearElems(): void;
        /**
         * Draw a debug rectangle for a spacer (empty) row.
         * @param {!Row} row The row to render.
         * @param {number} cursorY The y position of the top of the row.
         * @param {boolean} isRtl Whether the block is rendered RTL.
         * @package
         */
        drawSpacerRow(row: Row, cursorY: number, isRtl: boolean): void;
        /**
         * Draw a debug rectangle for a horizontal spacer.
         * @param {!InRowSpacer} elem The spacer to render.
         * @param {number} rowHeight The height of the container row.
         * @param {boolean} isRtl Whether the block is rendered RTL.
         * @package
         */
        drawSpacerElem(elem: InRowSpacer, rowHeight: number, isRtl: boolean): void;
        /**
         * Draw a debug rectangle for an in-row element.
         * @param {!Measurable} elem The element to render.
         * @param {boolean} isRtl Whether the block is rendered RTL.
         * @package
         */
        drawRenderedElem(elem: Measurable, isRtl: boolean): void;
        /**
         * Draw a circle at the location of the given connection.  Inputs and outputs
         * share the same colors, as do previous and next.  When positioned correctly
         * a connected pair will look like a bullseye.
         * @param {RenderedConnection} conn The connection to circle.
         * @suppress {visibility} Suppress visibility of conn.offsetInBlock_ since this
         *     is a debug module.
         * @package
         */
        drawConnection(conn: RenderedConnection): void;
        /**
         * Draw a debug rectangle for a non-empty row.
         * @param {!Row} row The non-empty row to render.
         * @param {number} cursorY The y position of the top of the row.
         * @param {boolean} isRtl Whether the block is rendered RTL.
         * @package
         */
        drawRenderedRow(row: Row, cursorY: number, isRtl: boolean): void;
        /**
         * Draw debug rectangles for a non-empty row and all of its subcomponents.
         * @param {!Row} row The non-empty row to render.
         * @param {number} cursorY The y position of the top of the row.
         * @param {boolean} isRtl Whether the block is rendered RTL.
         * @package
         */
        drawRowWithElements(row: Row, cursorY: number, isRtl: boolean): void;
        /**
         * Draw a debug rectangle around the entire block.
         * @param {!RenderInfo} info Rendering information about
         *     the block to debug.
         * @package
         */
        drawBoundingBox(info: RenderInfo): void;
        /**
         * Do all of the work to draw debug information for the whole block.
         * @param {!BlockSvg} block The block to draw debug information for.
         * @param {!RenderInfo} info Rendering information about
         *     the block to debug.
         * @package
         */
        drawDebug(block: BlockSvg, info: RenderInfo): void;
        randomColor_: string;
        /**
         * Show a debug filter to highlight that a block has been rendered.
         * @param {!SVGElement} svgPath The block's SVG path.
         * @package
         */
        drawRender(svgPath: SVGElement): void;
    }
    export namespace Debug {
        const config: {
            [x: string]: boolean;
        };
    }
    import { Row } from "renderers/measurables/row";
    import { InRowSpacer } from "renderers/measurables/in_row_spacer";
    import { Measurable } from "renderers/measurables/base";
    import { RenderedConnection } from "rendered_connection";
    import { RenderInfo } from "renderers/common/info";
    import { BlockSvg } from "block_svg";
    import { ConstantProvider } from "renderers/common/constants";
}
declare module "renderers/common/block_rendering" {
    /**
     * Returns whether the debugger is turned on.
     * @return {boolean} Whether the debugger is turned on.
     * @alias Blockly.blockRendering.isDebuggerEnabled
     * @package
     */
    export function isDebuggerEnabled(): boolean;
    /**
     * Registers a new renderer.
     * @param {string} name The name of the renderer.
     * @param {!Function} rendererClass The new renderer class
     *     to register.
     * @throws {Error} if a renderer with the same name has already been registered.
     */
    export function register(name: string, rendererClass: Function): void;
    /**
     * Unregisters the renderer registered with the given name.
     * @param {string} name The name of the renderer.
     * @alias Blockly.blockRendering.unregister
     */
    export function unregister(name: string): void;
    /**
     * Turn on the blocks debugger.
     * @package
     * @alias Blockly.blockRendering.startDebugger
     */
    export function startDebugger(): void;
    /**
     * Turn off the blocks debugger.
     * @package
     * @alias Blockly.blockRendering.stopDebugger
     */
    export function stopDebugger(): void;
    /**
     * Initialize anything needed for rendering (constants, etc).
     * @param {!string} name Name of the renderer to initialize.
     * @param {!Theme} theme The workspace theme object.
     * @param {Object=} opt_rendererOverrides Rendering constant overrides.
     * @return {!Renderer} The new instance of a renderer.
     *     Already initialized.
     * @package
     * @alias Blockly.blockRendering.init
     */
    export function init(name: string, theme: Theme, opt_rendererOverrides?: any | undefined): Renderer;
    import { BottomRow } from "renderers/measurables/bottom_row";
    import { Connection } from "renderers/measurables/connection";
    import { ConstantProvider } from "renderers/common/constants";
    import { Debug } from "renderers/common/debugger";
    import { Drawer } from "renderers/common/drawer";
    import { ExternalValueInput } from "renderers/measurables/external_value_input";
    import { Field } from "renderers/measurables/field";
    import { Hat } from "renderers/measurables/hat";
    import { Icon } from "renderers/measurables/icon";
    import { InRowSpacer } from "renderers/measurables/in_row_spacer";
    import { InlineInput } from "renderers/measurables/inline_input";
    import { InputConnection } from "renderers/measurables/input_connection";
    import { InputRow } from "renderers/measurables/input_row";
    import { IPathObject } from "renderers/common/i_path_object";
    import { JaggedEdge } from "renderers/measurables/jagged_edge";
    import { MarkerSvg } from "renderers/common/marker_svg";
    import { Measurable } from "renderers/measurables/base";
    import { NextConnection } from "renderers/measurables/next_connection";
    import { OutputConnection } from "renderers/measurables/output_connection";
    import { PathObject } from "renderers/common/path_object";
    import { PreviousConnection } from "renderers/measurables/previous_connection";
    import { Renderer } from "renderers/common/renderer";
    import { RenderInfo } from "renderers/common/info";
    import { RoundCorner } from "renderers/measurables/round_corner";
    import { Row } from "renderers/measurables/row";
    import { SpacerRow } from "renderers/measurables/spacer_row";
    import { SquareCorner } from "renderers/measurables/square_corner";
    import { StatementInput } from "renderers/measurables/statement_input";
    import { TopRow } from "renderers/measurables/top_row";
    import { Types } from "renderers/measurables/types";
    import * as debug from "renderers/common/debug";
    import { Theme } from "theme";
    export { BottomRow, Connection, ConstantProvider, Debug, Drawer, ExternalValueInput, Field, Hat, Icon, InRowSpacer, InlineInput, InputConnection, InputRow, IPathObject, JaggedEdge, MarkerSvg, Measurable, NextConnection, OutputConnection, PathObject, PreviousConnection, Renderer, RenderInfo, RoundCorner, Row, SpacerRow, SquareCorner, StatementInput, TopRow, Types, debug };
}
declare module "events/events_bubble_open" {
    /**
     * Class for a bubble open event.
     * @param {BlockSvg} opt_block The associated block. Undefined for a
     *    blank event.
     * @param {boolean=} opt_isOpen Whether the bubble is opening (false if
     *    closing). Undefined for a blank event.
     * @param {string=} opt_bubbleType The type of bubble. One of 'mutator',
     *     'comment'
     *    or 'warning'. Undefined for a blank event.
     * @extends {UiBase}
     * @constructor
     * @alias Blockly.Events.BubbleOpen
     */
    export class BubbleOpen {
        constructor(opt_block: any, opt_isOpen: any, opt_bubbleType: any);
        blockId: any;
        /**
         * Whether the bubble is opening (false if closing).
         * @type {boolean|undefined}
         */
        isOpen: boolean | undefined;
        /**
         * The type of bubble. One of 'mutator', 'comment', or 'warning'.
         * @type {string|undefined}
         */
        bubbleType: string | undefined;
        /**
         * Encode the event as JSON.
         * @return {!Object} JSON representation.
         */
        toJson(): any;
        /**
         * Decode the JSON event.
         * @param {!Object} json JSON representation.
         */
        fromJson(json: any): void;
        /**
         * Type of this event.
         * @type {string}
         */
        type: string;
    }
}
declare module "mutator" {
    export class Mutator extends Icon {
        /**
         * Reconnect an block to a mutated input.
         * @param {Connection} connectionChild Connection on child block.
         * @param {!Block} block Parent block.
         * @param {string} inputName Name of input on parent block.
         * @return {boolean} True iff a reconnection was made, false otherwise.
         */
        static reconnect(connectionChild: Connection, block: Block, inputName: string): boolean;
        /**
         * Get the parent workspace of a workspace that is inside a mutator, taking into
         * account whether it is a flyout.
         * @param {Workspace} workspace The workspace that is inside a mutator.
         * @return {?Workspace} The mutator's parent workspace or null.
         * @public
         */
        public static findParentWs(workspace: Workspace): Workspace | null;
        /**
         * Class for a mutator dialog.
         * @param {!Array<string>} quarkNames List of names of sub-blocks for flyout.
         * @extends {Icon}
         * @constructor
         * @alias Blockly.Mutator
         */
        constructor(quarkNames: Array<string>);
        quarkNames_: string[];
        /**
         * Set the block this mutator is associated with.
         * @param {!BlockSvg} block The block associated with this mutator.
         * @package
         */
        setBlock(block: BlockSvg): void;
        block_: BlockSvg;
        /**
         * Returns the workspace inside this mutator icon's bubble.
         * @return {?WorkspaceSvg} The workspace inside this mutator icon's
         *     bubble or null if the mutator isn't open.
         * @package
         */
        getWorkspace(): WorkspaceSvg | null;
        /**
         * Draw the mutator icon.
         * @param {!Element} group The icon group.
         * @protected
         */
        protected drawIcon_(group: Element): void;
        /**
         * Clicking on the icon toggles if the mutator bubble is visible.
         * Disable if block is uneditable.
         * @param {!Event} e Mouse click event.
         * @protected
         * @override
         */
        protected override iconClick_(e: Event): void;
        /**
         * Create the editor for the mutator's bubble.
         * @return {!SVGElement} The top-level node of the editor.
         * @private
         */
        private createEditor_;
        svgDialog_: SVGSVGElement;
        workspace_: WorkspaceSvg | null;
        /**
         * Add or remove the UI indicating if this icon may be clicked or not.
         */
        updateEditable(): void;
        /**
         * Resize the bubble to match the size of the workspace.
         * @private
         */
        private resizeBubble_;
        workspaceWidth_: number;
        workspaceHeight_: number;
        /**
         * A method handler for when the bubble is moved.
         * @private
         */
        private onBubbleMove_;
        /**
         * Show or hide the mutator bubble.
         * @param {boolean} visible True if the bubble should be visible.
         */
        setVisible(visible: boolean): void;
        bubble_: Bubble;
        rootBlock_: BlockSvg;
        sourceListener_: () => void;
        /**
         * Fired whenever a change is made to the mutator's workspace.
         * @param {!Abstract} e Custom data for event.
         * @private
         */
        private workspaceChanged_;
        /**
         * Updates the source block when the mutator's blocks are changed.
         * Bump down any block that's too high.
         * @private
         */
        private updateWorkspace_;
        /**
         * Dispose of this mutator.
         */
        dispose(): void;
        /**
         * Update the styles on all blocks in the mutator.
         * @public
         */
        public updateBlockStyle(): void;
    }
    import { BlockSvg } from "block_svg";
    import { WorkspaceSvg } from "workspace_svg";
    import { Bubble } from "bubble";
    import { Connection } from "connection";
    import { Block } from "block";
    import { Workspace } from "workspace";
    import { Icon } from "icon";
}
declare module "extensions" {
    export namespace TEST_ONLY {
        export { allExtensions };
    }
    /**
     * The set of all registered extensions, keyed by extension name/id.
     * @private
     */
    const allExtensions: any;
    /**
     * Registers a new extension function. Extensions are functions that help
     * initialize blocks, usually adding dynamic behavior such as onchange
     * handlers and mutators. These are applied using Block.applyExtension(), or
     * the JSON "extensions" array attribute.
     * @param {string} name The name of this extension.
     * @param {Function} initFn The function to initialize an extended block.
     * @throws {Error} if the extension name is empty, the extension is already
     *     registered, or extensionFn is not a function.
     * @alias Blockly.Extensions.register
     */
    export function register(name: string, initFn: Function): void;
    /**
     * Registers a new extension function that adds all key/value of mixinObj.
     * @param {string} name The name of this extension.
     * @param {!Object} mixinObj The values to mix in.
     * @throws {Error} if the extension name is empty or the extension is already
     *     registered.
     * @alias Blockly.Extensions.registerMixin
     */
    export function registerMixin(name: string, mixinObj: any): void;
    /**
     * Registers a new extension function that adds a mutator to the block.
     * At register time this performs some basic sanity checks on the mutator.
     * The wrapper may also add a mutator dialog to the block, if both compose and
     * decompose are defined on the mixin.
     * @param {string} name The name of this mutator extension.
     * @param {!Object} mixinObj The values to mix in.
     * @param {(function())=} opt_helperFn An optional function to apply after
     *     mixing in the object.
     * @param {!Array<string>=} opt_blockList A list of blocks to appear in the
     *     flyout of the mutator dialog.
     * @throws {Error} if the mutation is invalid or can't be applied to the block.
     * @alias Blockly.Extensions.registerMutator
     */
    export function registerMutator(name: string, mixinObj: any, opt_helperFn?: (() => any) | undefined, opt_blockList?: Array<string> | undefined): void;
    /**
     * Unregisters the extension registered with the given name.
     * @param {string} name The name of the extension to unregister.
     * @alias Blockly.Extensions.unregister
     */
    export function unregister(name: string): void;
    /**
     * Returns whether an extension is registered with the given name.
     * @param {string} name The name of the extension to check for.
     * @return {boolean} True if the extension is registered.  False if it is
     *     not registered.
     * @alias Blockly.Extensions.isRegistered
     */
    export function isRegistered(name: string): boolean;
    /**
     * Applies an extension method to a block. This should only be called during
     * block construction.
     * @param {string} name The name of the extension.
     * @param {!Block} block The block to apply the named extension to.
     * @param {boolean} isMutator True if this extension defines a mutator.
     * @throws {Error} if the extension is not found.
     * @alias Blockly.Extensions.apply
     */
    export function apply(name: string, block: Block, isMutator: boolean): void;
    /**
     * Calls a function after the page has loaded, possibly immediately.
     * @param {function()} fn Function to run.
     * @throws Error Will throw if no global document can be found (e.g., Node.js).
     * @package
     */
    export function runAfterPageLoad(fn: () => any): void;
    /**
     * Builds an extension function that will map a dropdown value to a tooltip
     * string.
     *
     * This method includes multiple checks to ensure tooltips, dropdown options,
     * and message references are aligned. This aims to catch errors as early as
     * possible, without requiring developers to manually test tooltips under each
     * option. After the page is loaded, each tooltip text string will be checked
     * for matching message keys in the internationalized string table. Deferring
     * this until the page is loaded decouples loading dependencies. Later, upon
     * loading the first block of any given type, the extension will validate every
     * dropdown option has a matching tooltip in the lookupTable.  Errors are
     * reported as warnings in the console, and are never fatal.
     * @param {string} dropdownName The name of the field whose value is the key
     *     to the lookup table.
     * @param {!Object<string, string>} lookupTable The table of field values to
     *     tooltip text.
     * @return {!Function} The extension function.
     * @alias Blockly.Extensions.buildTooltipForDropdown
     */
    export function buildTooltipForDropdown(dropdownName: string, lookupTable: {
        [x: string]: string;
    }): Function;
    /**
     * Builds an extension function that will install a dynamic tooltip. The
     * tooltip message should include the string '%1' and that string will be
     * replaced with the text of the named field.
     * @param {string} msgTemplate The template form to of the message text, with
     *     %1 placeholder.
     * @param {string} fieldName The field with the replacement text.
     * @return {!Function} The extension function.
     * @alias Blockly.Extensions.buildTooltipWithFieldText
     */
    export function buildTooltipWithFieldText(msgTemplate: string, fieldName: string): Function;
    import { Block } from "block";
    export {};
}
declare module "utils/keycodes" {
    /**
     * *
     */
    export type KeyCodes = number;
    export namespace KeyCodes {
        const WIN_KEY_FF_LINUX: number;
        const MAC_ENTER: number;
        const BACKSPACE: number;
        const TAB: number;
        const NUM_CENTER: number;
        const ENTER: number;
        const SHIFT: number;
        const CTRL: number;
        const ALT: number;
        const PAUSE: number;
        const CAPS_LOCK: number;
        const ESC: number;
        const SPACE: number;
        const PAGE_UP: number;
        const PAGE_DOWN: number;
        const END: number;
        const HOME: number;
        const LEFT: number;
        const UP: number;
        const RIGHT: number;
        const DOWN: number;
        const PLUS_SIGN: number;
        const PRINT_SCREEN: number;
        const INSERT: number;
        const DELETE: number;
        const ZERO: number;
        const ONE: number;
        const TWO: number;
        const THREE: number;
        const FOUR: number;
        const FIVE: number;
        const SIX: number;
        const SEVEN: number;
        const EIGHT: number;
        const NINE: number;
        const FF_SEMICOLON: number;
        const FF_EQUALS: number;
        const FF_DASH: number;
        const FF_HASH: number;
        const QUESTION_MARK: number;
        const AT_SIGN: number;
        const A: number;
        const B: number;
        const C: number;
        const D: number;
        const E: number;
        const F: number;
        const G: number;
        const H: number;
        const I: number;
        const J: number;
        const K: number;
        const L: number;
        const M: number;
        const N: number;
        const O: number;
        const P: number;
        const Q: number;
        const R: number;
        const S: number;
        const T: number;
        const U: number;
        const V: number;
        const W: number;
        const X: number;
        const Y: number;
        const Z: number;
        const META: number;
        const WIN_KEY_RIGHT: number;
        const CONTEXT_MENU: number;
        const NUM_ZERO: number;
        const NUM_ONE: number;
        const NUM_TWO: number;
        const NUM_THREE: number;
        const NUM_FOUR: number;
        const NUM_FIVE: number;
        const NUM_SIX: number;
        const NUM_SEVEN: number;
        const NUM_EIGHT: number;
        const NUM_NINE: number;
        const NUM_MULTIPLY: number;
        const NUM_PLUS: number;
        const NUM_MINUS: number;
        const NUM_PERIOD: number;
        const NUM_DIVISION: number;
        const F1: number;
        const F2: number;
        const F3: number;
        const F4: number;
        const F5: number;
        const F6: number;
        const F7: number;
        const F8: number;
        const F9: number;
        const F10: number;
        const F11: number;
        const F12: number;
        const NUMLOCK: number;
        const SCROLL_LOCK: number;
        const FIRST_MEDIA_KEY: number;
        const LAST_MEDIA_KEY: number;
        const SEMICOLON: number;
        const DASH: number;
        const EQUALS: number;
        const COMMA: number;
        const PERIOD: number;
        const SLASH: number;
        const APOSTROPHE: number;
        const TILDE: number;
        const SINGLE_QUOTE: number;
        const OPEN_SQUARE_BRACKET: number;
        const BACKSLASH: number;
        const CLOSE_SQUARE_BRACKET: number;
        const WIN_KEY: number;
        const MAC_FF_META: number;
        const MAC_WK_CMD_LEFT: number;
        const MAC_WK_CMD_RIGHT: number;
        const WIN_IME: number;
        const VK_NONAME: number;
        const PHANTOM: number;
    }
}
declare module "utils" {
    import * as aria from "utils/aria";
    import * as colorUtils from "utils/color";
    import { Coordinate } from "utils/coordinate";
    import * as deprecation from "utils/deprecation";
    import * as dom from "utils/dom";
    import * as idGenerator from "utils/idgenerator";
    import { KeyCodes } from "utils/keycodes";
    import * as math from "utils/math";
    import { Metrics } from "utils/metrics";
    import * as object from "utils/object";
    import * as parsing from "utils/parsing";
    import { Rect } from "utils/rect";
    import { Size } from "utils/size";
    import * as stringUtils from "utils/string";
    import * as style from "utils/style";
    import { Svg } from "utils/svg";
    import * as svgPaths from "utils/svg_paths";
    import * as svgMath from "utils/svg_math";
    import * as toolbox from "utils/toolbox";
    import * as userAgent from "utils/useragent";
    import * as xmlUtils from "utils/xml";
    /**
     * Halts the propagation of the event without doing anything else.
     * @param {!Event} e An event.
     * @deprecated
     * @alias Blockly.utils.noEvent
     */
    export function noEvent(e: Event): void;
    /**
     * Returns true if this event is targeting a text input widget?
     * @param {!Event} e An event.
     * @return {boolean} True if text input.
     * @deprecated Use Blockly.browserEvents.isTargetInput instead.
     * @alias Blockly.utils.isTargetInput
     */
    export function isTargetInput(e: Event): boolean;
    /**
     * Return the coordinates of the top-left corner of this element relative to
     * its parent.  Only for SVG elements and children (e.g. rect, g, path).
     * @param {!Element} element SVG element to find the coordinates of.
     * @return {!Coordinate} Object with .x and .y properties.
     * @deprecated
     * @alias Blockly.utils.getRelativeXY
     */
    export function getRelativeXY(element: Element): Coordinate;
    /**
     * Return the coordinates of the top-left corner of this element relative to
     * the div Blockly was injected into.
     * @param {!Element} element SVG element to find the coordinates of. If this is
     *     not a child of the div Blockly was injected into, the behaviour is
     *     undefined.
     * @return {!Coordinate} Object with .x and .y properties.
     * @deprecated
     * @alias Blockly.utils.getInjectionDivXY_
     */
    function getInjectionDivXY(element: Element): Coordinate;
    /**
     * Returns true this event is a right-click.
     * @param {!Event} e Mouse event.
     * @return {boolean} True if right-click.
     * @deprecated Use Blockly.browserEvents.isRightButton instead.
     * @alias Blockly.utils.isRightButton
     */
    export function isRightButton(e: Event): boolean;
    /**
     * Returns the converted coordinates of the given mouse event.
     * The origin (0,0) is the top-left corner of the Blockly SVG.
     * @param {!Event} e Mouse event.
     * @param {!Element} svg SVG element.
     * @param {?SVGMatrix} matrix Inverted screen CTM to use.
     * @return {!SVGPoint} Object with .x and .y properties.
     * @deprecated Use Blockly.browserEvents.mouseToSvg instead;
     * @alias Blockly.utils.mouseToSvg
     */
    export function mouseToSvg(e: Event, svg: Element, matrix: SVGMatrix | null): SVGPoint;
    /**
     * Returns the scroll delta of a mouse event in pixel units.
     * @param {!Event} e Mouse event.
     * @return {{x: number, y: number}} Scroll delta object with .x and .y
     *    properties.
     * @deprecated Use Blockly.browserEvents.getScrollDeltaPixels instead.
     * @alias Blockly.utils.getScrollDeltaPixels
     */
    export function getScrollDeltaPixels(e: Event): {
        x: number;
        y: number;
    };
    /**
     * Parse a string with any number of interpolation tokens (%1, %2, ...).
     * It will also replace string table references (e.g., %{bky_my_msg} and
     * %{BKY_MY_MSG} will both be replaced with the value in
     * Msg['MY_MSG']). Percentage sign characters '%' may be self-escaped
     * (e.g., '%%').
     * @param {string} message Text which might contain string table references and
     *     interpolation tokens.
     * @return {!Array<string|number>} Array of strings and numbers.
     * @deprecated
     * @alias Blockly.utils.tokenizeInterpolation
     */
    export function tokenizeInterpolation(message: string): Array<string | number>;
    /**
     * Replaces string table references in a message, if the message is a string.
     * For example, "%{bky_my_msg}" and "%{BKY_MY_MSG}" will both be replaced with
     * the value in Msg['MY_MSG'].
     * @param {string|?} message Message, which may be a string that contains
     *     string table references.
     * @return {string} String with message references replaced.
     * @deprecated
     * @alias Blockly.utils.replaceMessageReferences
     */
    export function replaceMessageReferences(message: string | unknown): string;
    /**
     * Validates that any %{MSG_KEY} references in the message refer to keys of
     * the Msg string table.
     * @param {string} message Text which might contain string table references.
     * @return {boolean} True if all message references have matching values.
     *     Otherwise, false.
     * @deprecated
     * @alias Blockly.utils.checkMessageReferences
     */
    export function checkMessageReferences(message: string): boolean;
    /**
     * Generate a unique ID.
     * @return {string} A globally unique ID string.
     * @deprecated Use Blockly.utils.idGenerator.genUid instead.
     * @alias Blockly.utils.genUid
     */
    export function genUid(): string;
    /**
     * Check if 3D transforms are supported by adding an element
     * and attempting to set the property.
     * @return {boolean} True if 3D transforms are supported.
     * @deprecated
     * @alias Blockly.utils.is3dSupported
     */
    export function is3dSupported(): boolean;
    /**
     * Get the position of the current viewport in window coordinates.  This takes
     * scroll into account.
     * @return {!Rect} An object containing window width, height, and
     *     scroll position in window coordinates.
     * @alias Blockly.utils.getViewportBBox
     * @deprecated
     * @package
     */
    export function getViewportBBox(): Rect;
    /**
     * Removes the first occurrence of a particular value from an array.
     * @param {!Array} arr Array from which to remove value.
     * @param {*} value Value to remove.
     * @return {boolean} True if an element was removed.
     * @alias Blockly.utils.arrayRemove
     * @deprecated
     * @package
     */
    export function arrayRemove(arr: any[], value: any): boolean;
    /**
     * Gets the document scroll distance as a coordinate object.
     * Copied from Closure's goog.dom.getDocumentScroll.
     * @return {!Coordinate} Object with values 'x' and 'y'.
     * @deprecated
     * @alias Blockly.utils.getDocumentScroll
     */
    export function getDocumentScroll(): Coordinate;
    /**
     * Get a map of all the block's descendants mapping their type to the number of
     *    children with that type.
     * @param {!Block} block The block to map.
     * @param {boolean=} opt_stripFollowing Optionally ignore all following
     *    statements (blocks that are not inside a value or statement input
     *    of the block).
     * @return {!Object} Map of types to type counts for descendants of the bock.
     * @deprecated
     * @alias Blockly.utils.getBlockTypeCounts
     */
    export function getBlockTypeCounts(block: Block, opt_stripFollowing?: boolean | undefined): any;
    /**
     * Converts screen coordinates to workspace coordinates.
     * @param {!WorkspaceSvg} ws The workspace to find the coordinates on.
     * @param {!Coordinate} screenCoordinates The screen coordinates to
     * be converted to workspace coordinates
     * @deprecated
     * @return {!Coordinate} The workspace coordinates.
     */
    export function screenToWsCoordinates(ws: WorkspaceSvg, screenCoordinates: Coordinate): Coordinate;
    /**
     * Parse a block color from a number or string, as provided in a block
     * definition.
     * @param {number|string} color HSV hue value (0 to 360), #RRGGBB string,
     *     or a message reference string pointing to one of those two values.
     * @return {{hue: ?number, hex: string}} An object containing the color as
     *     a #RRGGBB string, and the hue if the input was an HSV hue value.
     * @throws {Error} If the color cannot be parsed.
     * @deprecated
     * @alias Blockly.utils.parseBlockColor
     */
    export function parseBlockColor(color: number | string): {
        hue: number | null;
        hex: string;
    };
    /**
     * Calls a function after the page has loaded, possibly immediately.
     * @param {function()} fn Function to run.
     * @throws Error Will throw if no global document can be found (e.g., Node.js).
     * @deprecated
     * @alias Blockly.utils.runAfterPageLoad
     */
    export function runAfterPageLoad(fn: () => any): void;
    import { Block } from "block";
    import { WorkspaceSvg } from "workspace_svg";
    export { aria, colorUtils as color, Coordinate, deprecation, dom, idGenerator, KeyCodes, math, Metrics, object, parsing, Rect, Size, stringUtils as string, style, Svg, svgPaths, svgMath, toolbox, userAgent, xmlUtils as xml, getInjectionDivXY as getInjectionDivXY_ };
}
declare module "contextmenu_registry" {
    /**
     * Class for the registry of context menu items. This is intended to be a
     * singleton. You should not create a new instance, and only access this class
     * from ContextMenuRegistry.registry.
     * @constructor
     * @private
     * @alias Blockly.ContextMenuRegistry
     */
    export class ContextMenuRegistry {
        /**
         * Registry of all registered RegistryItems, keyed by ID.
         * @type {!Object<string, !ContextMenuRegistry.RegistryItem>}
         * @private
         */
        private registry_;
        /**
         * Registers a RegistryItem.
         * @param {!ContextMenuRegistry.RegistryItem} item Context menu item to
         *     register.
         * @throws {Error} if an item with the given ID already exists.
         */
        register(item: ContextMenuRegistry.RegistryItem): void;
        /**
         * Unregisters a RegistryItem with the given ID.
         * @param {string} id The ID of the RegistryItem to remove.
         * @throws {Error} if an item with the given ID does not exist.
         */
        unregister(id: string): void;
        /**
         * @param {string} id The ID of the RegistryItem to get.
         * @return {?ContextMenuRegistry.RegistryItem} RegistryItem or null if not found
         */
        getItem(id: string): ContextMenuRegistry.RegistryItem | null;
        /**
         * Gets the valid context menu options for the given scope type (e.g. block or
         * workspace) and scope. Blocks are only shown if the preconditionFn shows they
         * should not be hidden.
         * @param {!ContextMenuRegistry.ScopeType} scopeType Type of scope where menu
         *     should be shown (e.g. on a block or on a workspace)
         * @param {!ContextMenuRegistry.Scope} scope Current scope of context menu
         *     (i.e., the exact workspace or block being clicked on)
         * @return {!Array<!ContextMenuRegistry.ContextMenuOption>} the list of
         *     ContextMenuOptions
         */
        getContextMenuOptions(scopeType: ContextMenuRegistry.ScopeType, scope: ContextMenuRegistry.Scope): Array<ContextMenuRegistry.ContextMenuOption>;
    }
    export namespace ContextMenuRegistry {
        namespace ScopeType {
            const BLOCK: string;
            const WORKSPACE: string;
        }
        /**
         * Where this menu item should be rendered. If the menu item should be rendered
         * in multiple scopes, e.g. on both a block and a workspace, it should be
         * registered for each scope.
         */
        type ScopeType = string;
        const registry: ContextMenuRegistry | null;
        /**
         * The actual workspace/block where the menu is being rendered. This is passed
         * to callback and displayText functions that depend on this information.
         */
        type Scope = {
            block: (BlockSvg | undefined);
            workspace: (WorkspaceSvg | undefined);
        };
        /**
         * A menu item as entered in the registry.
         */
        type RegistryItem = {
            callback: (arg0: ContextMenuRegistry.Scope) => any;
            scopeType: ContextMenuRegistry.ScopeType;
            displayText: (((arg0: ContextMenuRegistry.Scope) => string) | string);
            preconditionFn: (arg0: ContextMenuRegistry.Scope) => string;
            weight: number;
            id: string;
        };
        /**
         * A menu item as presented to contextmenu.js.
         */
        type ContextMenuOption = {
            text: string;
            enabled: boolean;
            callback: (arg0: ContextMenuRegistry.Scope) => any;
            scope: ContextMenuRegistry.Scope;
            weight: number;
        };
    }
    import { BlockSvg } from "block_svg";
    import { WorkspaceSvg } from "workspace_svg";
}
declare module "dropdowndiv" {
    /**
     * Class for drop-down div.
     * @constructor
     * @package
     * @alias Blockly.DropDownDiv
     */
    export class DropDownDiv {
        /**
         * Create and insert the DOM element for this div.
         * @package
         */
        static createDom(): void;
        /**
         * Set an element to maintain bounds within. Drop-downs will appear
         * within the box of this element if possible.
         * @param {?Element} boundsElement Element to bind drop-down to.
         */
        static setBoundsElement(boundsElement: Element | null): void;
        /**
         * Provide the div for inserting content into the drop-down.
         * @return {!Element} Div to populate with content.
         */
        static getContentDiv(): Element;
        /**
         * Clear the content of the drop-down.
         */
        static clearContent(): void;
        /**
         * Set the color for the drop-down.
         * @param {string} backgroundColor Any CSS color for the background.
         * @param {string} borderColor Any CSS color for the border.
         */
        static setColor(backgroundColor: string, borderColor: string): void;
        /**
         * Shortcut to show and place the drop-down with positioning determined
         * by a particular block. The primary position will be below the block,
         * and the secondary position above the block. Drop-down will be
         * constrained to the block's workspace.
         * @param {!Field} field The field showing the drop-down.
         * @param {!BlockSvg} block Block to position the drop-down around.
         * @param {Function=} opt_onHide Optional callback for when the drop-down is
         *   hidden.
         * @param {number=} opt_secondaryYOffset Optional Y offset for above-block
         *   positioning.
         * @return {boolean} True if the menu rendered below block; false if above.
         */
        static showPositionedByBlock(field: Field, block: BlockSvg, opt_onHide?: Function | undefined, opt_secondaryYOffset?: number | undefined): boolean;
        /**
         * Shortcut to show and place the drop-down with positioning determined
         * by a particular field. The primary position will be below the field,
         * and the secondary position above the field. Drop-down will be
         * constrained to the block's workspace.
         * @param {!Field} field The field to position the dropdown against.
         * @param {Function=} opt_onHide Optional callback for when the drop-down is
         *   hidden.
         * @param {number=} opt_secondaryYOffset Optional Y offset for above-block
         *   positioning.
         * @return {boolean} True if the menu rendered below block; false if above.
         */
        static showPositionedByField(field: Field, opt_onHide?: Function | undefined, opt_secondaryYOffset?: number | undefined): boolean;
        /**
         * Show and place the drop-down.
         * The drop-down is placed with an absolute "origin point" (x, y) - i.e.,
         * the arrow will point at this origin and box will positioned below or above
         * it.  If we can maintain the container bounds at the primary point, the arrow
         * will point there, and the container will be positioned below it.
         * If we can't maintain the container bounds at the primary point, fall-back to
         * the secondary point and position above.
         * @param {?Object} owner The object showing the drop-down
         * @param {boolean} rtl Right-to-left (true) or left-to-right (false).
         * @param {number} primaryX Desired origin point x, in absolute px.
         * @param {number} primaryY Desired origin point y, in absolute px.
         * @param {number} secondaryX Secondary/alternative origin point x, in absolute
         *     px.
         * @param {number} secondaryY Secondary/alternative origin point y, in absolute
         *     px.
         * @param {Function=} opt_onHide Optional callback for when the drop-down is
         *     hidden.
         * @return {boolean} True if the menu rendered at the primary origin point.
         * @package
         */
        static show(owner: any | null, rtl: boolean, primaryX: number, primaryY: number, secondaryX: number, secondaryY: number, opt_onHide?: Function | undefined): boolean;
        /**
         * Get the x positions for the left side of the DropDownDiv and the arrow,
         * accounting for the bounds of the workspace.
         * @param {number} sourceX Desired origin point x, in absolute px.
         * @param {number} boundsLeft The left edge of the bounding element, in
         *    absolute px.
         * @param {number} boundsRight The right edge of the bounding element, in
         *    absolute px.
         * @param {number} divWidth The width of the div in px.
         * @return {{divX: number, arrowX: number}} An object containing metrics for
         *    the x positions of the left side of the DropDownDiv and the arrow.
         * @package
         */
        static getPositionX(sourceX: number, boundsLeft: number, boundsRight: number, divWidth: number): {
            divX: number;
            arrowX: number;
        };
        /**
         * Is the container visible?
         * @return {boolean} True if visible.
         */
        static isVisible(): boolean;
        /**
         * Hide the menu only if it is owned by the provided object.
         * @param {?Object} owner Object which must be owning the drop-down to hide.
         * @param {boolean=} opt_withoutAnimation True if we should hide the dropdown
         *     without animating.
         * @return {boolean} True if hidden.
         */
        static hideIfOwner(owner: any | null, opt_withoutAnimation?: boolean | undefined): boolean;
        /**
         * Hide the menu, triggering animation.
         */
        static hide(): void;
        /**
         * Hide the menu, without animation.
         */
        static hideWithoutAnimation(): void;
        /**
         * Repositions the dropdownDiv on window resize. If it doesn't know how to
         * calculate the new position, it will just hide it instead.
         * @package
         */
        static repositionForWindowResize(): void;
    }
    export namespace DropDownDiv {
        export const ARROW_SIZE: number;
        export const BORDER_SIZE: number;
        export const ARROW_HORIZONTAL_PADDING: number;
        export const PADDING_Y: number;
        export const ANIMATION_TIME: number;
        export const animateOutTimer_: number | null;
        export const onHide_: Function | null;
        export const rendererClassName_: string;
        export const themeClassName_: string;
        export const DIV_: Element;
        export const content_: Element;
        export const arrow_: Element;
        export const boundsElement_: Element | null;
        export const owner_: any | null;
        export const positionToField_: boolean | null;
        export { internal as TEST_ONLY };
        /**
         * Dropdown bounds info object used to encapsulate sizing information about a
         * bounding element (bounding box and width/height).
         */
        export type BoundsInfo = {
            top: number;
            left: number;
            bottom: number;
            right: number;
            width: number;
            height: number;
        };
        /**
         * Dropdown position metrics.
         */
        export type PositionMetrics = {
            initialX: number;
            initialY: number;
            finalX: number;
            finalY: number;
            arrowX: number | null;
            arrowY: number | null;
            arrowAtTop: boolean | null;
            arrowVisible: boolean;
        };
    }
    import { Field } from "field";
    import { BlockSvg } from "block_svg";
    namespace internal {
        /**
         * Get sizing info about the bounding element.
         * @return {!DropDownDiv.BoundsInfo} An object containing size
         *     information about the bounding element (bounding box and width/height).
         */
        function getBoundsInfo(): DropDownDiv.BoundsInfo;
        /**
         * Helper to position the drop-down and the arrow, maintaining bounds.
         * See explanation of origin points in DropDownDiv.show.
         * @param {number} primaryX Desired origin point x, in absolute px.
         * @param {number} primaryY Desired origin point y, in absolute px.
         * @param {number} secondaryX Secondary/alternative origin point x,
         *     in absolute px.
         * @param {number} secondaryY Secondary/alternative origin point y,
         *     in absolute px.
         * @return {!DropDownDiv.PositionMetrics} Various final metrics,
         *     including rendered positions for drop-down and arrow.
         */
        function getPositionMetrics(primaryX: number, primaryY: number, secondaryX: number, secondaryY: number): DropDownDiv.PositionMetrics;
    }
    export {};
}
declare module "flyout_button" {
    export class FlyoutButton {
        /**
         * Class for a button in the flyout.
         * @param {!WorkspaceSvg} workspace The workspace in which to place this
         *     button.
         * @param {!WorkspaceSvg} targetWorkspace The flyout's target workspace.
         * @param {!toolbox.ButtonOrLabelInfo} json
         *    The JSON specifying the label/button.
         * @param {boolean} isLabel Whether this button should be styled as a label.
         * @constructor
         * @package
         * @alias Blockly.FlyoutButton
         */
        constructor(workspace: WorkspaceSvg, targetWorkspace: WorkspaceSvg, json: toolbox.ButtonOrLabelInfo, isLabel: boolean);
        /**
         * @type {!WorkspaceSvg}
         * @private
         */
        private workspace_;
        /**
         * @type {!WorkspaceSvg}
         * @private
         */
        private targetWorkspace_;
        /**
         * @type {string}
         * @private
         */
        private text_;
        /**
         * @type {!Coordinate}
         * @private
         */
        private position_;
        /**
         * Whether this button should be styled as a label.
         * @type {boolean}
         * @private
         */
        private isLabel_;
        /**
         * The key to the function called when this button is clicked.
         * @type {string}
         * @private
         */
        private callbackKey_;
        /**
         * If specified, a CSS class to add to this button.
         * @type {?string}
         * @private
         */
        private cssClass_;
        /**
         * Mouse up event data.
         * @type {?browserEvents.Data}
         * @private
         */
        private onMouseUpWrapper_;
        /**
         * The JSON specifying the label / button.
         * @type {!toolbox.ButtonOrLabelInfo}
         */
        info: toolbox.ButtonOrLabelInfo;
        /**
         * Create the button elements.
         * @return {!SVGElement} The button's SVG group.
         */
        createDom(): SVGElement;
        svgGroup_: SVGGElement;
        svgText_: SVGTextElement;
        width: number;
        height: number;
        /**
         * Correctly position the flyout button and make it visible.
         */
        show(): void;
        /**
         * Update SVG attributes to match internal state.
         * @private
         */
        private updateTransform_;
        /**
         * Move the button to the given x, y coordinates.
         * @param {number} x The new x coordinate.
         * @param {number} y The new y coordinate.
         */
        moveTo(x: number, y: number): void;
        /**
         * @return {boolean} Whether or not the button is a label.
         */
        isLabel(): boolean;
        /**
         * Location of the button.
         * @return {!Coordinate} x, y coordinates.
         * @package
         */
        getPosition(): Coordinate;
        /**
         * @return {string} Text of the button.
         */
        getButtonText(): string;
        /**
         * Get the button's target workspace.
         * @return {!WorkspaceSvg} The target workspace of the flyout where this
         *     button resides.
         */
        getTargetWorkspace(): WorkspaceSvg;
        /**
         * Dispose of this button.
         */
        dispose(): void;
        /**
         * Do something when the button is clicked.
         * @param {!Event} e Mouse up event.
         * @private
         */
        private onMouseUp_;
    }
    export namespace FlyoutButton {
        const MARGIN_X: number;
        const MARGIN_Y: number;
    }
    import * as toolbox from "utils/toolbox";
    import { Coordinate } from "utils/coordinate";
    import { WorkspaceSvg } from "workspace_svg";
}
declare module "grid" {
    /**
     * Class for a workspace's grid.
     * @param {!SVGElement} pattern The grid's SVG pattern, created during
     *     injection.
     * @param {!Object} options A dictionary of normalized options for the grid.
     *     See grid documentation:
     *     https://developers.google.com/blockly/guides/configure/web/grid
     * @constructor
     * @alias Blockly.Grid
     */
    export class Grid {
        /**
         * Create the DOM for the grid described by options.
         * @param {string} rnd A random ID to append to the pattern's ID.
         * @param {!Object} gridOptions The object containing grid configuration.
         * @param {!SVGElement} defs The root SVG element for this workspace's defs.
         * @return {!SVGElement} The SVG element for the grid pattern.
         * @package
         */
        static createDom(rnd: string, gridOptions: any, defs: SVGElement): SVGElement;
        constructor(pattern: any, options: any);
        /**
         * The grid's SVG pattern, created during injection.
         * @type {!SVGElement}
         * @private
         */
        private gridPattern_;
        /**
         * The spacing of the grid lines (in px).
         * @type {number}
         * @private
         */
        private spacing_;
        /**
         * How long the grid lines should be (in px).
         * @type {number}
         * @private
         */
        private length_;
        /**
         * The horizontal grid line, if it exists.
         * @type {SVGElement}
         * @private
         */
        private line1_;
        /**
         * The vertical grid line, if it exists.
         * @type {SVGElement}
         * @private
         */
        private line2_;
        /**
         * Whether blocks should snap to the grid.
         * @type {boolean}
         * @private
         */
        private snapToGrid_;
        /**
         * Dispose of this grid and unlink from the DOM.
         * @package
         * @suppress {checkTypes}
         */
        dispose(): void;
        /**
         * Whether blocks should snap to the grid, based on the initial configuration.
         * @return {boolean} True if blocks should snap, false otherwise.
         * @package
         */
        shouldSnap(): boolean;
        /**
         * Get the spacing of the grid points (in px).
         * @return {number} The spacing of the grid points.
         * @package
         */
        getSpacing(): number;
        /**
         * Get the ID of the pattern element, which should be randomized to avoid
         * conflicts with other Blockly instances on the page.
         * @return {string} The pattern ID.
         * @package
         */
        getPatternId(): string;
        /**
         * Update the grid with a new scale.
         * @param {number} scale The new workspace scale.
         * @package
         */
        update(scale: number): void;
        scale_: number;
        /**
         * Set the attributes on one of the lines in the grid.  Use this to update the
         * length and stroke width of the grid lines.
         * @param {SVGElement} line Which line to update.
         * @param {number} width The new stroke size (in px).
         * @param {number} x1 The new x start position of the line (in px).
         * @param {number} x2 The new x end position of the line (in px).
         * @param {number} y1 The new y start position of the line (in px).
         * @param {number} y2 The new y end position of the line (in px).
         * @private
         */
        private setLineAttributes_;
        /**
         * Move the grid to a new x and y position, and make sure that change is
         * visible.
         * @param {number} x The new x position of the grid (in px).
         * @param {number} y The new y position of the grid (in px).
         * @package
         */
        moveTo(x: number, y: number): void;
    }
}
declare module "interfaces/i_bounded_element" {
    /**
     * A bounded element interface.
     * @interface
     * @alias Blockly.IBoundedElement
     */
    export class IBoundedElement {
    }
}
declare module "marker_manager" {
    export class MarkerManager {
        /**
         * Class to manage the multiple markers and the cursor on a workspace.
         * @param {!WorkspaceSvg} workspace The workspace for the marker manager.
         * @constructor
         * @alias Blockly.MarkerManager
         * @package
         */
        constructor(workspace: WorkspaceSvg);
        /**
         * The cursor.
         * @type {?Cursor}
         * @private
         */
        private cursor_;
        /**
         * The cursor's SVG element.
         * @type {?SVGElement}
         * @private
         */
        private cursorSvg_;
        /**
         * The map of markers for the workspace.
         * @type {!Object<string, !Marker>}
         * @private
         */
        private markers_;
        /**
         * The workspace this marker manager is associated with.
         * @type {!WorkspaceSvg}
         * @private
         */
        private workspace_;
        /**
         * Register the marker by adding it to the map of markers.
         * @param {string} id A unique identifier for the marker.
         * @param {!Marker} marker The marker to register.
         */
        registerMarker(id: string, marker: Marker): void;
        /**
         * Unregister the marker by removing it from the map of markers.
         * @param {string} id The ID of the marker to unregister.
         */
        unregisterMarker(id: string): void;
        /**
         * Get the cursor for the workspace.
         * @return {?Cursor} The cursor for this workspace.
         */
        getCursor(): Cursor | null;
        /**
         * Get a single marker that corresponds to the given ID.
         * @param {string} id A unique identifier for the marker.
         * @return {?Marker} The marker that corresponds to the given ID,
         *     or null if none exists.
         */
        getMarker(id: string): Marker | null;
        /**
         * Sets the cursor and initializes the drawer for use with keyboard navigation.
         * @param {Cursor} cursor The cursor used to move around this workspace.
         */
        setCursor(cursor: Cursor): void;
        /**
         * Add the cursor SVG to this workspace SVG group.
         * @param {?SVGElement} cursorSvg The SVG root of the cursor to be added to the
         *     workspace SVG group.
         * @package
         */
        setCursorSvg(cursorSvg: SVGElement | null): void;
        /**
         * Add the marker SVG to this workspaces SVG group.
         * @param {?SVGElement} markerSvg The SVG root of the marker to be added to the
         *     workspace SVG group.
         * @package
         */
        setMarkerSvg(markerSvg: SVGElement | null): void;
        markerSvg_: any;
        /**
         * Redraw the attached cursor SVG if needed.
         * @package
         */
        updateMarkers(): void;
        /**
         * Dispose of the marker manager.
         * Go through and delete all markers associated with this marker manager.
         * @suppress {checkTypes}
         * @package
         */
        dispose(): void;
    }
    export namespace MarkerManager {
        const LOCAL_MARKER: string;
    }
    import { Marker } from "keyboard_nav/marker";
    import { Cursor } from "keyboard_nav/cursor";
    import { WorkspaceSvg } from "workspace_svg";
}
declare module "scrollbar_pair" {
    export class ScrollbarPair {
        /**
         * Class for a pair of scrollbars.  Horizontal and vertical.
         * @param {!WorkspaceSvg} workspace Workspace to bind the scrollbars to.
         * @param {boolean=} addHorizontal Whether to add a horizontal scrollbar.
         *    Defaults to true.
         * @param {boolean=} addVertical Whether to add a vertical scrollbar. Defaults
         *    to true.
         * @param {string=} opt_class A class to be applied to these scrollbars.
         * @param {number=} opt_margin The margin to apply to these scrollbars.
         * @constructor
         * @alias Blockly.ScrollbarPair
         */
        constructor(workspace: WorkspaceSvg, addHorizontal?: boolean | undefined, addVertical?: boolean | undefined, opt_class?: string | undefined, opt_margin?: number | undefined);
        /**
         * The workspace this scrollbar pair is bound to.
         * @type {!WorkspaceSvg}
         * @private
         */
        private workspace_;
        hScroll: Scrollbar;
        vScroll: Scrollbar;
        corner_: SVGRectElement;
        /**
         * Previously recorded metrics from the workspace.
         * @type {?Metrics}
         * @private
         */
        private oldHostMetrics_;
        /**
         * Dispose of this pair of scrollbars.
         * Unlink from all DOM elements to prevent memory leaks.
         * @suppress {checkTypes}
         */
        dispose(): void;
        /**
         * Recalculate both of the scrollbars' locations and lengths.
         * Also reposition the corner rectangle.
         */
        resize(): void;
        /**
         * Returns whether scrolling horizontally is enabled.
         * @return {boolean} True if horizontal scroll is enabled.
         */
        canScrollHorizontally(): boolean;
        /**
         * Returns whether scrolling vertically is enabled.
         * @return {boolean} True if vertical scroll is enabled.
         */
        canScrollVertically(): boolean;
        /**
         * Record the origin of the workspace that the scrollbar is in, in pixels
         * relative to the injection div origin. This is for times when the scrollbar is
         * used in an object whose origin isn't the same as the main workspace
         * (e.g. in a flyout.)
         * @param {number} x The x coordinate of the scrollbar's origin, in CSS pixels.
         * @param {number} y The y coordinate of the scrollbar's origin, in CSS pixels.
         * @package
         */
        setOrigin(x: number, y: number): void;
        /**
         * Set the handles of both scrollbars.
         * @param {number} x The horizontal content displacement, relative to the view
         *    in pixels.
         * @param {number} y The vertical content displacement, relative to the view in
         *    pixels.
         * @param {boolean} updateMetrics Whether to update metrics on this set call.
         *    Defaults to true.
         */
        set(x: number, y: number, updateMetrics: boolean): void;
        /**
         * Set the handle of the horizontal scrollbar to be at a certain position in
         *    CSS pixels relative to its parents.
         * @param {number} x Horizontal scroll value.
         */
        setX(x: number): void;
        /**
         * Set the handle of the vertical scrollbar to be at a certain position in
         *    CSS pixels relative to its parents.
         * @param {number} y Vertical scroll value.
         */
        setY(y: number): void;
        /**
         * Set whether this scrollbar's container is visible.
         * @param {boolean} visible Whether the container is visible.
         */
        setContainerVisible(visible: boolean): void;
        /**
         * If any of the scrollbars are visible. Non-paired scrollbars may disappear
         * when they aren't needed.
         * @return {boolean} True if visible.
         */
        isVisible(): boolean;
        /**
         * Recalculates the scrollbars' locations within their path and length.
         * This should be called when the contents of the workspace have changed.
         * @param {!Metrics} hostMetrics A data structure describing all
         *     the required dimensions, possibly fetched from the host object.
         */
        resizeContent(hostMetrics: Metrics): void;
        /**
         * Recalculates the scrollbars' locations on the screen and path length.
         * This should be called when the layout or size of the window has changed.
         * @param {!Metrics} hostMetrics A data structure describing all
         *     the required dimensions, possibly fetched from the host object.
         */
        resizeView(hostMetrics: Metrics): void;
    }
    import { Scrollbar } from "scrollbar";
    import { Metrics } from "utils/metrics";
    import { WorkspaceSvg } from "workspace_svg";
}
declare module "theme_manager" {
    export class ThemeManager {
        /**
         * Class for storing and updating a workspace's theme and UI components.
         * @param {!WorkspaceSvg} workspace The main workspace.
         * @param {!Theme} theme The workspace theme.
         * @constructor
         * @package
         * @alias Blockly.ThemeManager
         */
        constructor(workspace: WorkspaceSvg, theme: Theme);
        /**
         * The main workspace.
         * @type {!WorkspaceSvg}
         * @private
         */
        private workspace_;
        /**
         * The Blockly theme to use.
         * @type {!Theme}
         * @private
         */
        private theme_;
        /**
         * A list of workspaces that are subscribed to this theme.
         * @type {!Array<Workspace>}
         * @private
         */
        private subscribedWorkspaces_;
        /**
         * A map of subscribed UI components, keyed by component name.
         * @type {!Object<string, !Array<!ThemeManager.Component>>}
         * @private
         */
        private componentDB_;
        /**
         * Get the workspace theme.
         * @return {!Theme} The workspace theme.
         * @package
         */
        getTheme(): Theme;
        /**
         * Set the workspace theme, and refresh the workspace and all components.
         * @param {!Theme} theme The workspace theme.
         * @package
         */
        setTheme(theme: Theme): void;
        /**
         * Subscribe a workspace to changes to the selected theme.  If a new theme is
         * set, the workspace is called to refresh its blocks.
         * @param {!Workspace} workspace The workspace to subscribe.
         * @package
         */
        subscribeWorkspace(workspace: Workspace): void;
        /**
         * Unsubscribe a workspace to changes to the selected theme.
         * @param {!Workspace} workspace The workspace to unsubscribe.
         * @package
         */
        unsubscribeWorkspace(workspace: Workspace): void;
        /**
         * Subscribe an element to changes to the selected theme.  If a new theme is
         * selected, the element's style is refreshed with the new theme's style.
         * @param {!Element} element The element to subscribe.
         * @param {string} componentName The name used to identify the component. This
         *     must be the same name used to configure the style in the Theme object.
         * @param {string} propertyName The inline style property name to update.
         * @package
         */
        subscribe(element: Element, componentName: string, propertyName: string): void;
        /**
         * Unsubscribe an element to changes to the selected theme.
         * @param {Element} element The element to unsubscribe.
         * @package
         */
        unsubscribe(element: Element): void;
        /**
         * Dispose of this theme manager.
         * @package
         * @suppress {checkTypes}
         */
        dispose(): void;
        owner_: any;
    }
    export namespace ThemeManager {
        /**
         * A Blockly UI component type.
         */
        type Component = {
            element: Element;
            propertyName: string;
        };
    }
    import { Theme } from "theme";
    import { Workspace } from "workspace";
    import { WorkspaceSvg } from "workspace_svg";
}
declare module "touch_gesture" {
    export class TouchGesture {
        /**
         * Class for one gesture.
         * @param {!Event} e The event that kicked off this gesture.
         * @param {!WorkspaceSvg} creatorWorkspace The workspace that created
         *     this gesture and has a reference to it.
         * @extends {Gesture}
         * @constructor
         * @alias Blockly.TouchGesture
         */
        constructor(e: Event, creatorWorkspace: WorkspaceSvg);
        /**
         * Boolean for whether or not this gesture is a multi-touch gesture.
         * @type {boolean}
         * @private
         */
        private isMultiTouch_;
        /**
         * A map of cached points used for tracking multi-touch gestures.
         * @type {!Object<number|string, Coordinate>}
         * @private
         */
        private cachedPoints_;
        /**
         * This is the ratio between the starting distance between the touch points
         * and the most recent distance between the touch points.
         * Scales between 0 and 1 mean the most recent zoom was a zoom out.
         * Scales above 1.0 mean the most recent zoom was a zoom in.
         * @type {number}
         * @private
         */
        private previousScale_;
        /**
         * The starting distance between two touch points.
         * @type {number}
         * @private
         */
        private startDistance_;
        /**
         * A handle to use to unbind the second touch start or pointer down listener
         * at the end of a drag.
         * Opaque data returned from Blockly.bindEventWithChecks_.
         * @type {?browserEvents.Data}
         * @private
         */
        private onStartWrapper_;
        /**
         * Boolean for whether or not the workspace supports pinch-zoom.
         * @type {?boolean}
         * @private
         */
        private isPinchZoomEnabled_;
        /**
         * Start a gesture: update the workspace to indicate that a gesture is in
         * progress and bind mousemove and mouseup handlers.
         * @param {!Event} e A mouse down, touch start or pointer down event.
         * @package
         */
        doStart(e: Event): void;
        /**
         * Bind gesture events.
         * Overriding the gesture definition of this function, binding the same
         * functions for onMoveWrapper_ and onUpWrapper_ but passing
         * opt_noCaptureIdentifier.
         * In addition, binding a second mouse down event to detect multi-touch events.
         * @param {!Event} e A mouse down or touch start event.
         * @package
         */
        bindMouseEvents(e: Event): void;
        onMoveWrapper_: any[][];
        onUpWrapper_: any[][];
        /**
         * Handle a mouse down, touch start, or pointer down event.
         * @param {!Event} e A mouse down, touch start, or pointer down event.
         * @package
         */
        handleStart(e: Event): void;
        /**
         * Handle a mouse move, touch move, or pointer move event.
         * @param {!Event} e A mouse move, touch move, or pointer move event.
         * @package
         */
        handleMove(e: Event): void;
        /**
         * Handle a mouse up, touch end, or pointer up event.
         * @param {!Event} e A mouse up, touch end, or pointer up event.
         * @package
         */
        handleUp(e: Event): void;
        /**
         * Whether this gesture is part of a multi-touch gesture.
         * @return {boolean} Whether this gesture is part of a multi-touch gesture.
         * @package
         */
        isMultiTouch(): boolean;
        /**
         * Sever all links from this object.
         * @package
         */
        dispose(): void;
        /**
         * Handle a touch start or pointer down event and keep track of current
         * pointers.
         * @param {!Event} e A touch start, or pointer down event.
         * @package
         */
        handleTouchStart(e: Event): void;
        /**
         * Handle a touch move or pointer move event and zoom in/out if two pointers
         * are on the screen.
         * @param {!Event} e A touch move, or pointer move event.
         * @package
         */
        handleTouchMove(e: Event): void;
        /**
         * Handle pinch zoom gesture.
         * @param {!Event} e A touch move, or pointer move event.
         * @private
         */
        private handlePinch_;
        /**
         * Handle a touch end or pointer end event and end the gesture.
         * @param {!Event} e A touch end, or pointer end event.
         * @package
         */
        handleTouchEnd(e: Event): void;
        /**
         * Helper function returning the current touch point coordinate.
         * @param {!Event} e A touch or pointer event.
         * @return {?Coordinate} The current touch point coordinate
         * @package
         */
        getTouchPoint(e: Event): Coordinate | null;
    }
    export namespace TouchGesture {
        const ZOOM_IN_MULTIPLIER: number;
        const ZOOM_OUT_MULTIPLIER: number;
    }
    import { Coordinate } from "utils/coordinate";
    import { WorkspaceSvg } from "workspace_svg";
}
declare module "positionable_helpers" {
    /**
     * *
     */
    export type verticalPosition = number;
    export namespace verticalPosition {
        const TOP: number;
        const BOTTOM: number;
    }
    /**
     * *
     */
    export type horizontalPosition = number;
    export namespace horizontalPosition {
        const LEFT: number;
        const RIGHT: number;
    }
    /**
     * An object defining a horizontal and vertical positioning.
     */
    export type Position = {
        horizontal: horizontalPosition;
        vertical: verticalPosition;
    };
    /**
     * An object defining a horizontal and vertical positioning.
     * @typedef {{
     *   horizontal: !horizontalPosition,
     *   vertical: !verticalPosition
     * }}
     * @alias Blockly.uiPosition.Position
     * @package
     */
    export let Position: any;
    /**
     * *
     */
    export type bumpDirection = number;
    export namespace bumpDirection {
        const UP: number;
        const DOWN: number;
    }
    /**
     * Returns a rectangle representing reasonable position for where to place a UI
     * element of the specified size given the restraints and locations of the
     * scrollbars. This method does not take into account any already placed UI
     * elements.
     * @param {!Position} position The starting
     *    horizontal and vertical position.
     * @param {!Size} size the size of the UI element to get a start
     *    position for.
     * @param {number} horizontalPadding The horizontal padding to use.
     * @param {number} verticalPadding The vertical padding to use.
     * @param {!MetricsManager.UiMetrics} metrics The workspace UI metrics.
     * @param {!WorkspaceSvg} workspace The workspace.
     * @return {!Rect} The suggested start position.
     * @alias Blockly.uiPosition.getStartPositionRect
     * @package
     */
    export function getStartPositionRect(position: Position, size: Size, horizontalPadding: number, verticalPadding: number, metrics: MetricsManager.UiMetrics, workspace: WorkspaceSvg): Rect;
    /**
     * Returns a corner position that is on the opposite side of the workspace from
     * the toolbox.
     * If in horizontal orientation, defaults to the bottom corner. If in vertical
     * orientation, defaults to the right corner.
     * @param {!WorkspaceSvg} workspace The workspace.
     * @param {!MetricsManager.UiMetrics} metrics The workspace metrics.
     * @return {!Position} The suggested corner position.
     * @alias Blockly.uiPosition.getCornerOppositeToolbox
     * @package
     */
    export function getCornerOppositeToolbox(workspace: WorkspaceSvg, metrics: MetricsManager.UiMetrics): Position;
    /**
     * Returns a position Rect based on a starting position that is bumped
     * so that it doesn't intersect with any of the provided savedPositions. This
     * method does not check that the bumped position is still within bounds.
     * @param {!Rect} startRect The starting position to use.
     * @param {number} margin The margin to use between elements when bumping.
     * @param {!bumpDirection} bumpDir The direction to bump if there is a collision
     *    with an existing UI element.
     * @param {!Array<!Rect>} savedPositions List of rectangles that
     *    represent the positions of UI elements already placed.
     * @return {!Rect} The suggested position rectangle.
     * @alias Blockly.uiPosition.bumpPositionRect
     * @package
     */
    export function bumpPositionRect(startRect: Rect, margin: number, bumpDir: bumpDirection, savedPositions: Array<Rect>): Rect;
    import { Size } from "utils/size";
    import { MetricsManager } from "metrics_manager";
    import { WorkspaceSvg } from "workspace_svg";
    import { Rect } from "utils/rect";
}
declare module "drag_target" {
    /**
     * Abstract class for a component with custom behaviour when a block or bubble
     * is dragged over or dropped on top of it.
     * @implements {IDragTarget}
     * @constructor
     * @alias Blockly.DragTarget
     */
    export class DragTarget implements IDragTarget {
        /**
         * Handles when a cursor with a block or bubble enters this drag target.
         * @param {!IDraggable} _dragElement The block or bubble currently being
         *   dragged.
         */
        onDragEnter(_dragElement: IDraggable): void;
        /**
         * Handles when a cursor with a block or bubble is dragged over this drag
         * target.
         * @param {!IDraggable} _dragElement The block or bubble currently being
         *   dragged.
         */
        onDragOver(_dragElement: IDraggable): void;
        /**
         * Handles when a cursor with a block or bubble exits this drag target.
         * @param {!IDraggable} _dragElement The block or bubble currently being
         *   dragged.
         */
        onDragExit(_dragElement: IDraggable): void;
        /**
         * Handles when a block or bubble is dropped on this component.
         * Should not handle delete here.
         * @param {!IDraggable} _dragElement The block or bubble currently being
         *   dragged.
         */
        onDrop(_dragElement: IDraggable): void;
        /**
         * Returns whether the provided block or bubble should not be moved after being
         * dropped on this component. If true, the element will return to where it was
         * when the drag started.
         * @param {!IDraggable} _dragElement The block or bubble currently being
         *   dragged.
         * @return {boolean} Whether the block or bubble provided should be returned to
         *     drag start.
         */
        shouldPreventMove(_dragElement: IDraggable): boolean;
    }
    import { IDragTarget } from "interfaces/i_drag_target";
    import { IDraggable } from "interfaces/i_draggable";
}
declare module "delete_area" {
    /**
     * Abstract class for a component that can delete a block or bubble that is
     * dropped on top of it.
     * @extends {DragTarget}
     * @implements {IDeleteArea}
     * @constructor
     * @alias Blockly.DeleteArea
     */
    export class DeleteArea extends DragTarget implements IDeleteArea {
        /**
         * Whether the last block or bubble dragged over this delete area would be
         * deleted if dropped on this component.
         * This property is not updated after the block or bubble is deleted.
         * @type {boolean}
         * @protected
         */
        protected wouldDelete_: boolean;
        /**
         * Returns whether the provided block or bubble would be deleted if dropped on
         * this area.
         * This method should check if the element is deletable and is always called
         * before onDragEnter/onDragOver/onDragExit.
         * @param {!IDraggable} element The block or bubble currently being
         *   dragged.
         * @param {boolean} couldConnect Whether the element could could connect to
         *     another.
         * @return {boolean} Whether the element provided would be deleted if dropped on
         *     this area.
         */
        wouldDelete(element: IDraggable, couldConnect: boolean): boolean;
        /**
         * Updates the internal wouldDelete_ state.
         * @param {boolean} wouldDelete The new value for the wouldDelete state.
         * @protected
         */
        protected updateWouldDelete_(wouldDelete: boolean): void;
    }
    import { IDeleteArea } from "interfaces/i_delete_area";
    import { IDraggable } from "interfaces/i_draggable";
    import { DragTarget } from "drag_target";
}
declare module "events/events_trashcan_open" {
    /**
     * Class for a trashcan open event.
     * @param {boolean=} opt_isOpen Whether the trashcan flyout is opening (false if
     *    opening). Undefined for a blank event.
     * @param {string=} opt_workspaceId The workspace identifier for this event.
     *    Undefined for a blank event.
     * @extends {UiBase}
     * @constructor
     * @alias Blockly.Events.TrashcanOpen
     */
    export class TrashcanOpen {
        constructor(opt_isOpen: any, opt_workspaceId: any);
        /**
         * Whether the trashcan flyout is opening (false if closing).
         * @type {boolean|undefined}
         */
        isOpen: boolean | undefined;
        /**
         * Encode the event as JSON.
         * @return {!Object} JSON representation.
         */
        toJson(): any;
        /**
         * Decode the JSON event.
         * @param {!Object} json JSON representation.
         */
        fromJson(json: any): void;
        /**
         * Type of this event.
         * @type {string}
         */
        type: string;
    }
}
declare module "trashcan" {
    export class Trashcan extends DeleteArea implements IAutoHideable, IPositionable {
        /**
         * Class for a trash can.
         * @param {!WorkspaceSvg} workspace The workspace to sit in.
         * @constructor
         * @implements {IAutoHideable}
         * @implements {IPositionable}
         * @extends {DeleteArea}
         * @alias Blockly.Trashcan
         */
        constructor(workspace: WorkspaceSvg);
        /**
         * The workspace the trashcan sits in.
         * @type {!WorkspaceSvg}
         * @private
         */
        private workspace_;
        /**
         * The unique id for this component that is used to register with the
         * ComponentManager.
         * @type {string}
         */
        id: string;
        /**
         * A list of JSON (stored as strings) representing blocks in the trashcan.
         * @type {!Array<string>}
         * @private
         */
        private contents_;
        /**
         * The trashcan flyout.
         * @type {IFlyout}
         * @package
         */
        flyout: IFlyout;
        /**
         * Create the trash can elements.
         * @return {!SVGElement} The trash can's SVG group.
         */
        createDom(): SVGElement;
        svgGroup_: SVGElement;
        svgLid_: SVGElement;
        /**
         * Initializes the trash can.
         */
        init(): void;
        initialized_: boolean;
        /**
         * Dispose of this trash can.
         * Unlink from all DOM elements to prevent memory leaks.
         * @suppress {checkTypes}
         */
        dispose(): void;
        /**
         * Whether the trashcan has contents.
         * @return {boolean} True if the trashcan has contents.
         * @private
         */
        private hasContents_;
        /**
         * Returns true if the trashcan contents-flyout is currently open.
         * @return {boolean} True if the trashcan contents-flyout is currently open.
         */
        contentsIsOpen(): boolean;
        /**
         * Opens the trashcan flyout.
         */
        openFlyout(): void;
        /**
         * Closes the trashcan flyout.
         */
        closeFlyout(): void;
        /**
         * Hides the component. Called in WorkspaceSvg.hideChaff.
         * @param {boolean} onlyClosePopups Whether only popups should be closed.
         *     Flyouts should not be closed if this is true.
         */
        autoHide(onlyClosePopups: boolean): void;
        /**
         * Empties the trashcan's contents. If the contents-flyout is currently open
         * it will be closed.
         */
        emptyContents(): void;
        /**
         * Positions the trashcan.
         * It is positioned in the opposite corner to the corner the
         * categories/toolbox starts at.
         * @param {!MetricsManager.UiMetrics} metrics The workspace metrics.
         * @param {!Array<!Rect>} savedPositions List of rectangles that
         *     are already on the workspace.
         */
        position(metrics: MetricsManager.UiMetrics, savedPositions: Array<Rect>): void;
        top_: number;
        left_: number;
        /**
         * Returns the bounding rectangle of the UI element in pixel units relative to
         * the Blockly injection div.
         * @return {?Rect} The UI elements’s bounding box. Null if
         *   bounding box should be ignored by other UI elements.
         */
        getBoundingRectangle(): Rect | null;
        /**
         * Returns the bounding rectangle of the drag target area in pixel units
         * relative to viewport.
         * @return {?Rect} The component's bounding box. Null if drag
         *   target area should be ignored.
         */
        getClientRect(): Rect | null;
        /**
         * Handles when a cursor with a block or bubble is dragged over this drag
         * target.
         * @param {!IDraggable} _dragElement The block or bubble currently being
         *   dragged.
         * @override
         */
        override onDragOver(_dragElement: IDraggable): void;
        /**
         * Handles when a cursor with a block or bubble exits this drag target.
         * @param {!IDraggable} _dragElement The block or bubble currently being
         *   dragged.
         * @override
         */
        override onDragExit(_dragElement: IDraggable): void;
        /**
         * Handles when a block or bubble is dropped on this component.
         * Should not handle delete here.
         * @param {!IDraggable} _dragElement The block or bubble currently being
         *   dragged.
         * @override
         */
        override onDrop(_dragElement: IDraggable): void;
        /**
         * Flip the lid open or shut.
         * @param {boolean} state True if open.
         * @package
         */
        setLidOpen(state: boolean): void;
        isLidOpen: any;
        /**
         * Rotate the lid open or closed by one step.  Then wait and recurse.
         * @private
         */
        private animateLid_;
        lidOpen_: number;
        lidTask_: number;
        /**
         * Set the angle of the trashcan's lid.
         * @param {number} lidAngle The angle at which to set the lid.
         * @private
         */
        private setLidAngle_;
        /**
         * Sets the minimum openness of the trashcan lid. If the lid is currently
         * closed, this will update lid's position.
         * @param {number} newMin The new minimum openness of the lid. Should be between
         *     0 and 1.
         * @private
         */
        private setMinOpenness_;
        minOpenness_: number;
        /**
         * Flip the lid shut.
         * Called externally after a drag.
         */
        closeLid(): void;
        /**
         * Inspect the contents of the trash.
         */
        click(): void;
        /**
         * Fires a UI event for trashcan flyout open or close.
         * @param {boolean} trashcanOpen Whether the flyout is opening.
         * @private
         */
        private fireUiEvent_;
        /**
         * Prevents a workspace scroll and click event if the trashcan has blocks.
         * @param {!Event} e A mouse down event.
         * @private
         */
        private blockMouseDownWhenOpenable_;
        /**
         * Indicate that the trashcan can be clicked (by opening it) if it has blocks.
         * @private
         */
        private mouseOver_;
        /**
         * Close the lid of the trashcan if it was open (Vis. it was indicating it had
         *    blocks).
         * @private
         */
        private mouseOut_;
        /**
         * Handle a BLOCK_DELETE event. Adds deleted blocks oldXml to the content array.
         * @param {!Abstract} event Workspace event.
         * @private
         */
        private onDelete_;
        /**
         * Converts JSON representing a block into text that can be stored in the
         * content array.
         * @param {!blocks.State} json A JSON representation of
         *     a block's state.
         * @return {string} Text representing the JSON, cleaned of all unnecessary
         *     attributes.
         * @private
         */
        private cleanBlockJson_;
    }
    import { IFlyout } from "interfaces/i_flyout";
    import { MetricsManager } from "metrics_manager";
    import { Rect } from "utils/rect";
    import { IDraggable } from "interfaces/i_draggable";
    import { WorkspaceSvg } from "workspace_svg";
    import { DeleteArea } from "delete_area";
    import { IAutoHideable } from "interfaces/i_autohideable";
    import { IPositionable } from "interfaces/i_positionable";
}
declare module "workspace_audio" {
    export class WorkspaceAudio {
        /**
         * Class for loading, storing, and playing audio for a workspace.
         * @param {WorkspaceSvg} parentWorkspace The parent of the workspace
         *     this audio object belongs to, or null.
         * @constructor
         * @alias Blockly.WorkspaceAudio
         */
        constructor(parentWorkspace: WorkspaceSvg);
        /**
         * The parent of the workspace this object belongs to, or null.  May be
         * checked for sounds that this object can't find.
         * @type {WorkspaceSvg}
         * @private
         */
        private parentWorkspace_;
        /**
         * Database of pre-loaded sounds.
         * @private
         */
        private SOUNDS_;
        /**
         * Dispose of this audio manager.
         * @package
         */
        dispose(): void;
        /**
         * Load an audio file.  Cache it, ready for instantaneous playing.
         * @param {!Array<string>} filenames List of file types in decreasing order of
         *   preference (i.e. increasing size).  E.g. ['media/go.mp3', 'media/go.wav']
         *   Filenames include path from Blockly's root.  File extensions matter.
         * @param {string} name Name of sound.
         */
        load(filenames: Array<string>, name: string): void;
        /**
         * Preload all the audio files so that they play quickly when asked for.
         * @package
         */
        preload(): void;
        /**
         * Play a named sound at specified volume.  If volume is not specified,
         * use full volume (1).
         * @param {string} name Name of sound.
         * @param {number=} opt_volume Volume of sound (0-1).
         */
        play(name: string, opt_volume?: number | undefined): void;
        lastSound_: Date;
    }
    import { WorkspaceSvg } from "workspace_svg";
}
declare module "events/events_selected" {
    /**
     * Class for a selected event.
     * @param {?string=} opt_oldElementId The ID of the previously selected
     *    element. Null if no element last selected. Undefined for a blank event.
     * @param {?string=} opt_newElementId The ID of the selected element. Null if no
     *    element currently selected (deselect). Undefined for a blank event.
     * @param {string=} opt_workspaceId The workspace identifier for this event.
     *    Null if no element previously selected. Undefined for a blank event.
     * @extends {UiBase}
     * @constructor
     * @alias Blockly.Events.Selected
     */
    export class Selected {
        constructor(opt_oldElementId: any, opt_newElementId: any, opt_workspaceId: any);
        /**
         * The id of the last selected element.
         * @type {?string|undefined}
         */
        oldElementId: (string | undefined) | null;
        /**
         * The id of the selected element.
         * @type {?string|undefined}
         */
        newElementId: (string | undefined) | null;
        /**
         * Encode the event as JSON.
         * @return {!Object} JSON representation.
         */
        toJson(): any;
        /**
         * Decode the JSON event.
         * @param {!Object} json JSON representation.
         */
        fromJson(json: any): void;
        /**
         * Type of this event.
         * @type {string}
         */
        type: string;
    }
}
declare module "workspace_comment_svg" {
    export class WorkspaceCommentSvg {
        /**
         * Decode an XML comment tag and create a rendered comment on the workspace.
         * @param {!Element} xmlComment XML comment element.
         * @param {!WorkspaceSvg} workspace The workspace.
         * @param {number=} opt_wsWidth The width of the workspace, which is used to
         *     position comments correctly in RTL.
         * @return {!WorkspaceCommentSvg} The created workspace comment.
         * @package
         */
        static fromXml(xmlComment: Element, workspace: WorkspaceSvg, opt_wsWidth?: number | undefined): WorkspaceCommentSvg;
        /**
         * Class for a workspace comment's SVG representation.
         * @param {!WorkspaceSvg} workspace The block's workspace.
         * @param {string} content The content of this workspace comment.
         * @param {number} height Height of the comment.
         * @param {number} width Width of the comment.
         * @param {string=} opt_id Optional ID.  Use this ID if provided, otherwise
         *     create a new ID.
         * @extends {WorkspaceComment}
         * @implements {IBoundedElement}
         * @implements {IBubble}
         * @implements {ICopyable}
         * @constructor
         * @alias Blockly.WorkspaceCommentSvg
         */
        constructor(workspace: WorkspaceSvg, content: string, height: number, width: number, opt_id?: string | undefined);
        /**
         * @type {!WorkspaceSvg}
         */
        workspace: WorkspaceSvg;
        /**
         * Mouse up event data.
         * @type {?browserEvents.Data}
         * @private
         */
        private onMouseUpWrapper_;
        /**
         * Mouse move event data.
         * @type {?browserEvents.Data}
         * @private
         */
        private onMouseMoveWrapper_;
        /**
         * @type {!SVGElement}
         * @private
         */
        private svgGroup_;
        svgRect_: SVGRectElement;
        /**
         * Whether the comment is rendered onscreen and is a part of the DOM.
         * @type {boolean}
         * @private
         */
        private rendered_;
        /**
         * Whether to move the comment to the drag surface when it is dragged.
         * True if it should move, false if it should be translated directly.
         * @type {boolean}
         * @private
         */
        private useDragSurface_;
        /**
         * Dispose of this comment.
         * @package
         */
        dispose(): void;
        /**
         * Create and initialize the SVG representation of a workspace comment.
         * May be called more than once.
         *
         * @param {boolean=} opt_noSelect Text inside text area will be selected if
         *     false
         *
         * @package
         */
        initSvg(opt_noSelect?: boolean | undefined): void;
        eventsInit_: boolean;
        /**
         * Handle a mouse-down on an SVG comment.
         * @param {!Event} e Mouse down event or touch start event.
         * @private
         */
        private pathMouseDown_;
        /**
         * Show the context menu for this workspace comment.
         * @param {!Event} e Mouse event.
         * @package
         */
        showContextMenu(e: Event): void;
        /**
         * Select this comment.  Highlight it visually.
         * @package
         */
        select(): void;
        /**
         * Unselect this comment.  Remove its highlighting.
         * @package
         */
        unselect(): void;
        /**
         * Select this comment.  Highlight it visually.
         * @package
         */
        addSelect(): void;
        /**
         * Unselect this comment.  Remove its highlighting.
         * @package
         */
        removeSelect(): void;
        /**
         * Focus this comment.  Highlight it visually.
         * @package
         */
        addFocus(): void;
        /**
         * Unfocus this comment.  Remove its highlighting.
         * @package
         */
        removeFocus(): void;
        /**
         * Return the coordinates of the top-left corner of this comment relative to
         * the drawing surface's origin (0,0), in workspace units.
         * If the comment is on the workspace, (0, 0) is the origin of the workspace
         * coordinate system.
         * This does not change with workspace scale.
         * @return {!Coordinate} Object with .x and .y properties in
         *     workspace coordinates.
         * @package
         */
        getRelativeToSurfaceXY(): Coordinate;
        xy_: Coordinate;
        /**
         * Move a comment by a relative offset.
         * @param {number} dx Horizontal offset, in workspace units.
         * @param {number} dy Vertical offset, in workspace units.
         * @package
         */
        moveBy(dx: number, dy: number): void;
        /**
         * Transforms a comment by setting the translation on the transform attribute
         * of the block's SVG.
         * @param {number} x The x coordinate of the translation in workspace units.
         * @param {number} y The y coordinate of the translation in workspace units.
         * @package
         */
        translate(x: number, y: number): void;
        /**
         * Move this comment to its workspace's drag surface, accounting for
         * positioning.  Generally should be called at the same time as
         * setDragging(true).  Does nothing if useDragSurface_ is false.
         * @package
         */
        moveToDragSurface(): void;
        /**
         * Move this comment during a drag, taking into account whether we are using a
         * drag surface to translate blocks.
         * @param {BlockDragSurfaceSvg} dragSurface The surface that carries
         *     rendered items during a drag, or null if no drag surface is in use.
         * @param {!Coordinate} newLoc The location to translate to, in
         *     workspace coordinates.
         * @package
         */
        moveDuringDrag(dragSurface: BlockDragSurfaceSvg, newLoc: Coordinate): void;
        /**
         * Move the bubble group to the specified location in workspace coordinates.
         * @param {number} x The x position to move to.
         * @param {number} y The y position to move to.
         * @package
         */
        moveTo(x: number, y: number): void;
        /**
         * Clear the comment of transform="..." attributes.
         * Used when the comment is switching from 3d to 2d transform or vice versa.
         * @private
         */
        private clearTransformAttributes_;
        /**
         * Returns the coordinates of a bounding box describing the dimensions of this
         * comment.
         * Coordinate system: workspace coordinates.
         * @return {!Rect} Object with coordinates of the bounding box.
         * @package
         */
        getBoundingRectangle(): Rect;
        /**
         * Add or remove the UI indicating if this comment is movable or not.
         * @package
         */
        updateMovable(): void;
        /**
         * Set whether this comment is movable or not.
         * @param {boolean} movable True if movable.
         * @package
         */
        setMovable(movable: boolean): void;
        /**
         * Set whether this comment is editable or not.
         * @param {boolean} editable True if editable.
         */
        setEditable(editable: boolean): void;
        /**
         * Recursively adds or removes the dragging class to this node and its children.
         * @param {boolean} adding True if adding, false if removing.
         * @package
         */
        setDragging(adding: boolean): void;
        /**
         * Return the root node of the SVG or null if none exists.
         * @return {!SVGElement} The root SVG node (probably a group).
         * @package
         */
        getSvgRoot(): SVGElement;
        /**
         * Returns this comment's text.
         * @return {string} Comment text.
         * @package
         */
        getContent(): string;
        /**
         * Set this comment's content.
         * @param {string} content Comment content.
         * @package
         */
        setContent(content: string): void;
        /**
         * Update the cursor over this comment by adding or removing a class.
         * @param {boolean} enable True if the delete cursor should be shown, false
         *     otherwise.
         * @package
         */
        setDeleteStyle(enable: boolean): void;
        /**
         * Set whether auto-layout of this bubble is enabled.  The first time a bubble
         * is shown it positions itself to not cover any blocks.  Once a user has
         * dragged it to reposition, it renders where the user put it.
         * @param {boolean} _enable True if auto-layout should be enabled, false
         *     otherwise.
         * @package
         */
        setAutoLayout(_enable: boolean): void;
        /**
         * Encode a comment subtree as XML with XY coordinates.
         * @param {boolean=} opt_noId True if the encoder should skip the comment ID.
         * @return {!Element} Tree of XML elements.
         * @package
         */
        toXmlWithXY(opt_noId?: boolean | undefined): Element;
        /**
         * Encode a comment for copying.
         * @return {!ICopyable.CopyData} Copy metadata.
         * @package
         */
        toCopyData(): ICopyable.CopyData;
        /**
         * Returns a bounding box describing the dimensions of this comment.
         * @return {!{height: number, width: number}} Object with height and width
         *     properties in workspace units.
         * @package
         */
        getHeightWidth(): {
            height: number;
            width: number;
        };
        /**
         * Renders the workspace comment.
         * @package
         */
        render(): void;
        svgHandleTarget_: SVGRectElement;
        svgRectTarget_: SVGRectElement;
        /**
         * Create the text area for the comment.
         * @return {!Element} The top-level node of the editor.
         * @private
         */
        private createEditor_;
        foreignObject_: SVGForeignObjectElement;
        textarea_: HTMLElement;
        /**
         * Add the resize icon to the DOM
         * @private
         */
        private addResizeDom_;
        resizeGroup_: SVGGElement;
        /**
         * Add the delete icon to the DOM
         * @private
         */
        private addDeleteDom_;
        deleteGroup_: SVGGElement;
        deleteIconBorder_: SVGCircleElement;
        /**
         * Handle a mouse-down on comment's resize corner.
         * @param {!Event} e Mouse down event.
         * @private
         */
        private resizeMouseDown_;
        /**
         * Handle a mouse-down on comment's delete icon.
         * @param {!Event} e Mouse down event.
         * @private
         */
        private deleteMouseDown_;
        /**
         * Handle a mouse-out on comment's delete icon.
         * @param {!Event} _e Mouse out event.
         * @private
         */
        private deleteMouseOut_;
        /**
         * Handle a mouse-up on comment's delete icon.
         * @param {!Event} e Mouse up event.
         * @private
         */
        private deleteMouseUp_;
        /**
         * Stop binding to the global mouseup and mousemove events.
         * @private
         */
        private unbindDragEvents_;
        /**
         * Handle a mouse-up event while dragging a comment's border or resize handle.
         * @param {!Event} _e Mouse up event.
         * @private
         */
        private resizeMouseUp_;
        /**
         * Resize this comment to follow the mouse.
         * @param {!Event} e Mouse move event.
         * @private
         */
        private resizeMouseMove_;
        autoLayout_: boolean;
        /**
         * Callback function triggered when the comment has resized.
         * Resize the text area accordingly.
         * @private
         */
        private resizeComment_;
        /**
         * Set size
         * @param {number} width width of the container
         * @param {number} height height of the container
         * @private
         */
        private setSize_;
        width_: number;
        height_: number;
        /**
         * Dispose of any rendered comment components.
         * @private
         */
        private disposeInternal_;
        disposed_: boolean;
        /**
         * Set the focus on the text area.
         * @package
         */
        setFocus(): void;
        focused_: boolean;
        /**
         * Remove focus from the text area.
         * @package
         */
        blurFocus(): void;
    }
    export namespace WorkspaceCommentSvg {
        const DEFAULT_SIZE: number;
        const TOP_OFFSET: number;
    }
    import { WorkspaceSvg } from "workspace_svg";
    import { Coordinate } from "utils/coordinate";
    import { BlockDragSurfaceSvg } from "block_drag_surface";
    import { Rect } from "utils/rect";
    import { ICopyable } from "interfaces/i_copyable";
}
declare module "workspace_drag_surface_svg" {
    export class WorkspaceDragSurfaceSvg {
        /**
         * Blocks are moved into this SVG during a drag, improving performance.
         * The entire SVG is translated using CSS transforms instead of SVG so the
         * blocks are never repainted during drag improving performance.
         * @param {!Element} container Containing element.
         * @constructor
         * @alias Blockly.WorkspaceDragSurfaceSvg
         */
        constructor(container: Element);
        container_: Element;
        /**
         * Create the drag surface and inject it into the container.
         */
        createDom(): void;
        /**
         * Dom structure when the workspace is being dragged. If there is no drag in
         * progress, the SVG is empty and display: none.
         * <svg class="blocklyWsDragSurface" style=transform:translate3d(...)>
         *   <g class="blocklyBlockCanvas"></g>
         *   <g class="blocklyBubbleCanvas">/g>
         * </svg>
         */
        SVG_: SVGElement;
        /**
         * Translate the entire drag surface during a drag.
         * We translate the drag surface instead of the blocks inside the surface
         * so that the browser avoids repainting the SVG.
         * Because of this, the drag coordinates must be adjusted by scale.
         * @param {number} x X translation for the entire surface
         * @param {number} y Y translation for the entire surface
         * @package
         */
        translateSurface(x: number, y: number): void;
        /**
         * Reports the surface translation in scaled workspace coordinates.
         * Use this when finishing a drag to return blocks to the correct position.
         * @return {!Coordinate} Current translation of the surface
         * @package
         */
        getSurfaceTranslation(): Coordinate;
        /**
         * Move the blockCanvas and bubbleCanvas out of the surface SVG and on to
         * newSurface.
         * @param {SVGElement} newSurface The element to put the drag surface contents
         *     into.
         * @package
         */
        clearAndHide(newSurface: SVGElement): void;
        previousSibling_: Element;
        /**
         * Set the SVG to have the block canvas and bubble canvas in it and then
         * show the surface.
         * @param {!SVGElement} blockCanvas The block canvas <g> element from the
         *     workspace.
         * @param {!SVGElement} bubbleCanvas The <g> element that contains the bubbles.
         * @param {Element} previousSibling The element to insert the block canvas and
               bubble canvas after when it goes back in the DOM at the end of a drag.
         * @param {number} width The width of the workspace SVG element.
         * @param {number} height The height of the workspace SVG element.
         * @param {number} scale The scale of the workspace being dragged.
         * @package
         */
        setContentsAndShow(blockCanvas: SVGElement, bubbleCanvas: SVGElement, previousSibling: Element, width: number, height: number, scale: number): void;
    }
    import { Coordinate } from "utils/coordinate";
}
declare module "events/events_click" {
    /**
     * Class for a click event.
     * @param {?Block=} opt_block The affected block. Null for click events
     *    that do not have an associated block (i.e. workspace click). Undefined
     *    for a blank event.
     * @param {?string=} opt_workspaceId The workspace identifier for this event.
     *    Not used if block is passed. Undefined for a blank event.
     * @param {string=} opt_targetType The type of element targeted by this click
     *    event. Undefined for a blank event.
     * @extends {UiBase}
     * @constructor
     * @alias Blockly.Events.Click
     */
    export class Click {
        constructor(opt_block: any, opt_workspaceId: any, opt_targetType: any);
        blockId: any;
        /**
         * The type of element targeted by this click event.
         * @type {string|undefined}
         */
        targetType: string | undefined;
        /**
         * Encode the event as JSON.
         * @return {!Object} JSON representation.
         */
        toJson(): any;
        /**
         * Decode the JSON event.
         * @param {!Object} json JSON representation.
         */
        fromJson(json: any): void;
        /**
         * Type of this event.
         * @type {string}
         */
        type: string;
    }
}
declare module "zoom_controls" {
    export class ZoomControls {
        /**
         * Class for a zoom controls.
         * @param {!WorkspaceSvg} workspace The workspace to sit in.
         * @constructor
         * @implements {IPositionable}
         * @alias Blockly.ZoomControls
         */
        constructor(workspace: WorkspaceSvg);
        /**
         * @type {!WorkspaceSvg}
         * @private
         */
        private workspace_;
        /**
         * The unique id for this component that is used to register with the
         * ComponentManager.
         * @type {string}
         */
        id: string;
        /**
         * A handle to use to unbind the mouse down event handler for zoom reset
         *    button. Opaque data returned from browserEvents.conditionalBind.
         * @type {?browserEvents.Data}
         * @private
         */
        private onZoomResetWrapper_;
        /**
         * A handle to use to unbind the mouse down event handler for zoom in button.
         * Opaque data returned from browserEvents.conditionalBind.
         * @type {?browserEvents.Data}
         * @private
         */
        private onZoomInWrapper_;
        /**
         * A handle to use to unbind the mouse down event handler for zoom out button.
         * Opaque data returned from browserEvents.conditionalBind.
         * @type {?browserEvents.Data}
         * @private
         */
        private onZoomOutWrapper_;
        /**
         * The zoom in svg <g> element.
         * @type {SVGGElement}
         * @private
         */
        private zoomInGroup_;
        /**
         * The zoom out svg <g> element.
         * @type {SVGGElement}
         * @private
         */
        private zoomOutGroup_;
        /**
         * The zoom reset svg <g> element.
         * @type {SVGGElement}
         * @private
         */
        private zoomResetGroup_;
        /**
         * Create the zoom controls.
         * @return {!SVGElement} The zoom controls SVG group.
         */
        createDom(): SVGElement;
        svgGroup_: SVGElement;
        /**
         * Initializes the zoom controls.
         */
        init(): void;
        initialized_: boolean;
        /**
         * Disposes of this zoom controls.
         * Unlink from all DOM elements to prevent memory leaks.
         */
        dispose(): void;
        /**
         * Returns the bounding rectangle of the UI element in pixel units relative to
         * the Blockly injection div.
         * @return {?Rect} The UI elements’s bounding box. Null if
         *   bounding box should be ignored by other UI elements.
         */
        getBoundingRectangle(): Rect | null;
        /**
         * Positions the zoom controls.
         * It is positioned in the opposite corner to the corner the
         * categories/toolbox starts at.
         * @param {!MetricsManager.UiMetrics} metrics The workspace metrics.
         * @param {!Array<!Rect>} savedPositions List of rectangles that
         *     are already on the workspace.
         */
        position(metrics: MetricsManager.UiMetrics, savedPositions: Array<Rect>): void;
        top_: number;
        left_: number;
        /**
         * Create the zoom in icon and its event handler.
         * @param {string} rnd The random string to use as a suffix in the clip path's
         *     ID.  These IDs must be unique in case there are multiple Blockly
         *     instances on the same page.
         * @private
         */
        private createZoomOutSvg_;
        /**
         * Create the zoom out icon and its event handler.
         * @param {string} rnd The random string to use as a suffix in the clip path's
         *     ID.  These IDs must be unique in case there are multiple Blockly
         *     instances on the same page.
         * @private
         */
        private createZoomInSvg_;
        /**
         * Handles a mouse down event on the zoom in or zoom out buttons on the
         *    workspace.
         * @param {number} amount Amount of zooming. Negative amount values zoom out,
         *    and positive amount values zoom in.
         * @param {!Event} e A mouse down event.
         * @private
         */
        private zoom_;
        /**
         * Create the zoom reset icon and its event handler.
         * @param {string} rnd The random string to use as a suffix in the clip path's
         *     ID.  These IDs must be unique in case there are multiple Blockly
         *     instances on the same page.
         * @private
         */
        private createZoomResetSvg_;
        /**
         * Handles a mouse down event on the reset zoom button on the workspace.
         * @param {!Event} e A mouse down event.
         * @private
         */
        private resetZoom_;
        /**
         * Fires a zoom control UI event.
         * @private
         */
        private fireZoomEvent_;
        /**
         * Width of the zoom controls.
         * @type {number}
         * @const
         * @private
         */
        private WIDTH_;
        /**
         * Height of each zoom control.
         * @type {number}
         * @const
         * @private
         */
        private HEIGHT_;
        /**
         * Small spacing used between the zoom in and out control, in pixels.
         * @type {number}
         * @const
         * @private
         */
        private SMALL_SPACING_;
        /**
         * Large spacing used between the zoom in and reset control, in pixels.
         * @type {number}
         * @const
         * @private
         */
        private LARGE_SPACING_;
        /**
         * Distance between zoom controls and bottom or top edge of workspace.
         * @type {number}
         * @const
         * @private
         */
        private MARGIN_VERTICAL_;
        /**
         * Distance between zoom controls and right or left edge of workspace.
         * @type {number}
         * @private
         */
        private MARGIN_HORIZONTAL_;
    }
    import { Rect } from "utils/rect";
    import { MetricsManager } from "metrics_manager";
    import { WorkspaceSvg } from "workspace_svg";
}
declare module "events/events_block_create" {
    export class BlockCreate {
        /**
         * Class for a block creation event.
         * @param {!Block=} opt_block The created block.  Undefined for a blank
         *     event.
         * @extends {BlockBase}
         * @constructor
         * @alias Blockly.Events.BlockCreate
         */
        constructor(opt_block?: Block | undefined);
        recordUndo: boolean;
        xml: Element | DocumentFragment;
        ids: string[];
        /**
         * JSON representation of the block that was just created.
         * @type {!blocks.State}
         */
        json: any;
        /**
         * Encode the event as JSON.
         * @return {!Object} JSON representation.
         */
        toJson(): any;
        /**
         * Decode the JSON event.
         * @param {!Object} json JSON representation.
         */
        fromJson(json: any): void;
        /**
         * Run a creation event.
         * @param {boolean} forward True if run forward, false if run backward (undo).
         */
        run(forward: boolean): void;
        /**
         * Type of this event.
         * @type {string}
         */
        type: string;
    }
    import { Block } from "block";
}
declare module "events/events_theme_change" {
    /**
     * Class for a theme change event.
     * @param {string=} opt_themeName The theme name. Undefined for a blank event.
     * @param {string=} opt_workspaceId The workspace identifier for this event.
     *    event. Undefined for a blank event.
     * @extends {UiBase}
     * @constructor
     * @alias Blockly.Events.ThemeChange
     */
    export class ThemeChange {
        constructor(opt_themeName: any, opt_workspaceId: any);
        /**
         * The theme name.
         * @type {string|undefined}
         */
        themeName: string | undefined;
        /**
         * Encode the event as JSON.
         * @return {!Object} JSON representation.
         */
        toJson(): any;
        /**
         * Decode the JSON event.
         * @param {!Object} json JSON representation.
         */
        fromJson(json: any): void;
        /**
         * Type of this event.
         * @type {string}
         */
        type: string;
    }
}
declare module "events/events_viewport" {
    /**
     * Class for a viewport change event.
     * @param {number=} opt_top Top-edge of the visible portion of the workspace,
     *    relative to the workspace origin. Undefined for a blank event.
     * @param {number=} opt_left Left-edge of the visible portion of the workspace,
     *    relative to the workspace origin. Undefined for a blank event.
     * @param {number=} opt_scale The scale of the workspace. Undefined for a blank
     *    event.
     * @param {string=} opt_workspaceId The workspace identifier for this event.
     *    Undefined for a blank event.
     * @param {number=} opt_oldScale The old scale of the workspace. Undefined for a
     *    blank event.
     * @extends {UiBase}
     * @constructor
     * @alias Blockly.Events.ViewportChange
     */
    export class ViewportChange {
        constructor(opt_top: any, opt_left: any, opt_scale: any, opt_workspaceId: any, opt_oldScale: any);
        /**
         * Top-edge of the visible portion of the workspace, relative to the workspace
         * origin.
         * @type {number|undefined}
         */
        viewTop: number | undefined;
        /**
         * Left-edge of the visible portion of the workspace, relative to the
         * workspace origin.
         * @type {number|undefined}
         */
        viewLeft: number | undefined;
        /**
         * The scale of the workspace.
         * @type {number|undefined}
         */
        scale: number | undefined;
        /**
         * The old scale of the workspace.
         * @type {number|undefined}
         */
        oldScale: number | undefined;
        /**
         * Encode the event as JSON.
         * @return {!Object} JSON representation.
         */
        toJson(): any;
        /**
         * Decode the JSON event.
         * @param {!Object} json JSON representation.
         */
        fromJson(json: any): void;
        /**
         * Type of this event.
         * @type {string}
         */
        type: string;
    }
}
declare module "workspace_svg" {
    /**
     * Size the workspace when the contents change.  This also updates
     * scrollbars accordingly.
     * @param {!WorkspaceSvg} workspace The workspace to resize.
     * @alias Blockly.WorkspaceSvg.resizeSvgContents
     */
    export function resizeSvgContents(workspace: WorkspaceSvg): void;
    export class WorkspaceSvg extends Workspace {
        /**
         * Sets the X/Y translations of a top level workspace.
         * @param {!Object} xyRatio Contains an x and/or y property which is a float
         *     between 0 and 1 specifying the degree of scrolling.
         * @private
         * @this {WorkspaceSvg}
         */
        private static setTopLevelWorkspaceMetrics_;
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
        constructor(options: Options, opt_blockDragSurface?: BlockDragSurfaceSvg | undefined, opt_wsDragSurface?: WorkspaceDragSurfaceSvg | undefined);
        /**
         * Object in charge of calculating metrics for the workspace.
         * @type {!IMetricsManager}
         * @private
         */
        private metricsManager_;
        /**
         * Method to get all the metrics that have to do with a workspace.
         * @type {function():!Metrics}
         * @package
         */
        getMetrics: () => Metrics;
        /**
         * Translates the workspace.
         * @type {function(!{x:number, y:number}):void}
         * @package
         */
        setMetrics: (arg0: {
            x: number;
            y: number;
        }) => void;
        /**
         * @type {!ComponentManager}
         * @private
         */
        private componentManager_;
        connectionDBList: ConnectionDB[];
        blockDragSurface_: BlockDragSurfaceSvg;
        workspaceDragSurface_: WorkspaceDragSurfaceSvg;
        useWorkspaceDragSurface_: boolean;
        /**
         * List of currently highlighted blocks.  Block highlighting is often used to
         * visually mark blocks currently being executed.
         * @type {!Array<!BlockSvg>}
         * @private
         */
        private highlightedBlocks_;
        /**
         * Object in charge of loading, storing, and playing audio for a workspace.
         * @type {!WorkspaceAudio}
         * @private
         */
        private audioManager_;
        /**
         * This workspace's grid object or null.
         * @type {Grid}
         * @private
         */
        private grid_;
        /**
         * Manager in charge of markers and cursors.
         * @type {!MarkerManager}
         * @private
         */
        private markerManager_;
        /**
         * Map from function names to callbacks, for deciding what to do when a custom
         * toolbox category is opened.
         * @type {!Object<string, ?function(!Workspace):
         *     !toolbox.FlyoutDefinition>}
         * @private
         */
        private toolboxCategoryCallbacks_;
        /**
         * Map from function names to callbacks, for deciding what to do when a button
         * is clicked.
         * @type {!Object<string, ?function(!FlyoutButton)>}
         * @private
         */
        private flyoutButtonCallbacks_;
        /**
         * Object in charge of storing and updating the workspace theme.
         * @type {!ThemeManager}
         * @protected
         */
        protected themeManager_: ThemeManager;
        /**
         * The block renderer used for rendering blocks on this workspace.
         * @type {!Renderer}
         * @private
         */
        private renderer_;
        /**
         * Cached parent SVG.
         * @type {SVGElement}
         * @private
         */
        private cachedParentSvg_;
        /**
         * True if keyboard accessibility mode is on, false otherwise.
         * @type {boolean}
         */
        keyboardAccessibilityMode: boolean;
        /**
         * The list of top-level bounded elements on the workspace.
         * @type {!Array<!IBoundedElement>}
         * @private
         */
        private topBoundedElements_;
        /**
         * The recorded drag targets.
         * @type {!Array<
         * {
         *   component: !IDragTarget,
         *   clientRect: !Rect
         * }>}
         * @private
         */
        private dragTargetAreas_;
        /**
         * The cached size of the parent svg element.
         * Used to compute svg metrics.
         * @type {!Size}
         * @private
         */
        private cachedParentSvgSize_;
        /**
         * Get the marker manager for this workspace.
         * @return {!MarkerManager} The marker manager.
         */
        getMarkerManager(): MarkerManager;
        /**
         * Gets the metrics manager for this workspace.
         * @return {!IMetricsManager} The metrics manager.
         * @public
         */
        public getMetricsManager(): IMetricsManager;
        /**
         * Sets the metrics manager for the workspace.
         * @param {!IMetricsManager} metricsManager The metrics manager.
         * @package
         */
        setMetricsManager(metricsManager: IMetricsManager): void;
        /**
         * Gets the component manager for this workspace.
         * @return {!ComponentManager} The component manager.
         * @public
         */
        public getComponentManager(): ComponentManager;
        /**
         * Add the cursor SVG to this workspaces SVG group.
         * @param {SVGElement} cursorSvg The SVG root of the cursor to be added to the
         *     workspace SVG group.
         * @package
         */
        setCursorSvg(cursorSvg: SVGElement): void;
        /**
         * Add the marker SVG to this workspaces SVG group.
         * @param {SVGElement} markerSvg The SVG root of the marker to be added to the
         *     workspace SVG group.
         * @package
         */
        setMarkerSvg(markerSvg: SVGElement): void;
        /**
         * Get the marker with the given ID.
         * @param {string} id The ID of the marker.
         * @return {?Marker} The marker with the given ID or null if no marker
         *     with the given ID exists.
         * @package
         */
        getMarker(id: string): Marker | null;
        /**
         * The cursor for this workspace.
         * @return {?Cursor} The cursor for the workspace.
         */
        getCursor(): Cursor | null;
        /**
         * Get the block renderer attached to this workspace.
         * @return {!Renderer} The renderer attached to this
         *     workspace.
         */
        getRenderer(): Renderer;
        /**
         * Get the theme manager for this workspace.
         * @return {!ThemeManager} The theme manager for this workspace.
         * @package
         */
        getThemeManager(): ThemeManager;
        /**
         * Get the workspace theme object.
         * @return {!Theme} The workspace theme object.
         */
        getTheme(): Theme;
        /**
         * Set the workspace theme object.
         * If no theme is passed, default to the `Classic` theme.
         * @param {Theme} theme The workspace theme object.
         */
        setTheme(theme: Theme): void;
        /**
         * Refresh all blocks on the workspace after a theme update.
         * @package
         */
        refreshTheme(): void;
        /**
         * Updates all the blocks with new style.
         * @param {!Array<!Block>} blocks List of blocks to update the style
         *     on.
         * @private
         */
        private updateBlockStyles_;
        /**
         * Getter for the inverted screen CTM.
         * @return {?SVGMatrix} The matrix to use in mouseToSvg
         */
        getInverseScreenCTM(): SVGMatrix | null;
        inverseScreenCTM_: SVGMatrix | null;
        inverseScreenCTMDirty_: boolean;
        /**
         * Mark the inverse screen CTM as dirty.
         */
        updateInverseScreenCTM(): void;
        /**
         * Getter for isVisible
         * @return {boolean} Whether the workspace is visible.
         *     False if the workspace has been hidden by calling `setVisible(false)`.
         */
        isVisible(): boolean;
        /**
         * Return the absolute coordinates of the top-left corner of this element,
         * scales that after canvas SVG element, if it's a descendant.
         * The origin (0,0) is the top-left corner of the Blockly SVG.
         * @param {!SVGElement} element SVG element to find the coordinates of.
         * @return {!Coordinate} Object with .x and .y properties.
         * @package
         */
        getSvgXY(element: SVGElement): Coordinate;
        /**
         * Gets the size of the workspace's parent SVG element.
         * @return {!Size} The cached width and height of the workspace's
         *     parent SVG element.
         * @package
         */
        getCachedParentSvgSize(): Size;
        /**
         * Return the position of the workspace origin relative to the injection div
         * origin in pixels.
         * The workspace origin is where a block would render at position (0, 0).
         * It is not the upper left corner of the workspace SVG.
         * @return {!Coordinate} Offset in pixels.
         * @package
         */
        getOriginOffsetInPixels(): Coordinate;
        /**
         * Return the injection div that is a parent of this workspace.
         * Walks the DOM the first time it's called, then returns a cached value.
         * Note: We assume this is only called after the workspace has been injected
         * into the DOM.
         * @return {!Element} The first parent div with 'injectionDiv' in the name.
         * @package
         */
        getInjectionDiv(): Element;
        injectionDiv_: Element;
        /**
         * Get the SVG block canvas for the workspace.
         * @return {?SVGElement} The SVG group for the workspace.
         * @package
         */
        getBlockCanvas(): SVGElement | null;
        /**
         * Save resize handler data so we can delete it later in dispose.
         * @param {!browserEvents.Data} handler Data that can be passed to
         *     eventHandling.unbind.
         */
        setResizeHandlerWrapper(handler: any[][]): void;
        resizeHandlerWrapper_: any[][] | null;
        /**
         * Create the workspace DOM elements.
         * @param {string=} opt_backgroundClass Either 'blocklyMainBackground' or
         *     'blocklyMutatorBackground'.
         * @return {!Element} The workspace's SVG group.
         */
        createDom(opt_backgroundClass?: string | undefined): Element;
        /**
         * <g class="blocklyWorkspace">
         *   <rect class="blocklyMainBackground" height="100%" width="100%"></rect>
         *   [Trashcan and/or flyout may go here]
         *   <g class="blocklyBlockCanvas"></g>
         *   <g class="blocklyBubbleCanvas"></g>
         * </g>
         * @type {SVGElement}
         */
        svgGroup_: SVGElement;
        /** @type {SVGElement} */
        svgBackground_: SVGElement;
        /** @type {SVGElement} */
        svgBlockCanvas_: SVGElement;
        /** @type {SVGElement} */
        svgBubbleCanvas_: SVGElement;
        toolbox_: IToolbox;
        /**
         * Dispose of this workspace.
         * Unlink from all DOM elements to prevent memory leaks.
         * @suppress {checkTypes}
         */
        dispose(): void;
        rendered: boolean;
        flyout_: IFlyout;
        trashcan: Trashcan;
        scrollbar: ScrollbarPair;
        zoomControls_: ZoomControls;
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
        override newBlock(prototypeName: string, opt_id?: string | undefined): BlockSvg;
        /**
         * Add a trashcan.
         * @package
         */
        addTrashcan(): void;
        /**
         * Add zoom controls.
         * @package
         */
        addZoomControls(): void;
        /**
         * Add a flyout element in an element with the given tag name.
         * @param {string|
         * !Svg<!SVGSVGElement>|
         * !Svg<!SVGGElement>} tagName What type of tag the
         *     flyout belongs in.
         * @return {!Element} The element containing the flyout DOM.
         * @package
         */
        addFlyout(tagName: string | Svg<SVGSVGElement> | Svg<SVGGElement>): Element;
        /**
         * Getter for the flyout associated with this workspace.  This flyout may be
         * owned by either the toolbox or the workspace, depending on toolbox
         * configuration.  It will be null if there is no flyout.
         * @param {boolean=} opt_own Whether to only return the workspace's own flyout.
         * @return {?IFlyout} The flyout on this workspace.
         * @package
         */
        getFlyout(opt_own?: boolean | undefined): IFlyout | null;
        /**
         * Getter for the toolbox associated with this workspace, if one exists.
         * @return {?IToolbox} The toolbox on this workspace.
         * @package
         */
        getToolbox(): IToolbox | null;
        /**
         * Update items that use screen coordinate calculations
         * because something has changed (e.g. scroll position, window size).
         * @private
         */
        private updateScreenCalculations_;
        /**
         * If enabled, resize the parts of the workspace that change when the workspace
         * contents (e.g. block positions) change.  This will also scroll the
         * workspace contents if needed.
         * @package
         */
        resizeContents(): void;
        /**
         * Resize and reposition all of the workspace chrome (toolbox,
         * trash, scrollbars etc.)
         * This should be called when something changes that
         * requires recalculating dimensions and positions of the
         * trash, zoom, toolbox, etc. (e.g. window resize).
         */
        resize(): void;
        /**
         * Resizes and repositions workspace chrome if the page has a new
         * scroll position.
         * @package
         */
        updateScreenCalculationsIfScrolled(): void;
        lastRecordedPageScroll_: Coordinate;
        /**
         * Get the SVG element that forms the drawing surface.
         * @return {!SVGGElement} SVG group element.
         */
        getCanvas(): SVGGElement;
        /**
         * Caches the width and height of the workspace's parent SVG element for use
         * with getSvgMetrics.
         * @param {?number} width The width of the parent SVG element.
         * @param {?number} height The height of the parent SVG element
         * @package
         */
        setCachedParentSvgSize(width: number | null, height: number | null): void;
        /**
         * Get the SVG element that forms the bubble surface.
         * @return {!SVGGElement} SVG group element.
         */
        getBubbleCanvas(): SVGGElement;
        /**
         * Get the SVG element that contains this workspace.
         * Note: We assume this is only called after the workspace has been injected
         * into the DOM.
         * @return {!SVGElement} SVG element.
         */
        getParentSvg(): SVGElement;
        /**
         * Fires a viewport event if events are enabled and there is a change in
         * viewport values.
         * @package
         */
        maybeFireViewportChangeEvent(): void;
        oldScale_: any;
        oldTop_: number;
        oldLeft_: number;
        /**
         * Translate this workspace to new coordinates.
         * @param {number} x Horizontal translation, in pixel units relative to the
         *    top left of the Blockly div.
         * @param {number} y Vertical translation, in pixel units relative to the
         *    top left of the Blockly div.
         */
        translate(x: number, y: number): void;
        /**
         * Called at the end of a workspace drag to take the contents
         * out of the drag surface and put them back into the workspace SVG.
         * Does nothing if the workspace drag surface is not enabled.
         * @package
         */
        resetDragSurface(): void;
        isDragSurfaceActive_: boolean;
        /**
         * Called at the beginning of a workspace drag to move contents of
         * the workspace to the drag surface.
         * Does nothing if the drag surface is not enabled.
         * @package
         */
        setupDragSurface(): void;
        /**
         * Gets the drag surface blocks are moved to when a drag is started.
         * @return {?BlockDragSurfaceSvg} This workspace's block drag surface,
         *     if one is in use.
         * @package
         */
        getBlockDragSurface(): BlockDragSurfaceSvg | null;
        /**
         * Returns the horizontal offset of the workspace.
         * Intended for LTR/RTL compatibility in XML.
         * @return {number} Width.
         */
        getWidth(): number;
        /**
         * Toggles the visibility of the workspace.
         * Currently only intended for main workspace.
         * @param {boolean} isVisible True if workspace should be visible.
         */
        setVisible(isVisible: boolean): void;
        isVisible_: boolean;
        /**
         * Render all blocks in workspace.
         */
        render(): void;
        /**
         * Highlight or unhighlight a block in the workspace.  Block highlighting is
         * often used to visually mark blocks currently being executed.
         * @param {?string} id ID of block to highlight/unhighlight,
         *   or null for no block (used to unhighlight all blocks).
         * @param {boolean=} opt_state If undefined, highlight specified block and
         * automatically unhighlight all others.  If true or false, manually
         * highlight/unhighlight the specified block.
         */
        highlightBlock(id: string | null, opt_state?: boolean | undefined): void;
        /**
         * Pastes the provided block or workspace comment onto the workspace.
         * Does not check whether there is remaining capacity for the object, that
         * should be done before calling this method.
         * @param {!Object|!Element|!DocumentFragment} state The representation of the
         *     thing to paste.
         */
        paste(state: any | Element | DocumentFragment): void;
        /**
         * Paste the provided block onto the workspace.
         * @param {?Element} xmlBlock XML block element.
         * @param {?blocks.State} jsonBlock JSON block
         *     representation.
         * @private
         */
        private pasteBlock_;
        /**
         * Paste the provided comment onto the workspace.
         * @param {!Element} xmlComment XML workspace comment element.
         * @private
         * @suppress {checkTypes} Suppress checks while workspace comments are not
         *     bundled in.
         */
        private pasteWorkspaceComment_;
        /**
         * Refresh the toolbox unless there's a drag in progress.
         * @package
         */
        refreshToolboxSelection(): void;
        /**
         * Rename a variable by updating its name in the variable map.  Update the
         *     flyout to show the renamed variable immediately.
         * @param {string} id ID of the variable to rename.
         * @param {string} newName New variable name.
         */
        renameVariableById(id: string, newName: string): void;
        /**
         * Delete a variable by the passed in ID.   Update the flyout to show
         *     immediately that the variable is deleted.
         * @param {string} id ID of variable to delete.
         */
        deleteVariableById(id: string): void;
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
        createVariable(name: string, opt_type?: (string | null) | undefined, opt_id?: (string | null) | undefined): VariableModel;
        /**
         * Make a list of all the delete areas for this workspace.
         * @deprecated Use workspace.recordDragTargets. (2021 June)
         */
        recordDeleteAreas(): void;
        /**
         * Make a list of all the delete areas for this workspace.
         */
        recordDragTargets(): void;
        /**
         * Returns the drag target the mouse event is over.
         * @param {!Event} e Mouse move event.
         * @return {?IDragTarget} Null if not over a drag target, or the drag
         *     target the event is over.
         */
        getDragTarget(e: Event): IDragTarget | null;
        /**
         * Handle a mouse-down on SVG drawing surface.
         * @param {!Event} e Mouse down event.
         * @private
         */
        private onMouseDown_;
        /**
         * Start tracking a drag of an object on this workspace.
         * @param {!Event} e Mouse down event.
         * @param {!Coordinate} xy Starting location of object.
         */
        startDrag(e: Event, xy: Coordinate): void;
        dragDeltaXY_: Coordinate;
        /**
         * Track a drag of an object on this workspace.
         * @param {!Event} e Mouse move event.
         * @return {!Coordinate} New location of object.
         */
        moveDrag(e: Event): Coordinate;
        /**
         * Is the user currently dragging a block or scrolling the flyout/workspace?
         * @return {boolean} True if currently dragging or scrolling.
         */
        isDragging(): boolean;
        /**
         * Is this workspace draggable?
         * @return {boolean} True if this workspace may be dragged.
         */
        isDraggable(): boolean;
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
        isMovable(): boolean;
        /**
         * Is this workspace movable horizontally?
         * @return {boolean} True if the workspace is movable horizontally, false
         *    otherwise.
         */
        isMovableHorizontally(): boolean;
        /**
         * Is this workspace movable vertically?
         * @return {boolean} True if the workspace is movable vertically, false
         *    otherwise.
         */
        isMovableVertically(): boolean;
        /**
         * Handle a mouse-wheel on SVG drawing surface.
         * @param {!Event} e Mouse wheel event.
         * @private
         */
        private onMouseWheel_;
        /**
         * Calculate the bounding box for the blocks on the workspace.
         * Coordinate system: workspace coordinates.
         *
         * @return {!Rect} Contains the position and size of the
         *   bounding box containing the blocks on the workspace.
         */
        getBlocksBoundingBox(): Rect;
        /**
         * Clean up the workspace by ordering all the blocks in a column.
         */
        cleanUp(): void;
        /**
         * Show the context menu for the workspace.
         * @param {!Event} e Mouse event.
         * @package
         */
        showContextMenu(e: Event): void;
        /**
         * Modify the block tree on the existing toolbox.
         * @param {?toolbox.ToolboxDefinition} toolboxDef
         *    DOM tree of toolbox contents, string of toolbox contents, or JSON
         *    representing toolbox definition.
         */
        updateToolbox(toolboxDef: toolbox.ToolboxDefinition | null): void;
        /**
         * Mark this workspace as the currently focused main workspace.
         */
        markFocused(): void;
        /**
         * Set the workspace to have focus in the browser.
         * @private
         */
        private setBrowserFocus;
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
        zoom(x: number, y: number, amount: number): void;
        scrollX: number;
        scrollY: number;
        /**
         * Zooming the blocks centered in the center of view with zooming in or out.
         * @param {number} type Type of zooming (-1 zooming out and 1 zooming in).
         */
        zoomCenter(type: number): void;
        /**
         * Zoom the blocks to fit in the workspace if possible.
         */
        zoomToFit(): void;
        /**
         * Add a transition class to the block and bubble canvas, to animate any
         * transform changes.
         * @package
         */
        beginCanvasTransition(): void;
        /**
         * Remove transition class from the block and bubble canvas.
         * @package
         */
        endCanvasTransition(): void;
        /**
         * Center the workspace.
         */
        scrollCenter(): void;
        /**
         * Scroll the workspace to center on the given block. If the block has other
         * blocks stacked below it, the workspace will be centered on the stack.
         * @param {?string} id ID of block center on.
         * @public
         */
        public centerOnBlock(id: string | null): void;
        /**
         * Set the workspace's zoom factor.
         * @param {number} newScale Zoom factor. Units: (pixels / workspaceUnit).
         */
        setScale(newScale: number): void;
        scale: number;
        /**
         * Get the workspace's zoom factor.  If the workspace has a parent, we call into
         * the parent to get the workspace scale.
         * @return {number} The workspace zoom factor. Units: (pixels / workspaceUnit).
         */
        getScale(): number;
        /**
         * Scroll the workspace to a specified offset (in pixels), keeping in the
         * workspace bounds. See comment on workspaceSvg.scrollX for more detail on
         * the meaning of these values.
         * @param {number} x Target X to scroll to.
         * @param {number} y Target Y to scroll to.
         * @package
         */
        scroll(x: number, y: number): void;
        /**
         * Find the block on this workspace with the specified ID.
         * @param {string} id ID of block to find.
         * @return {?BlockSvg} The sought after block, or null if not found.
         * @override
         */
        override getBlockById(id: string): BlockSvg | null;
        /**
         * Finds the top-level blocks and returns them.  Blocks are optionally sorted
         * by position; top to bottom (with slight LTR or RTL bias).
         * @param {boolean} ordered Sort the list if true.
         * @return {!Array<!BlockSvg>} The top-level block objects.
         * @override
         */
        override getTopBlocks(ordered: boolean): Array<BlockSvg>;
        /**
         * Adds a block to the list of top blocks.
         * @param {!Block} block Block to add.
         */
        addTopBlock(block: Block): void;
        /**
         * Removes a block from the list of top blocks.
         * @param {!Block} block Block to remove.
         */
        removeTopBlock(block: Block): void;
        /**
         * Adds a comment to the list of top comments.
         * @param {!WorkspaceComment} comment comment to add.
         */
        addTopComment(comment: WorkspaceComment): void;
        /**
         * Removes a comment from the list of top comments.
         * @param {!WorkspaceComment} comment comment to remove.
         */
        removeTopComment(comment: WorkspaceComment): void;
        /**
         * Adds a bounded element to the list of top bounded elements.
         * @param {!IBoundedElement} element Bounded element to add.
         */
        addTopBoundedElement(element: IBoundedElement): void;
        /**
         * Removes a bounded element from the list of top bounded elements.
         * @param {!IBoundedElement} element Bounded element to remove.
         */
        removeTopBoundedElement(element: IBoundedElement): void;
        /**
         * Finds the top-level bounded elements and returns them.
         * @return {!Array<!IBoundedElement>} The top-level bounded elements.
         */
        getTopBoundedElements(): Array<IBoundedElement>;
        /**
         * Update whether this workspace has resizes enabled.
         * If enabled, workspace will resize when appropriate.
         * If disabled, workspace will not resize until re-enabled.
         * Use to avoid resizing during a batch operation, for performance.
         * @param {boolean} enabled Whether resizes should be enabled.
         */
        setResizesEnabled(enabled: boolean): void;
        resizesEnabled_: boolean;
        /**
         * Dispose of all blocks in workspace, with an optimization to prevent resizes.
         */
        clear(): void;
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
        registerButtonCallback(key: string, func: (arg0: FlyoutButton) => any): void;
        /**
         * Get the callback function associated with a given key, for clicks on buttons
         * and labels in the flyout.
         * @param {string} key The name to use to look up the function.
         * @return {?function(!FlyoutButton)} The function corresponding to the
         *     given key for this workspace; null if no callback is registered.
         */
        getButtonCallback(key: string): ((arg0: FlyoutButton) => any) | null;
        /**
         * Remove a callback for a click on a button in the flyout.
         * @param {string} key The name associated with the callback function.
         */
        removeButtonCallback(key: string): void;
        /**
         * Register a callback function associated with a given key, for populating
         * custom toolbox categories in this workspace.  See the variable and procedure
         * categories as an example.
         * @param {string} key The name to use to look up this function.
         * @param {function(!Workspace): !toolbox.FlyoutDefinition} func The function to
         *     call when the given toolbox category is opened.
         */
        registerToolboxCategoryCallback(key: string, func: (arg0: Workspace) => toolbox.FlyoutDefinition): void;
        /**
         * Get the callback function associated with a given key, for populating
         * custom toolbox categories in this workspace.
         * @param {string} key The name to use to look up the function.
         * @return {?function(!Workspace): !toolbox.FlyoutDefinition} The function
         *     corresponding to the given key for this workspace, or null if no function
         *     is registered.
         */
        getToolboxCategoryCallback(key: string): ((arg0: Workspace) => toolbox.FlyoutDefinition) | null;
        /**
         * Remove a callback for a click on a custom category's name in the toolbox.
         * @param {string} key The name associated with the callback function.
         */
        removeToolboxCategoryCallback(key: string): void;
        /**
         * Look up the gesture that is tracking this touch stream on this workspace.
         * May create a new gesture.
         * @param {!Event} e Mouse event or touch event.
         * @return {?TouchGesture} The gesture that is tracking this touch
         *     stream, or null if no valid gesture exists.
         * @package
         */
        getGesture(e: Event): TouchGesture | null;
        currentGesture_: TouchGesture;
        /**
         * Clear the reference to the current gesture.
         * @package
         */
        clearGesture(): void;
        /**
         * Cancel the current gesture, if one exists.
         * @package
         */
        cancelCurrentGesture(): void;
        /**
         * Get the audio manager for this workspace.
         * @return {!WorkspaceAudio} The audio manager for this workspace.
         */
        getAudioManager(): WorkspaceAudio;
        /**
         * Get the grid object for this workspace, or null if there is none.
         * @return {?Grid} The grid object for this workspace.
         * @package
         */
        getGrid(): Grid | null;
        /**
         * Close tooltips, context menus, dropdown selections, etc.
         * @param {boolean=} opt_onlyClosePopups Whether only popups should be closed.
         */
        hideChaff(opt_onlyClosePopups?: boolean | undefined): void;
        /**
         * Is this workspace the surface for a flyout?
         * @type {boolean}
         */
        isFlyout: boolean;
        /**
         * Is this workspace the surface for a mutator?
         * @type {boolean}
         * @package
         */
        isMutator: boolean;
        /**
         * Horizontal scroll value when scrolling started in pixel units.
         * @type {number}
         */
        startScrollX: number;
        /**
         * Vertical scroll value when scrolling started in pixel units.
         * @type {number}
         */
        startScrollY: number;
        /**
         * In a flyout, the target workspace where blocks should be placed after a drag.
         * Otherwise null.
         * @type {WorkspaceSvg}
         * @package
         */
        targetWorkspace: WorkspaceSvg;
    }
    import { Metrics } from "utils/metrics";
    import { ConnectionDB } from "connection_db";
    import { BlockDragSurfaceSvg } from "block_drag_surface";
    import { WorkspaceDragSurfaceSvg } from "workspace_drag_surface_svg";
    import { ThemeManager } from "theme_manager";
    import { MarkerManager } from "marker_manager";
    import { IMetricsManager } from "interfaces/i_metrics_manager";
    import { ComponentManager } from "component_manager";
    import { Marker } from "keyboard_nav/marker";
    import { Cursor } from "keyboard_nav/cursor";
    import { Renderer } from "renderers/common/renderer";
    import { Theme } from "theme";
    import { Coordinate } from "utils/coordinate";
    import { Size } from "utils/size";
    import { IToolbox } from "interfaces/i_toolbox";
    import { IFlyout } from "interfaces/i_flyout";
    import { Trashcan } from "trashcan";
    import { ScrollbarPair } from "scrollbar_pair";
    import { ZoomControls } from "zoom_controls";
    import { BlockSvg } from "block_svg";
    import { Svg } from "utils/svg";
    import { VariableModel } from "variable_model";
    import { IDragTarget } from "interfaces/i_drag_target";
    import { Rect } from "utils/rect";
    import * as toolbox from "utils/toolbox";
    import { Block } from "block";
    import { WorkspaceComment } from "workspace_comment";
    import { IBoundedElement } from "interfaces/i_bounded_element";
    import { FlyoutButton } from "flyout_button";
    import { Workspace } from "workspace";
    import { TouchGesture } from "touch_gesture";
    import { WorkspaceAudio } from "workspace_audio";
    import { Grid } from "grid";
    import { Options } from "options";
}
declare module "interfaces/i_copyable" {
    /**
     * @extends {ISelectable}
     * @interface
     * @alias Blockly.ICopyable
     */
    export class ICopyable {
    }
    export namespace ICopyable {
        /**
         * Copy Metadata.
         */
        type CopyData = {
            saveInfo: (any | Element);
            source: WorkspaceSvg;
            typeCounts: any | null;
        };
    }
    import { WorkspaceSvg } from "workspace_svg";
}
declare module "common" {
    /**
     * All of the connections on blocks that are currently being dragged.
     * @type {!Array<!Connection>}
     */
    export const draggingConnections: Array<Connection>;
    /**
     * Returns the last used top level workspace (based on focus).  Try not to use
     * this function, particularly if there are multiple Blockly instances on a
     * page.
     * @return {!Workspace} The main workspace.
     * @alias Blockly.common.getMainWorkspace
     */
    export function getMainWorkspace(): Workspace;
    /**
     * Sets last used main workspace.
     * @param {!Workspace} workspace The most recently used top level workspace.
     * @alias Blockly.common.setMainWorkspace
     */
    export function setMainWorkspace(workspace: Workspace): void;
    /**
     * Returns the currently selected block.
     * @return {?ICopyable} The currently selected block.
     * @alias Blockly.common.getSelected
     */
    export function getSelected(): ICopyable | null;
    /**
     * Sets the currently selected block.
     * @param {?ICopyable} newSelection The newly selected block.
     * @alias Blockly.common.setSelected
     */
    export function setSelected(newSelection: ICopyable | null): void;
    /**
     * Get the container element in which to render the WidgetDiv, DropDownDiv and\
     * Tooltip.
     * @return {?Element} The parent container.
     * @alias Blockly.common.getParentContainer
     */
    export function getParentContainer(): Element | null;
    /**
     * Set the parent container.  This is the container element that the WidgetDiv,
     * DropDownDiv, and Tooltip are rendered into the first time `Blockly.inject`
     * is called.
     * This method is a NOP if called after the first ``Blockly.inject``.
     * @param {!Element} newParent The container element.
     * @alias Blockly.common.setParentContainer
     */
    export function setParentContainer(newParent: Element): void;
    /**
     * Size the SVG image to completely fill its container. Call this when the view
     * actually changes sizes (e.g. on a window resize/device orientation change).
     * See Blockly.resizeSvgContents to resize the workspace when the contents
     * change (e.g. when a block is added or removed).
     * Record the height/width of the SVG image.
     * @param {!WorkspaceSvg} workspace Any workspace in the SVG.
     * @alias Blockly.common.svgResize
     */
    export function svgResize(workspace: WorkspaceSvg): void;
    import { Connection } from "connection";
    /**
     * Get a map of all the block's descendants mapping their type to the number of
     *    children with that type.
     * @param {!Block} block The block to map.
     * @param {boolean=} opt_stripFollowing Optionally ignore all following
     *    statements (blocks that are not inside a value or statement input
     *    of the block).
     * @return {!Object} Map of types to type counts for descendants of the bock.
     * @alias Blockly.common.getBlockTypeCounts
     */
    export function getBlockTypeCounts(block: Block, opt_stripFollowing?: boolean | undefined): any;
    /**
     * Define blocks from an array of JSON block definitions, as might be generated
     * by the Blockly Developer Tools.
     * @param {!Array<!Object>} jsonArray An array of JSON block definitions.
     * @alias Blockly.common.defineBlocksWithJsonArray
     */
    export function defineBlocksWithJsonArray(jsonArray: Array<any>): void;
    import { Workspace } from "workspace";
    import { ICopyable } from "interfaces/i_copyable";
    import { WorkspaceSvg } from "workspace_svg";
    import { Block } from "block";
}
declare module "widgetdiv" {
    /**
     * Returns the HTML container for editor widgets.
     * @return {?Element} The editor widget container.
     * @alias Blockly.WidgetDiv.getDiv
     */
    export function getDiv(): Element | null;
    /**
     * Allows unit tests to reset the div.
     * @param {?Element} newDiv The new value for the DIV field.
     * @alias Blockly.WidgetDiv.testOnly_setDiv
     * @ignore
     */
    export function testOnly_setDiv(newDiv: Element | null): void;
    /**
     * Create the widget div and inject it onto the page.
     * @alias Blockly.WidgetDiv.createDom
     */
    export function createDom(): void;
    /**
     * Initialize and display the widget div.  Close the old one if needed.
     * @param {!Object} newOwner The object that will be using this container.
     * @param {boolean} rtl Right-to-left (true) or left-to-right (false).
     * @param {Function} newDispose Optional cleanup function to be run when the
     *     widget is closed.
     * @alias Blockly.WidgetDiv.show
     */
    export function show(newOwner: any, rtl: boolean, newDispose: Function): void;
    /**
     * Destroy the widget and hide the div.
     * @alias Blockly.WidgetDiv.hide
     */
    export function hide(): void;
    /**
     * Is the container visible?
     * @return {boolean} True if visible.
     * @alias Blockly.WidgetDiv.isVisible
     */
    export function isVisible(): boolean;
    /**
     * Destroy the widget and hide the div if it is being used by the specified
     * object.
     * @param {!Object} oldOwner The object that was using this container.
     * @alias Blockly.WidgetDiv.hideIfOwner
     */
    export function hideIfOwner(oldOwner: any): void;
    /**
     * Position the widget div based on an anchor rectangle.
     * The widget should be placed adjacent to but not overlapping the anchor
     * rectangle.  The preferred position is directly below and aligned to the left
     * (LTR) or right (RTL) side of the anchor.
     * @param {!Rect} viewportBBox The bounding rectangle of the
     *     current viewport, in window coordinates.
     * @param {!Rect} anchorBBox The bounding rectangle of the anchor,
     *     in window coordinates.
     * @param {!Size} widgetSize The size of the widget that is inside
     *     the widget div, in window coordinates.
     * @param {boolean} rtl Whether the workspace is in RTL mode.  This determines
     *     horizontal alignment.
     * @alias Blockly.WidgetDiv.positionWithAnchor
     * @package
     */
    export function positionWithAnchor(viewportBBox: Rect, anchorBBox: Rect, widgetSize: Size, rtl: boolean): void;
    import { Rect } from "utils/rect";
    import { Size } from "utils/size";
}
declare module "clipboard" {
    /**
     * Copy a block or workspace comment onto the local clipboard.
     * @param {!ICopyable} toCopy Block or Workspace Comment to be copied.
     * @alias Blockly.clipboard.copy
     * @package
     */
    export function copy(toCopy: ICopyable): void;
    /**
     * Paste a block or workspace comment on to the main workspace.
     * @return {boolean} True if the paste was successful, false otherwise.
     * @alias Blockly.clipboard.paste
     * @package
     */
    export function paste(): boolean;
    /**
     * Duplicate this block and its children, or a workspace comment.
     * @param {!ICopyable} toDuplicate Block or Workspace Comment to be
     *     duplicated.
     * @alias Blockly.clipboard.duplicate
     * @package
     */
    export function duplicate(toDuplicate: ICopyable): void;
    import { ICopyable } from "interfaces/i_copyable";
}
declare module "menuitem" {
    /**
     * Class representing an item in a menu.
     *
     * @param {string|!HTMLElement} content Text caption to display as the content
     *     of the item, or a HTML element to display.
     * @param {string=} opt_value Data/model associated with the menu item.
     * @constructor
     * @alias Blockly.MenuItem
     */
    export class MenuItem {
        constructor(content: any, opt_value: any);
        /**
         * Human-readable text of this menu item, or the HTML element to display.
         * @type {string|!HTMLElement}
         * @private
         */
        private content_;
        /**
         * Machine-readable value of this menu item.
         * @type {string|undefined}
         * @private
         */
        private value_;
        /**
         * Is the menu item clickable, as opposed to greyed-out.
         * @type {boolean}
         * @private
         */
        private enabled_;
        /**
         * The DOM element for the menu item.
         * @type {?Element}
         * @private
         */
        private element_;
        /**
         * Whether the menu item is rendered right-to-left.
         * @type {boolean}
         * @private
         */
        private rightToLeft_;
        /**
         * ARIA name for this menu.
         * @type {?aria.Role}
         * @private
         */
        private roleName_;
        /**
         * Is this menu item checkable.
         * @type {boolean}
         * @private
         */
        private checkable_;
        /**
         * Is this menu item currently checked.
         * @type {boolean}
         * @private
         */
        private checked_;
        /**
         * Is this menu item currently highlighted.
         * @type {boolean}
         * @private
         */
        private highlight_;
        /**
         * Bound function to call when this menu item is clicked.
         * @type {?Function}
         * @private
         */
        private actionHandler_;
        /**
         * Creates the menuitem's DOM.
         * @return {!Element} Completed DOM.
         */
        createDom(): Element;
        /**
         * Dispose of this menu item.
         */
        dispose(): void;
        /**
         * Gets the menu item's element.
         * @return {?Element} The DOM element.
         * @package
         */
        getElement(): Element | null;
        /**
         * Gets the unique ID for this menu item.
         * @return {string} Unique component ID.
         * @package
         */
        getId(): string;
        /**
         * Gets the value associated with the menu item.
         * @return {*} value Value associated with the menu item.
         * @package
         */
        getValue(): any;
        /**
         * Set menu item's rendering direction.
         * @param {boolean} rtl True if RTL, false if LTR.
         * @package
         */
        setRightToLeft(rtl: boolean): void;
        /**
         * Set the menu item's accessibility role.
         * @param {!aria.Role} roleName Role name.
         * @package
         */
        setRole(roleName: aria.Role): void;
        /**
         * Sets the menu item to be checkable or not. Set to true for menu items
         * that represent checkable options.
         * @param {boolean} checkable Whether the menu item is checkable.
         * @package
         */
        setCheckable(checkable: boolean): void;
        /**
         * Checks or unchecks the component.
         * @param {boolean} checked Whether to check or uncheck the component.
         * @package
         */
        setChecked(checked: boolean): void;
        /**
         * Highlights or unhighlights the component.
         * @param {boolean} highlight Whether to highlight or unhighlight the component.
         * @package
         */
        setHighlighted(highlight: boolean): void;
        /**
         * Returns true if the menu item is enabled, false otherwise.
         * @return {boolean} Whether the menu item is enabled.
         * @package
         */
        isEnabled(): boolean;
        /**
         * Enables or disables the menu item.
         * @param {boolean} enabled Whether to enable or disable the menu item.
         * @package
         */
        setEnabled(enabled: boolean): void;
        /**
         * Performs the appropriate action when the menu item is activated
         * by the user.
         * @package
         */
        performAction(): void;
        /**
         * Set the handler that's called when the menu item is activated by the user.
         * `obj` will be used as the 'this' object in the function when called.
         * @param {function(!MenuItem)} fn The handler.
         * @param {!Object} obj Used as the 'this' object in fn when called.
         * @package
         */
        onAction(fn: (arg0: MenuItem) => any, obj: any): void;
    }
    import * as aria from "utils/aria";
}
declare module "menu" {
    export class Menu {
        /**
         * Array of menu items.
         * (Nulls are never in the array, but typing the array as nullable prevents
         * the compiler from objecting to .indexOf(null))
         * @type {!Array<MenuItem>}
         * @private
         */
        private menuItems_;
        /**
         * Coordinates of the mousedown event that caused this menu to open. Used to
         * prevent the consequent mouseup event due to a simple click from activating
         * a menu item immediately.
         * @type {?Coordinate}
         * @package
         */
        openingCoords: Coordinate | null;
        /**
         * This is the element that we will listen to the real focus events on.
         * A value of null means no menu item is highlighted.
         * @type {?MenuItem}
         * @private
         */
        private highlightedItem_;
        /**
         * Mouse over event data.
         * @type {?browserEvents.Data}
         * @private
         */
        private mouseOverHandler_;
        /**
         * Click event data.
         * @type {?browserEvents.Data}
         * @private
         */
        private clickHandler_;
        /**
         * Mouse enter event data.
         * @type {?browserEvents.Data}
         * @private
         */
        private mouseEnterHandler_;
        /**
         * Mouse leave event data.
         * @type {?browserEvents.Data}
         * @private
         */
        private mouseLeaveHandler_;
        /**
         * Key down event data.
         * @type {?browserEvents.Data}
         * @private
         */
        private onKeyDownHandler_;
        /**
         * The menu's root DOM element.
         * @type {?Element}
         * @private
         */
        private element_;
        /**
         * ARIA name for this menu.
         * @type {?aria.Role}
         * @private
         */
        private roleName_;
        /**
         * Add a new menu item to the bottom of this menu.
         * @param {!MenuItem} menuItem Menu item to append.
         */
        addChild(menuItem: MenuItem): void;
        /**
         * Creates the menu DOM.
         * @param {!Element} container Element upon which to append this menu.
         */
        render(container: Element): void;
        /**
         * Gets the menu's element.
         * @return {?Element} The DOM element.
         * @package
         */
        getElement(): Element | null;
        /**
         * Focus the menu element.
         * @package
         */
        focus(): void;
        /**
         * Blur the menu element.
         * @private
         */
        private blur_;
        /**
         * Set the menu accessibility role.
         * @param {!aria.Role} roleName role name.
         * @package
         */
        setRole(roleName: aria.Role): void;
        /**
         * Dispose of this menu.
         */
        dispose(): void;
        /**
         * Returns the child menu item that owns the given DOM element,
         * or null if no such menu item is found.
         * @param {Element} elem DOM element whose owner is to be returned.
         * @return {?MenuItem} Menu item for which the DOM element belongs to.
         * @private
         */
        private getMenuItem_;
        /**
         * Highlights the given menu item, or clears highlighting if null.
         * @param {?MenuItem} item Item to highlight, or null.
         * @package
         */
        setHighlighted(item: MenuItem | null): void;
        /**
         * Highlights the next highlightable item (or the first if nothing is currently
         * highlighted).
         * @package
         */
        highlightNext(): void;
        /**
         * Highlights the previous highlightable item (or the last if nothing is
         * currently highlighted).
         * @package
         */
        highlightPrevious(): void;
        /**
         * Highlights the first highlightable item.
         * @private
         */
        private highlightFirst_;
        /**
         * Highlights the last highlightable item.
         * @private
         */
        private highlightLast_;
        /**
         * Helper function that manages the details of moving the highlight among
         * child menuitems in response to keyboard events.
         * @param {number} startIndex Start index.
         * @param {number} delta Step direction: 1 to go down, -1 to go up.
         * @private
         */
        private highlightHelper_;
        /**
         * Handles mouseover events. Highlight menuitems as the user hovers over them.
         * @param {!Event} e Mouse event to handle.
         * @private
         */
        private handleMouseOver_;
        /**
         * Handles click events. Pass the event onto the child menuitem to handle.
         * @param {!Event} e Click event to handle.
         * @private
         */
        private handleClick_;
        /**
         * Handles mouse enter events. Focus the element.
         * @param {!Event} _e Mouse event to handle.
         * @private
         */
        private handleMouseEnter_;
        /**
         * Handles mouse leave events. Blur and clear highlight.
         * @param {!Event} _e Mouse event to handle.
         * @private
         */
        private handleMouseLeave_;
        /**
         * Attempts to handle a keyboard event, if the menu item is enabled, by calling
         * {@link handleKeyEventInternal_}.
         * @param {!Event} e Key event to handle.
         * @private
         */
        private handleKeyEvent_;
        /**
         * Get the size of a rendered menu.
         * @return {!Size} Object with width and height properties.
         * @package
         */
        getSize(): Size;
    }
    import { Coordinate } from "utils/coordinate";
    import { MenuItem } from "menuitem";
    import * as aria from "utils/aria";
    import { Size } from "utils/size";
}
declare module "contextmenu" {
    /**
     * Gets the block the context menu is currently attached to.
     * @return {?Block} The block the context menu is attached to.
     * @alias Blockly.ContextMenu.getCurrentBlock
     */
    export function getCurrentBlock(): Block | null;
    /**
     * Sets the block the context menu is currently attached to.
     * @param {?Block} block The block the context menu is attached to.
     * @alias Blockly.ContextMenu.setCurrentBlock
     */
    export function setCurrentBlock(block: Block | null): void;
    /**
     * Construct the menu based on the list of options and show the menu.
     * @param {!Event} e Mouse event.
     * @param {!Array<!Object>} options Array of menu options.
     * @param {boolean} rtl True if RTL, false if LTR.
     * @alias Blockly.ContextMenu.show
     */
    export function show(e: Event, options: Array<any>, rtl: boolean): void;
    /**
     * Hide the context menu.
     * @alias Blockly.ContextMenu.hide
     */
    export function hide(): void;
    /**
     * Dispose of the menu.
     * @alias Blockly.ContextMenu.dispose
     */
    export function dispose(): void;
    /**
     * Create a callback function that creates and configures a block,
     *   then places the new block next to the original.
     * @param {!Block} block Original block.
     * @param {!Element} xml XML representation of new block.
     * @return {!Function} Function that creates a block.
     * @alias Blockly.ContextMenu.callbackFactory
     */
    export function callbackFactory(block: Block, xml: Element): Function;
    /**
     * Make a context menu option for deleting the current workspace comment.
     * @param {!WorkspaceCommentSvg} comment The workspace comment where the
     *     right-click originated.
     * @return {!Object} A menu option, containing text, enabled, and a callback.
     * @alias Blockly.ContextMenu.commentDeleteOption
     * @package
     */
    export function commentDeleteOption(comment: WorkspaceCommentSvg): any;
    /**
     * Make a context menu option for duplicating the current workspace comment.
     * @param {!WorkspaceCommentSvg} comment The workspace comment where the
     *     right-click originated.
     * @return {!Object} A menu option, containing text, enabled, and a callback.
     * @alias Blockly.ContextMenu.commentDuplicateOption
     * @package
     */
    export function commentDuplicateOption(comment: WorkspaceCommentSvg): any;
    /**
     * Make a context menu option for adding a comment on the workspace.
     * @param {!WorkspaceSvg} ws The workspace where the right-click
     *     originated.
     * @param {!Event} e The right-click mouse event.
     * @return {!Object} A menu option, containing text, enabled, and a callback.
     * @package
     * @suppress {strictModuleDepCheck,checkTypes} Suppress checks while workspace
     *     comments are not bundled in.
     * @alias Blockly.ContextMenu.workspaceCommentOption
     */
    export function workspaceCommentOption(ws: WorkspaceSvg, e: Event): any;
    import { Block } from "block";
    import { WorkspaceCommentSvg } from "workspace_comment_svg";
    import { WorkspaceSvg } from "workspace_svg";
}
declare module "warning" {
    export class Warning {
        /**
         * Class for a warning.
         * @param {!Block} block The block associated with this warning.
         * @extends {Icon}
         * @constructor
         * @alias Blockly.Warning
         */
        constructor(block: Block);
        text_: any;
        /**
         * Draw the warning icon.
         * @param {!Element} group The icon group.
         * @protected
         */
        protected drawIcon_(group: Element): void;
        /**
         * Show or hide the warning bubble.
         * @param {boolean} visible True if the bubble should be visible.
         */
        setVisible(visible: boolean): void;
        /**
         * Show the bubble.
         * @private
         */
        private createBubble_;
        paragraphElement_: SVGTextElement;
        bubble_: Bubble;
        /**
         * Dispose of the bubble and references to it.
         * @private
         */
        private disposeBubble_;
        /**
         * Set this warning's text.
         * @param {string} text Warning text (or '' to delete). This supports
         *    linebreaks.
         * @param {string} id An ID for this text entry to be able to maintain
         *     multiple warnings.
         */
        setText(text: string, id: string): void;
        /**
         * Get this warning's texts.
         * @return {string} All texts concatenated into one string.
         */
        getText(): string;
        /**
         * Dispose of this warning.
         */
        dispose(): void;
        /**
         * Does this icon get hidden when the block is collapsed.
         */
        collapseHidden: boolean;
    }
    import { Bubble } from "bubble";
    import { Block } from "block";
}
declare module "comment" {
    export class Comment extends Icon {
        /**
         * Class for a comment.
         * @param {!Block} block The block associated with this comment.
         * @extends {Icon}
         * @constructor
         * @alias Blockly.Comment
         */
        constructor(block: Block);
        /**
         * The model for this comment.
         * @type {!Block.CommentModel}
         * @private
         */
        private model_;
        /**
         * The model's text value at the start of an edit.
         * Used to tell if an event should be fired at the end of an edit.
         * @type {?string}
         * @private
         */
        private cachedText_;
        /**
         * Mouse up event data.
         * @type {?browserEvents.Data}
         * @private
         */
        private onMouseUpWrapper_;
        /**
         * Wheel event data.
         * @type {?browserEvents.Data}
         * @private
         */
        private onWheelWrapper_;
        /**
         * Change event data.
         * @type {?browserEvents.Data}
         * @private
         */
        private onChangeWrapper_;
        /**
         * Input event data.
         * @type {?browserEvents.Data}
         * @private
         */
        private onInputWrapper_;
        /**
         * Draw the comment icon.
         * @param {!Element} group The icon group.
         * @protected
         */
        protected drawIcon_(group: Element): void;
        /**
         * Create the editor for the comment's bubble.
         * @return {!SVGElement} The top-level node of the editor.
         * @private
         */
        private createEditor_;
        foreignObject_: SVGForeignObjectElement;
        textarea_: HTMLElement;
        /**
         * Add or remove editability of the comment.
         * @override
         */
        override updateEditable(): void;
        /**
         * Callback function triggered when the bubble has resized.
         * Resize the text area accordingly.
         * @private
         */
        private onBubbleResize_;
        /**
         * Resizes the text area to match the size defined on the model (which is
         * the size of the bubble).
         * @private
         */
        private resizeTextarea_;
        /**
         * Show or hide the comment bubble.
         * @param {boolean} visible True if the bubble should be visible.
         */
        setVisible(visible: boolean): void;
        /**
         * Show the bubble. Handles deciding if it should be editable or not.
         * @private
         */
        private createBubble_;
        /**
         * Show an editable bubble.
         * @private
         */
        private createEditableBubble_;
        bubble_: Bubble;
        /**
         * Show a non-editable bubble.
         * @private
         * @suppress {checkTypes} Suppress `this` type mismatch.
         */
        private createNonEditableBubble_;
        paragraphElement_: SVGTextElement;
        /**
         * Dispose of the bubble.
         * @private
         * @suppress {checkTypes} Suppress `this` type mismatch.
         */
        private disposeBubble_;
        /**
         * Callback fired when an edit starts.
         *
         * Bring the comment to the top of the stack when clicked on. Also cache the
         * current text so it can be used to fire a change event.
         * @param {!Event} _e Mouse up event.
         * @private
         */
        private startEdit_;
        /**
         * Get the dimensions of this comment's bubble.
         * @return {Size} Object with width and height properties.
         */
        getBubbleSize(): Size;
        /**
         * Size this comment's bubble.
         * @param {number} width Width of the bubble.
         * @param {number} height Height of the bubble.
         */
        setBubbleSize(width: number, height: number): void;
        /**
         * Update the comment's view to match the model.
         * @package
         */
        updateText(): void;
        /**
         * Dispose of this comment.
         *
         * If you want to receive a comment "delete" event (newValue: null), then this
         * should not be called directly. Instead call block.setCommentText(null);
         */
        dispose(): void;
    }
    import { Bubble } from "bubble";
    import { Size } from "utils/size";
    import { Block } from "block";
    import { Icon } from "icon";
}
declare module "keyboard_nav/basic_cursor" {
    export class BasicCursor extends Cursor {
        /**
         * Find the next node in the pre order traversal.
         * @return {?ASTNode} The next node, or null if the current node is
         *     not set or there is no next value.
         * @override
         */
        override next(): ASTNode | null;
        /**
         * For a basic cursor we only have the ability to go next and previous, so
         * in will also allow the user to get to the next node in the pre order
         * traversal.
         * @return {?ASTNode} The next node, or null if the current node is
         *     not set or there is no next value.
         * @override
         */
        override in(): ASTNode | null;
        /**
         * Find the previous node in the pre order traversal.
         * @return {?ASTNode} The previous node, or null if the current node
         *     is not set or there is no previous value.
         * @override
         */
        override prev(): ASTNode | null;
        /**
         * For a basic cursor we only have the ability to go next and previous, so
         * out will allow the user to get to the previous node in the pre order
         * traversal.
         * @return {?ASTNode} The previous node, or null if the current node is
         *     not set or there is no previous value.
         * @override
         */
        override out(): ASTNode | null;
        /**
         * Uses pre order traversal to navigate the Blockly AST. This will allow
         * a user to easily navigate the entire Blockly AST without having to go in
         * and out levels on the tree.
         * @param {?ASTNode} node The current position in the AST.
         * @param {!function(ASTNode) : boolean} isValid A function true/false
         *     depending on whether the given node should be traversed.
         * @return {?ASTNode} The next node in the traversal.
         * @protected
         */
        protected getNextNode_(node: ASTNode | null, isValid: (arg0: ASTNode) => boolean): ASTNode | null;
        /**
         * Reverses the pre order traversal in order to find the previous node. This
         * will allow a user to easily navigate the entire Blockly AST without having to
         * go in and out levels on the tree.
         * @param {?ASTNode} node The current position in the AST.
         * @param {!function(ASTNode) : boolean} isValid A function true/false
         *     depending on whether the given node should be traversed.
         * @return {?ASTNode} The previous node in the traversal or null if no
         *     previous node exists.
         * @protected
         */
        protected getPreviousNode_(node: ASTNode | null, isValid: (arg0: ASTNode) => boolean): ASTNode | null;
        /**
         * Decides what nodes to traverse and which ones to skip. Currently, it
         * skips output, stack and workspace nodes.
         * @param {?ASTNode} node The AST node to check whether it is valid.
         * @return {boolean} True if the node should be visited, false otherwise.
         * @protected
         */
        protected validNode_(node: ASTNode | null): boolean;
        /**
         * From the given node find either the next valid sibling or parent.
         * @param {?ASTNode} node The current position in the AST.
         * @return {?ASTNode} The parent AST node or null if there are no
         *     valid parents.
         * @private
         */
        private findSiblingOrParent_;
        /**
         * Get the right most child of a node.
         * @param {?ASTNode} node The node to find the right most child of.
         * @return {?ASTNode} The right most child of the given node, or the node
         *     if no child exists.
         * @private
         */
        private getRightMostChild_;
    }
    export namespace BasicCursor {
        const registrationName: string;
    }
    import { ASTNode } from "keyboard_nav/ast_node";
    import { Cursor } from "keyboard_nav/cursor";
}
declare module "keyboard_nav/tab_navigate_cursor" {
    /**
     * A cursor for navigating between tab navigable fields.
     * @constructor
     * @extends {BasicCursor}
     * @alias Blockly.TabNavigateCursor
     */
    export class TabNavigateCursor extends BasicCursor {
        /**
         * Skip all nodes except for tab navigable fields.
         * @param {?ASTNode} node The AST node to check whether it is valid.
         * @return {boolean} True if the node should be visited, false otherwise.
         * @override
         */
        override validNode_(node: ASTNode | null): boolean;
    }
    import { ASTNode } from "keyboard_nav/ast_node";
    import { BasicCursor } from "keyboard_nav/basic_cursor";
}
declare module "events/events_block_move" {
    export class BlockMove {
        /**
         * Class for a block move event.  Created before the move.
         * @param {!Block=} opt_block The moved block.  Undefined for a blank
         *     event.
         * @extends {BlockBase}
         * @constructor
         * @alias Blockly.Events.BlockMove
         */
        constructor(opt_block?: Block | undefined);
        recordUndo: boolean;
        oldParentId: any;
        oldInputName: any;
        oldCoordinate: any;
        /**
         * Encode the event as JSON.
         * @return {!Object} JSON representation.
         */
        toJson(): any;
        /**
         * Decode the JSON event.
         * @param {!Object} json JSON representation.
         */
        fromJson(json: any): void;
        newParentId: any;
        newInputName: any;
        newCoordinate: any;
        /**
         * Record the block's new location.  Called after the move.
         */
        recordNew(): void;
        /**
         * Returns the parentId and input if the block is connected,
         *   or the XY location if disconnected.
         * @return {!Object} Collection of location info.
         * @private
         */
        private currentLocation_;
        /**
         * Does this event record any change of state?
         * @return {boolean} False if something changed.
         */
        isNull(): boolean;
        /**
         * Run a move event.
         * @param {boolean} forward True if run forward, false if run backward (undo).
         */
        run(forward: boolean): void;
        /**
         * Type of this event.
         * @type {string}
         */
        type: string;
    }
    import { Block } from "block";
}
declare module "block_svg" {
    export class BlockSvg extends Block {
        /**
         * Class for a block's SVG representation.
         * Not normally called directly, workspace.newBlock() is preferred.
         * @param {!WorkspaceSvg} workspace The block's workspace.
         * @param {?string} prototypeName Name of the language object containing
         *     type-specific functions for this block.
         * @param {string=} opt_id Optional ID.  Use this ID if provided, otherwise
         *     create a new ID.
         * @extends {Block}
         * @implements {IASTNodeLocationSvg}
         * @implements {IBoundedElement}
         * @implements {ICopyable}
         * @implements {IDraggable}
         * @constructor
         * @alias Blockly.BlockSvg
         */
        constructor(workspace: WorkspaceSvg, prototypeName: string | null, opt_id?: string | undefined);
        /**
         * @type {!SVGGElement}
         * @private
         */
        private svgGroup_;
        /**
         * A block style object.
         * @type {!Theme.BlockStyle}
         */
        style: Theme.BlockStyle;
        /**
         * The renderer's path object.
         * @type {IPathObject}
         * @package
         */
        pathObject: IPathObject;
        /** @type {boolean} */
        rendered: boolean;
        /**
         * Is this block currently rendering? Used to stop recursive render calls
         * from actually triggering a re-render.
         * @type {boolean}
         * @private
         */
        private renderIsInProgress_;
        /** @type {!WorkspaceSvg} */
        workspace: WorkspaceSvg;
        /** @type {RenderedConnection} */
        outputConnection: RenderedConnection;
        /** @type {RenderedConnection} */
        nextConnection: RenderedConnection;
        /** @type {RenderedConnection} */
        previousConnection: RenderedConnection;
        /**
         * Whether to move the block to the drag surface when it is dragged.
         * True if it should move, false if it should be translated directly.
         * @type {boolean}
         * @private
         */
        private useDragSurface_;
        /**
         * Create and initialize the SVG representation of the block.
         * May be called more than once.
         */
        initSvg(): void;
        eventsInit_: boolean;
        /**
         * Get the secondary color of a block.
         * @return {?string} #RRGGBB string.
         */
        getColorSecondary(): string | null;
        /**
         * Get the tertiary color of a block.
         * @return {?string} #RRGGBB string.
         */
        getColorTertiary(): string | null;
        /**
         * Selects this block. Highlights the block visually and fires a select event
         * if the block is not already selected.
         */
        select(): void;
        /**
         * Unselects this block. Unhighlights the block and fires a select (false) event
         * if the block is currently selected.
         */
        unselect(): void;
        /**
         * Returns a list of mutator, comment, and warning icons.
         * @return {!Array<!Icon>} List of icons.
         */
        getIcons(): Array<Icon>;
        /**
         * Sets the parent of this block to be a new block or null.
         * @param {?Block} newParent New parent block.
         * @package
         * @override
         */
        override setParent(newParent: Block | null): void;
        /**
         * Return the coordinates of the top-left corner of this block relative to the
         * drawing surface's origin (0,0), in workspace units.
         * If the block is on the workspace, (0, 0) is the origin of the workspace
         * coordinate system.
         * This does not change with workspace scale.
         * @return {!Coordinate} Object with .x and .y properties in
         *     workspace coordinates.
         */
        getRelativeToSurfaceXY(): Coordinate;
        /**
         * Move a block by a relative offset.
         * @param {number} dx Horizontal offset in workspace units.
         * @param {number} dy Vertical offset in workspace units.
         */
        moveBy(dx: number, dy: number): void;
        /**
         * Transforms a block by setting the translation on the transform attribute
         * of the block's SVG.
         * @param {number} x The x coordinate of the translation in workspace units.
         * @param {number} y The y coordinate of the translation in workspace units.
         */
        translate(x: number, y: number): void;
        /**
         * Move this block to its workspace's drag surface, accounting for positioning.
         * Generally should be called at the same time as setDragging_(true).
         * Does nothing if useDragSurface_ is false.
         * @package
         */
        moveToDragSurface(): void;
        /**
         * Move a block to a position.
         * @param {Coordinate} xy The position to move to in workspace units.
         */
        moveTo(xy: Coordinate): void;
        /**
         * Move this block back to the workspace block canvas.
         * Generally should be called at the same time as setDragging_(false).
         * Does nothing if useDragSurface_ is false.
         * @param {!Coordinate} newXY The position the block should take on
         *     on the workspace canvas, in workspace coordinates.
         * @package
         */
        moveOffDragSurface(newXY: Coordinate): void;
        /**
         * Move this block during a drag, taking into account whether we are using a
         * drag surface to translate blocks.
         * This block must be a top-level block.
         * @param {!Coordinate} newLoc The location to translate to, in
         *     workspace coordinates.
         * @package
         */
        moveDuringDrag(newLoc: Coordinate): void;
        /**
         * Clear the block of transform="..." attributes.
         * Used when the block is switching from 3d to 2d transform or vice versa.
         * @private
         */
        private clearTransformAttributes_;
        /**
         * Snap this block to the nearest grid point.
         */
        snapToGrid(): void;
        /**
         * Returns the coordinates of a bounding box describing the dimensions of this
         * block and any blocks stacked below it.
         * Coordinate system: workspace coordinates.
         * @return {!Rect} Object with coordinates of the bounding box.
         */
        getBoundingRectangle(): Rect;
        /**
         * Notify every input on this block to mark its fields as dirty.
         * A dirty field is a field that needs to be re-rendered.
         */
        markDirty(): void;
        /**
         * Set whether the block is collapsed or not.
         * @param {boolean} collapsed True if collapsed.
         */
        setCollapsed(collapsed: boolean): void;
        /**
         * Makes sure that when the block is collapsed, it is rendered correctly
         * for that state.
         * @private
         */
        private updateCollapsed_;
        /**
         * Open the next (or previous) FieldTextInput.
         * @param {!Field} start Current field.
         * @param {boolean} forward If true go forward, otherwise backward.
         */
        tab(start: Field, forward: boolean): void;
        /**
         * Handle a mouse-down on an SVG block.
         * @param {!Event} e Mouse down event or touch start event.
         * @private
         */
        private onMouseDown_;
        /**
         * Load the block's help page in a new window.
         * @package
         */
        showHelp(): void;
        /**
         * Generate the context menu for this block.
         * @return {?Array<!Object>} Context menu options or null if no menu.
         * @protected
         */
        protected generateContextMenu(): Array<any> | null;
        /**
         * Show the context menu for this block.
         * @param {!Event} e Mouse event.
         * @package
         */
        showContextMenu(e: Event): void;
        /**
         * Move the connections for this block and all blocks attached under it.
         * Also update any attached bubbles.
         * @param {number} dx Horizontal offset from current location, in workspace
         *     units.
         * @param {number} dy Vertical offset from current location, in workspace
         *     units.
         * @package
         */
        moveConnections(dx: number, dy: number): void;
        /**
         * Recursively adds or removes the dragging class to this node and its children.
         * @param {boolean} adding True if adding, false if removing.
         * @package
         */
        setDragging(adding: boolean): void;
        /**
         * Set whether this block is movable or not.
         * @param {boolean} movable True if movable.
         */
        setMovable(movable: boolean): void;
        /**
         * Set whether this block is editable or not.
         * @param {boolean} editable True if editable.
         */
        setEditable(editable: boolean): void;
        /**
         * Sets whether this block is a shadow block or not.
         * @param {boolean} shadow True if a shadow.
         * @package
         */
        setShadow(shadow: boolean): void;
        /**
         * Set whether this block is an insertion marker block or not.
         * Once set this cannot be unset.
         * @param {boolean} insertionMarker True if an insertion marker.
         * @package
         */
        setInsertionMarker(insertionMarker: boolean): void;
        isInsertionMarker_: any;
        /**
         * Return the root node of the SVG or null if none exists.
         * @return {!SVGGElement} The root SVG node (probably a group).
         */
        getSvgRoot(): SVGGElement;
        /**
         * Dispose of this block.
         * @param {boolean=} healStack If true, then try to heal any gap by connecting
         *     the next statement with the previous statement.  Otherwise, dispose of
         *     all children of this block.
         * @param {boolean=} animate If true, show a disposal animation and sound.
         * @suppress {checkTypes}
         */
        dispose(healStack?: boolean | undefined, animate?: boolean | undefined): void;
        warningTextDb_: {
            [x: string]: number;
        };
        /**
         * Delete a block and hide chaff when doing so. The block will not be deleted if
         * it's in a flyout. This is called from the context menu and keyboard shortcuts
         * as the full delete action. If you are disposing of a block from the workspace
         * and don't need to perform flyout checks, handle event grouping, or hide
         * chaff, then use `block.dispose()` directly.
         * @package
         */
        checkAndDelete(): void;
        /**
         * Encode a block for copying.
         * @return {?ICopyable.CopyData} Copy metadata, or null if the block is
         *     an insertion marker.
         * @package
         */
        toCopyData(): ICopyable.CopyData | null;
        /**
         * Updates the color of the block to match the block's state.
         * @package
         */
        applyColor(): void;
        /**
         * Updates the color of the block (and children) to match the current disabled
         * state.
         * @package
         */
        updateDisabled(): void;
        /**
         * Get the comment icon attached to this block, or null if the block has no
         * comment.
         * @return {?Comment} The comment icon attached to this block, or null.
         */
        getCommentIcon(): Comment | null;
        /**
         * Set this block's comment text.
         * @param {?string} text The text, or null to delete.
         */
        setCommentText(text: string | null): void;
        commentIcon_: Comment | null;
        comment: Comment | null;
        /**
         * Set this block's warning text.
         * @param {?string} text The text, or null to delete.
         * @param {string=} opt_id An optional ID for the warning text to be able to
         *     maintain multiple warnings.
         */
        setWarningText(text: string | null, opt_id?: string | undefined): void;
        warning: Warning | null;
        /**
         * Give this block a mutator dialog.
         * @param {?Mutator} mutator A mutator dialog instance or null to remove.
         */
        setMutator(mutator: Mutator | null): void;
        mutator: any;
        /**
         * Set whether the block is enabled or not.
         * @param {boolean} enabled True if enabled.
         */
        setEnabled(enabled: boolean): void;
        /**
         * Set whether the block is highlighted or not.  Block highlighting is
         * often used to visually mark blocks currently being executed.
         * @param {boolean} highlighted True if highlighted.
         */
        setHighlighted(highlighted: boolean): void;
        /**
         * Adds the visual "select" effect to the block, but does not actually select
         * it or fire an event.
         * @see BlockSvg#select
         */
        addSelect(): void;
        /**
         * Removes the visual "select" effect from the block, but does not actually
         * unselect it or fire an event.
         * @see BlockSvg#unselect
         */
        removeSelect(): void;
        /**
         * Update the cursor over this block by adding or removing a class.
         * @param {boolean} enable True if the delete cursor should be shown, false
         *     otherwise.
         * @package
         */
        setDeleteStyle(enable: boolean): void;
        /**
         * Get the color of a block.
         * @return {string} #RRGGBB string.
         */
        getColor(): string;
        /**
         * Change the color of a block.
         * @param {number|string} color HSV hue value, or #RRGGBB string.
         */
        setColor(color: number | string): void;
        styleName_: string;
        /**
         * Set the style and color values of a block.
         * @param {string} blockStyleName Name of the block style.
         * @throws {Error} if the block style does not exist.
         */
        setStyle(blockStyleName: string): void;
        hat: string;
        color_: string;
        /**
         * Move this block to the front of the visible workspace.
         * <g> tags do not respect z-index so SVG renders them in the
         * order that they are in the DOM.  By placing this block first within the
         * block group's <g>, it will render on top of any other blocks.
         * @package
         */
        bringToFront(): void;
        /**
         * Set whether this block can chain onto the bottom of another block.
         * @param {boolean} newBoolean True if there can be a previous statement.
         * @param {(string|Array<string>|null)=} opt_check Statement type or
         *     list of statement types.  Null/undefined if any type could be connected.
         */
        setPreviousStatement(newBoolean: boolean, opt_check?: (string | Array<string> | null) | undefined): void;
        /**
         * Set whether another block can chain onto the bottom of this block.
         * @param {boolean} newBoolean True if there can be a next statement.
         * @param {(string|Array<string>|null)=} opt_check Statement type or
         *     list of statement types.  Null/undefined if any type could be connected.
         */
        setNextStatement(newBoolean: boolean, opt_check?: (string | Array<string> | null) | undefined): void;
        /**
         * Set whether this block returns a value.
         * @param {boolean} newBoolean True if there is an output.
         * @param {(string|Array<string>|null)=} opt_check Returned type or list
         *     of returned types.  Null or undefined if any type could be returned
         *     (e.g. variable get).
         */
        setOutput(newBoolean: boolean, opt_check?: (string | Array<string> | null) | undefined): void;
        /**
         * Set whether value inputs are arranged horizontally or vertically.
         * @param {boolean} newBoolean True if inputs are horizontal.
         */
        setInputsInline(newBoolean: boolean): void;
        /**
         * Remove an input from this block.
         * @param {string} name The name of the input.
         * @param {boolean=} opt_quiet True to prevent error if input is not present.
         * @return {boolean} True if operation succeeds, false if input is not present
         *     and opt_quiet is true
         * @throws {Error} if the input is not present and opt_quiet is not true.
         */
        removeInput(name: string, opt_quiet?: boolean | undefined): boolean;
        /**
         * Move a numbered input to a different location on this block.
         * @param {number} inputIndex Index of the input to move.
         * @param {number} refIndex Index of input that should be after the moved input.
         */
        moveNumberedInputBefore(inputIndex: number, refIndex: number): void;
        /**
         * Add a value input, statement input or local variable to this block.
         * @param {number} type One of Blockly.inputTypes.
         * @param {string} name Language-neutral identifier which may used to find this
         *     input again.  Should be unique to this block.
         * @return {!Input} The input object created.
         * @protected
         * @override
         */
        protected override appendInput_(type: number, name: string): Input;
        /**
         * Sets whether this block's connections are tracked in the database or not.
         *
         * Used by the deserializer to be more efficient. Setting a connection's
         * tracked_ value to false keeps it from adding itself to the db when it
         * gets its first moveTo call, saving expensive ops for later.
         * @param {boolean} track If true, start tracking. If false, stop tracking.
         * @package
         */
        setConnectionTracking(track: boolean): void;
        /**
         * Returns connections originating from this block.
         * @param {boolean} all If true, return all connections even hidden ones.
         *     Otherwise, for a non-rendered block return an empty list, and for a
         *     collapsed block don't return inputs connections.
         * @return {!Array<!RenderedConnection>} Array of connections.
         * @package
         */
        getConnections_(all: boolean): Array<RenderedConnection>;
        /**
         * Walks down a stack of blocks and finds the last next connection on the stack.
         * @param {boolean} ignoreShadows If true,the last connection on a non-shadow
         *     block will be returned. If false, this will follow shadows to find the
         *     last connection.
         * @return {?RenderedConnection} The last next connection on the stack,
         *     or null.
         * @package
         * @override
         */
        override lastConnectionInStack(ignoreShadows: boolean): RenderedConnection | null;
        /**
         * Find the connection on this block that corresponds to the given connection
         * on the other block.
         * Used to match connections between a block and its insertion marker.
         * @param {!Block} otherBlock The other block to match against.
         * @param {!Connection} conn The other connection to match.
         * @return {?RenderedConnection} The matching connection on this block,
         *     or null.
         * @package
         * @override
         */
        override getMatchingConnection(otherBlock: Block, conn: Connection): RenderedConnection | null;
        /**
         * Create a connection of the specified type.
         * @param {number} type The type of the connection to create.
         * @return {!RenderedConnection} A new connection of the specified type.
         * @protected
         */
        protected makeConnection_(type: number): RenderedConnection;
        /**
         * Bump unconnected blocks out of alignment.  Two blocks which aren't actually
         * connected should not coincidentally line up on screen.
         */
        bumpNeighbours(): void;
        /**
         * Schedule snapping to grid and bumping neighbours to occur after a brief
         * delay.
         * @package
         */
        scheduleSnapAndBump(): void;
        /**
         * Position a block so that it doesn't move the target block when connected.
         * The block to position is usually either the first block in a dragged stack or
         * an insertion marker.
         * @param {!RenderedConnection} sourceConnection The connection on the
         *     moving block's stack.
         * @param {!RenderedConnection} targetConnection The connection that
         *     should stay stationary as this block is positioned.
         * @package
         */
        positionNearConnection(sourceConnection: RenderedConnection, targetConnection: RenderedConnection): void;
        /**
         * Return the parent block or null if this block is at the top level.
         * @return {?BlockSvg} The block (if any) that holds the current block.
         * @override
         */
        override getParent(): BlockSvg | null;
        /**
         * Return the top-most block in this block's tree.
         * This will return itself if this block is at the top level.
         * @return {!BlockSvg} The root block.
         * @override
         */
        override getRootBlock(): BlockSvg;
        /**
         * Lays out and reflows a block based on its contents and settings.
         * @param {boolean=} opt_bubble If false, just render this block.
         *   If true, also render block's parent, grandparent, etc.  Defaults to true.
         */
        render(opt_bubble?: boolean | undefined): void;
        /**
         * Redraw any attached marker or cursor svgs if needed.
         * @protected
         */
        protected updateMarkers_(): void;
        /**
         * Update all of the connections on this block with the new locations calculated
         * during rendering.  Also move all of the connected blocks based on the new
         * connection locations.
         * @private
         */
        private updateConnectionLocations_;
        /**
         * Add the cursor SVG to this block's SVG group.
         * @param {SVGElement} cursorSvg The SVG root of the cursor to be added to the
         *     block SVG group.
         * @package
         */
        setCursorSvg(cursorSvg: SVGElement): void;
        /**
         * Add the marker SVG to this block's SVG group.
         * @param {SVGElement} markerSvg The SVG root of the marker to be added to the
         *     block SVG group.
         * @package
         */
        setMarkerSvg(markerSvg: SVGElement): void;
        /**
         * Returns a bounding box describing the dimensions of this block
         * and any blocks stacked below it.
         * @return {!{height: number, width: number}} Object with height and width
         *    properties in workspace units.
         * @package
         */
        getHeightWidth(): {
            height: number;
            width: number;
        };
        /**
         * Visual effect to show that if the dragging block is dropped, this block will
         * be replaced.  If a shadow block, it will disappear.  Otherwise it will bump.
         * @param {boolean} add True if highlighting should be added.
         * @package
         */
        fadeForReplacement(add: boolean): void;
        /**
         * Visual effect to show that if the dragging block is dropped it will connect
         * to this input.
         * @param {Connection} conn The connection on the input to highlight.
         * @param {boolean} add True if highlighting should be added.
         * @package
         */
        highlightShapeForInput(conn: Connection, add: boolean): void;
        /**
         * Height of this block, not including any statement blocks above or below.
         * Height is in workspace units.
         */
        height: number;
        /**
         * Width of this block, including any connected value blocks.
         * Width is in workspace units.
         */
        width: number;
        /**
         * An optional method called when a mutator dialog is first opened.
         * This function must create and initialize a top-level block for the mutator
         * dialog, and return it. This function should also populate this top-level
         * block with any sub-blocks which are appropriate. This method must also be
         * coupled with defining a `compose` method for the default mutation dialog
         * button and UI to appear.
         * @type {?function(WorkspaceSvg):!BlockSvg}
         */
        decompose: ((arg0: WorkspaceSvg) => BlockSvg) | null;
        /**
         * An optional method called when a mutator dialog saves its content.
         * This function is called to modify the original block according to new
         * settings. This method must also be coupled with defining a `decompose`
         * method for the default mutation dialog button and UI to appear.
         * @type {?function(!BlockSvg)}
         */
        compose: ((arg0: BlockSvg) => any) | null;
        /**
         * An optional method for defining custom block context menu items.
         * @type {?function(!Array<!Object>)}
         */
        customContextMenu: ((arg0: Array<any>) => any) | null;
        /**
         * An property used internally to reference the block's rendering debugger.
         * @type {?BlockRenderingDebug}
         * @package
         */
        renderingDebugger: BlockRenderingDebug | null;
    }
    export namespace BlockSvg {
        const INLINE: number;
        const COLLAPSED_WARNING_ID: string;
    }
    import { Theme } from "theme";
    import { IPathObject } from "renderers/common/i_path_object";
    import { WorkspaceSvg } from "workspace_svg";
    import { RenderedConnection } from "rendered_connection";
    import { Icon } from "icon";
    import { Block } from "block";
    import { Coordinate } from "utils/coordinate";
    import { Rect } from "utils/rect";
    import { Field } from "field";
    import { ICopyable } from "interfaces/i_copyable";
    import { Comment } from "comment";
    import { Warning } from "warning";
    import { Mutator } from "mutator";
    import { Input } from "input";
    import { Connection } from "connection";
    import { Debug as BlockRenderingDebug } from "renderers/common/debugger";
}
declare module "block_animations" {
    /**
     * Play some UI effects (sound, animation) when disposing of a block.
     * @param {!BlockSvg} block The block being disposed of.
     * @alias Blockly.blockAnimations.disposeUiEffect
     * @package
     */
    export function disposeUiEffect(block: BlockSvg): void;
    /**
     * Play some UI effects (sound, ripple) after a connection has been established.
     * @param {!BlockSvg} block The block being connected.
     * @alias Blockly.blockAnimations.connectionUiEffect
     * @package
     */
    export function connectionUiEffect(block: BlockSvg): void;
    /**
     * Play some UI effects (sound, animation) when disconnecting a block.
     * @param {!BlockSvg} block The block being disconnected.
     * @alias Blockly.blockAnimations.disconnectUiEffect
     * @package
     */
    export function disconnectUiEffect(block: BlockSvg): void;
    /**
     * Stop the disconnect UI animation immediately.
     * @alias Blockly.blockAnimations.disconnectUiStop
     * @package
     */
    export function disconnectUiStop(): void;
    import { BlockSvg } from "block_svg";
}
declare module "bubble_dragger" {
    export class BubbleDragger {
        /**
         * Class for a bubble dragger.  It moves things on the bubble canvas around the
         * workspace when they are being dragged by a mouse or touch.  These can be
         * block comments, mutators, warnings, or workspace comments.
         * @param {!IBubble} bubble The item on the bubble canvas to drag.
         * @param {!WorkspaceSvg} workspace The workspace to drag on.
         * @constructor
         * @alias Blockly.BubbleDragger
         */
        constructor(bubble: IBubble, workspace: WorkspaceSvg);
        /**
         * The item on the bubble canvas that is being dragged.
         * @type {!IBubble}
         * @private
         */
        private draggingBubble_;
        /**
         * The workspace on which the bubble is being dragged.
         * @type {!WorkspaceSvg}
         * @private
         */
        private workspace_;
        /**
         * Which drag target the mouse pointer is over, if any.
         * @type {?IDragTarget}
         * @private
         */
        private dragTarget_;
        /**
         * Whether the bubble would be deleted if dropped immediately.
         * @type {boolean}
         * @private
         */
        private wouldDeleteBubble_;
        /**
         * The location of the top left corner of the dragging bubble's body at the
         * beginning of the drag, in workspace coordinates.
         * @type {!Coordinate}
         * @private
         */
        private startXY_;
        /**
         * The drag surface to move bubbles to during a drag, or null if none should
         * be used.  Block dragging and bubble dragging use the same surface.
         * @type {BlockDragSurfaceSvg}
         * @private
         */
        private dragSurface_;
        /**
         * Sever all links from this object.
         * @package
         * @suppress {checkTypes}
         */
        dispose(): void;
        /**
         * Start dragging a bubble.  This includes moving it to the drag surface.
         * @package
         */
        startBubbleDrag(): void;
        /**
         * Execute a step of bubble dragging, based on the given event.  Update the
         * display accordingly.
         * @param {!Event} e The most recent move event.
         * @param {!Coordinate} currentDragDeltaXY How far the pointer has
         *     moved from the position at the start of the drag, in pixel units.
         * @package
         */
        dragBubble(e: Event, currentDragDeltaXY: Coordinate): void;
        /**
         * Whether ending the drag would delete the bubble.
         * @param {?IDragTarget} dragTarget The drag target that the bubblee is
         *     currently over.
         * @return {boolean} Whether dropping the bubble immediately would delete the
         *    block.
         * @private
         */
        private shouldDelete_;
        /**
         * Update the cursor (and possibly the trash can lid) to reflect whether the
         * dragging bubble would be deleted if released immediately.
         * @private
         */
        private updateCursorDuringBubbleDrag_;
        /**
         * Finish a bubble drag and put the bubble back on the workspace.
         * @param {!Event} e The mouseup/touchend event.
         * @param {!Coordinate} currentDragDeltaXY How far the pointer has
         *     moved from the position at the start of the drag, in pixel units.
         * @package
         */
        endBubbleDrag(e: Event, currentDragDeltaXY: Coordinate): void;
        /**
         * Fire a move event at the end of a bubble drag.
         * @private
         */
        private fireMoveEvent_;
        /**
         * Convert a coordinate object from pixels to workspace units, including a
         * correction for mutator workspaces.
         * This function does not consider differing origins.  It simply scales the
         * input's x and y values.
         * @param {!Coordinate} pixelCoord A coordinate with x and y
         *     values in CSS pixel units.
         * @return {!Coordinate} The input coordinate divided by the
         *     workspace scale.
         * @private
         */
        private pixelsToWorkspaceUnits_;
        /**
         * Move the bubble onto the drag surface at the beginning of a drag.  Move the
         * drag surface to preserve the apparent location of the bubble.
         * @private
         */
        private moveToDragSurface_;
    }
    import { Coordinate } from "utils/coordinate";
    import { IBubble } from "interfaces/i_bubble";
    import { WorkspaceSvg } from "workspace_svg";
}
declare module "interfaces/i_block_dragger" {
    /**
     * A block dragger interface.
     * @interface
     * @alias Blockly.IBlockDragger
     */
    export class IBlockDragger {
    }
}
declare module "workspace_dragger" {
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
    export class WorkspaceDragger {
        constructor(workspace: any);
        /**
         * @type {!WorkspaceSvg}
         * @private
         */
        private workspace_;
        /**
         * Whether horizontal scroll is enabled.
         * @type {boolean}
         * @private
         */
        private horizontalScrollEnabled_;
        /**
         * Whether vertical scroll is enabled.
         * @type {boolean}
         * @private
         */
        private verticalScrollEnabled_;
        /**
         * The scroll position of the workspace at the beginning of the drag.
         * Coordinate system: pixel coordinates.
         * @type {!Coordinate}
         * @protected
         */
        protected startScrollXY_: Coordinate;
        /**
         * Sever all links from this object.
         * @package
         * @suppress {checkTypes}
         */
        dispose(): void;
        /**
         * Start dragging the workspace.
         * @package
         */
        startDrag(): void;
        /**
         * Finish dragging the workspace and put everything back where it belongs.
         * @param {!Coordinate} currentDragDeltaXY How far the pointer has
         *     moved from the position at the start of the drag, in pixel coordinates.
         * @package
         */
        endDrag(currentDragDeltaXY: Coordinate): void;
        /**
         * Move the workspace based on the most recent mouse movements.
         * @param {!Coordinate} currentDragDeltaXY How far the pointer has
         *     moved from the position at the start of the drag, in pixel coordinates.
         * @package
         */
        drag(currentDragDeltaXY: Coordinate): void;
    }
    import { Coordinate } from "utils/coordinate";
}
declare module "bump_objects" {
    /**
     * Bumps the given object that has passed out of bounds.
     * @param {!WorkspaceSvg} workspace The workspace containing the object.
     * @param {!MetricsManager.ContainerRegion} scrollMetrics Scroll metrics
     *    in workspace coordinates.
     * @param {!IBoundedElement} object The object to bump.
     * @return {boolean} True if block was bumped.
     * @alias Blockly.bumpObjects.bumpIntoBounds
     */
    function bumpObjectIntoBounds(workspace: WorkspaceSvg, scrollMetrics: MetricsManager.ContainerRegion, object: IBoundedElement): boolean;
    /**
     * Creates a handler for bumping objects when they cross fixed bounds.
     * @param {!WorkspaceSvg} workspace The workspace to handle.
     * @return {function(Abstract)} The event handler.
     * @alias Blockly.bumpObjects.bumpIntoBoundsHandler
     */
    export function bumpIntoBoundsHandler(workspace: WorkspaceSvg): (arg0: typeof Abstract) => any;
    /**
     * Bumps the top objects in the given workspace into bounds.
     * @param {!WorkspaceSvg} workspace The workspace.
     * @alias Blockly.bumpObjects.bumpTopObjectsIntoBounds
     */
    export function bumpTopObjectsIntoBounds(workspace: WorkspaceSvg): void;
    import { WorkspaceSvg } from "workspace_svg";
    import { MetricsManager } from "metrics_manager";
    import { IBoundedElement } from "interfaces/i_bounded_element";
    import * as Abstract from "events/events_abstract";
    export { bumpObjectIntoBounds as bumpIntoBounds };
}
declare module "events/events_block_drag" {
    /**
     * Class for a block drag event.
     * @param {!Block=} opt_block The top block in the stack that is being
     *    dragged. Undefined for a blank event.
     * @param {boolean=} opt_isStart Whether this is the start of a block drag.
     *    Undefined for a blank event.
     * @param {!Array<!Block>=} opt_blocks The blocks affected by this
     *    drag. Undefined for a blank event.
     * @extends {UiBase}
     * @constructor
     * @alias Blockly.Events.BlockDrag
     */
    export class BlockDrag {
        constructor(opt_block: any, opt_isStart: any, opt_blocks: any);
        blockId: any;
        /**
         * Whether this is the start of a block drag.
         * @type {boolean|undefined}
         */
        isStart: boolean | undefined;
        /**
         * The blocks affected by this drag event.
         * @type {!Array<!Block>|undefined}
         */
        blocks: Array<Block> | undefined;
        /**
         * Encode the event as JSON.
         * @return {!Object} JSON representation.
         */
        toJson(): any;
        /**
         * Decode the JSON event.
         * @param {!Object} json JSON representation.
         */
        fromJson(json: any): void;
        /**
         * Type of this event.
         * @type {string}
         */
        type: string;
    }
    import { Block } from "block";
}
declare module "block_dragger" {
    export class BlockDragger {
        /**
         * Class for a block dragger.  It moves blocks around the workspace when they
         * are being dragged by a mouse or touch.
         * @param {!BlockSvg} block The block to drag.
         * @param {!WorkspaceSvg} workspace The workspace to drag on.
         * @constructor
         * @implements {IBlockDragger}
         * @alias Blockly.BlockDragger
         */
        constructor(block: BlockSvg, workspace: WorkspaceSvg);
        /**
         * The top block in the stack that is being dragged.
         * @type {!BlockSvg}
         * @protected
         */
        protected draggingBlock_: BlockSvg;
        /**
         * The workspace on which the block is being dragged.
         * @type {!WorkspaceSvg}
         * @protected
         */
        protected workspace_: WorkspaceSvg;
        /**
         * Object that keeps track of connections on dragged blocks.
         * @type {!InsertionMarkerManager}
         * @protected
         */
        protected draggedConnectionManager_: InsertionMarkerManager;
        /**
         * Which drag area the mouse pointer is over, if any.
         * @type {?IDragTarget}
         * @private
         */
        private dragTarget_;
        /**
         * Whether the block would be deleted if dropped immediately.
         * @type {boolean}
         * @protected
         */
        protected wouldDeleteBlock_: boolean;
        /**
         * The location of the top left corner of the dragging block at the beginning
         * of the drag in workspace coordinates.
         * @type {!Coordinate}
         * @protected
         */
        protected startXY_: Coordinate;
        /**
         * A list of all of the icons (comment, warning, and mutator) that are
         * on this block and its descendants.  Moving an icon moves the bubble that
         * extends from it if that bubble is open.
         * @type {Array<!Object>}
         * @protected
         */
        protected dragIconData_: Array<any>;
        /**
         * Sever all links from this object.
         * @package
         */
        dispose(): void;
        /**
         * Start dragging a block.  This includes moving it to the drag surface.
         * @param {!Coordinate} currentDragDeltaXY How far the pointer has
         *     moved from the position at mouse down, in pixel units.
         * @param {boolean} healStack Whether or not to heal the stack after
         *     disconnecting.
         * @public
         */
        public startDrag(currentDragDeltaXY: Coordinate, healStack: boolean): void;
        /**
         * Whether or not we should disconnect the block when a drag is started.
         * @param {boolean} healStack Whether or not to heal the stack after
         *     disconnecting.
         * @return {boolean} True to disconnect the block, false otherwise.
         * @protected
         */
        protected shouldDisconnect_(healStack: boolean): boolean;
        /**
         * Disconnects the block and moves it to a new location.
         * @param {boolean} healStack Whether or not to heal the stack after
         *     disconnecting.
         * @param {!Coordinate} currentDragDeltaXY How far the pointer has
         *     moved from the position at mouse down, in pixel units.
         * @protected
         */
        protected disconnectBlock_(healStack: boolean, currentDragDeltaXY: Coordinate): void;
        /**
         * Fire a UI event at the start of a block drag.
         * @protected
         */
        protected fireDragStartEvent_(): void;
        /**
         * Execute a step of block dragging, based on the given event.  Update the
         * display accordingly.
         * @param {!Event} e The most recent move event.
         * @param {!Coordinate} currentDragDeltaXY How far the pointer has
         *     moved from the position at the start of the drag, in pixel units.
         * @public
         */
        public drag(e: Event, currentDragDeltaXY: Coordinate): void;
        /**
         * Finish a block drag and put the block back on the workspace.
         * @param {!Event} e The mouseup/touchend event.
         * @param {!Coordinate} currentDragDeltaXY How far the pointer has
         *     moved from the position at the start of the drag, in pixel units.
         * @public
         */
        public endDrag(e: Event, currentDragDeltaXY: Coordinate): void;
        /**
         * Calculates the drag delta and new location values after a block is dragged.
         * @param {!Coordinate} currentDragDeltaXY How far the pointer has
         *     moved from the start of the drag, in pixel units.
         * @return {{delta: !Coordinate, newLocation:
         *     !Coordinate}} New location after drag. delta is in
         *     workspace units. newLocation is the new coordinate where the block should
         *     end up.
         * @protected
         */
        protected getNewLocationAfterDrag_(currentDragDeltaXY: Coordinate): {
            delta: Coordinate;
            newLocation: Coordinate;
        };
        /**
         * May delete the dragging block, if allowed. If `this.wouldDeleteBlock_` is not
         * true, the block will not be deleted. This should be called at the end of a
         * block drag.
         * @return {boolean} True if the block was deleted.
         * @protected
         */
        protected maybeDeleteBlock_(): boolean;
        /**
         * Updates the necessary information to place a block at a certain location.
         * @param {!Coordinate} delta The change in location from where
         *     the block started the drag to where it ended the drag.
         * @protected
         */
        protected updateBlockAfterMove_(delta: Coordinate): void;
        /**
         * Fire a UI event at the end of a block drag.
         * @protected
         */
        protected fireDragEndEvent_(): void;
        /**
         * Adds or removes the style of the cursor for the toolbox.
         * This is what changes the cursor to display an x when a deletable block is
         * held over the toolbox.
         * @param {boolean} isEnd True if we are at the end of a drag, false otherwise.
         * @protected
         */
        protected updateToolboxStyle_(isEnd: boolean): void;
        /**
         * Fire a move event at the end of a block drag.
         * @protected
         */
        protected fireMoveEvent_(): void;
        /**
         * Update the cursor (and possibly the trash can lid) to reflect whether the
         * dragging block would be deleted if released immediately.
         * @protected
         */
        protected updateCursorDuringBlockDrag_(): void;
        /**
         * Convert a coordinate object from pixels to workspace units, including a
         * correction for mutator workspaces.
         * This function does not consider differing origins.  It simply scales the
         * input's x and y values.
         * @param {!Coordinate} pixelCoord A coordinate with x and y
         *     values in CSS pixel units.
         * @return {!Coordinate} The input coordinate divided by the
         *     workspace scale.
         * @protected
         */
        protected pixelsToWorkspaceUnits_(pixelCoord: Coordinate): Coordinate;
        /**
         * Move all of the icons connected to this drag.
         * @param {!Coordinate} dxy How far to move the icons from their
         *     original positions, in workspace units.
         * @protected
         */
        protected dragIcons_(dxy: Coordinate): void;
        /**
         * Get a list of the insertion markers that currently exist.  Drags have 0, 1,
         * or 2 insertion markers.
         * @return {!Array<!BlockSvg>} A possibly empty list of insertion
         *     marker blocks.
         * @public
         */
        public getInsertionMarkers(): Array<BlockSvg>;
    }
    import { BlockSvg } from "block_svg";
    import { WorkspaceSvg } from "workspace_svg";
    import { InsertionMarkerManager } from "insertion_marker_manager";
    import { Coordinate } from "utils/coordinate";
}
declare module "gesture" {
    /**
     * Note: In this file "start" refers to touchstart, mousedown, and pointerstart
     * events.  "End" refers to touchend, mouseup, and pointerend events.
     */
    export class Gesture {
        /**
         * Is a drag or other gesture currently in progress on any workspace?
         * @return {boolean} True if gesture is occurring.
         */
        static inProgress(): boolean;
        /**
         * Class for one gesture.
         * @param {!Event} e The event that kicked off this gesture.
         * @param {!WorkspaceSvg} creatorWorkspace The workspace that created
         *     this gesture and has a reference to it.
         * @constructor
         * @alias Blockly.Gesture
         */
        constructor(e: Event, creatorWorkspace: WorkspaceSvg);
        /**
         * The position of the mouse when the gesture started.  Units are CSS pixels,
         * with (0, 0) at the top left of the browser window (mouseEvent clientX/Y).
         * @type {Coordinate}
         * @private
         */
        private mouseDownXY_;
        /**
         * How far the mouse has moved during this drag, in pixel units.
         * (0, 0) is at this.mouseDownXY_.
         * @type {!Coordinate}
         * @private
         */
        private currentDragDeltaXY_;
        /**
         * The bubble that the gesture started on, or null if it did not start on a
         * bubble.
         * @type {IBubble}
         * @private
         */
        private startBubble_;
        /**
         * The field that the gesture started on, or null if it did not start on a
         * field.
         * @type {Field}
         * @private
         */
        private startField_;
        /**
         * The block that the gesture started on, or null if it did not start on a
         * block.
         * @type {BlockSvg}
         * @private
         */
        private startBlock_;
        /**
         * The block that this gesture targets.  If the gesture started on a
         * shadow block, this is the first non-shadow parent of the block.  If the
         * gesture started in the flyout, this is the root block of the block group
         * that was clicked or dragged.
         * @type {BlockSvg}
         * @private
         */
        private targetBlock_;
        /**
         * The workspace that the gesture started on.  There may be multiple
         * workspaces on a page; this is more accurate than using
         * Blockly.common.getMainWorkspace().
         * @type {WorkspaceSvg}
         * @protected
         */
        protected startWorkspace_: WorkspaceSvg;
        /**
         * The workspace that created this gesture.  This workspace keeps a reference
         * to the gesture, which will need to be cleared at deletion.
         * This may be different from the start workspace.  For instance, a flyout is
         * a workspace, but its parent workspace manages gestures for it.
         * @type {!WorkspaceSvg}
         * @private
         */
        private creatorWorkspace_;
        /**
         * Whether the pointer has at any point moved out of the drag radius.
         * A gesture that exceeds the drag radius is a drag even if it ends exactly
         * at its start point.
         * @type {boolean}
         * @private
         */
        private hasExceededDragRadius_;
        /**
         * Whether the workspace is currently being dragged.
         * @type {boolean}
         * @private
         */
        private isDraggingWorkspace_;
        /**
         * Whether the block is currently being dragged.
         * @type {boolean}
         * @private
         */
        private isDraggingBlock_;
        /**
         * Whether the bubble is currently being dragged.
         * @type {boolean}
         * @private
         */
        private isDraggingBubble_;
        /**
         * The event that most recently updated this gesture.
         * @type {!Event}
         * @private
         */
        private mostRecentEvent_;
        /**
         * A handle to use to unbind a mouse move listener at the end of a drag.
         * Opaque data returned from Blockly.bindEventWithChecks_.
         * @type {?browserEvents.Data}
         * @protected
         */
        protected onMoveWrapper_: any[][] | null;
        /**
         * A handle to use to unbind a mouse up listener at the end of a drag.
         * Opaque data returned from Blockly.bindEventWithChecks_.
         * @type {?browserEvents.Data}
         * @protected
         */
        protected onUpWrapper_: any[][] | null;
        /**
         * The object tracking a bubble drag, or null if none is in progress.
         * @type {BubbleDragger}
         * @private
         */
        private bubbleDragger_;
        /**
         * The object tracking a block drag, or null if none is in progress.
         * @type {?IBlockDragger}
         * @private
         */
        private blockDragger_;
        /**
         * The object tracking a workspace or flyout workspace drag, or null if none
         * is in progress.
         * @type {WorkspaceDragger}
         * @private
         */
        private workspaceDragger_;
        /**
         * The flyout a gesture started in, if any.
         * @type {IFlyout}
         * @private
         */
        private flyout_;
        /**
         * Boolean for sanity-checking that some code is only called once.
         * @type {boolean}
         * @private
         */
        private calledUpdateIsDragging_;
        /**
         * Boolean for sanity-checking that some code is only called once.
         * @type {boolean}
         * @private
         */
        private hasStarted_;
        /**
         * Boolean used internally to break a cycle in disposal.
         * @type {boolean}
         * @protected
         */
        protected isEnding_: boolean;
        /**
         * Boolean used to indicate whether or not to heal the stack after
         * disconnecting a block.
         * @type {boolean}
         * @private
         */
        private healStack_;
        /**
         * Sever all links from this object.
         * @package
         */
        dispose(): void;
        /**
         * Update internal state based on an event.
         * @param {!Event} e The most recent mouse or touch event.
         * @private
         */
        private updateFromEvent_;
        /**
         * DO MATH to set currentDragDeltaXY_ based on the most recent mouse position.
         * @param {!Coordinate} currentXY The most recent mouse/pointer
         *     position, in pixel units, with (0, 0) at the window's top left corner.
         * @return {boolean} True if the drag just exceeded the drag radius for the
         *     first time.
         * @private
         */
        private updateDragDelta_;
        /**
         * Update this gesture to record whether a block is being dragged from the
         * flyout.
         * This function should be called on a mouse/touch move event the first time the
         * drag radius is exceeded.  It should be called no more than once per gesture.
         * If a block should be dragged from the flyout this function creates the new
         * block on the main workspace and updates targetBlock_ and startWorkspace_.
         * @return {boolean} True if a block is being dragged from the flyout.
         * @private
         */
        private updateIsDraggingFromFlyout_;
        /**
         * Update this gesture to record whether a bubble is being dragged.
         * This function should be called on a mouse/touch move event the first time the
         * drag radius is exceeded.  It should be called no more than once per gesture.
         * If a bubble should be dragged this function creates the necessary
         * BubbleDragger and starts the drag.
         * @return {boolean} True if a bubble is being dragged.
         * @private
         */
        private updateIsDraggingBubble_;
        /**
         * Update this gesture to record whether a block is being dragged.
         * This function should be called on a mouse/touch move event the first time the
         * drag radius is exceeded.  It should be called no more than once per gesture.
         * If a block should be dragged, either from the flyout or in the workspace,
         * this function creates the necessary BlockDragger and starts the drag.
         * @return {boolean} True if a block is being dragged.
         * @private
         */
        private updateIsDraggingBlock_;
        /**
         * Update this gesture to record whether a workspace is being dragged.
         * This function should be called on a mouse/touch move event the first time the
         * drag radius is exceeded.  It should be called no more than once per gesture.
         * If a workspace is being dragged this function creates the necessary
         * WorkspaceDragger and starts the drag.
         * @private
         */
        private updateIsDraggingWorkspace_;
        /**
         * Update this gesture to record whether anything is being dragged.
         * This function should be called on a mouse/touch move event the first time the
         * drag radius is exceeded.  It should be called no more than once per gesture.
         * @private
         */
        private updateIsDragging_;
        /**
         * Create a block dragger and start dragging the selected block.
         * @private
         */
        private startDraggingBlock_;
        /**
         * Create a bubble dragger and start dragging the selected bubble.
         * @private
         */
        private startDraggingBubble_;
        /**
         * Start a gesture: update the workspace to indicate that a gesture is in
         * progress and bind mousemove and mouseup handlers.
         * @param {!Event} e A mouse down or touch start event.
         * @package
         */
        doStart(e: Event): void;
        /**
         * Bind gesture events.
         * @param {!Event} e A mouse down or touch start event.
         * @package
         */
        bindMouseEvents(e: Event): void;
        /**
         * Handle a mouse move or touch move event.
         * @param {!Event} e A mouse move or touch move event.
         * @package
         */
        handleMove(e: Event): void;
        /**
         * Handle a mouse up or touch end event.
         * @param {!Event} e A mouse up or touch end event.
         * @package
         */
        handleUp(e: Event): void;
        /**
         * Cancel an in-progress gesture.  If a workspace or block drag is in progress,
         * end the drag at the most recent location.
         * @package
         */
        cancel(): void;
        /**
         * Handle a real or faked right-click event by showing a context menu.
         * @param {!Event} e A mouse move or touch move event.
         * @package
         */
        handleRightClick(e: Event): void;
        /**
         * Handle a mousedown/touchstart event on a workspace.
         * @param {!Event} e A mouse down or touch start event.
         * @param {!WorkspaceSvg} ws The workspace the event hit.
         * @package
         */
        handleWsStart(e: Event, ws: WorkspaceSvg): void;
        /**
         * Fires a workspace click event.
         * @param {!WorkspaceSvg} ws The workspace that a user clicks on.
         * @private
         */
        private fireWorkspaceClick_;
        /**
         * Handle a mousedown/touchstart event on a flyout.
         * @param {!Event} e A mouse down or touch start event.
         * @param {!IFlyout} flyout The flyout the event hit.
         * @package
         */
        handleFlyoutStart(e: Event, flyout: IFlyout): void;
        /**
         * Handle a mousedown/touchstart event on a block.
         * @param {!Event} e A mouse down or touch start event.
         * @param {!BlockSvg} block The block the event hit.
         * @package
         */
        handleBlockStart(e: Event, block: BlockSvg): void;
        /**
         * Handle a mousedown/touchstart event on a bubble.
         * @param {!Event} e A mouse down or touch start event.
         * @param {!IBubble} bubble The bubble the event hit.
         * @package
         */
        handleBubbleStart(e: Event, bubble: IBubble): void;
        /**
         * Execute a bubble click.
         * @private
         */
        private doBubbleClick_;
        /**
         * Execute a field click.
         * @private
         */
        private doFieldClick_;
        /**
         * Execute a block click.
         * @private
         */
        private doBlockClick_;
        /**
         * Execute a workspace click. When in accessibility mode shift clicking will
         * move the cursor.
         * @param {!Event} _e A mouse up or touch end event.
         * @private
         */
        private doWorkspaceClick_;
        /**
         * Move the dragged/clicked block to the front of the workspace so that it is
         * not occluded by other blocks.
         * @private
         */
        private bringBlockToFront_;
        /**
         * Record the field that a gesture started on.
         * @param {Field} field The field the gesture started on.
         * @package
         */
        setStartField(field: Field): void;
        /**
         * Record the bubble that a gesture started on
         * @param {IBubble} bubble The bubble the gesture started on.
         * @package
         */
        setStartBubble(bubble: IBubble): void;
        /**
         * Record the block that a gesture started on, and set the target block
         * appropriately.
         * @param {BlockSvg} block The block the gesture started on.
         * @package
         */
        setStartBlock(block: BlockSvg): void;
        /**
         * Record the block that a gesture targets, meaning the block that will be
         * dragged if this turns into a drag.  If this block is a shadow, that will be
         * its first non-shadow parent.
         * @param {BlockSvg} block The block the gesture targets.
         * @private
         */
        private setTargetBlock_;
        /**
         * Record the workspace that a gesture started on.
         * @param {WorkspaceSvg} ws The workspace the gesture started on.
         * @private
         */
        private setStartWorkspace_;
        /**
         * Record the flyout that a gesture started on.
         * @param {IFlyout} flyout The flyout the gesture started on.
         * @private
         */
        private setStartFlyout_;
        /**
         * Whether this gesture is a click on a bubble.  This should only be called when
         * ending a gesture (mouse up, touch end).
         * @return {boolean} Whether this gesture was a click on a bubble.
         * @private
         */
        private isBubbleClick_;
        /**
         * Whether this gesture is a click on a block.  This should only be called when
         * ending a gesture (mouse up, touch end).
         * @return {boolean} Whether this gesture was a click on a block.
         * @private
         */
        private isBlockClick_;
        /**
         * Whether this gesture is a click on a field.  This should only be called when
         * ending a gesture (mouse up, touch end).
         * @return {boolean} Whether this gesture was a click on a field.
         * @private
         */
        private isFieldClick_;
        /**
         * Whether this gesture is a click on a workspace.  This should only be called
         * when ending a gesture (mouse up, touch end).
         * @return {boolean} Whether this gesture was a click on a workspace.
         * @private
         */
        private isWorkspaceClick_;
        /**
         * Whether this gesture is a drag of either a workspace or block.
         * This function is called externally to block actions that cannot be taken
         * mid-drag (e.g. using the keyboard to delete the selected blocks).
         * @return {boolean} True if this gesture is a drag of a workspace or block.
         * @package
         */
        isDragging(): boolean;
        /**
         * Whether this gesture has already been started.  In theory every mouse down
         * has a corresponding mouse up, but in reality it is possible to lose a
         * mouse up, leaving an in-process gesture hanging.
         * @return {boolean} Whether this gesture was a click on a workspace.
         * @package
         */
        hasStarted(): boolean;
        /**
         * Get a list of the insertion markers that currently exist.  Block drags have
         * 0, 1, or 2 insertion markers.
         * @return {!Array<!BlockSvg>} A possibly empty list of insertion
         *     marker blocks.
         * @package
         */
        getInsertionMarkers(): Array<BlockSvg>;
        /**
         * Gets the current dragger if an item is being dragged. Null if nothing is
         * being dragged.
         * @return {!WorkspaceDragger|!BubbleDragger|!IBlockDragger|null}
         *    The dragger that is currently in use or null if no drag is in progress.
         */
        getCurrentDragger(): WorkspaceDragger | BubbleDragger | IBlockDragger | null;
    }
    import { WorkspaceSvg } from "workspace_svg";
    import { IFlyout } from "interfaces/i_flyout";
    import { BlockSvg } from "block_svg";
    import { IBubble } from "interfaces/i_bubble";
    import { Field } from "field";
    import { WorkspaceDragger } from "workspace_dragger";
    import { BubbleDragger } from "bubble_dragger";
    import { IBlockDragger } from "interfaces/i_block_dragger";
}
declare module "touch" {
    /**
     * Whether touch is enabled in the browser.
     * Copied from Closure's goog.events.BrowserFeature.TOUCH_ENABLED
     * @const
     */
    export const TOUCH_ENABLED: boolean;
    /**
     * The TOUCH_MAP lookup dictionary specifies additional touch events to fire,
     * in conjunction with mouse events.
     * @type {Object}
     * @alias Blockly.Touch.TOUCH_MAP
     */
    export let TOUCH_MAP: any;
    /**
     * Context menus on touch devices are activated using a long-press.
     * Unfortunately the contextmenu touch event is currently (2015) only supported
     * by Chrome.  This function is fired on any touchstart event, queues a task,
     * which after about a second opens the context menu.  The tasks is killed
     * if the touch event terminates early.
     * @param {!Event} e Touch start event.
     * @param {Gesture} gesture The gesture that triggered this longStart.
     * @alias Blockly.Touch.longStart
     * @package
     */
    export function longStart(e: Event, gesture: Gesture): void;
    /**
     * Nope, that's not a long-press.  Either touchend or touchcancel was fired,
     * or a drag hath begun.  Kill the queued long-press task.
     * @alias Blockly.Touch.longStop
     * @package
     */
    export function longStop(): void;
    /**
     * Clear the touch identifier that tracks which touch stream to pay attention
     * to.  This ends the current drag/gesture and allows other pointers to be
     * captured.
     * @alias Blockly.Touch.clearTouchIdentifier
     */
    export function clearTouchIdentifier(): void;
    /**
     * Decide whether Blockly should handle or ignore this event.
     * Mouse and touch events require special checks because we only want to deal
     * with one touch stream at a time.  All other events should always be handled.
     * @param {!Event} e The event to check.
     * @return {boolean} True if this event should be passed through to the
     *     registered handler; false if it should be blocked.
     * @alias Blockly.Touch.shouldHandleEvent
     */
    export function shouldHandleEvent(e: Event): boolean;
    /**
     * Get the touch identifier from the given event.  If it was a mouse event, the
     * identifier is the string 'mouse'.
     * @param {!Event} e Mouse event or touch event.
     * @return {string} The touch identifier from the first changed touch, if
     *     defined.  Otherwise 'mouse'.
     * @alias Blockly.Touch.getTouchIdentifierFromEvent
     */
    export function getTouchIdentifierFromEvent(e: Event): string;
    /**
     * Check whether the touch identifier on the event matches the current saved
     * identifier.  If there is no identifier, that means it's a mouse event and
     * we'll use the identifier "mouse".  This means we won't deal well with
     * multiple mice being used at the same time.  That seems okay.
     * If the current identifier was unset, save the identifier from the
     * event.  This starts a drag/gesture, during which touch events with other
     * identifiers will be silently ignored.
     * @param {!Event} e Mouse event or touch event.
     * @return {boolean} Whether the identifier on the event matches the current
     *     saved identifier.
     * @alias Blockly.Touch.checkTouchIdentifier
     */
    export function checkTouchIdentifier(e: Event): boolean;
    /**
     * Set an event's clientX and clientY from its first changed touch.  Use this to
     * make a touch event work in a mouse event handler.
     * @param {!Event} e A touch event.
     * @alias Blockly.Touch.setClientFromTouch
     */
    export function setClientFromTouch(e: Event): void;
    /**
     * Check whether a given event is a mouse or touch event.
     * @param {!Event} e An event.
     * @return {boolean} True if it is a mouse or touch event; false otherwise.
     * @alias Blockly.Touch.isMouseOrTouchEvent
     */
    export function isMouseOrTouchEvent(e: Event): boolean;
    /**
     * Check whether a given event is a touch event or a pointer event.
     * @param {!Event} e An event.
     * @return {boolean} True if it is a touch event; false otherwise.
     * @alias Blockly.Touch.isTouchEvent
     */
    export function isTouchEvent(e: Event): boolean;
    /**
     * Split an event into an array of events, one per changed touch or mouse
     * point.
     * @param {!Event} e A mouse event or a touch event with one or more changed
     * touches.
     * @return {!Array<!Event>} An array of mouse or touch events.  Each touch
     *     event will have exactly one changed touch.
     * @alias Blockly.Touch.splitEventByTouches
     */
    export function splitEventByTouches(e: Event): Array<Event>;
    import { Gesture } from "gesture";
}
declare module "browser_events" {
    /**
     * Blockly opaque event data used to unbind events when using
     * `bind` and `conditionalBind`.
     */
    export type Data = Array<any[]>;
    /**
     * Blockly opaque event data used to unbind events when using
     * `bind` and `conditionalBind`.
     * @typedef {!Array<!Array>}
     * @alias Blockly.browserEvents.Data
     */
    export let Data: any;
    /**
     * Bind an event handler that can be ignored if it is not part of the active
     * touch stream.
     * Use this for events that either start or continue a multi-part gesture (e.g.
     * mousedown or mousemove, which may be part of a drag or click).
     * @param {!EventTarget} node Node upon which to listen.
     * @param {string} name Event name to listen to (e.g. 'mousedown').
     * @param {?Object} thisObject The value of 'this' in the function.
     * @param {!Function} func Function to call when event is triggered.
     * @param {boolean=} opt_noCaptureIdentifier True if triggering on this event
     *     should not block execution of other event handlers on this touch or
     *     other simultaneous touches.  False by default.
     * @param {boolean=} opt_noPreventDefault True if triggering on this event
     *     should prevent the default handler.  False by default.  If
     *     opt_noPreventDefault is provided, opt_noCaptureIdentifier must also be
     *     provided.
     * @return {!Data} Opaque data that can be passed to
     *     unbindEvent_.
     * @alias Blockly.browserEvents.conditionalBind
     */
    export function conditionalBind(node: EventTarget, name: string, thisObject: any | null, func: Function, opt_noCaptureIdentifier?: boolean | undefined, opt_noPreventDefault?: boolean | undefined): any[][];
    /**
     * Bind an event handler that should be called regardless of whether it is part
     * of the active touch stream.
     * Use this for events that are not part of a multi-part gesture (e.g.
     * mouseover for tooltips).
     * @param {!EventTarget} node Node upon which to listen.
     * @param {string} name Event name to listen to (e.g. 'mousedown').
     * @param {?Object} thisObject The value of 'this' in the function.
     * @param {!Function} func Function to call when event is triggered.
     * @return {!Data} Opaque data that can be passed to
     *     unbindEvent_.
     * @alias Blockly.browserEvents.bind
     */
    export function bind(node: EventTarget, name: string, thisObject: any | null, func: Function): any[][];
    /**
     * Unbind one or more events event from a function call.
     * @param {!Data} bindData Opaque data from bindEvent_.
     *     This list is emptied during the course of calling this function.
     * @return {!Function} The function call.
     * @alias Blockly.browserEvents.unbind
     */
    export function unbind(bindData: any[][]): Function;
    /**
     * Returns true if this event is targeting a text input widget?
     * @param {!Event} e An event.
     * @return {boolean} True if text input.
     * @alias Blockly.browserEvents.isTargetInput
     */
    export function isTargetInput(e: Event): boolean;
    /**
     * Returns true this event is a right-click.
     * @param {!Event} e Mouse event.
     * @return {boolean} True if right-click.
     * @alias Blockly.browserEvents.isRightButton
     */
    export function isRightButton(e: Event): boolean;
    /**
     * Returns the converted coordinates of the given mouse event.
     * The origin (0,0) is the top-left corner of the Blockly SVG.
     * @param {!Event} e Mouse event.
     * @param {!Element} svg SVG element.
     * @param {?SVGMatrix} matrix Inverted screen CTM to use.
     * @return {!SVGPoint} Object with .x and .y properties.
     * @alias Blockly.browserEvents.mouseToSvg
     */
    export function mouseToSvg(e: Event, svg: Element, matrix: SVGMatrix | null): SVGPoint;
    /**
     * Returns the scroll delta of a mouse event in pixel units.
     * @param {!Event} e Mouse event.
     * @return {{x: number, y: number}} Scroll delta object with .x and .y
     *    properties.
     * @alias Blockly.browserEvents.getScrollDeltaPixels
     */
    export function getScrollDeltaPixels(e: Event): {
        x: number;
        y: number;
    };
}
declare module "tooltip" {
    /**
     * A type which can define a tooltip.
     * Either a string, an object containing a tooltip property, or a function which
     * returns either a string, or another arbitrarily nested function which
     * eventually unwinds to a string.
     */
    export type TipInfo = string | {
        tooltip: any;
    } | (() => (string | Function));
    /**
     * A type which can define a tooltip.
     * Either a string, an object containing a tooltip property, or a function which
     * returns either a string, or another arbitrarily nested function which
     * eventually unwinds to a string.
     * @typedef {string|{tooltip}|function(): (string|!Function)}
     * @alias Blockly.Tooltip.TipInfo
     */
    export let TipInfo: any;
    /**
     * Returns whether or not a tooltip is showing
     * @returns {boolean} True if a tooltip is showing
     * @alias Blockly.Tooltip.isVisible
     */
    export function isVisible(): boolean;
    /**
     * Maximum width (in characters) of a tooltip.
     * @alias Blockly.Tooltip.LIMIT
     */
    export const LIMIT: 50;
    /**
     * Horizontal offset between mouse cursor and tooltip.
     * @alias Blockly.Tooltip.OFFSET_X
     */
    export const OFFSET_X: 0;
    /**
     * Vertical offset between mouse cursor and tooltip.
     * @alias Blockly.Tooltip.OFFSET_Y
     */
    export const OFFSET_Y: 10;
    /**
     * Radius mouse can move before killing tooltip.
     * @alias Blockly.Tooltip.RADIUS_OK
     */
    export const RADIUS_OK: 10;
    /**
     * Delay before tooltip appears.
     * @alias Blockly.Tooltip.HOVER_MS
     */
    export const HOVER_MS: 750;
    /**
     * Horizontal padding between tooltip and screen edge.
     * @alias Blockly.Tooltip.MARGINS
     */
    export const MARGINS: 5;
    /**
     * Returns the HTML tooltip container.
     * @returns {Element} The HTML tooltip container.
     * @alias Blockly.Tooltip.getDiv
     */
    export function getDiv(): Element;
    /**
     * Returns the tooltip text for the given element.
     * @param {?Object} object The object to get the tooltip text of.
     * @return {string} The tooltip text of the element.
     * @alias Blockly.Tooltip.getTooltipOfObject
     */
    export function getTooltipOfObject(object: any | null): string;
    /**
     * Create the tooltip div and inject it onto the page.
     * @alias Blockly.Tooltip.createDom
     */
    export function createDom(): void;
    /**
     * Binds the required mouse events onto an SVG element.
     * @param {!Element} element SVG element onto which tooltip is to be bound.
     * @alias Blockly.Tooltip.bindMouseEvents
     */
    export function bindMouseEvents(element: Element): void;
    /**
     * Unbinds tooltip mouse events from the SVG element.
     * @param {!Element} element SVG element onto which tooltip is bound.
     * @alias Blockly.Tooltip.unbindMouseEvents
     */
    export function unbindMouseEvents(element: Element): void;
    /**
     * Dispose of the tooltip.
     * @alias Blockly.Tooltip.dispose
     * @package
     */
    export function dispose(): void;
    /**
     * Hide the tooltip.
     * @alias Blockly.Tooltip.hide
     */
    export function hide(): void;
    /**
     * Hide any in-progress tooltips and block showing new tooltips until the next
     * call to unblock().
     * @alias Blockly.Tooltip.block
     * @package
     */
    export function block(): void;
    /**
     * Unblock tooltips: allow them to be scheduled and shown according to their own
     * logic.
     * @alias Blockly.Tooltip.unblock
     * @package
     */
    export function unblock(): void;
}
declare module "interfaces/i_ast_node_location_with_block" {
    /**
     * An AST node location that has an associated block.
     * @interface
     * @extends {IASTNodeLocation}
     * @alias Blockly.IASTNodeLocationWithBlock
     */
    export class IASTNodeLocationWithBlock {
    }
}
declare module "shortcut_registry" {
    export class ShortcutRegistry {
        /**
         * Registry of all keyboard shortcuts, keyed by name of shortcut.
         * @type {!Object<string, !ShortcutRegistry.KeyboardShortcut>}
         * @private
         */
        private registry_;
        /**
         * Map of key codes to an array of shortcut names.
         * @type {!Object<string, !Array<string>>}
         * @private
         */
        private keyMap_;
        /**
         * Registers a keyboard shortcut.
         * @param {!ShortcutRegistry.KeyboardShortcut} shortcut The
         *     shortcut for this key code.
         * @param {boolean=} opt_allowOverrides True to prevent a warning when
         *     overriding an already registered item.
         * @throws {Error} if a shortcut with the same name already exists.
         * @public
         */
        public register(shortcut: ShortcutRegistry.KeyboardShortcut, opt_allowOverrides?: boolean | undefined): void;
        /**
         * Unregisters a keyboard shortcut registered with the given key code. This will
         * also remove any key mappings that reference this shortcut.
         * @param {string} shortcutName The name of the shortcut to unregister.
         * @return {boolean} True if an item was unregistered, false otherwise.
         * @public
         */
        public unregister(shortcutName: string): boolean;
        /**
         * Adds a mapping between a keycode and a keyboard shortcut.
         * @param {string|KeyCodes} keyCode The key code for the keyboard
         *     shortcut. If registering a key code with a modifier (ex: ctrl+c) use
         *     ShortcutRegistry.registry.createSerializedKey;
         * @param {string} shortcutName The name of the shortcut to execute when the
         *     given keycode is pressed.
         * @param {boolean=} opt_allowCollision True to prevent an error when adding a
         *     shortcut to a key that is already mapped to a shortcut.
         * @throws {Error} if the given key code is already mapped to a shortcut.
         * @public
         */
        public addKeyMapping(keyCode: string | KeyCodes, shortcutName: string, opt_allowCollision?: boolean | undefined): void;
        /**
         * Removes a mapping between a keycode and a keyboard shortcut.
         * @param {string} keyCode The key code for the keyboard shortcut. If
         *     registering a key code with a modifier (ex: ctrl+c) use
         *     ShortcutRegistry.registry.createSerializedKey;
         * @param {string} shortcutName The name of the shortcut to execute when the
         *     given keycode is pressed.
         * @param {boolean=} opt_quiet True to not console warn when there is no
         *     shortcut to remove.
         * @return {boolean} True if a key mapping was removed, false otherwise.
         * @public
         */
        public removeKeyMapping(keyCode: string, shortcutName: string, opt_quiet?: boolean | undefined): boolean;
        /**
         * Removes all the key mappings for a shortcut with the given name.
         * Useful when changing the default key mappings and the key codes registered to
         * the shortcut are unknown.
         * @param {string} shortcutName The name of the shortcut to remove from the key
         *     map.
         * @public
         */
        public removeAllKeyMappings(shortcutName: string): void;
        /**
         * Sets the key map. Setting the key map will override any default key mappings.
         * @param {!Object<string, !Array<string>>} keyMap The object with key code to
         *     shortcut names.
         * @public
         */
        public setKeyMap(keyMap: {
            [x: string]: Array<string>;
        }): void;
        /**
         * Gets the current key map.
         * @return {!Object<string,!Array<!ShortcutRegistry.KeyboardShortcut>>}
         *     The object holding key codes to ShortcutRegistry.KeyboardShortcut.
         * @public
         */
        public getKeyMap(): {
            [x: string]: Array<ShortcutRegistry.KeyboardShortcut>;
        };
        /**
         * Gets the registry of keyboard shortcuts.
         * @return {!Object<string, !ShortcutRegistry.KeyboardShortcut>}
         *     The registry of keyboard shortcuts.
         * @public
         */
        public getRegistry(): {
            [x: string]: ShortcutRegistry.KeyboardShortcut;
        };
        /**
         * Handles key down events.
         * @param {!Workspace} workspace The main workspace where the event was
         *     captured.
         * @param {!Event} e The key down event.
         * @return {boolean} True if the event was handled, false otherwise.
         * @public
         */
        public onKeyDown(workspace: Workspace, e: Event): boolean;
        /**
         * Gets the shortcuts registered to the given key code.
         * @param {string} keyCode The serialized key code.
         * @return {!Array<string>|undefined} The list of shortcuts to call when the
         *     given keyCode is used. Undefined if no shortcuts exist.
         * @public
         */
        public getShortcutNamesByKeyCode(keyCode: string): Array<string> | undefined;
        /**
         * Gets the serialized key codes that the shortcut with the given name is
         * registered under.
         * @param {string} shortcutName The name of the shortcut.
         * @return {!Array<string>} An array with all the key codes the shortcut is
         *     registered under.
         * @public
         */
        public getKeyCodesByShortcutName(shortcutName: string): Array<string>;
        /**
         * Serializes a key event.
         * @param {!Event} e A key down event.
         * @return {string} The serialized key code for the given event.
         * @private
         */
        private serializeKeyEvent_;
        /**
         * Checks whether any of the given modifiers are not valid.
         * @param {!Array<string>} modifiers List of modifiers to be used with the key.
         * @throws {Error} if the modifier is not in the valid modifiers list.
         * @private
         */
        private checkModifiers_;
        /**
         * Creates the serialized key code that will be used in the key map.
         * @param {number} keyCode Number code representing the key.
         * @param {?Array<string>} modifiers List of modifier key codes to be used with
         *     the key. All valid modifiers can be found in the
         *     ShortcutRegistry.modifierKeys.
         * @return {string} The serialized key code for the given modifiers and key.
         * @public
         */
        public createSerializedKey(keyCode: number, modifiers: Array<string> | null): string;
    }
    export namespace ShortcutRegistry {
        namespace modifierKeys {
            const Shift: KeyCodes;
            const Control: KeyCodes;
            const Alt: KeyCodes;
            const Meta: KeyCodes;
        }
        /**
         * A keyboard shortcut.
         */
        type KeyboardShortcut = {
            callback: (((arg0: Workspace, arg1: Event, arg2: ShortcutRegistry.KeyboardShortcut) => boolean) | undefined);
            name: string;
            preconditionFn: (((arg0: Workspace) => boolean) | undefined);
            metadata: (any | undefined);
        };
    }
    import { KeyCodes } from "utils/keycodes";
    import { Workspace } from "workspace";
}
declare module "interfaces/i_keyboard_accessible" {
    /**
     * An interface for an object that handles keyboard shortcuts.
     * @interface
     * @alias Blockly.IKeyboardAccessible
     */
    export class IKeyboardAccessible {
    }
}
declare module "field" {
    export class Field {
        /**
         * Abstract class for an editable field.
         * @param {*} value The initial value of the field.
         * @param {?Function=} opt_validator  A function that is called to validate
         *    changes to the field's value. Takes in a value & returns a validated
         *    value, or null to abort the change.
         * @param {Object=} opt_config A map of options used to configure the field. See
         *    the individual field's documentation for a list of properties this
         *    parameter supports.
         * @constructor
         * @abstract
         * @implements {IASTNodeLocationSvg}
         * @implements {IASTNodeLocationWithBlock}
         * @implements {IKeyboardAccessible}
         * @implements {IRegistrable}
         * @alias Blockly.Field
         */
        constructor(value: any, opt_validator?: (Function | null) | undefined, opt_config?: any | undefined);
        /**
         * A generic value possessed by the field.
         * Should generally be non-null, only null when the field is created.
         * @type {*}
         * @protected
         */
        protected value_: any;
        /**
         * Validation function called when user edits an editable field.
         * @type {Function}
         * @protected
         */
        protected validator_: Function;
        /**
         * Used to cache the field's tooltip value if setTooltip is called when the
         * field is not yet initialized. Is *not* guaranteed to be accurate.
         * @type {?Tooltip.TipInfo}
         * @private
         */
        private tooltip_;
        /**
         * The size of the area rendered by the field.
         * @type {!Size}
         * @protected
         */
        protected size_: Size;
        /**
         * Holds the cursors svg element when the cursor is attached to the field.
         * This is null if there is no cursor on the field.
         * @type {SVGElement}
         * @private
         */
        private cursorSvg_;
        /**
         * Holds the markers svg element when the marker is attached to the field.
         * This is null if there is no marker on the field.
         * @type {SVGElement}
         * @private
         */
        private markerSvg_;
        /**
         * The rendered field's SVG group element.
         * @type {SVGGElement}
         * @protected
         */
        protected fieldGroup_: SVGGElement;
        /**
         * The rendered field's SVG border element.
         * @type {SVGRectElement}
         * @protected
         */
        protected borderRect_: SVGRectElement;
        /**
         * The rendered field's SVG text element.
         * @type {SVGTextElement}
         * @protected
         */
        protected textElement_: SVGTextElement;
        /**
         * The rendered field's text content element.
         * @type {Text}
         * @protected
         */
        protected textContent_: Text;
        /**
         * Mouse down event listener data.
         * @type {?browserEvents.Data}
         * @private
         */
        private mouseDownWrapper_;
        /**
         * Constants associated with the source block's renderer.
         * @type {ConstantProvider}
         * @protected
         */
        protected constants_: ConstantProvider;
        /**
         * Process the configuration map passed to the field.
         * @param {!Object} config A map of options used to configure the field. See
         *    the individual field's documentation for a list of properties this
         *    parameter supports.
         * @protected
         */
        protected configure_(config: any): void;
        /**
         * Attach this field to a block.
         * @param {!Block} block The block containing this field.
         */
        setSourceBlock(block: Block): void;
        sourceBlock_: Block;
        /**
         * Get the renderer constant provider.
         * @return {?ConstantProvider} The renderer constant
         *     provider.
         */
        getConstants(): ConstantProvider | null;
        /**
         * Get the block this field is attached to.
         * @return {Block} The block containing this field.
         */
        getSourceBlock(): Block;
        /**
         * Initialize everything to render this field. Override
         * methods initModel and initView rather than this method.
         * @package
         */
        init(): void;
        /**
         * Create the block UI for this field.
         * @package
         */
        initView(): void;
        /**
         * Initializes the model of the field after it has been installed on a block.
         * No-op by default.
         * @package
         */
        initModel(): void;
        /**
         * Create a field border rect element. Not to be overridden by subclasses.
         * Instead modify the result of the function inside initView, or create a
         * separate function to call.
         * @protected
         */
        protected createBorderRect_(): void;
        /**
         * Create a field text element. Not to be overridden by subclasses. Instead
         * modify the result of the function inside initView, or create a separate
         * function to call.
         * @protected
         */
        protected createTextElement_(): void;
        /**
         * Bind events to the field. Can be overridden by subclasses if they need to do
         * custom input handling.
         * @protected
         */
        protected bindEvents_(): void;
        /**
         * Sets the field's value based on the given XML element. Should only be called
         *     by Blockly.Xml.
         * @param {!Element} fieldElement The element containing info about the
         *    field's state.
         * @package
         */
        fromXml(fieldElement: Element): void;
        /**
         * Serializes this field's value to XML. Should only be called by Blockly.Xml.
         * @param {!Element} fieldElement The element to populate with info about the
         *    field's state.
         * @return {!Element} The element containing info about the field's state.
         * @package
         */
        toXml(fieldElement: Element): Element;
        /**
         * Saves this fields value as something which can be serialized to JSON. Should
         * only be called by the serialization system.
         * @param {boolean=} _doFullSerialization If true, this signals to the field
         *     that if it normally just saves a reference to some state (eg variable
         *     fields) it should instead serialize the full state of the thing being
         *     referenced.
         * @return {*} JSON serializable state.
         * @package
         */
        saveState(_doFullSerialization?: boolean | undefined): any;
        /**
         * Sets the field's state based on the given state value. Should only be called
         * by the serialization system.
         * @param {*} state The state we want to apply to the field.
         * @package
         */
        loadState(state: any): void;
        /**
         * Returns a stringified version of the XML state, if it should be used.
         * Otherwise this returns null, to signal the field should use its own
         * serialization.
         * @param {*} callingClass The class calling this method.
         *     Used to see if `this` has overridden any relevant hooks.
         * @return {?string} The stringified version of the XML state, or null.
         * @protected
         */
        protected saveLegacyState(callingClass: any): string | null;
        /**
         * Loads the given state using either the old XML hoooks, if they should be
         * used. Returns true to indicate loading has been handled, false otherwise.
         * @param {*} callingClass The class calling this method.
         *     Used to see if `this` has overridden any relevant hooks.
         * @param {*} state The state to apply to the field.
         * @return {boolean} Whether the state was applied or not.
         */
        loadLegacyState(callingClass: any, state: any): boolean;
        /**
         * Dispose of all DOM objects and events belonging to this editable field.
         * @package
         */
        dispose(): void;
        disposed: boolean;
        /**
         * Add or remove the UI indicating if this field is editable or not.
         */
        updateEditable(): void;
        /**
         * Set whether this field's value can be changed using the editor when the
         *     source block is editable.
         * @param {boolean} enabled True if enabled.
         */
        setEnabled(enabled: boolean): void;
        enabled_: boolean;
        /**
         * Check whether this field's value can be changed using the editor when the
         *     source block is editable.
         * @return {boolean} Whether this field is enabled.
         */
        isEnabled(): boolean;
        /**
         * Check whether this field defines the showEditor_ function.
         * @return {boolean} Whether this field is clickable.
         */
        isClickable(): boolean;
        /**
         * Check whether this field is currently editable.  Some fields are never
         * EDITABLE (e.g. text labels). Other fields may be EDITABLE but may exist on
         * non-editable blocks or be currently disabled.
         * @return {boolean} Whether this field is currently enabled, editable and on
         * an editable block.
         */
        isCurrentlyEditable(): boolean;
        /**
         * Check whether this field should be serialized by the XML renderer.
         * Handles the logic for backwards compatibility and incongruous states.
         * @return {boolean} Whether this field should be serialized or not.
         */
        isSerializable(): boolean;
        /**
         * Gets whether this editable field is visible or not.
         * @return {boolean} True if visible.
         */
        isVisible(): boolean;
        /**
         * Sets whether this editable field is visible or not. Should only be called
         * by input.setVisible.
         * @param {boolean} visible True if visible.
         * @package
         */
        setVisible(visible: boolean): void;
        visible_: any;
        /**
         * Sets a new validation function for editable fields, or clears a previously
         * set validator.
         *
         * The validator function takes in the new field value, and returns
         * validated value. The validated value could be the input value, a modified
         * version of the input value, or null to abort the change.
         *
         * If the function does not return anything (or returns undefined) the new
         * value is accepted as valid. This is to allow for fields using the
         * validated function as a field-level change event notification.
         *
         * @param {Function} handler The validator function
         *     or null to clear a previous validator.
         */
        setValidator(handler: Function): void;
        /**
         * Gets the validation function for editable fields, or null if not set.
         * @return {?Function} Validation function, or null.
         */
        getValidator(): Function | null;
        /**
         * Gets the group element for this editable field.
         * Used for measuring the size and for positioning.
         * @return {!SVGGElement} The group element.
         */
        getSvgRoot(): SVGGElement;
        /**
         * Updates the field to match the color/style of the block. Should only be
         * called by BlockSvg.applyColor().
         * @package
         */
        applyColor(): void;
        /**
         * Used by getSize() to move/resize any DOM elements, and get the new size.
         *
         * All rendering that has an effect on the size/shape of the block should be
         * done here, and should be triggered by getSize().
         * @protected
         */
        protected render_(): void;
        /**
         * Show an editor when the field is clicked only if the field is clickable.
         * @param {Event=} opt_e Optional mouse event that triggered the field to open,
         *     or undefined if triggered programmatically.
         * @package
         */
        showEditor(opt_e?: Event | undefined): void;
        /**
         * Updates the size of the field based on the text.
         * @param {number=} opt_margin margin to use when positioning the text element.
         * @protected
         */
        protected updateSize_(opt_margin?: number | undefined): void;
        /**
         * Position a field's text element after a size change.  This handles both LTR
         * and RTL positioning.
         * @param {number} xOffset x offset to use when positioning the text element.
         * @param {number} contentWidth The content width.
         * @protected
         */
        protected positionTextElement_(xOffset: number, contentWidth: number): void;
        /**
         * Position a field's border rect after a size change.
         * @protected
         */
        protected positionBorderRect_(): void;
        /**
         * Returns the height and width of the field.
         *
         * This should *in general* be the only place render_ gets called from.
         * @return {!Size} Height and width.
         */
        getSize(): Size;
        isDirty_: boolean;
        /**
         * Returns the bounding box of the rendered field, accounting for workspace
         * scaling.
         * @return {!Rect} An object with top, bottom, left, and right in
         *     pixels relative to the top left corner of the page (window coordinates).
         * @package
         */
        getScaledBBox(): Rect;
        /**
         * Get the text from this field to display on the block. May differ from
         * ``getText`` due to ellipsis, and other formatting.
         * @return {string} Text to display.
         * @protected
         */
        protected getDisplayText_(): string;
        /**
         * Get the text from this field.
         * @return {string} Current text.
         */
        getText(): string;
        /**
         * Force a rerender of the block that this field is installed on, which will
         * rerender this field and adjust for any sizing changes.
         * Other fields on the same block will not rerender, because their sizes have
         * already been recorded.
         * @package
         */
        markDirty(): void;
        /**
         * Force a rerender of the block that this field is installed on, which will
         * rerender this field and adjust for any sizing changes.
         * Other fields on the same block will not rerender, because their sizes have
         * already been recorded.
         * @package
         */
        forceRerender(): void;
        /**
         * Used to change the value of the field. Handles validation and events.
         * Subclasses should override doClassValidation_ and doValueUpdate_ rather
         * than this method.
         * @param {*} newValue New value.
         */
        setValue(newValue: any): void;
        /**
         * Process the result of validation.
         * @param {*} newValue New value.
         * @param {*} validatedValue Validated value.
         * @return {*} New value, or an Error object.
         * @private
         */
        private processValidation_;
        /**
         * Get the current value of the field.
         * @return {*} Current value.
         */
        getValue(): any;
        /**
         * Used to validate a value. Returns input by default. Can be overridden by
         * subclasses, see FieldDropdown.
         * @param {*=} opt_newValue The value to be validated.
         * @return {*} The validated value, same as input by default.
         * @protected
         */
        protected doClassValidation_(opt_newValue?: any | undefined): any;
        /**
         * Used to update the value of a field. Can be overridden by subclasses to do
         * custom storage of values/updating of external things.
         * @param {*} newValue The value to be saved.
         * @protected
         */
        protected doValueUpdate_(newValue: any): void;
        /**
         * Used to notify the field an invalid value was input. Can be overridden by
         * subclasses, see FieldTextInput.
         * No-op by default.
         * @param {*} _invalidValue The input value that was determined to be invalid.
         * @protected
         */
        protected doValueInvalid_(_invalidValue: any): void;
        /**
         * Handle a mouse down event on a field.
         * @param {!Event} e Mouse down event.
         * @protected
         */
        protected onMouseDown_(e: Event): void;
        /**
         * Sets the tooltip for this field.
         * @param {?Tooltip.TipInfo} newTip The
         *     text for the tooltip, a function that returns the text for the tooltip, a
         *     parent object whose tooltip will be used, or null to display the tooltip
         *     of the parent block. To not display a tooltip pass the empty string.
         */
        setTooltip(newTip: Tooltip.TipInfo | null): void;
        /**
         * Returns the tooltip text for this field.
         * @return {string} The tooltip text for this field.
         */
        getTooltip(): string;
        /**
         * The element to bind the click handler to. If not set explicitly, defaults
         * to the SVG root of the field. When this element is
         * clicked on an editable field, the editor will open.
         * @return {!Element} Element to bind click handler to.
         * @protected
         */
        protected getClickTarget_(): Element;
        /**
         * Return the absolute coordinates of the top-left corner of this field.
         * The origin (0,0) is the top-left corner of the page body.
         * @return {!Coordinate} Object with .x and .y properties.
         * @protected
         */
        protected getAbsoluteXY_(): Coordinate;
        /**
         * Whether this field references any Blockly variables.  If true it may need to
         * be handled differently during serialization and deserialization.  Subclasses
         * may override this.
         * @return {boolean} True if this field has any variable references.
         * @package
         */
        referencesVariables(): boolean;
        /**
         * Search through the list of inputs and their fields in order to find the
         * parent input of a field.
         * @return {Input} The input that the field belongs to.
         * @package
         */
        getParentInput(): Input;
        /**
         * Returns whether or not we should flip the field in RTL.
         * @return {boolean} True if we should flip in RTL.
         */
        getFlipRtl(): boolean;
        /**
         * Returns whether or not the field is tab navigable.
         * @return {boolean} True if the field is tab navigable.
         */
        isTabNavigable(): boolean;
        /**
         * Handles the given keyboard shortcut.
         * @param {!ShortcutRegistry.KeyboardShortcut} _shortcut The shortcut to be
         *     handled.
         * @return {boolean} True if the shortcut has been handled, false otherwise.
         * @public
         */
        public onShortcut(_shortcut: ShortcutRegistry.KeyboardShortcut): boolean;
        /**
         * Add the cursor SVG to this fields SVG group.
         * @param {SVGElement} cursorSvg The SVG root of the cursor to be added to the
         *     field group.
         * @package
         */
        setCursorSvg(cursorSvg: SVGElement): void;
        /**
         * Add the marker SVG to this fields SVG group.
         * @param {SVGElement} markerSvg The SVG root of the marker to be added to the
         *     field group.
         * @package
         */
        setMarkerSvg(markerSvg: SVGElement): void;
        /**
         * Redraw any attached marker or cursor svgs if needed.
         * @protected
         */
        protected updateMarkers_(): void;
        /**
         * The default value for this field.
         * @type {*}
         * @protected
         */
        protected DEFAULT_VALUE: any;
        /**
         * Name of field.  Unique within each block.
         * Static labels are usually unnamed.
         * @type {string|undefined}
         */
        name: string | undefined;
        /**
         * Maximum characters of text to display before adding an ellipsis.
         * @type {number}
         */
        maxDisplayLength: number;
        /**
         * The element the click handler is bound to.
         * @type {Element}
         * @protected
         */
        protected clickTarget_: Element;
        /**
         * Editable fields usually show some sort of UI indicating they are editable.
         * They will also be saved by the XML renderer.
         * @type {boolean}
         */
        EDITABLE: boolean;
        /**
         * Serializable fields are saved by the XML renderer, non-serializable fields
         * are not. Editable fields should also be serializable. This is not the
         * case by default so that SERIALIZABLE is backwards compatible.
         * @type {boolean}
         */
        SERIALIZABLE: boolean;
    }
    export namespace Field {
        const NBSP: string;
    }
    import { Size } from "utils/size";
    import { ConstantProvider } from "renderers/common/constants";
    import { Block } from "block";
    import { Rect } from "utils/rect";
    import * as Tooltip from "tooltip";
    import { Coordinate } from "utils/coordinate";
    import { Input } from "input";
    import { ShortcutRegistry } from "shortcut_registry";
}
declare module "xml" {
    /**
     * Encode a block tree as XML.
     * @param {!Workspace} workspace The workspace containing blocks.
     * @param {boolean=} opt_noId True if the encoder should skip the block IDs.
     * @return {!Element} XML DOM element.
     * @alias Blockly.Xml.workspaceToDom
     */
    export function workspaceToDom(workspace: Workspace, opt_noId?: boolean | undefined): Element;
    /**
     * Encode a list of variables as XML.
     * @param {!Array<!VariableModel>} variableList List of all variable
     *     models.
     * @return {!Element} Tree of XML elements.
     * @alias Blockly.Xml.variablesToDom
     */
    export function variablesToDom(variableList: Array<VariableModel>): Element;
    /**
     * Encode a block subtree as XML with XY coordinates.
     * @param {!Block} block The root block to encode.
     * @param {boolean=} opt_noId True if the encoder should skip the block ID.
     * @return {!Element|!DocumentFragment} Tree of XML elements or an empty
     *     document fragment if the block was an insertion marker.
     * @alias Blockly.Xml.blockToDomWithXY
     */
    export function blockToDomWithXY(block: Block, opt_noId?: boolean | undefined): Element | DocumentFragment;
    /**
     * Encode a block subtree as XML.
     * @param {!Block} block The root block to encode.
     * @param {boolean=} opt_noId True if the encoder should skip the block ID.
     * @return {!Element|!DocumentFragment} Tree of XML elements or an empty
     *     document fragment if the block was an insertion marker.
     * @alias Blockly.Xml.blockToDom
     */
    export function blockToDom(block: Block, opt_noId?: boolean | undefined): Element | DocumentFragment;
    /**
     * Converts a DOM structure into plain text.
     * Currently the text format is fairly ugly: all one line with no whitespace,
     * unless the DOM itself has whitespace built-in.
     * @param {!Node} dom A tree of XML nodes.
     * @return {string} Text representation.
     * @alias Blockly.Xml.domToText
     */
    export function domToText(dom: Node): string;
    /**
     * Converts a DOM structure into properly indented text.
     * @param {!Node} dom A tree of XML elements.
     * @return {string} Text representation.
     * @alias Blockly.Xml.domToPrettyText
     */
    export function domToPrettyText(dom: Node): string;
    /**
     * Converts an XML string into a DOM structure.
     * @param {string} text An XML string.
     * @return {!Element} A DOM object representing the singular child of the
     *     document element.
     * @throws if the text doesn't parse.
     * @alias Blockly.Xml.textToDom
     */
    export function textToDom(text: string): Element;
    /**
     * Clear the given workspace then decode an XML DOM and
     * create blocks on the workspace.
     * @param {!Element} xml XML DOM.
     * @param {!Workspace} workspace The workspace.
     * @return {!Array<string>} An array containing new block IDs.
     * @alias Blockly.Xml.clearWorkspaceAndLoadFromXml
     */
    export function clearWorkspaceAndLoadFromXml(xml: Element, workspace: Workspace): Array<string>;
    /**
     * Decode an XML DOM and create blocks on the workspace.
     * @param {!Element} xml XML DOM.
     * @param {!Workspace} workspace The workspace.
     * @return {!Array<string>} An array containing new block IDs.
     * @suppress {strictModuleDepCheck} Suppress module check while workspace
     *     comments are not bundled in.
     * @alias Blockly.Xml.domToWorkspace
     */
    export function domToWorkspace(xml: Element, workspace: Workspace): Array<string>;
    /**
     * Decode an XML DOM and create blocks on the workspace. Position the new
     * blocks immediately below prior blocks, aligned by their starting edge.
     * @param {!Element} xml The XML DOM.
     * @param {!Workspace} workspace The workspace to add to.
     * @return {!Array<string>} An array containing new block IDs.
     * @alias Blockly.Xml.appendDomToWorkspace
     */
    export function appendDomToWorkspace(xml: Element, workspace: Workspace): Array<string>;
    /**
     * Decode an XML block tag and create a block (and possibly sub blocks) on the
     * workspace.
     * @param {!Element} xmlBlock XML block element.
     * @param {!Workspace} workspace The workspace.
     * @return {!Block} The root block created.
     * @alias Blockly.Xml.domToBlock
     */
    export function domToBlock(xmlBlock: Element, workspace: Workspace): Block;
    /**
     * Decode an XML list of variables and add the variables to the workspace.
     * @param {!Element} xmlVariables List of XML variable elements.
     * @param {!Workspace} workspace The workspace to which the variable
     *     should be added.
     * @alias Blockly.Xml.domToVariables
     */
    export function domToVariables(xmlVariables: Element, workspace: Workspace): void;
    /**
     * Remove any 'next' block (statements in a stack).
     * @param {!Element|!DocumentFragment} xmlBlock XML block element or an empty
     *     DocumentFragment if the block was an insertion marker.
     * @alias Blockly.Xml.deleteNext
     */
    export function deleteNext(xmlBlock: Element | DocumentFragment): void;
    import { Workspace } from "workspace";
    import { VariableModel } from "variable_model";
    import { Block } from "block";
}
declare module "connection" {
    export class Connection {
        /**
         * Returns the connection (starting at the startBlock) which will accept
         * the given connection. This includes compatible connection types and
         * connection checks.
         * @param {!Block} startBlock The block on which to start the search.
         * @param {!Connection} orphanConnection The connection that is looking
         *     for a home.
         * @return {?Connection} The suitable connection point on the chain of
         *     blocks, or null.
         */
        static getConnectionForOrphanedConnection(startBlock: Block, orphanConnection: Connection): Connection | null;
        /**
         * Class for a connection between blocks.
         * @param {!Block} source The block establishing this connection.
         * @param {number} type The type of the connection.
         * @constructor
         * @implements {IASTNodeLocationWithBlock}
         * @alias Blockly.Connection
         */
        constructor(source: Block, type: number);
        /**
         * @type {!Block}
         * @protected
         */
        protected sourceBlock_: Block;
        /** @type {number} */
        type: number;
        /**
         * Connect two connections together.  This is the connection on the superior
         * block.
         * @param {!Connection} childConnection Connection on inferior block.
         * @protected
         */
        protected connect_(childConnection: Connection): void;
        /**
         * Dispose of this connection and deal with connected blocks.
         * @package
         */
        dispose(): void;
        disposed: boolean;
        /**
         * Get the source block for this connection.
         * @return {!Block} The source block.
         */
        getSourceBlock(): Block;
        /**
         * Does the connection belong to a superior block (higher in the source stack)?
         * @return {boolean} True if connection faces down or right.
         */
        isSuperior(): boolean;
        /**
         * Is the connection connected?
         * @return {boolean} True if connection is connected to another connection.
         */
        isConnected(): boolean;
        /**
         * Checks whether the current connection can connect with the target
         * connection.
         * @param {Connection} target Connection to check compatibility with.
         * @return {number} Connection.CAN_CONNECT if the connection is legal,
         *    an error code otherwise.
         * @deprecated July 2020. Will be deleted July 2021. Use the workspace's
         *     connectionChecker instead.
         */
        canConnectWithReason(target: Connection): number;
        /**
         * Checks whether the current connection and target connection are compatible
         * and throws an exception if they are not.
         * @param {Connection} target The connection to check compatibility
         *    with.
         * @package
         * @deprecated July 2020. Will be deleted July 2021. Use the workspace's
         *     connectionChecker instead.
         */
        checkConnection(target: Connection): void;
        /**
         * Get the workspace's connection type checker object.
         * @return {!IConnectionChecker} The connection type checker for the
         *     source block's workspace.
         * @package
         */
        getConnectionChecker(): IConnectionChecker;
        /**
         * Check if the two connections can be dragged to connect to each other.
         * @param {!Connection} candidate A nearby connection to check.
         * @return {boolean} True if the connection is allowed, false otherwise.
         * @deprecated July 2020. Will be deleted July 2021. Use the workspace's
         *     connectionChecker instead.
         */
        isConnectionAllowed(candidate: Connection): boolean;
        /**
         * Called when an attempted connection fails. NOP by default (i.e. for headless
         * workspaces).
         * @param {!Connection} _otherConnection Connection that this connection
         *     failed to connect to.
         * @package
         */
        onFailedConnect(_otherConnection: Connection): void;
        /**
         * Connect this connection to another connection.
         * @param {!Connection} otherConnection Connection to connect to.
         * @return {boolean} Whether the the blocks are now connected or not.
         */
        connect(otherConnection: Connection): boolean;
        /**
         * Disconnect this connection.
         */
        disconnect(): void;
        /**
         * Disconnect two blocks that are connected by this connection.
         * @param {!Block} parentBlock The superior block.
         * @param {!Block} childBlock The inferior block.
         * @protected
         */
        protected disconnectInternal_(parentBlock: Block, childBlock: Block): void;
        targetConnection: Connection;
        /**
         * Respawn the shadow block if there was one connected to the this connection.
         * @protected
         */
        protected respawnShadow_(): void;
        /**
         * Returns the block that this connection connects to.
         * @return {?Block} The connected block or null if none is connected.
         */
        targetBlock(): Block | null;
        /**
         * Is this connection compatible with another connection with respect to the
         * value type system.  E.g. square_root("Hello") is not compatible.
         * @param {!Connection} otherConnection Connection to compare against.
         * @return {boolean} True if the connections share a type.
         * @deprecated July 2020. Will be deleted July 2021. Use the workspace's
         *     connectionChecker instead.
         */
        checkType(otherConnection: Connection): boolean;
        /**
         * Is this connection compatible with another connection with respect to the
         * value type system.  E.g. square_root("Hello") is not compatible.
         * @param {!Connection} otherConnection Connection to compare against.
         * @return {boolean} True if the connections share a type.
         * @private
         * @deprecated October 2019. Will be deleted January 2021. Use the workspace's
         *     connectionChecker instead.
         * @suppress {unusedPrivateMembers}
         */
        private checkType_;
        /**
         * Function to be called when this connection's compatible types have changed.
         * @protected
         */
        protected onCheckChanged_(): void;
        /**
         * Change a connection's compatibility.
         * @param {?(string|!Array<string>)} check Compatible value type or list of
         *     value types. Null if all types are compatible.
         * @return {!Connection} The connection being modified
         *     (to allow chaining).
         */
        setCheck(check: (string | Array<string>) | null): Connection;
        check_: any[];
        /**
         * Get a connection's compatibility.
         * @return {?Array} List of compatible value types.
         *     Null if all types are compatible.
         * @public
         */
        public getCheck(): any[] | null;
        /**
         * Changes the connection's shadow block.
         * @param {?Element} shadowDom DOM representation of a block or null.
         */
        setShadowDom(shadowDom: Element | null): void;
        /**
         * Returns the xml representation of the connection's shadow block.
         * @param {boolean=} returnCurrent If true, and the shadow block is currently
         *     attached to this connection, this serializes the state of that block
         *     and returns it (so that field values are correct). Otherwise the saved
         *     shadowDom is just returned.
         * @return {?Element} Shadow DOM representation of a block or null.
         */
        getShadowDom(returnCurrent?: boolean | undefined): Element | null;
        /**
         * Changes the connection's shadow block.
         * @param {?blocks.State} shadowState An state represetation of the block or
         *     null.
         */
        setShadowState(shadowState: any | null): void;
        /**
         * Returns the serialized object representation of the connection's shadow
         * block.
         * @param {boolean=} returnCurrent If true, and the shadow block is currently
         *     attached to this connection, this serializes the state of that block
         *     and returns it (so that field values are correct). Otherwise the saved
         *     state is just returned.
         * @return {?blocks.State} Serialized object representation of the block, or
         *     null.
         */
        getShadowState(returnCurrent?: boolean | undefined): any | null;
        /**
         * Find all nearby compatible connections to this connection.
         * Type checking does not apply, since this function is used for bumping.
         *
         * Headless configurations (the default) do not have neighboring connection,
         * and always return an empty list (the default).
         * {@link Blockly.RenderedConnection} overrides this behavior with a list
         * computed from the rendered positioning.
         * @param {number} _maxLimit The maximum radius to another connection.
         * @return {!Array<!Connection>} List of connections.
         * @package
         */
        neighbours(_maxLimit: number): Array<Connection>;
        /**
         * Get the parent input of a connection.
         * @return {?Input} The input that the connection belongs to or null if
         *     no parent exists.
         * @package
         */
        getParentInput(): Input | null;
        /**
         * This method returns a string describing this Connection in developer terms
         * (English only). Intended to on be used in console logs and errors.
         * @return {string} The description.
         */
        toString(): string;
        /**
         * Returns the state of the shadowDom_ and shadowState_ properties, then
         * temporarily sets those properties to null so no shadow respawns.
         * @return {{shadowDom: ?Element, shadowState: ?blocks.State}} The state of both
         *     the shadowDom_ and shadowState_ properties.
         * @private
         */
        private stashShadowState_;
        shadowDom_: Element;
        shadowState_: any;
        /**
         * Reapplies the stashed state of the shadowDom_ and shadowState_ properties.
         * @param {{shadowDom: ?Element, shadowState: ?blocks.State}} param0 The state
         *     to reapply to the shadowDom_ and shadowState_ properties.
         * @private
         */
        private applyShadowState_;
        /**
         * Sets the state of the shadow of this connection.
         * @param {{shadowDom: (?Element|undefined), shadowState:
         *     (?blocks.State|undefined)}=} param0 The state to set the shadow of this
         *     connection to.
         * @private
         */
        private setShadowStateInternal_;
        /**
         * Creates a shadow block based on the current shadowState_ or shadowDom_.
         * shadowState_ gets priority.
         * @param {boolean} attemptToConnect Whether to try to connect the shadow block
         *     to this connection or not.
         * @return {?Block} The shadow block that was created, or null if both the
         *     shadowState_ and shadowDom_ are null.
         * @private
         */
        private createShadowBlock_;
        /**
         * Saves the given shadow block to both the shadowDom_ and shadowState_
         * properties, in their respective serialized forms.
         * @param {?Block} shadow The shadow to serialize, or null.
         * @private
         */
        private serializeShadow_;
        /**
         * Horizontal location of this connection.
         * @type {number}
         * @package
         */
        x: number;
        /**
         * Vertical location of this connection.
         * @type {number}
         * @package
         */
        y: number;
    }
    export namespace Connection {
        const CAN_CONNECT: number;
        const REASON_SELF_CONNECTION: number;
        const REASON_WRONG_TYPE: number;
        const REASON_TARGET_NULL: number;
        const REASON_CHECKS_FAILED: number;
        const REASON_DIFFERENT_WORKSPACES: number;
        const REASON_SHADOW_PARENT: number;
        const REASON_DRAG_CHECKS_FAILED: number;
    }
    import { Block } from "block";
    import { IConnectionChecker } from "interfaces/i_connection_checker";
    import { Input } from "input";
}
declare module "keyboard_nav/ast_node" {
    export class ASTNode {
        /**
         * Whether an AST node of the given type points to a connection.
         * @param {string} type The type to check.  One of ASTNode.types.
         * @return {boolean} True if a node of the given type points to a connection.
         * @private
         */
        private static isConnectionType_;
        /**
         * Create an AST node pointing to a field.
         * @param {Field} field The location of the AST node.
         * @return {ASTNode} An AST node pointing to a field.
         */
        static createFieldNode(field: Field): ASTNode;
        /**
         * Creates an AST node pointing to a connection. If the connection has a parent
         * input then create an AST node of type input that will hold the connection.
         * @param {Connection} connection This is the connection the node will
         *     point to.
         * @return {ASTNode} An AST node pointing to a connection.
         */
        static createConnectionNode(connection: Connection): ASTNode;
        /**
         * Creates an AST node pointing to an input. Stores the input connection as the
         *     location.
         * @param {Input} input The input used to create an AST node.
         * @return {ASTNode} An AST node pointing to a input.
         */
        static createInputNode(input: Input): ASTNode;
        /**
         * Creates an AST node pointing to a block.
         * @param {Block} block The block used to create an AST node.
         * @return {ASTNode} An AST node pointing to a block.
         */
        static createBlockNode(block: Block): ASTNode;
        /**
         * Create an AST node of type stack. A stack, represented by its top block, is
         *     the set of all blocks connected to a top block, including the top block.
         * @param {Block} topBlock A top block has no parent and can be found
         *     in the list returned by workspace.getTopBlocks().
         * @return {ASTNode} An AST node of type stack that points to the top
         *     block on the stack.
         */
        static createStackNode(topBlock: Block): ASTNode;
        /**
         * Creates an AST node pointing to a workspace.
         * @param {!Workspace} workspace The workspace that we are on.
         * @param {Coordinate} wsCoordinate The position on the workspace
         *     for this node.
         * @return {ASTNode} An AST node pointing to a workspace and a position
         *     on the workspace.
         */
        static createWorkspaceNode(workspace: Workspace, wsCoordinate: Coordinate): ASTNode;
        /**
         * Creates an AST node for the top position on a block.
         * This is either an output connection, previous connection, or block.
         * @param {!Block} block The block to find the top most AST node on.
         * @return {ASTNode} The AST node holding the top most position on the
         *     block.
         */
        static createTopNode(block: Block): ASTNode;
        /**
         * Class for an AST node.
         * It is recommended that you use one of the createNode methods instead of
         * creating a node directly.
         * @param {string} type The type of the location.
         *     Must be in ASTNode.types.
         * @param {!IASTNodeLocation} location The position in the AST.
         * @param {!ASTNode.Params=} opt_params Optional dictionary of options.
         * @constructor
         * @alias Blockly.ASTNode
         */
        constructor(type: string, location: IASTNodeLocation, opt_params?: ASTNode.Params | undefined);
        /**
         * The type of the location.
         * One of ASTNode.types
         * @type {string}
         * @private
         */
        private type_;
        /**
         * Whether the location points to a connection.
         * @type {boolean}
         * @private
         */
        private isConnection_;
        /**
         * The location of the AST node.
         * @type {!IASTNodeLocation}
         * @private
         */
        private location_;
        /**
         * The coordinate on the workspace.
         * @type {Coordinate}
         * @private
         */
        private wsCoordinate_;
        /**
         * Parse the optional parameters.
         * @param {?ASTNode.Params} params The user specified parameters.
         * @private
         */
        private processParams_;
        /**
         * Gets the value pointed to by this node.
         * It is the callers responsibility to check the node type to figure out what
         * type of object they get back from this.
         * @return {!IASTNodeLocation} The current field, connection, workspace, or
         *     block the cursor is on.
         */
        getLocation(): IASTNodeLocation;
        /**
         * The type of the current location.
         * One of ASTNode.types
         * @return {string} The type of the location.
         */
        getType(): string;
        /**
         * The coordinate on the workspace.
         * @return {Coordinate} The workspace coordinate or null if the
         *     location is not a workspace.
         */
        getWsCoordinate(): Coordinate;
        /**
         * Whether the node points to a connection.
         * @return {boolean} [description]
         * @package
         */
        isConnection(): boolean;
        /**
         * Given an input find the next editable field or an input with a non null
         * connection in the same block. The current location must be an input
         * connection.
         * @return {ASTNode} The AST node holding the next field or connection
         *     or null if there is no editable field or input connection after the given
         *     input.
         * @private
         */
        private findNextForInput_;
        /**
         * Given a field find the next editable field or an input with a non null
         * connection in the same block. The current location must be a field.
         * @return {ASTNode} The AST node pointing to the next field or
         *     connection or null if there is no editable field or input connection
         *     after the given input.
         * @private
         */
        private findNextForField_;
        /**
         * Given an input find the previous editable field or an input with a non null
         * connection in the same block. The current location must be an input
         * connection.
         * @return {ASTNode} The AST node holding the previous field or
         *     connection.
         * @private
         */
        private findPrevForInput_;
        /**
         * Given a field find the previous editable field or an input with a non null
         * connection in the same block. The current location must be a field.
         * @return {ASTNode} The AST node holding the previous input or field.
         * @private
         */
        private findPrevForField_;
        /**
         * Navigate between stacks of blocks on the workspace.
         * @param {boolean} forward True to go forward. False to go backwards.
         * @return {ASTNode} The first block of the next stack or null if there
         * are no blocks on the workspace.
         * @private
         */
        private navigateBetweenStacks_;
        /**
         * Finds the top most AST node for a given block.
         * This is either the previous connection, output connection or block depending
         * on what kind of connections the block has.
         * @param {!Block} block The block that we want to find the top
         *     connection on.
         * @return {!ASTNode} The AST node containing the top connection.
         * @private
         */
        private findTopASTNodeForBlock_;
        /**
         * Get the AST node pointing to the input that the block is nested under or if
         * the block is not nested then get the stack AST node.
         * @param {Block} block The source block of the current location.
         * @return {ASTNode} The AST node pointing to the input connection or
         *     the top block of the stack this block is in.
         * @private
         */
        private getOutAstNodeForBlock_;
        /**
         * Find the first editable field or input with a connection on a given block.
         * @param {!Block} block The source block of the current location.
         * @return {ASTNode} An AST node pointing to the first field or input.
         * Null if there are no editable fields or inputs with connections on the block.
         * @private
         */
        private findFirstFieldOrInput_;
        /**
         * Finds the source block of the location of this node.
         * @return {Block} The source block of the location, or null if the node
         * is of type workspace.
         */
        getSourceBlock(): Block;
        /**
         * Find the element to the right of the current element in the AST.
         * @return {ASTNode} An AST node that wraps the next field, connection,
         *     block, or workspace. Or null if there is no node to the right.
         */
        next(): ASTNode;
        /**
         * Find the element one level below and all the way to the left of the current
         * location.
         * @return {ASTNode} An AST node that wraps the next field, connection,
         * workspace, or block. Or null if there is nothing below this node.
         */
        in(): ASTNode;
        /**
         * Find the element to the left of the current element in the AST.
         * @return {ASTNode} An AST node that wraps the previous field,
         * connection, workspace or block. Or null if no node exists to the left.
         * null.
         */
        prev(): ASTNode;
        /**
         * Find the next element that is one position above and all the way to the left
         * of the current location.
         * @return {ASTNode} An AST node that wraps the next field, connection,
         *     workspace or block. Or null if we are at the workspace level.
         */
        out(): ASTNode;
    }
    export namespace ASTNode {
        namespace types {
            const FIELD: string;
            const BLOCK: string;
            const INPUT: string;
            const OUTPUT: string;
            const NEXT: string;
            const PREVIOUS: string;
            const STACK: string;
            const WORKSPACE: string;
        }
        /**
         * Object holding different types for an AST node.
         */
        type types = string;
        const NAVIGATE_ALL_FIELDS: boolean;
        const DEFAULT_OFFSET_Y: number;
        type Params = {
            wsCoordinate: Coordinate;
        };
    }
    import { IASTNodeLocation } from "interfaces/i_ast_node_location";
    import { Coordinate } from "utils/coordinate";
    import { Block } from "block";
    import { Field } from "field";
    import { Connection } from "connection";
    import { Input } from "input";
    import { Workspace } from "workspace";
}
declare module "keyboard_nav/cursor" {
    export class Cursor extends Marker {
        /**
         * @override
         */
        override type: string;
        /**
         * Find the next connection, field, or block.
         * @return {ASTNode} The next element, or null if the current node is
         *     not set or there is no next value.
         * @public
         */
        public next(): ASTNode;
        /**
         * Find the in connection or field.
         * @return {ASTNode} The in element, or null if the current node is
         *     not set or there is no in value.
         * @public
         */
        public in(): ASTNode;
        /**
         * Find the previous connection, field, or block.
         * @return {ASTNode} The previous element, or null if the current node
         *     is not set or there is no previous value.
         * @public
         */
        public prev(): ASTNode;
        /**
         * Find the out connection, field, or block.
         * @return {ASTNode} The out element, or null if the current node is
         *     not set or there is no out value.
         * @public
         */
        public out(): ASTNode;
    }
    import { ASTNode } from "keyboard_nav/ast_node";
    import { Marker } from "keyboard_nav/marker";
}
declare module "registry" {
    export namespace TEST_ONLY {
        export { typeMap };
    }
    /**
     * A map of maps. With the keys being the type and name of the class we are
     * registering and the value being the constructor function.
     * e.g. {'field': {'field_angle': Blockly.FieldAngle}}
     *
     * @type {!Object<string, !Object<string, (function(new:?)|!Object)>>}
     */
    const typeMap: {
        [x: string]: {
            [x: string]: ((new () => unknown) | any);
        };
    };
    /**
     * The string used to register the default class for a type of plugin.
     * @type {string}
     * @alias Blockly.registry.DEFAULT
     */
    export const DEFAULT: string;
    export class Type {
        /**
         * A name with the type of the element stored in the generic.
         * @param {string} name The name of the registry type.
         * @constructor
         * @template T
         * @alias Blockly.registry.Type
         */
        constructor(name: string);
        /**
         * @type {string}
         * @private
         */
        private name_;
        /**
         * Returns the name of the type.
         * @return {string} The name.
         * @override
         */
        toString(): string;
    }
    export namespace Type {
        const CONNECTION_CHECKER: any;
        const CURSOR: any;
        const EVENT: any;
        const FIELD: any;
        const RENDERER: any;
        const TOOLBOX: any;
        const THEME: any;
        const TOOLBOX_ITEM: any;
        const FLYOUTS_VERTICAL_TOOLBOX: any;
        const FLYOUTS_HORIZONTAL_TOOLBOX: any;
        const METRICS_MANAGER: any;
        const BLOCK_DRAGGER: any;
        const SERIALIZER: any;
    }
    /**
     * Registers a class based on a type and name.
     * @param {string|!Type<T>} type The type of the plugin.
     *     (e.g. Field, Renderer)
     * @param {string} name The plugin's name. (Ex. field_angle, geras)
     * @param {?function(new:T, ...?)|Object} registryItem The class or object to
     *     register.
     * @param {boolean=} opt_allowOverrides True to prevent an error when overriding
     *     an already registered item.
     * @throws {Error} if the type or name is empty, a name with the given type has
     *     already been registered, or if the given class or object is not valid for
     *     its type.
     * @template T
     * @alias Blockly.registry.register
     */
    export function register<T>(type: any, name: string, registryItem: any, opt_allowOverrides?: boolean | undefined): void;
    /**
     * Unregisters the registry item with the given type and name.
     * @param {string|!Type<T>} type The type of the plugin.
     *     (e.g. Field, Renderer)
     * @param {string} name The plugin's name. (Ex. field_angle, geras)
     * @template T
     * @alias Blockly.registry.unregister
     */
    export function unregister<T>(type: any, name: string): void;
    /**
     * Returns whether or not the registry contains an item with the given type and
     * name.
     * @param {string|!Type<T>} type The type of the plugin.
     *     (e.g. Field, Renderer)
     * @param {string} name The plugin's name. (Ex. field_angle, geras)
     * @return {boolean} True if the registry has an item with the given type and
     *     name, false otherwise.
     * @template T
     * @alias Blockly.registry.hasItem
     */
    export function hasItem<T>(type: any, name: string): boolean;
    /**
     * Gets the class for the given name and type.
     * @param {string|!Type<T>} type The type of the plugin.
     *     (e.g. Field, Renderer)
     * @param {string} name The plugin's name. (Ex. field_angle, geras)
     * @param {boolean=} opt_throwIfMissing Whether or not to throw an error if we
     *     are unable to find the plugin.
     * @return {?function(new:T, ...?)} The class with the given name and type or
     *     null if none exists.
     * @template T
     * @alias Blockly.registry.getClass
     */
    export function getClass<T>(type: any, name: string, opt_throwIfMissing?: boolean | undefined): new (...arg1: unknown[]) => T;
    /**
     * Gets the object for the given name and type.
     * @param {string|!Type<T>} type The type of the plugin.
     *     (e.g. Category)
     * @param {string} name The plugin's name. (Ex. logic_category)
     * @param {boolean=} opt_throwIfMissing Whether or not to throw an error if we
     *     are unable to find the object.
     * @return {?T} The object with the given name and type or null if none exists.
     * @template T
     * @alias Blockly.registry.getObject
     */
    export function getObject<T>(type: any, name: string, opt_throwIfMissing?: boolean | undefined): T;
    /**
     * Returns a map of items registered with the given type.
     * @param {string|!Type<T>} type The type of the plugin. (e.g. Category)
     * @param {boolean} opt_cased Whether or not to return a map with cased keys
     *     (rather than caseless keys). False by default.
     * @param {boolean=} opt_throwIfMissing Whether or not to throw an error if we
     *     are unable to find the object. False by default.
     * @return {?Object<string, ?T|?function(new:T, ...?)>} A map of objects with
     *     the given type, or null if none exists.
     * @template T
     * @alias Blockly.registry.getAllItems
     */
    export function getAllItems<T>(type: any, opt_cased: boolean, opt_throwIfMissing?: boolean | undefined): {
        [x: string]: T | (new (...arg1: unknown[]) => T);
    };
    /**
     * Gets the class from Blockly options for the given type.
     * This is used for plugins that override a built in feature. (e.g. Toolbox)
     * @param {!Type<T>} type The type of the plugin.
     * @param {!Options} options The option object to check for the given
     *     plugin.
     * @param {boolean=} opt_throwIfMissing Whether or not to throw an error if we
     *     are unable to find the plugin.
     * @return {?function(new:T, ...?)} The class for the plugin.
     * @template T
     * @alias Blockly.registry.getClassFromOptions
     */
    export function getClassFromOptions<T>(type: any, options: Options, opt_throwIfMissing?: boolean | undefined): new (...arg1: unknown[]) => T;
    import { Options } from "options";
    export {};
}
declare module "events/utils" {
    export namespace TEST_ONLY {
        export { FIRE_QUEUE };
        export { fireNow };
    }
    /**
     * Sets whether events should be added to the undo stack.
     * @param {boolean} newValue True if events should be added to the undo stack.
     * @alias Blockly.Events.utils.setRecordUndo
     */
    export function setRecordUndo(newValue: boolean): void;
    /**
     * Returns whether or not events will be added to the undo stack.
     * @returns {boolean} True if events will be added to the undo stack.
     * @alias Blockly.Events.utils.getRecordUndo
     */
    export function getRecordUndo(): boolean;
    /**
     * Name of event that creates a block. Will be deprecated for BLOCK_CREATE.
     * @const
     * @alias Blockly.Events.utils.CREATE
     */
    export const CREATE: "create";
    /**
     * Name of event that creates a block.
     * @const
     * @alias Blockly.Events.utils.BLOCK_CREATE
     */
    export const BLOCK_CREATE: "create";
    /**
     * Name of event that deletes a block. Will be deprecated for BLOCK_DELETE.
     * @const
     * @alias Blockly.Events.utils.DELETE
     */
    export const DELETE: "delete";
    /**
     * Name of event that deletes a block.
     * @const
     * @alias Blockly.Events.utils.BLOCK_DELETE
     */
    export const BLOCK_DELETE: "delete";
    /**
     * Name of event that changes a block. Will be deprecated for BLOCK_CHANGE.
     * @const
     * @alias Blockly.Events.utils.CHANGE
     */
    export const CHANGE: "change";
    /**
     * Name of event that changes a block.
     * @const
     * @alias Blockly.Events.utils.BLOCK_CHANGE
     */
    export const BLOCK_CHANGE: "change";
    /**
     * Name of event that moves a block. Will be deprecated for BLOCK_MOVE.
     * @const
     * @alias Blockly.Events.utils.MOVE
     */
    export const MOVE: "move";
    /**
     * Name of event that moves a block.
     * @const
     * @alias Blockly.Events.utils.BLOCK_MOVE
     */
    export const BLOCK_MOVE: "move";
    /**
     * Name of event that creates a variable.
     * @const
     * @alias Blockly.Events.utils.VAR_CREATE
     */
    export const VAR_CREATE: "var_create";
    /**
     * Name of event that deletes a variable.
     * @const
     * @alias Blockly.Events.utils.VAR_DELETE
     */
    export const VAR_DELETE: "var_delete";
    /**
     * Name of event that renames a variable.
     * @const
     * @alias Blockly.Events.utils.VAR_RENAME
     */
    export const VAR_RENAME: "var_rename";
    /**
     * Name of generic event that records a UI change.
     * @const
     * @alias Blockly.Events.utils.UI
     */
    export const UI: "ui";
    /**
     * Name of event that record a block drags a block.
     * @const
     * @alias Blockly.Events.utils.BLOCK_DRAG
     */
    export const BLOCK_DRAG: "drag";
    /**
     * Name of event that records a change in selected element.
     * @const
     * @alias Blockly.Events.utils.SELECTED
     */
    export const SELECTED: "selected";
    /**
     * Name of event that records a click.
     * @const
     * @alias Blockly.Events.utils.CLICK
     */
    export const CLICK: "click";
    /**
     * Name of event that records a marker move.
     * @const
     * @alias Blockly.Events.utils.MARKER_MOVE
     */
    export const MARKER_MOVE: "marker_move";
    /**
     * Name of event that records a bubble open.
     * @const
     * @alias Blockly.Events.utils.BUBBLE_OPEN
     */
    export const BUBBLE_OPEN: "bubble_open";
    /**
     * Name of event that records a trashcan open.
     * @const
     * @alias Blockly.Events.utils.TRASHCAN_OPEN
     */
    export const TRASHCAN_OPEN: "trashcan_open";
    /**
     * Name of event that records a toolbox item select.
     * @const
     * @alias Blockly.Events.utils.TOOLBOX_ITEM_SELECT
     */
    export const TOOLBOX_ITEM_SELECT: "toolbox_item_select";
    /**
     * Name of event that records a theme change.
     * @const
     * @alias Blockly.Events.utils.THEME_CHANGE
     */
    export const THEME_CHANGE: "theme_change";
    /**
     * Name of event that records a viewport change.
     * @const
     * @alias Blockly.Events.utils.VIEWPORT_CHANGE
     */
    export const VIEWPORT_CHANGE: "viewport_change";
    /**
     * Name of event that creates a comment.
     * @const
     * @alias Blockly.Events.utils.COMMENT_CREATE
     */
    export const COMMENT_CREATE: "comment_create";
    /**
     * Name of event that deletes a comment.
     * @const
     * @alias Blockly.Events.utils.COMMENT_DELETE
     */
    export const COMMENT_DELETE: "comment_delete";
    /**
     * Name of event that changes a comment.
     * @const
     * @alias Blockly.Events.utils.COMMENT_CHANGE
     */
    export const COMMENT_CHANGE: "comment_change";
    /**
     * Name of event that moves a comment.
     * @const
     * @alias Blockly.Events.utils.COMMENT_MOVE
     */
    export const COMMENT_MOVE: "comment_move";
    /**
     * Name of event that records a workspace load.
     * @alias Blockly.Events.utils.FINISHED_LOADING
     */
    export const FINISHED_LOADING: "finished_loading";
    /**
     * Type of events that cause objects to be bumped back into the visible
     * portion of the workspace.
     *
     * Not to be confused with bumping so that disconnected connections do not
     * appear connected.
     */
    export type BumpEvent = BlockCreate | BlockMove | CommentCreate | CommentMove;
    /**
     * Type of events that cause objects to be bumped back into the visible
     * portion of the workspace.
     *
     * Not to be confused with bumping so that disconnected connections do not
     * appear connected.
     * @typedef {!BlockCreate|!BlockMove|
     * !CommentCreate|!CommentMove}
     * @alias Blockly.Events.utils.BumpEvent
     */
    export let BumpEvent: any;
    /**
     * List of events that cause objects to be bumped back into the visible
     * portion of the workspace.
     *
     * Not to be confused with bumping so that disconnected connections do not
     * appear connected.
     * @const
     * @alias Blockly.Events.utils.BUMP_EVENTS
     */
    export const BUMP_EVENTS: string[];
    /**
     * Create a custom event and fire it.
     * @param {!Abstract} event Custom data for event.
     * @alias Blockly.Events.utils.fire
     */
    export function fire(event: typeof Abstract): void;
    /**
     * Filter the queued events and merge duplicates.
     * @param {!Array<!Abstract>} queueIn Array of events.
     * @param {boolean} forward True if forward (redo), false if backward (undo).
     * @return {!Array<!Abstract>} Array of filtered events.
     * @alias Blockly.Events.utils.filter
     */
    export function filter(queueIn: Array<typeof Abstract>, forward: boolean): Array<typeof Abstract>;
    /**
     * Modify pending undo events so that when they are fired they don't land
     * in the undo stack.  Called by Workspace.clearUndo.
     * @alias Blockly.Events.utils.clearPendingUndo
     */
    export function clearPendingUndo(): void;
    /**
     * Stop sending events.  Every call to this function MUST also call enable.
     * @alias Blockly.Events.utils.disable
     */
    export function disable(): void;
    /**
     * Start sending events.  Unless events were already disabled when the
     * corresponding call to disable was made.
     * @alias Blockly.Events.utils.enable
     */
    export function enable(): void;
    /**
     * Returns whether events may be fired or not.
     * @return {boolean} True if enabled.
     * @alias Blockly.Events.utils.isEnabled
     */
    export function isEnabled(): boolean;
    /**
     * Current group.
     * @return {string} ID string.
     * @alias Blockly.Events.utils.getGroup
     */
    export function getGroup(): string;
    /**
     * Start or stop a group.
     * @param {boolean|string} state True to start new group, false to end group.
     *   String to set group explicitly.
     * @alias Blockly.Events.utils.setGroup
     */
    export function setGroup(state: boolean | string): void;
    /**
     * Compute a list of the IDs of the specified block and all its descendants.
     * @param {!Block} block The root block.
     * @return {!Array<string>} List of block IDs.
     * @alias Blockly.Events.utils.getDescendantIds
     * @package
     */
    export function getDescendantIds(block: Block): Array<string>;
    /**
     * Decode the JSON into an event.
     * @param {!Object} json JSON representation.
     * @param {!Workspace} workspace Target workspace for event.
     * @return {!Abstract} The event represented by the JSON.
     * @throws {Error} if an event type is not found in the registry.
     * @alias Blockly.Events.utils.fromJson
     */
    export function fromJson(json: any, workspace: Workspace): typeof Abstract;
    /**
     * Gets the class for a specific event type from the registry.
     * @param {string} eventType The type of the event to get.
     * @return {?function(new:Abstract, ...?)} The event class with
     *     the given type or null if none exists.
     * @alias Blockly.Events.utils.get
     */
    export function get(eventType: string): (new (...args: unknown[]) => typeof Abstract) | null;
    /**
     * Enable/disable a block depending on whether it is properly connected.
     * Use this on applications where all blocks should be connected to a top block.
     * Recommend setting the 'disable' option to 'false' in the config so that
     * users don't try to re-enable disabled orphan blocks.
     * @param {!Abstract} event Custom data for event.
     * @alias Blockly.Events.utils.disableOrphans
     */
    export function disableOrphans(event: typeof Abstract): void;
    /**
     * List of events queued for firing.
     */
    const FIRE_QUEUE: any[];
    /**
     * Fire all queued events.
     */
    function fireNow(): void;
    import { BlockCreate } from "events/events_block_create";
    import { BlockMove } from "events/events_block_move";
    import { CommentCreate } from "events/events_comment_create";
    import { CommentMove } from "events/events_comment_move";
    import * as Abstract from "events/events_abstract";
    import { Block } from "block";
    import { Workspace } from "workspace";
    export {};
}
declare module "events/events_abstract" {
    export {};
}
declare module "events/events_block_delete" {
    export class BlockDelete {
        /**
         * Class for a block deletion event.
         * @param {!Block=} opt_block The deleted block.  Undefined for a blank
         *     event.
         * @extends {BlockBase}
         * @constructor
         * @alias Blockly.Events.BlockDelete
         */
        constructor(opt_block?: Block | undefined);
        recordUndo: boolean;
        oldXml: Element | DocumentFragment;
        ids: string[];
        /**
         * Was the block that was just deleted a shadow?
         * @type {boolean}
         */
        wasShadow: boolean;
        /**
         * JSON representation of the block that was just deleted.
         * @type {!blocks.State}
         */
        oldJson: any;
        /**
         * Encode the event as JSON.
         * @return {!Object} JSON representation.
         */
        toJson(): any;
        /**
         * Decode the JSON event.
         * @param {!Object} json JSON representation.
         */
        fromJson(json: any): void;
        /**
         * Run a deletion event.
         * @param {boolean} forward True if run forward, false if run backward (undo).
         */
        run(forward: boolean): void;
        /**
         * Type of this event.
         * @type {string}
         */
        type: string;
    }
    import { Block } from "block";
}
declare module "block" {
    export class Block {
        /**
         * Class for one block.
         * Not normally called directly, workspace.newBlock() is preferred.
         * @param {!Workspace} workspace The block's workspace.
         * @param {!string} prototypeName Name of the language object containing
         *     type-specific functions for this block.
         * @param {string=} opt_id Optional ID.  Use this ID if provided, otherwise
         *     create a new ID.
         * @constructor
         * @implements {IASTNodeLocation}
         * @implements {IDeletable}
         * @throws When the prototypeName is not valid or not allowed.
         * @alias Blockly.Block
         */
        constructor(workspace: Workspace, prototypeName: string, opt_id?: string | undefined);
        /** @type {string} */
        id: string;
        /** @type {Connection} */
        outputConnection: Connection;
        /** @type {Connection} */
        nextConnection: Connection;
        /** @type {Connection} */
        previousConnection: Connection;
        /** @type {!Array<!Input>} */
        inputList: Array<Input>;
        /** @type {boolean|undefined} */
        inputsInline: boolean | undefined;
        /**
         * @type {boolean}
         * @private
         */
        private disabled;
        /** @type {!Tooltip.TipInfo} */
        tooltip: Tooltip.TipInfo;
        /** @type {boolean} */
        contextMenu: boolean;
        /**
         * @type {Block}
         * @protected
         */
        protected parentBlock_: Block;
        /**
         * @type {!Array<!Block>}
         * @protected
         */
        protected childBlocks_: Array<Block>;
        /**
         * @type {boolean}
         * @private
         */
        private deletable_;
        /**
         * @type {boolean}
         * @private
         */
        private movable_;
        /**
         * @type {boolean}
         * @private
         */
        private editable_;
        /**
         * @type {boolean}
         * @private
         */
        private isShadow_;
        /**
         * @type {boolean}
         * @protected
         */
        protected collapsed_: boolean;
        /**
         * @type {?number}
         * @protected
         */
        protected outputShape_: number | null;
        /**
         * A string representing the comment attached to this block.
         * @type {string|Comment}
         * @deprecated August 2019. Use getCommentText instead.
         */
        comment: string | Comment;
        /**
         * A model of the comment attached to this block.
         * @type {!Block.CommentModel}
         * @package
         */
        commentModel: Block.CommentModel;
        /**
         * The block's position in workspace units.  (0, 0) is at the workspace's
         * origin; scale does not change this value.
         * @type {!Coordinate}
         * @private
         */
        private xy_;
        /** @type {!Workspace} */
        workspace: Workspace;
        /** @type {boolean} */
        isInFlyout: boolean;
        /** @type {boolean} */
        isInMutator: boolean;
        /** @type {boolean} */
        RTL: boolean;
        /**
         * True if this block is an insertion marker.
         * @type {boolean}
         * @protected
         */
        protected isInsertionMarker_: boolean;
        /**
         * Name of the type of hat.
         * @type {string|undefined}
         */
        hat: string | undefined;
        /** @type {?boolean} */
        rendered: boolean | null;
        /**
         * A count of statement inputs on the block.
         * @type {number}
         * @package
         */
        statementInputCount: number;
        /** @type {string} */
        type: string;
        /** @type {boolean|undefined} */
        inputsInlineDefault: boolean | undefined;
        /**
         * Dispose of this block.
         * @param {boolean} healStack If true, then try to heal any gap by connecting
         *     the next statement with the previous statement.  Otherwise, dispose of
         *     all children of this block.
         * @suppress {checkTypes}
         */
        dispose(healStack: boolean): void;
        disposed: boolean;
        /**
         * Call initModel on all fields on the block.
         * May be called more than once.
         * Either initModel or initSvg must be called after creating a block and before
         * the first interaction with it.  Interactions include UI actions
         * (e.g. clicking and dragging) and firing events (e.g. create, delete, and
         * change).
         * @public
         */
        public initModel(): void;
        /**
         * Unplug this block from its superior block.  If this block is a statement,
         * optionally reconnect the block underneath with the block on top.
         * @param {boolean=} opt_healStack Disconnect child statement and reconnect
         *   stack.  Defaults to false.
         */
        unplug(opt_healStack?: boolean | undefined): void;
        /**
         * Unplug this block's output from an input on another block.  Optionally
         * reconnect the block's parent to the only child block, if possible.
         * @param {boolean=} opt_healStack Disconnect right-side block and connect to
         *     left-side block.  Defaults to false.
         * @private
         */
        private unplugFromRow_;
        /**
         * Returns the connection on the value input that is connected to another block.
         * When an insertion marker is connected to a connection with a block already
         * attached, the connected block is attached to the insertion marker.
         * Since only one block can be displaced and attached to the insertion marker
         * this should only ever return one connection.
         *
         * @return {?Connection} The connection on the value input, or null.
         * @private
         */
        private getOnlyValueConnection_;
        /**
         * Unplug this statement block from its superior block.  Optionally reconnect
         * the block underneath with the block on top.
         * @param {boolean=} opt_healStack Disconnect child statement and reconnect
         *   stack.  Defaults to false.
         * @private
         */
        private unplugFromStack_;
        /**
         * Returns all connections originating from this block.
         * @param {boolean} _all If true, return all connections even hidden ones.
         * @return {!Array<!Connection>} Array of connections.
         * @package
         */
        getConnections_(_all: boolean): Array<Connection>;
        /**
         * Walks down a stack of blocks and finds the last next connection on the stack.
         * @param {boolean} ignoreShadows If true,the last connection on a non-shadow
         *     block will be returned. If false, this will follow shadows to find the
         *     last connection.
         * @return {?Connection} The last next connection on the stack, or null.
         * @package
         */
        lastConnectionInStack(ignoreShadows: boolean): Connection | null;
        /**
         * Bump unconnected blocks out of alignment.  Two blocks which aren't actually
         * connected should not coincidentally line up on screen.
         */
        bumpNeighbours(): void;
        /**
         * Return the parent block or null if this block is at the top level. The parent
         * block is either the block connected to the previous connection (for a
         * statement block) or the block connected to the output connection (for a value
         * block).
         * @return {?Block} The block (if any) that holds the current block.
         */
        getParent(): Block | null;
        /**
         * Return the input that connects to the specified block.
         * @param {!Block} block A block connected to an input on this block.
         * @return {?Input} The input (if any) that connects to the specified
         *     block.
         */
        getInputWithBlock(block: Block): Input | null;
        /**
         * Return the parent block that surrounds the current block, or null if this
         * block has no surrounding block.  A parent block might just be the previous
         * statement, whereas the surrounding block is an if statement, while loop, etc.
         * @return {?Block} The block (if any) that surrounds the current block.
         */
        getSurroundParent(): Block | null;
        /**
         * Return the next statement block directly connected to this block.
         * @return {?Block} The next statement block or null.
         */
        getNextBlock(): Block | null;
        /**
         * Returns the block connected to the previous connection.
         * @return {?Block} The previous statement block or null.
         */
        getPreviousBlock(): Block | null;
        /**
         * Return the connection on the first statement input on this block, or null if
         * there are none.
         * @return {?Connection} The first statement connection or null.
         * @package
         */
        getFirstStatementConnection(): Connection | null;
        /**
         * Return the top-most block in this block's tree.
         * This will return itself if this block is at the top level.
         * @return {!Block} The root block.
         */
        getRootBlock(): Block;
        /**
         * Walk up from the given block up through the stack of blocks to find
         * the top block of the sub stack. If we are nested in a statement input only
         * find the top-most nested block. Do not go all the way to the root block.
         * @return {!Block} The top block in a stack.
         * @package
         */
        getTopStackBlock(): Block;
        /**
         * Find all the blocks that are directly nested inside this one.
         * Includes value and statement inputs, as well as any following statement.
         * Excludes any connection on an output tab or any preceding statement.
         * Blocks are optionally sorted by position; top to bottom.
         * @param {boolean} ordered Sort the list if true.
         * @return {!Array<!Block>} Array of blocks.
         */
        getChildren(ordered: boolean): Array<Block>;
        /**
         * Set parent of this block to be a new block or null.
         * @param {Block} newParent New parent block.
         * @package
         */
        setParent(newParent: Block): void;
        /**
         * Find all the blocks that are directly or indirectly nested inside this one.
         * Includes this block in the list.
         * Includes value and statement inputs, as well as any following statements.
         * Excludes any connection on an output tab or any preceding statements.
         * Blocks are optionally sorted by position; top to bottom.
         * @param {boolean} ordered Sort the list if true.
         * @return {!Array<!Block>} Flattened array of blocks.
         */
        getDescendants(ordered: boolean): Array<Block>;
        /**
         * Get whether this block is deletable or not.
         * @return {boolean} True if deletable.
         */
        isDeletable(): boolean;
        /**
         * Set whether this block is deletable or not.
         * @param {boolean} deletable True if deletable.
         */
        setDeletable(deletable: boolean): void;
        /**
         * Get whether this block is movable or not.
         * @return {boolean} True if movable.
         */
        isMovable(): boolean;
        /**
         * Set whether this block is movable or not.
         * @param {boolean} movable True if movable.
         */
        setMovable(movable: boolean): void;
        /**
         * Get whether is block is duplicatable or not. If duplicating this block and
         * descendants will put this block over the workspace's capacity this block is
         * not duplicatable. If duplicating this block and descendants will put any
         * type over their maxInstances this block is not duplicatable.
         * @return {boolean} True if duplicatable.
         */
        isDuplicatable(): boolean;
        /**
         * Get whether this block is a shadow block or not.
         * @return {boolean} True if a shadow.
         */
        isShadow(): boolean;
        /**
         * Set whether this block is a shadow block or not.
         * @param {boolean} shadow True if a shadow.
         * @package
         */
        setShadow(shadow: boolean): void;
        /**
         * Get whether this block is an insertion marker block or not.
         * @return {boolean} True if an insertion marker.
         */
        isInsertionMarker(): boolean;
        /**
         * Set whether this block is an insertion marker block or not.
         * Once set this cannot be unset.
         * @param {boolean} insertionMarker True if an insertion marker.
         * @package
         */
        setInsertionMarker(insertionMarker: boolean): void;
        /**
         * Get whether this block is editable or not.
         * @return {boolean} True if editable.
         */
        isEditable(): boolean;
        /**
         * Set whether this block is editable or not.
         * @param {boolean} editable True if editable.
         */
        setEditable(editable: boolean): void;
        /**
         * Returns if this block has been disposed of / deleted.
         * @return {boolean} True if this block has been disposed of / deleted.
         */
        isDisposed(): boolean;
        /**
         * Find the connection on this block that corresponds to the given connection
         * on the other block.
         * Used to match connections between a block and its insertion marker.
         * @param {!Block} otherBlock The other block to match against.
         * @param {!Connection} conn The other connection to match.
         * @return {?Connection} The matching connection on this block, or null.
         * @package
         */
        getMatchingConnection(otherBlock: Block, conn: Connection): Connection | null;
        /**
         * Set the URL of this block's help page.
         * @param {string|Function} url URL string for block help, or function that
         *     returns a URL.  Null for no help.
         */
        setHelpUrl(url: string | Function): void;
        helpUrl: string | Function;
        /**
         * Sets the tooltip for this block.
         * @param {!Tooltip.TipInfo} newTip The text for the tooltip, a function
         *     that returns the text for the tooltip, or a parent object whose tooltip
         *     will be used. To not display a tooltip pass the empty string.
         */
        setTooltip(newTip: Tooltip.TipInfo): void;
        /**
         * Returns the tooltip text for this block.
         * @return {!string} The tooltip text for this block.
         */
        getTooltip(): string;
        /**
         * Get the color of a block.
         * @return {string} #RRGGBB string.
         */
        getColor(): string;
        /**
         * Get the name of the block style.
         * @return {string} Name of the block style.
         */
        getStyleName(): string;
        /**
         * Get the HSV hue value of a block.  Null if hue not set.
         * @return {?number} Hue value (0-360).
         */
        getHue(): number | null;
        /**
         * Change the color of a block.
         * @param {number|string} color HSV hue value (0 to 360), #RRGGBB string,
         *     or a message reference string pointing to one of those two values.
         */
        setColor(color: number | string): void;
        hue_: number | null;
        color_: string;
        /**
         * Set the style and color values of a block.
         * @param {string} blockStyleName Name of the block style.
         */
        setStyle(blockStyleName: string): void;
        styleName_: string;
        /**
         * Sets a callback function to use whenever the block's parent workspace
         * changes, replacing any prior onchange handler. This is usually only called
         * from the constructor, the block type initializer function, or an extension
         * initializer function.
         * @param {function(Abstract)} onchangeFn The callback to call
         *     when the block's workspace changes.
         * @throws {Error} if onchangeFn is not falsey and not a function.
         */
        setOnChange(onchangeFn: (arg0: typeof Abstract) => any): void;
        onchange: ((arg0: typeof Abstract) => any) | null;
        onchangeWrapper_: any;
        /**
         * Returns the named field from a block.
         * @param {string} name The name of the field.
         * @return {?Field} Named field, or null if field does not exist.
         */
        getField(name: string): Field | null;
        /**
         * Return all variables referenced by this block.
         * @return {!Array<string>} List of variable ids.
         */
        getVars(): Array<string>;
        /**
         * Return all variables referenced by this block.
         * @return {!Array<!VariableModel>} List of variable models.
         * @package
         */
        getVarModels(): Array<VariableModel>;
        /**
         * Notification that a variable is renaming but keeping the same ID.  If the
         * variable is in use on this block, rerender to show the new name.
         * @param {!VariableModel} variable The variable being renamed.
         * @package
         */
        updateVarName(variable: VariableModel): void;
        /**
         * Notification that a variable is renaming.
         * If the ID matches one of this block's variables, rename it.
         * @param {string} oldId ID of variable to rename.
         * @param {string} newId ID of new variable.  May be the same as oldId, but with
         *     an updated name.
         */
        renameVarById(oldId: string, newId: string): void;
        /**
         * Returns the language-neutral value of the given field.
         * @param {string} name The name of the field.
         * @return {*} Value of the field or null if field does not exist.
         */
        getFieldValue(name: string): any;
        /**
         * Sets the value of the given field for this block.
         * @param {*} newValue The value to set.
         * @param {string} name The name of the field to set the value of.
         */
        setFieldValue(newValue: any, name: string): void;
        /**
         * Set whether this block can chain onto the bottom of another block.
         * @param {boolean} newBoolean True if there can be a previous statement.
         * @param {(string|Array<string>|null)=} opt_check Statement type or
         *     list of statement types.  Null/undefined if any type could be connected.
         */
        setPreviousStatement(newBoolean: boolean, opt_check?: (string | Array<string> | null) | undefined): void;
        /**
         * Set whether another block can chain onto the bottom of this block.
         * @param {boolean} newBoolean True if there can be a next statement.
         * @param {(string|Array<string>|null)=} opt_check Statement type or
         *     list of statement types.  Null/undefined if any type could be connected.
         */
        setNextStatement(newBoolean: boolean, opt_check?: (string | Array<string> | null) | undefined): void;
        /**
         * Set whether this block returns a value.
         * @param {boolean} newBoolean True if there is an output.
         * @param {(string|Array<string>|null)=} opt_check Returned type or list
         *     of returned types.  Null or undefined if any type could be returned
         *     (e.g. variable get).
         */
        setOutput(newBoolean: boolean, opt_check?: (string | Array<string> | null) | undefined): void;
        /**
         * Set whether value inputs are arranged horizontally or vertically.
         * @param {boolean} newBoolean True if inputs are horizontal.
         */
        setInputsInline(newBoolean: boolean): void;
        /**
         * Get whether value inputs are arranged horizontally or vertically.
         * @return {boolean} True if inputs are horizontal.
         */
        getInputsInline(): boolean;
        /**
         * Set the block's output shape.
         * @param {?number} outputShape Value representing an output shape.
         */
        setOutputShape(outputShape: number | null): void;
        /**
         * Get the block's output shape.
         * @return {?number} Value representing output shape if one exists.
         */
        getOutputShape(): number | null;
        /**
         * Get whether this block is enabled or not.
         * @return {boolean} True if enabled.
         */
        isEnabled(): boolean;
        /**
         * Set whether the block is enabled or not.
         * @param {boolean} enabled True if enabled.
         */
        setEnabled(enabled: boolean): void;
        /**
         * Get whether the block is disabled or not due to parents.
         * The block's own disabled property is not considered.
         * @return {boolean} True if disabled.
         */
        getInheritedDisabled(): boolean;
        /**
         * Get whether the block is collapsed or not.
         * @return {boolean} True if collapsed.
         */
        isCollapsed(): boolean;
        /**
         * Set whether the block is collapsed or not.
         * @param {boolean} collapsed True if collapsed.
         */
        setCollapsed(collapsed: boolean): void;
        /**
         * Create a human-readable text representation of this block and any children.
         * @param {number=} opt_maxLength Truncate the string to this length.
         * @param {string=} opt_emptyToken The placeholder string used to denote an
         *     empty field. If not specified, '?' is used.
         * @return {string} Text of block.
         */
        toString(opt_maxLength?: number | undefined, opt_emptyToken?: string | undefined): string;
        /**
         * Shortcut for appending a value input row.
         * @param {string} name Language-neutral identifier which may used to find this
         *     input again.  Should be unique to this block.
         * @return {!Input} The input object created.
         */
        appendValueInput(name: string): Input;
        /**
         * Shortcut for appending a statement input row.
         * @param {string} name Language-neutral identifier which may used to find this
         *     input again.  Should be unique to this block.
         * @return {!Input} The input object created.
         */
        appendStatementInput(name: string): Input;
        /**
         * Shortcut for appending a dummy input row.
         * @param {string=} opt_name Language-neutral identifier which may used to find
         *     this input again.  Should be unique to this block.
         * @return {!Input} The input object created.
         */
        appendDummyInput(opt_name?: string | undefined): Input;
        /**
         * Initialize this block using a cross-platform, internationalization-friendly
         * JSON description.
         * @param {!Object} json Structured data describing the block.
         */
        jsonInit(json: any): void;
        suppressPrefixSuffix: boolean | null;
        /**
         * Initialize the color of this block from the JSON description.
         * @param {!Object} json Structured data describing the block.
         * @param {string} warningPrefix Warning prefix string identifying block.
         * @private
         */
        private jsonInitColor_;
        /**
         * Initialize the style of this block from the JSON description.
         * @param {!Object} json Structured data describing the block.
         * @param {string} warningPrefix Warning prefix string identifying block.
         * @private
         */
        private jsonInitStyle_;
        /**
         * Add key/values from mixinObj to this block object. By default, this method
         * will check that the keys in mixinObj will not overwrite existing values in
         * the block, including prototype values. This provides some insurance against
         * mixin / extension incompatibilities with future block features. This check
         * can be disabled by passing true as the second argument.
         * @param {!Object} mixinObj The key/values pairs to add to this block object.
         * @param {boolean=} opt_disableCheck Option flag to disable overwrite checks.
         */
        mixin(mixinObj: any, opt_disableCheck?: boolean | undefined): void;
        /**
         * Interpolate a message description onto the block.
         * @param {string} message Text contains interpolation tokens (%1, %2, ...)
         *     that match with fields or inputs defined in the args array.
         * @param {!Array} args Array of arguments to be interpolated.
         * @param {string|undefined} lastDummyAlign If a dummy input is added at the
         *     end, how should it be aligned?
         * @param {string} warningPrefix Warning prefix string identifying block.
         * @private
         */
        private interpolate_;
        /**
         * Validates that the tokens are within the correct bounds, with no duplicates,
         * and that all of the arguments are referred to. Throws errors if any of these
         * things are not true.
         * @param {!Array<string|number>} tokens An array of tokens to validate
         * @param {number} argsCount The number of args that need to be referred to.
         * @private
         */
        private validateTokens_;
        /**
         * Inserts args in place of numerical tokens. String args are converted to JSON
         * that defines a label field. If necessary an extra dummy input is added to
         * the end of the elements.
         * @param {!Array<!string|number>} tokens The tokens to interpolate
         * @param {!Array<!Object|string>} args The arguments to insert.
         * @param {string|undefined} lastDummyAlign The alignment the added dummy input
         *     should have, if we are required to add one.
         * @return {!Array<!Object>} The JSON definitions of field and inputs to add
         *     to the block.
         * @private
         */
        private interpolateArguments_;
        /**
         * Creates a field from the JSON definition of a field. If a field with the
         * given type cannot be found, this attempts to create a different field using
         * the 'alt' property of the JSON definition (if it exists).
         * @param {{alt:(string|undefined)}} element The element to try to turn into a
         *     field.
         * @return {?Field} The field defined by the JSON, or null if one
         *     couldn't be created.
         * @private
         */
        private fieldFromJson_;
        /**
         * Creates an input from the JSON definition of an input. Sets the input's check
         * and alignment if they are provided.
         * @param {!Object} element The JSON to turn into an input.
         * @param {string} warningPrefix The prefix to add to warnings to help the
         *     developer debug.
         * @return {?Input} The input that has been created, or null if one
         *     could not be created for some reason (should never happen).
         * @private
         */
        private inputFromJson_;
        /**
         * Returns true if the given string matches one of the input keywords.
         * @param {string} str The string to check.
         * @return {boolean} True if the given string matches one of the input keywords,
         *     false otherwise.
         * @private
         */
        private isInputKeyword_;
        /**
         * Turns a string into the JSON definition of a label field. If the string
         * becomes an empty string when trimmed, this returns null.
         * @param {string} str String to turn into the JSON definition of a label field.
         * @return {?{text: string, type: string}} The JSON definition or null.
         * @private
         */
        private stringToFieldJson_;
        /**
         * Add a value input, statement input or local variable to this block.
         * @param {number} type One of Blockly.inputTypes.
         * @param {string} name Language-neutral identifier which may used to find this
         *     input again.  Should be unique to this block.
         * @return {!Input} The input object created.
         * @protected
         */
        protected appendInput_(type: number, name: string): Input;
        /**
         * Move a named input to a different location on this block.
         * @param {string} name The name of the input to move.
         * @param {?string} refName Name of input that should be after the moved input,
         *   or null to be the input at the end.
         */
        moveInputBefore(name: string, refName: string | null): void;
        /**
         * Move a numbered input to a different location on this block.
         * @param {number} inputIndex Index of the input to move.
         * @param {number} refIndex Index of input that should be after the moved input.
         */
        moveNumberedInputBefore(inputIndex: number, refIndex: number): void;
        /**
         * Remove an input from this block.
         * @param {string} name The name of the input.
         * @param {boolean=} opt_quiet True to prevent an error if input is not present.
         * @return {boolean} True if operation succeeds, false if input is not present
         *     and opt_quiet is true.
         * @throws {Error} if the input is not present and opt_quiet is not true.
         */
        removeInput(name: string, opt_quiet?: boolean | undefined): boolean;
        /**
         * Fetches the named input object.
         * @param {string} name The name of the input.
         * @return {?Input} The input object, or null if input does not exist.
         */
        getInput(name: string): Input | null;
        /**
         * Fetches the block attached to the named input.
         * @param {string} name The name of the input.
         * @return {?Block} The attached value block, or null if the input is
         *     either disconnected or if the input does not exist.
         */
        getInputTargetBlock(name: string): Block | null;
        /**
         * Returns the comment on this block (or null if there is no comment).
         * @return {?string} Block's comment.
         */
        getCommentText(): string | null;
        /**
         * Set this block's comment text.
         * @param {?string} text The text, or null to delete.
         */
        setCommentText(text: string | null): void;
        /**
         * Set this block's warning text.
         * @param {?string} _text The text, or null to delete.
         * @param {string=} _opt_id An optional ID for the warning text to be able to
         *     maintain multiple warnings.
         */
        setWarningText(_text: string | null, _opt_id?: string | undefined): void;
        /**
         * Give this block a mutator dialog.
         * @param {Mutator} _mutator A mutator dialog instance or null to
         *     remove.
         */
        setMutator(_mutator: Mutator): void;
        /**
         * Return the coordinates of the top-left corner of this block relative to the
         * drawing surface's origin (0,0), in workspace units.
         * @return {!Coordinate} Object with .x and .y properties.
         */
        getRelativeToSurfaceXY(): Coordinate;
        /**
         * Move a block by a relative offset.
         * @param {number} dx Horizontal offset, in workspace units.
         * @param {number} dy Vertical offset, in workspace units.
         */
        moveBy(dx: number, dy: number): void;
        /**
         * Create a connection of the specified type.
         * @param {number} type The type of the connection to create.
         * @return {!Connection} A new connection of the specified type.
         * @protected
         */
        protected makeConnection_(type: number): Connection;
        /**
         * Recursively checks whether all statement and value inputs are filled with
         * blocks. Also checks all following statement blocks in this stack.
         * @param {boolean=} opt_shadowBlocksAreFilled An optional argument controlling
         *     whether shadow blocks are counted as filled. Defaults to true.
         * @return {boolean} True if all inputs are filled, false otherwise.
         */
        allInputsFilled(opt_shadowBlocksAreFilled?: boolean | undefined): boolean;
        /**
         * This method returns a string describing this Block in developer terms (type
         * name and ID; English only).
         *
         * Intended to on be used in console logs and errors. If you need a string that
         * uses the user's native language (including block text, field values, and
         * child blocks), use [toString()]{@link Block#toString}.
         * @return {string} The description.
         */
        toDevString(): string;
        /**
         * Optional text data that round-trips between blocks and XML.
         * Has no effect. May be used by 3rd parties for meta information.
         * @type {?string}
         */
        data: string | null;
        /**
         * An optional method called during initialization.
         * @type {?function()}
         */
        init: (() => any) | null;
        /**
         * An optional serialization method for defining how to serialize the
         * mutation state to XML. This must be coupled with defining `domToMutation`.
         * @type {?function(...):!Element}
         */
        mutationToDom: ((...args: any[]) => Element) | null;
        /**
         * An optional deserialization method for defining how to deserialize the
         * mutation state from XML. This must be coupled with defining `mutationToDom`.
         * @type {?function(!Element)}
         */
        domToMutation: ((arg0: Element) => any) | null;
        /**
         * An optional serialization method for defining how to serialize the block's
         * extra state (eg mutation state) to something JSON compatible. This must be
         * coupled with defining `loadExtraState`.
         * @type {?function(): *}
         */
        saveExtraState: (() => any) | null;
        /**
         * An optional serialization method for defining how to deserialize the block's
         * extra state (eg mutation state) from something JSON compatible. This must be
         * coupled with defining `saveExtraState`.
         * @type {?function(*)}
         */
        loadExtraState: ((arg0: any) => any) | null;
        /**
         * An optional property for declaring developer variables.  Return a list of
         * variable names for use by generators.  Developer variables are never shown to
         * the user, but are declared as global variables in the generated code.
         * @type {?function():!Array<string>}
         */
        getDeveloperVariables: (() => Array<string>) | null;
    }
    export namespace Block {
        const COLLAPSED_INPUT_NAME: any;
        const COLLAPSED_FIELD_NAME: any;
        type CommentModel = {
            text: string | null;
            pinned: boolean;
            size: Size;
        };
    }
    import { Connection } from "connection";
    import { Input } from "input";
    import * as Tooltip from "tooltip";
    import { Comment } from "comment";
    import { Workspace } from "workspace";
    import * as Abstract from "events/events_abstract";
    import { Field } from "field";
    import { VariableModel } from "variable_model";
    import { Mutator } from "mutator";
    import { Coordinate } from "utils/coordinate";
    import { Size } from "utils/size";
}
declare module "events/workspace_events" {
    /**
     * Class for a finished loading event.
     * Used to notify the developer when the workspace has finished loading (i.e
     * domToWorkspace).
     * Finished loading events do not record undo or redo.
     * @param {!Workspace=} opt_workspace The workspace that has finished
     *    loading.  Undefined for a blank event.
     * @extends {Abstract}
     * @constructor
     * @alias Blockly.Events.FinishedLoading
     */
    export class FinishedLoading {
        constructor(opt_workspace: any);
        /**
         * Whether or not the event is blank (to be populated by fromJson).
         * @type {boolean}
         */
        isBlank: boolean;
        /**
         * The workspace identifier for this event.
         * @type {string}
         */
        workspaceId: string;
        /**
         * The event group ID for the group this event belongs to. Groups define
         * events that should be treated as an single action from the user's
         * perspective, and should be undone together.
         * @type {string}
         */
        group: string;
        recordUndo: boolean;
        /**
         * Encode the event as JSON.
         * @return {!Object} JSON representation.
         */
        toJson(): any;
        /**
         * Decode the JSON event.
         * @param {!Object} json JSON representation.
         */
        fromJson(json: any): void;
        /**
         * Type of this event.
         * @type {string}
         */
        type: string;
    }
}
declare module "events/events_toolbox_item_select" {
    /**
     * Class for a toolbox item select event.
     * @param {?string=} opt_oldItem The previously selected toolbox item. Undefined
     *    for a blank event.
     * @param {?string=} opt_newItem The newly selected toolbox item. Undefined for
     *    a blank event.
     * @param {string=} opt_workspaceId The workspace identifier for this event.
     *    Undefined for a blank event.
     * @extends {UiBase}
     * @constructor
     * @alias Blockly.Events.ToolboxItemSelect
     */
    export class ToolboxItemSelect {
        constructor(opt_oldItem: any, opt_newItem: any, opt_workspaceId: any);
        /**
         * The previously selected toolbox item.
         * @type {?string|undefined}
         */
        oldItem: (string | undefined) | null;
        /**
         * The newly selected toolbox item.
         * @type {?string|undefined}
         */
        newItem: (string | undefined) | null;
        /**
         * Encode the event as JSON.
         * @return {!Object} JSON representation.
         */
        toJson(): any;
        /**
         * Decode the JSON event.
         * @param {!Object} json JSON representation.
         */
        fromJson(json: any): void;
        /**
         * Type of this event.
         * @type {string}
         */
        type: string;
    }
}
declare module "events/events_ui" {
    /**
     * Class for a UI event.
     * @param {?Block=} opt_block The affected block.  Null for UI events
     *     that do not have an associated block.  Undefined for a blank event.
     * @param {string=} opt_element One of 'selected', 'comment', 'mutatorOpen',
     *     etc.
     * @param {*=} opt_oldValue Previous value of element.
     * @param {*=} opt_newValue New value of element.
     * @extends {UiBase}
     * @deprecated December 2020. Instead use a more specific UI event.
     * @constructor
     * @alias Blockly.Events.Ui
     */
    export class Ui {
        constructor(opt_block: any, opt_element: any, opt_oldValue: any, opt_newValue: any);
        blockId: any;
        element: any;
        oldValue: any;
        newValue: any;
        /**
         * Encode the event as JSON.
         * @return {!Object} JSON representation.
         */
        toJson(): any;
        /**
         * Decode the JSON event.
         * @param {!Object} json JSON representation.
         */
        fromJson(json: any): void;
        /**
         * Type of this event.
         * @type {string}
         */
        type: string;
    }
}
declare module "events/events" {
    export const BLOCK_CHANGE: "change";
    export const BLOCK_CREATE: "create";
    export const BLOCK_DELETE: "delete";
    export const BLOCK_DRAG: "drag";
    export const BLOCK_MOVE: "move";
    export const BUBBLE_OPEN: "bubble_open";
    export const BumpEvent: any;
    export const BUMP_EVENTS: string[];
    export const CHANGE: "change";
    export const CLICK: "click";
    export const COMMENT_CHANGE: "comment_change";
    export const COMMENT_CREATE: "comment_create";
    export const COMMENT_DELETE: "comment_delete";
    export const COMMENT_MOVE: "comment_move";
    export const CREATE: "create";
    export const DELETE: "delete";
    export const FINISHED_LOADING: "finished_loading";
    export const MARKER_MOVE: "marker_move";
    export const MOVE: "move";
    export const SELECTED: "selected";
    export const THEME_CHANGE: "theme_change";
    export const TOOLBOX_ITEM_SELECT: "toolbox_item_select";
    export const TRASHCAN_OPEN: "trashcan_open";
    export const UI: "ui";
    export const VAR_CREATE: "var_create";
    export const VAR_DELETE: "var_delete";
    export const VAR_RENAME: "var_rename";
    export const VIEWPORT_CHANGE: "viewport_change";
    export const clearPendingUndo: () => void;
    export const disable: () => void;
    export const enable: () => void;
    export const filter: (queueIn: (typeof Abstract)[], forward: boolean) => (typeof Abstract)[];
    export const fire: (event: typeof Abstract) => void;
    export const fromJson: (json: any, workspace: import("workspace").Workspace) => typeof Abstract;
    export const getDescendantIds: (block: import("block").Block) => string[];
    export const get: (eventType: string) => new (...arg1: any[]) => typeof Abstract;
    export const getGroup: () => string;
    export const getRecordUndo: () => boolean;
    export const isEnabled: () => boolean;
    export const setGroup: (state: string | boolean) => void;
    export const setRecordUndo: (newValue: boolean) => void;
    export const disableOrphans: (event: typeof Abstract) => void;
    import * as Abstract from "events/events_abstract";
    import { BubbleOpen } from "events/events_bubble_open";
    import { BlockBase } from "events/events_block_base";
    import { BlockChange } from "events/events_block_change";
    import { BlockCreate } from "events/events_block_create";
    import { BlockDelete } from "events/events_block_delete";
    import { BlockDrag } from "events/events_block_drag";
    import { BlockMove } from "events/events_block_move";
    import { Click } from "events/events_click";
    import { CommentBase } from "events/events_comment_base";
    import { CommentChange } from "events/events_comment_change";
    import { CommentCreate } from "events/events_comment_create";
    import { CommentDelete } from "events/events_comment_delete";
    import { CommentMove } from "events/events_comment_move";
    import { FinishedLoading } from "events/workspace_events";
    import { MarkerMove } from "events/events_marker_move";
    import { Selected } from "events/events_selected";
    import { ThemeChange } from "events/events_theme_change";
    import { ToolboxItemSelect } from "events/events_toolbox_item_select";
    import { TrashcanOpen } from "events/events_trashcan_open";
    import { Ui } from "events/events_ui";
    import { UiBase } from "events/events_ui_base";
    import { VarBase } from "events/events_var_base";
    import { VarCreate } from "events/events_var_create";
    import { VarDelete } from "events/events_var_delete";
    import { VarRename } from "events/events_var_rename";
    import { ViewportChange } from "events/events_viewport";
    export { Abstract, BubbleOpen, BlockBase, BlockChange, BlockCreate, BlockDelete, BlockDrag, BlockMove, Click, CommentBase, CommentChange, CommentCreate, CommentDelete, CommentMove, FinishedLoading, MarkerMove, Selected, ThemeChange, ToolboxItemSelect, TrashcanOpen, Ui, UiBase, VarBase, VarCreate, VarDelete, VarRename, ViewportChange };
}
declare module "contextmenu_items" {
    /**
     * Option to undo previous action.
     * @alias Blockly.ContextMenuItems.registerUndo
     */
    export function registerUndo(): void;
    /**
     * Option to redo previous action.
     * @alias Blockly.ContextMenuItems.registerRedo
     */
    export function registerRedo(): void;
    /**
     * Option to clean up blocks.
     * @alias Blockly.ContextMenuItems.registerCleanup
     */
    export function registerCleanup(): void;
    /**
     * Option to collapse all blocks.
     * @alias Blockly.ContextMenuItems.registerCollapse
     */
    export function registerCollapse(): void;
    /**
     * Option to expand all blocks.
     * @alias Blockly.ContextMenuItems.registerExpand
     */
    export function registerExpand(): void;
    /**
     * Option to delete all blocks.
     * @alias Blockly.ContextMenuItems.registerDeleteAll
     */
    export function registerDeleteAll(): void;
    /**
     * Option to duplicate a block.
     * @alias Blockly.ContextMenuItems.registerDuplicate
     */
    export function registerDuplicate(): void;
    /**
     * Option to add or remove block-level comment.
     * @alias Blockly.ContextMenuItems.registerComment
     */
    export function registerComment(): void;
    /**
     * Option to inline variables.
     * @alias Blockly.ContextMenuItems.registerInline
     */
    export function registerInline(): void;
    /**
     * Option to collapse or expand a block.
     * @alias Blockly.ContextMenuItems.registerCollapseExpandBlock
     */
    export function registerCollapseExpandBlock(): void;
    /**
     * Option to disable or enable a block.
     * @alias Blockly.ContextMenuItems.registerDisable
     */
    export function registerDisable(): void;
    /**
     * Option to delete a block.
     * @alias Blockly.ContextMenuItems.registerDelete
     */
    export function registerDelete(): void;
    /**
     * Option to open help for a block.
     * @alias Blockly.ContextMenuItems.registerHelp
     */
    export function registerHelp(): void;
    /**
     * Registers all default context menu items. This should be called once per
     * instance of ContextMenuRegistry.
     * @package
     * @alias Blockly.ContextMenuItems.registerDefaultOptions
     */
    export function registerDefaultOptions(): void;
}
declare module "shortcut_items" {
    /**
     * *
     */
    export type names = string;
    export namespace names {
        const ESCAPE: string;
        const DELETE: string;
        const COPY: string;
        const CUT: string;
        const PASTE: string;
        const UNDO: string;
        const REDO: string;
    }
    /**
     * Keyboard shortcut to hide chaff on escape.
     * @alias Blockly.ShortcutItems.registerEscape
     */
    export function registerEscape(): void;
    /**
     * Keyboard shortcut to delete a block on delete or backspace
     * @alias Blockly.ShortcutItems.registerDelete
     */
    export function registerDelete(): void;
    /**
     * Keyboard shortcut to copy a block on ctrl+c, cmd+c, or alt+c.
     * @alias Blockly.ShortcutItems.registerCopy
     */
    export function registerCopy(): void;
    /**
     * Keyboard shortcut to copy and delete a block on ctrl+x, cmd+x, or alt+x.
     * @alias Blockly.ShortcutItems.registerCut
     */
    export function registerCut(): void;
    /**
     * Keyboard shortcut to paste a block on ctrl+v, cmd+v, or alt+v.
     * @alias Blockly.ShortcutItems.registerPaste
     */
    export function registerPaste(): void;
    /**
     * Keyboard shortcut to undo the previous action on ctrl+z, cmd+z, or alt+z.
     * @alias Blockly.ShortcutItems.registerUndo
     */
    export function registerUndo(): void;
    /**
     * Keyboard shortcut to redo the previous action on ctrl+shift+z, cmd+shift+z,
     * or alt+shift+z.
     * @alias Blockly.ShortcutItems.registerRedo
     */
    export function registerRedo(): void;
    /**
     * Registers all default keyboard shortcut item. This should be called once per
     * instance of KeyboardShortcutRegistry.
     * @alias Blockly.ShortcutItems.registerDefaultShortcuts
     * @package
     */
    export function registerDefaultShortcuts(): void;
}
declare module "theme/zelos" {
    /**
     * Zelos theme.
     * @type {Theme}
     * @alias Blockly.Themes.Zelos
     */
    export const Zelos: Theme;
    import { Theme } from "theme";
}
declare module "theme/themes" {
    import { Classic } from "theme/classic";
    import { Zelos } from "theme/zelos";
    export { Classic, Zelos };
}
declare module "renderers/geras/constants" {
    /**
     * An object that provides constants for rendering blocks in Geras mode.
     * @constructor
     * @package
     * @extends {BaseConstantProvider}
     * @alias Blockly.geras.ConstantProvider
     */
    export class ConstantProvider extends BaseConstantProvider {
        /**
         * @override
         */
        override FIELD_TEXT_BASELINE_CENTER: boolean;
        DARK_PATH_OFFSET: number;
        /**
         * The maximum width of a bottom row that follows a statement input and has
         * inputs inline.
         * @type {number}
         */
        MAX_BOTTOM_WIDTH: number;
        /**
         * @override
         */
        override STATEMENT_BOTTOM_SPACER: number;
        /**
         * @override
         */
        override getCSS_(selector: any): any;
    }
    import { ConstantProvider as  BaseConstantProvider } from "renderers/common/constants";
}
declare module "renderers/geras/highlight_constants" {
    /**
     * An object that provides constants for rendering highlights on blocks.
     * Some highlights are simple offsets of the parent paths and can be generated
     * programmatically.  Others, especially on curves, are just made out of piles
     * of constants and are hard to tweak.
     * @param {!ConstantProvider} constants The rendering
     *   constants provider.
     * @constructor
     * @package
     * @alias Blockly.geras.HighlightConstantProvider
     */
    export class HighlightConstantProvider {
        constructor(constants: any);
        /**
         * The renderer's constant provider.
         * @type {!ConstantProvider}
         */
        constantProvider: ConstantProvider;
        /**
         * The offset between the block's main path and highlight path.
         * @type {number}
         * @package
         */
        OFFSET: number;
        /**
         * The start point, which is offset in both X and Y, as an SVG path chunk.
         * @type {string}
         */
        START_POINT: string;
        /**
         * Initialize shape objects based on the constants set in the constructor.
         * @package
         */
        init(): void;
        /**
         * An object containing sizing and path information about inside corner
         * highlights.
         * @type {!Object}
         */
        INSIDE_CORNER: any;
        /**
         * An object containing sizing and path information about outside corner
         * highlights.
         * @type {!Object}
         */
        OUTSIDE_CORNER: any;
        /**
         * An object containing sizing and path information about puzzle tab
         * highlights.
         * @type {!Object}
         */
        PUZZLE_TAB: any;
        /**
         * An object containing sizing and path information about notch highlights.
         * @type {!Object}
         */
        NOTCH: any;
        /**
         * An object containing sizing and path information about highlights for
         * collapsed block indicators.
         * @type {!Object}
         */
        JAGGED_TEETH: any;
        /**
         * An object containing sizing and path information about start hat
         * highlights.
         * @type {!Object}
         */
        START_HAT: any;
        /**
         * @return {!Object} An object containing sizing and path information about
         *     inside corner highlights.
         * @package
         */
        makeInsideCorner(): any;
        /**
         * @return {!Object} An object containing sizing and path information about
         *     outside corner highlights.
         * @package
         */
        makeOutsideCorner(): any;
        /**
         * @return {!Object} An object containing sizing and path information about
         *     puzzle tab highlights.
         * @package
         */
        makePuzzleTab(): any;
        /**
         * @return {!Object} An object containing sizing and path information about
         *     notch highlights.
         * @package
         */
        makeNotch(): any;
        /**
         * @return {!Object} An object containing sizing and path information about
         *     collapsed block edge highlights.
         * @package
         */
        makeJaggedTeeth(): any;
        /**
         * @return {!Object} An object containing sizing and path information about
         *     start highlights.
         * @package
         */
        makeStartHat(): any;
    }
    import { ConstantProvider } from "renderers/common/constants";
}
declare module "renderers/geras/measurables/inline_input" {
    /**
     * An object containing information about the space an inline input takes up
     * during rendering
     * @param {!ConstantProvider} constants The rendering
     *   constants provider.
     * @param {!Input} input The inline input to measure and store
     *     information for.
     * @package
     * @constructor
     * @extends {BaseInlineInput}
     * @alias Blockly.geras.InlineInput
     */
    export class InlineInput {
        constructor(constants: any, input: any);
    }
}
declare module "renderers/geras/path_object" {
    /**
     * An object that handles creating and setting each of the SVG elements
     * used by the renderer.
     * @param {!SVGElement} root The root SVG element.
     * @param {!Theme.BlockStyle} style The style object to use for
     *     coloring.
     * @param {!ConstantProvider} constants The renderer's constants.
     * @constructor
     * @extends {BasePathObject}
     * @package
     * @alias Blockly.geras.PathObject
     */
    export class PathObject extends BasePathObject {
        constructor(root: any, style: any, constants: any);
        /**
         * The renderer's constant provider.
         * @type {!ConstantProvider}
         */
        constants: ConstantProvider;
        svgRoot: any;
        /**
         * The dark path of the block.
         * @type {SVGElement}
         * @package
         */
        svgPathDark: SVGElement;
        /**
         * The primary path of the block.
         * @type {!SVGElement}
         * @package
         */
        svgPath: SVGElement;
        /**
         * The light path of the block.
         * @type {SVGElement}
         * @package
         */
        svgPathLight: SVGElement;
        /**
         * The color of the dark path on the block in '#RRGGBB' format.
         * @type {string}
         * @package
         */
        colorDark: string;
        /**
         * The style object to use when coloring block paths.
         * @type {!Theme.BlockStyle}
         * @package
         */
        style: Theme.BlockStyle;
        /**
         * @override
         */
        override setPath(mainPath: any): void;
        /**
         * Set the highlight path generated by the renderer onto the SVG element.
         * @param {string} highlightPath The highlight path.
         * @package
         */
        setHighlightPath(highlightPath: string): void;
        /**
         * @override
         */
        override flipRTL(): void;
        /**
         * @override
         */
        override applyColor(block: any): void;
        /**
         * @override
         */
        override setStyle(blockStyle: any): void;
        /**
         * @override
         */
        override updateHighlighted(highlighted: any): void;
        /**
         * @override
         */
        override updateShadow_(shadow: any): void;
        /**
         * @override
         */
        override updateDisabled_(disabled: any): void;
    }
    import { ConstantProvider } from "renderers/geras/constants";
    import { Theme } from "theme";
    import { PathObject as BasePathObject } from "renderers/common/block_rendering";
}
declare module "renderers/geras/renderer" {
    /**
     * The geras renderer.
     * @param {string} name The renderer name.
     * @package
     * @constructor
     * @extends {BaseRenderer}
     * @alias Blockly.geras.Renderer
     */
    export class Renderer extends BaseRenderer {
        constructor(name: any);
        /**
         * The renderer's highlight constant provider.
         * @type {HighlightConstantProvider}
         * @private
         */
        private highlightConstants_;
        /**
         * Initialize the renderer.  Geras has a highlight provider in addition to
         * the normal constant provider.
         * @package
         * @override
         */
        override init(theme: any, opt_rendererOverrides: any): void;
        /**
         * @override
         */
        override refreshDom(svg: any, theme: any): void;
        /**
         * @override
         */
        override makeConstants_(): ConstantProvider;
        /**
         * Create a new instance of the renderer's render info object.
         * @param {!BlockSvg} block The block to measure.
         * @return {!RenderInfo} The render info object.
         * @protected
         * @override
         */
        protected override makeRenderInfo_(block: BlockSvg): RenderInfo;
        /**
         * Create a new instance of the renderer's drawer.
         * @param {!BlockSvg} block The block to render.
         * @param {!BaseRenderInfo} info An object containing all
         *   information needed to render this block.
         * @return {!Drawer} The drawer.
         * @protected
         * @override
         */
        protected override makeDrawer_(block: BlockSvg, info: BaseRenderInfo): Drawer;
        /**
         * Create a new instance of a renderer path object.
         * @param {!SVGElement} root The root SVG element.
         * @param {!Theme.BlockStyle} style The style object to use for
         *     coloring.
         * @return {!PathObject} The renderer path object.
         * @package
         * @override
         */
        override makePathObject(root: SVGElement, style: Theme.BlockStyle): PathObject;
        /**
         * Create a new instance of the renderer's highlight constant provider.
         * @return {!HighlightConstantProvider} The highlight constant
         *     provider.
         * @protected
         */
        protected makeHighlightConstants_(): HighlightConstantProvider;
        /**
         * Get the renderer's highlight constant provider.  We assume that when this is
         * called, the renderer has already been initialized.
         * @return {!HighlightConstantProvider} The highlight constant
         *     provider.
         * @package
         */
        getHighlightConstants(): HighlightConstantProvider;
    }
    import { ConstantProvider } from "renderers/geras/constants";
    import { BlockSvg } from "block_svg";
    import { RenderInfo } from "renderers/geras/info";
    import { RenderInfo as BaseRenderInfo } from "renderers/common/info";
    import { Drawer } from "renderers/geras/drawer";
    import { Theme } from "theme";
    import { PathObject } from "renderers/geras/path_object";
    import { HighlightConstantProvider } from "renderers/geras/highlight_constants";
    import { Renderer as BaseRenderer } from "renderers/common/block_rendering";
}
declare module "renderers/geras/measurables/statement_input" {
    /**
     * An object containing information about the space a statement input takes up
     * during rendering
     * @param {!ConstantProvider} constants The rendering
     *   constants provider.
     * @param {!Input} input The statement input to measure and store
     *     information for.
     * @package
     * @constructor
     * @extends {BaseStatementInput}
     * @alias Blockly.geras.StatementInput
     */
    export class StatementInput {
        constructor(constants: any, input: any);
    }
}
declare module "renderers/geras/info" {
    export class RenderInfo extends BaseRenderInfo {
        /**
         * An object containing all sizing information needed to draw this block.
         *
         * This measure pass does not propagate changes to the block (although fields
         * may choose to rerender when getSize() is called).  However, calling it
         * repeatedly may be expensive.
         *
         * @param {!Renderer} renderer The renderer in use.
         * @param {!BlockSvg} block The block to measure.
         * @constructor
         * @package
         * @extends {BaseRenderInfo}
         * @alias Blockly.geras.RenderInfo
         */
        constructor(renderer: Renderer, block: BlockSvg);
        /**
         * Get the block renderer in use.
         * @return {!Renderer} The block renderer in use.
         * @package
         */
        getRenderer(): Renderer;
        /**
         * @override
         */
        override populateBottomRow_(): void;
        /**
         * @override
         */
        override addInput_(input: any, activeRow: any): void;
        /**
         * @override
         */
        override addElemSpacing_(): void;
        /**
         * @override
         */
        override getInRowSpacing_(prev: any, next: any): any;
        /**
         * @override
         */
        override getSpacerRowHeight_(prev: any, next: any): any;
        /**
         * @override
         */
        override getElemCenterline_(row: any, elem: any): any;
        /**
         * @override
         */
        override alignRowElements_(): void;
        /**
         * @override
         */
        override getDesiredRowWidth_(row: any): any;
        /**
         * @override
         */
        override finalize_(): void;
        widthWithChildren: any;
        height: any;
        startY: any;
    }
    import { Renderer } from "renderers/geras/renderer";
    import { BlockSvg } from "block_svg";
    import { RenderInfo as BaseRenderInfo } from "renderers/common/block_rendering";
}
declare module "renderers/geras/highlighter" {
    export class Highlighter {
        /**
         * An object that adds highlights to a block based on the given rendering
         * information.
         *
         * Highlighting is interesting because the highlights do not fully enclose the
         * block.  Instead, they are positioned based on a light source in the top left.
         * This means that rendering highlights requires exact information about the
         * position of each part of the block.  The resulting paths are not continuous
         * or closed paths.  The highlights for tabs and notches are loosely based on
         * tab and notch shapes, but are not exactly the same.
         *
         * @param {!RenderInfo} info An object containing all
         *     information needed to render this block.
         * @package
         * @constructor
         * @alias Blockly.geras.Highlighter
         */
        constructor(info: RenderInfo);
        info_: RenderInfo;
        steps_: string;
        inlineSteps_: string;
        RTL_: any;
        /**
         * The renderer's constant provider.
         * @type {!ConstantProvider}
         */
        constants_: ConstantProvider;
        /**
         * @type {!HighlightConstantProvider}
         */
        highlightConstants_: HighlightConstantProvider;
        /**
         * The offset between the block's main path and highlight path.
         * @type {number}
         * @private
         */
        private highlightOffset_;
        outsideCornerPaths_: any;
        insideCornerPaths_: any;
        puzzleTabPaths_: any;
        notchPaths_: any;
        startPaths_: any;
        jaggedTeethPaths_: any;
        /**
         * Get the steps for the highlight path.
         * @return {string} The steps for the highlight path.
         * @package
         */
        getPath(): string;
        drawTopCorner(row: any): void;
        drawJaggedEdge_(row: any): void;
        drawValueInput(row: any): void;
        drawStatementInput(row: any): void;
        drawRightSideRow(row: any): void;
        drawBottomRow(row: any): void;
        drawLeft(): void;
        drawInlineInput(input: any): void;
    }
    import { RenderInfo } from "renderers/geras/info";
    import { ConstantProvider } from "renderers/common/constants";
    import { HighlightConstantProvider } from "renderers/geras/highlight_constants";
}
declare module "renderers/geras/drawer" {
    export class Drawer extends BaseDrawer {
        /**
         * An object that draws a block based on the given rendering information.
         * @param {!BlockSvg} block The block to render.
         * @param {!RenderInfo} info An object containing all
         *   information needed to render this block.
         * @package
         * @constructor
         * @extends {BaseDrawer}
         * @alias Blockly.geras.Drawer
         */
        constructor(block: BlockSvg, info: RenderInfo);
        highlighter_: Highlighter;
        /**
         * @override
         */
        override draw(): void;
        /**
         * @override
         */
        override drawTop_(): void;
        /**
         * @override
         */
        override drawJaggedEdge_(row: any): void;
        /**
         * @override
         */
        override drawValueInput_(row: any): void;
        /**
         * @override
         */
        override drawStatementInput_(row: any): void;
        /**
         * @override
         */
        override drawRightSideRow_(row: any): void;
        /**
         * @override
         */
        override drawBottom_(): void;
        /**
         * Add steps for the left side of the block, which may include an output
         * connection
         * @protected
         * @override
         */
        protected override drawLeft_(): void;
        /**
         * @override
         */
        override drawInlineInput_(input: any): void;
        /**
         * @override
         */
        override positionInlineInputConnection_(input: any): void;
        /**
         * @override
         */
        override positionStatementInputConnection_(row: any): void;
        /**
         * @override
         */
        override positionExternalValueConnection_(row: any): void;
        /**
         * @override
         */
        override positionNextConnection_(): void;
    }
    import { Highlighter } from "renderers/geras/highlighter";
    import { BlockSvg } from "block_svg";
    import { RenderInfo } from "renderers/geras/info";
    import { Drawer as BaseDrawer } from "renderers/common/drawer";
}
declare module "renderers/geras/geras" {
    import { ConstantProvider } from "renderers/geras/constants";
    import { Drawer } from "renderers/geras/drawer";
    import { HighlightConstantProvider } from "renderers/geras/highlight_constants";
    import { Highlighter } from "renderers/geras/highlighter";
    import { InlineInput } from "renderers/geras/measurables/inline_input";
    import { PathObject } from "renderers/geras/path_object";
    import { RenderInfo } from "renderers/geras/info";
    import { Renderer } from "renderers/geras/renderer";
    import { StatementInput } from "renderers/geras/measurables/statement_input";
    export { ConstantProvider, Drawer, HighlightConstantProvider, Highlighter, InlineInput, PathObject, RenderInfo, Renderer, StatementInput };
}
declare module "renderers/minimalist/constants" {
    /**
     * An object that provides constants for rendering blocks in the sample.
     * @constructor
     * @package
     * @extends {BaseConstantProvider}
     * @alias Blockly.minimalist.ConstantProvider
     */
    export class ConstantProvider extends BaseConstantProvider {
    }

    import { ConstantProvider as BaseConstantProvider } from "renderers/common/block_rendering";
}
declare module "renderers/minimalist/renderer" {
    /**
     * The minimalist renderer.
     * @param {string} name The renderer name.
     * @package
     * @constructor
     * @extends {BaseRenderer}
     * @alias Blockly.minimalist.Renderer
     */
    export class Renderer extends BaseRenderer {
        constructor(name: any);
        /**
         * Create a new instance of the renderer's constant provider.
         * @return {!ConstantProvider} The constant provider.
         * @protected
         * @override
         */
        protected override makeConstants_(): ConstantProvider;
        /**
         * Create a new instance of the renderer's render info object.
         * @param {!BlockSvg} block The block to measure.
         * @return {!RenderInfo} The render info object.
         * @protected
         * @override
         */
        protected override makeRenderInfo_(block: BlockSvg): RenderInfo;
        /**
         * Create a new instance of the renderer's drawer.
         * @param {!BlockSvg} block The block to render.
         * @param {!BaseRenderInfo} info An object containing all
         *   information needed to render this block.
         * @return {!Drawer} The drawer.
         * @protected
         * @override
         */
        protected override makeDrawer_(block: BlockSvg, info: BaseRenderInfo): Drawer;
    }
    import { ConstantProvider } from "renderers/minimalist/constants";
    import { BlockSvg } from "block_svg";
    import { RenderInfo } from "renderers/minimalist/info";
    import { RenderInfo as BaseRenderInfo } from "renderers/common/info";
    import { Drawer } from "renderers/minimalist/drawer";
    import { Renderer as BaseRenderer } from "renderers/common/block_rendering";
}
declare module "renderers/minimalist/info" {
    /**
     * An object containing all sizing information needed to draw this block.
     *
     * This measure pass does not propagate changes to the block (although fields
     * may choose to rerender when getSize() is called).  However, calling it
     * repeatedly may be expensive.
     *
     * @param {!Renderer} renderer The renderer in use.
     * @param {!BlockSvg} block The block to measure.
     * @constructor
     * @package
     * @extends {BaseRenderInfo}
     * @alias Blockly.minimalist.RenderInfo
     */
    export class RenderInfo extends BaseRenderInfo {
        constructor(renderer: any, block: any);
        /**
         * Get the block renderer in use.
         * @return {!Renderer} The block renderer in use.
         * @package
         */
        getRenderer(): Renderer;
    }
    import { Renderer } from "renderers/minimalist/renderer";
    import { RenderInfo as BaseRenderInfo } from "renderers/common/block_rendering";
}
declare module "renderers/minimalist/drawer" {
    /**
     * An object that draws a block based on the given rendering information.
     * @param {!BlockSvg} block The block to render.
     * @param {!RenderInfo} info An object containing all
     *   information needed to render this block.
     * @package
     * @constructor
     * @extends {BaseDrawer}
     * @alias Blockly.minimalist.Drawer
     */
    export class Drawer extends BaseDrawer {
        constructor(block: any, info: any);
    }

    import { Drawer as BaseDrawer } from "renderers/common/drawer";
}
declare module "renderers/minimalist/minimalist" {
    import { ConstantProvider } from "renderers/minimalist/constants";
    import { Drawer } from "renderers/minimalist/drawer";
    import { RenderInfo } from "renderers/minimalist/info";
    import { Renderer } from "renderers/minimalist/renderer";
    export { ConstantProvider, Drawer, RenderInfo, Renderer };
}
declare module "renderers/thrasos/renderer" {
    /**
     * The thrasos renderer.
     * @param {string} name The renderer name.
     * @package
     * @constructor
     * @extends {BaseRenderer}
     * @alias Blockly.thrasos.Renderer
     */
    export class Renderer extends BaseRenderer {
        constructor(name: any);
        /**
         * Create a new instance of the renderer's render info object.
         * @param {!BlockSvg} block The block to measure.
         * @return {!RenderInfo} The render info object.
         * @protected
         * @override
         */
        protected override makeRenderInfo_(block: BlockSvg): RenderInfo;
    }
    import { BlockSvg } from "block_svg";
    import { RenderInfo } from "renderers/thrasos/info";
    import { Renderer as BaseRenderer } from "renderers/common/block_rendering";
}
declare module "renderers/thrasos/info" {
    export class RenderInfo extends BaseRenderInfo {
        /**
         * An object containing all sizing information needed to draw this block.
         *
         * This measure pass does not propagate changes to the block (although fields
         * may choose to rerender when getSize() is called).  However, calling it
         * repeatedly may be expensive.
         *
         * @param {!Renderer} renderer The renderer in use.
         * @param {!BlockSvg} block The block to measure.
         * @constructor
         * @package
         * @extends {BaseRenderInfo}
         * @alias Blockly.thrasos.RenderInfo
         */
        constructor(renderer: Renderer, block: BlockSvg);
        /**
         * Get the block renderer in use.
         * @return {!Renderer} The block renderer in use.
         * @package
         */
        getRenderer(): Renderer;
        /**
         * @override
         */
        override addElemSpacing_(): void;
        /**
         * @override
         */
        override getInRowSpacing_(prev: any, next: any): any;
        /**
         * @override
         */
        override getSpacerRowHeight_(prev: any, next: any): any;
        /**
         * @override
         */
        override getElemCenterline_(row: any, elem: any): any;
        /**
         * @override
         */
        override finalize_(): void;
        widthWithChildren: any;
        height: number;
        startY: any;
    }
    import { Renderer } from "renderers/thrasos/renderer";
    import { BlockSvg } from "block_svg";
    import { RenderInfo as BaseRenderInfo } from "renderers/common/block_rendering";
}
declare module "renderers/thrasos/thrasos" {
    import { RenderInfo } from "renderers/thrasos/info";
    import { Renderer } from "renderers/thrasos/renderer";
    export { RenderInfo, Renderer };
}
declare module "renderers/zelos/measurables/bottom_row" {
    /**
     * An object containing information about what elements are in the bottom row of
     * a block as well as spacing information for the top row.
     * Elements in a bottom row can consist of corners, spacers and next
     * connections.
     * @param {!ConstantProvider} constants The rendering
     *   constants provider.
     * @package
     * @constructor
     * @extends {BaseBottomRow}
     * @alias Blockly.zelos.BottomRow
     */
    export class BottomRow extends BaseBottomRow {
        constructor(constants: any);
        /**
         * @override
         */
        override endsWithElemSpacer(): boolean;
        /**
         * Render a round corner unless the block has an output connection.
         * @override
         */
        override hasLeftSquareCorner(block: any): boolean;
        /**
         * Render a round corner unless the block has an output connection.
         * @override
         */
        override hasRightSquareCorner(block: any): boolean;
    }
    import { BottomRow as BaseBottomRow } from "renderers/common/block_rendering";
}
declare module "renderers/zelos/constants" {
    /**
     * An object that provides constants for rendering blocks in Zelos mode.
     * @constructor
     * @package
     * @extends {BaseConstantProvider}
     * @alias Blockly.zelos.ConstantProvider
     */
    export class ConstantProvider extends BaseConstantProvider {
        GRID_UNIT: number;
        /**
         * @override
         */
        override SMALL_PADDING: number;
        /**
         * @override
         */
        override MEDIUM_PADDING: number;
        /**
         * @override
         */
        override MEDIUM_LARGE_PADDING: number;
        /**
         * @override
         */
        override LARGE_PADDING: number;
        /**
         * @override
         */
        override CORNER_RADIUS: number;
        /**
         * @override
         */
        override NOTCH_WIDTH: number;
        /**
         * @override
         */
        override NOTCH_HEIGHT: number;
        /**
         * @override
         */
        override NOTCH_OFFSET_LEFT: number;
        /**
         * @override
         */
        override STATEMENT_INPUT_NOTCH_OFFSET: number;
        /**
         * @override
         */
        override MIN_BLOCK_WIDTH: number;
        /**
         * @override
         */
        override MIN_BLOCK_HEIGHT: number;
        /**
         * @override
         */
        override EMPTY_STATEMENT_INPUT_HEIGHT: number;
        /**
         * @override
         */
        override TAB_OFFSET_FROM_TOP: number;
        /**
         * @override
         */
        override TOP_ROW_MIN_HEIGHT: number;
        /**
         * @override
         */
        override TOP_ROW_PRECEDES_STATEMENT_MIN_HEIGHT: number;
        /**
         * @override
         */
        override BOTTOM_ROW_MIN_HEIGHT: number;
        /**
         * @override
         */
        override BOTTOM_ROW_AFTER_STATEMENT_MIN_HEIGHT: number;
        /**
         * @override
         */
        override STATEMENT_BOTTOM_SPACER: number;
        /**
         * Minimum statement input spacer width.
         * @type {number}
         */
        STATEMENT_INPUT_SPACER_MIN_WIDTH: number;
        /**
         * @override
         */
        override STATEMENT_INPUT_PADDING_LEFT: number;
        /**
         * @override
         */
        override EMPTY_INLINE_INPUT_PADDING: number;
        /**
         * @override
         */
        override EMPTY_INLINE_INPUT_HEIGHT: number;
        /**
         * @override
         */
        override DUMMY_INPUT_MIN_HEIGHT: number;
        /**
         * @override
         */
        override DUMMY_INPUT_SHADOW_MIN_HEIGHT: number;
        /**
         * @override
         */
        override CURSOR_WS_WIDTH: number;
        /**
         * @override
         */
        override CURSOR_COLOR: string;
        /**
         * Radius of the cursor for input and output connections.
         * @type {number}
         * @package
         */
        CURSOR_RADIUS: number;
        /**
         * @override
         */
        override JAGGED_TEETH_HEIGHT: number;
        /**
         * @override
         */
        override JAGGED_TEETH_WIDTH: number;
        /**
         * @override
         */
        override START_HAT_HEIGHT: number;
        /**
         * @override
         */
        override START_HAT_WIDTH: number;
        /**
         * @enum {number}
         * @override
         */
        override SHAPES: {
            HEXAGONAL: number;
            ROUND: number;
            SQUARE: number;
            PUZZLE: number;
            NOTCH: number;
        };
        /**
         * Map of output/input shapes and the amount they should cause a block to be
         * padded. Outer key is the outer shape, inner key is the inner shape.
         * When a block with the outer shape contains an input block with the inner
         * shape on its left or right edge, the block elements are aligned such that
         * the padding specified is reached.
         * @package
         */
        SHAPE_IN_SHAPE_PADDING: {
            1: {
                0: number;
                1: number;
                2: number;
                3: number;
            };
            2: {
                0: number;
                1: number;
                2: number;
                3: number;
            };
            3: {
                0: number;
                1: number;
                2: number;
                3: number;
            };
        };
        /**
         * @override
         */
        override FULL_BLOCK_FIELDS: boolean;
        /**
         * @override
         */
        override FIELD_TEXT_FONTSIZE: number;
        /**
         * @override
         */
        override FIELD_TEXT_FONTWEIGHT: string;
        /**
         * @override
         */
        override FIELD_TEXT_FONTFAMILY: string;
        /**
         * @override
         */
        override FIELD_BORDER_RECT_RADIUS: number;
        /**
         * @override
         */
        override FIELD_BORDER_RECT_X_PADDING: number;
        /**
         * @override
         */
        override FIELD_BORDER_RECT_Y_PADDING: number;
        /**
         * @override
         */
        override FIELD_BORDER_RECT_HEIGHT: number;
        /**
         * @override
         */
        override FIELD_DROPDOWN_BORDER_RECT_HEIGHT: number;
        /**
         * @override
         */
        override FIELD_DROPDOWN_NO_BORDER_RECT_SHADOW: boolean;
        /**
         * @override
         */
        override FIELD_DROPDOWN_COLORED_DIV: boolean;
        /**
         * @override
         */
        override FIELD_DROPDOWN_SVG_ARROW: boolean;
        /**
         * @override
         */
        override FIELD_DROPDOWN_SVG_ARROW_PADDING: number;
        /**
         * @override
         */
        override FIELD_TEXTINPUT_BOX_SHADOW: boolean;
        /**
         * @override
         */
        override FIELD_COLOR_FULL_BLOCK: boolean;
        /**
         * @override
         */
        override FIELD_COLOR_DEFAULT_WIDTH: number;
        /**
         * @override
         */
        override FIELD_COLOR_DEFAULT_HEIGHT: number;
        /**
         * @override
         */
        override FIELD_CHECKBOX_X_OFFSET: number;
        /**
         * The maximum width of a dynamic connection shape.
         * @type {number}
         */
        MAX_DYNAMIC_CONNECTION_SHAPE_WIDTH: number;
        /**
         * The selected glow color.
         * @type {string}
         */
        SELECTED_GLOW_COLOR: string;
        /**
         * The size of the selected glow.
         * @type {number}
         */
        SELECTED_GLOW_SIZE: number;
        /**
         * The replacement glow color.
         * @type {string}
         */
        REPLACEMENT_GLOW_COLOR: string;
        /**
         * The size of the selected glow.
         * @type {number}
         */
        REPLACEMENT_GLOW_SIZE: number;
        /**
         * The ID of the selected glow filter, or the empty string if no filter is
         * set.
         * @type {string}
         * @package
         */
        selectedGlowFilterId: string;
        /**
         * The <filter> element to use for a selected glow, or null if not set.
         * @type {SVGElement}
         * @private
         */
        private selectedGlowFilter_;
        /**
         * The ID of the replacement glow filter, or the empty string if no filter is
         * set.
         * @type {string}
         * @package
         */
        replacementGlowFilterId: string;
        /**
         * The <filter> element to use for a replacement glow, or null if not set.
         * @type {SVGElement}
         * @private
         */
        private replacementGlowFilter_;
        /**
         * @override
         */
        override setFontConstants_(theme: any): void;
        /**
         * @override
         */
        override init(): void;
        HEXAGONAL: any;
        ROUNDED: any;
        SQUARED: any;
        /**
         * @override
         */
        override setDynamicProperties_(theme: any): void;
        /**
         * @override
         */
        override dispose(): void;
        /**
         * @override
         */
        override makeStartHat(): {
            height: number;
            width: number;
            path: string;
        };
        /**
         * Create sizing and path information about a hexagonal shape.
         * @return {!Object} An object containing sizing and path information about
         *     a hexagonal shape for connections.
         * @package
         */
        makeHexagonal(): any;
        /**
         * Create sizing and path information about a rounded shape.
         * @return {!Object} An object containing sizing and path information about
         *     a rounded shape for connections.
         * @package
         */
        makeRounded(): any;
        /**
         * Create sizing and path information about a squared shape.
         * @return {!Object} An object containing sizing and path information about
         *     a squared shape for connections.
         * @package
         */
        makeSquared(): any;
        /**
         * @override
         */
        override shapeFor(connection: any): any;
        /**
         * @override
         */
        override makeNotch(): {
            type: number;
            width: number;
            height: number;
            pathLeft: string;
            pathRight: string;
        };
        /**
         * @override
         */
        override makeInsideCorners(): {
            width: number;
            height: number;
            pathTop: string;
            pathBottom: string;
            rightWidth: number;
            rightHeight: number;
            pathTopRight: string;
            pathBottomRight: string;
        };
        /**
         * @override
         */
        override generateSecondaryColor_(color: any): any;
        /**
         * @override
         */
        override generateTertiaryColor_(color: any): any;
        /**
         * @override
         */
        override createDom(svg: any, tagName: any, selector: any): void;
        /**
         * @override
         */
        override getCSS_(selector: any): string[];
    }
    import { ConstantProvider as BaseConstantProvider } from "renderers/common/block_rendering";
}
declare module "renderers/zelos/path_object" {
    export class PathObject extends BasePathObject {
        /**
         * An object that handles creating and setting each of the SVG elements
         * used by the renderer.
         * @param {!SVGElement} root The root SVG element.
         * @param {!Theme.BlockStyle} style The style object to use for
         *     coloring.
         * @param {!ConstantProvider} constants The renderer's constants.
         * @constructor
         * @extends {BasePathObject}
         * @package
         * @alias Blockly.zelos.PathObject
         */
        constructor(root: SVGElement, style: Theme.BlockStyle, constants: ConstantProvider);
        /**
         * The renderer's constant provider.
         * @type {!ConstantProvider}
         */
        constants: ConstantProvider;
        /**
         * The selected path of the block.
         * @type {?SVGElement}
         * @private
         */
        private svgPathSelected_;
        /**
         * The outline paths on the block.
         * @type {!Object<string, !SVGElement>}
         * @private
         */
        private outlines_;
        /**
         * A set used to determine which outlines were used during a draw pass.  The
         * set is initialized with a reference to all the outlines in
         * `this.outlines_`. Every time we use an outline during the draw pass, the
         * reference is removed from this set.
         * @type {Object<string, number>}
         * @private
         */
        private remainingOutlines_;
        /**
         * The type of block's output connection shape.  This is set when a block with
         * an output connection is drawn.
         * @package
         */
        outputShapeType: any;
        /**
         * @override
         */
        override setPath(pathString: any): void;
        /**
         * @override
         */
        override applyColor(block: any): void;
        /**
         * @override
         */
        override flipRTL(): void;
        /**
         * @override
         */
        override updateSelected(enable: any): void;
        /**
         * @override
         */
        override updateReplacementFade(enable: any): void;
        /**
         * @override
         */
        override updateShapeForInputHighlight(conn: any, enable: any): void;
        /**
         * Method that's called when the drawer is about to draw the block.
         * @package
         */
        beginDrawing(): void;
        /**
         * Method that's called when the drawer is done drawing.
         * @package
         */
        endDrawing(): void;
        /**
         * Set the path generated by the renderer for an outline path on the respective
         * outline path SVG element.
         * @param {string} name The input name.
         * @param {string} pathString The path.
         * @package
         */
        setOutlinePath(name: string, pathString: string): void;
        /**
         * Create's an outline path for the specified input.
         * @param {string} name The input name.
         * @return {!SVGElement} The SVG outline path.
         * @private
         */
        private getOutlinePath_;
        /**
         * Remove an outline path that is associated with the specified input.
         * @param {string} name The input name.
         * @private
         */
        private removeOutlinePath_;
    }
    import { ConstantProvider } from "renderers/zelos/constants";
    import { Theme } from "theme";
    import { PathObject as BasePathObject } from "renderers/common/block_rendering";
}
declare module "field_image" {
    /**
     * Class for an image on a block.
     * @param {string} src The URL of the image.
     * @param {!(string|number)} width Width of the image.
     * @param {!(string|number)} height Height of the image.
     * @param {string=} opt_alt Optional alt text for when block is collapsed.
     * @param {function(!FieldImage)=} opt_onClick Optional function to be
     *     called when the image is clicked. If opt_onClick is defined, opt_alt must
     *     also be defined.
     * @param {boolean=} opt_flipRtl Whether to flip the icon in RTL.
     * @param {Object=} opt_config A map of options used to configure the field.
     *    See the [field creation documentation]{@link
     * https://developers.google.com/blockly/guides/create-custom-blocks/fields/built-in-fields/image#creation}
     *    for a list of properties this parameter supports.
     * @extends {Field}
     * @constructor
     * @alias Blockly.FieldImage
     */
    export class FieldImage extends Field {
        /**
         * Construct a FieldImage from a JSON arg object,
         * dereferencing any string table references.
         * @param {!Object} options A JSON object with options (src, width, height,
         *    alt, and flipRtl).
         * @return {!FieldImage} The new field instance.
         * @package
         * @nocollapse
         */
        static fromJson(options: any): FieldImage;
        constructor(src: any, width: any, height: any, opt_alt: any, opt_onClick: any, opt_flipRtl: any, opt_config: any);
        /**
         * Whether to flip this image in RTL.
         * @type {boolean}
         * @private
         */
        private flipRtl_;
        /**
         * Alt text of this image.
         * @type {string}
         * @private
         */
        private altText_;
        /**
         * The size of the area rendered by the field.
         * @type {Size}
         * @protected
         * @override
         */
        protected override size_: Size;
        /**
         * Store the image height, since it is different from the field height.
         * @type {number}
         * @private
         */
        private imageHeight_;
        /**
         * The function to be called when this field is clicked.
         * @type {?function(!FieldImage)}
         * @private
         */
        private clickHandler_;
        /**
         * The rendered field's image element.
         * @type {SVGImageElement}
         * @private
         */
        private imageElement_;
        /**
         * Configure the field based on the given map of options.
         * @param {!Object} config A map of options to configure the field based on.
         * @protected
         * @override
         */
        protected override configure_(config: any): void;
        /**
         * Create the block UI for this image.
         * @package
         */
        initView(): void;
        /**
         * @override
         */
        override updateSize_(): void;
        /**
         * Ensure that the input value (the source URL) is a string.
         * @param {*=} opt_newValue The input value.
         * @return {?string} A string, or null if invalid.
         * @protected
         */
        protected doClassValidation_(opt_newValue?: any | undefined): string | null;
        /**
         * Update the value of this image field, and update the displayed image.
         * @param {*} newValue The value to be saved. The default validator guarantees
         * that this is a string.
         * @protected
         */
        protected doValueUpdate_(newValue: any): void;
        value_: any;
        /**
         * Get whether to flip this image in RTL
         * @return {boolean} True if we should flip in RTL.
         * @override
         */
        override getFlipRtl(): boolean;
        /**
         * Set the alt text of this image.
         * @param {?string} alt New alt text.
         * @public
         */
        public setAlt(alt: string | null): void;
        /**
         * If field click is called, and click handler defined,
         * call the handler.
         * @protected
         */
        protected showEditor_(): void;
        /**
         * Set the function that is called when this image  is clicked.
         * @param {?function(!FieldImage)} func The function that is called
         *    when the image is clicked, or null to remove.
         */
        setOnClickHandler(func: (arg0: FieldImage) => any): void;
        /**
         * Use the `getText_` developer hook to override the field's text
         * representation.
         * Return the image alt text instead.
         * @return {?string} The image alt text.
         * @protected
         * @override
         */
        protected getText_(): string | null;
        /**
         * The default value for this field.
         * @type {*}
         * @protected
         */
        protected DEFAULT_VALUE: any;
        /**
         * Editable fields usually show some sort of UI indicating they are
         * editable. This field should not.
         * @type {boolean}
         */
        EDITABLE: boolean;
        /**
         * Used to tell if the field needs to be rendered the next time the block is
         * rendered. Image fields are statically sized, and only need to be
         * rendered at initialization.
         * @type {boolean}
         * @protected
         */
        public isDirty_: boolean;
    }
    export namespace FieldImage {
        const Y_PADDING: number;
    }
    import { Size } from "utils/size";
    import { Field } from "field";
}
declare module "field_textinput" {
    export class FieldTextInput extends Field {
        /**
         * Construct a FieldTextInput from a JSON arg object,
         * dereferencing any string table references.
         * @param {!Object} options A JSON object with options (text, and spellcheck).
         * @return {!FieldTextInput} The new field instance.
         * @package
         * @nocollapse
         */
        static fromJson(options: any): FieldTextInput;
        /**
         * Class for an editable text field.
         * @param {string=} opt_value The initial value of the field. Should cast to a
         *    string. Defaults to an empty string if null or undefined.
         * @param {?Function=} opt_validator A function that is called to validate
         *    changes to the field's value. Takes in a string & returns a validated
         *    string, or null to abort the change.
         * @param {Object=} opt_config A map of options used to configure the field.
         *    See the [field creation documentation]{@link
         * https://developers.google.com/blockly/guides/create-custom-blocks/fields/built-in-fields/text-input#creation}
         *    for a list of properties this parameter supports.
         * @extends {Field}
         * @constructor
         * @alias Blockly.FieldTextInput
         */
        constructor(opt_value?: string | undefined, opt_validator?: (Function | null) | undefined, opt_config?: any | undefined);
        /**
         * Allow browser to spellcheck this field.
         * @type {boolean}
         * @protected
         */
        protected spellcheck_: boolean;
        /**
         * The HTML input element.
         * @type {HTMLElement}
         */
        htmlInput_: HTMLElement;
        /**
         * Key down event data.
         * @type {?browserEvents.Data}
         * @private
         */
        private onKeyDownWrapper_;
        /**
         * Key input event data.
         * @type {?browserEvents.Data}
         * @private
         */
        private onKeyInputWrapper_;
        /**
         * Whether the field should consider the whole parent block to be its click
         * target.
         * @type {?boolean}
         */
        fullBlockClickTarget_: boolean | null;
        /**
         * The workspace that this field belongs to.
         * @type {?WorkspaceSvg}
         * @protected
         */
        protected workspace_: WorkspaceSvg | null;
        /**
         * @override
         */
        override configure_(config: any): void;
        /**
         * @override
         */
        override initView(): void;
        clickTarget_: any;
        /**
         * Ensure that the input value casts to a valid string.
         * @param {*=} opt_newValue The input value.
         * @return {*} A valid string, or null if invalid.
         * @protected
         */
        protected doClassValidation_(opt_newValue?: any | undefined): any;
        /**
         * Called by setValue if the text input is not valid. If the field is
         * currently being edited it reverts value of the field to the previous
         * value while allowing the display text to be handled by the htmlInput_.
         * @param {*} _invalidValue The input value that was determined to be invalid.
         *    This is not used by the text input because its display value is stored on
         *    the htmlInput_.
         * @protected
         */
        protected doValueInvalid_(_invalidValue: any): void;
        isTextValid_: boolean;
        value_: any;
        /**
         * Called by setValue if the text input is valid. Updates the value of the
         * field, and updates the text of the field if it is not currently being
         * edited (i.e. handled by the htmlInput_).
         * @param {*} newValue The value to be saved. The default validator guarantees
         * that this is a string.
         * @protected
         */
        protected doValueUpdate_(newValue: any): void;
        isDirty_: boolean;
        /**
         * Updates text field to match the color/style of the block.
         * @package
         */
        applyColor(): void;
        /**
         * Updates the color of the htmlInput given the current validity of the
         * field's value.
         * @protected
         */
        protected render_(): void;
        /**
         * Set whether this field is spellchecked by the browser.
         * @param {boolean} check True if checked.
         */
        setSpellcheck(check: boolean): void;
        /**
         * Show the inline free-text editor on top of the text.
         * @param {Event=} _opt_e Optional mouse event that triggered the field to open,
         *     or undefined if triggered programmatically.
         * @param {boolean=} opt_quietInput True if editor should be created without
         *     focus.  Defaults to false.
         * @protected
         */
        protected showEditor_(_opt_e?: Event | undefined, opt_quietInput?: boolean | undefined): void;
        /**
         * Create and show a text input editor that is a prompt (usually a popup).
         * Mobile browsers have issues with in-line textareas (focus and keyboards).
         * @private
         */
        private showPromptEditor_;
        /**
         * Create and show a text input editor that sits directly over the text input.
         * @param {boolean} quietInput True if editor should be created without
         *     focus.
         * @private
         */
        private showInlineEditor_;
        isBeingEdited_: boolean;
        /**
         * Create the text input editor widget.
         * @return {!HTMLElement} The newly created text input editor.
         * @protected
         */
        protected widgetCreate_(): HTMLElement;
        /**
         * Closes the editor, saves the results, and disposes of any events or
         * DOM-references belonging to the editor.
         * @protected
         */
        protected widgetDispose_(): void;
        /**
         * Bind handlers for user input on the text input field's editor.
         * @param {!HTMLElement} htmlInput The htmlInput to which event
         *    handlers will be bound.
         * @protected
         */
        protected bindInputEvents_(htmlInput: HTMLElement): void;
        /**
         * Unbind handlers for user input and workspace size changes.
         * @protected
         */
        protected unbindInputEvents_(): void;
        /**
         * Handle key down to the editor.
         * @param {!Event} e Keyboard event.
         * @protected
         */
        protected onHtmlInputKeyDown_(e: Event): void;
        /**
         * Handle a change to the editor.
         * @param {!Event} _e Keyboard event.
         * @private
         */
        private onHtmlInputChange_;
        /**
         * Set the HTML input value and the field's internal value. The difference
         * between this and ``setValue`` is that this also updates the HTML input
         * value whilst editing.
         * @param {*} newValue New value.
         * @protected
         */
        protected setEditorValue_(newValue: any): void;
        /**
         * Resize the editor to fit the text.
         * @protected
         */
        protected resizeEditor_(): void;
        /**
         * Returns whether or not the field is tab navigable.
         * @return {boolean} True if the field is tab navigable.
         * @override
         */
        override isTabNavigable(): boolean;
        /**
         * Use the `getText_` developer hook to override the field's text
         * representation. When we're currently editing, return the current HTML value
         * instead. Otherwise, return null which tells the field to use the default
         * behaviour (which is a string cast of the field's value).
         * @return {?string} The HTML value if we're editing, otherwise null.
         * @protected
         * @override
         */
        protected getText_(): string | null;
        /**
         * Transform the provided value into a text to show in the HTML input.
         * Override this method if the field's HTML input representation is different
         * than the field's value. This should be coupled with an override of
         * `getValueFromEditorText_`.
         * @param {*} value The value stored in this field.
         * @return {string} The text to show on the HTML input.
         * @protected
         */
        protected getEditorText_(value: any): string;
        /**
         * Transform the text received from the HTML input into a value to store
         * in this field.
         * Override this method if the field's HTML input representation is different
         * than the field's value. This should be coupled with an override of
         * `getEditorText_`.
         * @param {string} text Text received from the HTML input.
         * @return {*} The value to store.
         * @protected
         */
        protected getValueFromEditorText_(text: string): any;
        /**
         * The default value for this field.
         * @type {*}
         * @protected
         */
        protected DEFAULT_VALUE: any;
        /**
         * Serializable fields are saved by the XML renderer, non-serializable fields
         * are not. Editable fields should also be serializable.
         * @type {boolean}
         */
        SERIALIZABLE: boolean;
        /**
         * Mouse cursor style when over the hotspot that initiates the editor.
         */
        CURSOR: string;
    }
    export namespace FieldTextInput {
        const BORDERRADIUS: number;
    }
    import { WorkspaceSvg } from "workspace_svg";
    import { Field } from "field";
}
declare module "renderers/zelos/marker_svg" {
    export class MarkerSvg extends BaseMarkerSvg {
        /**
         * Class to draw a marker.
         * @param {!WorkspaceSvg} workspace The workspace the marker belongs to.
         * @param {!ConstantProvider} constants The constants for
         *     the renderer.
         * @param {!Marker} marker The marker to draw.
         * @constructor
         * @extends {BaseMarkerSvg}
         * @alias Blockly.zelos.MarkerSvg
         */
        constructor(workspace: WorkspaceSvg, constants: ConstantProvider, marker: Marker);
        /**
         * Position and display the marker for an input or an output connection.
         * @param {!ASTNode} curNode The node to draw the marker for.
         * @private
         */
        private showWithInputOutput_;
        /**
         * @override
         */
        override showWithOutput_(curNode: any): void;
        /**
         * @override
         */
        override showWithInput_(curNode: any): void;
        /**
         * Draw a rectangle around the block.
         * @param {!ASTNode} curNode The current node of the marker.
         */
        showWithBlock_(curNode: ASTNode): void;
        /**
         * Position the circle we use for input and output connections.
         * @param {number} x The x position of the circle.
         * @param {number} y The y position of the circle.
         * @private
         */
        private positionCircle_;
        currentMarkerSvg: SVGCircleElement;
        /**
         * @override
         */
        override hide(): void;
        /**
         * @override
         */
        override createDomInternal_(): any;
        markerCircle_: SVGCircleElement;
        /**
         * @override
         */
        override applyColor_(curNode: any): void;
    }
    import { ASTNode } from "keyboard_nav/ast_node";
    import { WorkspaceSvg } from "workspace_svg";
    import { ConstantProvider } from "renderers/common/constants";
    import { Marker } from "keyboard_nav/marker";
    import { MarkerSvg as BaseMarkerSvg } from "renderers/common/marker_svg";
}
declare module "renderers/zelos/renderer" {
    /**
     * The zelos renderer.
     * @param {string} name The renderer name.
     * @package
     * @constructor
     * @extends {BaseRenderer}
     * @alias Blockly.zelos.Renderer
     */
    export class Renderer extends BaseRenderer {
        constructor(name: any);
        /**
         * Create a new instance of the renderer's constant provider.
         * @return {!ConstantProvider} The constant provider.
         * @protected
         * @override
         */
        protected override makeConstants_(): ConstantProvider;
        /**
         * Create a new instance of the renderer's render info object.
         * @param {!BlockSvg} block The block to measure.
         * @return {!RenderInfo} The render info object.
         * @protected
         * @override
         */
        protected override makeRenderInfo_(block: BlockSvg): RenderInfo;
        /**
         * Create a new instance of the renderer's drawer.
         * @param {!BlockSvg} block The block to render.
         * @param {!BaseRenderInfo} info An object containing all
         *   information needed to render this block.
         * @return {!Drawer} The drawer.
         * @protected
         * @override
         */
        protected override makeDrawer_(block: BlockSvg, info: BaseRenderInfo): Drawer;
        /**
         * Create a new instance of the renderer's cursor drawer.
         * @param {!WorkspaceSvg} workspace The workspace the cursor belongs to.
         * @param {!Marker} marker The marker.
         * @return {!MarkerSvg} The object in charge of drawing
         *     the marker.
         * @package
         * @override
         */
        override makeMarkerDrawer(workspace: WorkspaceSvg, marker: Marker): MarkerSvg;
        /**
         * Create a new instance of a renderer path object.
         * @param {!SVGElement} root The root SVG element.
         * @param {!Theme.BlockStyle} style The style object to use for
         *     coloring.
         * @return {!PathObject} The renderer path object.
         * @package
         * @override
         */
        override makePathObject(root: SVGElement, style: Theme.BlockStyle): PathObject;
        /**
         * @override
         */
        override shouldHighlightConnection(conn: any): boolean;
        /**
         * @override
         */
        override getConnectionPreviewMethod(closest: any, local: any, topBlock: any): any;
    }
    import { ConstantProvider } from "renderers/zelos/constants";
    import { BlockSvg } from "block_svg";
    import { RenderInfo } from "renderers/zelos/info";
    import { RenderInfo as BaseRenderInfo } from "renderers/common/info";
    import { Drawer } from "renderers/zelos/drawer";
    import { WorkspaceSvg } from "workspace_svg";
    import { Marker } from "keyboard_nav/marker";
    import { MarkerSvg } from "renderers/zelos/marker_svg";
    import { Theme } from "theme";
    import { PathObject } from "renderers/zelos/path_object";
    import { Renderer as BaseRenderer } from "renderers/common/block_rendering";
}
declare module "renderers/zelos/measurables/row_elements" {
    /**
     * An object containing information about the space a right connection shape
     * takes up during rendering.
     * @param {!ConstantProvider} constants The rendering
     *   constants provider.
     * @package
     * @constructor
     * @extends {Measurable}
     * @alias Blockly.zelos.RightConnectionShape
     */
    export class RightConnectionShape extends Measurable{
        constructor(constants: any);
        height: number;
        width: number;
    }

    import { Measurable } from "renderers/common/block_rendering";
}
declare module "renderers/zelos/measurables/inputs" {
    /**
     * An object containing information about the space a statement input takes up
     * during rendering
     * @param {!ConstantProvider} constants The rendering constants provider.
     * @param {!Input} input The statement input to measure and store information
     *    for.
     * @package
     * @constructor
     * @extends {BaseStatementInput}
     * @alias Blockly.zelos.StatementInput
     */
    export class StatementInput {
        constructor(constants: any, input: any);
        height: any;
        connectedBottomNextConnection: boolean;
    }
}
declare module "renderers/zelos/measurables/top_row" {
    /**
     * An object containing information about what elements are in the top row of a
     * block as well as sizing information for the top row.
     * Elements in a top row can consist of corners, hats, spacers, and previous
     * connections.
     * After this constructor is called, the row will contain all non-spacer
     * elements it needs.
     * @param {!ConstantProvider} constants The rendering
     *   constants provider.
     * @package
     * @constructor
     * @extends {BaseTopRow}
     * @alias Blockly.zelos.TopRow
     */
    export class TopRow extends BaseTopRow {
        constructor(constants: any);
        /**
         * @override
         */
        override endsWithElemSpacer(): boolean;
        /**
         * Render a round corner unless the block has an output connection.
         * @override
         */
        override hasLeftSquareCorner(block: any): boolean;
        /**
         * Render a round corner unless the block has an output connection.
         * @override
         */
        override hasRightSquareCorner(block: any): boolean;
    }
    import { TopRow as BaseTopRow } from "renderers/common/block_rendering";
}
declare module "renderers/zelos/info" {
    export class RenderInfo extends BaseRenderInfo {
        /**
         * An object containing all sizing information needed to draw this block.
         *
         * This measure pass does not propagate changes to the block (although fields
         * may choose to rerender when getSize() is called).  However, calling it
         * repeatedly may be expensive.
         *
         * @param {!Renderer} renderer The renderer in use.
         * @param {!BlockSvg} block The block to measure.
         * @constructor
         * @package
         * @extends {BaseRenderInfo}
         * @alias Blockly.zelos.RenderInfo
         */
        constructor(renderer: Renderer, block: BlockSvg);
        /**
         * An object with rendering information about the top row of the block.
         * @type {!TopRow}
         * @override
         */
        override topRow: TopRow;
        /**
         * An object with rendering information about the bottom row of the block.
         * @type {!BottomRow}
         * @override
         */
        override bottomRow: BottomRow;
        /**
         * @override
         */
        override isInline: boolean;
        /**
         * Whether the block should be rendered as a multi-line block, either because
         * it's not inline or because it has been collapsed.
         * @type {boolean}
         */
        isMultiRow: boolean;
        /**
         * Whether or not the block has a statement input in one of its rows.
         * @type {boolean}
         */
        hasStatementInput: boolean;
        /**
         * An object with rendering information about the right connection shape.
         * @type {RightConnectionShape}
         */
        rightSide: RightConnectionShape;
        /**
         * Get the block renderer in use.
         * @return {!Renderer} The block renderer in use.
         * @package
         */
        getRenderer(): Renderer;
        /**
         * @override
         */
        override measure(): void;
        /**
         * @override
         */
        override shouldStartNewRow_(input: any, lastInput: any): boolean;
        /**
         * @override
         */
        override getDesiredRowWidth_(row: any): any;
        /**
         * @override
         */
        override getInRowSpacing_(prev: any, next: any): any;
        /**
         * @override
         */
        override getSpacerRowHeight_(prev: any, next: any): any;
        /**
         * @override
         */
        override getSpacerRowWidth_(prev: any, next: any): number;
        /**
         * @override
         */
        override getElemCenterline_(row: any, elem: any): any;
        /**
         * @override
         */
        override addInput_(input: any, activeRow: any): void;
        /**
         * @override
         */
        override addAlignmentPadding_(row: any, missingSpace: any): void;
        /**
         * Adjust the x position of fields to bump all non-label fields in the first row
         * past the notch position.  This must be called before ``computeBounds`` is
         * called.
         * @protected
         */
        protected adjustXPosition_(): void;
        /**
         * Finalize the output connection info.  In particular, set the height of the
         * output connection to match that of the block.  For the right side, add a
         * right connection shape element and have it match the dimensions of the
         * output connection.
         * @protected
         */
        protected finalizeOutputConnection_(): void;
        height: number;
        startX: any;
        /**
         * Finalize horizontal alignment of elements on the block.  In particular,
         * reduce the implicit spacing created by the left and right output connection
         * shapes by adding setting negative spacing onto the leftmost and rightmost
         * spacers.
         * @protected
         */
        protected finalizeHorizontalAlignment_(): void;
        /**
         * Calculate the spacing to reduce the left and right edges by based on the
         * outer and inner connection shape.
         * @param {Measurable} elem The first or last element on
         *     a block.
         * @return {number} The amount of spacing to reduce the first or last spacer.
         * @protected
         */
        protected getNegativeSpacing_(elem: Measurable): number;
        /**
         * Finalize vertical alignment of rows on a block.  In particular, reduce the
         * implicit spacing when a non-shadow block is connected to any of an input
         * row's inline inputs.
         * @protected
         */
        protected finalizeVerticalAlignment_(): void;
        /**
         * @override
         */
        override finalize_(): void;
    }
    import { TopRow } from "renderers/zelos/measurables/top_row";
    import { BottomRow } from "renderers/zelos/measurables/bottom_row";
    import { RightConnectionShape } from "renderers/zelos/measurables/row_elements";
    import { Renderer } from "renderers/zelos/renderer";
    import { Measurable } from "renderers/measurables/base";
    import { BlockSvg } from "block_svg";
    import { RenderInfo as BaseRenderInfo } from "renderers/common/block_rendering";
}
declare module "renderers/zelos/drawer" {
    export class Drawer extends BaseDrawer {
        /**
         * An object that draws a block based on the given rendering information.
         * @param {!BlockSvg} block The block to render.
         * @param {!RenderInfo} info An object containing all
         *   information needed to render this block.
         * @package
         * @constructor
         * @extends {BaseDrawer}
         * @alias Blockly.zelos.Drawer
         */
        constructor(block: BlockSvg, info: RenderInfo);
        /**
         * @override
         */
        override draw(): void;
        /**
         * @override
         */
        override drawOutline_(): void;
        /**
         * @override
         */
        override drawLeft_(): void;
        /**
         * Add steps for the right side of a row that does not have value or
         * statement input connections.
         * @param {!Row} row The row to draw the
         *     side of.
         * @protected
         */
        protected drawRightSideRow_(row: Row): void;
        /**
         * Add steps to draw the right side of an output with a dynamic connection.
         * @protected
         */
        protected drawRightDynamicConnection_(): void;
        /**
         * Add steps to draw the left side of an output with a dynamic connection.
         * @protected
         */
        protected drawLeftDynamicConnection_(): void;
        /**
         * Add steps to draw a flat top row.
         * @protected
         */
        protected drawFlatTop_(): void;
        /**
         * Add steps to draw a flat bottom row.
         * @protected
         */
        protected drawFlatBottom_(): void;
        /**
         * @override
         */
        override drawInlineInput_(input: any): void;
        /**
         * @override
         */
        override drawStatementInput_(row: any): void;
    }
    import { Row } from "renderers/measurables/row";
    import { BlockSvg } from "block_svg";
    import { RenderInfo } from "renderers/zelos/info";
    import { Drawer as BaseDrawer } from "renderers/common/drawer";
}
declare module "renderers/zelos/zelos" {
    import { BottomRow } from "renderers/zelos/measurables/bottom_row";
    import { ConstantProvider } from "renderers/zelos/constants";
    import { Drawer } from "renderers/zelos/drawer";
    import { MarkerSvg } from "renderers/zelos/marker_svg";
    import { PathObject } from "renderers/zelos/path_object";
    import { RenderInfo } from "renderers/zelos/info";
    import { Renderer } from "renderers/zelos/renderer";
    import { RightConnectionShape } from "renderers/zelos/measurables/row_elements";
    import { StatementInput } from "renderers/zelos/measurables/inputs";
    import { TopRow } from "renderers/zelos/measurables/top_row";
    export { BottomRow, ConstantProvider, Drawer, MarkerSvg, PathObject, RenderInfo, Renderer, RightConnectionShape, StatementInput, TopRow };
}
declare module "toolbox/collapsible_category" {
    export class CollapsibleToolboxCategory extends ToolboxCategory {
        /**
         * Class for a category in a toolbox that can be collapsed.
         * @param {!toolbox.CategoryInfo} categoryDef The information needed
         *     to create a category in the toolbox.
         * @param {!IToolbox} toolbox The parent toolbox for the category.
         * @param {ICollapsibleToolboxItem=} opt_parent The parent category or null if
         *     the category does not have a parent.
         * @constructor
         * @extends {ToolboxCategory}
         * @implements {ICollapsibleToolboxItem}
         * @alias Blockly.CollapsibleToolboxCategory
         */
        constructor(categoryDef: toolbox.CategoryInfo, toolbox: IToolbox, opt_parent?: ICollapsibleToolboxItem | undefined);
        /**
         * Container for any child categories.
         * @type {?Element}
         * @protected
         */
        protected subcategoriesDiv_: Element | null;
        /**
         * Whether or not the category should display its subcategories.
         * @type {boolean}
         * @protected
         */
        protected expanded_: boolean;
        /**
         * The child toolbox items for this category.
         * @type {!Array<!IToolboxItem>}
         * @protected
         */
        protected toolboxItems_: Array<IToolboxItem>;
        /**
         * @override
         */
        override makeDefaultCssConfig_(): any;
        /**
         * @override
         */
        override parseContents_(categoryDef: any): void;
        flyoutItems_: any;
        /**
         * Creates a toolbox item and adds it to the list of toolbox items.
         * @param {!toolbox.ToolboxItemInfo} itemDef The information needed
         *     to create a toolbox item.
         * @private
         */
        private createToolboxItem_;
        /**
         * @override
         */
        override init(): void;
        /**
         * @override
         */
        override createDom_(): any;
        /**
         * @override
         */
        override createIconDom_(): HTMLSpanElement;
        /**
         * Create the DOM for all subcategories.
         * @param {!Array<!IToolboxItem>} subcategories The subcategories.
         * @return {!Element} The div holding all the subcategories.
         * @protected
         */
        protected createSubCategoriesDom_(subcategories: Array<IToolboxItem>): Element;
        /**
         * Opens or closes the current category.
         * @param {boolean} isExpanded True to expand the category, false to close.
         * @public
         */
        public setExpanded(isExpanded: boolean): void;
        /**
         * @override
         */
        override setVisible_(isVisible: any): void;
        isHidden_: boolean;
        /**
         * Whether the category is expanded to show its child subcategories.
         * @return {boolean} True if the toolbox item shows its children, false if it
         *     is collapsed.
         * @public
         */
        public isExpanded(): boolean;
        /**
         * @override
         */
        override isCollapsible(): boolean;
        /**
         * @override
         */
        override onClick(_e: any): void;
        /**
         * Toggles whether or not the category is expanded.
         * @public
         */
        public toggleExpanded(): void;
        /**
         * @override
         */
        override getDiv(): any;
        /**
         * Gets any children toolbox items. (ex. Gets the subcategories)
         * @return {!Array<!IToolboxItem>} The child toolbox items.
         */
        getChildToolboxItems(): Array<IToolboxItem>;
    }
    export namespace CollapsibleToolboxCategory {
        const registrationName: string;
        /**
         * All the CSS class names that are used to create a collapsible
         * category. This is all the properties from the regular category plus contents.
         */
        type CssConfig = {
            container: string | null;
            row: string | null;
            rowcontentcontainer: string | null;
            icon: string | null;
            label: string | null;
            selected: string | null;
            openicon: string | null;
            closedicon: string | null;
            contents: string | null;
        };
    }
    import { IToolboxItem } from "interfaces/i_toolbox_item";
    import * as toolbox from "utils/toolbox";
    import { IToolbox } from "interfaces/i_toolbox";
    import { ICollapsibleToolboxItem } from "interfaces/i_collapsible_toolbox_item";
    import { ToolboxCategory } from "toolbox/category";
}
declare module "field_angle" {
    export class FieldAngle extends FieldTextInput {
        /**
         * Construct a FieldAngle from a JSON arg object.
         * @param {!Object} options A JSON object with options (angle).
         * @return {!FieldAngle} The new field instance.
         * @package
         * @nocollapse
         */
        static fromJson(options: any): FieldAngle;
        /**
         * Class for an editable angle field.
         * @param {string|number=} opt_value The initial value of the field. Should cast
         *    to a number. Defaults to 0.
         * @param {Function=} opt_validator A function that is called to validate
         *    changes to the field's value. Takes in a number & returns a
         *    validated number, or null to abort the change.
         * @param {Object=} opt_config A map of options used to configure the field.
         *    See the [field creation documentation]{@link
         * https://developers.google.com/blockly/guides/create-custom-blocks/fields/built-in-fields/angle#creation}
         *    for a list of properties this parameter supports.
         * @extends {FieldTextInput}
         * @constructor
         * @alias Blockly.FieldAngle
         */
        constructor(opt_value?: (string | number) | undefined, opt_validator?: Function | undefined, opt_config?: any | undefined);
        /**
         * Should the angle increase as the angle picker is moved clockwise (true)
         * or counterclockwise (false)
         * @see FieldAngle.CLOCKWISE
         * @type {boolean}
         * @private
         */
        private clockwise_;
        /**
         * The offset of zero degrees (and all other angles).
         * @see FieldAngle.OFFSET
         * @type {number}
         * @private
         */
        private offset_;
        /**
         * The maximum angle to allow before wrapping.
         * @see FieldAngle.WRAP
         * @type {number}
         * @private
         */
        private wrap_;
        /**
         * The amount to round angles to when using a mouse or keyboard nav input.
         * @see FieldAngle.ROUND
         * @type {number}
         * @private
         */
        private round_;
        /**
         * The angle picker's SVG element.
         * @type {?SVGElement}
         * @private
         */
        private editor_;
        /**
         * The angle picker's gauge path depending on the value.
         * @type {?SVGElement}
         */
        gauge_: SVGElement | null;
        /**
         * The angle picker's line drawn representing the value's angle.
         * @type {?SVGElement}
         */
        line_: SVGElement | null;
        /**
         * Wrapper click event data.
         * @type {?browserEvents.Data}
         * @private
         */
        private clickWrapper_;
        /**
         * Surface click event data.
         * @type {?browserEvents.Data}
         * @private
         */
        private clickSurfaceWrapper_;
        /**
         * Surface mouse move event data.
         * @type {?browserEvents.Data}
         * @private
         */
        private moveSurfaceWrapper_;
        /**
         * Configure the field based on the given map of options.
         * @param {!Object} config A map of options to configure the field based on.
         * @protected
         * @override
         */
        override configure_(config: any): void;
        /**
         * Create the block UI for this field.
         * @package
         */
        initView(): void;
        symbol_: SVGTSpanElement;
        /**
         * Updates the graph when the field rerenders.
         * @protected
         * @override
         */
        protected override render_(): void;
        /**
         * Create and show the angle field's editor.
         * @param {Event=} opt_e Optional mouse event that triggered the field to open,
         *     or undefined if triggered programmatically.
         * @protected
         */
        protected showEditor_(opt_e?: Event | undefined): void;
        /**
         * Create the angle dropdown editor.
         * @private
         */
        private dropdownCreate_;
        /**
         * Disposes of events and DOM-references belonging to the angle editor.
         * @private
         */
        private dropdownDispose_;
        /**
         * Hide the editor.
         * @private
         */
        private hide_;
        /**
         * Set the angle to match the mouse's position.
         * @param {!Event} e Mouse move event.
         * @protected
         */
        protected onMouseMove_(e: Event): void;
        /**
         * Handles and displays values that are input via mouse or arrow key input.
         * These values need to be rounded and wrapped before being displayed so
         * that the text input's value is appropriate.
         * @param {number} angle New angle.
         * @private
         */
        private displayMouseOrKeyboardValue_;
        /**
         * Redraw the graph with the current angle.
         * @private
         */
        private updateGraph_;
        /**
         * Handle key down to the editor.
         * @param {!Event} e Keyboard event.
         * @protected
         * @override
         */
        protected override onHtmlInputKeyDown_(e: Event): void;
        /**
         * Ensure that the input value is a valid angle.
         * @param {*=} opt_newValue The input value.
         * @return {?number} A valid angle, or null if invalid.
         * @protected
         * @override
         */
        protected override doClassValidation_(opt_newValue?: any | undefined): number | null;
        /**
         * Wraps the value so that it is in the range (-360 + wrap, wrap).
         * @param {number} value The value to wrap.
         * @return {number} The wrapped value.
         * @private
         */
        private wrapValue_;
        /**
         * The default value for this field.
         * @type {*}
         * @protected
         */
        protected DEFAULT_VALUE: any;
        /**
         * Serializable fields are saved by the XML renderer, non-serializable fields
         * are not. Editable fields should also be serializable.
         * @type {boolean}
         */
        SERIALIZABLE: boolean;
    }
    export namespace FieldAngle {
        const ROUND: number;
        const HALF: number;
        const CLOCKWISE: boolean;
        const OFFSET: number;
        const WRAP: number;
        const RADIUS: number;
    }

    import { FieldTextInput } from "field_textinput";
}
declare module "field_checkbox" {
    /**
     * Class for a checkbox field.
     * @param {string|boolean=} opt_value The initial value of the field. Should
     *    either be 'TRUE', 'FALSE' or a boolean. Defaults to 'FALSE'.
     * @param {Function=} opt_validator  A function that is called to validate
     *    changes to the field's value. Takes in a value ('TRUE' or 'FALSE') &
     *    returns a validated value ('TRUE' or 'FALSE'), or null to abort the
     *    change.
     * @param {Object=} opt_config A map of options used to configure the field.
     *    See the [field creation documentation]{@link
     *    https://developers.google.com/blockly/guides/create-custom-blocks/fields/built-in-fields/checkbox#creation}
     *    for a list of properties this parameter supports.
     * @extends {Field}
     * @constructor
     * @alias Blockly.FieldCheckbox
     */
    export class FieldCheckbox extends Field {
        /**
         * Construct a FieldCheckbox from a JSON arg object.
         * @param {!Object} options A JSON object with options (checked).
         * @return {!FieldCheckbox} The new field instance.
         * @package
         * @nocollapse
         */
        static fromJson(options: any): FieldCheckbox;
        constructor(opt_value: any, opt_validator: any, opt_config: any);
        /**
         * Character for the check mark. Used to apply a different check mark
         * character to individual fields.
         * @type {?string}
         * @private
         */
        private checkChar_;
        /**
         * Configure the field based on the given map of options.
         * @param {!Object} config A map of options to configure the field based on.
         * @protected
         * @override
         */
        protected override configure_(config: any): void;
        /**
         * Saves this field's value.
         * @return {*} The boolean value held by this field.
         * @override
         * @package
         */
        override saveState(): any;
        /**
         * Create the block UI for this checkbox.
         * @package
         */
        initView(): void;
        /**
         * @override
         */
        override render_(): void;
        /**
         * @override
         */
        override getDisplayText_(): string;
        /**
         * Set the character used for the check mark.
         * @param {?string} character The character to use for the check mark, or
         *    null to use the default.
         */
        setCheckCharacter(character: string | null): void;
        /**
         * Toggle the state of the checkbox on click.
         * @protected
         */
        protected showEditor_(): void;
        /**
         * Ensure that the input value is valid ('TRUE' or 'FALSE').
         * @param {*=} opt_newValue The input value.
         * @return {?string} A valid value ('TRUE' or 'FALSE), or null if invalid.
         * @protected
         */
        protected doClassValidation_(opt_newValue?: any | undefined): string | null;
        /**
         * Update the value of the field, and update the checkElement.
         * @param {*} newValue The value to be saved. The default validator guarantees
         * that this is a either 'TRUE' or 'FALSE'.
         * @protected
         */
        protected doValueUpdate_(newValue: any): void;
        value_: boolean;
        /**
         * Get the value of this field, either 'TRUE' or 'FALSE'.
         * @return {string} The value of this field.
         */
        getValue(): string;
        /**
         * Get the boolean value of this field.
         * @return {boolean} The boolean value of this field.
         */
        getValueBoolean(): boolean;
        /**
         * Get the text of this field. Used when the block is collapsed.
         * @return {string} Text representing the value of this field
         *    ('true' or 'false').
         */
        getText(): string;
        /**
         * Convert a value into a pure boolean.
         *
         * Converts 'TRUE' to true and 'FALSE' to false correctly, everything else
         * is cast to a boolean.
         * @param {*} value The value to convert.
         * @return {boolean} The converted value.
         * @private
         */
        private convertValueToBool_;
        /**
         * The default value for this field.
         * @type {*}
         * @protected
         */
        protected DEFAULT_VALUE: any;
        /**
         * Serializable fields are saved by the XML renderer, non-serializable fields
         * are not. Editable fields should also be serializable.
         * @type {boolean}
         */
        SERIALIZABLE: boolean;
        /**
         * Mouse cursor style when over the hotspot that initiates editability.
         */
        CURSOR: string;
    }
    export namespace FieldCheckbox {
        const CHECK_CHAR: string;
    }

    import { Field } from "field";
}
declare module "field_color" {
    export class FieldColor extends Field {
        /**
         * Construct a FieldColor from a JSON arg object.
         * @param {!Object} options A JSON object with options (color).
         * @return {!FieldColor} The new field instance.
         * @package
         * @nocollapse
         */
        static fromJson(options: any): FieldColor;
        /**
         * Class for a color input field.
         * @param {string=} opt_value The initial value of the field. Should be in
         *    '#rrggbb' format. Defaults to the first value in the default color array.
         * @param {Function=} opt_validator A function that is called to validate
         *    changes to the field's value. Takes in a color string & returns a
         *    validated color string ('#rrggbb' format), or null to abort the
         *    change.Blockly.
         * @param {Object=} opt_config A map of options used to configure the field.
         *    See the [field creation documentation]{@link
         *    https://developers.google.com/blockly/guides/create-custom-blocks/fields/built-in-fields/color}
         *    for a list of properties this parameter supports.
         * @extends {Field}
         * @constructor
         * @alias Blockly.FieldColor
         */
        constructor(opt_value?: string | undefined, opt_validator?: Function | undefined, opt_config?: any | undefined);
        /**
         * The field's color picker element.
         * @type {?Element}
         * @private
         */
        private picker_;
        /**
         * Index of the currently highlighted element.
         * @type {?number}
         * @private
         */
        private highlightedIndex_;
        /**
         * Mouse click event data.
         * @type {?browserEvents.Data}
         * @private
         */
        private onClickWrapper_;
        /**
         * Mouse move event data.
         * @type {?browserEvents.Data}
         * @private
         */
        private onMouseMoveWrapper_;
        /**
         * Mouse enter event data.
         * @type {?browserEvents.Data}
         * @private
         */
        private onMouseEnterWrapper_;
        /**
         * Mouse leave event data.
         * @type {?browserEvents.Data}
         * @private
         */
        private onMouseLeaveWrapper_;
        /**
         * Key down event data.
         * @type {?browserEvents.Data}
         * @private
         */
        private onKeyDownWrapper_;
        /**
         * Configure the field based on the given map of options.
         * @param {!Object} config A map of options to configure the field based on.
         * @protected
         * @override
         */
        protected override configure_(config: any): void;
        colors_: Array<string>;
        titles_: Array<string>;
        columns_: number;
        /**
         * Create the block UI for this color field.
         * @package
         */
        initView(): void;
        size_: Size;
        clickTarget_: any;
        /**
         * @override
         */
        override applyColor(): void;
        /**
         * Ensure that the input value is a valid color.
         * @param {*=} opt_newValue The input value.
         * @return {?string} A valid color, or null if invalid.
         * @protected
         */
        protected doClassValidation_(opt_newValue?: any | undefined): string | null;
        /**
         * Update the value of this color field, and update the displayed color.
         * @param {*} newValue The value to be saved. The default validator guarantees
         * that this is a color in '#rrggbb' format.
         * @protected
         */
        protected doValueUpdate_(newValue: any): void;
        value_: any;
        /**
         * Get the text for this field.  Used when the block is collapsed.
         * @return {string} Text representing the value of this field.
         */
        getText(): string;
        /**
         * Set a custom color grid for this field.
         * @param {Array<string>} colors Array of colors for this block,
         *     or null to use default (FieldColor.COLORS).
         * @param {Array<string>=} opt_titles Optional array of color tooltips,
         *     or null to use default (FieldColor.TITLES).
         * @return {!FieldColor} Returns itself (for method chaining).
         */
        setColors(colors: Array<string>, opt_titles?: Array<string> | undefined): FieldColor;
        /**
         * Set a custom grid size for this field.
         * @param {number} columns Number of columns for this block,
         *     or 0 to use default (FieldColor.COLUMNS).
         * @return {!FieldColor} Returns itself (for method chaining).
         */
        setColumns(columns: number): FieldColor;
        /**
         * Create and show the color field's editor.
         * @protected
         */
        protected showEditor_(): void;
        /**
         * Handle a click on a color cell.
         * @param {!MouseEvent} e Mouse event.
         * @private
         */
        private onClick_;
        /**
         * Handle a key down event. Navigate around the grid with the
         * arrow keys. Enter selects the highlighted color.
         * @param {!KeyboardEvent} e Keyboard event.
         * @private
         */
        private onKeyDown_;
        /**
         * Move the currently highlighted position by dx and dy.
         * @param {number} dx Change of x
         * @param {number} dy Change of y
         * @private
         */
        private moveHighlightBy_;
        /**
         * Handle a mouse move event. Highlight the hovered color.
         * @param {!MouseEvent} e Mouse event.
         * @private
         */
        private onMouseMove_;
        /**
         * Handle a mouse enter event. Focus the picker.
         * @private
         */
        private onMouseEnter_;
        /**
         * Handle a mouse leave event. Blur the picker and unhighlight
         * the currently highlighted color.
         * @private
         */
        private onMouseLeave_;
        /**
         * Returns the currently highlighted item (if any).
         * @return {?HTMLElement} Highlighted item (null if none).
         * @private
         */
        private getHighlighted_;
        /**
         * Update the currently highlighted cell.
         * @param {!Element} cell the new cell to highlight
         * @param {number} index the index of the new cell
         * @private
         */
        private setHighlightedCell_;
        /**
         * Create a color picker dropdown editor.
         * @private
         */
        private dropdownCreate_;
        /**
         * Disposes of events and DOM-references belonging to the color editor.
         * @private
         */
        private dropdownDispose_;
        /**
         * Serializable fields are saved by the XML renderer, non-serializable fields
         * are not. Editable fields should also be serializable.
         * @type {boolean}
         */
        SERIALIZABLE: boolean;
        /**
         * Mouse cursor style when over the hotspot that initiates the editor.
         */
        CURSOR: string;
        /**
         * Used to tell if the field needs to be rendered the next time the block is
         * rendered. Color fields are statically sized, and only need to be
         * rendered at initialization.
         * @type {boolean}
         * @protected
         */
        isDirty_: boolean;
        /**
         * The default value for this field.
         * @type {*}
         * @protected
         */
        protected DEFAULT_VALUE: any;
    }
    export namespace FieldColor {
        const COLORS: Array<string>;
        const TITLES: Array<string>;
        const COLUMNS: number;
    }
    import { Size } from "utils/size";
    import { Field } from "field";
}
declare module "field_dropdown" {
    export class FieldDropdown extends Field {
        /**
         * Construct a FieldDropdown from a JSON arg object.
         * @param {!Object} options A JSON object with options (options).
         * @return {!FieldDropdown} The new field instance.
         * @package
         * @nocollapse
         */
        static fromJson(options: any): FieldDropdown;
        /**
         * Use the calculated prefix and suffix lengths to trim all of the options in
         * the given array.
         * @param {!Array<!Array>} options Array of option tuples:
         *     (human-readable text or image, language-neutral name).
         * @param {number} prefixLength The length of the common prefix.
         * @param {number} suffixLength The length of the common suffix
         * @return {!Array<!Array>} A new array with all of the option text trimmed.
         */
        static applyTrim_(options: Array<any[]>, prefixLength: number, suffixLength: number): Array<any[]>;
        /**
         * Class for an editable dropdown field.
         * @param {(!Array<!Array>|!Function)} menuGenerator A non-empty array of
         *     options for a dropdown list, or a function which generates these options.
         * @param {Function=} opt_validator A function that is called to validate
         *    changes to the field's value. Takes in a language-neutral dropdown
         *    option & returns a validated language-neutral dropdown option, or null to
         *    abort the change.
         * @param {Object=} opt_config A map of options used to configure the field.
         *    See the [field creation documentation]{@link
         *    https://developers.google.com/blockly/guides/create-custom-blocks/fields/built-in-fields/dropdown#creation}
         *    for a list of properties this parameter supports.
         * @extends {Field}
         * @constructor
         * @throws {TypeError} If `menuGenerator` options are incorrectly structured.
         * @alias Blockly.FieldDropdown
         */
        constructor(menuGenerator: (Array<any[]> | Function), opt_validator?: Function | undefined, opt_config?: any | undefined);
        /**
         * An array of options for a dropdown list,
         * or a function which generates these options.
         * @type {(!Array<!Array>|
         *    !function(this:FieldDropdown): !Array<!Array>)}
         * @protected
         */
        protected menuGenerator_: any[][] | ((this: FieldDropdown) => Array<any[]>);
        /**
         * A cache of the most recently generated options.
         * @type {Array<!Array<string>>}
         * @private
         */
        private generatedOptions_;
        /**
         * The prefix field label, of common words set after options are trimmed.
         * @type {?string}
         * @package
         */
        prefixField: string | null;
        /**
         * The suffix field label, of common words set after options are trimmed.
         * @type {?string}
         * @package
         */
        suffixField: string | null;
        /**
         * The currently selected option. The field is initialized with the
         * first option selected.
         * @type {!Object}
         * @private
         */
        private selectedOption_;
        /**
         * A reference to the currently selected menu item.
         * @type {?MenuItem}
         * @private
         */
        private selectedMenuItem_;
        /**
         * The dropdown menu.
         * @type {?Menu}
         * @protected
         */
        protected menu_: Menu | null;
        /**
         * SVG image element if currently selected option is an image, or null.
         * @type {?SVGImageElement}
         * @private
         */
        private imageElement_;
        /**
         * Tspan based arrow element.
         * @type {?SVGTSpanElement}
         * @private
         */
        private arrow_;
        /**
         * SVG based arrow element.
         * @type {?SVGElement}
         * @private
         */
        private svgArrow_;
        /**
         * Sets the field's value based on the given XML element. Should only be
         * called by Blockly.Xml.
         * @param {!Element} fieldElement The element containing info about the
         *    field's state.
         * @package
         */
        fromXml(fieldElement: Element): void;
        /**
         * Sets the field's value based on the given state.
         * @param {*} state The state to apply to the dropdown field.
         * @override
         * @package
         */
        override loadState(state: any): void;
        /**
         * Create the block UI for this dropdown.
         * @package
         */
        initView(): void;
        clickTarget_: any;
        /**
         * Whether or not the dropdown should add a border rect.
         * @return {boolean} True if the dropdown field should add a border rect.
         * @protected
         */
        protected shouldAddBorderRect_(): boolean;
        /**
         * Create a tspan based arrow.
         * @protected
         */
        protected createTextArrow_(): void;
        /**
         * Create an SVG based arrow.
         * @protected
         */
        protected createSVGArrow_(): void;
        /**
         * Create a dropdown menu under the text.
         * @param {Event=} opt_e Optional mouse event that triggered the field to open,
         *     or undefined if triggered programmatically.
         * @protected
         */
        protected showEditor_(opt_e?: Event | undefined): void;
        /**
         * Create the dropdown editor.
         * @private
         */
        private dropdownCreate_;
        /**
         * Disposes of events and DOM-references belonging to the dropdown editor.
         * @private
         */
        private dropdownDispose_;
        /**
         * Handle an action in the dropdown menu.
         * @param {!MenuItem} menuItem The MenuItem selected within menu.
         * @private
         */
        private handleMenuActionEvent_;
        /**
         * Handle the selection of an item in the dropdown menu.
         * @param {!Menu} menu The Menu component clicked.
         * @param {!MenuItem} menuItem The MenuItem selected within menu.
         * @protected
         */
        protected onItemSelected_(menu: Menu, menuItem: MenuItem): void;
        /**
         * Factor out common words in statically defined options.
         * Create prefix and/or suffix labels.
         * @private
         */
        private trimOptions_;
        /**
         * @return {boolean} True if the option list is generated by a function.
         *     Otherwise false.
         */
        isOptionListDynamic(): boolean;
        /**
         * Return a list of the options for this dropdown.
         * @param {boolean=} opt_useCache For dynamic options, whether or not to use the
         *     cached options or to re-generate them.
         * @return {!Array<!Array>} A non-empty array of option tuples:
         *     (human-readable text or image, language-neutral name).
         * @throws {TypeError} If generated options are incorrectly structured.
         */
        getOptions(opt_useCache?: boolean | undefined): Array<any[]>;
        /**
         * Ensure that the input value is a valid language-neutral option.
         * @param {*=} opt_newValue The input value.
         * @return {?string} A valid language-neutral option, or null if invalid.
         * @protected
         */
        protected doClassValidation_(opt_newValue?: any | undefined): string | null;
        /**
         * Update the value of this dropdown field.
         * @param {*} newValue The value to be saved. The default validator guarantees
         * that this is one of the valid dropdown options.
         * @protected
         */
        protected doValueUpdate_(newValue: any): void;
        /**
         * Updates the dropdown arrow to match the color/style of the block.
         * @package
         */
        applyColor(): void;
        /**
         * Draws the border with the correct width.
         * @protected
         */
        protected render_(): void;
        /**
         * Renders the selected option, which must be an image.
         * @param {!FieldDropdown.ImageProperties} imageJson Selected
         *   option that must be an image.
         * @private
         */
        private renderSelectedImage_;
        /**
         * Renders the selected option, which must be text.
         * @private
         */
        private renderSelectedText_;
        /**
         * Position a drop-down arrow at the appropriate location at render-time.
         * @param {number} x X position the arrow is being rendered at, in px.
         * @param {number} y Y position the arrow is being rendered at, in px.
         * @return {number} Amount of space the arrow is taking up, in px.
         * @private
         */
        private positionSVGArrow_;
        /**
         * Use the `getText_` developer hook to override the field's text
         * representation.  Get the selected option text. If the selected option is an
         * image we return the image alt text.
         * @return {?string} Selected option text.
         * @protected
         * @override
         */
        protected getText_(): string | null;
        /**
         * Serializable fields are saved by the XML renderer, non-serializable fields
         * are not. Editable fields should also be serializable.
         * @type {boolean}
         */
        SERIALIZABLE: boolean;
        /**
         * Mouse cursor style when over the hotspot that initiates the editor.
         */
        CURSOR: string;
    }
    export namespace FieldDropdown {
        const CHECKMARK_OVERHANG: number;
        const MAX_MENU_HEIGHT_VH: number;
        const ARROW_CHAR: string;
        /**
         * Dropdown image properties.
         */
        type ImageProperties = {
            src: string;
            alt: string;
            width: number;
            height: number;
        };
    }
    import { Menu } from "menu";
    import { MenuItem } from "menuitem";
    import { Field } from "field";
}
declare module "field_label_serializable" {
    /**
     * Class for a non-editable, serializable text field.
     * @param {*} opt_value The initial value of the field. Should cast to a
     *    string. Defaults to an empty string if null or undefined.
     * @param {string=} opt_class Optional CSS class for the field's text.
     * @param {Object=} opt_config A map of options used to configure the field.
     *    See the [field creation documentation]{@link
     * https://developers.google.com/blockly/guides/create-custom-blocks/fields/built-in-fields/label-serializable#creation}
     *    for a list of properties this parameter supports.
     * @extends {FieldLabel}
     * @constructor
     *
     * @alias Blockly.FieldLabelSerializable
     */
    export class FieldLabelSerializable extends FieldLabel {
        /**
         * Construct a FieldLabelSerializable from a JSON arg object,
         * dereferencing any string table references.
         * @param {!Object} options A JSON object with options (text, and class).
         * @return {!FieldLabelSerializable} The new field instance.
         * @package
         * @nocollapse
         */
        static fromJson(options: any): FieldLabelSerializable;
        constructor(opt_value: any, opt_class: any, opt_config: any);
        /**
         * Editable fields usually show some sort of UI indicating they are
         * editable. This field should not.
         * @type {boolean}
         */
        EDITABLE: boolean;
        /**
         * Serializable fields are saved by the XML renderer, non-serializable fields
         * are not.  This field should be serialized, but only edited programmatically.
         * @type {boolean}
         */
        SERIALIZABLE: boolean;
    }

    import { FieldLabel } from "field_label";
}
declare module "field_multilineinput" {
    export class FieldMultilineInput extends FieldTextInput {
        /**
         * Construct a FieldMultilineInput from a JSON arg object,
         * dereferencing any string table references.
         * @param {!Object} options A JSON object with options (text, and spellcheck).
         * @return {!FieldMultilineInput} The new field instance.
         * @package
         * @nocollapse
         */
        static fromJson(options: any): FieldMultilineInput;
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
        constructor(opt_value?: string | undefined, opt_validator?: Function | undefined, opt_config?: any | undefined);
        /**
         * The SVG group element that will contain a text element for each text row
         *     when initialized.
         * @type {SVGGElement}
         */
        textGroup_: SVGGElement;
        /**
         * Defines the maximum number of lines of field.
         * If exceeded, scrolling functionality is enabled.
         * @type {number}
         * @protected
         */
        protected maxLines_: number;
        /**
         * Whether Y overflow is currently occurring.
         * @type {boolean}
         * @protected
         */
        protected isOverflowedY_: boolean;
        /**
         * @override
         */
        override configure_(config: any): void;
        /**
         * Serializes this field's value to XML. Should only be called by Blockly.Xml.
         * @param {!Element} fieldElement The element to populate with info about the
         *    field's state.
         * @return {!Element} The element containing info about the field's state.
         * @package
         */
        toXml(fieldElement: Element): Element;
        /**
         * Sets the field's value based on the given XML element. Should only be
         * called by Blockly.Xml.
         * @param {!Element} fieldElement The element containing info about the
         *    field's state.
         * @package
         */
        fromXml(fieldElement: Element): void;
        /**
         * Saves this field's value.
         * @return {*} The state of this field.
         * @package
         */
        saveState(): any;
        /**
         * Sets the field's value based on the given state.
         * @param {*} state The state of the variable to assign to this variable field.
         * @override
         * @package
         */
        override loadState(state: any): void;
        /**
         * Create the block UI for this field.
         * @package
         */
        initView(): void;
        /**
         * Get the text from this field as displayed on screen.  May differ from getText
         * due to ellipsis, and other formatting.
         * @return {string} Currently displayed text.
         * @protected
         * @override
         */
        protected override getDisplayText_(): string;
        /**
         * Called by setValue if the text input is valid. Updates the value of the
         * field, and updates the text of the field if it is not currently being
         * edited (i.e. handled by the htmlInput_). Is being redefined here to update
         * overflow state of the field.
         * @param {*} newValue The value to be saved. The default validator guarantees
         * that this is a string.
         * @protected
         */
        protected doValueUpdate_(newValue: any): void;
        /**
         * Updates the text of the textElement.
         * @protected
         */
        protected render_(): void;
        /**
         * Updates the size of the field based on the text.
         * @protected
         */
        protected updateSize_(): void;
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
        override showEditor_(_opt_e?: Event | undefined, opt_quietInput?: boolean | undefined): void;
        /**
         * Create the text input editor widget.
         * @return {!HTMLTextAreaElement} The newly created text input editor.
         * @protected
         */
        protected widgetCreate_(): HTMLTextAreaElement;
        /**
         * Sets the maxLines config for this field.
         * @param {number} maxLines Defines the maximum number of lines allowed,
         *     before scrolling functionality is enabled.
         */
        setMaxLines(maxLines: number): void;
        /**
         * Returns the maxLines config of this field.
         * @return {number} The maxLines config value.
         */
        getMaxLines(): number;
        /**
         * Handle key down to the editor. Override the text input definition of this
         * so as to not close the editor when enter is typed in.
         * @param {!Event} e Keyboard event.
         * @protected
         */
        protected onHtmlInputKeyDown_(e: Event): void;
    }
    import { FieldTextInput } from "field_textinput";
}
declare module "field_number" {
    export class FieldNumber extends FieldTextInput {
        /**
         * Construct a FieldNumber from a JSON arg object.
         * @param {!Object} options A JSON object with options (value, min, max, and
         *                          precision).
         * @return {!FieldNumber} The new field instance.
         * @package
         * @nocollapse
         */
        static fromJson(options: any): FieldNumber;
        /**
         * Class for an editable number field.
         * @param {string|number=} opt_value The initial value of the field. Should cast
         *    to a number. Defaults to 0.
         * @param {?(string|number)=} opt_min Minimum value.
         * @param {?(string|number)=} opt_max Maximum value.
         * @param {?(string|number)=} opt_precision Precision for value.
         * @param {?Function=} opt_validator A function that is called to validate
         *    changes to the field's value. Takes in a number & returns a validated
         *    number, or null to abort the change.
         * @param {Object=} opt_config A map of options used to configure the field.
         *    See the [field creation documentation]{@link
         * https://developers.google.com/blockly/guides/create-custom-blocks/fields/built-in-fields/number#creation}
         *    for a list of properties this parameter supports.
         * @extends {FieldTextInput}
         * @constructor
         * @alias Blockly.FieldNumber
         */
        constructor(opt_value?: (string | number) | undefined, opt_min?: ((string | number) | null) | undefined, opt_max?: ((string | number) | null) | undefined, opt_precision?: ((string | number) | null) | undefined, opt_validator?: (Function | null) | undefined, opt_config?: any | undefined);
        /**
         * The minimum value this number field can contain.
         * @type {number}
         * @protected
         */
        protected min_: number;
        /**
         * The maximum value this number field can contain.
         * @type {number}
         * @protected
         */
        protected max_: number;
        /**
         * The multiple to which this fields value is rounded.
         * @type {number}
         * @protected
         */
        protected precision_: number;
        /**
         * The number of decimal places to allow, or null to allow any number of
         * decimal digits.
         * @type {?number}
         * @private
         */
        private decimalPlaces_;
        /**
         * Configure the field based on the given map of options.
         * @param {!Object} config A map of options to configure the field based on.
         * @protected
         * @override
         */
        override configure_(config: any): void;
        /**
         * Set the maximum, minimum and precision constraints on this field.
         * Any of these properties may be undefined or NaN to be disabled.
         * Setting precision (usually a power of 10) enforces a minimum step between
         * values. That is, the user's value will rounded to the closest multiple of
         * precision. The least significant digit place is inferred from the precision.
         * Integers values can be enforces by choosing an integer precision.
         * @param {?(number|string|undefined)} min Minimum value.
         * @param {?(number|string|undefined)} max Maximum value.
         * @param {?(number|string|undefined)} precision Precision for value.
         */
        setConstraints(min: (number | string | undefined) | null, max: (number | string | undefined) | null, precision: (number | string | undefined) | null): void;
        /**
         * Sets the minimum value this field can contain. Updates the value to reflect.
         * @param {?(number|string|undefined)} min Minimum value.
         */
        setMin(min: (number | string | undefined) | null): void;
        /**
         * Sets the minimum value this field can contain. Called internally to avoid
         * value updates.
         * @param {?(number|string|undefined)} min Minimum value.
         * @private
         */
        private setMinInternal_;
        /**
         * Returns the current minimum value this field can contain. Default is
         * -Infinity.
         * @return {number} The current minimum value this field can contain.
         */
        getMin(): number;
        /**
         * Sets the maximum value this field can contain. Updates the value to reflect.
         * @param {?(number|string|undefined)} max Maximum value.
         */
        setMax(max: (number | string | undefined) | null): void;
        /**
         * Sets the maximum value this field can contain. Called internally to avoid
         * value updates.
         * @param {?(number|string|undefined)} max Maximum value.
         * @private
         */
        private setMaxInternal_;
        /**
         * Returns the current maximum value this field can contain. Default is
         * Infinity.
         * @return {number} The current maximum value this field can contain.
         */
        getMax(): number;
        /**
         * Sets the precision of this field's value, i.e. the number to which the
         * value is rounded. Updates the field to reflect.
         * @param {?(number|string|undefined)} precision The number to which the
         *    field's value is rounded.
         */
        setPrecision(precision: (number | string | undefined) | null): void;
        /**
         * Sets the precision of this field's value. Called internally to avoid
         * value updates.
         * @param {?(number|string|undefined)} precision The number to which the
         *    field's value is rounded.
         * @private
         */
        private setPrecisionInternal_;
        /**
         * Returns the current precision of this field. The precision being the
         * number to which the field's value is rounded. A precision of 0 means that
         * the value is not rounded.
         * @return {number} The number to which this field's value is rounded.
         */
        getPrecision(): number;
        /**
         * Ensure that the input value is a valid number (must fulfill the
         * constraints placed on the field).
         * @param {*=} opt_newValue The input value.
         * @return {?number} A valid number, or null if invalid.
         * @protected
         * @override
         */
        protected override doClassValidation_(opt_newValue?: any | undefined): number | null;
        /**
         * Create the number input editor widget.
         * @return {!HTMLElement} The newly created number input editor.
         * @protected
         * @override
         */
        protected override widgetCreate_(): HTMLElement;
        /**
         * The default value for this field.
         * @type {*}
         * @protected
         */
        protected DEFAULT_VALUE: any;
        /**
         * Serializable fields are saved by the XML renderer, non-serializable fields
         * are not. Editable fields should also be serializable.
         * @type {boolean}
         */
        SERIALIZABLE: boolean;
    }

    import { FieldTextInput } from "field_textinput";
}
declare module "field_variable" {
    export class FieldVariable extends FieldDropdown {
        /**
         * Construct a FieldVariable from a JSON arg object,
         * dereferencing any string table references.
         * @param {!Object} options A JSON object with options (variable,
         *                          variableTypes, and defaultType).
         * @return {!FieldVariable} The new field instance.
         * @package
         * @nocollapse
         */
        static fromJson(options: any): FieldVariable;
        /**
         * Return a sorted list of variable names for variable dropdown menus.
         * Include a special option at the end for creating a new variable name.
         * @return {!Array<!Array>} Array of variable names/id tuples.
         * @this {FieldVariable}
         */
        static dropdownCreate(): Array<any[]>;
        /**
         * Class for a variable's dropdown field.
         * @param {?string} varName The default name for the variable.  If null,
         *     a unique variable name will be generated.
         * @param {Function=} opt_validator A function that is called to validate
         *    changes to the field's value. Takes in a variable ID  & returns a
         *    validated variable ID, or null to abort the change.
         * @param {Array<string>=} opt_variableTypes A list of the types of variables
         *     to include in the dropdown.
         * @param {string=} opt_defaultType The type of variable to create if this
         *     field's value is not explicitly set.  Defaults to ''.
         * @param {Object=} opt_config A map of options used to configure the field.
         *    See the [field creation documentation]{@link
         *    https://developers.google.com/blockly/guides/create-custom-blocks/fields/built-in-fields/variable#creation}
         *    for a list of properties this parameter supports.
         * @extends {FieldDropdown}
         * @constructor
         * @alias Blockly.FieldVariable
         */
        constructor(varName: string | null, opt_validator?: Function | undefined, opt_variableTypes?: Array<string> | undefined, opt_defaultType?: string | undefined, opt_config?: any | undefined);
        /**
         * An array of options for a dropdown list,
         * or a function which generates these options.
         * @type {(!Array<!Array>|
         *    !function(this:FieldDropdown): !Array<!Array>)}
         * @protected
         */
        protected menuGenerator_: any[][] | ((this: FieldDropdown) => Array<any[]>);
        /**
         * The initial variable name passed to this field's constructor, or an
         * empty string if a name wasn't provided. Used to create the initial
         * variable.
         * @type {string}
         */
        defaultVariableName: string;
        /**
         * The size of the area rendered by the field.
         * @type {Size}
         * @protected
         * @override
         */
        protected override size_: Size;
        /**
         * Configure the field based on the given map of options.
         * @param {!Object} config A map of options to configure the field based on.
         * @protected
         */
        protected configure_(config: any): void;
        /**
         * Initialize the model for this field if it has not already been initialized.
         * If the value has not been set to a variable by the first render, we make up a
         * variable rather than let the value be invalid.
         * @package
         */
        initModel(): void;
        /**
         * @override
         */
        override shouldAddBorderRect_(): boolean;
        /**
         * Initialize this field based on the given XML.
         * @param {!Element} fieldElement The element containing information about the
         *    variable field's state.
         */
        fromXml(fieldElement: Element): void;
        /**
         * Serialize this field to XML.
         * @param {!Element} fieldElement The element to populate with info about the
         *    field's state.
         * @return {!Element} The element containing info about the field's state.
         */
        toXml(fieldElement: Element): Element;
        /**
         * Saves this field's value.
         * @param {boolean=} doFullSerialization If true, the variable field will
         *     serialize the full state of the field being referenced (ie ID, name,
         *     and type) rather than just a reference to it (ie ID).
         * @return {*} The state of the variable field.
         * @override
         * @package
         */
        override saveState(doFullSerialization?: boolean | undefined): any;
        /**
         * Sets the field's value based on the given state.
         * @param {*} state The state of the variable to assign to this variable field.
         * @override
         * @package
         */
        override loadState(state: any): void;
        /**
         * Attach this field to a block.
         * @param {!Block} block The block containing this field.
         */
        setSourceBlock(block: Block): void;
        /**
         * Get the variable's ID.
         * @return {string} Current variable's ID.
         */
        getValue(): string;
        /**
         * Get the text from this field, which is the selected variable's name.
         * @return {string} The selected variable's name, or the empty string if no
         *     variable is selected.
         */
        getText(): string;
        /**
         * Get the variable model for the selected variable.
         * Not guaranteed to be in the variable map on the workspace (e.g. if accessed
         * after the variable has been deleted).
         * @return {?VariableModel} The selected variable, or null if none was
         *     selected.
         * @package
         */
        getVariable(): VariableModel | null;
        /**
         * Gets the validation function for this field, or null if not set.
         * Returns null if the variable is not set, because validators should not
         * run on the initial setValue call, because the field won't be attached to
         * a block and workspace at that point.
         * @return {?Function} Validation function, or null.
         */
        getValidator(): Function | null;
        /**
         * Ensure that the ID belongs to a valid variable of an allowed type.
         * @param {*=} opt_newValue The ID of the new variable to set.
         * @return {?string} The validated ID, or null if invalid.
         * @protected
         */
        protected doClassValidation_(opt_newValue?: any | undefined): string | null;
        /**
         * Update the value of this variable field, as well as its variable and text.
         *
         * The variable ID should be valid at this point, but if a variable field
         * validator returns a bad ID, this could break.
         * @param {*} newId The value to be saved.
         * @protected
         */
        protected doValueUpdate_(newId: any): void;
        variable_: VariableModel;
        /**
         * Check whether the given variable type is allowed on this field.
         * @param {string} type The type to check.
         * @return {boolean} True if the type is in the list of allowed types.
         * @private
         */
        private typeIsAllowed_;
        /**
         * Return a list of variable types to include in the dropdown.
         * @return {!Array<string>} Array of variable types.
         * @throws {Error} if variableTypes is an empty array.
         * @private
         */
        private getVariableTypes_;
        /**
         * Parse the optional arguments representing the allowed variable types and the
         * default variable type.
         * @param {Array<string>=} opt_variableTypes A list of the types of variables
         *     to include in the dropdown.  If null or undefined, variables of all types
         *     will be displayed in the dropdown.
         * @param {string=} opt_defaultType The type of the variable to create if this
         *     field's value is not explicitly set.  Defaults to ''.
         * @private
         */
        private setTypes_;
        defaultType_: string;
        variableTypes: string[];
        /**
         * Refreshes the name of the variable by grabbing the name of the model.
         * Used when a variable gets renamed, but the ID stays the same. Should only
         * be called by the block.
         * @package
         */
        refreshVariableName(): void;
        /**
         * Handle the selection of an item in the variable dropdown menu.
         * Special case the 'Rename variable...' and 'Delete variable...' options.
         * In the rename case, prompt the user for a new name.
         * @param {!Menu} menu The Menu component clicked.
         * @param {!MenuItem} menuItem The MenuItem selected within menu.
         * @protected
         */
        protected onItemSelected_(menu: Menu, menuItem: MenuItem): void;
        /**
         * Overrides referencesVariables(), indicating this field refers to a variable.
         * @return {boolean} True.
         * @package
         * @override
         */
        override referencesVariables(): boolean;
        /**
         * Serializable fields are saved by the XML renderer, non-serializable fields
         * are not. Editable fields should also be serializable.
         * @type {boolean}
         */
        SERIALIZABLE: boolean;
    }
    import { FieldDropdown } from "field_dropdown";
    import { Size } from "utils/size";
    import { Block } from "block";
    import { VariableModel } from "variable_model";
    import { Menu } from "menu";
    import { MenuItem } from "menuitem";
}
declare module "flyout_metrics_manager" {
    /**
     * Calculates metrics for a flyout's workspace.
     * The metrics are mainly used to size scrollbars for the flyout.
     * @param {!WorkspaceSvg} workspace The flyout's workspace.
     * @param {!IFlyout} flyout The flyout.
     * @extends {MetricsManager}
     * @constructor
     * @alias Blockly.FlyoutMetricsManager
     */
    export class FlyoutMetricsManager extends MetricsManager {
        constructor(workspace: any, flyout: any);
        /**
         * The flyout that owns the workspace to calculate metrics for.
         * @type {!IFlyout}
         * @protected
         */
        protected flyout_: IFlyout;
        /**
         * Gets the bounding box of the blocks on the flyout's workspace.
         * This is in workspace coordinates.
         * @return {!SVGRect|{height: number, y: number, width: number, x: number}} The
         *     bounding box of the blocks on the workspace.
         * @private
         */
        private getBoundingBox_;
        /**
         * @override
         */
        override getContentMetrics(opt_getWorkspaceCoordinates: any): {
            height: number;
            width: number;
            top: number;
            left: number;
        };
        /**
         * @override
         */
        override getScrollMetrics(opt_getWorkspaceCoordinates: any, opt_viewMetrics: any, opt_contentMetrics: any): {
            height: number;
            width: number;
            top: number;
            left: number;
        };
    }
    import { IFlyout } from "interfaces/i_flyout";
    import { MetricsManager } from "metrics_manager";
}
declare module "flyout_base" {
    export class Flyout {
        /**
         * Class for a flyout.
         * @param {!Options} workspaceOptions Dictionary of options for the
         *     workspace.
         * @constructor
         * @abstract
         * @implements {IFlyout}
         * @extends {DeleteArea}
         * @alias Blockly.Flyout
         */
        constructor(workspaceOptions: Options);
        /**
         * @type {!WorkspaceSvg}
         * @protected
         */
        protected workspace_: WorkspaceSvg;
        /**
         * The unique id for this component that is used to register with the
         * ComponentManager.
         * @type {string}
         */
        id: string;
        /**
         * Is RTL vs LTR.
         * @type {boolean}
         */
        RTL: boolean;
        /**
         * Whether the flyout should be laid out horizontally or not.
         * @type {boolean}
         * @package
         */
        horizontalLayout: boolean;
        /**
         * Position of the toolbox and flyout relative to the workspace.
         * @type {number}
         * @protected
         */
        protected toolboxPosition_: number;
        /**
         * Opaque data that can be passed to Blockly.unbindEvent_.
         * @type {!Array<!Array>}
         * @private
         */
        private eventWrappers_;
        /**
         * List of background mats that lurk behind each block to catch clicks
         * landing in the blocks' lakes and bays.
         * @type {!Array<!SVGElement>}
         * @private
         */
        private mats_;
        /**
         * List of visible buttons.
         * @type {!Array<!FlyoutButton>}
         * @protected
         */
        protected buttons_: Array<FlyoutButton>;
        /**
         * List of event listeners.
         * @type {!Array<!Array>}
         * @private
         */
        private listeners_;
        /**
         * List of blocks that should always be disabled.
         * @type {!Array<!Block>}
         * @private
         */
        private permanentlyDisabled_;
        /**
         * Width of output tab.
         * @type {number}
         * @protected
         * @const
         */
        protected tabWidth_: number;
        /**
         * The target workspace
         * @type {?WorkspaceSvg}
         * @package
         */
        targetWorkspace: WorkspaceSvg | null;
        /**
         * A list of blocks that can be reused.
         * @type {!Array<!BlockSvg>}
         * @private
         */
        private recycledBlocks_;
        /**
         * Creates the flyout's DOM.  Only needs to be called once.  The flyout can
         * either exist as its own SVG element or be a g element nested inside a
         * separate SVG element.
         * @param {string|
         * !Svg<!SVGSVGElement>|
         * !Svg<!SVGGElement>} tagName The type of tag to
         *     put the flyout in. This should be <svg> or <g>.
         * @return {!SVGElement} The flyout's SVG group.
         */
        createDom(tagName: string | Svg<SVGSVGElement> | Svg<SVGGElement>): SVGElement;
        svgGroup_: SVGGElement;
        svgBackground_: SVGPathElement;
        /**
         * Initializes the flyout.
         * @param {!WorkspaceSvg} targetWorkspace The workspace in which to
         *     create new blocks.
         */
        init(targetWorkspace: WorkspaceSvg): void;
        filterWrapper_: any;
        /**
         * Dispose of this flyout.
         * Unlink from all DOM elements to prevent memory leaks.
         * @suppress {checkTypes}
         */
        dispose(): void;
        /**
         * Get the width of the flyout.
         * @return {number} The width of the flyout.
         */
        getWidth(): number;
        /**
         * Get the height of the flyout.
         * @return {number} The width of the flyout.
         */
        getHeight(): number;
        /**
         * Get the scale (zoom level) of the flyout. By default,
         * this matches the target workspace scale, but this can be overridden.
         * @return {number} Flyout workspace scale.
         */
        getFlyoutScale(): number;
        /**
         * Get the workspace inside the flyout.
         * @return {!WorkspaceSvg} The workspace inside the flyout.
         * @package
         */
        getWorkspace(): WorkspaceSvg;
        /**
         * Is the flyout visible?
         * @return {boolean} True if visible.
         */
        isVisible(): boolean;
        /**
         * Set whether the flyout is visible. A value of true does not necessarily mean
         * that the flyout is shown. It could be hidden because its container is hidden.
         * @param {boolean} visible True if visible.
         */
        setVisible(visible: boolean): void;
        isVisible_: boolean;
        /**
         * Set whether this flyout's container is visible.
         * @param {boolean} visible Whether the container is visible.
         */
        setContainerVisible(visible: boolean): void;
        containerVisible_: boolean;
        /**
         * Update the display property of the flyout based whether it thinks it should
         * be visible and whether its containing workspace is visible.
         * @private
         */
        private updateDisplay_;
        /**
         * Update the view based on coordinates calculated in position().
         * @param {number} width The computed width of the flyout's SVG group
         * @param {number} height The computed height of the flyout's SVG group.
         * @param {number} x The computed x origin of the flyout's SVG group.
         * @param {number} y The computed y origin of the flyout's SVG group.
         * @protected
         */
        protected positionAt_(width: number, height: number, x: number, y: number): void;
        /**
         * Hide and empty the flyout.
         */
        hide(): void;
        reflowWrapper_: any;
        /**
         * Show and populate the flyout.
         * @param {!toolbox.FlyoutDefinition|string} flyoutDef Contents to display
         *     in the flyout. This is either an array of Nodes, a NodeList, a
         *     toolbox definition, or a string with the name of the dynamic category.
         */
        show(flyoutDef: toolbox.FlyoutDefinition | string): void;
        height_: number;
        width_: number;
        /**
         * Create the contents array and gaps array necessary to create the layout for
         * the flyout.
         * @param {!toolbox.FlyoutItemInfoArray} parsedContent The array
         *     of objects to show in the flyout.
         * @return {{contents:Array<Object>, gaps:Array<number>}} The list of contents
         *     and gaps needed to lay out the flyout.
         * @private
         */
        private createFlyoutInfo_;
        /**
         * Gets the flyout definition for the dynamic category.
         * @param {string} categoryName The name of the dynamic category.
         * @return {!toolbox.FlyoutDefinition} The definition of the
         *     flyout in one of its many forms.
         * @private
         */
        private getDynamicCategoryContents_;
        /**
         * Creates a flyout button or a flyout label.
         * @param {!toolbox.ButtonOrLabelInfo} btnInfo
         *    The object holding information about a button or a label.
         * @param {boolean} isLabel True if the button is a label, false otherwise.
         * @return {!FlyoutButton} The object used to display the button in the
         *    flyout.
         * @private
         */
        private createButton_;
        /**
         * Create a block from the xml and permanently disable any blocks that were
         * defined as disabled.
         * @param {!toolbox.BlockInfo} blockInfo The info of the block.
         * @return {!BlockSvg} The block created from the blockInfo.
         * @private
         */
        private createFlyoutBlock_;
        /**
         * Returns a block from the array of recycled blocks with the given type, or
         * undefined if one cannot be found.
         * @param {string} blockType The type of the block to try to recycle.
         * @return {(!BlockSvg|undefined)} The recycled block, or undefined if
         *     one could not be recycled.
         * @private
         */
        private getRecycledBlock_;
        /**
         * Adds a gap in the flyout based on block info.
         * @param {!toolbox.BlockInfo} blockInfo Information about a block.
         * @param {!Array<number>} gaps The list of gaps between items in the flyout.
         * @param {number} defaultGap The default gap between one element and the next.
         * @private
         */
        private addBlockGap_;
        /**
         * Add the necessary gap in the flyout for a separator.
         * @param {!toolbox.SeparatorInfo} sepInfo The object holding
         *    information about a separator.
         * @param {!Array<number>} gaps The list gaps between items in the flyout.
         * @param {number} defaultGap The default gap between the button and next
         *     element.
         * @private
         */
        private addSeparatorGap_;
        /**
         * Delete blocks, mats and buttons from a previous showing of the flyout.
         * @private
         */
        private clearOldBlocks_;
        /**
         * Empties all of the recycled blocks, properly disposing of them.
         * @private
         */
        private emptyRecycledBlocks_;
        /**
         * Returns whether the given block can be recycled or not.
         * @param {!BlockSvg} _block The block to check for recyclability.
         * @return {boolean} True if the block can be recycled. False otherwise.
         * @protected
         */
        protected blockIsRecyclable_(_block: BlockSvg): boolean;
        /**
         * Puts a previously created block into the recycle bin and moves it to the
         * top of the workspace. Used during large workspace swaps to limit the number
         * of new DOM elements we need to create.
         * @param {!BlockSvg} block The block to recycle.
         * @private
         */
        private recycleBlock_;
        /**
         * Add listeners to a block that has been added to the flyout.
         * @param {!SVGElement} root The root node of the SVG group the block is in.
         * @param {!BlockSvg} block The block to add listeners for.
         * @param {!SVGElement} rect The invisible rectangle under the block that acts
         *     as a mat for that block.
         * @protected
         */
        protected addBlockListeners_(root: SVGElement, block: BlockSvg, rect: SVGElement): void;
        /**
         * Handle a mouse-down on an SVG block in a non-closing flyout.
         * @param {!BlockSvg} block The flyout block to copy.
         * @return {!Function} Function to call when block is clicked.
         * @private
         */
        private blockMouseDown_;
        /**
         * Mouse down on the flyout background.  Start a vertical scroll drag.
         * @param {!Event} e Mouse down event.
         * @private
         */
        private onMouseDown_;
        /**
         * Does this flyout allow you to create a new instance of the given block?
         * Used for deciding if a block can be "dragged out of" the flyout.
         * @param {!BlockSvg} block The block to copy from the flyout.
         * @return {boolean} True if you can create a new instance of the block, false
         *    otherwise.
         * @package
         */
        isBlockCreatable_(block: BlockSvg): boolean;
        /**
         * Create a copy of this block on the workspace.
         * @param {!BlockSvg} originalBlock The block to copy from the flyout.
         * @return {!BlockSvg} The newly created block.
         * @throws {Error} if something went wrong with deserialization.
         * @package
         */
        createBlock(originalBlock: BlockSvg): BlockSvg;
        /**
         * Initialize the given button: move it to the correct location,
         * add listeners, etc.
         * @param {!FlyoutButton} button The button to initialize and place.
         * @param {number} x The x position of the cursor during this layout pass.
         * @param {number} y The y position of the cursor during this layout pass.
         * @protected
         */
        protected initFlyoutButton_(button: FlyoutButton, x: number, y: number): void;
        /**
         * Create and place a rectangle corresponding to the given block.
         * @param {!BlockSvg} block The block to associate the rect to.
         * @param {number} x The x position of the cursor during this layout pass.
         * @param {number} y The y position of the cursor during this layout pass.
         * @param {!{height: number, width: number}} blockHW The height and width of the
         *     block.
         * @param {number} index The index into the mats list where this rect should be
         *     placed.
         * @return {!SVGElement} Newly created SVG element for the rectangle behind the
         *     block.
         * @protected
         */
        protected createRect_(block: BlockSvg, x: number, y: number, blockHW: {
            height: number;
            width: number;
        }, index: number): SVGElement;
        /**
         * Move a rectangle to sit exactly behind a block, taking into account tabs,
         * hats, and any other protrusions we invent.
         * @param {!SVGElement} rect The rectangle to move directly behind the block.
         * @param {!BlockSvg} block The block the rectangle should be behind.
         * @protected
         */
        protected moveRectToBlock_(rect: SVGElement, block: BlockSvg): void;
        /**
         * Filter the blocks on the flyout to disable the ones that are above the
         * capacity limit.  For instance, if the user may only place two more blocks on
         * the workspace, an "a + b" block that has two shadow blocks would be disabled.
         * @private
         */
        private filterForCapacity_;
        /**
         * Reflow blocks and their mats.
         */
        reflow(): void;
        /**
         * @return {boolean} True if this flyout may be scrolled with a scrollbar or by
         *     dragging.
         * @package
         */
        isScrollable(): boolean;
        /**
         * Copy a block from the flyout to the workspace and position it correctly.
         * @param {!BlockSvg} oldBlock The flyout block to copy.
         * @return {!BlockSvg} The new block in the main workspace.
         * @private
         */
        private placeNewBlock_;
        /**
         * Positions a block on the target workspace.
         * @param {!BlockSvg} oldBlock The flyout block being copied.
         * @param {!BlockSvg} block The block to posiiton.
         * @private
         */
        private positionNewBlock_;
        /**
         * Does the flyout automatically close when a block is created?
         * @type {boolean}
         */
        autoClose: boolean;
        /**
         * Corner radius of the flyout background.
         * @type {number}
         * @const
         */
        CORNER_RADIUS: number;
        /**
         * Margin around the edges of the blocks in the flyout.
         * @type {number}
         * @const
         */
        MARGIN: number;
        /**
         * Gap between items in horizontal flyouts. Can be overridden with the "sep"
         * element.
         * @const {number}
         */
        GAP_X: number;
        /**
         * Gap between items in vertical flyouts. Can be overridden with the "sep"
         * element.
         * @const {number}
         */
        GAP_Y: number;
        /**
         * Top/bottom padding between scrollbar and edge of flyout background.
         * @type {number}
         * @const
         */
        SCROLLBAR_MARGIN: number;
        /**
         * Range of a drag angle from a flyout considered "dragging toward workspace".
         * Drags that are within the bounds of this many degrees from the orthogonal
         * line to the flyout edge are considered to be "drags toward the workspace".
         * Example:
         * Flyout                                                  Edge   Workspace
         * [block] /  <-within this angle, drags "toward workspace" |
         * [block] ---- orthogonal to flyout boundary ----          |
         * [block] \                                                |
         * The angle is given in degrees from the orthogonal.
         *
         * This is used to know when to create a new block and when to scroll the
         * flyout. Setting it to 360 means that all drags create a new block.
         * @type {number}
         * @protected
         */
        protected dragAngleRange_: number;
    }
    import { WorkspaceSvg } from "workspace_svg";
    import { FlyoutButton } from "flyout_button";
    import { Svg } from "utils/svg";
    import * as toolbox from "utils/toolbox";
    import { BlockSvg } from "block_svg";
    import { Options } from "options";
}
declare module "generator" {
    export class Generator {
        /**
         * Class for a code generator that translates the blocks into a language.
         * @param {string} name Language name of this generator.
         * @constructor
         * @alias Blockly.Generator
         */
        constructor(name: string);
        name_: string;
        FUNCTION_NAME_PLACEHOLDER_REGEXP_: RegExp;
        /**
         * Generate code for all blocks in the workspace to the specified language.
         * @param {!Workspace=} workspace Workspace to generate code from.
         * @return {string} Generated code.
         */
        workspaceToCode(workspace?: Workspace | undefined): string;
        /**
         * Prepend a common prefix onto each line of code.
         * Intended for indenting code or adding comment markers.
         * @param {string} text The lines of code.
         * @param {string} prefix The common prefix.
         * @return {string} The prefixed lines of code.
         */
        prefixLines(text: string, prefix: string): string;
        /**
         * Recursively spider a tree of blocks, returning all their comments.
         * @param {!Block} block The block from which to start spidering.
         * @return {string} Concatenated list of comments.
         */
        allNestedComments(block: Block): string;
        /**
         * Generate code for the specified block (and attached blocks).
         * The generator must be initialized before calling this function.
         * @param {Block} block The block to generate code for.
         * @param {boolean=} opt_thisOnly True to generate code for only this statement.
         * @return {string|!Array} For statement blocks, the generated code.
         *     For value blocks, an array containing the generated code and an
         *     operator order value.  Returns '' if block is null.
         */
        blockToCode(block: Block, opt_thisOnly?: boolean | undefined): string | any[];
        /**
         * Generate code representing the specified value input.
         * @param {!Block} block The block containing the input.
         * @param {string} name The name of the input.
         * @param {number} outerOrder The maximum binding strength (minimum order value)
         *     of any operators adjacent to "block".
         * @return {string} Generated code or '' if no blocks are connected or the
         *     specified input does not exist.
         */
        valueToCode(block: Block, name: string, outerOrder: number): string;
        /**
         * Generate a code string representing the blocks attached to the named
         * statement input. Indent the code.
         * This is mainly used in generators. When trying to generate code to evaluate
         * look at using workspaceToCode or blockToCode.
         * @param {!Block} block The block containing the input.
         * @param {string} name The name of the input.
         * @return {string} Generated code or '' if no blocks are connected.
         */
        statementToCode(block: Block, name: string): string;
        /**
         * Add an infinite loop trap to the contents of a loop.
         * Add statement suffix at the start of the loop block (right after the loop
         * statement executes), and a statement prefix to the end of the loop block
         * (right before the loop statement executes).
         * @param {string} branch Code for loop contents.
         * @param {!Block} block Enclosing block.
         * @return {string} Loop contents, with infinite loop trap added.
         */
        addLoopTrap(branch: string, block: Block): string;
        /**
         * Inject a block ID into a message to replace '%1'.
         * Used for STATEMENT_PREFIX, STATEMENT_SUFFIX, and INFINITE_LOOP_TRAP.
         * @param {string} msg Code snippet with '%1'.
         * @param {!Block} block Block which has an ID.
         * @return {string} Code snippet with ID.
         */
        injectId(msg: string, block: Block): string;
        /**
         * Add one or more words to the list of reserved words for this language.
         * @param {string} words Comma-separated list of words to add to the list.
         *     No spaces.  Duplicates are ok.
         */
        addReservedWords(words: string): void;
        /**
         * Define a developer-defined function (not a user-defined procedure) to be
         * included in the generated code.  Used for creating private helper functions.
         * The first time this is called with a given desiredName, the code is
         * saved and an actual name is generated.  Subsequent calls with the
         * same desiredName have no effect but have the same return value.
         *
         * It is up to the caller to make sure the same desiredName is not
         * used for different helper functions (e.g. use "colorRandom" and
         * "listRandom", not "random").  There is no danger of colliding with reserved
         * words, or user-defined variable or procedure names.
         *
         * The code gets output when Generator.finish() is called.
         *
         * @param {string} desiredName The desired name of the function
         *     (e.g. mathIsPrime).
         * @param {!Array<string>} code A list of statements.  Use '  ' for indents.
         * @return {string} The actual name of the new function.  This may differ
         *     from desiredName if the former has already been taken by the user.
         * @protected
         */
        protected provideFunction_(desiredName: string, code: Array<string>): string;
        /**
         * Hook for code to run before code generation starts.
         * Subclasses may override this, e.g. to initialise the database of variable
         * names.
         * @param {!Workspace} _workspace Workspace to generate code from.
         */
        init(_workspace: Workspace): void;
        definitions_: any | undefined;
        functionNames_: any | undefined;
        /**
         * Common tasks for generating code from blocks.  This is called from
         * blockToCode and is called on every block, not just top level blocks.
         * Subclasses may override this, e.g. to generate code for statements following
         * the block, or to handle comments for the specified block and any connected
         * value blocks.
         * @param {!Block} _block The current block.
         * @param {string} code The code created for this block.
         * @param {boolean=} _opt_thisOnly True to generate code for only this
         *     statement.
         * @return {string} Code with comments and subsequent blocks added.
         * @protected
         */
        protected scrub_(_block: Block, code: string, _opt_thisOnly?: boolean | undefined): string;
        /**
         * Hook for code to run at end of code generation.
         * Subclasses may override this, e.g. to prepend the generated code with import
         * statements or variable definitions.
         * @param {string} code Generated code.
         * @return {string} Completed code.
         */
        finish(code: string): string;
        /**
         * Naked values are top-level blocks with outputs that aren't plugged into
         * anything.
         * Subclasses may override this, e.g. if their language does not allow
         * naked values.
         * @param {string} line Line of generated code.
         * @return {string} Legal line of code.
         */
        scrubNakedValue(line: string): string;
        /**
         * Arbitrary code to inject into locations that risk causing infinite loops.
         * Any instances of '%1' will be replaced by the block ID that failed.
         * E.g. '  checkTimeout(%1);\n'
         * @type {?string}
         */
        INFINITE_LOOP_TRAP: string | null;
        /**
         * Arbitrary code to inject before every statement.
         * Any instances of '%1' will be replaced by the block ID of the statement.
         * E.g. 'highlight(%1);\n'
         * @type {?string}
         */
        STATEMENT_PREFIX: string | null;
        /**
         * Arbitrary code to inject after every statement.
         * Any instances of '%1' will be replaced by the block ID of the statement.
         * E.g. 'highlight(%1);\n'
         * @type {?string}
         */
        STATEMENT_SUFFIX: string | null;
        /**
         * The method of indenting.  Defaults to two spaces, but language generators
         * may override this to increase indent or change to tabs.
         * @type {string}
         */
        INDENT: string;
        /**
         * Maximum length for a comment before wrapping.  Does not account for
         * indenting level.
         * @type {number}
         */
        COMMENT_WRAP: number;
        /**
         * List of outer-inner pairings that do NOT require parentheses.
         * @type {!Array<!Array<number>>}
         */
        ORDER_OVERRIDES: Array<Array<number>>;
        /**
         * Whether the init method has been called.
         * Generators that set this flag to false after creation and true in init
         * will cause blockToCode to emit a warning if the generator has not been
         * initialized. If this flag is untouched, it will have no effect.
         * @type {?boolean}
         */
        isInitialized: boolean | null;
        /**
         * Comma-separated list of reserved words.
         * @type {string}
         * @protected
         */
        protected RESERVED_WORDS_: string;
        /**
         * This is used as a placeholder in functions defined using
         * Generator.provideFunction_.  It must not be legal code that could
         * legitimately appear in a function definition (or comment), and it must
         * not confuse the regular expression parser.
         * @type {string}
         * @protected
         */
        protected FUNCTION_NAME_PLACEHOLDER_: string;
        /**
         * A database of variable and procedure names.
         * @type {!Names|undefined}
         * @protected
         */
        protected nameDB_: Names | undefined;
    }
    import { Workspace } from "workspace";
    import { Block } from "block";
    import { Names } from "names";
}
declare module "flyout_horizontal" {
    export class HorizontalFlyout {
        /**
         * Class for a flyout.
         * @param {!Options} workspaceOptions Dictionary of options for the
         *     workspace.
         * @extends {Flyout}
         * @constructor
         * @alias Blockly.HorizontalFlyout
         */
        constructor(workspaceOptions: Options);
        horizontalLayout: boolean;
        /**
         * Sets the translation of the flyout to match the scrollbars.
         * @param {!{x:number,y:number}} xyRatio Contains a y property which is a float
         *     between 0 and 1 specifying the degree of scrolling and a
         *     similar x property.
         * @protected
         */
        protected setMetrics_(xyRatio: {
            x: number;
            y: number;
        }): void;
        /**
         * Calculates the x coordinate for the flyout position.
         * @return {number} X coordinate.
         */
        getX(): number;
        /**
         * Calculates the y coordinate for the flyout position.
         * @return {number} Y coordinate.
         */
        getY(): number;
        /**
         * Move the flyout to the edge of the workspace.
         */
        position(): void;
        width_: any;
        /**
         * Create and set the path for the visible boundaries of the flyout.
         * @param {number} width The width of the flyout, not including the
         *     rounded corners.
         * @param {number} height The height of the flyout, not including
         *     rounded corners.
         * @private
         */
        private setBackgroundPath_;
        /**
         * Scroll the flyout to the top.
         */
        scrollToStart(): void;
        /**
         * Scroll the flyout.
         * @param {!Event} e Mouse wheel scroll event.
         * @protected
         */
        protected wheel_(e: Event): void;
        /**
         * Lay out the blocks in the flyout.
         * @param {!Array<!Object>} contents The blocks and buttons to lay out.
         * @param {!Array<number>} gaps The visible gaps between blocks.
         * @protected
         */
        protected layout_(contents: Array<any>, gaps: Array<number>): void;
        /**
         * Determine if a drag delta is toward the workspace, based on the position
         * and orientation of the flyout. This is used in determineDragIntention_ to
         * determine if a new block should be created or if the flyout should scroll.
         * @param {!Coordinate} currentDragDeltaXY How far the pointer has
         *     moved from the position at mouse down, in pixel units.
         * @return {boolean} True if the drag is toward the workspace.
         * @package
         */
        isDragTowardWorkspace(currentDragDeltaXY: Coordinate): boolean;
        /**
         * Returns the bounding rectangle of the drag target area in pixel units
         * relative to viewport.
         * @return {?Rect} The component's bounding box. Null if drag
         *   target area should be ignored.
         */
        getClientRect(): Rect | null;
        /**
         * Compute height of flyout.  toolbox.Position mat under each block.
         * For RTL: Lay out the blocks right-aligned.
         * @protected
         */
        protected reflowInternal_(): void;
        height_: any;
    }
    import { Coordinate } from "utils/coordinate";
    import { Rect } from "utils/rect";
    import { Options } from "options";
}
declare module "interfaces/i_styleable" {
    /**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * @fileoverview The interface for an object that a style can be added to.
     */
    /**
     * The interface for an object that a style can be added to.
     * @namespace Blockly.IStyleable
     */
    /**
     * Interface for an object that a style can be added to.
     * @interface
     * @alias Blockly.IStyleable
     */
    export class IStyleable {
    }
}
declare module "toolbox/toolbox" {
    export class Toolbox extends DeleteArea {
        /**
         * Class for a Toolbox.
         * Creates the toolbox's DOM.
         * @param {!WorkspaceSvg} workspace The workspace in which to create new
         *     blocks.
         * @constructor
         * @implements {IAutoHideable}
         * @implements {IKeyboardAccessible}
         * @implements {IStyleable}
         * @implements {IToolbox}
         * @extends {DeleteArea}
         * @alias Blockly.Toolbox
         */
        constructor(workspace: WorkspaceSvg);
        /**
         * The workspace this toolbox is on.
         * @type {!WorkspaceSvg}
         * @protected
         */
        protected workspace_: WorkspaceSvg;
        /**
         * The unique id for this component that is used to register with the
         * ComponentManager.
         * @type {string}
         */
        id: string;
        /**
         * The JSON describing the contents of this toolbox.
         * @type {!toolbox.ToolboxInfo}
         * @protected
         */
        protected toolboxDef_: toolbox.ToolboxInfo;
        /**
         * Whether the toolbox should be laid out horizontally.
         * @type {boolean}
         * @private
         */
        private horizontalLayout_;
        /**
         * The html container for the toolbox.
         * @type {?Element}
         */
        HtmlDiv: Element | null;
        /**
         * The html container for the contents of a toolbox.
         * @type {?Element}
         * @protected
         */
        protected contentsDiv_: Element | null;
        /**
         * Whether the Toolbox is visible.
         * @type {boolean}
         * @protected
         */
        protected isVisible_: boolean;
        /**
         * The list of items in the toolbox.
         * @type {!Array<!IToolboxItem>}
         * @protected
         */
        protected contents_: Array<IToolboxItem>;
        /**
         * The width of the toolbox.
         * @type {number}
         * @protected
         */
        protected width_: number;
        /**
         * The height of the toolbox.
         * @type {number}
         * @protected
         */
        protected height_: number;
        /**
         * Is RTL vs LTR.
         * @type {boolean}
         */
        RTL: boolean;
        /**
         * The flyout for the toolbox.
         * @type {?IFlyout}
         * @private
         */
        private flyout_;
        /**
         * A map from toolbox item IDs to toolbox items.
         * @type {!Object<string, !IToolboxItem>}
         * @protected
         */
        protected contentMap_: {
            [x: string]: IToolboxItem;
        };
        /**
         * Position of the toolbox and flyout relative to the workspace.
         * @type {!toolbox.Position}
         */
        toolboxPosition: toolbox.Position;
        /**
         * The currently selected item.
         * @type {?ISelectableToolboxItem}
         * @protected
         */
        protected selectedItem_: ISelectableToolboxItem | null;
        /**
         * The previously selected item.
         * @type {?ISelectableToolboxItem}
         * @protected
         */
        protected previouslySelectedItem_: ISelectableToolboxItem | null;
        /**
         * Array holding info needed to unbind event handlers.
         * Used for disposing.
         * Ex: [[node, name, func], [node, name, func]].
         * @type {!Array<!browserEvents.Data>}
         * @protected
         */
        protected boundEvents_: Array<any[][]>;
        /**
         * Handles the given keyboard shortcut.
         * @param {!ShortcutRegistry.KeyboardShortcut} _shortcut The shortcut to be
         *     handled.
         * @return {boolean} True if the shortcut has been handled, false otherwise.
         * @public
         */
        public onShortcut(_shortcut: ShortcutRegistry.KeyboardShortcut): boolean;
        /**
         * Initializes the toolbox
         * @public
         */
        public init(): void;
        /**
         * Creates the DOM for the toolbox.
         * @param {!WorkspaceSvg} workspace The workspace this toolbox is on.
         * @return {!Element} The HTML container for the toolbox.
         * @protected
         */
        protected createDom_(workspace: WorkspaceSvg): Element;
        /**
         * Creates the container div for the toolbox.
         * @return {!Element} The HTML container for the toolbox.
         * @protected
         */
        protected createContainer_(): Element;
        /**
         * Creates the container for all the contents in the toolbox.
         * @return {!Element} The HTML container for the toolbox contents.
         * @protected
         */
        protected createContentsContainer_(): Element;
        /**
         * Adds event listeners to the toolbox container div.
         * @param {!Element} container The HTML container for the toolbox.
         * @param {!Element} contentsContainer The HTML container for the contents
         *     of the toolbox.
         * @protected
         */
        protected attachEvents_(container: Element, contentsContainer: Element): void;
        /**
         * Handles on click events for when the toolbox or toolbox items are clicked.
         * @param {!Event} e Click event to handle.
         * @protected
         */
        protected onClick_(e: Event): void;
        /**
         * Handles key down events for the toolbox.
         * @param {!KeyboardEvent} e The key down event.
         * @protected
         */
        protected onKeyDown_(e: KeyboardEvent): void;
        /**
         * Creates the flyout based on the toolbox layout.
         * @return {!IFlyout} The flyout for the toolbox.
         * @throws {Error} If missing a require for `Blockly.HorizontalFlyout`,
         *     `Blockly.VerticalFlyout`, and no flyout plugin is specified.
         * @protected
         */
        protected createFlyout_(): IFlyout;
        /**
         * Fills the toolbox with new toolbox items and removes any old contents.
         * @param {!toolbox.ToolboxInfo} toolboxDef Object holding information
         *     for creating a toolbox.
         * @package
         */
        render(toolboxDef: toolbox.ToolboxInfo): void;
        /**
         * Adds all the toolbox items to the toolbox.
         * @param {!Array<!toolbox.ToolboxItemInfo>} toolboxDef Array
         *     holding objects containing information on the contents of the toolbox.
         * @protected
         */
        protected renderContents_(toolboxDef: Array<toolbox.ToolboxItemInfo>): void;
        /**
         * Creates and renders the toolbox item.
         * @param {!toolbox.ToolboxItemInfo} toolboxItemDef Any information
         *    that can be used to create an item in the toolbox.
         * @param {!DocumentFragment} fragment The document fragment to add the child
         *     toolbox elements to.
         * @private
         */
        private createToolboxItem_;
        /**
         * Adds an item to the toolbox.
         * @param {!IToolboxItem} toolboxItem The item in the toolbox.
         * @protected
         */
        protected addToolboxItem_(toolboxItem: IToolboxItem): void;
        /**
         * Gets the items in the toolbox.
         * @return {!Array<!IToolboxItem>} The list of items in the toolbox.
         * @public
         */
        public getToolboxItems(): Array<IToolboxItem>;
        /**
         * Adds a style on the toolbox. Usually used to change the cursor.
         * @param {string} style The name of the class to add.
         * @package
         */
        addStyle(style: string): void;
        /**
         * Removes a style from the toolbox. Usually used to change the cursor.
         * @param {string} style The name of the class to remove.
         * @package
         */
        removeStyle(style: string): void;
        /**
         * Returns the bounding rectangle of the drag target area in pixel units
         * relative to viewport.
         * @return {?Rect} The component's bounding box. Null if drag
         *   target area should be ignored.
         */
        getClientRect(): Rect | null;
        /**
         * Returns whether the provided block or bubble would be deleted if dropped on
         * this area.
         * This method should check if the element is deletable and is always called
         * before onDragEnter/onDragOver/onDragExit.
         * @param {!IDraggable} element The block or bubble currently being
         *   dragged.
         * @param {boolean} _couldConnect Whether the element could could connect to
         *     another.
         * @return {boolean} Whether the element provided would be deleted if dropped on
         *     this area.
         * @override
         */
        override wouldDelete(element: IDraggable, _couldConnect: boolean): boolean;
        /**
         * Handles when a cursor with a block or bubble enters this drag target.
         * @param {!IDraggable} _dragElement The block or bubble currently being
         *   dragged.
         * @override
         */
        override onDragEnter(_dragElement: IDraggable): void;
        /**
         * Handles when a cursor with a block or bubble exits this drag target.
         * @param {!IDraggable} _dragElement The block or bubble currently being
         *   dragged.
         * @override
         */
        override onDragExit(_dragElement: IDraggable): void;
        /**
         * Handles when a block or bubble is dropped on this component.
         * Should not handle delete here.
         * @param {!IDraggable} _dragElement The block or bubble currently being
         *   dragged.
         * @override
         */
        override onDrop(_dragElement: IDraggable): void;
        /**
         * Updates the internal wouldDelete_ state.
         * @param {boolean} wouldDelete The new value for the wouldDelete state.
         * @protected
         * @override
         */
        protected override updateWouldDelete_(wouldDelete: boolean): void;
        wouldDelete_: any;
        /**
         * Adds or removes the CSS style of the cursor over the toolbox based whether
         * the block or bubble over it is expected to be deleted if dropped (using the
         * internal this.wouldDelete_ property).
         * @param {boolean} addStyle Whether the style should be added or removed.
         * @protected
         */
        protected updateCursorDeleteStyle_(addStyle: boolean): void;
        /**
         * Gets the toolbox item with the given ID.
         * @param {string} id The ID of the toolbox item.
         * @return {?IToolboxItem} The toolbox item with the given ID, or null
         *     if no item exists.
         * @public
         */
        public getToolboxItemById(id: string): IToolboxItem | null;
        /**
         * Gets the width of the toolbox.
         * @return {number} The width of the toolbox.
         * @public
         */
        public getWidth(): number;
        /**
         * Gets the height of the toolbox.
         * @return {number} The width of the toolbox.
         * @public
         */
        public getHeight(): number;
        /**
         * Gets the toolbox flyout.
         * @return {?IFlyout} The toolbox flyout.
         * @public
         */
        public getFlyout(): IFlyout | null;
        /**
         * Gets the workspace for the toolbox.
         * @return {!WorkspaceSvg} The parent workspace for the toolbox.
         * @public
         */
        public getWorkspace(): WorkspaceSvg;
        /**
         * Gets the selected item.
         * @return {?ISelectableToolboxItem} The selected item, or null if no item is
         *     currently selected.
         * @public
         */
        public getSelectedItem(): ISelectableToolboxItem | null;
        /**
         * Gets the previously selected item.
         * @return {?ISelectableToolboxItem} The previously selected item, or null if no
         *     item was previously selected.
         * @public
         */
        public getPreviouslySelectedItem(): ISelectableToolboxItem | null;
        /**
         * Gets whether or not the toolbox is horizontal.
         * @return {boolean} True if the toolbox is horizontal, false if the toolbox is
         *     vertical.
         * @public
         */
        public isHorizontal(): boolean;
        /**
         * Positions the toolbox based on whether it is a horizontal toolbox and whether
         * the workspace is in rtl.
         * @public
         */
        public position(): void;
        /**
         * Handles resizing the toolbox when a toolbox item resizes.
         * @package
         */
        handleToolboxItemResize(): void;
        /**
         * Unhighlights any previously selected item.
         * @public
         */
        public clearSelection(): void;
        /**
         * Updates the category colors and background color of selected categories.
         * @package
         */
        refreshTheme(): void;
        /**
         * Updates the flyout's content without closing it.  Should be used in response
         * to a change in one of the dynamic categories, such as variables or
         * procedures.
         * @public
         */
        public refreshSelection(): void;
        /**
         * Shows or hides the toolbox.
         * @param {boolean} isVisible True if toolbox should be visible.
         * @public
         */
        public setVisible(isVisible: boolean): void;
        /**
         * Hides the component. Called in WorkspaceSvg.hideChaff.
         * @param {boolean} onlyClosePopups Whether only popups should be closed.
         *     Flyouts should not be closed if this is true.
         */
        autoHide(onlyClosePopups: boolean): void;
        /**
         * Sets the given item as selected.
         * No-op if the item is not selectable.
         * @param {?IToolboxItem} newItem The toolbox item to select.
         * @public
         */
        public setSelectedItem(newItem: IToolboxItem | null): void;
        /**
         * Decides whether the old item should be deselected.
         * @param {?ISelectableToolboxItem} oldItem The previously selected
         *     toolbox item.
         * @param {?ISelectableToolboxItem} newItem The newly selected toolbox
         *     item.
         * @return {boolean} True if the old item should be deselected, false otherwise.
         * @protected
         */
        protected shouldDeselectItem_(oldItem: ISelectableToolboxItem | null, newItem: ISelectableToolboxItem | null): boolean;
        /**
         * Decides whether the new item should be selected.
         * @param {?ISelectableToolboxItem} oldItem The previously selected
         *     toolbox item.
         * @param {?ISelectableToolboxItem} newItem The newly selected toolbox
         *     item.
         * @return {boolean} True if the new item should be selected, false otherwise.
         * @protected
         */
        protected shouldSelectItem_(oldItem: ISelectableToolboxItem | null, newItem: ISelectableToolboxItem | null): boolean;
        /**
         * Deselects the given item, marks it as unselected, and updates aria state.
         * @param {!ISelectableToolboxItem} item The previously selected
         *     toolbox item which should be deselected.
         * @protected
         */
        protected deselectItem_(item: ISelectableToolboxItem): void;
        /**
         * Selects the given item, marks it selected, and updates aria state.
         * @param {?ISelectableToolboxItem} oldItem The previously selected
         *     toolbox item.
         * @param {!ISelectableToolboxItem} newItem The newly selected toolbox
         *     item.
         * @protected
         */
        protected selectItem_(oldItem: ISelectableToolboxItem | null, newItem: ISelectableToolboxItem): void;
        /**
         * Selects the toolbox item by its position in the list of toolbox items.
         * @param {number} position The position of the item to select.
         * @public
         */
        public selectItemByPosition(position: number): void;
        /**
         * Decides whether to hide or show the flyout depending on the selected item.
         * @param {?ISelectableToolboxItem} oldItem The previously selected toolbox
         *     item.
         * @param {?ISelectableToolboxItem} newItem The newly selected toolbox item.
         * @protected
         */
        protected updateFlyout_(oldItem: ISelectableToolboxItem | null, newItem: ISelectableToolboxItem | null): void;
        /**
         * Emits an event when a new toolbox item is selected.
         * @param {?ISelectableToolboxItem} oldItem The previously selected
         *     toolbox item.
         * @param {?ISelectableToolboxItem} newItem The newly selected toolbox
         *     item.
         * @private
         */
        private fireSelectEvent_;
        /**
         * Closes the current item if it is expanded, or selects the parent.
         * @return {boolean} True if a parent category was selected, false otherwise.
         * @private
         */
        private selectParent_;
        /**
         * Selects the first child of the currently selected item, or nothing if the
         * toolbox item has no children.
         * @return {boolean} True if a child category was selected, false otherwise.
         * @private
         */
        private selectChild_;
        /**
         * Selects the next visible toolbox item.
         * @return {boolean} True if a next category was selected, false otherwise.
         * @private
         */
        private selectNext_;
        /**
         * Selects the previous visible toolbox item.
         * @return {boolean} True if a previous category was selected, false otherwise.
         * @private
         */
        private selectPrevious_;
        /**
         * Disposes of this toolbox.
         * @public
         */
        public dispose(): void;
    }
    import { WorkspaceSvg } from "workspace_svg";
    import * as toolbox from "utils/toolbox";
    import { IToolboxItem } from "interfaces/i_toolbox_item";
    import { ISelectableToolboxItem } from "interfaces/i_selectable_toolbox_item";
    import { ShortcutRegistry } from "shortcut_registry";
    import { IFlyout } from "interfaces/i_flyout";
    import { Rect } from "utils/rect";
    import { IDraggable } from "interfaces/i_draggable";
    import { DeleteArea } from "delete_area";
}
declare module "flyout_vertical" {
    export class VerticalFlyout {
        /**
         * Class for a flyout.
         * @param {!Options} workspaceOptions Dictionary of options for the
         *     workspace.
         * @extends {Flyout}
         * @constructor
         * @alias Blockly.VerticalFlyout
         */
        constructor(workspaceOptions: Options);
        /**
         * Sets the translation of the flyout to match the scrollbars.
         * @param {!{x:number,y:number}} xyRatio Contains a y property which is a float
         *     between 0 and 1 specifying the degree of scrolling and a
         *     similar x property.
         * @protected
         */
        protected setMetrics_(xyRatio: {
            x: number;
            y: number;
        }): void;
        /**
         * Calculates the x coordinate for the flyout position.
         * @return {number} X coordinate.
         */
        getX(): number;
        /**
         * Calculates the y coordinate for the flyout position.
         * @return {number} Y coordinate.
         */
        getY(): number;
        /**
         * Move the flyout to the edge of the workspace.
         */
        position(): void;
        height_: any;
        /**
         * Create and set the path for the visible boundaries of the flyout.
         * @param {number} width The width of the flyout, not including the
         *     rounded corners.
         * @param {number} height The height of the flyout, not including
         *     rounded corners.
         * @private
         */
        private setBackgroundPath_;
        /**
         * Scroll the flyout to the top.
         */
        scrollToStart(): void;
        /**
         * Scroll the flyout.
         * @param {!Event} e Mouse wheel scroll event.
         * @protected
         */
        protected wheel_(e: Event): void;
        /**
         * Lay out the blocks in the flyout.
         * @param {!Array<!Object>} contents The blocks and buttons to lay out.
         * @param {!Array<number>} gaps The visible gaps between blocks.
         * @protected
         */
        protected layout_(contents: Array<any>, gaps: Array<number>): void;
        /**
         * Determine if a drag delta is toward the workspace, based on the position
         * and orientation of the flyout. This is used in determineDragIntention_ to
         * determine if a new block should be created or if the flyout should scroll.
         * @param {!Coordinate} currentDragDeltaXY How far the pointer has
         *     moved from the position at mouse down, in pixel units.
         * @return {boolean} True if the drag is toward the workspace.
         * @package
         */
        isDragTowardWorkspace(currentDragDeltaXY: Coordinate): boolean;
        /**
         * Returns the bounding rectangle of the drag target area in pixel units
         * relative to viewport.
         * @return {?Rect} The component's bounding box. Null if drag
         *   target area should be ignored.
         */
        getClientRect(): Rect | null;
        /**
         * Compute width of flyout.  toolbox.Position mat under each block.
         * For RTL: Lay out the blocks and buttons to be right-aligned.
         * @protected
         */
        protected reflowInternal_(): void;
        width_: any;
    }
    export namespace VerticalFlyout {
        const registryName: string;
    }
    import { Coordinate } from "utils/coordinate";
    import { Rect } from "utils/rect";
    import { Options } from "options";
}
declare module "inject" {
    /**
     * Inject a Blockly editor into the specified container element (usually a div).
     * @param {Element|string} container Containing element, or its ID,
     *     or a CSS selector.
     * @param {BlocklyOptions=} opt_options Optional dictionary of options.
     * @return {!WorkspaceSvg} Newly created main workspace.
     * @alias Blockly.inject
     */
    export function inject(container: Element | string, opt_options?: BlocklyOptions | undefined): WorkspaceSvg;
    import { BlocklyOptions } from "blockly_options";
    import { WorkspaceSvg } from "workspace_svg";
}
declare module "blockly" {
    /**
     * Blockly core version.
     * This constant is overridden by the build script (npm run build) to the value
     * of the version in package.json. This is done by the Closure Compiler in the
     * buildCompressed gulp task.
     * For local builds, you can pass --define='Blockly.VERSION=X.Y.Z' to the
     * compiler to override this constant.
     * @define {string}
     * @alias Blockly.VERSION
     */
    export const VERSION: "uncompiled";
    /**
     * Returns the dimensions of the specified SVG image.
     * @param {!SVGElement} svg SVG image.
     * @return {!Size} Contains width and height properties.
     * @deprecated Use workspace.setCachedParentSvgSize. (2021 March 5)
     * @alias Blockly.svgSize
     */
    export const svgSize: (svg: SVGElement) => utils.Size;
    /**
     * Copy a block or workspace comment onto the local clipboard.
     * @param {!ICopyable} toCopy Block or Workspace Comment to be copied.
     * @package
     * @alias Blockly.copy
     */
    export const copy: (toCopy: ICopyable) => void;
    /**
     * Paste a block or workspace comment on to the main workspace.
     * @return {boolean} True if the paste was successful, false otherwise.
     * @package
     * @alias Blockly.paste
     */
    export const paste: () => boolean;
    /**
     * Duplicate this block and its children, or a workspace comment.
     * @param {!ICopyable} toDuplicate Block or Workspace Comment to be
     *     copied.
     * @package
     * @alias Blockly.duplicate
     */
    export const duplicate: (toDuplicate: ICopyable) => void;
    /**
     * Returns the main workspace.  Returns the last used main workspace (based on
     * focus).  Try not to use this function, particularly if there are multiple
     * Blockly instances on a page.
     * @return {!Workspace} The main workspace.
     * @alias Blockly.getMainWorkspace
     */
    export const getMainWorkspace: () => Workspace;
    /**
     * Define blocks from an array of JSON block definitions, as might be generated
     * by the Blockly Developer Tools.
     * @param {!Array<!Object>} jsonArray An array of JSON block definitions.
     * @alias Blockly.defineBlocksWithJsonArray
     */
    export const defineBlocksWithJsonArray: (jsonArray: any[]) => void;
    /**
     * Set the parent container.  This is the container element that the WidgetDiv,
     * DropDownDiv, and Tooltip are rendered into the first time `Blockly.inject`
     * is called.
     * This method is a NOP if called after the first ``Blockly.inject``.
     * @param {!Element} container The container element.
     * @alias Blockly.setParentContainer
     */
    export const setParentContainer: (newParent: Element) => void;
    /** Aliases. */
    /**
     * @see color.hueToHex
     * @deprecated Use Blockly.utils.color.hueToHex (September 2021).
     * @alias Blockly.hueToHex
     */
    export const hueToHex: (hue: number) => string;
    /**
     * @see browserEvents.bind
     * @alias Blockly.bindEvent_
     */
    export const bindEvent_: (node: EventTarget, name: string, thisObject: any, func: Function) => any[][];
    /**
     * @see browserEvents.unbind
     * @alias Blockly.unbindEvent_
     */
    export const unbindEvent_: (bindData: any[][]) => Function;
    /**
     * @see browserEvents.conditionalBind
     * @alias Blockly.bindEventWithChecks_
     */
    export const bindEventWithChecks_: (node: EventTarget, name: string, thisObject: any, func: Function, opt_noCaptureIdentifier?: boolean, opt_noPreventDefault?: boolean) => any[][];
    /**
     * @see constants.ALIGN.LEFT
     * @alias Blockly.ALIGN_LEFT
     */
    export const ALIGN_LEFT: any;
    /**
     * @see constants.ALIGN.CENTRE
     * @alias Blockly.ALIGN_CENTRE
     */
    export const ALIGN_CENTRE: any;
    /**
     * @see constants.ALIGN.RIGHT
     * @alias Blockly.ALIGN_RIGHT
     */
    export const ALIGN_RIGHT: any;
    /**
     * @see common.svgResize
     */
    export const svgResize: (workspace: WorkspaceSvg) => void;
    /**
     * Aliases for constants used for connection and input types.
     */
    /**
     * @see ConnectionType.INPUT_VALUE
     * @alias Blockly.INPUT_VALUE
     */
    export const INPUT_VALUE: number;
    /**
     * @see ConnectionType.OUTPUT_VALUE
     * @alias Blockly.OUTPUT_VALUE
     */
    export const OUTPUT_VALUE: number;
    /**
     * @see ConnectionType.NEXT_STATEMENT
     * @alias Blockly.NEXT_STATEMENT
     */
    export const NEXT_STATEMENT: number;
    /**
     * @see ConnectionType.PREVIOUS_STATEMENT
     * @alias Blockly.PREVIOUS_STATEMENT
     */
    export const PREVIOUS_STATEMENT: number;
    /**
     * @see inputTypes.DUMMY_INPUT
     * @alias Blockly.DUMMY_INPUT
     */
    export const DUMMY_INPUT: number;
    /**
     * Aliases for toolbox positions.
     */
    /**
     * @see toolbox.Position.TOP
     * @alias Blockly.TOOLBOX_AT_TOP
     */
    export const TOOLBOX_AT_TOP: number;
    /**
     * @see toolbox.Position.BOTTOM
     * @alias Blockly.TOOLBOX_AT_BOTTOM
     */
    export const TOOLBOX_AT_BOTTOM: number;
    /**
     * @see toolbox.Position.LEFT
     * @alias Blockly.TOOLBOX_AT_LEFT
     */
    export const TOOLBOX_AT_LEFT: number;
    /**
     * @see toolbox.Position.RIGHT
     * @alias Blockly.TOOLBOX_AT_RIGHT
     */
    export const TOOLBOX_AT_RIGHT: number;
    export const LINE_MODE_MULTIPLIER: number;
    export const PAGE_MODE_MULTIPLIER: number;
    export const DRAG_RADIUS: 5;
    export const FLYOUT_DRAG_RADIUS: 10;
    export const SNAP_RADIUS: 28;
    export const CONNECTING_SNAP_RADIUS: 28;
    export const CURRENT_CONNECTION_PREFERENCE: 8;
    export const BUMP_DELAY: 250;
    export const BUMP_RANDOMNESS: 10;
    export const COLLAPSE_CHARS: 30;
    export const LONGPRESS: 750;
    export const SOUND_LIMIT: 100;
    export const DRAG_STACK: true;
    export const HSV_SATURATION: 0.45;
    export const HSV_VALUE: 0.65;
    export const SPRITE: {
        width: number;
        height: number;
        url: string;
    };
    export const DRAG_NONE: 0;
    export const DRAG_STICKY: 1;
    export const DRAG_BEGIN: 1;
    export const DRAG_FREE: 2;
    export const OPPOSITE_TYPE: any[];
    export const VARIABLE_CATEGORY_NAME: "VARIABLE";
    export const VARIABLE_DYNAMIC_CATEGORY_NAME: "VARIABLE_DYNAMIC";
    export const PROCEDURE_CATEGORY_NAME: "PROCEDURE";
    export const RENAME_VARIABLE_ID: "RENAME_VARIABLE_ID";
    export const DELETE_VARIABLE_ID: "DELETE_VARIABLE_ID";
    export const COLLAPSED_INPUT_NAME: any;
    export const COLLAPSED_FIELD_NAME: any;
    import * as utils from "utils";
    /**
     * Size the workspace when the contents change.  This also updates
     * scrollbars accordingly.
     * @param {!WorkspaceSvg} workspace The workspace to resize.
     * @deprecated
     * @alias Blockly.resizeSvgContents
     */
    function resizeSvgContentsLocal(workspace: WorkspaceSvg): void;
    import { ICopyable } from "interfaces/i_copyable";
    /**
     * Close tooltips, context menus, dropdown selections, etc.
     * @deprecated Use Blockly.common.getMainWorkspace().hideChaff()
     * @param {boolean=} opt_onlyClosePopups Whether only popups should be closed.
     * @alias Blockly.hideChaff
     */
    export function hideChaff(opt_onlyClosePopups?: boolean | undefined): void;
    import { Workspace } from "workspace";
    /**
     * Is the given string a number (includes negative and decimals).
     * @param {string} str Input string.
     * @return {boolean} True if number, false otherwise.
     * @deprecated
     * @alias Blockly.isNumber
     */
    export function isNumber(str: string): boolean;
    import { WorkspaceSvg } from "workspace_svg";
    import { ASTNode } from "keyboard_nav/ast_node";
    import { BasicCursor } from "keyboard_nav/basic_cursor";
    import { Block } from "block";
    import { BlocklyOptions } from "blockly_options";
    import { BlockDragger } from "block_dragger";
    import { BlockDragSurfaceSvg } from "block_drag_surface";
    import { BlockSvg } from "block_svg";
    import { Blocks } from "blocks";
    import { Bubble } from "bubble";
    import { BubbleDragger } from "bubble_dragger";
    import { CollapsibleToolboxCategory } from "toolbox/collapsible_category";
    import { Comment } from "comment";
    import { ComponentManager } from "component_manager";
    import { Connection } from "connection";
    import { ConnectionType } from "connection_type";
    import { ConnectionChecker } from "connection_checker";
    import { ConnectionDB } from "connection_db";
    import * as ContextMenu from "contextmenu";
    import * as ContextMenuItems from "contextmenu_items";
    import { ContextMenuRegistry } from "contextmenu_registry";
    import * as Css from "css";
    import { Cursor } from "keyboard_nav/cursor";
    import { DeleteArea } from "delete_area";
    import { DragTarget } from "drag_target";
    import { DropDownDiv } from "dropdowndiv";
    import * as Events from "events/events";
    import * as Extensions from "extensions";
    import { Field } from "field";
    import { FieldAngle } from "field_angle";
    import { FieldCheckbox } from "field_checkbox";
    import { FieldColor } from "field_color";
    import { FieldDropdown } from "field_dropdown";
    import { FieldImage } from "field_image";
    import { FieldLabel } from "field_label";
    import { FieldLabelSerializable } from "field_label_serializable";
    import { FieldMultilineInput } from "field_multilineinput";
    import { FieldNumber } from "field_number";
    import { FieldTextInput } from "field_textinput";
    import { FieldVariable } from "field_variable";
    import { Flyout } from "flyout_base";
    import { FlyoutButton } from "flyout_button";
    import { FlyoutMetricsManager } from "flyout_metrics_manager";
    import { Generator } from "generator";
    import { Gesture } from "gesture";
    import { Grid } from "grid";
    import { HorizontalFlyout } from "flyout_horizontal";
    import { IASTNodeLocation } from "interfaces/i_ast_node_location";
    import { IASTNodeLocationSvg } from "interfaces/i_ast_node_location_svg";
    import { IASTNodeLocationWithBlock } from "interfaces/i_ast_node_location_with_block";
    import { IAutoHideable } from "interfaces/i_autohideable";
    import { IBlockDragger } from "interfaces/i_block_dragger";
    import { IBoundedElement } from "interfaces/i_bounded_element";
    import { IBubble } from "interfaces/i_bubble";
    import { ICollapsibleToolboxItem } from "interfaces/i_collapsible_toolbox_item";
    import { IComponent } from "interfaces/i_component";
    import { IConnectionChecker } from "interfaces/i_connection_checker";
    import { IContextMenu } from "interfaces/i_contextmenu";
    import { Icon } from "icon";
    import { IDeletable } from "interfaces/i_deletable";
    import { IDeleteArea } from "interfaces/i_delete_area";
    import { IDragTarget } from "interfaces/i_drag_target";
    import { IDraggable } from "interfaces/i_draggable";
    import { IFlyout } from "interfaces/i_flyout";
    import { IKeyboardAccessible } from "interfaces/i_keyboard_accessible";
    import { IMetricsManager } from "interfaces/i_metrics_manager";
    import { IMovable } from "interfaces/i_movable";
    import { Input } from "input";
    import { InsertionMarkerManager } from "insertion_marker_manager";
    import { IPositionable } from "interfaces/i_positionable";
    import { IRegistrable } from "interfaces/i_registrable";
    import { IRegistrableField } from "interfaces/i_registrable_field";
    import { ISelectable } from "interfaces/i_selectable";
    import { ISelectableToolboxItem } from "interfaces/i_selectable_toolbox_item";
    import { IStyleable } from "interfaces/i_styleable";
    import { IToolbox } from "interfaces/i_toolbox";
    import { IToolboxItem } from "interfaces/i_toolbox_item";
    import { Marker } from "keyboard_nav/marker";
    import { MarkerManager } from "marker_manager";
    import { Menu } from "menu";
    import { MenuItem } from "menuitem";
    import { MetricsManager } from "metrics_manager";
    import { Mutator } from "mutator";
    import { Names } from "names";
    import { Options } from "options";
    import * as Procedures from "procedures";
    import { RenderedConnection } from "rendered_connection";
    import { Scrollbar } from "scrollbar";
    import { ScrollbarPair } from "scrollbar_pair";
    import * as ShortcutItems from "shortcut_items";
    import { ShortcutRegistry } from "shortcut_registry";
    import { TabNavigateCursor } from "keyboard_nav/tab_navigate_cursor";
    import { Theme } from "theme";
    import * as Themes from "theme/themes";
    import { ThemeManager } from "theme_manager";
    import { Toolbox } from "toolbox/toolbox";
    import { ToolboxCategory } from "toolbox/category";
    import { ToolboxItem } from "toolbox/toolbox_item";
    import { ToolboxSeparator } from "toolbox/separator";
    import * as Tooltip from "tooltip";
    import * as Touch from "touch";
    import { TouchGesture } from "touch_gesture";
    import { Trashcan } from "trashcan";
    import { VariableMap } from "variable_map";
    import { VariableModel } from "variable_model";
    import * as Variables from "variables";
    import * as VariablesDynamic from "variables_dynamic";
    import { VerticalFlyout } from "flyout_vertical";
    import { Warning } from "warning";
    import * as WidgetDiv from "widgetdiv";
    import { WorkspaceAudio } from "workspace_audio";
    import { WorkspaceComment } from "workspace_comment";
    import { WorkspaceCommentSvg } from "workspace_comment_svg";
    import { WorkspaceDragSurfaceSvg } from "workspace_drag_surface_svg";
    import { WorkspaceDragger } from "workspace_dragger";
    import * as Xml from "xml";
    import { ZoomControls } from "zoom_controls";
    import * as blockAnimations from "block_animations";
    import * as blockRendering from "renderers/common/block_rendering";
    import * as browserEvents from "browser_events";
    import * as bumpObjects from "bump_objects";
    import * as clipboard from "clipboard";
    import * as common from "common";
    import * as constants from "constants";
    import * as dialog from "dialog";
    import * as fieldRegistry from "field_registry";
    import * as geras from "renderers/geras/geras";
    import { inject } from "inject";
    import { inputTypes } from "input_types";
    import * as minimalist from "renderers/minimalist/minimalist";
    import * as registry from "registry";
    import * as thrasos from "renderers/thrasos/thrasos";
    import * as uiPosition from "positionable_helpers";
    import * as zelos from "renderers/zelos/zelos";
    export { resizeSvgContentsLocal as resizeSvgContents, ASTNode, BasicCursor, Block, BlocklyOptions, BlockDragger, BlockDragSurfaceSvg, BlockSvg, Blocks, Bubble, BubbleDragger, CollapsibleToolboxCategory, Comment, ComponentManager, Connection, ConnectionType, ConnectionChecker, ConnectionDB, ContextMenu, ContextMenuItems, ContextMenuRegistry, Css, Cursor, DeleteArea, DragTarget, DropDownDiv, Events, Extensions, Field, FieldAngle, FieldCheckbox, FieldColor, FieldDropdown, FieldImage, FieldLabel, FieldLabelSerializable, FieldMultilineInput, FieldNumber, FieldTextInput, FieldVariable, Flyout, FlyoutButton, FlyoutMetricsManager, Generator, Gesture, Grid, HorizontalFlyout, IASTNodeLocation, IASTNodeLocationSvg, IASTNodeLocationWithBlock, IAutoHideable, IBlockDragger, IBoundedElement, IBubble, ICollapsibleToolboxItem, IComponent, IConnectionChecker, IContextMenu, Icon, ICopyable, IDeletable, IDeleteArea, IDragTarget, IDraggable, IFlyout, IKeyboardAccessible, IMetricsManager, IMovable, Input, InsertionMarkerManager, IPositionable, IRegistrable, IRegistrableField, ISelectable, ISelectableToolboxItem, IStyleable, IToolbox, IToolboxItem, Marker, MarkerManager, Menu, MenuItem, MetricsManager, Mutator, Names, Options, Procedures, RenderedConnection, Scrollbar, ScrollbarPair, ShortcutItems, ShortcutRegistry, TabNavigateCursor, Theme, Themes, ThemeManager, Toolbox, ToolboxCategory, ToolboxItem, ToolboxSeparator, Tooltip, Touch, TouchGesture, Trashcan, VariableMap, VariableModel, Variables, VariablesDynamic, VerticalFlyout, Warning, WidgetDiv, Workspace, WorkspaceAudio, WorkspaceComment, WorkspaceCommentSvg, WorkspaceDragSurfaceSvg, WorkspaceDragger, WorkspaceSvg, Xml, ZoomControls, blockAnimations, blockRendering, browserEvents, bumpObjects, clipboard, common, ConnectionType as connectionTypes, constants, dialog, fieldRegistry, geras, inject, inputTypes, minimalist, registry, thrasos, uiPosition, utils, zelos };
}
declare module "serialization/variables" {
    /**
     * Represents the state of a given variable.
     */
    export type State = {
        name: string;
        id: string;
        type: (string | undefined);
    };
    /**
     * Represents the state of a given variable.
     * @typedef {{
     *   name: string,
     *   id: string,
     *   type: (string|undefined)
     * }}
     * @alias Blockly.serialization.variables.State
     */
    export let State: any;
}
declare module "serialization/workspaces" {
    /**
     * Returns the state of the workspace as a plain JavaScript object.
     * @param {!Workspace} workspace The workspace to serialize.
     * @return {!Object<string, *>} The serialized state of the workspace.
     * @alias Blockly.serialization.workspaces.save
     */
    export function save(workspace: Workspace): {
        [x: string]: any;
    };
    /**
     * Loads the variable represented by the given state into the given workspace.
     * @param {!Object<string, *>} state The state of the workspace to deserialize
     *     into the workspace.
     * @param {!Workspace} workspace The workspace to add the new state to.
     * @param {{recordUndo: (boolean|undefined)}=} param1
     *     recordUndo: If true, events triggered by this function will be undo-able
     *       by the user. False by default.
     * @alias Blockly.serialization.workspaces.load
     */
    export function load(state: {
        [x: string]: any;
    }, workspace: Workspace, { recordUndo }?: {
        recordUndo: (boolean | undefined);
    } | undefined): void;
    import { Workspace } from "workspace";
}
declare module "requires" {
    export {};
}
