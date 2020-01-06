import React from "react";
import App from "next/app";

class MainApplication extends App {
  render () {
    const { 
      Component, 
      pageProps
    } = this.props;

    return (
      <Component {...pageProps}/>
    );
  }
}

export default MainApplication;
