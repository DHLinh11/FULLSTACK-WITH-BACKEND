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
const postCreateUser = async (req, res) => {
	let { email, name, city } = req.body;

	let [results, fields] = await connection.query('INSERT INTO Users (email, name, city) VALUES (?, ?, ?)', [
		email,
		name,
		city,
	]);

	console.log('>>>Check Results: ', results);
	res.send('Create Users succeed !');
};
const createUserPage = (req, res) => {
	res.render('create.ejs');
};
module.exports = { getHomePage, getDhl, getTest, postCreateUser, createUserPage };
