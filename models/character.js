const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { CLASS_LOOKUP } = require('../public/javascripts/lookups');

const abilityScoreSchema = new Schema({
    name: {
        type: String,
        enums: ['CHA', 'CON', 'DEX', 'INT', 'STR', 'WIS'],
        required: true
    },
    score: {
        type: Number,
        min: 1,
        max: 20,
        required: true
    }
});

const characterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    race: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        default: 1,
        min: 1,
        max: 20
    },
    hitDie: {
        type: Number,
        required: true,
        min: 1,
        max: 16
    },
    class: {
        type: String,
        required: true
    },
    background: {
        type: String,
        required: true
    },
    alignment: {
        type: String,
        required: true
    },
    skills: [],
    languages: [],
    abilityScores: [abilityScoreSchema],
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


characterSchema.virtual('classColor').get(function () {
    const charClass = this.class;
    const classColor = CLASS_LOOKUP[charClass].color;
    return classColor;
});

characterSchema.virtual('classIMG').get(function () {
    const charClass = this.class;
    return CLASS_LOOKUP[charClass].img;
});

characterSchema.virtual('cardBG').get(function () {
    const charClass = this.class;
    return CLASS_LOOKUP[charClass].bgIMG[Math.floor(Math.random() * CLASS_LOOKUP[charClass].bgIMG.length)];
});

characterSchema.virtual('favoritesCount').get(function () {
    return this.favorites.length;
});

characterSchema.virtual('proficiencyBonus').get(function () {
    return 2 + ((this.level - 1) / 4);
});

abilityScoreSchema.virtual('mod').get(function () {
    return Math.floor((this.score - 10) / 2);
});

characterSchema.virtual('ac').get(function () {
    const dexScore = this.abilityScores.find(score => score.name === 'DEX');
    const dexBonus = dexScore.mod || 0;
    return 10 + dexBonus;
});

characterSchema.virtual('health').get(function () {
    const conScore = this.abilityScores.find(score => score.name === 'CON');
    const conBonus = conScore.mod || 0;
    return conBonus + this.hitDie;  
});

characterSchema.set('toJSON', { getters: true });

module.exports = mongoose.model('Character', characterSchema);