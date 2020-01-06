/**
 * routes
 * ----------------------------------------------------------------------
 * Loads and applies all route files, then returns them so they can be used 
 * on the main application.
 * 
 * @author    Fabio Y. Goto <lab@yuiti.dev>
 * @since     0.0.1
 */

// IMPORTS
// ----------------------------------------------------------------------
const { Router } = require("express");
const path = require("path");

// ROUTE FILES
// ----------------------------------------------------------------------

// Routes applied here take the path supplied as root ("/")
const test = require("./routes/test");

// APPLIYING
// ----------------------------------------------------------------------
const routes = Router();

routes.use(`/test`, test);

module.exports = routes;
