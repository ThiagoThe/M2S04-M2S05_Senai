const express = require("express");
const userRoutesV1 = express.Router();
const { filter } = require("../../controllers/user");

userRoutesV1.get("/search", filter);

module.exports = userRoutesV1;
