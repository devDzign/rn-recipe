import React, { useCallback, useEffect, useState } from 'react';
import { CATEGORIES, MEALS } from "../utils/dummy-data";
import MealsList from "../components/meal-list.component";

const CategoryMealsScreen = ({navigation, route}) => {

    const [meals, setMeals] = useState([]);

    const getMeals = () => {
        const categoryId = route.params.categoryId;
        const displayedMeals = MEALS.filter(meal => {
            return meal.categoryIds.indexOf(categoryId) >= 0
        })
        setMeals(displayedMeals)
        const category = CATEGORIES.find(c => c.id === categoryId);
        navigation.setOptions({title: category.title});
    }
    useEffect(() => {
           getMeals()
        }, [route]
    );


    return (
        <MealsList displayedMeals={meals} navigation={navigation}/>
    );
};


export default CategoryMealsScreen;
