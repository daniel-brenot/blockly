/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

goog.module('blockly/generators/python/variables_dynamic');

import Python from 'blockly/generators/python';
goog.require('blockly/generators/python/variables');


// Python is dynamically typed.
Python['variables_get_dynamic'] = Python['variables_get'];
Python['variables_set_dynamic'] = Python['variables_set'];
