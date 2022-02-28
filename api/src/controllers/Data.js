const axios = require("axios");
const { Diet, Recipe } = require("../db");
const { API_KEY } = process.env;

// Controller functions: 
const getApiData = async () => {
    const apiUrl =  await axios.get(`https://api.spoonacular.com/recipes/complexSearch?${API_KEY}&addRecipeInformation=true&number=100`);
    
    const apiData = apiUrl.data.results.map(recipe => {
        return {
            id: recipe.id,
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
        let chargeRecipe = await Recipe.findOrCreate(recipe);
        let chargeDiet = await Diet.findOrCreate(recipe);
        await chargeRecipe.addDiet(chargeDiet.id);
    });
    
    return recipes;
};

module.exports = {
    getApiData
}