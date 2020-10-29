import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';

import CategoriesScreen from "../screens/categories.screen";
import MealsDetailScreen from "../screens/meals-deatil.screen";
import CategoryMealsScreen from "../screens/category-meals.screen";
import Colors from "../constants/color";

const Stack = createStackNavigator();

const MealsNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="index"
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
                    name="index"
                    component={CategoriesScreen}
                    options={{title: 'Home',}}
                />
                <Stack.Screen
                    name="category-meals"
                    component={CategoryMealsScreen}
                />
                <Stack.Screen
                    name="detail-meals"
                    component={MealsDetailScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MealsNavigator;
