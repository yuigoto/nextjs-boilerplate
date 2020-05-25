import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { BooleanHashMapProp } from "core/utils/PropUtils";

/**
 * components/base/Footer
 * ----------------------------------------------------------------------
 * Base site footer, used in `Layout`.
 *
 * @since 0.0.1
 */
export const Footer = ({id, className}) => {
  let _attr = {};
  if (id) _attr.id = id;
  if (className) _attr.className = classnames(className);

  return (
    <footer {..._attr}>
      <p>&copy;2020 YUITI</p>
    </footer>
  );
};

// ----------------------------------------------------------------------

Footer.defaultProps = {
  id: null,
  className: null
};

Footer.propTypes = {
  id: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    BooleanHashMapProp
  ])
};
