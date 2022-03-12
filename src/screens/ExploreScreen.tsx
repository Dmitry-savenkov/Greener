import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';
import ExploreScreenData from '../data/ExploreScreenData';
import { width, height } from '../constants/theme';
import BackIcon from '../components/BackIcon';
const ExploreScreen = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        'SFUIDisplay-Regular': require('./../assets/fonts/SFUIDisplay-Regular.ttf'),
        'SFUIDisplay-Medium': require('./../assets/fonts/SFUIDisplay-Medium.ttf'),
        'SFUIDisplay-Bold': require('./../assets/fonts/SFUIDisplay-Bold.ttf')
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <View style={[styles.container]}>
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <BackIcon />
            </TouchableOpacity>
            <View>
                <Text style={[styles.sectionTitle]}>Login</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: height * 0.1,
        paddingHorizontal: width * 0.085
    },
    sectionTitle: {
        marginTop: 35,
        fontSize: 26,
        fontFamily: 'SFUIDisplay-Medium'
    }
});

export default ExploreScreen;
