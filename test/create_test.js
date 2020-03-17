//following is for a test with the create method
const assert = require('assert');
const Heroes = require('../models/Hero');

describe('Creating records', () => {
    it('saves a hero', (done) => {
        const batman = new Heroes({name: 'Batman', link: 'www.batman.link'});
        //saves instance to db
        batman.save()
        .then(() => {
            //Has batman been saved sucesfully?
            assert(!batman.isNew)
            done();
        }).catch((err) =>{
            console.log(err)
        })
    });
});

