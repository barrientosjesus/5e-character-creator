var express = require('express');
var router = express.Router();

var apisCtrl = require('../controllers/apis');

router.get('/character_count', apisCtrl.character_count);
router.get('/most_popular_character', apisCtrl.most_popular_character);

module.exports = router;