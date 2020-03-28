const express = require('express');
const path = require('path');
const cors = require('cors');
//require axios to make Node call API
const axios = require('axios');

require("dotenv").config();

const router = express.Router();

const apiKeyGoogle = process.env.API_KEY_GOOGLE;
const search = "batman";

router.post('/api/googlebooks', cors(), (req, res) => {
    let apiQuery = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${apiKeyGoogle}`
    console.log(apiQuery)
});

router.get('/api/googlebooks', cors(), (req, res) => {
    let apiQuery = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${apiKeyGoogle}`
    console.log(apiQuery)
});
    
module.exports = router