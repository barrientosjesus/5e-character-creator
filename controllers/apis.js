const Character = require('../models/character')

module.exports = {
    character_count
}

async function character_count(req, res) {
    const characterCount = await Character.countDocuments({});

    res.json({characterCount});
};