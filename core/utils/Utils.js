/**
 * core/utils/Utils
 * ----------------------------------------------------------------------
 * Exports utility functions for general use.
 * 
 * @author    Fabio Y. Goto <lab@yuiti.dev>
 * @since     0.0.1
 */

import queryString from "query-string";

/**
 * Accents dictionary.
 *
 * @type {Object}
 */
const ACCENT = {
  source: "ÁÀÄÂÃÅÉÈÊËÍÌÎÏÓÒÔÕØÚÙÛÜÝÇÑáàäâãåéèêëíìîïóòôõøúùûüýÿçñ$&@°ºª¥£¢μ§",
  clean: "AAAAAAEEEEIIIIOOOOOUUUUYCNaaaaaaeeeeiiiiooooouuuuyycnseaooaylcus"
};

/**
 * Parses query string and returns key/value pairs.
 *
 * @param {*} query 
 *     String to be parsed
 * @returns {Object}
 */
export const ParseQueryArgs = (query) => {
  return queryString.parse(query);
};

/**
 * Converts data from milliseconds into a time/date string.
 *
 * @param {String|Number} date
 *     Date value in milliseconds
 * @param {Boolean} withTime 
 *     Should we return date or date with time?
 * @param {String} locale 
 *     Locale code to be used when converting 
 * @returns {String}
 */
export const DatetimeToLocaleDate = (
  date, 
  withTime = false, 
  locale = "pt-BR"
) => {
  if (typeof date !== "number") date = parseInt(date);

  if (isNaN(date)) return null;

  let currentDate = new Date(date);

  if (withTime === true) {
    return currentDate.toLocaleString(locale);
  } else {
    return currentDate.toLocaleDateString(locale);
  }
};

/**
 * Does soft-merging of objects from arguments, a VERY lazy `Object.assign`.
 *
 * @param {...*} args
 *     Objects to merge 
 * @returns {Object}
 */
export const SoftMerge = () => {
  if (arguments.length > 0) {
    let mainArguments = {};

    for (let i = 0; i < arguments.length; i++) {
      let keys = Object.keys(arguments[i]);

      for (let k of keys) {
        mainArguments[k] = arguments[i][k];
      }
    }

    return mainArguments;
  }

  return {};
};

/**
 * Merges objects with some recursion.
 *
 * @param {Object} target
 *     Target object
 * @param {Object} source 
 *     Object to merge
 * @returns {*}
 */
export const MergeObjects = (target, source) => {
  for (let key of Object.keys(source)) {
    if (source[key] instanceof Object) {
      Object.assign(
        source[key],
        MergeObjects(target[key], source[key])
      );
    }
  }

  Object.assign(target || {}, source);

  return target;
};

/**
 * Returns a URL-encoded string from key/value pairs in an object.
 *
 * Port of a jQuery implementation available in:
 * https://github.com/knowledgecode/jquery-param/blob/master/jquery-param.js
 *
 * @param {Object|*} toSerialize
 *     Object to serialize 
 * @returns {String}
 */
export const SerializeParams = (toSerialize) => {
  /**
   * Stores serialized data.
   *
   * @type {Array}
   */
  let serialized = [];

  /**
   * Adds entries into the serialization array.
   *
   * @param {String} key
   *     Key
   * @param {*} val
   *     Value
   */
  let add = (key, val) => {
    val = (typeof val === "function") ? val() : val;
    val = (val === null || val === undefined) ? "" : val;
    serialized[serialized.length] = encodeURIComponent(key)
      + "="
      + encodeURIComponent(val);
  };

  /**
   * Serializes items from the object into a URL-encoded string.
   *
   * @param {String} prefix
   *     Prefix to add to each entry
   * @param {*} obj
   *     Object to serialize
   * @returns {Array}
   */
  let buildParam = (prefix, obj) => {
    let i,
      len,
      key;

    if (prefix) {
      if (Array.isArray(obj)) {
        for (i = 0, len = obj.length; i < len; i++) {
          buildParam(
            prefix
            + "["
            + ((typeof obj[i] === "object" && obj[i]) ? i : "")
            + "]",
            obj[i]
          );
        }
      } else if (String(obj) === "[object Object]") {
        for (key in obj) {
          buildParam(prefix + "[" + key + "]", obj[key]);
        }
      } else {
        add(prefix, obj);
      }
    } else if (Array.isArray(obj)) {
      for (i = 0, len = obj.length; i < len; i++) {
        if (
          obj[i].hasOwnProperty("name")
          && obj[i].hasOwnProperty("value")
        ) {
          add(obj[i].name, obj[i].value);
        } else {
          buildParam("[" + i + "]", obj[i]);
        }
      }
    } else {
      for (key in obj) {
        buildParam(key, obj[key]);
      }
    }

    return serialized;
  };

  return buildParam("", toSerialize).join("&");
};

/**
 * Simple sanitization by replacing from dictionary, very lazy.
 *
 * @param {String} value
 *     String to sanitize 
 * @returns {String}
 */
export const Sanitize = (value) => {
  for (let i = 0; i < ACCENT.source.length; i++) {
    value = value.replace(
      ACCENT.source[i],
      ACCENT.clean[i]
    );
  }

  return value.replace("ß", "ss").replace(/^-+|-+$/g, "");
};

/**
 * Sanitizes a string to a URL-safe string, no special characters, all lowercase
 * separated by dashes.
 *
 * @param {String} value
 *     String to be sanitized
 * @param {Boolean} trim
 *     Should we trim, or not? That's the question
 * @returns {String}
 */
export const SanitizeToSafeUrlName = (value, trim = false) => {
  trim = !(trim === false);

  if (typeof value !== "string" && value.toString) {
    value = value.toString();
  } else if (!value.toString) {
    return "";
  }

  if (trim === true) value = value.trim();

  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s\s/g, "-")
    .replace(/\s/g, "-");
};

/**
 * Pads zeroes, or any other character, to the left of the number specified.
 *
 * @param {Number} number 
 *     Number to pad
 * @param {Number} width
 *     Length of the result
 * @param {String} char
 *     Character to use as padding
 * @returns {String}
 */
export const PadWithZeroes = (number, width, char = '0') => {
  char = char || '0';
  number = number + '';
  return (number.length >= width)
    ? number
    : new Array(width - number.length + 1).join(char) + number;
};

/**
 * Removes non-digit characters from a string.
 * 
 * USE WITH CARE!
 *
 * @param {String|Number} Value 
 *     String to clean
 * @returns {String}
 */
export const RemoveNonDigits = (value) => {
  if (typeof value === "number") value = value.toString();
  if (value === null || value === undefined || value === "") return "";
  return value.replace(/[^\d]/g, "");
};

/**
 * Formats `value` for the specified `locale` and `currency`.
 *
 * @param {Number} value
 *     Value to convert
 * @param {String} locale
 *     Locale code
 * @param {String} currency
 *     Currency code
 * @returns {String|Boolean}
 */
export const ToCurrency = (value, locale = "pt-BR", currency = "BRL") => {
  if (typeof value !== "number") return false;
  
  locale = locale || "pt-BR";
  currency = currency || "BRL";

  let numberFormat = new Intl.NumberFormat(
    locale,
    {
      style: "currency",
      currency: currency
    }
  );

  return numberFormat.format(value);
};

/**
 * Extracts the YouTube video ID from a URL, short URL, embed code or object 
 * embed code.
 *
 * @param {String} urlOrEmbed
 *     String for extraction 
 * @returns {String|Boolean}
 */
export const ExtractYouTubeVideoId = (urlOrEmbed) => {
  let regexFragmentA = "(youtu.be|youtube.com)/",
    regexFragmentB = "(watch?(.*&?)?v=|(embed|v)/)?([^?&\"'>\r\n]+)",
    regex = new RegExp(regexFragmentA + regexFragmentB),
    matches;

  matches = regex.exec(urlOrEmbed.trim());
  if (matches !== null && matches !== "" && matches !== []) {
    return matches[matches.length - 1];
  }
  return false;
};
