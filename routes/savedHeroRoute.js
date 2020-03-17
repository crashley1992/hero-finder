const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors');

const router = express.Router();

// const db = require('../models');

router.get('/api/savedhero', cors(), (req, res) => {
    console.log('whoa loaded')
    console.log(req.body);
})


module.exports = router;