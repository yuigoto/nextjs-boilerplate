import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import { BooleanHashMapProp } from "core/utils/PropUtils";

/**
 * components/base/Header
 * ----------------------------------------------------------------------
 * Base site header, used in `Layout`.
 *
 * @since 0.0.1
 */
class Header extends Component {
  render () {
    const {
      id,
      className
    } = this.props;

    let _attr = {};
    if (id) _attr.id = id;
    if (className) _attr.className = classnames(className);

    return (
      <header {..._attr}>
        <h1>SITE</h1>
      </header>
    );
  }
}

// ----------------------------------------------------------------------

Header.defaultProps = {
  id: null,
  className: null
};

Header.propTypes = {
  id: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    BooleanHashMapProp
  ])
};

// ----------------------------------------------------------------------

export {
  Header
};
