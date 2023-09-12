const API = require('../models/api');
const User = require('../models/user');
const Character = require('../models/character');

module.exports = {
    index,
    new: newCharacter,
    create
};

async function index(req, res) {
    const user = req.query.user || '';
    const query = user ? { user } : {};
    console.log(query)
    const characters = await Character.find(query);
    const title = Object.keys(query).length === 0 ? 'Characters' : 'My Characters';

    res.render('characters/index', {
        characters: characters,
        title: title
    });
}

async function newCharacter(req, res) {
    const data = await API.compileData();
    res.render('characters/new', {
        allData: data,
        title: "New Character"
    });
}

async function create(req, res) {
    req.body.abilityScores = await API.mergeArrays(req.body.abilityScores);
    req.body.user = req.user._id;

    try {
        await Character.create(req.body);

        res.redirect('/characters');
    } catch (err) {
        console.log(err);
        res.render('characters/new', {
            title: 'New Character',
            errorMsg: err.message
        });
    }
}