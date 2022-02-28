const { Recipe, Diet } = require('../db');
const { getApiData } = require('./Data');

const getRecipes = async (req, res) => {
    try {
        const allRecipes = getApiData();
        const { name } = req.query;
        if (name) {
            const recipes = Recipe.findAll({
                include: Diet,
                where: {
                    name: {
                        [op.substring]: `${name}` 
                    }
                }
            })
            if (recipe.length) {
                let list = recipes.map( recipe => {
                    return {
                        id: recipe.id,
                        name: recipe.name,
                        score: recipe.score,
                        image: recipe.image,
                        type: recipe.type ? recipe.type.map(diet => diet.name) : 'No Diets',
                    }
                })
                return res.status(200).send(list);
            }
            return res.status(400).send('Sorry, recipe not found');
        }
        return res.status(200).send(allRecipes);

    } catch (error) {
        return res.status(400).send('Something went wrong with API')
    }
}

const getRecipeById = async (req, res) => {
    //Returns the recipe that matches the id
    const { id } = req.params;
    if (!id) return res.status(404).send({message: 'Should enter an ID'});
    try {
        const recipe = await Recipe.findAll({
            where:{ id: id },
            include: {
                model: Diet,
                through: {
                    attributes: []
                }
            }
        })
       return  res.send(recipe);
    } catch (error) {
        res.status(404).send({ message: 'Should enter a valid ID'})
    }
}

module.exports = {
    getRecipes,
    getRecipeById
}