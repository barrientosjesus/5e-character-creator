var express = require('express');
var router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');

var charactersRouter = require('../controllers/characters');

router.get('/', charactersRouter.index);
router.get('/new', ensureLoggedIn, charactersRouter.new);
router.get('/:id', charactersRouter.show)
router.post('/', ensureLoggedIn, charactersRouter.create);
router.delete('/:id', ensureLoggedIn, charactersRouter.delete)

module.exports = router;