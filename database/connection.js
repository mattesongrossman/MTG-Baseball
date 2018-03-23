const pgp = require("pg-promise")({});
const connectionURL = "postgres://localhost:5432/mlb_db";
const db = pgp(connectionURL);

module.exports = db;
