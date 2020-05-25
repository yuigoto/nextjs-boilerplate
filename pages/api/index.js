/**
 * pages/api/index
 * ----------------------------------------------------------------------
 * Root API endpoint, for test purposes.
 *
 * @param {*} req
 *     Request object
 * @param {*} res
 *     Response object
 * @constructor
 */
export default (req, res) => {
  res.statusCode = 200;
  res.json({
    name: "NextJS Boilerplate",
    version: "0.0.1",
    author: "Fabio Y. Goto <lab@yuiti.dev>",
    date: (new Date()).toISOString()
  });
};
