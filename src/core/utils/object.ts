/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Utility methods for objects.
 * @namespace Blockly.utils.object
 */
goog.module('blockly/core/utils/object');


/**
 * Inherit the prototype methods from one constructor into another.
 * @param {!Function} childCtor Child class.
 * @param {!Function} parentCtor Parent class.
 * @suppress {strictMissingProperties} superClass_ is not defined on Function.
 * @alias Blockly.utils.object.inherits
 */
export function inherits(childCtor, parentCtor) {
  // Set a .superClass_ property so that methods can call parent methods
  // without hard-coding the parent class name.
  // Could be replaced by ES6's super().
  childCtor.superClass_ = parentCtor.prototype;

  // Link the child class to the parent class so that static methods inherit.
  Object.setPrototypeOf(childCtor, parentCtor);

  // Replace the child constructor's prototype object with an instance
  // of the parent class.
  childCtor.prototype = Object.create(parentCtor.prototype);
  childCtor.prototype.constructor = childCtor;
  // Alternatively, one could use this instead:
  // Object.setPrototypeOf(childCtor.prototype, parentCtor.prototype);
}

/**
 * Copies all the members of a source object to a target object.
 * @param {!Object} target Target.
 * @param {!Object} source Source.
 * @alias Blockly.utils.object.mixin
 */
export function mixin(target, source) {
  for (const x in source) {
    target[x] = source[x];
  }
}

/**
 * Complete a deep merge of all members of a source object with a target object.
 * @param {!Object} target Target.
 * @param {!Object} source Source.
 * @return {!Object} The resulting object.
 * @alias Blockly.utils.object.deepMerge
 */
export function deepMerge(target, source) {
  for (const x in source) {
    if (source[x] !== null && typeof source[x] === 'object') {
      target[x] = deepMerge(target[x] || Object.create(null), source[x]);
    } else {
      target[x] = source[x];
    }
  }
  return target;
}

/**
 * Returns an array of a given object's own enumerable property values.
 * @param {!Object} obj Object containing values.
 * @return {!Array} Array of values.
 * @alias Blockly.utils.object.values
 */
export function values(obj) {
  if (Object.values) {
    return Object.values(obj);
  }
  // Fallback for IE.
  return Object.keys(obj).map(function(e) {
    return obj[e];
  });
}
