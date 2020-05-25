// Imports Locais
// Local Imports
import {
  TEST_ACTION_A,
  TEST_ACTION_B
} from "./DummyTypes";

/**
 * DummyReducer
 * ----------------------------------------------------------------------
 * Função redutora, executa ações de acordo com o tipo de ação declarada ao
 * ser despachada.
 *
 * Recebe dados de `dispatch()` enviados pelos componentes e atualiza a 
 * store da aplicação.
 *
 * Reducer function, executes actions according to the action type declared
 * when dispatched.
 *
 * Receives data sent by `dispatch()`, from the components, and updates the 
 * application store.
 *
 * @param {*|Object} state
 *     Objeto contendo o state a ser atualizado
 *     Object containing the state to be updated
 * @param {*|Object} action
 *     Objeto contendo o tipo de ação e o payload de dados para o state
 *     Object containing the action type and the data payload for the state
 * @returns {*|Object}
 * @constructor
 * @since 0.0.1
 */
export const DummyReducer = (state = {}, action) => {
  switch (action.type) {
    case TEST_ACTION_A:
      return Object.assign({}, state, {...action.payload});

    case TEST_ACTION_B:
      return Object.assign({}, state, {...action.payload});

    // O padrão é retornar a store original
    // By default, the original state is returned
    default:
      return state;
  }
};
