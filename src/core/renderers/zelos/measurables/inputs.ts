/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Zelos specific objects representing inputs with connections on
 * a rendered block.
 */

/**
 * Zelos specific objects representing inputs with connections on
 * a rendered block.
 * @class
 */

import object from 'blockly/core/utils/object';
import {ConstantProvider} from 'blockly/core/renderers/common/constants';
import {Input} from 'blockly/core/input';
import {StatementInput: BaseStatementInput} from 'blockly/core/renderers/measurables/statement_input';


/**
 * An object containing information about the space a statement input takes up
 * during rendering
 * @param {!ConstantProvider} constants The rendering constants provider.
 * @param {!Input} input The statement input to measure and store information
 *    for.
 * @package
 * @constructor
 * @extends {BaseStatementInput}
 * @alias Blockly.zelos.StatementInput
 */
const StatementInput = function(constants, input) {
  StatementInput.superClass_.constructor.call(this, constants, input);

  if (this.connectedBlock) {
    // Find the bottom-most connected block in the stack.
    let block = this.connectedBlock;
    let nextBlock;
    while ((nextBlock = block.getNextBlock())) {
      block = nextBlock;
    }
    if (!block.nextConnection) {
      this.height = this.connectedBlockHeight;
      this.connectedBottomNextConnection = true;
    }
  }
};
object.inherits(StatementInput, BaseStatementInput);

exports.StatementInput = StatementInput;
