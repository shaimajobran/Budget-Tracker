//creating this route file to handle get requests
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("./api", apiRoutes);

module.exports = router;