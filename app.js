const express = require('express');

const app = express();

//* order matters in defining the path
app.use('/', (req, res, next) => {
  console.log('This always runs');
  next();
});

app.use('/add-product', (req, res) => {
  res.write('<h1>Add Product</h1>');
});

app.use('/', (req, res) => {
  console.log('In the another middleware');
  res.write('<h1>Hello From Express</h1>');
});

app.listen(3000);
