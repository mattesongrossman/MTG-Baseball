const pgp = require("pg-promise")({});
const connectionURL = "postgres://localhost:5432/mlb_db";
const db = pgp(connectionURL);

const findAll = () => {
  return db.any("SELECT * FROM batter_table WHERE ADP <999 ORDER BY ADP ASC");
};

const findById = id => {
  let idFind = db.one("SELECT * FROM batter_table WHERE playerid = $1", [id]);
  let fP = `https://www.fangraphs.com/statss.aspx?playerid=${idFind}`;
  return fP;
};
//
// const createNewTask = data => {
//   return db.one(
//     "INSERT INTO tasks(subject, content) VALUES($[subject], $[content]) RETURNING id",
//     data
//   );
// };
//
// const editTask = (id, userInput) => {
//   return db.none("UPDATE tasks SET subject = $1, content = $2 WHERE id = $3", [
//     userInput.subject,
//     userInput.content,
//     id
//   ]);
// };
//
// const deleteTask = id => {
//   return db.one("DELETE FROM tasks WHERE id = $1", [id]);
// };

module.exports = {
  findAll: findAll,
  findById: findById
};
