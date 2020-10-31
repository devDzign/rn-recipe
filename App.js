import 'react-native-gesture-handler';

import * as Font from 'expo-font';
import { AppLoading } from "expo";

import React, { useState } from 'react';
import { StyleSheet } from "react-native"

import RootNavigator from "./src/navigation/root.navigator";

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
        <RootNavigator/>
    );
}

const styles = StyleSheet.create({
    container: {},
});







