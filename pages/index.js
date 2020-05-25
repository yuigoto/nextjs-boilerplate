import React, { Component } from "react";
import { withRouter } from "next/router";

import { PageHead } from "components/head/PageHead";
import Styles from "scss/Test.module.scss";

class Page extends Component {
  render () {
    return (
      <>
        <PageHead title={"Next.JS Boilerplate"}/>

        <div className={Styles.demo}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi aperiam consequuntur cum ducimus error explicabo harum ipsa minima nostrum odio odit pariatur, quae quam quidem ratione rerum sequi. Odio?</p>
        </div>
      </>
    )
  }
}

// ----------------------------------------------------------------------

export default withRouter(Page);
