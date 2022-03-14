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
                        image: recipe.image,
                        summary: recipe.summary,
                        score: recipe.score,
                        healthyScore: recipe.healthyScore,
                        steps: recipe.steps,
                        type: recipe.Diets ? recipe.Diets.map(diet => diet.type).flat() : 'No Diets',
                    }
                })
                return res.status(200).send(list);
            }
            return res.status(400).send('Sorry, recipe not found');
        }
        return res.status(200).send(allRecipes);

    } catch (error) {
        // return res.status(400).send('Something went wrong with API')
        console.log('aca2:',error)
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
    const { name, summary, score, healthyScore, steps, type } = req.body;
    try {
        const newRecipe = await Recipe.create({
            id: uuidv4().toString().toUpperCase(),
            name,
            summary,
            score,
            healthyScore,
            steps,
        });
        const typeRecipe = await Diet.findAll({
            where: { 
                type: type
             }    
        });
        newRecipe.addDiet(typeRecipe);

        return res.status(200).send({message: 'Recipe added successfully'});
        
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getRecipes,
    getRecipeById,
    createRecipe
}