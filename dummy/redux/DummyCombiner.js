/**
 * DummyCombiner
 * ----------------------------------------------------------------------
 * Example on how I usually combine reducers.
 *
 * @since     0.0.1
 */

import { combineReducers } from "redux";

import DummyReducer from "./DummyReducer";

/**
 * Combines all reducers.
 * 
 * @type {Object}
 */
const Reducers = combineReducers({
  test: DummyReducer
});

export default Reducers;
