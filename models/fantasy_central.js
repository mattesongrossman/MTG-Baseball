const db = require("../database/connection.js");

const findAll = () => {
  return db.any("SELECT * FROM batters WHERE ADP <999 ORDER BY ADP ASC");
};

const findAllPitchers = () => {
  return db.any("SELECT * FROM pitchers WHERE ADP <999 ORDER BY ADP ASC");
};

let draftStatus = id => {
  console.log("hi");
  return db.none("UPDATE batters SET drafted = true WHERE playerid = $1", [id]);
};

module.exports = {
  findAll: findAll,
  findAllPitchers: findAllPitchers,
  draftStatus: draftStatus
};
