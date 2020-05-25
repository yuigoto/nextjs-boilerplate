// Imports
import { combineReducers } from "redux";

// Imports Locais
// Local Imports
import { DummyReducer } from "./DummyReducer";

/**
 * DummyCombiner
 * ----------------------------------------------------------------------
 * Combina reducers mapeando-os a objetos da store.
 *
 * Combines reducers, mapping them to the store's objects.
 *
 * @type {Reducer<CombinedState<*>>}
 * @since 0.0.1
 */
const DummyCombiner = combineReducers({
  test: DummyReducer
});

// ----------------------------------------------------------------------

export { DummyCombiner };
