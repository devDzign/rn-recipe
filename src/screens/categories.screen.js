import React, { useEffect } from 'react';
import { FlatList} from 'react-native';
import { CATEGORIES } from "../utils/dummy-data";
import CategoryItem from "../components/category-item.component";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/header-button.component";


const CategoriesScreen = ({navigation}) => {

    const openDrawNavHandler = () => {
        navigation.toggleDrawer();
    }

    useEffect(() => {
        navigation.setOptions(
            {
                headerLeft: () => (
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item
                            title={"fav"}
                            iconName={'ios-menu'}
                            onPress={openDrawNavHandler}
                        />
                    </HeaderButtons>
                ),
            });
    },[]);

    const renderGridItem = ({item}) => {
        return (
            <CategoryItem item={item} goTo={"category-meals"}/>
        );
    }

    return (
        <FlatList
            numColumns={2}
            data={CATEGORIES}
            keyExtractor={(cat) => cat.id}
            renderItem={renderGridItem}
        />
    );
};


export default CategoriesScreen;
