const { getList } = require("../../src/utils.js");

async function filter(req, res) {
  try {
    const users = getList("user");
    const { ageMin, ageMax, state, job } = req.query;
    let filteredUsers = users;

    if (!users || users.length === 0) {
      return res.status(204).send();
    }

    // Pelo menos um dos paramêtros tem que ser enviado
    if (!ageMin && !ageMax && !state && !job) {
      return res.status(400).json({ message: "Parâmetro vazio ou inválido" });
    }

    if (ageMin) {
      filteredUsers = filteredUsers.filter(
        (user) => user.age >= parseInt(ageMin)
      );

      if (filteredUsers.length === 0) {
        return res.status(404).json({ message: "Nenhum usuário encontrado" });
      }

      return res.status(200).json(filteredUsers);
    }

    if (ageMax) {
      filteredUsers = filteredUsers.filter(
        (user) => user.age <= parseInt(ageMax)
      );

      if (filteredUsers.length === 0) {
        return res.status(404).json({ message: "Nenhum usuário encontrado" });
      }

      return res.status(200).json(filteredUsers);
    }

    if (state) {
      filteredUsers = filteredUsers.filter(
        (user) => user.state.toLowerCase() === state.toLowerCase()
      );

      if (filteredUsers.length === 0) {
        return res.status(404).json({ message: "Nenhum usuário encontrado" });
      }

      return res.status(200).json(filteredUsers);
    }

    if (job) {
      filteredUsers = filteredUsers.filter(
        (user) => user.job.toLowerCase() === job.toLowerCase()
      );

      if (filteredUsers.length === 0) {
        return res.status(404).json({ message: "Nenhum usuário encontrado" });
      }

      return res.status(200).json(filteredUsers);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}

module.exports = { filter };

module.exports = { filter };
