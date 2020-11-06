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
        case mealsTypes.SET_FILTERS:

            const applyFilters = action.payload.filters;
            const updatedFilteredMeals = state.meals.filter( meal => {

               if(applyFilters.glutenFree && !meal.isGlutenFree){
                   return false
               }

                if(applyFilters.lactoseFree && !meal.isLactoseFree){
                    return false
                }

                if(applyFilters.vegan && !meal.isVegan){
                    return false
                }

                if(applyFilters.vegetarian && !meal.isVegetarian){
                    return false
                }

                return true;
            });

            return {
                ...state,
                filters: applyFilters,
                filteredMeals: updatedFilteredMeals
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