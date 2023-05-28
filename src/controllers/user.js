const { getList, updateList, swapItems } = require("../utils");

const patchList = async (req, res) => {
  try {
    const list = getList();
    const { index, name } = req.body;

    switch (index) {
      case 0:
        if (list.includes(name)) {
          const newIndex = Math.floor(Math.random() * (list.length - 1)) + 1;
          swapItems(list, index, newIndex);
          updateList(list);
          res.status(200).json({ message: "List updated", list });
        } else {
          res
            .status(400)
            .json({ message: "O convidado não pertence a esta lista" });
        }
        break;
      case -1:
        if (list.includes("Danilo") && list.includes("Pedro")) {
          swapItems(list, list.indexOf("Danilo"), list.indexOf("Pedro"));
          updateList(list);
          res.status(200).json({ message: "List updated", list });
        } else {
          res
            .status(400)
            .json({ message: "Não foi possivel realizar a troca" });
        }
      default:
        res.status(400).json({ message: "Indíce inválido" });
        break;
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao processar a requisição" });
  }
};

const listar = async (req, res) => {
  try {
    const listaCompleta = getList();
    return res.status(200).json({ listaCompleta });
  } catch (error) {
    return res.status(400).send({ error: "Erro ao listar" });
  }
};

module.exports = { patchList, listar };
