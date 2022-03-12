import { View } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
const SearchIcon = () => {
    return (
        <View>
            <AntDesign name="search1" size={18} color="#C5CCD6" style={{ paddingVertical: 7, paddingRight: 12 }} />
        </View>
    );
};

export default SearchIcon;
