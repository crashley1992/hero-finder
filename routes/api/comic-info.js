const express = require('express');
const path = require('path');
const cors = require('cors');
//require axios to make Node call API
const axios = require('axios');

require("dotenv").config();

const router = express.Router();

const apiKey = process.env.API_KEY;

router.post('/api/comic-json', cors(), (req, res) => {
        let nameInput = req.body.nameInput;
        JSON.stringify(nameInput);
        console.log(nameInput + " backend");
        let apiQuery = `https://superheroapi.com/api/${apiKey}/search/${nameInput}`;
        console.log(apiQuery + " api query");
        axios.get(apiQuery, cors(), {
                headers: {
                    'Access-Control-Expose-Headers': '*',
                    'Access-Control-Allow-Origin': '*'
                },
            params: {
                apiKey: process.env.API_KEY,
                nameInput: nameInput
            }
        }).then( (response) => {
            const results = response.data.results
            console.log(JSON.stringify(results) + " comic-json results");
            res.json(results)
    }).catch( (err) => {
        console.log(err);
    })
});

router.get('/random/comic-json', (req, res) => {
    let randomNum = Math.floor(Math.random() * 730);
    console.log(randomNum + " backend num")
    let apiQuery = `https://superheroapi.com/api/${apiKey}/${randomNum}`;
    console.log(apiQuery);
    axios.get(apiQuery, {
      params: {
         apiKey: process.env.API_KEY,
         randomNum: randomNum
      }
    }).then( ( response) => {
      res.json(response.data);
    }).catch( (error) => {
        console.log(error);
      });
    });
    
module.exports = router
