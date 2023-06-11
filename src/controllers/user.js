const { getList, updateList } = require("../../src/utils.js");

async function filter(req, res) {
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
}

async function changeData(req, res) {
  const { id } = req.params;
  const userId = parseInt(id);
  const { name, age, state, job } = req.body;
  const users = getList("user");

  if (!users) {
    return res.status(400).send({ message: "Não há usuários cadastrados" });
  }

  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).send({ message: " id não encontrado" });
  }

  const currentUser = users[userIndex];
  const newInfo = {};

  if (name && name !== currentUser.name) {
    newInfo.name = name;
  }

  if (age && age !== currentUser.age) {
    newInfo.age = age;
  }

  if (state && state !== currentUser.state) {
    newInfo.state = state;
  }

  if (job && job !== currentUser.job) {
    newInfo.job = job;
  }

  if (Object.keys(newInfo).length === 0) {
    return res.status(200).send({ message: "não há nada para alterar" });
  }

  const newDatas = users.map((user) => {
    if (user.id === userId) {
      return {
        id: user.id,
        name: name ? name : user.name,
        age: age ? age : user.age,
        state: state ? state : user.state,
        job: job ? job : user.job,
      };
    }

    return user;
  });

  updateList("user", newDatas);
  return res.status(200).send({ message: "Usuário atualizado com sucesso" });
}

module.exports = { filter, changeData };
