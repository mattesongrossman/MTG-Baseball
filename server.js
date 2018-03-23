const express = require("express");
const app = express();
const PORT = 4567;
const bodyParser = require("body-parser");
const players = require("./models/fantasy_central");
const findAll = players.findAll;
const findAllPitchers = players.findAllPitchers;
const draftStatus = players.draftStatus;

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const methodOverride = require("method-override");

app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(express.static("assets"));

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

app.get("/", (request, response) => {
  findAll().then(playerData => {
    response.render("index", { playerData: playerData });
  });
});

app.get("/fantasy_central", (request, response) => {
  findAll().then(playerData => {
    response.render("fantasy_central", { playerData: playerData });
  });
});
app.post("/fantasy_central", (request, response) => {
  findAll().then(playerData => {
    response.render("fantasy_central", { playerData: playerData });
  });
});

app.get("/fantasy_central_pitchers", (request, response) => {
  findAllPitchers().then(playerData => {
    response.render("fantasy_central_pitchers", { playerData: playerData });
  });
});

app.get("/stats", (request, response) => {
  findAll().then(playerData => {
    response.render("stats", { playerData: playerData });
  });
});

app.get("/links", (request, response) => {
  findAll().then(playerData => {
    response.render("links", { playerData: playerData });
  });
});
