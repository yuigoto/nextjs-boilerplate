import { connect } from "react-redux";

import { DummyFunctional } from "./DummyFunctional";

/**
 * DummyContainer
 * ----------------------------------------------------------------------
 * Exemplo de componente do tipo container.
 *
 * É um componente "state-aware" que envelopa um componente comum, stateless,
 * passando suas props à ele e adicionando super poderes.
 * 
 * Container component example.
 * 
 * It's a state-aware container that wraps a common functional component, adding 
 * superpowers to it.
 * 
 * @since 0.0.1
 */

// REDUX
// ----------------------------------------------------------------------

/**
 * Mapeia o `state` do Redux para props do componente.
 *
 * Maps Redux's `state` to component props.
 *
 * @param {*|Object} state
 *     Objeto contendo o state da aplicação
 *     Object containing the application state
 * @returns {*|Object}
 */
const mapStateToProps = (state) => ({
});

/**
 * Mapeia a função `dispatch()`, do Redux, para props do componente.
 *
 * Map's the `dispatch()` function, from Redux, to component props.
 *
 * @param {*|Function} dispatch
 *     Callable que despacha actions para a store do Redux
 *     Callable that dispatches actions for Redux's store
 * @returns {*|Object}
 */
const mapDispatchToProps = (dispatch) => ({
});

DummyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DummyFunctional);

// ----------------------------------------------------------------------

export { DummyContainer };
