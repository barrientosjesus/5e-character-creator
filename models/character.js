const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
        require: true
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
        require: true
    },
});


characterSchema.virtual('ac').get(function () {
    const dexAttribute = this.attributes.find(attr => attr.name === 'dex');
    const dexBonus = dexAttribute.bonus || 0;
    return 10 + dexBonus;
});

characterSchema.set('toJSON', { getters: true });

module.exports = mongoose.model('Character', characterSchema);