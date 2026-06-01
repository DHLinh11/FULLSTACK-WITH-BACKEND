const connection = require('../config/database');

const getHomePage = (req, res) => {
	return res.render('home.ejs');
};

const getDhl = (req, res) => {
	res.render('sample.ejs');
};

const getTest = (req, res) => {
	res.send('Test Hello World!');
};
const postCreateUser = (req, res) => {
	console.log('>>> req.body: ', req.body);
	res.send(req.body);
};
module.exports = { getHomePage, getDhl, getTest, postCreateUser };
