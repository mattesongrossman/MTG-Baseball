// Import pg-promise and initialize the library with an empty object.
const pgp = require("pg-promise")({});

// Prepare the connection URL from the format: 'postgres://username:password@host:port/database';
const connectionURL = "postgres://localhost:5432/mlb_db";

// Creating a new database connection with the provided URL.
const db = pgp(connectionURL);

const findAll = () => {
  //let offset = (page - 1) * 2;
  return db.any("SELECT * FROM player_table WHERE ADP <999 ORDER BY ADP ASC");
};

const findById = id => {
  let idFind = db.one("SELECT * FROM player_table WHERE playerid = $1", [id]);
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
