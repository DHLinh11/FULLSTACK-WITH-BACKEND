const express = require('express'); //commonJS
const path = require('path'); //commonJS
require('dotenv').config();

const app = express(); //app express

const port = process.env.PORT || 8088; //port
const hostname = process.env.HOST_NAME;

// config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// config static file
app.use(express.static(path.join(__dirname, 'public')));

// khai báo route
app.get('/', (req, res) => {
	res.render('sample.ejs');
});

app.listen(port, hostname, () => {
	console.log(`Example app listening on port http://localhost:${port}`);
});
