import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { BooleanHashMapProp } from "core/utils/PropUtils";
import { Header } from "components/base/Header";
import { Footer } from "components/base/Footer";

/**
 * components/base/Layout
 * ----------------------------------------------------------------------
 * Master layout, used to persist page-layout between every page.
 *
 * @since 0.0.1
 */
class Layout extends Component {
  render () {
    const {
      id,
      className,
      children
    } = this.props;

    let _attr = {};
    if (id) _attr.id = id;
    if (className) _attr.className = classnames(className);

    return (
      <div {..._attr}>
        <Header id={"site-header"} className={"site-header"}/>

        {children}

        <Footer id={"site-footer"} className={"site-footer"}/>
      </div>
    );
  }
}

// ----------------------------------------------------------------------

Layout.defaultProps = {
  id: null,
  classsName: null,
  children: null
};

Layout.propTypes = {
  id: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    BooleanHashMapProp
  ]),
  children: PropTypes.node
};

// ----------------------------------------------------------------------

export {
  Layout
};
