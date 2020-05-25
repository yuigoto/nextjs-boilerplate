import React from "react";
import App from "next/app";
import {Layout} from "../components/base/Layout";

/**
 * pages/_app
 * ----------------------------------------------------------------------
 * Lets us to take over control and override page initialization, which
 * allows us to:
 * - Persist layout between page changes
 * - Keep state when navigating pages
 * - Do custom error handling with `componentDidCatch`
 * - Inject additional data
 * - Add global CSS
 *
 * @since 0.0.1
 */
class MainApp extends App {
  componentDidMount () {
    console.log("> APP Mounted");
  }

  render () {
    const { 
      Component, 
      pageProps
    } = this.props;

    return (
      <Layout id={"site-main"} className={"site-layout"}>
        <Component {...pageProps}/>
      </Layout>
    );
  }
}

// ----------------------------------------------------------------------

export default MainApp;
