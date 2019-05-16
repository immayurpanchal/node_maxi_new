/* eslint-disable max-len */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//* order matters in defining the path
app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
  res.write(
      `<div><form action="/product" method="POST"><input type="text" name="title"/><button type="submit">Submit</button></form></div>`
  );
});

app.use('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res) => {
  res.write('<h1>Hello From Express</h1>');
});

app.listen(3000);
