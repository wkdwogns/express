var express = require('express');
var router = express.Router();

var matchController = require('../template/controller/MatchController.js');

/* GET users listing. */
router.get('/', matchController.list );

/* GET users listing. */
router.get('/write', matchController.create);

router.get('/remove', matchController.remove);

module.exports = router;
