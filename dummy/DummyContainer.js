import { connect } from "react-redux";

import DummyFunctional from "./DummyFunctional";

/**
 * DummyContainer
 * ----------------------------------------------------------------------
 * Exemplo de componente do tipo container.
 *
 * É um componente "state-aware" que envelopa um componente comum, stateless,
 * passando suas props à ele e adicionando super poderes.
 *
 * @since     0.0.1
 */

// REDUX
// ----------------------------------------------------------------------

/**
 * Mapeia o `state` da store do Redux para props do componente.
 *
 * @param {*|Object} state
 *     Objeto contendo o state diretamente da Store do Redux
 * @param {*} ownProps
 *     Atributos do container ao usá-lo como componente, para repasse ao
 *     componente funcional
 * @returns {*|Object}
 */
const mapStateToProps = (state, ownProps) => ({
});

/**
 * Mapeia o uso de `dispatch()` do Redux para props do componente.
 *
 * @param {*|Function} dispatch
 *     Callable responsável por despachar actions para a Store do Redux
 * @returns {*|Object}
 */
const mapDispatchToProps = dispatch => ({
});

// Conecta componente funcional ao Redux
const DummyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DummyFunctional);

// ----------------------------------------------------------------------

export default DummyContainer;
