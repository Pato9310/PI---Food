import axios from "axios";
import { ALPHABETICAL_SORT, CREATE_RECIPE, DIET_TYPE_FILTER, GET_DETAIL, GET_DIETS_TYPE, GET_RECIPES, SCORE_SORT, SEARCH_RECIPES } from "../Const"

let data = [
    {
        id: '123',
        name: 'prueba1',
        summary: 'esto es una prueba porque la api no funca',
        score: 65,
        healthyScore: 76,
        steps: [{numero: 1, step: 'asfalfjbalfnafla'}, {numero: 2, step: 'asfalfjbalfnasjdbkadbafla'}, {numero: 3, step: 'asfalfjbqqwrqrrqalfnafla'}],
        type: ['gluten free', 'ovo lactato', 'vegetarian']
    },
    {
        id: '1234',
        name: 'prueba2',
        summary: 'esto es una prueba porque la api no funca',
        score: 65,
        healthyScore: 76,
        steps: [{numero: 1, step: 'asfalfjbalfnafla'}, {numero: 2, step: 'asfalfjbalfnasjdbkadbafla'}, {numero: 3, step: 'asfalfjbqqwrqrrqalfnafla'}],
        type: ['gluten free', 'ovo lactato', 'vegetarian']
    },
    {
        id: '12345',
        name: 'prueba3',
        summary: 'esto es una prueba porque la api no funca',
        score: 65,
        healthyScore: 76,
        steps: [{numero: 1, step: 'asfalfjbalfnafla'}, {numero: 2, step: 'asfalfjbalfnasjdbkadbafla'}, {numero: 3, step: 'asfalfjbqqwrqrrqalfnafla'}],
        type: ['gluten free', 'ovo lactato', 'vegetarian']
    },
    {
        id: '12333',
        name: 'prueba4',
        summary: 'esto es una prueba porque la api no funca',
        score: 65,
        healthyScore: 76,
        steps: [{numero: 1, step: 'asfalfjbalfnafla'}, {numero: 2, step: 'asfalfjbalfnasjdbkadbafla'}, {numero: 3, step: 'asfalfjbqqwrqrrqalfnafla'}],
        type: ['gluten free', 'ovo lactato', 'vegetarian']
    },
    {
        id: '123444',
        name: 'prueba5',
        summary: 'esto es una prueba porque la api no funca',
        score: 65,
        healthyScore: 76,
        steps: [{numero: 1, step: 'asfalfjbalfnafla'}, {numero: 2, step: 'asfalfjbalfnasjdbkadbafla'}, {numero: 3, step: 'asfalfjbqqwrqrrqalfnafla'}],
        type: ['gluten free', 'ovo lactato', 'vegetarian']
    },
    {
        id: '1236666',
        name: 'prueba6',
        summary: 'esto es una prueba porque la api no funca',
        score: 65,
        healthyScore: 76,
        steps: [{numero: 1, step: 'asfalfjbalfnafla'}, {numero: 2, step: 'asfalfjbalfnasjdbkadbafla'}, {numero: 3, step: 'asfalfjbqqwrqrrqalfnafla'}],
        type: ['gluten free', 'ovo lactato', 'vegetarian']
    },
    {
        id: '123123',
        name: 'prueba7',
        summary: 'esto es una prueba porque la api no funca',
        score: 65,
        healthyScore: 76,
        steps: [{numero: 1, step: 'asfalfjbalfnafla'}, {numero: 2, step: 'asfalfjbalfnasjdbkadbafla'}, {numero: 3, step: 'asfalfjbqqwrqrrqalfnafla'}],
        type: ['gluten free', 'ovo lactato', 'vegetarian']
    }
]


export const getRecipes = () => {
    return async (dispatch) => {
        try {
            // const requestRecipes = await axios.get('http://localhost:3001/recipes')
            return dispatch({
                type: GET_RECIPES,
                payload: data
            })
        } catch (error) {
            alert('The api recipes is dosent work');
            console.log('aca:',error);
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