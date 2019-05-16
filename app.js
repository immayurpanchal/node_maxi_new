const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('In the middleware');
  next(); // request will go to next app.use()
});

app.use((req, res, next) => {
  console.log('In the another middleware');
  res.write('<h1>Hello From Express</h1>');
});

app.listen(3000);
