var express = require('express');
var router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');
const playersCtrl = require('../controllers/players');

/* GET users listing. */
router.get('/:player', ensureLoggedIn, playersCtrl.show);

module.exports = router;
