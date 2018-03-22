const express = require("express");
const app = express();
const PORT = 4567;
const bodyParser = require("body-parser");
const players = require("./models/players");
const findAll = players.findAll;
const findById = players.findById;
// const playerData = require("./models/playerData");

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const methodOverride = require("method-override");

app.set("view engine", "ejs");

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use("/css", express.static("css"));
app.use("/vendor", express.static("vendor"));

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

//INDEX REROUTE TO ALL LIST ITEMS
app.get("/", (request, response) => {
  //const page = parseInt(request.query.page) || 1;
  findAll().then(playerData => {
    response.render(
      "/Users/mattesongrossman/wdi/unit02/projects/Project-2---Fantasy-Site/views/index.ejs",
      { playerData: playerData }
    );
  });
});
app.get("/", (request, response) => {
  //const page = parseInt(request.query.page) || 1;
  findById("10155").then(fP => {
    response.render(
      "/Users/mattesongrossman/wdi/unit02/projects/Project-2---Fantasy-Site/views/index.ejs",
      fP
    );
  });
});
