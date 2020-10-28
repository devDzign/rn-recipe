import 'react-native-gesture-handler';
import React, { useState } from 'react';

import * as Font from 'expo-font';
import { AppLoading } from "expo";

import { StyleSheet } from "react-native"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from "./src/screens/categories.screen";

const Stack = createStackNavigator();

const fetchFonts = () => {
    return Font.loadAsync({
            'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
            'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
        }
    )
}

export default function App() {

    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setFontLoaded(true)}
            />
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="index">
                <Stack.Screen
                    name="index"
                    component={CategoriesScreen}
                    options={{
                        title: 'Home',
                        headerStyle: {
                            backgroundColor: '#e1e1e1',
                        },
                        headerTintColor: '#000',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            alignSelf: 'center'
                        },
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {},
});







