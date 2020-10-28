import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from "./src/screens/index.screen";
import {StyleSheet} from "react-native"

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="index">
              <Stack.Screen
                  name="index"
                  component={IndexScreen}
                  options={{
                      title: 'Home',
                      headerStyle: {
                          backgroundColor: '#e1e1e1',
                      },
                      headerTintColor: '#000',
                      headerTitleStyle: {
                          fontWeight: 'bold',
                          alignSelf:'center'
                      },
                  }}
              />

          </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});







