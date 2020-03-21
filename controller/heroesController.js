const Heroes = require('../models/Hero');

module.exports = {
    findAll: function(req, res) {
        Heroes.findAll({_id: req.params._id})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    find: function(req, res) {
        Heroes.find({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        Heroes.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}