/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

goog.module('blockly/generators/php/variables_dynamic');

import PHP from 'blockly/generators/php';
goog.require('blockly/generators/php/variables');


// PHP is dynamically typed.
PHP['variables_get_dynamic'] = PHP['variables_get'];
PHP['variables_set_dynamic'] = PHP['variables_set'];
