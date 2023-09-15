var express = require('express');
var router = express.Router();

var apisCtrl = require('../controllers/apis');

router.get('/character_count', apisCtrl.character_count);

module.exports = router;