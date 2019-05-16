const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', (req, res) => {
  res.write('<h1>Hello From Express</h1>');
});

module.exports = router;

