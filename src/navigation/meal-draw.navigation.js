import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MealsTabsNavigator from "./meal-tabs.navigation";
import FiltersNavigator from "./filters-stack.navigation";
import { MaterialIcons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const MealsDrawNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContentOptions={{
                activeTintColor: '#e91e63',
                labelStyle:{
                    fontFamily: 'open-sans-bold',
                    display: 'flex',
                    flex:1,
                    marginLeft: -25
                }
            }}
        >
            <Drawer.Screen
                name="home-tab-nav"
                component={MealsTabsNavigator}
                options={
                    {
                        drawerLabel: 'Meals',
                        drawerIcon: ({ color, size }) => (
                            <MaterialIcons
                                name="restaurant-menu"
                                size={24}
                                color={color}
                            />
                        )
                    }
                }
            />
            <Drawer.Screen
                name="filters-nav"
                component={FiltersNavigator}
                options={
                    {
                        title: 'Filters',
                        drawerIcon: ({ color, size }) => (
                            <MaterialIcons
                                name="settings"
                                size={24}
                                color={color}
                            />
                        )
                    }
                }
            />
        </Drawer.Navigator>
    );
};


export default MealsDrawNavigator;
