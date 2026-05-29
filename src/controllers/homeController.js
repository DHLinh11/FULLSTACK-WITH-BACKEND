const getHomePage = (req, res) => {
	res.send('Hello World!');
};

const getDhl = (req, res) => {
	res.render('sample.ejs');
};

const getTest = (req, res) => {
	res.send('Test Hello World!');
};

module.exports = { getHomePage, getDhl, getTest };
