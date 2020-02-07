const express = require('express');
const router = express.Router();
const pet = require('../controllers/pets-controller')

router.get('/', pet.getPets);
router.post('/', pet.createPet);
router.get('/:id', pet.getPet);

module.exports = router;