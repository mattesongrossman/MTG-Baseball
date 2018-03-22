const pgp = require("pg-promise")({});
const connectionURL = "postgres://localhost:5432/mlb_db";
const db = pgp(connectionURL);

const findAll = () => {
  return db.any("SELECT * FROM pitcher_table WHERE ADP <999 ORDER BY ADP ASC");
};

const findById = id => {
  let idFind = db.one("SELECT * FROM pitcher_table WHERE playerid = $1", [id]);
  let fP = `https://www.fangraphs.com/statss.aspx?playerid=${idFind}`;
  return fP;
};

module.exports = {
  findAll: findAll,
  findById: findById
};
