const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const myHeroSchema = new Schema({
  name: String,
  heroName: String,
  quirk: String,
  birthDay: Number,
  height: Number,
  bloodType: String,
  birthPlace: String,
  personality: String,
  ultimateMoves: Array,
});

const MyHero = mongoose.model("MyHero", myHeroSchema);

module.exports = MyHero;
