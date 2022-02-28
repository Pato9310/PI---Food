const express = require('express');
const { getDiets, createRecipe } = require('../controllers/Diet');
const router = express.Router();

router.get('/', getDiets);
router.post('/create', createRecipe);