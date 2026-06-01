const express = require('express');
const router = express.Router();
const { getHomePage, getDhl, getTest, postCreateUser, createUserPage } = require('../controllers/homeController');

router.get('/dhl', getDhl);
router.get('/', getHomePage);
router.get('/test', getTest);
router.get('/create', createUserPage);
router.post('/create-user', postCreateUser);

module.exports = router;
