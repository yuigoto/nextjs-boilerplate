/**
 * server
 * ----------------------------------------------------------------------
 * Custom, Express-based, server for our application.
 *
 * Handles some SSR routes with Express and falls back to the main Next 
 * application, so you don't have to handle all routes with Express.
 * 
 * @author    Fabio Y. Goto <lab@yuiti.dev>
 * @since     0.0.1
 */
require("dotenv").config();

// IMPORTS
// ----------------------------------------------------------------------
const express = require("express");
const next = require("next");
const chalk = require("chalk");
const compression = require("compression");

// FLAGS
// ----------------------------------------------------------------------
const dev = (process.env.NODE_ENV === "production");
const port = process.env.PORT || 3456;

// HANDLERS
// ----------------------------------------------------------------------
const app = next({dev});
const handle = app.getRequestHandler();

// UTILITIES
// ----------------------------------------------------------------------
const log = console.log;
const routes =  require("./routes");

const executionHandler = () => {
  const server = express();

  // Serve g-zipped files
  server.use(compression());

  // Apply SSR routes
  server.use(routes);

  // Remaining routes go to Next.JS
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  // Execute
  server.listen(port, (err) => {
    if (err) throw err;

    let url = process.env.HOST;

    log(
      chalk.cyan(`> Executando em http://${url}:${port}`)
    );
  });
};

/**
 * Catches an exception, logs into the console then exits the application.
 * 
 * @param {Exception} exception 
 *     Exception to handle
 */
const exceptionHandler = (exception) => {
  console.error(exception.stack);
  process.exit(1);
};

// EXECUTION
// ----------------------------------------------------------------------
app
  .prepare()
  .then(executionHandler)
  .catch(exceptionHandler);
