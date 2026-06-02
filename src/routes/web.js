const express = require('express');
const router = express.Router();
const {
	getHomePage,
	getDhl,
	getTest,
	postCreateUser,
	createUserPage,
	getUpdatePage,
} = require('../controllers/homeController');

router.get('/dhl', getDhl);
router.get('/', getHomePage);
router.get('/test', getTest);
router.get('/create', createUserPage);
router.get('/update', getUpdatePage);
router.post('/create-user', postCreateUser);

module.exports = router;
