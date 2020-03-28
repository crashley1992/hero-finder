const express = require('express');
const router = express.Router();

router.use( require('../routes/api/comic-info'));
router.use( require('../routes/api/google-books'));

module.exports = router;
