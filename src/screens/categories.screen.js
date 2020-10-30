import React from 'react';
import {StyleSheet, FlatList, ScrollView } from 'react-native';

import { CATEGORIES } from "../utils/dummy-data";

import CategoryItem from "../components/category-item.component";


const CategoriesScreen = () => {

    const renderGridItem = ({item}) => {
        return (
            <CategoryItem item={item} goTo={"category-meals"}/>
        );
    }

    return (
        <ScrollView>
            <FlatList
                numColumns={2}
                data={CATEGORIES}
                keyExtractor={(cat) => cat.id}
                renderItem={renderGridItem}
            />
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default CategoriesScreen;
