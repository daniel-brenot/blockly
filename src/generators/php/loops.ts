/**
 * @license
 * Copyright 2015 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */


import PHP from 'blockly/generators/php';
import stringUtils from 'blockly/core/utils/string';
import {NameType} from 'blockly/core/names';


PHP['controls_repeat_ext'] = function(block) {
  // Repeat n times.
  let repeats;
  if (block.getField('TIMES')) {
    // Internal number.
    repeats = String(Number(block.getFieldValue('TIMES')));
  } else {
    // External number.
    repeats = PHP.valueToCode(block, 'TIMES', PHP.ORDER_ASSIGNMENT) || '0';
  }
  let branch = PHP.statementToCode(block, 'DO');
  branch = PHP.addLoopTrap(branch, block);
  let code = '';
  const loopVar = PHP.nameDB_.getDistinctName('count', NameType.VARIABLE);
  let endVar = repeats;
  if (!repeats.match(/^\w+$/) && !stringUtils.isNumber(repeats)) {
    endVar = PHP.nameDB_.getDistinctName('repeat_end', NameType.VARIABLE);
    code += endVar + ' = ' + repeats + ';\n';
  }
  code += 'for (' + loopVar + ' = 0; ' + loopVar + ' < ' + endVar + '; ' +
      loopVar + '++) {\n' + branch + '}\n';
  return code;
};

PHP['controls_repeat'] = PHP['controls_repeat_ext'];

PHP['controls_whileUntil'] = function(block) {
  // Do while/until loop.
  const until = block.getFieldValue('MODE') === 'UNTIL';
  let argument0 =
      PHP.valueToCode(
          block, 'BOOL', until ? PHP.ORDER_LOGICAL_NOT : PHP.ORDER_NONE) ||
      'false';
  let branch = PHP.statementToCode(block, 'DO');
  branch = PHP.addLoopTrap(branch, block);
  if (until) {
    argument0 = '!' + argument0;
  }
  return 'while (' + argument0 + ') {\n' + branch + '}\n';
};

PHP['controls_for'] = function(block) {
  // For loop.
  const variable0 =
      PHP.nameDB_.getName(block.getFieldValue('VAR'), NameType.VARIABLE);
  const argument0 = PHP.valueToCode(block, 'FROM', PHP.ORDER_ASSIGNMENT) || '0';
  const argument1 = PHP.valueToCode(block, 'TO', PHP.ORDER_ASSIGNMENT) || '0';
  const increment = PHP.valueToCode(block, 'BY', PHP.ORDER_ASSIGNMENT) || '1';
  let branch = PHP.statementToCode(block, 'DO');
  branch = PHP.addLoopTrap(branch, block);
  let code;
  if (stringUtils.isNumber(argument0) && stringUtils.isNumber(argument1) &&
      stringUtils.isNumber(increment)) {
    // All arguments are simple numbers.
    const up = Number(argument0) <= Number(argument1);
    code = 'for (' + variable0 + ' = ' + argument0 + '; ' + variable0 +
        (up ? ' <= ' : ' >= ') + argument1 + '; ' + variable0;
    const step = Math.abs(Number(increment));
    if (step === 1) {
      code += up ? '++' : '--';
    } else {
      code += (up ? ' += ' : ' -= ') + step;
    }
    code += ') {\n' + branch + '}\n';
  } else {
    code = '';
    // Cache non-trivial values to variables to prevent repeated look-ups.
    let startVar = argument0;
    if (!argument0.match(/^\w+$/) && !stringUtils.isNumber(argument0)) {
      startVar =
          PHP.nameDB_.getDistinctName(variable0 + '_start', NameType.VARIABLE);
      code += startVar + ' = ' + argument0 + ';\n';
    }
    let endVar = argument1;
    if (!argument1.match(/^\w+$/) && !stringUtils.isNumber(argument1)) {
      endVar =
          PHP.nameDB_.getDistinctName(variable0 + '_end', NameType.VARIABLE);
      code += endVar + ' = ' + argument1 + ';\n';
    }
    // Determine loop direction at start, in case one of the bounds
    // changes during loop execution.
    const incVar =
        PHP.nameDB_.getDistinctName(variable0 + '_inc', NameType.VARIABLE);
    code += incVar + ' = ';
    if (stringUtils.isNumber(increment)) {
      code += Math.abs(increment) + ';\n';
    } else {
      code += 'abs(' + increment + ');\n';
    }
    code += 'if (' + startVar + ' > ' + endVar + ') {\n';
    code += PHP.INDENT + incVar + ' = -' + incVar + ';\n';
    code += '}\n';
    code += 'for (' + variable0 + ' = ' + startVar + '; ' + incVar +
        ' >= 0 ? ' + variable0 + ' <= ' + endVar + ' : ' + variable0 +
        ' >= ' + endVar + '; ' + variable0 + ' += ' + incVar + ') {\n' +
        branch + '}\n';
  }
  return code;
};

PHP['controls_forEach'] = function(block) {
  // For each loop.
  const variable0 =
      PHP.nameDB_.getName(block.getFieldValue('VAR'), NameType.VARIABLE);
  const argument0 =
      PHP.valueToCode(block, 'LIST', PHP.ORDER_ASSIGNMENT) || '[]';
  let branch = PHP.statementToCode(block, 'DO');
  branch = PHP.addLoopTrap(branch, block);
  let code = '';
  code +=
      'foreach (' + argument0 + ' as ' + variable0 + ') {\n' + branch + '}\n';
  return code;
};

PHP['controls_flow_statements'] = function(block) {
  // Flow statements: continue, break.
  let xfix = '';
  if (PHP.STATEMENT_PREFIX) {
    // Automatic prefix insertion is switched off for this block.  Add manually.
    xfix += PHP.injectId(PHP.STATEMENT_PREFIX, block);
  }
  if (PHP.STATEMENT_SUFFIX) {
    // Inject any statement suffix here since the regular one at the end
    // will not get executed if the break/continue is triggered.
    xfix += PHP.injectId(PHP.STATEMENT_SUFFIX, block);
  }
  if (PHP.STATEMENT_PREFIX) {
    const loop = block.getSurroundLoop();
    if (loop && !loop.suppressPrefixSuffix) {
      // Inject loop's statement prefix here since the regular one at the end
      // of the loop will not get executed if 'continue' is triggered.
      // In the case of 'break', a prefix is needed due to the loop's suffix.
      xfix += PHP.injectId(PHP.STATEMENT_PREFIX, loop);
    }
  }
  switch (block.getFieldValue('FLOW')) {
    case 'BREAK':
      return xfix + 'break;\n';
    case 'CONTINUE':
      return xfix + 'continue;\n';
  }
  throw Error('Unknown flow statement.');
};
