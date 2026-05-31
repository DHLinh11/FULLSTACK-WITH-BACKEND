const connection = require('../config/database');

const getHomePage = (req, res) => {
	// process data
	//call model
	let users = [];
	connection.query('select * from Users u', function (err, results, fields) {
		users = results;
		console.log('>>>Check Results ', results);
		console.log('>>>check user ', users);
		res.send(JSON.stringify(users));
	});
};

const getDhl = (req, res) => {
	res.render('sample.ejs');
};

const getTest = (req, res) => {
	res.send('Test Hello World!');
};

module.exports = { getHomePage, getDhl, getTest };
