// Imports Locais
// Local Imports
import { 
  TEST_ACTION_A,
  TEST_ACTION_B 
 } from "./DummyTypes";

/**
 * DummyActions
 * ----------------------------------------------------------------------
 * Exporta funções para envio e manipulação de dados na store.
 * 
 * Exports functions for updating and manipulating the store data.
 * 
 * @since 0.0.1
 */

// THUNKS
// ----------------------------------------------------------------------

/**
 * Thunk de teste para a store.
 * 
 * Test thunk for the store.
 * 
 * @returns {function}
 */
export const TestThunk = () => {
  return (dispatch) => {
    setTimeout(
      () => {
        dispatch(TestActionA({ hello: "world" }));
      },
      200
    )
  };
};

// ACTION
// ----------------------------------------------------------------------

/**
 * Action to dispatch.
 * 
 * @param {*|Object} payload 
 *     Dados para envio na store
 *     Data to be sent to the store 
 * @returns {*|Object}
 */
export const TestActionA = (payload) => {
  return {
    type: TEST_ACTION_A,
    payload: payload
  }
};

/**
 * Action to dispatch.
 * 
 * @param {*|Object} payload 
 *     Dados para envio na store
 *     Data to be sent to the store 
 * @returns {*|Object}
 */
export const TestActionB = (payload) => {
  return {
    type: TEST_ACTION_B,
    payload: payload
  }
};
