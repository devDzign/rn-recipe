import React, { useCallback, useEffect, useState } from 'react';

import { Text, View, StyleSheet, Switch, Platform } from 'react-native';
import Colors from '../constants/color';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/header-button.component";


import {connect} from "react-redux";
import {saveFiltersRequest} from "../store/filters/meals.actions";

const FilterSwitch = props => {

    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch
                trackColor={{ true: 'green' }}
                thumbColor={Colors.primaryColor}
                value={props.state}
                onValueChange={props.onChange}
            />
        </View>
    );
}

let onSave=()=>{}
const FiltersScreen = ({navigation, route, filters}) => {

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);





    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            isVegetarian: isVegetarian
        };

        filters(appliedFilters);

        return appliedFilters;

    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

    useEffect(() => {
        onSave=saveFilters;
    },[saveFilters]);

    useEffect(() => {
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
    },[route, navigation])

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch
                label="Gluten-free"
                state={isGlutenFree}
                onChange={()=> setIsGlutenFree( previousState => !previousState)}
            />
            <FilterSwitch
                label="Lactose-free"
                state={isLactoseFree}
                onChange={() => setIsLactoseFree(previousState => !previousState)}
            />
            <FilterSwitch
                label="Vegan"
                state={isVegan}
                onChange={() => setIsVegan(previousState => !previousState)}
            />
            <FilterSwitch
                label="Vegetarian"
                state={isVegetarian}
                onChange={() => setIsVegetarian(previousState => !previousState)}
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

const mapDispatchToProps = dispatch => ( {
    filters: (saveFilters) => dispatch(saveFiltersRequest(saveFilters))
})

export default connect(null, mapDispatchToProps)(FiltersScreen);
