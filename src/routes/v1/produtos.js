const express = require("express");
const produtoRoutesv1 = express.Router();
const {
  salvarProdutos,
  deletarProdutos,
} = require("../../controllers/produtos");

produtoRoutesv1.post("/cadastrar", salvarProdutos);
produtoRoutesv1.delete("/deletar/:id", deletarProdutos);

module.exports = produtoRoutesv1;
