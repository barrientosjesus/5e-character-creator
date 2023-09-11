const API = require('../models/api');

module.exports = {
    index,
    new: newCharacter,
    create
};

async function index(req, res) {
    const classList = await API.getClasses();
    res.render('characters/index', {
        classes: classList,
        title: "Characters"
    });
}

async function newCharacter(req, res) {
    const data = await API.compileData();
    res.render('characters/new', {
        allData: data,
        title: "New Character"
    });
}

function create(req, res) {
    console.log(req.body);
    res.redirect('/characters/new');
}