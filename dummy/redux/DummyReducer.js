/**
 * DummyReducer
 * ----------------------------------------------------------------------
 * Example on how to declare reducers for Redux.
 *
 * @since     0.0.1
 */
import { Test } from "./DummyActionTypes";

/**
 * Reducer function, executes actions according to the action type declared 
 * when dispatching them.
 * 
 * Receives the value sent to `dispatch()` on components.
 * 
 * @param {*} state 
 *     Initial/current state of the store
 * @param {*} action 
 *     Object containing the action type and payload
 */
export function DummyReducer (state = {}, action) {
  switch (action.type) {
    case Test.TEST_ACTION_A:
      return Object.assign({}, state, {
        value: action.value
      });
    case Test.TEST_ACTION_B:
      return Object.assign({}, state, {
        value: action.value
      });
    default:
      return state;
  }
}
