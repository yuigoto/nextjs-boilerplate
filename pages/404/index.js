import React, { Component } from "react";
import { withRouter } from "next/router";

/**
 * pages/404/index
 * ----------------------------------------------------------------------
 * Explanation not found.
 *
 * @since 0.0.1
 */
class Page extends Component {
  // --------------------------------------------------------------------

  render () {
    return (
      <>
        <h1>404!?</h1>
      </>
    );
  }
}

// ----------------------------------------------------------------------

export default withRouter(Page);
