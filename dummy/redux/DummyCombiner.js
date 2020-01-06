/**
 * DummyCombiner
 * ----------------------------------------------------------------------
 * Exemplo de como declarar e combinar reducers para uso em uma store com 
 * Redux.
 *
 * @since     0.0.1
 */

// Libs
import { combineReducers } from "redux";

// Imports locais
import DummyReducer from "./DummyReducer";

/**
 * Combina todos os reducers em uma única entidade.
 * 
 * @type {Object}
 */
const Reducers = combineReducers({
  test: DummyReducer
});

// ----------------------------------------------------------------------
export default Reducers;
