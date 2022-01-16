/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Classic theme.
 * Contains multi-colored border to create shadow effect.
 * @namespace Blockly.Themes.Classic
 */
goog.module('Blockly.Themes.Classic');

import {Theme} from 'Blockly.Theme';


const defaultBlockStyles = {
  'color_blocks': {'colorPrimary': '20'},
  'list_blocks': {'colorPrimary': '260'},
  'logic_blocks': {'colorPrimary': '210'},
  'loop_blocks': {'colorPrimary': '120'},
  'math_blocks': {'colorPrimary': '230'},
  'procedure_blocks': {'colorPrimary': '290'},
  'text_blocks': {'colorPrimary': '160'},
  'variable_blocks': {'colorPrimary': '330'},
  'variable_dynamic_blocks': {'colorPrimary': '310'},
  'hat_blocks': {'colorPrimary': '330', 'hat': 'cap'},
};

const categoryStyles = {
  'color_category': {'color': '20'},
  'list_category': {'color': '260'},
  'logic_category': {'color': '210'},
  'loop_category': {'color': '120'},
  'math_category': {'color': '230'},
  'procedure_category': {'color': '290'},
  'text_category': {'color': '160'},
  'variable_category': {'color': '330'},
  'variable_dynamic_category': {'color': '310'},
};

/**
 * Classic theme.
 * Contains multi-colored border to create shadow effect.
 * @type {Theme}
 * @alias Blockly.Themes.Classic
 */
const Classic = new Theme('classic', defaultBlockStyles, categoryStyles);

exports.Classic = Classic;
