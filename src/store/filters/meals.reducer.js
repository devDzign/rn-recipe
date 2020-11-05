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

        case mealsTypes.TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.payload.mealId);

            if (existingIndex >= 0) {
                const updatedFavMeals = [...state.favoriteMeals];
                updatedFavMeals.splice(existingIndex, 1)
                return {
                    ...state,
                    favoriteMeals: updatedFavMeals
                }
            } else {
                const meal = state.meals.find(meal => meal.id === action.payload.mealId)
                return {
                    ...state,
                    favoriteMeals: state.favoriteMeals.concat(meal)
                }
            }

        default:
            return state;
    }
}

export default mealsReducer;