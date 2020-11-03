import 'react-native-gesture-handler';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Colors from "../constants/color";
import FiltersScreen from "../screens/filter.screen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/header-button.component";

import { useNavigation } from '@react-navigation/native';


const Stack = createStackNavigator();

const FiltersNavigator = () => {

    const navigation = useNavigation()

    return (
            <Stack.Navigator
                initialRouteName="filters"
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
                    name="filters"
                    component={FiltersScreen}
                    options={
                        {
                            title: 'Filters',
                            headerLeft: () => (
                                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                                    <Item
                                        title={"menu"}
                                        iconName={'ios-menu'}
                                        onPress={() =>  navigation.toggleDrawer()}
                                    />
                                </HeaderButtons>
                            ),
                        }
                    }
                />
            </Stack.Navigator>
    );
};



export default FiltersNavigator;
