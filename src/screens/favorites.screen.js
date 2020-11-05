import React, { useEffect, useState } from 'react';
import MealsList from "../components/meal-list.component";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/header-button.component";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";

const FavoritesScreen = ({navigation}) => {

    const [meals, setMeals] = useState(useSelector(state => state.mealsData.favoriteMeals));

    const allFavoriteMeals = useSelector(state => state.mealsData.favoriteMeals)


    const openDrawNavHandler = () => {
        navigation.toggleDrawer();
    }

    useEffect(() => {
        setMeals(allFavoriteMeals)
    }, [allFavoriteMeals]);

    useEffect(()=> {
        navigation.setOptions(
            {
                headerLeft: () => (
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item
                            title={"fav"}
                            iconName={'ios-menu'}
                            onPress={openDrawNavHandler}
                        />
                    </HeaderButtons>
                ),
            });
    }, [navigation])


    if(meals.length === 0 || !allFavoriteMeals ){
        return (
            <View style={styles.container}>
                <Text style={styles.title}>No favorite meals found. Start adding some!</Text>
            </View>
        )
    }

    return <MealsList displayedMeals={meals} navigation={navigation}/>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    title:{
        fontFamily: 'open-sans-bold',
        fontSize: 16
    }
});

export default FavoritesScreen;
