const Character = require('../models/character');

module.exports = {
    character_count,
    most_popular_character
};

async function character_count(req, res) {
    const characterCount = await Character.countDocuments({});

    res.json({ characterCount });
};

async function most_popular_character(req, res) {
    const characters = await Character.find({});
    characters.sort((a, b) => b.favoritesCount - a.favoritesCount);
    const name = characters[0].name;

    res.json({ name });
}