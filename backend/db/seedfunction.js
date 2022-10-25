const MyHero = require("../models/seed");
const myHeroSeed = require("./seed.json");

MyHero.deleteMany({})
  .then(() => {
    return MyHero.insertMany(myHeroSeed);
  })
  .then(console.log())
  .catch(console.log(console.error))
  .finally(() => {
    process.exit();
  });

console.log(myHeroSeed);
