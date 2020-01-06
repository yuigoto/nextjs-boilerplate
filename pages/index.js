import React, { Component } from "react";
import { withRouter } from "next/router";

class Page extends Component {
  render () {
    return (
      <>
        <h1>Hello</h1>
      </>
    );
  }
}

export default withRouter(Page);
