/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Contains functions registering serializers (eg blocks, variables, plugins,
 * etc).
 * @namespace Blockly.serialization.registry
 */

import registry from 'blockly/core/registry';
// eslint-disable-next-line no-unused-vars
import {ISerializer} from 'blockly/core/interfaces/i_serializer';


/**
 * Registers the given serializer so that it can be used for serialization and
 * deserialization.
 * @param {string} name The name of the serializer to register.
 * @param {ISerializer} serializer The serializer to register.
 * @alias Blockly.serialization.registry.register
 */
export function register(name, serializer) {
  registry.register(registry.Type.SERIALIZER, name, serializer);
}

/**
 * Unregisters the serializer associated with the given name.
 * @param {string} name The name of the serializer to unregister.
 * @alias Blockly.serialization.registry.unregister
 */
export function unregister(name) {
  registry.unregister(registry.Type.SERIALIZER, name);
}
