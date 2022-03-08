const { Router } = require('express');
const recipeRouter = require('./Recipe');
const dietRouter = require('./Diet');

const router = Router();

router.use('/recipes', recipeRouter);
router.use('/types', dietRouter);

module.exports = router;
