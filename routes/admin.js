/* eslint-disable max-len */
const express = require('express');
const path = require('path');

// eslint-disable-next-line new-cap
router = express.Router();

//* /admin/add-prodct => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

//* /admin/add-prodct => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
