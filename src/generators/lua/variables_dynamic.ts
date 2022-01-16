/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */


import Lua from 'blockly/generators/lua';
goog.require('blockly/generators/lua/variables');


// Lua is dynamically typed.
Lua['variables_get_dynamic'] = Lua['variables_get'];
Lua['variables_set_dynamic'] = Lua['variables_set'];
