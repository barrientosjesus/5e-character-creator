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
    characters.sort((a, b) => b.favoritesCount - a.favoritesCount);;

    const title = query.user ? 'My Characters' : query.class ? `${query.class} Characters` : 'Characters';

    res.render('characters/index', {
        characters: characters,
        class: query.class,
        title: title
    });
}

async function show(req, res) {
    const character = await Character.findById(req.params.id).populate('user').populate('favorites');
    console.log(character.abilityScores[0].mod);
    const skillList = await API.getSkills();
    for (const skill of skillList) {
        const skillASName = skill.ability_score.name;
        const skillName = skill.name;
        const matchingAbilityScore = character.abilityScores.find((score) => score.name === skillASName);

        if (matchingAbilityScore) {
            skill.ability_score.mod = matchingAbilityScore.mod;
        }

        if (character.skills.includes(skillName)) {
            skill.ability_score.mod += 2;
        }
    }
    res.render('characters/show', {
        title: `Character | ${character.name}`,
        character,
        skillList
    });
}

async function edit(req, res) {
    const character = await Character.findOne({ _id: req.params.id, user: req.user._id });

    if (!character) return res.redirect('/characters');

    const data = await API.compileData();
    res.render('characters/edit', {
        title: 'Edit Character',
        allData: data,
        character
    });
}

async function update(req, res) {
    req.body.abilityScores = await API.mergeArrays(req.body.abilityScores);
    req.body.abilityScores.forEach(el => el.mod = Math.floor((el.score - 10) / 2));

    try {
        const updatedCharacter = await Character.findOneAndUpdate({ _id: req.params.id, user: req.user._id }, req.body);
        res.redirect(`/characters/${updatedCharacter._id}`);
    } catch (err) {
        console.log(err.message);
        res.redirect('/characters');
    }
}

async function deleteCharacter(req, res) {
    try {
        await Character.deleteOne({ _id: req.params.id, user: req.user._id });
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
        title: "New Character",
        errorMsg: ''
    });
}

async function create(req, res) {
    req.body.abilityScores = await API.mergeArrays(req.body.abilityScores);
    req.body.user = req.user._id;

    try {
        const newCharacter = await Character.create(req.body);
        res.redirect(`/characters/${newCharacter._id}`);
    } catch (err) {
        console.log(err);
        res.render('characters/new', {
            title: 'New Character',
            allData: await API.compileData(),
            errorMsg: err.message
        });
    }
}