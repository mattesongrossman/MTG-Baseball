const db = require("../database/connection.js");

//FINDS ALL BATTERS IN DB
const findAll = () => {
  return db.any("SELECT * FROM batters WHERE ADP <999 ORDER BY ADP ASC");
};

//FINDS ALL PITCHERS IN DB
const findAllPitchers = () => {
  return db.any("SELECT * FROM pitchers WHERE ADP <999 ORDER BY ADP ASC");
};

//ATTEMPT AT JOIN - NO COMMON DATA, SCRATCHED
const findAllPlayers = () => {
  return db.any(
    "SELECT teams.Name, teams.Team, batters.adp, pitchers.adp FROM teams JOIN batters ON teams.playerid = batters.playerid JOIN pitchers ON teams.playerid = pitchers.playerid"
  );
};

//EDIT DRAFT STATUS FOR PITCHERS AND BATTERS BELOW
const batterDraftStatus = (id, status) => {
  if (status == "true") {
    return db.none("UPDATE batters SET drafted = false WHERE playerid = $1", [
      id
    ]);
  } else {
    return db.none("UPDATE batters SET drafted = true WHERE playerid = $1", [
      id
    ]);
  }
};
const pitcherDraftStatus = (id, status) => {
  if (status == "true") {
    return db.none("UPDATE pitchers SET drafted = false WHERE playerid = $1", [
      id
    ]);
  } else {
    return db.none("UPDATE pitchers SET drafted = true WHERE playerid = $1", [
      id
    ]);
  }
};

//FINDS BATTER BY ID, NOT USED
const findBatterById = id => {
  return db.one("SELECT name FROM batters WHERE playerid = $1", [id]);
};

//ADDS PLAYER TO MYTEAM VIEWED ON myTeam.ejs
const addPlayer = data => {
  return db.none(
    `INSERT INTO fantasy_team (name, team, playerid) VALUES($[name], $[team], $[playerid])`,
    data
  );
};

//VIEWS ALL PLAYERS IN FANTASY TEAM TABLE
const getMyTeam = () => {
  return db.any("SELECT * FROM fantasy_team");
};

//DELETES PLAYER IN FANTASY TEAM TABLE
const deletePlayer = id => {
  return db.one("DELETE FROM fantasy_team WHERE playerid = $1", [id]);
};

module.exports = {
  findAll: findAll,
  findAllPitchers: findAllPitchers,
  batterDraftStatus: batterDraftStatus,
  pitcherDraftStatus: pitcherDraftStatus,
  findBatterById: findBatterById,
  getMyTeam: getMyTeam,
  addPlayer: addPlayer,
  deletePlayer: deletePlayer
};
