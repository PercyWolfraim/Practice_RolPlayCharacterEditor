/*Primero creamos dos carpeta: 'backend' y 'frontend, dentro de backend creamos las carpetas public, routs y models'

luego creamos una termina presionando ctrl + shift + p y escribimos 'integrate terminal'

luego en la terminal inicialisamos npm así: npm init

luego en la terminal, instalamos los frameworks necesarios: npm i express mongoose morgan
 multer dotenv cross-env cors fs-extra

Ahora empezamos el codigo en este archivo index.js y creamos una constante que almacene las 
funsiones de express.
(Poco a poco vamos agregando constantes de los otros frameworks de npm*/

const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
//Incializamos las siguientes variables:
const app = express();

//con esta invocamos la funcion de nuestro archivo database para conectar el servidor a la DB
require('./database');

//Configuramos el servidor
app.set('port',3000);

//Inicializamos el midleware
app.use(morgan('dev'));
/*----Para configurar la subida de imagenes usamos multer, creando 
una constante con el parametro milter.diskstorage, que se declara como una funcion
multer.diskstorage({...});*/
const storage = multer.diskStorage({
    //Se define a donde van a ir las imagenes de la siguiente mantera:
    destination:path.join(__dirname,'public/uploads'),
    //Para definir el nombre de los archivos subidos con la funsion filename()
    filename(req,file,cb){
        /*cb (CallBack) es el nombre final que se le dará al archivo.
        - empezamos con "null" para verificar que no haya un error
        - le damos el nombre que queramos (en este caso le daremos el codigo
        de la fecha, el cual empezará con new Date() para obrener la fecha, luego con 
        get time para convertirlo en codigo y concatenamos la uncion path.extname(file.originalname)
        para darle la extencion jpg,png,gif, etc...*/
        cb(null, new Date().getTime()+path.extname(file.originalname));
    }
});
//Y con esta funcion terminamos la subida de imagenes
app.use(multer({storage}).single('image'));

//Con esta funcion de express podemos interpretar las peticiones de formulario que vengan desde el frontend
app.use(express.urlencoded({extended: false}));

//Con esta funcion interpretamos las peticiones JSON que vengan desde AJAX
app.use(express.json());


/*Ahora acabada la configuracion del servidor y la subida de imagenes, vamos con los routs
Creamos un archivo js en nuestra carpeta routs.
Este archivo tendrá las rutas que utilizará nuestra pagina
Cuando lo hallamos creado lo invocamos en este archivo asi: */
app.use('/api/books',require('./routs/books'));
/*Para que pueda resivir JSON,antes del require() se le añade '/api/books'
y con eso el url cambia a localhost:3000/api/books*/


//Especificamos las carpetas que queremos mandar al ordenador
app.use(express.static(path.join(__dirname, 'public')));


//Iniciamos el servidor (La flechita es como escribir 'function({})...)
app.listen(app.get('port'), () =>{
    console.log('server on port', app.get('port'));
});