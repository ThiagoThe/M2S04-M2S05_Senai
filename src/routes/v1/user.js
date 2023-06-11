const express = require("express");
const userRoutesV1 = express.Router();
const { filter, changeData } = require("../../controllers/user");

userRoutesV1.get("/search", filter);
userRoutesV1.put("/update/:id", changeData);

module.exports = userRoutesV1;
