/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Color blocks for Blockly.
 */
'use strict';

goog.module('Blockly.blocks.color');

const {defineBlocksWithJsonArray} = goog.require('Blockly.common');
/** @suppress {extraRequire} */
goog.require('Blockly.FieldColor');


defineBlocksWithJsonArray([
  // Block for color picker.
  {
    'type': 'color_picker',
    'message0': '%1',
    'args0': [
      {
        'type': 'field_color',
        'name': 'COLOR',
        'color': '#ff0000',
      },
    ],
    'output': 'Color',
    'helpUrl': '%{BKY_COLOR_PICKER_HELPURL}',
    'style': 'color_blocks',
    'tooltip': '%{BKY_COLOR_PICKER_TOOLTIP}',
    'extensions': ['parent_tooltip_when_inline'],
  },

  // Block for random color.
  {
    'type': 'color_random',
    'message0': '%{BKY_COLOR_RANDOM_TITLE}',
    'output': 'Color',
    'helpUrl': '%{BKY_COLOR_RANDOM_HELPURL}',
    'style': 'color_blocks',
    'tooltip': '%{BKY_COLOR_RANDOM_TOOLTIP}',
  },

  // Block for composing a color from RGB components.
  {
    'type': 'color_rgb',
    'message0':
        '%{BKY_COLOR_RGB_TITLE} %{BKY_COLOR_RGB_RED} %1 %{BKY_COLOR_RGB_GREEN} %2 %{BKY_COLOR_RGB_BLUE} %3',
    'args0': [
      {
        'type': 'input_value',
        'name': 'RED',
        'check': 'Number',
        'align': 'RIGHT',
      },
      {
        'type': 'input_value',
        'name': 'GREEN',
        'check': 'Number',
        'align': 'RIGHT',
      },
      {
        'type': 'input_value',
        'name': 'BLUE',
        'check': 'Number',
        'align': 'RIGHT',
      },
    ],
    'output': 'Color',
    'helpUrl': '%{BKY_COLOR_RGB_HELPURL}',
    'style': 'color_blocks',
    'tooltip': '%{BKY_COLOR_RGB_TOOLTIP}',
  },

  // Block for blending two colors together.
  {
    'type': 'color_blend',
    'message0': '%{BKY_COLOR_BLEND_TITLE} %{BKY_COLOR_BLEND_COLOR1} ' +
        '%1 %{BKY_COLOR_BLEND_COLOR2} %2 %{BKY_COLOR_BLEND_RATIO} %3',
    'args0': [
      {
        'type': 'input_value',
        'name': 'COLOR1',
        'check': 'Color',
        'align': 'RIGHT',
      },
      {
        'type': 'input_value',
        'name': 'COLOR2',
        'check': 'Color',
        'align': 'RIGHT',
      },
      {
        'type': 'input_value',
        'name': 'RATIO',
        'check': 'Number',
        'align': 'RIGHT',
      },
    ],
    'output': 'Color',
    'helpUrl': '%{BKY_COLOR_BLEND_HELPURL}',
    'style': 'color_blocks',
    'tooltip': '%{BKY_COLOR_BLEND_TOOLTIP}',
  },
]);
