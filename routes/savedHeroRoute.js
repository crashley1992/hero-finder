const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const router = express.Router();
//imports controller for Heroes
const controller = require('../controller/heroesController');

//post route that holds data when hero is liked
//     console.log(req.body.name + ' ****mongo***');
//     console.log(req.body.link)
//     console.log(req.body.id);
router.post('/api/savedhero', controller.create);


module.exports = router;