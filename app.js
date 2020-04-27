const express = require('express');
const path = require('path');
const expressHandlebars = require('express-handlebars');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.engine(
  'handlebars',
  expressHandlebars({
    defaultLayout: 'home',
  }),
);
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('home/index');
});

app.get('/about', (req, res) => {
  res.render('home/about');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
