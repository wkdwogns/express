var express = require('express');
var router = express.Router();

var userController = require('../template/controller/UserController.js');

/* GET users listing. */
router.get('/', userController.list );

/* GET users listing. */
router.post('/write', userController.create);

router.post('/show', userController.show);

router.get('/remove', userController.remove);

module.exports = router;
