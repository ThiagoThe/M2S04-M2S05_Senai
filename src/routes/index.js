const { Router } = require("express");
const routes = Router();
const userRoutesV1 = require("./v1/user");

routes.use([userRoutesV1]);

module.exports = routes;
