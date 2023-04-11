const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const TeamsController = require("./Controllers/Teams.controller");

//REGISTER ALL THE CONTROLLERS AND MIDDLEWARE BELOW

//configuring the bodyparser(so when we send the data to the server, the server cannot understand the data so we use bodyparser to make server understand the data when we send the request{sending req in "Teams.Controller"(method:POST)} )
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use("/teams", TeamsController);

module.exports = app;