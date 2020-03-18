const Heroes = require('../models/Hero');

module.exports = {
    create: function(req, res) {
        Heroes.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}