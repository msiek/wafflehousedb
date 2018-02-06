const express = require('express');
const controller = require('./controllers');

const router = express.Router();

router.get('/', controller.homepage);
module.exports.router = router;