/* eslint-disable max-len */
const express = require('express');

// eslint-disable-next-line new-cap
router = express.Router();

//* /admin/add-prodct => GET
router.get('/add-product', (req, res, next) => {
  res.write(
      `<div><form action="/admin/product" method="POST"><input type="text" name="title"/><button type="submit">Submit</button></form></div>`
  );
});

//* /admin/add-prodct => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
