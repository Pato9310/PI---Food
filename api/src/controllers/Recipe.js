const { Recipe, Diet } = require('../db');
const { getApiData } = require('./Data');
const { Op } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

const getRecipes = async (req, res) => {
    try {
        const allRecipes = await getApiData();
        const { name } = req.query;
        if (name) {
            const recipes = await Recipe.findAll({
                include: Diet,
                where: {
                    name: {
                        [Op.substring]: `${name}` 
                    }
                }
            })
            if (recipes.length) {
                let list = recipes.map( recipe => {
                    return {
                        id: recipe.id,
                        name: recipe.name,
                        score: recipe.score,
                        image: recipe.image,
                        type: recipe.type ? 'No Diets' : recipe.type.map(diet => diet.name),
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

const createRecipe = async (req, res) => {
    try {
        const { name, summary, score, healthyScore, steps, type } = req.body;
        const newRecipe = await Recipe.create({
            id: uuidv4().toString().toUpperCase(),
            name,
            summary,
            score,
            healthyScore,
            steps,
        });
        const typeRecipe = await Diet.findAll({
            where: { type: type }    
        });
        await newRecipe.addDiet(typeRecipe);

        return res.status(200).send({ message:'puto'});
        
    } catch (error) {
        res.send(error);
    }
}

module.exports = {
    getRecipes,
    getRecipeById,
    createRecipe
}