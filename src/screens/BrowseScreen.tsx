import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import BackIcon from '../components/BackIcon';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const { width, height } = Dimensions.get('window');

const BrowseScreen = ({ navigation }) => {
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
            <View style={[styles.titlePhoto]}>
                <Text style={[styles.title]}>Browse</Text>
                <View style={[styles.avatarImage]}></View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: width * 0.085,
        paddingTop: height * 0.1
    },
    title: {
        fontFamily: 'SFUIDisplay-Medium',
        fontSize: 28,

        color: 'rgba(50, 54, 67, 1)'
    },
    titlePhoto: {
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    avatarImage: {
        width: 36,
        height: 36,
        borderRadius: 36,
        backgroundColor: 'rgba(50, 54, 67, 1)'
    }
});

export default BrowseScreen;
