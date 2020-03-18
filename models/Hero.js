//Heroes Model for mongo
//dependencies
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//determining datatype in collection
const HeroesSchema = new Schema({
    name: {
        type: String,
    },
    link: {
        type: String
    }
});

//creating collection  for Heroes
const Heroes = mongoose.model('Heroes', HeroesSchema);

module.exports = Heroes;