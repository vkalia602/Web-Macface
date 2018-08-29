const express = require('express');
const app = express();
const router = require('./api');
const hostname = '127.0.0.1';
const port = 3000;

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index', {
    content: 'Hello express and EJS'
  });
});
app.use(express.static('public'));
app.use('/api', router);
app.listen(port, hostname, () => {
  console.log('Server running at http://%s:%s/', hostname, port);
});