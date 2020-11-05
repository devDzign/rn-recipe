import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import MealsNavigator from "./meals-stack.navigation";
import FavoriteNavigator from "./favorite-stack.navigation";
import { useSelector } from "react-redux";

const Tab = createMaterialBottomTabNavigator();

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const MealsTabsNavigator = props => {

    const [nbFavorite, setNbFavorite] = useState(0);
    const count = useSelector(state => state.mealsData.favoriteMeals.length)

    useEffect(() => {
        setNbFavorite(count)
    }, [count]);



    return (
            <Tab.Navigator
                initialRouteName="meals-nav"
                inactiveColor="#fff"
                barStyle={{ backgroundColor: '#000' }}
                activeColor="red"
            >
                <Tab.Screen
                    name="meals-nav"
                    component={MealsNavigator}
                    options={
                        {
                            tabBarLabel: 'Meals'.toLowerCase(),
                            tabBarIcon: ({ color, size }) => (
                                <MaterialIcons
                                    name="restaurant-menu"
                                    size={24}
                                    color={color}
                                />
                            )
                        }
                    }
                />
                <Tab.Screen
                    name="favorites-nav"
                    component={FavoriteNavigator}
                    options={
                        {
                            tabBarLabel: 'Favorites'.toUpperCase(),
                            tabBarIcon: ({ color , size }) => (
                                <MaterialIcons
                                    name="favorite"
                                    size={24}
                                    color={color}
                                />
                            ),
                            tabBarBadge: nbFavorite,
                        }
                    }
                />
            </Tab.Navigator>
    );
};

export default MealsTabsNavigator;
