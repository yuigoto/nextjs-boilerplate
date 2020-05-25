import PropTypes from "prop-types";

/**
 * core/utils/PropUtils
 * ----------------------------------------------------------------------
 * Provides utilities for custom prop type checking.
 *
 * @since 0.0.1
 */

/**
 * Custom prop type checker for boolean hash maps.
 *
 * @param {*} props
 *     Object containing props to test
 * @param {string} propName
 *     Prop name to test against
 * @param {string} componentName
 *     Component name where the prop is used
 * @constructor
 */
export const BooleanHashMapProp = (
  props,
  propName,
  componentName
) => {
  let keys = Object.keys(props[propName]),
      vals = Object.values(props[propName]),
      error = PropTypes.checkPropTypes(
        {
          keys: PropTypes.arrayOf(PropTypes.string),
          vals: PropTypes.arrayOf(PropTypes.bool)
        },
        {
          keys,
          vals
        },
        'prop',
        componentName
      );
  if (error) return error;
  return null;
};
