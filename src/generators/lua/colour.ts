/**
 * @license
 * Copyright 2016 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

goog.module('Blockly.Lua.color');

import Lua from 'Blockly.Lua';


Lua['color_picker'] = function(block) {
  // Color picker.
  const code = Lua.quote_(block.getFieldValue('COLOR'));
  return [code, Lua.ORDER_ATOMIC];
};

Lua['color_random'] = function(block) {
  // Generate a random color.
  const code = 'string.format("#%06x", math.random(0, 2^24 - 1))';
  return [code, Lua.ORDER_HIGH];
};

Lua['color_rgb'] = function(block) {
  // Compose a color from RGB components expressed as percentages.
  const functionName = Lua.provideFunction_('color_rgb', [
    'function ' + Lua.FUNCTION_NAME_PLACEHOLDER_ + '(r, g, b)',
    '  r = math.floor(math.min(100, math.max(0, r)) * 2.55 + .5)',
    '  g = math.floor(math.min(100, math.max(0, g)) * 2.55 + .5)',
    '  b = math.floor(math.min(100, math.max(0, b)) * 2.55 + .5)',
    '  return string.format("#%02x%02x%02x", r, g, b)', 'end'
  ]);
  const r = Lua.valueToCode(block, 'RED', Lua.ORDER_NONE) || 0;
  const g = Lua.valueToCode(block, 'GREEN', Lua.ORDER_NONE) || 0;
  const b = Lua.valueToCode(block, 'BLUE', Lua.ORDER_NONE) || 0;
  const code = functionName + '(' + r + ', ' + g + ', ' + b + ')';
  return [code, Lua.ORDER_HIGH];
};

Lua['color_blend'] = function(block) {
  // Blend two colors together.
  const functionName = Lua.provideFunction_('color_blend', [
    'function ' + Lua.FUNCTION_NAME_PLACEHOLDER_ + '(color1, color2, ratio)',
    '  local r1 = tonumber(string.sub(color1, 2, 3), 16)',
    '  local r2 = tonumber(string.sub(color2, 2, 3), 16)',
    '  local g1 = tonumber(string.sub(color1, 4, 5), 16)',
    '  local g2 = tonumber(string.sub(color2, 4, 5), 16)',
    '  local b1 = tonumber(string.sub(color1, 6, 7), 16)',
    '  local b2 = tonumber(string.sub(color2, 6, 7), 16)',
    '  local ratio = math.min(1, math.max(0, ratio))',
    '  local r = math.floor(r1 * (1 - ratio) + r2 * ratio + .5)',
    '  local g = math.floor(g1 * (1 - ratio) + g2 * ratio + .5)',
    '  local b = math.floor(b1 * (1 - ratio) + b2 * ratio + .5)',
    '  return string.format("#%02x%02x%02x", r, g, b)', 'end'
  ]);
  const color1 =
      Lua.valueToCode(block, 'COLOR1', Lua.ORDER_NONE) || '\'#000000\'';
  const color2 =
      Lua.valueToCode(block, 'COLOR2', Lua.ORDER_NONE) || '\'#000000\'';
  const ratio = Lua.valueToCode(block, 'RATIO', Lua.ORDER_NONE) || 0;
  const code =
      functionName + '(' + color1 + ', ' + color2 + ', ' + ratio + ')';
  return [code, Lua.ORDER_HIGH];
};
