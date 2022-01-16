/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

goog.module('blockly/generators/javascript/variables_dynamic');

import JavaScript from 'blockly/generators/javascript';
goog.require('blockly/generators/javascript/variables');


// JavaScript is dynamically typed.
JavaScript['variables_get_dynamic'] = JavaScript['variables_get'];
JavaScript['variables_set_dynamic'] = JavaScript['variables_set'];
