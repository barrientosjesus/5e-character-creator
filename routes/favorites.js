var express = require('express');
var router = express.Router();

const ensureLoggedIn = require('../config/ensureLoggedIn');
var favoritesCtrl = require('../controllers/favorites');

router.post('/characters/:id/favorites', ensureLoggedIn, favoritesCtrl.create);
router.delete('/favorites/:id', ensureLoggedIn, favoritesCtrl.delete);

module.exports = router;