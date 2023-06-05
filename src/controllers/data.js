async function listarMes(req, res) {
  try {
    const mes = parseInt(req.params.mes); // ex:listar-datas/11
    const ano = new Date().getFullYear();

    // Validação do mês
    if (mes < 1 || mes > 12) {
      return res
        .status(400)
        .json({ messagem: "O mês deve ser um número entre 1 e 12" });
    }

    // criando as datas
    const dataInicial = new Date(ano, mes - 1, 1);
    const dataFinal = new Date(ano, mes, 0);
    const listaDatas = [];

    for (
      let data = dataInicial;
      data <= dataFinal;
      data.setDate(data.getDate() + 1)
    ) {
      const dia = data.getDate();
      const mesOriginal = (data.getMonth() + 1).toString().padStart(2, "0");
      const anoOriginal = data.getFullYear();
      const dataOriginal = `${dia}/${mesOriginal}/${anoOriginal}`;
      listaDatas.push(dataOriginal);
    }

    return res.status(200).json({ listaDatas });
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Ocorreu um erro ao processar a solicitação" });
  }
}

module.exports = { listarMes };
