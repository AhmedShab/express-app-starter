var express = require('express');
var router = express.Router();
var apiController = require('../controller/apiController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html');
});

router.get('/test', apiController.me );

router.get('/who', apiController.who );

module.exports = router;
