const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const router = express.Router();
//imports controller for Heroes
const controller = require('../controller/heroesController');

//post route that holds data when hero is liked
router.post('/api/savedhero', controller.create);

//gets all heroes saved in database
router.get('/api/savedhero', controller.find);

router.get('/api/savedhero/:id', controller.findOne);

router.post('/api/savedhero/:id', controller.findOne);
//finds one hero by id and deletes
router.put("/api/savedhero/:id", controller.remove)
//get heroes by id
router.get("/api/savedhero/:id", controller.findAll);
module.exports = router;