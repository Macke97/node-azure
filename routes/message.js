const express = require('express');
const router = express.Router();

//Get home page
router.get('/', (req, res, next) => {
  res.send('Message page!');
});

//Get message
router.get('/create/:msg', (req, res, next) => {
  res.send(`Your message: ${req.params.msg}`)
});

module.exports = router;