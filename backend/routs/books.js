//En este archivo lo primero que requerimos es el metodo 'Router' de express.
const {Router} = require('express');
const router = Router();
/* Creamos la primera ruta*/
router.get('/',(req,res)=>res.json({text:'Hello World'}));

module.exports = router;
