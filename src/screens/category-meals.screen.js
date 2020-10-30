import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from "../utils/dummy-data";

import MealItem from "../components/meal-item.component";

const CategoryMealsScreen = ({navigation, route}) => {

    const [category, setCategory] = useState(null);
    const categoryId = route.params.categoryId;

    const displayedMeals = MEALS.filter(meal => {
        return meal.categoryIds.indexOf(categoryId) >= 0
    })

    const getCategory = async () => {
        const cat = await CATEGORIES.find(c => c.id === categoryId);
        setCategory(cat);
        navigation.setOptions({title: cat.title});
    }

    const renderMealsGrid = ({item}) => {
        return (
            <MealItem meal={item}/>
        )
    }

    useEffect(() => {
        getCategory();
    }, [category]);


    if (!category) {
        return null
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={item => item.id}
                renderItem={renderMealsGrid}
                style={{width: '100%'}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    }
});

export default CategoryMealsScreen;
