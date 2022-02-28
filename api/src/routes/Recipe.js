const express = require('express');
const { getRecipes, getRecipeById } = require('../controllers/Recipe');
const router = express.Router();

router.get('/', getRecipes);
router.get('/:id', getRecipeById);

module.exports = router;