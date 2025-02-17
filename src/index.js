const express = require('express');
const path = require('path');

const app = express();

const PORT = 8080;

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index', {
    message: 'Hello World.'
  });
});

app.get('/page', (req, res) => {
  const name = req.query.name || 'World';
  res.render('page', {
    message: `Hi ${name}.`
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
