const { getList, updateList, swapItems } = require("../utils");

async function listarMes(req, res) {
  try {
    const listaDeDatas = getList("data");
    console.log(listaDeDatas);
    return res.status(200).send({ listaDeDatas });
  } catch (error) {
    return res.status(400).send({ error: "Erro ao listar" });
  }
}

module.exports = { listarMes };
