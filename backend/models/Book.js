const {Schema, model} = require ('mongoose');

new BookSchema({
    title: {type: String, required: true},
    autor:{type: String, required: true},
    id: {type: String, required: true},
    imagePath: {type: String, required: true},
    create_at: { type: Date, default: Date.now}
});

module.exports= model('Book',BookSchema);