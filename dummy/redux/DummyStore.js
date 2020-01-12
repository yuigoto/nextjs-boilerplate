/**
 * DummyStore
 * ----------------------------------------------------------------------
 * Example on how to declare a store and apply reducers to it.
 * 
 * @since     0.0.1
 */
import { createStore } from "redux";

import DummyCombiner from "./DummyCombiner";

/**
 * Set the initial state.
 */
const initialState = {};

/**
 * Application store, the single source of truth for everything.
 * 
 * Bow down before me, application!
 * 
 * @type {Store<any>}
 */
const Store = createStore(
  DummyCombiner,
  initialState
);

export default Store;
