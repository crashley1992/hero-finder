const express = require('express');
const path = require('path');
const cors = require('cors');
//require axios to make Node call API
const axios = require('axios');

require("dotenv").config();

const router = express.Router();

const apiKeyGoogle = process.env.API_KEY_GOOGLE;

router.post('/api/googlebooks', cors(), (req, res) => {
    let nameSearch = req.body.nameSearch;
    // let nameSearch = 'batman';
    JSON.stringify(nameSearch);
    console.log(nameSearch + " backend nameSearch");
    let apiQuery = `https://www.googleapis.com/books/v1/volumes?q=${nameSearch}&key=${apiKeyGoogle}`
    ///makes query to get data from google books api
        axios.get(apiQuery, cors(), {
            headers: {
                'Access-Control-Expose-Headers': '*',
                'Access-Control-Allow-Origin': '*'
            },
        params: {
            apiKeyGoogle: process.env.API_KEY_GOOGLE,
            nameSearch: nameSearch
        }
    }).then( (response) => {
        const results = response.data
        console.log(JSON.stringify(results) + " google books results");
        res.json(results)
    }).catch( (err) => {
    console.log(err);
    })
});

module.exports = router