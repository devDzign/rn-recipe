import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import CategoriesScreen from "../screens/categories.screen";
import MealsDetailScreen from "../screens/meals-deatil.screen";
import CategoryMealsScreen from "../screens/category-meals.screen";
import Colors from "../constants/color";

const Stack = createStackNavigator();


const MealsNavigator = () => {

    return (
        <Stack.Navigator
            initialRouteName="categories"
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
                name="categories"
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
    );
};


export default MealsNavigator;
