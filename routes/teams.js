var express = require('express');
var router = express.Router();

var teamController = require('../template/controller/TeamController.js');

/* GET users listing. */
router.get('/', teamController.list );

/* GET users listing. */
router.get('/write', teamController.create);

router.get('/remove', teamController.remove);

module.exports = router;
