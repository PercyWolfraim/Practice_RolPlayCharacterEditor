//En este archivo especificaremos la estructura que tendrán nuestras tablas en la BD

//Traemos primero las funciones de Schema y model del framework de mongoose
const {Schema, model} = require ('mongoose');

//Y definimos la estructura así:
const BookSchema = new Schema({
    title: {type: String, required: true},
    autor:{type: String, required: true},
    isbn: {type: String, required: true},
    imagePath: {type: String},
    create_at: { type: Date, default: Date.now}
});

/*Y exportamos a funsion del archivo como un modelo llamado 'Book?(o como desees) con el nombre
de la estructura de la tabla*/
module.exports= model('Book',BookSchema);