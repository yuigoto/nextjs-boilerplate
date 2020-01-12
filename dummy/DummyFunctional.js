import React from "react";
import PropTypes from "prop-types";
import App from "next/app";
import { useRouter } from "next/router";

/**
 * DummyFunctional
 * ----------------------------------------------------------------------
 * Functional component example.
 *
 * @param {Object} props 
 *     Props to be passed to the component 
 * @returns {*}
 * @constructor
 */
const DummyFunctional = ({id, className, children}) => {
  // Router-aware component?
  const router = useRouter();

  return (
    <div id={id} className={className}>
      {children}
    </div>
  );
};

/**
 * Used when the page needs preloaded data before rendering occurs.
 * 
 * If data missing from a component should block initial rendering, then 
 * this method must be called to preload this data.
 * 
 * IMPORTANT:
 * This method disables NextJS' static optimization, making the page fully 
 * server-side, without static export.
 * 
 * IMPORTANT:
 * This method only works with NextJS!
 *
 * @param {*|Object} appContext
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

// Sets default prop values received
DummyFunctional.defaultProps = {
  id: null,
  className: null
};

// Sets prop value data types
DummyFunctional.propTypes = {
  id: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
};

// ----------------------------------------------------------------------

export default DummyFunctional;
