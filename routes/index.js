var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mi Web de Prueba', page: 'inicio' });
});

module.exports = router;
