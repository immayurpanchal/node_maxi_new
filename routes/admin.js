/* eslint-disable max-len */
const express = require('express');

// eslint-disable-next-line new-cap
router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.write(
      `<div><form action="/product" method="POST"><input type="text" name="title"/><button type="submit">Submit</button></form></div>`
  );
});

router.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
