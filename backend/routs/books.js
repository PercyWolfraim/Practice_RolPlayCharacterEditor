//En este archivo lo primero que requerimos es el metodo 'Router' de express.
const {Router} = require('express');
const router = Router();

const Book = require('../models/Book')

/* Creamos la primera ruta*/
//Las rutas que usaré son get, post y delete, las creo así: 
router.get('/', async (req,res)=>{
    const books = await Book.find();
    res.json(books);
});

router.post('/', async (req,res)=>{
    const {title, autor, isbn} = req.body;
    const newBook = new Book({title, autor, isbn});
    await newBook.save();
    res.json({message: 'Book Saved'});
});

router.delete('/:id',async(req,res)=>{
    
    await Book.findByIdAndDelete(req.params.id);
    res.json({message: 'Book Deleted'});
})

module.exports = router;
