import { connect } from "react-redux";

import DummyFunctional from "./DummyFunctional";

/**
 * DummyContainer
 * ----------------------------------------------------------------------
 * Container example.
 *
 * @since     0.0.1
 */

// REDUX
// ----------------------------------------------------------------------

/**
 * Maps Redux's state to component props.
 * 
 * @param {*|Object} state
 * @returns {*|Object}
 */
const mapStateToProps = state => ({
});

/**
 * Maps functions using Redux's `dispatch()` to component props.
 *
 * @param {*|Function} dispatch
 * @returns {*|Object}
 */
const mapDispatchToProps = dispatch => ({
});

DummyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DummyFunctional);

// ----------------------------------------------------------------------

export default DummyContainer;
