/* eslint-disable max-len */
const express = require('express');
const path = require('path');

const products = [];

// eslint-disable-next-line new-cap
router = express.Router();

//* /admin/add-prodct => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

//* /admin/add-prodct => POST
router.post('/add-product', (req, res, next) => {
  products.push({title: req.body.title});
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
