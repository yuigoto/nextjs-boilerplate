import React from "react";
import PropTypes from "prop-types";
import App from "next/app";
import { useRouter } from "next/router";

/**
 * DummyFunctional
 * ----------------------------------------------------------------------
 * Exemplo de componente funcional.
 *
 * @param {Object} props
 *     Objeto contendo as props aceitas pelo componente, pode ser declarado
 *     apenas o objeto ou podemos utilizar a síntaxe de extração, como neste
 *     exemplo
 * @returns {*}
 * @constructor
 */
const DummyFunctional = ({id, className, children}) => {
  // Roteamento fica acessível a partir disso aqui (opcional!)
  const router = useRouter();

  return (
    <div id={id} className={className}>
      {children}
    </div>
  );
};

/**
 * Utilizado quando a página a ser renderizada necessita que dados sejam
 * pré-carregados ao ser chamada.
 *
 * Se a falta de algum dado deve bloquear a renderização inicial de página,
 * este método que deve ser usado para carregá-los.
 *
 * OBS.:
 * Este método desabilita a otimozação estática automática do Next.JS, fazendo
 * com que toda página que o utilize seja renderizada do lado do servidor, sem
 * export estático.
 *
 * IMPORTANTE:
 * Esta método é EXCLUSIVO do Next.JS, caso esteja utilizando outro framework,
 * apague isso!
 *
 * @param {*|Object} appContext
 *     Objeto contendo informações do conexto atual do componente a serem
 *     passadas para props
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

// Define os valores padrões para props que necessitarem
DummyFunctional.defaultProps = {
  id: null,
  className: null
};

// Define o tipo de dados para cada prop aceita pelo componente
DummyFunctional.propTypes = {
  id: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
};

// ----------------------------------------------------------------------

export default DummyFunctional;
