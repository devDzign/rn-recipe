import React, { useEffect, useState } from 'react';

import { Text, View, StyleSheet, Button } from 'react-native';
import Colors from "../constants/color";
import { CATEGORIES } from "../utils/dummy-data";

const CategoryMealsScreen = ({navigation, route}) => {

    const [category, setCategory] = useState(null);
    const categoryId =  route.params.categoryId;
    const getCategory = async () => {
        const cat = await CATEGORIES.find(c => c.id === categoryId);
        setCategory(cat);
        navigation.setOptions({title: cat.title});
    }

    useEffect(() => {
         getCategory();
    }, []);


    if(!category){
        return null
    }
    return (
        <View style={styles.container}>
            <Text>{category.title}</Text>
            <Button
                title={"Go To Detail"}
                onPress={() => {
                    return navigation.navigate('detail-meals', {categoryId: categoryId})
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default CategoryMealsScreen;
