/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

goog.module('Blockly.Dart.variablesDynamic');

import Dart from 'Blockly.Dart';
goog.require('Blockly.Dart.variables');


// Dart is dynamically typed.
Dart['variables_get_dynamic'] = Dart['variables_get'];
Dart['variables_set_dynamic'] = Dart['variables_set'];
