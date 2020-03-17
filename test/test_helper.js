const mongoose = require('mongoose');

//default mongoose promise implementation
mongoose.Promise = global.Promise;

//before and done callback makes sure that mongodb is connected before mocha runs any tests
before((done) => {
    mongoose.connect('mongodb://localhost/heroes_test');
    mongoose.connection
    .once('open', () => {done();})
    .on('error', (error) => {
        console.warn('Warning', error);
    });
})

    //a hook- will be executed before any test is executed
beforeEach((done) => {
    //drops collection before each test thats ran
    mongoose.connection.collections.heroes.drop(() => {
        //Ready to run the next test!
        done();
    });
});