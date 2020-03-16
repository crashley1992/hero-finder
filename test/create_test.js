const assert = require('assert');
//imports hero user model
const Hero = require('../models/Hero');

describe('Creating records', () => {
    //tells mocha that an assertion for creating a hero value is being made
    it('saves a user', () => {
        //creating an instance of Hero with Batman
        const batman = new Hero({ name: 'Batman' });
        batman.save();
    });
});