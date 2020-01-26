/*Primero creamos dos carpeta: 'backend' y 'frontend'

luego creamos una termina presionando ctrl + shift + p y escribimos 'integrate terminal'

luego en la terminal inicialisamos npm así: npm init

luego en la terminal, instalamos los frameworks necesarios: npm i express mongoose morgan
 multer dotenv cross-env cors fs-extra

Ahora empezamos el codigo en este archivo index.js y creamos una constante que almacene las 
funsiones de express.
*/

 const express = require('express');

//Incializamos las siguientes variables:
const app = express();

//Configuramos el servidor
app.set(port,300);

//Iniciamos el servidor (La flechita es como escribir 'function({})...)
app.listen(app.get('port'), () =>{
    console.log('server on port', app.get('port'));
});