/**
 * routes/test
 * ----------------------------------------------------------------------
 * Test route file.
 *
 * @since 0.0.1
 */

const { Router } = require("express");

const routes = Router();

routes.all(
  "/",
  (req, res) => {
    res.redirect("/");
  }
);

module.exports = routes;
