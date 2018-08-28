const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 3000;

app.get('/', function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('<h1>Hello Vasudha</h1>');
});

app.get('/about', function (req, res) {
  res.send('<h1>About Page</h1>');
});

app.listen(port, hostname, () => {
  console.log('Server running at http://%s:%s/', hostname, port);
});