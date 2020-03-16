//Mocha test server to make sure mongoose is connected to Mongo
//dependencies
const mongoose = require('mongoose');

//mongoose is connecting to hero_test db
mongoose.connect('mongodb://localhost/heroes_test');
mongoose.connection
    .once('open', () => console.log('Mongo server is running'))
    .on('error', (error) => {
        console.warn('Error', error);
    });