const express = require("express");
const listRoutesV1 = express.Router();
const { patchList, listar } = require("../../controllers/list");

listRoutesV1.patch("/list", patchList);
listRoutesV1.get("/listar", listar);

module.exports = listRoutesV1;
