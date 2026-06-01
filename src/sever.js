require('dotenv').config();
const express = require('express'); //commonJS
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

const app = express(); //app express
const port = process.env.PORT || 8088; //port
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// config req.body
app.use(express.json()); //for json
app.use(express.urlencoded({ extended: true })); // for form data

// khai báo route
// phần '/' định nghĩa đường dẫn chỉ định nếu để '/test' thì vào đường link là http://localhost:port/test/dhl
//  '/' không thay đổi thì chỉ định thẳng đến http://localhost:port/dhl
app.use('/', webRoutes);

// simple query
// async (results, fields) => {
// 	await connection.query('select * from Users u');
// 	console.log(results);
// };

app.listen(port, hostname, () => {
	console.log(`Example app listening on port http://localhost:${port}`);
});
