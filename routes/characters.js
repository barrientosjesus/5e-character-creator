var express = require('express');
var router = express.Router();

var charactersRouter = require('../controllers/characters')

router.get('/', charactersRouter.index)
router.get('/new', charactersRouter.new)
router.post('/', charactersRouter.create)

module.exports = router;