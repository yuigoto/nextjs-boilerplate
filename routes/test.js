/**
 * routes/test
 * ----------------------------------------------------------------------
 * Test route files, to demonstrate how to declare SSR routes.
 * 
 * @author    Fabio Y. Goto <lab@yuiti.dev>
 * @since     0.0.1
 */

// IMPORTS
// ----------------------------------------------------------------------
const { Router } = require("express");

// SETTING ROUTES
// ----------------------------------------------------------------------
const routes = Router();

routes.all(
  "/",
  (req, res) => {
    res.redirect(`/`);
  }
);

module.exports = routes;
