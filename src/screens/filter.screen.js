import React, { useCallback, useEffect, useState } from 'react';

import { Text, View, StyleSheet, Switch} from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/header-button.component";

import { useDispatch } from "react-redux";
import {  setFilters } from "../store/filters/meals.actions";

const FilterSwitch = props => {
      const isEnabled = props.state
    return (
        <View style={styles.filterContainer}>
            <Text style={styles.title}>{props.label}</Text>
            <Switch
                trackColor={{true: 'green', false:'red'}}
                thumbColor={isEnabled ? "black" : "black"}
                value={isEnabled}
                ios_backgroundColor="red"
                onValueChange={props.onChange}
            />
        </View>
    );
}

let onSave = () => {}

const FiltersScreen = ({navigation, route}) => {
    const dispatch = useDispatch();
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        };

        dispatch(setFilters(appliedFilters));
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

    useEffect(() => {
        navigation.setParams({ save: saveFilters });
    }, [saveFilters]);



    useEffect(() => {
        onSave = (route.params) ? route.params.save: onSave;
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title="Save"
                        iconName="ios-save"
                        onPress={onSave}
                    />
                </HeaderButtons>
            ),
        })
    }, [route, navigation])

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch
                label="Gluten-free"
                state={isGlutenFree}
                onChange={newValue => setIsGlutenFree(newValue)}
            />
            <FilterSwitch
                label="Lactose-free"
                state={isLactoseFree}
                onChange={newValue => setIsLactoseFree(newValue)}
            />
            <FilterSwitch
                label="Vegan"
                state={isVegan}
                onChange={newValue => setIsVegan(newValue)}
            />
            <FilterSwitch
                label="Vegetarian"
                state={isVegetarian}
                onChange={newValue => setIsVegetarian(newValue)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    }
});

export default FiltersScreen;
