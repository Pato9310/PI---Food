const { Router } = require('express');
const recipeRouter = require('./Recipe');
const dietRouter = require('./Diet');

const router = Router();

router.use('/recipes', recipeRouter);
router.use('/diets', dietRouter);

module.exports = router;
