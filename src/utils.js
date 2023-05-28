const fs = require("fs");

function getList() {
  try {
    const listData = JSON.parse(
      fs.readFileSync("src/database/list.json", "utf-8")
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

function swapItems(list, index1, index2) {
  const temp = list[index1];
  list[index1] = list[index2];
  list[index2] = temp;
}

module.exports = { getList, updateList, swapItems };
