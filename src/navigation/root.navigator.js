import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MealsNavigator from "./meals.navigation";
import MealsTabsNavigator from "./meal-tabs.navigation";

const RootNavigator = () => {
    return (
        <NavigationContainer>
           <MealsTabsNavigator/>
        </NavigationContainer>
    );
};


export default RootNavigator;
