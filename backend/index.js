if(process.env.NODE_ENV != 'production'){
    require ('dotenv').config();   
}

const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
//Inicializaciones

const app = express();
require('./database');

//Setting
app.set('port',3000);

//middleware
app.use(morgan('dev'));
const storage = multer.diskStorage({
    destination: path.join(__dirname,'public/uploads'),
    filename(req,file,cb){
        cb(null,new Date().getTime() + path.extname(file.originalname));
    }
})
app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
//routes

app.use('/api/characters',require('./routes/characters'));

//Archivos Estaticos

app.use(express.static(path.join(__dirname, 'public')));

//Iniciar el servidor

app.listen(app.get('port'),() => {
    console.log('server on port',app.get('port'));
});