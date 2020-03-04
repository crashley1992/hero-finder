const express = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SavedHeroesSchema = new Schema({
    name: {
        type: String
    },

    alias: {
        type: String
    },

    url: {
        type: String
    },

    base: {
        type: String
    }
});

const Heroes = mongoose.model('Heroes', SavedHeroesSchema);

module.exports = Heroes;