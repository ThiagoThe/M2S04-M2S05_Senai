const { getList, updateList, generateId } = require("../utils");

const salvarProdutos = async (req, res) => {
  try {
    const { item } = req.body;

    if (!item) {
      return res.status(406).send({ mensagem: "O item não pode ser vazio" });
    }

    if (typeof item !== "string") {
      return res.status(412).send({ mensagem: "O item deve ser tipo string" });
    }

    const produtos = getList("produtos");

    const novoProduto = {
      id: generateId(),
      item,
    };

    if (produtos.length === 0 || produtos === null) {
      updateList(novoProduto, "produtos");
      return res.status(201).send({
        mensagem: "Produto cadastrado com sucesso",
        dados: getList("produtos"),
      });
    }

    const totalProdutos = [...produtos, novoProduto];
    updateList("produtos", totalProdutos);
    return res
      .status(201)
      .send({ mensagem: "Produto criado e lista atualizada" });
  } catch (error) {
    res.status(400).send({ mensagem: error.message });
  }
};

module.exports = { salvarProdutos };
