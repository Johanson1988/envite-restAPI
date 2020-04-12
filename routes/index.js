var express = require('express');
var router = express.Router();

router.use('/auth', require('./auth'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/public/index.html');
});

module.exports = router;
