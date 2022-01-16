/**
 * @license
 * Copyright 2015 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

goog.module('Blockly.PHP.variables');

import PHP from 'Blockly.PHP';
import {NameType} from 'Blockly.Names';


PHP['variables_get'] = function(block) {
  // Variable getter.
  const code =
      PHP.nameDB_.getName(block.getFieldValue('VAR'), NameType.VARIABLE);
  return [code, PHP.ORDER_ATOMIC];
};

PHP['variables_set'] = function(block) {
  // Variable setter.
  const argument0 =
      PHP.valueToCode(block, 'VALUE', PHP.ORDER_ASSIGNMENT) || '0';
  const varName =
      PHP.nameDB_.getName(block.getFieldValue('VAR'), NameType.VARIABLE);
  return varName + ' = ' + argument0 + ';\n';
};
