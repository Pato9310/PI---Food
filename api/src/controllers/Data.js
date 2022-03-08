const axios = require("axios");
const { Diet, Recipe } = require("../db");
const { v4: uuidv4 } = require('uuid');
const { API_KEY } = process.env;

// Controller functions: 
const getApiData = async () => {
    const apiUrl =  await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
    
    const apiData = apiUrl.data.results.map(recipe => {
        return {
            id: uuidv4().toString().toUpperCase().substring(0, 6),
            image: recipe.image,
            name: recipe.title,
            type: recipe.diets,
            summary: recipe.summary,
            score: recipe.spoonacularScore,
            healthyScore: recipe.healthScore,
            dishTypes: recipe.dishTypes,
            steps: recipe.analyzedInstructions[0]?.steps.map(step => {
                return {
                    number: step.number,
                    step: step.step
                }
            })
        }
    })
    const recipes = apiData.map( async (recipe) => {
        let chargeRecipe = await Recipe.create(recipe);
        let chargeDiet = await Diet.create(recipe);
        await chargeRecipe.addDiet(chargeDiet.id);
    });
    
    return apiData;
};

module.exports = {
    getApiData
}