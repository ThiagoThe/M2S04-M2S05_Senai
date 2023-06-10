const express = require("express");
const produtoRoutesv1 = express.Router();
const { salvarProdutos } = require("../../controllers/produtos");

produtoRoutesv1.post("/cadastrar", salvarProdutos);

module.exports = produtoRoutesv1;
