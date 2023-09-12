const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { COLORS } = require('../public/javascripts/lookups');

const characterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    race: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    background: {
        type: String,
        required: true
    },
    alignment: String,
    hitDice: Number,
    skills: [],
    languages: [],
    abilityScores: [],
    favorites: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
});


characterSchema.virtual('ac').get(function () {
    const dexScore = this.abilityScores.find(as => as.name === 'DEX');
    const dexBonus = dexScore.bonus || 0;
    return 10 + dexBonus;
});

characterSchema.virtual('classColor').get(function () {
    const charClass = this.class;
    const classColor = COLORS[charClass];
    return classColor;
});

characterSchema.set('toJSON', { getters: true });

module.exports = mongoose.model('Character', characterSchema);