var express = require('express');
var router = express.Router();

const ensureLoggedIn = require('../config/ensureLoggedIn');
var charactersCtrl = require('../controllers/characters');

router.get('/', charactersCtrl.index);
router.get('/new', ensureLoggedIn, charactersCtrl.new);
router.get('/:id', charactersCtrl.show);
router.get('/:id/edit', ensureLoggedIn, charactersCtrl.edit);
router.put('/:id', ensureLoggedIn, charactersCtrl.update);
router.post('/', ensureLoggedIn, charactersCtrl.create);
router.delete('/:id', ensureLoggedIn, charactersCtrl.delete);

module.exports = router;