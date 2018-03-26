const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
const players = require("./models/fantasy_central");
const news = require("./models/index");
const findAll = players.findAll;
const findAllPitchers = players.findAllPitchers;
const draftStatus = players.draftStatus;
const getNews = news.getNews;
const fetch = require("node-fetch");
const moment = require("moment");
const findBatterById = players.findBatterById;
const getMyTeam = players.getMyTeam;
const addPlayer = players.addPlayer;

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const methodOverride = require("method-override");

app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(express.static("assets"));
app.use(methodOverride("_method"));

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

//GET INDEX PAGE ON API CALL
app.get("/", (request, response) => {
  let link =
    "https://newsapi.org/v2/top-headlines?sources=espn&apiKey=596765967a80416c8c7f60c9fc7cba2a";
  let get = url => {
    return fetch(url).then(response => response.json());
  };
  let displayNews = get(link).then(response => {
    return response;
  });
  displayNews.then(newsData => {
    response.render(
      "index",
      { newsData: newsData }
      // {
      //   newsDate: moment().format(newsData.articles[0].publishedAt)
      // }
    );
  });
});

//GET FANTASY CENTRAL PAGE - BATTERS
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

//GET FANTASY CENTRAL PAGE - PITCHERS
app.get("/fantasy_central_pitchers", (request, response) => {
  findAllPitchers().then(playerData => {
    response.render("fantasy_central_pitchers", { playerData: playerData });
  });
});

//GET MY TEAM PAGE
app.get("/myTeam", (request, response) => {
  getMyTeam().then(playerData => {
    response.render("myTeam", { playerData: playerData });
  });
});

//ADD PLAYER TO TEAM DATABASE
app.post("/myTeam", urlencodedParser, (request, response) => {
  const name = request.body.name;
  const team = request.body.team;
  const playerId = Number(request.body.playerid);
  addPlayer(name, team, playerId).then(data => {
    response.redirect(`/myTeam`);
  });
  // .catch(error => {
  //   response.send(error);
  // });
});

//LINKS PAGE
app.get("/links", (request, response) => {
  findAll().then(playerData => {
    response.render("links", { playerData: playerData });
  });
});
