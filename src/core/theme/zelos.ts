/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Zelos theme.
 * @namespace Blockly.Themes.Zelos
 */

import {Theme} from 'blockly/core/theme';


const defaultBlockStyles = {
  'color_blocks': {
    'colorPrimary': '#CF63CF',
    'colorSecondary': '#C94FC9',
    'colorTertiary': '#BD42BD',
  },
  'list_blocks': {
    'colorPrimary': '#9966FF',
    'colorSecondary': '#855CD6',
    'colorTertiary': '#774DCB',
  },
  'logic_blocks': {
    'colorPrimary': '#4C97FF',
    'colorSecondary': '#4280D7',
    'colorTertiary': '#3373CC',
  },
  'loop_blocks': {
    'colorPrimary': '#0fBD8C',
    'colorSecondary': '#0DA57A',
    'colorTertiary': '#0B8E69',
  },
  'math_blocks': {
    'colorPrimary': '#59C059',
    'colorSecondary': '#46B946',
    'colorTertiary': '#389438',
  },
  'procedure_blocks': {
    'colorPrimary': '#FF6680',
    'colorSecondary': '#FF4D6A',
    'colorTertiary': '#FF3355',
  },
  'text_blocks': {
    'colorPrimary': '#FFBF00',
    'colorSecondary': '#E6AC00',
    'colorTertiary': '#CC9900',
  },
  'variable_blocks': {
    'colorPrimary': '#FF8C1A',
    'colorSecondary': '#FF8000',
    'colorTertiary': '#DB6E00',
  },
  'variable_dynamic_blocks': {
    'colorPrimary': '#FF8C1A',
    'colorSecondary': '#FF8000',
    'colorTertiary': '#DB6E00',
  },
  'hat_blocks': {
    'colorPrimary': '#4C97FF',
    'colorSecondary': '#4280D7',
    'colorTertiary': '#3373CC',
    'hat': 'cap',
  },
};

const categoryStyles = {
  'color_category': {'color': '#CF63CF'},
  'list_category': {'color': '#9966FF'},
  'logic_category': {'color': '#4C97FF'},
  'loop_category': {'color': '#0fBD8C'},
  'math_category': {'color': '#59C059'},
  'procedure_category': {'color': '#FF6680'},
  'text_category': {'color': '#FFBF00'},
  'variable_category': {'color': '#FF8C1A'},
  'variable_dynamic_category': {'color': '#FF8C1A'},
};

/**
 * Zelos theme.
 * @type {Theme}
 * @alias Blockly.Themes.Zelos
 */
const Zelos = new Theme('zelos', defaultBlockStyles, categoryStyles);

exports.Zelos = Zelos;
