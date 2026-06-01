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
	let { email, name, city } = req.body;
	console.log(`email =  ${email}, name = ${name}, city = ${city} `);

	connection.query(
		`INSERT INTO Users (email, name, city) 
		VALUES (?, ?, ?)`,
		[email, name, city],
		function (err, results) {
			res.send(`Create user succeed !`);
		},
	);
};
module.exports = { getHomePage, getDhl, getTest, postCreateUser };
