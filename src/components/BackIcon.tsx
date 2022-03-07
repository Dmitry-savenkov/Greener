import { StyleSheet, View, TouchableOpacity } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
const BackIcon = () => {
    return (
        <TouchableOpacity>
            <View>
                <AntDesign name="arrowleft" size={24} color="#C5CCD6" />
            </View>
        </TouchableOpacity>
    );
};

export default BackIcon;
