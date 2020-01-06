/**
 * DummyStore
 * ----------------------------------------------------------------------
 * Exemplo de como declarar uma store e aplicar reducers combinados.
 *
 * @since     0.0.1
 */

// Libs
import { createStore } from "redix";

// Imports locais
import DummyCombiner from "./DummyCombiner";

// Define estado inicial
const initialState = {};

/**
 * Store da aplicação, única fonte de dados e da verdade para tudo.
 * 
 * Ajoelhe-se diante de mim, aplicação! >:3
 * 
 * @type {Store<any>}
 */
const Store = createStore(
  DummyCombiner,
  initialState
);

// ----------------------------------------------------------------------
export default Store;
