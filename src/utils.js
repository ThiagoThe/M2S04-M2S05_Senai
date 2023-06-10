const fs = require("fs");

function getList(nomeDoBD) {
  try {
    const filePath = `src/database/${nomeDoBD}.json`;
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const listData = JSON.parse(fileContent);
      if (Array.isArray(listData)) {
        return listData;
      } else if (typeof listData === "object") {
        return [listData]; // Retorna um array com o único objeto presente no arquivo
      } else {
        return []; // Retorna um array vazio se os dados não forem válidos
      }
    } else {
      return []; // Retorna um array vazio se o arquivo não existir
    }
  } catch (error) {
    throw error;
  }
}

function updateList(nomeDoBD, dados) {
  try {
    fs.writeFileSync(`src/database/${nomeDoBD}.json`, JSON.stringify(dados));
  } catch (error) {
    throw error;
  }
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

module.exports = { getList, updateList, generateId };
