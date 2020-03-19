const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const router = express.Router();
//imports controller for Heroes
const controller = require('../controller/heroesController');

//post route that holds data when hero is liked
router.post('/api/savedhero', controller.create);

//get heroes
router.get("/:id", controller.findAll);

module.exports = router;