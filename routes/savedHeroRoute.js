const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const router = express.Router();
//imports model for Heroes
const db = require('../models/Hero');

//post route that holds data when hero is liked
router.post('/api/savedhero', cors(), (req, res) => {
    console.log(req.body.name + ' ****mongo***');
    console.log(req.body.link)
})

module.exports = router;