const express = require('express');
const { getRecipes, getRecipeById, createRecipe } = require('../controllers/Recipe');
const router = express.Router();

router.get('/', getRecipes);
router.get('/:id', getRecipeById);
router.post('/create', createRecipe);

module.exports = router;