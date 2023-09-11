var express = require('express');
var router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');

var charactersRouter = require('../controllers/characters');

router.get('/', charactersRouter.index);
router.get('/new', ensureLoggedIn, charactersRouter.new);
router.post('/', ensureLoggedIn, charactersRouter.create);

module.exports = router;