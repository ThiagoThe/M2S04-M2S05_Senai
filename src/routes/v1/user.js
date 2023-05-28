const express = require("express");
const userRoutesV1 = express.Router();
const { patchList, listar } = require("../../controllers/user");

userRoutesV1.patch("/list", patchList);
userRoutesV1.get("/listar", listar);

module.exports = userRoutesV1;
