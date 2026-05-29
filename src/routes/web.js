const express = require('express');
const router = express.Router();

router.get('/dhl', (req, res) => {
	res.render('sample.ejs');
});

router.get('/', (req, res) => {
	res.send('Hello World!');
});

router.get('/test', (req, res) => {
	res.send('Test Hello World!');
});

module.exports = router;
