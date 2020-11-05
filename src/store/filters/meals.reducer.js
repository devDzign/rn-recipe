import { mealsTypes } from "./meals.types";
import { MEALS } from "../../utils/dummy-data";

const INITIAL_STATE = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
    filters: [],
}

const mealsReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case mealsTypes.FILTERS_SAVE:
            return {
                ...state,
                filters: action.payload.filters
            }
        case mealsTypes.ADD_MEAL_FAVORITE:
            state.favoriteMeals.push(action.payload.meal);
            return {
                ...state,
                favoriteMeals: state.favoriteMeals
            }
        default:
            return state;
    }
}

export default mealsReducer;