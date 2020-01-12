import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "next/router";

/**
 * [/name/of/route]
 * ----------------------------------------------------------------------
 * Example on how to declare a route under `/pages`.
 * 
 * Although we use `withRouter` and `connect`, both are not mandatory.
 * 
 * @since   0.0.1
 */
class Page extends Component {
  // PROPERTIES
  // --------------------------------------------------------------------

  /**
   * Component mount status, optional.
   *
   * We can use it to see if the component's ready and mounted so we can execute 
   * stuff, like state updates.
   *
   * @type {Boolean}
   * @private
   */
  _mounted = false;

  /**
   * Stores component state.
   *
   * @type {Object}
   */
  state = {};

  // MÉTODOS ESTÁTICOS
  // --------------------------------------------------------------------

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
   * @returns {Promise<{pageProps: (*|Object)}>}
   */
  static async getInitialProps (appContext) {
    const {
      Component,
      ctx,
      query
    } = appContext;

    /**
     * Stores props to be sent to the component constructor on server-side.
     *
     * @type {*|Object}
     */
    let pageProps = {};

    if (Component && Component.getInitialProps) {
      pageProps = Object.assign(
        {},
        pageProps,
        await Component.getInitialProps(ctx)
      );
    }

    return {
      pageProps
    };
  }

  /**
   * Executed after a component is instantiated and when receiving new props.
   * 
   * Returns an object to update the derived state or `null`, if no update 
   * should be made when receiving new props.
   * 
   * Executed when the parent-component causes re-rendering of this one.
   * 
   * Calling `this.setState()` WON'T execute this method.
   *
   * IMPORTANT:
   * - PLEASE, DO COMPARE PREVIOUS AND UPDATED VALUES;
   * - RARELY USED, recommendation is to use simpler solutions.
   *
   * @param {*} props
   *     Updated props
   * @param {*} state
   *     Updated state
   * @returns {*}
   */
  static getDerivedStateFromProps (props, state) {
    return null;
  }

  // LIFECYCLE
  // --------------------------------------------------------------------

  /**
   * Constructor.
   *
   * @param {*} props 
   *     Props to be passed to the component 
   */
  constructor (props) {
    super(props);

    // To acces the props in `getInitialProps`, uncomment:
    // const { pageProps } = props;

    // You can also bootstrap state here
    this.state = {};

    /*
      Binding methods to the instance scope (see more below).
     */
    this.metodoTesteA = this.metodoTesteA.bind(this);
  }

  /**
   * Executed after component is mounted.
   */
  componentDidMount () {
    this._mounted = true;
  }

  /**
   * Executed before the component is unmounted and destroyed.
   */
  componentWillUnmount () {
    this._mounted = false;
  }

  /**
   * Tells React if the component's output should be affected by an eventual 
   * change on the context, props or state.
   * 
   * By returning `false` this method prevents re-rendering, though it blocks 
   * execution of the following methods:
   * - `componentWillUpdate`
   * - `componentDidUpdate`
   *
   * Default is to return `true`.
   *
   * @param {*} nextProps 
   *     New prop values
   * @param {*} nextState
   *     Updated state values 
   * @param {*} nextContext
   *     Next component context status
   * @returns {Boolean}
   */
  shouldComponentUpdate (nextProps, nextState, nextContext) {
    return true;
  }

  /**
   * Executed right after an update occurs in props or state, useful to operate 
   * on the DOM and manage requests.
   *
   * Not executed if `shouldComponentUpdate` returns `false`.
   *
   * @param {*} prevProps 
   *     Previous component props 
   * @param {*} prevState
   *     Previous component state 
   * @param {*} snapshot 
   *     Snapshot containing the DOM state right before it's updated, it's the 
   *     value returned by `getSnapshotBeforeUpdate`.
   */
  componentDidUpdate (prevProps, prevState, snapshot) {
  }

  /**
   * Turns the component into a "React error boundary": a component that catches 
   * errors in every child on the tree.
   *
   * Use it to log errors and show an eventual fallback.
   *
   * IMPORTANT:
   * - DO NOT use this to control application flow;
   * - DOES NOT CAPTURE AN ERROR ON `_self`.
   *
   * @param {*} error 
   *     Error thrown by React
   * @param {*} errorInfo 
   *     Detailed error information 
   */
  componentDidCatch (error, errorInfo) {
  }

  /**
   * Executed before the most recent output from `render()` is commited (to the 
   * DOM document, for example). This enables the component to capture some 
   * information from the DOM object before it's potentially changed.
   * 
   * Values returned by this component are sent as the third parameter for
   * the `componentDidUpdate()` method.
   *
   * @param {*} prevProps 
   *     Previous props 
   * @param {*} prevState
   *     Previous state 
   */
  getSnapshotBeforeUpdate (prevProps, prevState) {
    return null;
  }

  // PUBLIC METHODS
  // --------------------------------------------------------------------

  /**
   * Returns the component's mounting status.
   *
   * @returns {Boolean}
   */
  componentIsMounted = () => {
    return this._mounted;
  };

  /**
   * Test method.
   *
   * @returns {Boolean}
   */
  metodoTesteA () {
    return true;
  }

  /**
   * Test method.
   *
   * @returns {Boolean}
   */
  metodoTesteB = () => {
    return false;
  };

  // OUTPUT
  // --------------------------------------------------------------------

  /**
   * Renders the component.
   *
   * @returns {*}
   */
  render () {
    return null;
  }
}

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

Page = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);

// ----------------------------------------------------------------------

/**
 * This enables the component to be router-aware in NextJS.
 */
export default withRouter(Page);
