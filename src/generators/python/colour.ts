/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

goog.module('Blockly.Python.color');

import Python from 'Blockly.Python';


Python['color_picker'] = function(block) {
  // Color picker.
  const code = Python.quote_(block.getFieldValue('COLOR'));
  return [code, Python.ORDER_ATOMIC];
};

Python['color_random'] = function(block) {
  // Generate a random color.
  Python.definitions_['import_random'] = 'import random';
  const code = '\'#%06x\' % random.randint(0, 2**24 - 1)';
  return [code, Python.ORDER_FUNCTION_CALL];
};

Python['color_rgb'] = function(block) {
  // Compose a color from RGB components expressed as percentages.
  const functionName = Python.provideFunction_('color_rgb', [
    'def ' + Python.FUNCTION_NAME_PLACEHOLDER_ + '(r, g, b):',
    '  r = round(min(100, max(0, r)) * 2.55)',
    '  g = round(min(100, max(0, g)) * 2.55)',
    '  b = round(min(100, max(0, b)) * 2.55)',
    '  return \'#%02x%02x%02x\' % (r, g, b)'
  ]);
  const r = Python.valueToCode(block, 'RED', Python.ORDER_NONE) || 0;
  const g = Python.valueToCode(block, 'GREEN', Python.ORDER_NONE) || 0;
  const b = Python.valueToCode(block, 'BLUE', Python.ORDER_NONE) || 0;
  const code = functionName + '(' + r + ', ' + g + ', ' + b + ')';
  return [code, Python.ORDER_FUNCTION_CALL];
};

Python['color_blend'] = function(block) {
  // Blend two colors together.
  const functionName = Python.provideFunction_('color_blend', [
    'def ' + Python.FUNCTION_NAME_PLACEHOLDER_ + '(color1, color2, ratio):',
    '  r1, r2 = int(color1[1:3], 16), int(color2[1:3], 16)',
    '  g1, g2 = int(color1[3:5], 16), int(color2[3:5], 16)',
    '  b1, b2 = int(color1[5:7], 16), int(color2[5:7], 16)',
    '  ratio = min(1, max(0, ratio))',
    '  r = round(r1 * (1 - ratio) + r2 * ratio)',
    '  g = round(g1 * (1 - ratio) + g2 * ratio)',
    '  b = round(b1 * (1 - ratio) + b2 * ratio)',
    '  return \'#%02x%02x%02x\' % (r, g, b)'
  ]);
  const color1 =
      Python.valueToCode(block, 'COLOR1', Python.ORDER_NONE) || '\'#000000\'';
  const color2 =
      Python.valueToCode(block, 'COLOR2', Python.ORDER_NONE) || '\'#000000\'';
  const ratio = Python.valueToCode(block, 'RATIO', Python.ORDER_NONE) || 0;
  const code =
      functionName + '(' + color1 + ', ' + color2 + ', ' + ratio + ')';
  return [code, Python.ORDER_FUNCTION_CALL];
};
