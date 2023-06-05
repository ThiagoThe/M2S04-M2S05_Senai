const { getList, updateList } = require("../utils");

const patchList = async (req, res) => {
  try {
    const lista = getList("list");
    const { usuario } = req.body;
   
    // Verificação dos nomes na lista
    function checkUsuario(usuario){
    return lista.some(function(el) {
      return el.toLowerCase() === usuario.toLowerCase();
    });
   }
   if(!checkUsuario(usuario)){
      return res.status(404).json({ messagem:`O usuario ${usuario} não é um convidado.` });
   }

    // Troca o indice 0 por qualquer outro indice
    let index = Math.floor(Math.random() * (lista.length -1)) +1;
    let temp = lista[0];
    lista[0] = lista[index];
    lista[index] = temp;
   
    // Troca o Danilo pelo Pedro
    if(lista[0] === "Pedro"){
      let daniloIndex = lista.indexOf("Danilo");
      lista(daniloIndex) = "Pedro";
      lista[0] = "Danilo";
     
    } 
    updateList(lista);
    res.status(200).json({lista, messagem: "A lista foi atualizada com sucesso" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const listar = async (req, res) => {
  try {
    const listaCompleta = getList("list");

    return res.status(200).json({ listaCompleta });
  } catch (error) {
    return res.status(400).send({ error: "Erro ao listar" });
  }
};

module.exports = { patchList, listar };
