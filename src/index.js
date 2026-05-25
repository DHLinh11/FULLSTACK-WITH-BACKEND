const express = require('express');

const app = express();
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const port = 3000;

// HTTP logger
app.use(morgan('combined'));

// Template Engines
app.engine(
	'hbs',
	engine({
		extname: '.hbs',
		partialsDir: [path.join(__dirname, 'resources/views/partials')],
		// can find any dir not partials like component or something just add it like index in [partialsDir array]
	}),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
	res.render('news');
});

app.get('/', (req, res) => {
	res.render('home');
});

app.listen(port, () => {
	console.log(`Example app listening on port http://localhost:${port}`);
});
