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

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const methodOverride = require("method-override");

app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(express.static("assets"));

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

// app.get("/", (request, response) => {
//   findAll().then(playerData => {
//     response.render("index", { playerData: playerData });
//   });
// });

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

// API CALLS
