//Para conectar la base de datos necesitamos la funsion de mongoose
const mongoose = require('mongoose');

//ahora a la funcion de mongoose le especificamos la conexion con los siguientes parametros.
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));
