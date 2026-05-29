require('dotenv').config();
const express = require('express'); //commonJS
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const app = express(); //app express
const port = process.env.PORT || 8088; //port
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// khai báo route
// phần '/' định nghĩa đường dẫn chỉ định nếu để '/test' thì vào đường link là http://localhost:port/test/dhl
//  '/' không thay đổi thì chỉ định thẳng đến http://localhost:port/dhl
app.use('/', webRoutes);

app.listen(port, hostname, () => {
	console.log(`Example app listening on port http://localhost:${port}`);
});
