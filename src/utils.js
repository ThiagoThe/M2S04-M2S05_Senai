const { log } = require("console");
const fs = require("fs");

function getList(nomeDoBD) {
  try {
    const listData = JSON.parse(
      fs.readFileSync(`src/database/${nomeDoBD}.json`, "utf-8")
    );
    return listData;
  } catch (error) {
    throw error;
  }
}

function updateList(list) {
  try {
    fs.writeFileSync("src/database/list.json", JSON.stringify(list));
  } catch (error) {
    throw error;
  }
}

module.exports = { getList, updateList };
