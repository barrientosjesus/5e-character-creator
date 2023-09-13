const Character = require('../models/character');

module.exports = {
    create,
    delete: deleteFavorite
};

async function create(req, res) {
    const character = await Character.findById(req.params.id);

    if (character.favorites.includes(req.user._id)) return res.redirect('/characters');

    character.favorites.push(req.user._id);
    try {
        await character.save();
    } catch (err) {
        console.log(err);
    }

    res.redirect('/characters');
}

async function deleteFavorite(req, res) {
    const character = await Character.findById({ _id: req.params.id });

    if (!character || !character?.favorites.includes(req.user._id)) return res.redirect('/characters');
    const idxToRemove = character.favorites.indexOf(req.user._id);
    character.favorites.splice(idxToRemove, 1);

    await character.save();

    res.redirect('/characters');
}