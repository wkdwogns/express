var express = require('express');
var router = express.Router();

var carController = require('../template/controller/UserController.js');

/* GET users listing. */
router.get('/', carController.list );

/* GET users listing. */
router.get('/write', carController.create);

router.get('/remove', carController.remove);

/* GET users listing. */
router.get('/json', function(req, res, next) {
  res.json({asd:'asd'});
});

module.exports = router;
