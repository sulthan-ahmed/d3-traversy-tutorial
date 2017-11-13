
const express = require('express');
const app = express();
const path = require('path');
const hoganExpressStrict = require('hogan-express-strict');
const expressPartialTemplates = require('express-partial-templates');
const port = (require('./config')).port;


app.set('view engine', 'html');
app.set('views', path.resolve(__dirname, 'app/views'));
app.engine('html', hoganExpressStrict);
app.use(expressPartialTemplates(app));

app.use('public', express.static(path.resolve(__dirname, 'public')));

app.get('/2', function get(req, res) {
  res.render('tutorial2.html');
});

app.get('/3', function get(req, res) {
  res.render('tutorial3-static-chart');
});

app.get('/4-1', function get(req, res) {
  res.render('tutorial4-1-basic-shapes');
});

app.get('/4-2', function get(req, res) {
  res.render('tutorial4-2-basic-shapes');
});

app.get('/5', function get(req, res) {
  res.render('tutorial5');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App on port 3001`);
  });
