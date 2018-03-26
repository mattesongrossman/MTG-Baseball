const db = require("../database/connection.js");

const findAll = () => {
  return db.any("SELECT * FROM batters WHERE ADP <999 ORDER BY ADP ASC");
};

const findAllPitchers = () => {
  return db.any("SELECT * FROM pitchers WHERE ADP <999 ORDER BY ADP ASC");
};

const findAllPlayers = () => {
  return db.any(
    "SELECT teams.Name, teams.Team, batters.adp, pitchers.adp FROM teams JOIN batters ON teams.playerid = batters.playerid JOIN pitchers ON teams.playerid = pitchers.playerid"
  );
};

let draftStatus = id => {
  console.log("hi");
  return db.none("UPDATE batters SET drafted = true WHERE playerid = $1", [id]);
};

let addToTeam = () => {};

const findBatterById = id => {
  return db.one("SELECT name FROM batters WHERE playerid = $1", [id]);
};

const addPlayer = data => {
  return db.none(
    `INSERT INTO fantasy_team (name, team, playerid) VALUES($[name], $[team], $[playerid])`,
    data
  );
};

const getMyTeam = () => {
  return db.any("SELECT * FROM fantasy_team");
};

const deletePlayer = id => {
  return db.one("DELETE FROM fantasy_team WHERE playerid = $1", [id]);
};

module.exports = {
  findAll: findAll,
  findAllPitchers: findAllPitchers,
  draftStatus: draftStatus,
  findBatterById: findBatterById,
  getMyTeam: getMyTeam,
  addPlayer: addPlayer,
  deletePlayer: deletePlayer
};
