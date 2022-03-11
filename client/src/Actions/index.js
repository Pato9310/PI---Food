import axios from "axios";
import { ALPHABETICAL_SORT, CREATE_RECIPE, DIET_TYPE_FILTER, GET_DETAIL, GET_DIETS_TYPE, GET_RECIPES, SCORE_SORT, SEARCH_RECIPES } from "../Const"

export const getRecipes = () => {
    return async (dispatch) => {
        try {
            const requestRecipes = await axios.get('http://localhost:3001/recipes')
            return dispatch({
                type: GET_RECIPES,
                payload: requestRecipes.data
            })
        } catch (error) {
            alert('The api recipes is dosent work');
            throw error;
        }
    }
}

export const getDietsType = () => {
    return async (dispatch) => {
        try {
            const requestDietsType = await axios.get('http://localhost:3001/types')
            return dispatch({
                type: GET_DIETS_TYPE,
                payload: requestDietsType.data
            })
        } catch (error) {
            alert('The api recipes is dosent work');
            throw error;
        }
    }
}

export const searchRecipes = (input) => {
    return async (dispatch) => {
        try {
            const search = await axios.get(`http://localhost:3001/recipes?name=${input}`);
            return dispatch({
                type: SEARCH_RECIPES,
                payload: search.data
            })
        } catch (error) {
            alert('Recipe dosent found');
            throw error;
        }
    }
}

export const createRecipe = (payload) => {
    return async (dispatch) => {
        await axios.post('http://localhost:3001/recipes/create', payload);
        return dispatch({
            type: CREATE_RECIPE
        })
    }
}

export const getDetail = (id) => {
    return async (dispatch) => {
        try {
            const detail = await axios.get(`http://localhost:3001/recipes/${id}`);
            return dispatch({
                type: GET_DETAIL,
                payload: detail.data
            })
        } catch (error) {
            alert('Something went wrong with the detail request')
            throw error;
        }
    }
}

export const dietTypeFilter = (payload) => {
    return {
        type: DIET_TYPE_FILTER,
        payload
    }
};

export const aplhabeticalSort = (payload) => {
    return {
        type: ALPHABETICAL_SORT,
        payload
    }
};

export const scoreSort = (payload) => {
    return {
        type: SCORE_SORT,
        payload
    }
}