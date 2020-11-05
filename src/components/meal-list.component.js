import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from "./meal-item.component";

const MealsList = ({displayedMeals, navigation}) => {

    const renderMealsGrid = ({item}) => {
        return (
            <MealItem
                meal={item}
                onSelectMeal={() => {
                    navigation.navigate('detail-meals', {
                        mealId: item.id,
                        mealTitle: item.title
                    }
                        );
                }}
            />
        )
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

export default MealsList;
