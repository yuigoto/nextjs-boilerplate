import React from "react";
import App from "next/app";
import PropTypes from "prop-types";
import classnames from "classnames";
import { useRouter } from "next/router";

/**
 * DummyFunctional
 * ----------------------------------------------------------------------
 * Exemplo de componente funcional.
 * Functional component example.
 *
 * @param {*|Object} props 
 *     Objeto contendo as props para uso no componente 
 * @returns {*}
 * @constructor
 */
const DummyFunctional = ({id, className, children}) => {
  // Opcional, mas permite acessar router do Next
  // Optional, allows you access to NextJS's router
  const router = useRouter();

  let _attr = {
    className: classnames(className)
  };

  if (id) _attr.id = id;

  return (
    <div {..._attr}>
      {children}
    </div>
  );
};

/**
 * Usado quando a renderização depende de dados pré-carregados.
 *
 * Quando a falta de algum dado bloqueia a renderização da página, este
 * método é usado para carregá-los.
 *
 * IMPORTANTE:
 * - Este método desabilita a otimização estática do Next, fazendo com que a
 * página que a utiliza seja renderizada do lado do servidor sempre
 * - Este método é exclusivo do Next!
 *
 * Used when rendering depends on pre-loaded data.
 *
 * When you need preloaded data that might block the component from rendering,
 * use this method to pre-load the data from an API or somewhere else.
 *
 * IMPORTANT:
 * - This method disables Next's static optimization, turning it into a
 * server-side only page
 * - This method is exclusive from Next!
 *
 * @param {*|Object} appContext
 *     Objeto contendo informações do contexto atual do componente a serem
 *     passados para props
 *     Object containing the current context of the component to be passed
 *     to props
 * @returns {*|Object}
 */
DummyFunctional.getInitialProps = (appContext) => {
  const appProps = App.getInitialProps(appContext);

  return {
    ...appProps
  };
};

// PROP TYPES
// ----------------------------------------------------------------------

// Define o valor padrão para props que necessitem
// Defines default values for props that require
DummyFunctional.defaultProps = {
  id: null,
  className: null
};


// Define o tipo de dados para cada prop aceita
// Defines the data type for each accepted prop
DummyFunctional.propTypes = {
  id: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  children: PropTypes.node
};

// ----------------------------------------------------------------------

export { DummyFunctional };
