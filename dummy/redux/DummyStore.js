// Imports
import {
  applyMiddleware,
  createStore
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Imports Locais
// Local Imports
import { DummyCombiner } from "./DummyCombiner";

/**
 * DummyStore
 * ----------------------------------------------------------------------
 * Inicializadores e helpers para a store da aplicação.
 * 
 * Initializers and helpers for the application's store.
 * 
 * @since 0.0.1
 */

/**
 * Define o estado inicial da aplicação.
 *
 * Defines the application's initial state.
 *
 * @type {Object}
 */
const initialState = {};

/**
 * Array com middlewares a serem aplicados na store.
 *
 * Array with middlewares to be applied on the store.
 *
 * @type {*|function[]}
 */
const middleware = [
  thunk
];

/**
 * Aplicado sobre os middlewares em produção para debugar actions.
 *
 * Applied over middlewares in production mode to debug actions.
 *
 * @type {*}
 */
const composeEnhancers = composeWithDevTools(
  {
    trace: true,
    traceLimit: 25
  }
);

/**
 * Inicializa uma store do Redux.
 *
 * Initializes a Redux store.
 *
 * @param {*|Object} preloadedState
 *     Objeto representando o estado inicial da store
 *     Object representing the initial store state
 * @returns {Store<*, *>}
 * @constructor
 */
export const InitializeStore = (preloadedState = {}) => {
  return createStore(
    DummyCombiner,
    preloadedState || initialState,
    (process.env.NODE_ENV === "production")
      ? applyMiddleware(...middleware)
      : composeEnhancers(applyMiddleware(...middleware))
  );
};
