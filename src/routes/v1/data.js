const express = require("express");
const dataRoutesV1 = express.Router();
const { listarMes } = require("../../controllers/data");

dataRoutesV1.get("/listar-datas/:mes", listarMes);

module.exports = dataRoutesV1;
