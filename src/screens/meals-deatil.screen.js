import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import { MEALS } from "../utils/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from '../components/header-button.component'

/**
 *
 * @param navigation
 * @param route
 * @returns {JSX.Element}
 * @constructor
 */
const MealsDetailScreen = ({navigation, route}) => {

    const [meal, setMeal] = useState(null);

    const getMeal = () => {
        const mealId = route.params.mealId;
        const selectedMeal = MEALS.find(meal => meal.id === mealId);
        setMeal(selectedMeal)
    }
    useEffect(() => {
        getMeal();
        navigation.setOptions(
            {
                title: meal ? meal.title : '',
                headerRight: () => (
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item
                            title={"fav"}
                            iconName={'ios-star'}
                            onPress={() => console.log("Mark as favorite")}
                        />
                    </HeaderButtons>
                ),
            });
    },[route,meal]);




    if (!meal) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text>{meal.title}</Text>
            <Button
                title="Go Back to Categories"
                onPress={() => {
                    navigation.popToTop();
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default MealsDetailScreen;
