const Pet = require('../models/pet');
const petsController = {};

petsController.getPets = async (req, res) => {
    const pets = await Pet.find();
    res.json(pets);
};

petsController.createPet = async (req, res) => {
    const pet = new Pet(req.body);
    await pet.save();
    res.json({
        'status': "data saved"
    });
};

petsController.getPet = async (req, res) => {
    const pet = await Pet.findById(req.params.id);
    res.json(pet);
};

module.exports = petsController;