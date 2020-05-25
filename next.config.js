/**
 * Config
 * ----------------------------------------------------------------------
 * Opinionated config file.
 *
 * @since     0.0.1
 */
require("dotenv").config();

const path        = require("path");

/**
 * Configuration object.
 *
 * @type {*}
 */
const nextConfig  = {};

/**
 * Passes environment variables to the application.
 *
 * @type {*}
 */
nextConfig.env = {};

/**
 * Makes an `index.html` for every statically exported page, so you can
 * access it from `/[page-name]`, instead of `/[page-name].html`.
 *
 * @type {boolean}
 */
nextConfig.exportTrailingSlash = true;

/**
 * Static export path mappings.
 *
 * @param defaultPathMap
 * @param dev
 * @param dir
 * @param outDir
 * @param distDir
 * @param buildId
 * @returns {Promise<*>}
 */
nextConfig.exportPathMap = async (
  defaultPathMap,
  {
    dev,
    dir,
    outDir,
    distDir,
    buildId
  }
) => {
  return {
    "/": { page: "/" }
  };
};

/**
 * SASS/SCSS compiler options object.
 *
 * @type {*}
 */
nextConfig.sassOptions = {
  includePaths: [path.join(__dirname, "scss")],
  precision: 8,
  outputStyle: "compressed",
  sourceComments: false
};

/**
 * Sets which file extensions to be considered as pages.
 *
 * @type {string[]}
 */
nextConfig.pageExtensions = [
  "js",
  "jsx"
];

/**
 * Webpack configuration object.
 *
 * @param {*} config
 *     Configuration object in which additional options will be set
 * @returns {*}
 */
nextConfig.webpack = (config) => {
  // Allow JSX files
  config.resolve.extensions.push(".jsx");

  // FILE LOADER
  // --------------------------------------------------------------------

  // Media
  config.module.rules.push({
    test: /\.(wav|mp3|mp4|avi|mpg|mpeg|mov|ogg)$/,
    use: {
      loader: "file-loader",
      options: {
        esModule: false,
        outputPath: "static/media",
        publicPath: "/_next/static/media"
      }
    }
  });

  // Images
  config.module.rules.push({
    test: /\.(png|jpg|jpeg|gif)$/,
    use: {
      loader: "file-loader",
      options: {
        esModule: false,
        outputPath: "static/img",
        publicPath: "/_next/static/img"
      }
    }
  });

  // Documents
  config.module.rules.push({
    test: /\.(pdf|doc|docx|xls|xlsx|ppt|pptx)$/,
    use: {
      loader: "file-loader",
      options: {
        esModule: false,
        outputPath: "static/data",
        publicPath: "/_next/static/data"
      }
    }
  });

  // Fonts
  config.module.rules.push({
    test: /\.(eot|otf|ttf|woff|woff2|svg)$/,
    use: {
      loader: "file-loader",
      options: {
        esModule: false,
        outputPath: "static/fonts",
        publicPath: "/_next/static/fonts"
      }
    }
  });
  
  // --------------------------------------------------------------------

  config.module.rules.push(
    {
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: {
        mode: ["react-component"]
      }
    }
  );

  /**
   * Resolves includes made with an absolute path, considering the root of 
   * the project folder.
   */
  config.resolve.modules.push(
    path.resolve("./")
  );

  return config;
};

// ----------------------------------------------------------------------

module.exports = nextConfig;
