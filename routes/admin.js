/* eslint-disable max-len */
const express = require('express');

const products = [];

// eslint-disable-next-line new-cap
router = express.Router();

//* /admin/add-prodct => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product', {pageTitle: 'add-product'});
});

//* /admin/add-prodct => POST
router.post('/add-product', (req, res, next) => {
  products.push({title: req.body.title});
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
