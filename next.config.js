/**
 * next.config
 * ----------------------------------------------------------------------
 * Configuration file for Next, Next modules and Webpack.
 * 
 * @author    Fabio Y. Goto <lab@yuiti.dev>
 * @since     0.0.1
 */
require("dotenv").config();

// IMPORTS
// ----------------------------------------------------------------------
const path = require("path");
const withCss = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withMdx = require("@next/mdx")({
  extension: /\.mdx?$/
});

// CONFIGURATION
// ----------------------------------------------------------------------

/**
 * Use this object to define settings for loaders, plugins and Webpack.
 * 
 * @type {Object}
 */
const nextConfig = {
  /**
   * If we're using, or not, CSS modules.
   * 
   * @type {Boolean}
   */
  cssModules: true,

  /**
   * Settings for the Webpack CSS loader.
   *
   * The `getLocalIdent` function defines hashes/custom names when you're 
   * using CSS modules in React, so they won't clash with any other class.
   * 
   * @type {Object}
   */
  cssLoaderOptions: {
    importLoaders: 1,
    getLocalIdent: (loaderContext, _, localName) => {
      const fileName = path.basename(loaderContext.resourcePath);

      if (/\.module\.css$/.test(fileName)) {
        const name = fileName.replace(/\.module\.[^/.]+$/, "");

        return `${name}__${localName}`;
      }

      return localName;
    }
  },

  /**
   * Settings for the Webpack SASS loader.
   * 
   * @type {Object}
   */
  sassLoaderOptions: {
    precision: 6,
    outputStyle: "compressed",
    sourceComments: false
  },

  /**
   * Sets what can be considered page/component.
   * 
   * @type {Array}
   */
  pageExtensions: [
    "js", "jsx", "md", "mdx"
  ],

  /**
   * Use this to send environment variables to the React application.
   * 
   * @type {Object}
   */
  env: {
    HOST: process.env.HOST,
    NODE_ENV: process.env.NODE_ENV,
    PORT: procesS.env.PORT
  },

  /**
   * Webpack settings function.
   *
   * Use it to override/apply settings for the bundler.
   * 
   * @param {Object} config 
   *     Configuration object to change/apply modifications
   * @return {Object}
   */
  webpack: (config) => {
    // We're accepting `JSX` (maybe TS and TSX in the future?)
    config.resolve.extensions.push(".jsx");

    // FILE LOADER : MEDIA
    config.module.rules.push({
      test: /\.(wav|mp3|mp4|avi|mpg|mpeg|mov|ogg)$/,
      use: {
        loader: "file-loader",
        options: {
          esModule: false,
          outputPath: "static/media/",
          publicPath: "/_next/static/media",
        }
      }
    });

    // FILE LOADER : IMAGES
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif)$/,
      use: {
        loader: "file-loader",
        options: {
          esModule: false,
          outputPath: "static/img/",
          publicPath: "/_next/static/img",
        }
      }
    })

    // FILE LOADER : OTHER FILE TYPES
    config.module.rules.push({
      test: /\.(pdf|doc|docx|xls|xlsx|ppt|pptx|eot|otf|ttf|woff|woff2|svg)$/,
      use: {
        loader: "file-loader",
        options: {
          esModule: false,
          outputPath: "static/files/",
          publicPath: "/_next/static/files",
        }
      }
    });
    
    /**
     * Resolves includes made with absolute paths to the root of the repository, 
     * so we can do this:
     * 
     * `import { X } from "components/x"`
     * 
     * Instead of:
     * 
     * `import { X } from "../../components/x"`
     */
    config.resolve.modules.push(path.resolve("./"));

    return config;
  }
};

// EXPORT
// ----------------------------------------------------------------------
module.exports = withMdx(
  withCss(
    withSass(
      nextConfig
    )
  )
);
