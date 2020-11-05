import React, { useEffect, useState } from 'react';
import { CATEGORIES, MEALS } from "../utils/dummy-data";
import MealsList from "../components/meal-list.component";
import { connect, useSelector } from "react-redux";

const CategoryMealsScreen = ({navigation, route}) => {

    const [meals, setMeals] = useState(useSelector(state => state.mealsData.filteredMeals));

    const getMeals = () => {
        const categoryId = route.params.categoryId;
        const displayedMeals = meals.filter(meal => {
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
