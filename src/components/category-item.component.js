import React from 'react';

import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native"

/**
 *
 * @param item
 * @returns {JSX.Element}
 * @constructor
 */
const CategoryItem = ({item, goTo}) => {

    const navigation =  useNavigation();

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate(goTo,{ categoryId: item.id });
            }}
            style={styles.gridItem}
        >
            <View style={{...styles.container, ...{backgroundColor: item.color}}}>
                <Text
                    style={styles.title}
                    numberOfLines={2}
                >
                    {item.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor:'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right',
        borderRadius: 10,
        overflow: 'hidden'
    }
});

export default CategoryItem;
