/**
 * routes
 * ----------------------------------------------------------------------
 * Loads and applies all application routes.
 *
 * @since 0.0.1
 */
const { Router } = require("express");

// ----------------------------------------------------------------------

const test = require("./routes/test");

// ----------------------------------------------------------------------

const routes = Router();
routes.use("/test", test);
module.exports = routes;
