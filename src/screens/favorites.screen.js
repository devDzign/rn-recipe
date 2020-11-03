import React, { useEffect, useState } from 'react';
import MealsList from "../components/meal-list.component";
import { MEALS } from "../utils/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/header-button.component";

const FavoritesScreen = ({navigation}) => {

    const [meals, setMeals] = useState([]);

    const openDrawNavHandler = () => {
        navigation.toggleDrawer();
    }

    const getFavoritesMeals = () => {
        const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
        setMeals(favMeals);
    }

    useEffect(()=> {
        getFavoritesMeals();
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
    }, [])


    return <MealsList displayedMeals={meals} navigation={navigation}/>;
};

export default FavoritesScreen;
