/**
 * DummyActions
 * ----------------------------------------------------------------------
 * Example on how I usually declare my actions for Redux.
 *
 * @since     0.0.1
 */

import { Test } from "./DummyActionTypes";

/**
 * Stores all actions.
 * 
 * @type {Object}
 */
const Actions = {};

/**
 * Test action using arrow function.
 * 
 * @param {*} value 
 *     Value to be dispatched
 * @returns {*}
 */
Actions.testActionA = (value) => {
  return {
    value: value,
    // TYPE IS REQUIRED IN ALL ACTIONS!
    type: Test.TEST_ACTION_A
  };
};

/**
 * Test action using arrow function using literal return.
 * 
 * @param {*} value 
 *     Value to be dispatched
 * @returns {*}
 */
Actions.testActionB = (value) => ({
  value: value,
  // TYPE IS REQUIRED IN ALL ACTIONS!
  type: Test.TEST_ACTION_B
});

export default Actions;
