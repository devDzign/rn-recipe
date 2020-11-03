import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MealsTabsNavigator from "./meal-tabs.navigation";
import MealsDrawNavigator from "./meal-draw.navigation";

const RootNavigator = () => {
    return (
        <NavigationContainer>
           {/*<MealsTabsNavigator/>*/}
           <MealsDrawNavigator />
        </NavigationContainer>
    );
};


export default RootNavigator;
