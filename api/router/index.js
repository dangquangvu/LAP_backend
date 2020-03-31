const express = require('express');
const router = express.Router();

router.use('/card', require('./card_router'));
module.exports = router;