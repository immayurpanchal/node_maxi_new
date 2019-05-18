const express = require('express');
const adminData = require('./admin');

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', (req, res) => {
  res.render('shop', {pageTitle: 'Shop', products: adminData.products});
});

module.exports = router;
