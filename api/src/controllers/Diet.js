const { Recipe, Diet } = require('../db');

const createRecipe = async (req, res, next) => {
    try {
        const { name, summary, score, healthyScore, steps, type } = req.body;
        const newRecipe = await Recipe.create({
            name,
            summary,
            score,
            healthyScore,
            steps,
        })
        const typeRecipe = await Diet.findAll({
            where: { name: type }    
        })

        newRecipe.addDiet(typeRecipe);
        res.status(200).send(newRecipe);
    } catch (error) {
        next(error);
    }
}

const getDiets = async (req, res) => {
    try {
        const types = await Diet.findAll();
        res.send(types)
    } catch (error) {
        res.status(400).send('Something went wrong with the DB')
    }
}

module.exports = {
    getDiets,
    createRecipe
}