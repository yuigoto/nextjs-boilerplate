import React, { Component } from "react";

/**
 * pages/_error
 * ----------------------------------------------------------------------
 * Overrides error handling for 404 and 500 pages only in production.
 *
 * @since 0.0.1
 */
export default class ErrorPage extends Component {
  render () {
    return (
      <>
        <p>Oops! An unexpected error occurred on our servers! Sorry for that!</p>
      </>
    );
  }
}
