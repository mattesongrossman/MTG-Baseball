const express = require("express");
const app = express();
const PORT = 4567;
const bodyParser = require("body-parser");
const players = require("./models/fantasy_central");
const findAll = players.findAll;
const findAllPitchers = players.findAllPitchers;
const findById = players.findById;

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const methodOverride = require("method-override");

app.set("view engine", "ejs");

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use(express.static("assets"));
//app.use("/public", express.static("public"));
//app.use("/vendor", express.static("vendor"));

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

app.get("/", (request, response) => {
  findAll().then(playerData => {
    response.render("index", { playerData: playerData });
  });
});

app.get("/fantasy_central", (request, response) => {
  //const page = parseInt(request.query.page) || 1;
  findAll().then(playerData => {
    response.render("fantasy_central", { playerData: playerData });
  });
});
app.get("/fantasy_central_pitchers", (request, response) => {
  //const page = parseInt(request.query.page) || 1;
  findAllPitchers().then(playerData => {
    response.render("fantasy_central_pitchers", { playerData: playerData });
  });
});

app.get("/stats", (request, response) => {
  //const page = parseInt(request.query.page) || 1;
  findAll().then(playerData => {
    response.render("stats", { playerData: playerData });
  });
});

app.get("/links", (request, response) => {
  findAll().then(playerData => {
    response.render("links", { playerData: playerData });
  });
});
