const {Router} = require('express');
const router = Router();
const {unlink} = require('fs-extra');
const Character = require('../models/Character.js');
const path = require('path');

router.get('/', async (req,res) => {
    const characters = await Character.find();
    res.json(characters);
});

router.post('/', async (req,res) =>{
    const {name, race, Cclass, level, strength, dexterity, constitution,inteligence, wisdom, charisma} = req.body;
    const imagePath = '/uploads/' + req.file.filename;
    const newCharacter = new Character ({name, race, Cclass, level, strength, dexterity, constitution,inteligence, wisdom, charisma, imagePath});
    await newCharacter.save();
    res.json({message: 'Character saved'});
});

router.delete('/:id', async (req,res) => {
    const character = await Character.findByIdAndDelete(req.params.id);
    unlink(path.resolve('backend/public' + character.imagePath));
    res.json({message: 'Character Deleted'});
});

module.exports = router;