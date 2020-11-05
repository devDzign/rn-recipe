import React, { useEffect, useState } from 'react';
import MealsList from "../components/meal-list.component";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/header-button.component";
import { connect, useSelector } from "react-redux";

const FavoritesScreen = ({navigation, favoriteMeals}) => {

    const [meals, setMeals] = useState(useSelector(state => state.mealsData.favoriteMeals));

    const openDrawNavHandler = () => {
        navigation.toggleDrawer();
    }

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


    return <MealsList displayedMeals={meals} navigation={navigation}/>;
};
const mapStateToProps = state => {
    return {
        favoriteMeals: state.mealsData.favoriteMeals,
    }
}
export default connect(mapStateToProps, null)(FavoritesScreen);
