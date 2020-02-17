const {Schema,model} = require('mongoose');

const CharacterSchema = new Schema({
    name: {type: String, required: true},
    race: {type: String, required: true},
    Cclass: {type: String, required:true},
    level: {type: Number, required:true},
    strength: {type: Number, required: true},
    dexterity:{type: Number, required:true},
    constitution:{type: Number, required: true},
    inteligence: {type: Number, required: true},
    wisdom: {type: Number, required: true},
    charisma: {type: Number, required: true},
    imagePath: {type: String, require: true},
    created_at: {type:Date, default: Date.now}
});

module.exports = model('Character', CharacterSchema);