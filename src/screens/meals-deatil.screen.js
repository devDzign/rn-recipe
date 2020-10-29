import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const MealsDetailScreen = ({navigation, route}) => {


    return (
        <View style={styles.container}>
            <Text>MealsDetailScreen {route.params.categoryId}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default MealsDetailScreen;
