const db = require("../database/connection.js");

const findAll = () => {
  return db.any("SELECT * FROM batter_table WHERE ADP <999 ORDER BY ADP ASC");
};

const findAllPitchers = () => {
  return db.any("SELECT * FROM pitcher_table WHERE ADP <999 ORDER BY ADP ASC");
};

let draftStatus = id => {
  console.log("hi");
  return db.none("UPDATE batter_table SET drafted = true WHERE playerid = $1", [
    id
  ]);
};

module.exports = {
  findAll: findAll,
  findAllPitchers: findAllPitchers,
  draftStatus: draftStatus
};
