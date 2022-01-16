/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {defineBlocksWithJsonArray} from 'blockly/core/common';
goog.require('blockly/core/field_colour');


defineBlocksWithJsonArray([
  // Block for color picker.
  {
    'type': 'colour_picker',
    'message0': '%1',
    'args0': [
      {
        'type': 'field_colour',
        'name': 'COLOUR',
        'color': '#ff0000',
      },
    ],
    'output': 'Color',
    'helpUrl': '%{BKY_COLOUR_PICKER_HELPURL}',
    'style': 'colour_blocks',
    'tooltip': '%{BKY_COLOUR_PICKER_TOOLTIP}',
    'extensions': ['parent_tooltip_when_inline'],
  },

  // Block for random color.
  {
    'type': 'colour_random',
    'message0': '%{BKY_COLOUR_RANDOM_TITLE}',
    'output': 'Color',
    'helpUrl': '%{BKY_COLOUR_RANDOM_HELPURL}',
    'style': 'colour_blocks',
    'tooltip': '%{BKY_COLOUR_RANDOM_TOOLTIP}',
  },

  // Block for composing a color from RGB components.
  {
    'type': 'colour_rgb',
    'message0':
        '%{BKY_COLOUR_RGB_TITLE} %{BKY_COLOUR_RGB_RED} %1 %{BKY_COLOUR_RGB_GREEN} %2 %{BKY_COLOUR_RGB_BLUE} %3',
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
    'helpUrl': '%{BKY_COLOUR_RGB_HELPURL}',
    'style': 'colour_blocks',
    'tooltip': '%{BKY_COLOUR_RGB_TOOLTIP}',
  },

  // Block for blending two colours together.
  {
    'type': 'colour_blend',
    'message0': '%{BKY_COLOUR_BLEND_TITLE} %{BKY_COLOUR_BLEND_COLOUR1} ' +
        '%1 %{BKY_COLOUR_BLEND_COLOUR2} %2 %{BKY_COLOUR_BLEND_RATIO} %3',
    'args0': [
      {
        'type': 'input_value',
        'name': 'COLOUR1',
        'check': 'Color',
        'align': 'RIGHT',
      },
      {
        'type': 'input_value',
        'name': 'COLOUR2',
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
    'helpUrl': '%{BKY_COLOUR_BLEND_HELPURL}',
    'style': 'colour_blocks',
    'tooltip': '%{BKY_COLOUR_BLEND_TOOLTIP}',
  },
]);