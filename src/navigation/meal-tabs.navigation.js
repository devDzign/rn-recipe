import 'react-native-gesture-handler';
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import MealsNavigator from "./meals-stack.navigation";
import FavoriteNavigator from "./favorite-stack.navigation";

const Tab = createMaterialBottomTabNavigator();

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const MealsTabsNavigator = () => {

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
                            tabBarBadge: 3,
                        }
                    }
                />
            </Tab.Navigator>
    );
};



export default MealsTabsNavigator;
