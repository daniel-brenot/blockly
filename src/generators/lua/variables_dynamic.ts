/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

goog.module('Blockly.Lua.variablesDynamic');

import Lua from 'Blockly.Lua';
goog.require('Blockly.Lua.variables');


// Lua is dynamically typed.
Lua['variables_get_dynamic'] = Lua['variables_get'];
Lua['variables_set_dynamic'] = Lua['variables_set'];
