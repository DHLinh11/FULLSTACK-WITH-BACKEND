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
router.get('/update/:id', getUpdatePage); // thêm /: tham số : tạo tham số được truyền từ html để tham chiếu tới biến cùng tên trên sql
router.post('/create-user', postCreateUser);

module.exports = router;
