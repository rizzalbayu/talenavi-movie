const express = require('express');
const router = express.Router();
const movieRouter = require('./movieRouter');

router.use('/v1', movieRouter);

module.exports = router;
