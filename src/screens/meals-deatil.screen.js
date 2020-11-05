import React, { useState, useEffect } from 'react';
import { ScrollView, Image, Text, View, StyleSheet} from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from '../components/header-button.component';
import { addMealToFavorite } from "../store/filters/meals.actions";
import { connect, useSelector } from "react-redux";

const ListItem = props => {
    return <View style={styles.listItem}>
        <Text style={styles.titleItem}>{props.children}</Text>
    </View>
}

/**
 *
 * @param navigation
 * @param route
 * @returns {JSX.Element}
 * @constructor
 */
const MealsDetailScreen = ({navigation, route, addMealToFavorite}) => {

    const [meal, setMeal] = useState(null);
    const mealId = route.params.mealId;
    const mealTitle = route.params.mealTitle;
    const meals = useSelector(state=> state.mealsData.meals)
    const selectedMeal = meals.find(meal => meal.id === mealId);


    const getMeal = () => {
        setMeal(selectedMeal)
    }

    const addMealToFavoriteHandler = () => {
        addMealToFavorite(meal)
    }

    useEffect(() => {
        getMeal();
        navigation.setOptions(
            {
                title: mealTitle,
                headerRight: () => (
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item
                            title={"fav"}
                            iconName={'ios-star'}
                            onPress={addMealToFavoriteHandler}
                        />
                    </HeaderButtons>
                ),
            });
    }, [mealTitle, meal]);


    if (!meal) {
        return null;
    }

    return (
        <ScrollView>
            <Image source={{uri: meal.imageUrl}} style={styles.image}/>
            <View style={styles.details}>
                <Text>{meal.duration}m</Text>
                <Text>{meal.complexity}</Text>
                <Text>{meal.affordability}</Text>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {meal.ingredients.map((ingredient,index) => {
                return <ListItem key={index}>{ingredient}</ListItem>
            })}
            <Text style={styles.title}>Steps</Text>
            {meal.steps.map((step, index) => {
                return <ListItem key={index}>{step}</ListItem>
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'

    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,

    },
    titleItem:{
        fontFamily: 'open-sans',
        fontSize: 18,

    }
});
const mapDispatchToProps = dispatch => ( {
    addMealToFavorite: (meal) => dispatch(addMealToFavorite(meal))
})

export default connect(null, mapDispatchToProps)(MealsDetailScreen);
