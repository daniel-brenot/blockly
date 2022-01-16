/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

goog.module('Blockly.Python.variablesDynamic');

import Python from 'Blockly.Python';
goog.require('Blockly.Python.variables');


// Python is dynamically typed.
Python['variables_get_dynamic'] = Python['variables_get'];
Python['variables_set_dynamic'] = Python['variables_set'];
