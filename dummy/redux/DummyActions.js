/**
 * DummyActions
 * ----------------------------------------------------------------------
 * Exemplo de como declarar actions (métodos que disparam dados para os 
 * reducers) para Redux.
 *
 * @since     0.0.1
 */

// Imports locais
import { Test } from "./DummyActionTypes";

/**
 * Armazena actions.
 * 
 * @type {Object}
 */
const Actions = {};

/**
 * Action de teste usando arrow function.
 * 
 * @param {*} value 
 *     Valor a ser despachado para a action
 * @returns {*}
 */
Actions.testActionA = (value) => {
  return {
    value: value,
    // Type é um campo obrigatório em TODAS as actions
    type: Test.TEST_ACTION_A
  };
};

/**
 * Action de teste usando arrow function com retorno literal (note ausência 
 * de return e envelopamento de resposta com parênteses).
 * 
 * @param {*} value 
 *     Valor a ser despachado para a action
 * @returns {*}
 */
Actions.testActionB = (value) => ({
  value: value,
  // Type é um campo obrigatório em TODAS as actions
  type: Test.TEST_ACTION_B
});

// ----------------------------------------------------------------------
export default Actions;
