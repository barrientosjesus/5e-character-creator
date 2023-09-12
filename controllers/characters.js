const API = require('../models/api');
const User = require('../models/user');
const Character = require('../models/character');

module.exports = {
    index,
    new: newCharacter,
    create,
    show,
    delete: deleteCharacter,
    edit,
    update
};

async function index(req, res) {
    const query = {};
    if (req.query.user) query.user = req.query.user;
    if (req.query.class) query.class = req.query.class;

    const characters = await Character.find(query);
    const title = query.user ? 'My Characters'
        : query.class ? `${query.class} Characters` : 'Characters';

    res.render('characters/index', {
        characters: characters,
        class: query.class,
        title: title
    });
}

async function show(req, res) {
    const character = await Character.findById(req.params.id).populate('user').populate('favorites');
    
    res.render('characters/show', {
        title: `Character | ${character.name}`,
        character
    });
}

async function edit(req, res) {
    const character = await Character.findOne({_id: req.params.id, user: req.user._id });
    
    if (!character) return res.redirect('/characters');

    const data = await API.compileData();
    res.render('characters/edit', {
        title: 'Edit Character',
        allData: data,
        character
    })
}

async function update(req, res) {
    req.body.abilityScores = await API.mergeArrays(req.body.abilityScores);

    try {
        const updatedCharacter = await Character.findOneAndUpdate({_id: req.params.id, user: req.user._id}, req.body);
        res.redirect(`/characters/${updatedCharacter._id}`);
    } catch (err) {
        console.log(err.message);
        res.redirect('/characters');
    }
}

async function deleteCharacter(req, res) {
    try {
        await Character.deleteOne({_id: req.params.id});
        res.redirect('/characters');
    } catch (err) {
        console.log(err);
        res.redirect('/characters');
    }
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