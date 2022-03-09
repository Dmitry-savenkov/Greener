import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import BackIcon from '../components/BackIcon';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { BrowseScreenData } from '../data/BrowseScreenData';
import { BrowseNameCategories } from '../data/BrowseScreenData';
import { FlatList } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

const BrowseScreen = ({ navigation }) => {
    const [activeCategory, setActiveCategory] = useState(0);
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
            <View>
                <FlatList
                    style={[styles.listCategory]}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={BrowseNameCategories}
                    bounces={false}
                    keyExtractor={(_item, index) => {
                        return index + Math.random().toString();
                    }}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    setActiveCategory(index);
                                }}
                            >
                                <View style={[styles.categoryNameItem]}>
                                    <Text
                                        style={[
                                            styles.categoryNameText,
                                            {
                                                color: activeCategory === index ? 'rgba(10, 196, 186, 1)' : '#C5CCD6'
                                            }
                                        ]}
                                    >
                                        {item.name}
                                    </Text>
                                    {activeCategory === index ? <View style={[styles.underlineGreen]}></View> : null}
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
            <View style={[styles.grayLine]}></View>
            <View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={BrowseScreenData}
                    bounces={false}
                    numColumns={2}
                    keyExtractor={(_item, index) => {
                        return _item.id + (index + Math.random().toString());
                    }}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={[styles.categoryBlock]}>
                                <View>
                                    <Image source={item.image} />
                                </View>
                                <Text>{item.name}</Text>
                                <Text>
                                    <Text>{item.count}</Text> products
                                </Text>
                            </View>
                        );
                    }}
                />
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
    },
    listCategory: {
        marginTop: 50
    },
    categoryNameItem: {
        marginRight: 34
    },
    categoryNameText: {
        fontFamily: 'SFUIDisplay-Medium',
        color: '#C5CCD6',
        fontSize: 18
    },
    grayLine: {
        width: '100%',
        height: 1,
        backgroundColor: 'rgba(225, 227, 232, 1)',
        marginBottom: 40
    },
    underlineGreen: {
        marginTop: 21,
        width: '100%',
        height: 3,
        backgroundColor: 'rgba(10, 196, 186, 1)'
    },
    categoryBlock: {
        width: '50%',
        margin: 7.5
    }
});

export default BrowseScreen;
