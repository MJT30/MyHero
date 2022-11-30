//Middleware
const express = require("express");
const mongoose = require("mongoose");
const myHeroSeed = require("./db/seed.json");
const MyHero = require("./models/seed");
const methodOverride = require("method-override");
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/api", (req, res) => {
  MyHero.find({}).then((data) => res.json(myHeroSeed));
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Go beyond plus ultra on port ${port}!`);
});
