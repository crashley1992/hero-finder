//Heroes Model for mongo
//dependencies
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//determining datatype in collection
const HeroSchema = new Schema({
    name: String
})

//creating collection  for Heroes
const Hero = mongoose.model('Hero', HeroSchema);

module.exports = Hero;