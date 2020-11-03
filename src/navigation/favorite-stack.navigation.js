import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from "../constants/color";
import FavoritesScreen from "../screens/favorites.screen";
import MealsDetailScreen from "../screens/meals-deatil.screen";

const Stack = createStackNavigator();


const FavoriteNavigator = () => {

    return (
            <Stack.Navigator
                initialRouteName="favorites"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: Colors.primaryColor,
                    },
                    headerTintColor: Colors.white,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        alignSelf: 'center'
                    },
                }}
            >
                <Stack.Screen
                    name="favorites"
                    component={FavoritesScreen}
                    options={{title: 'Favorites',}}
                />
                <Stack.Screen
                    name="detail-meals"
                    component={MealsDetailScreen}
                />
            </Stack.Navigator>
    );
};



export default FavoriteNavigator;
