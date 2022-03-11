import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import BackIcon from '../components/BackIcon';
import { width, height, colors } from '../constants/theme';
import DotsIcon from '../components/DotsIcon';
import { BestPlantsScreenData } from '../data/BestPlantsScreenData';
import { BestPlantsScreenCategories } from '../data/BestPlantsScreenData';
const BestPlantsScreen = ({ navigation }) => {
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
            <View style={[styles.header]}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <BackIcon />
                </TouchableOpacity>
                <TouchableOpacity>
                    <DotsIcon />
                </TouchableOpacity>
            </View>
            <View style={[styles.imageStyleHeader]}>
                <Image source={require('../assets/images/plants_1.png')} style={[styles.headerImage]} />
            </View>
            <View style={[styles.payloadContent]}>
                <View style={[styles.titleCategory]}>
                    <Text style={[styles.titleText]}>{BestPlantsScreenData[0].name}</Text>
                </View>
                <View style={[styles.listCategory]}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={BestPlantsScreenCategories}
                        bounces={false}
                        keyExtractor={(_, index) => {
                            return index + Math.random().toString();
                        }}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity onPress={() => {}}>
                                    <View style={[styles.categoryNameItem]}>
                                        <Text style={[styles.categoryNameText]}>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            );
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: height * 0.1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.085
    },
    headerImage: {
        width: '100%',
        height: 350,
        resizeMode: 'contain'
    },
    imageStyleHeader: {
        marginTop: 10,
        marginBottom: 25
    },
    payloadContent: {
        paddingHorizontal: width * 0.085
    },
    titleCategory: {
        marginBottom: 15
    },
    titleText: {
        color: colors.black,
        fontSize: 20,
        fontFamily: 'SFUIDisplay-Medium'
    },
    listCategory: {
        marginBottom: 20
    },
    categoryNameItem: {
        marginRight: 10,
        borderColor: colors.gray2,
        borderRadius: 20,
        borderWidth: 1
    },
    categoryNameText: {
        paddingVertical: 6,
        paddingHorizontal: 19
    }
});

export default BestPlantsScreen;
