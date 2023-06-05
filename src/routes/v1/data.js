const express = require("express");
const dataRoutesV1 = express.Router();
const { listarMes } = require("../../controllers/data");

dataRoutesV1.get("/data/:number", listarMes);

module.exports = dataRoutesV1;
