/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

goog.module('Blockly.PHP.variablesDynamic');

import PHP from 'Blockly.PHP';
goog.require('Blockly.PHP.variables');


// PHP is dynamically typed.
PHP['variables_get_dynamic'] = PHP['variables_get'];
PHP['variables_set_dynamic'] = PHP['variables_set'];
