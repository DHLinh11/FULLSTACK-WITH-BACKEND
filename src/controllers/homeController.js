const connection = require('../config/database');

const getHomePage = (req, res) => {
	// process data
	//call model
	return res.render('home.ejs');
};

const getDhl = (req, res) => {
	res.render('sample.ejs');
};

const getTest = (req, res) => {
	res.send('Test Hello World!');
};

module.exports = { getHomePage, getDhl, getTest };
