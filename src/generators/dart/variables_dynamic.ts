/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */


import Dart from 'blockly/generators/dart';
goog.require('blockly/generators/dart/variables');


// Dart is dynamically typed.
Dart['variables_get_dynamic'] = Dart['variables_get'];
Dart['variables_set_dynamic'] = Dart['variables_set'];
