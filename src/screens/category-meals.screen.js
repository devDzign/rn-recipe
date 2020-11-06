import React, { useCallback, useEffect, useState } from 'react';
import { CATEGORIES } from "../utils/dummy-data";
import MealsList from "../components/meal-list.component";
import { useSelector } from "react-redux";
import { View,StyleSheet } from "react-native";
import DefaultText from "../components/ui/default-text.ui.component";

const CategoryMealsScreen = ({navigation, route}) => {

    const categoryId = route.params.categoryId;

    const availableMeals = useSelector(state => state.mealsData.filteredMeals);

    const [meals, setMeals] = useState(availableMeals.filter(meal => {
        return meal.categoryIds.indexOf(categoryId) >= 0
    }));

    const getMeals = useCallback(() => {
        const displayedMeals = availableMeals.filter(meal => {
            return meal.categoryIds.indexOf(categoryId) >= 0
        })

        const category = CATEGORIES.find(c => c.id === categoryId);

        navigation.setOptions({title: category.title});
        setMeals(displayedMeals)

    }, [navigation, route,availableMeals])

    useEffect(() => {
        getMeals()
        }, [getMeals]
    );


    if (meals.length === 0) {
        return (
            <View style={styles.content}>
                <DefaultText>No meals found, maybe check your filters?</DefaultText>
            </View>
        );
    }

    return (
        <MealsList displayedMeals={meals} navigation={navigation}/>
    );
};


const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;
