require('dotenv').config();
const express = require('express'); //commonJS
const path = require('path'); //commonJS
const configViewEngine = require('./config/viewEngine');

const app = express(); //app express

const port = process.env.PORT || 8088; //port
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// khai báo route
app.get('/', (req, res) => {
	res.render('sample.ejs');
});

app.listen(port, hostname, () => {
	console.log(`Example app listening on port http://localhost:${port}`);
});
