const { Router } = require("express");
const routes = Router();
const listRoutesV1 = require("./v1/list");
const dataRoutesV1 = require("./v1/data");
const produtoRoutesv1 = require("./v1/produtos");
const userRoutesV1 = require("./v1/user");

routes.use([listRoutesV1]);
routes.use([dataRoutesV1]);
routes.use([produtoRoutesv1]);
routes.use([userRoutesV1]);

module.exports = routes;
