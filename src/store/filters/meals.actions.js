import { mealsTypes } from "./meals.types";

export const saveFiltersRequest = (filters) => ({
    type: mealsTypes.FILTERS_SAVE,
    payload: {
        filters: filters,
    }
})


export const addMealToFavorite = (meal) => ({
    type: mealsTypes.ADD_MEAL_FAVORITE,
    payload: {
        meal: meal,
    }
})

export const toggleFavorite = (mealId) => ({
    type: mealsTypes.TOGGLE_FAVORITE,
    payload: {
        mealId: mealId,
    }
})

export const setFilters = (filtersSettings) => ({
    type: mealsTypes.SET_FILTERS,
    payload: {
        filters: filtersSettings,
    }
})

