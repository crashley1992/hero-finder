const express = require('express');
const router = express.Router();

router.use( require('../routes/api/comic-info'));

module.exports = router;
