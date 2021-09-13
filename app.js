const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('WITAJ SWIECIE!')
});

app.all('/wiki', function(req, res, next) {
    console.log('Accessing the secret section ...');
    next(); // pass control to the next handler
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
const wiki = require('./wiki.js');
// ...
app.use('/wiki', wiki);