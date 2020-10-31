import 'react-native-gesture-handler';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';

import FavoritesScreen from "../screens/favorites.screen";
import MealsNavigator from "./meals.navigation";

const Tab = createBottomTabNavigator();


const MealsTabsNavigator = () => {

    return (
            <Tab.Navigator
                initialRouteName="root"
                tabBarOptions={{
                    activeTintColor: '#e91e63',
                    fontSize: 28,
                }}
            >
                <Tab.Screen
                    name="root"
                    component={MealsNavigator}
                    options={
                        {
                            tabBarLabel: 'Meals'.toLowerCase(),
                            tabBarIcon: ({ color, size }) => (
                                <MaterialIcons name="favorite" size={24} color="black" />
                            ),
                            tabBarBadge: 3,
                        }
                    }
                />
                <Tab.Screen name="Favorites" component={FavoritesScreen}/>
            </Tab.Navigator>
    );
};



export default MealsTabsNavigator;
