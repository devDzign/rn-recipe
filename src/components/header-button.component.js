import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButton } from "react-navigation-header-buttons";
import Colors from "../constants/color";

const CustomHeaderButton = (props) => {

    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={Colors.white}
        />

    );
};

export default CustomHeaderButton;
