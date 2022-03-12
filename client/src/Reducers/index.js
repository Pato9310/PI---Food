import { ALPHABETICAL_SORT, CREATE_RECIPE, DIET_TYPE_FILTER, GET_DETAIL, GET_DIETS_TYPE, GET_RECIPES, SCORE_SORT, SEARCH_RECIPES } from "../Const";

const initialState = {
    recipes: [],
    diets: [],
    filtered: [],
    detail: [],
}

export default function rootReducer(state= initialState, action) {
    switch (action.type) {

        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload
            }

        case GET_DIETS_TYPE:
            return {
                ...state,
                diets: action.payload
            }

        case SEARCH_RECIPES:
            return {
                ...state,
                filtered: action.payload
            }

        case GET_DETAIL:
            return {
                ...state,
                detail: action.payload
            }

        case CREATE_RECIPE:
            return { ...state}

        case DIET_TYPE_FILTER:
            const filterByDietType = state.filtered.length ? state.filtered : state.recipes;
            filterByDietType.filter( recipe => {
                return recipe.type.find( diet => diet.toLowerCase() === action.payload.toLowerCase())
            })
            return {
                ...state,
                filtered: filterByDietType
            }
        
        case ALPHABETICAL_SORT:
            const nameSorted = state.filtered.length ? state.filtered : state.recipes;
            let orderByName = action.payload === "asc" ? nameSorted.sort ((a, b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            }) : nameSorted.sort((a, b) => {
                if (a.name < b.name) return 1;
                if (a.name > b.name) return -1;
                return 0;
            })
            return {
                ...state,
                filtered: orderByName
            }

        case SCORE_SORT:
            const scoreSorted = state.filtered.length ? state.filtered : state.recipes;
            let orderByScore = action.payload === "min" ? scoreSorted.sort ((a, b) => {
                if (a.score < b.score) return -1;
                if (a.score > b.score) return 1;
                return 0;
            }) : scoreSorted.sort((a, b) => {
                if (a.score < b.score) return 1;
                if (a.score > b.score) return -1;
                return 0;
            })
            return {
                ...state,
                filtered: orderByScore
            }

        default: return state;
    }
}