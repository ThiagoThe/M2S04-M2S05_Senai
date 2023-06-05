const { Router } = require("express");
const routes = Router();
const userRoutesV1 = require("./v1/user");
const dataRoutesV1 = require("./v1/data");

routes.use([userRoutesV1]);
routes.use([dataRoutesV1]);

module.exports = routes;
