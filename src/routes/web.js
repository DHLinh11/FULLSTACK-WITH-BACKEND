const express = require('express');
const router = express.Router();
const { getHomePage, getDhl, getTest } = require('../controllers/homeController');

router.get('/dhl', getDhl);
router.get('/', getHomePage);
router.get('/test', getTest);

module.exports = router;
