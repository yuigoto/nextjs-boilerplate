/**
 * core/utils/ServerUtils
 * ----------------------------------------------------------------------
 * Exports an object providing utility functions for general use.
 * 
 * This is mostly used on server-side by `server.js` or `routes.js`, since they 
 * don't use ES6/7/Next, and `Utils.js` is out of question to use.
 * 
 * There are (far) better solutions to this! I'm just lazy! :P
 * 
 * @author    Fabio Y. Goto <lab@yuiti.dev>
 * @since     0.0.1
 */
const ServerUtils = {};

/**
 * Sanitizes a string to a URL-safe string, no special characters, all lowercase
 * separated by dashes.
 *
 * @param {string} value
 *     String to be sanitized
 * @returns {string}
 */
ServerUtils.sanitizeToSafeUrlName = (value) => {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s\s/g, "-")
    .replace(/\s/g, "-");
};

module.exports = ServerUtils;
