import React from 'react';

import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native"

/**
 *
 * @param item
 * @returns {JSX.Element}
 * @constructor
 */
const MealItem = ({meal}) => {

    const navigation = useNavigation();

    return (
        <View style={ styles.mealItem}>
            <TouchableOpacity
                onPress={() => navigation.navigate("detail-meals", {mealId: meal.id})}
            >
                <View>

                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground
                            source={{ uri: meal.imageUrl }}
                            style={styles.bgImage}
                        >
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>
                                    {meal.title}
                                </Text>
                            </View>
                        </ImageBackground>
                    </View>

                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                       <Text>{meal.duration}m</Text>
                       <Text>{meal.complexity}</Text>
                       <Text>{meal.affordability}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>


    );
};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    }
});

export default MealItem;
