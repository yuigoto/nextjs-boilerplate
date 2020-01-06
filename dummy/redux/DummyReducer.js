/**
 * DummyReducer
 * ----------------------------------------------------------------------
 * Exemplo de como declarar um reducer para redux.
 *
 * @since     0.0.1
 */

// Imports locais
import { Test } from "./DummyActionTypes";

/**
 * Função redutora, executa ações de acordo com o tipo de ação declarada ao 
 * despachá-las.
 * 
 * Recebe o que é enviado por `dispatch()` nos componentes.
 * 
 * @param {*} state 
 *     Objeto contendo o estado original e/ou atual 
 * @param {*} action 
 *     Objeto contendo o tipo de ação, assim como os dados para despacho 
 */
export function DummyReducer (state = {}, action) {
  switch (action.type) {
    // Ação de Exemplo 1
    case Test.TEST_ACTION_A:
      return Object.assign({}, state, {
        value: action.value
      });
      
    // Ação de Exemplo 2
    case Test.TEST_ACTION_B:
      return Object.assign({}, state, {
        value: action.value
      });
    
    // O padrão é retornar o estado original
    default:
      return state;
  }
}
