var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mi Web de Prueba', page: 'inicio' });
});

router.get('/sobre', function(req, res, next) {
  res.render('sobre', { title: 'Sobre nosotros', page: 'sobre' });
});

router.get('/contacto', function(req, res, next) {
  res.render('contacto', { title: 'Contacto', page: 'contacto' });
});

module.exports = router;
