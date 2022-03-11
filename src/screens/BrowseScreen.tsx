import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import React, { useState } from 'react';
import BackIcon from '../components/BackIcon';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { BrowseScreenData } from '../data/BrowseScreenData';
import { BrowseNameCategories } from '../data/BrowseScreenData';
import { width, height } from '../constants/theme';

const BrowseScreen = ({ navigation }) => {
    const [activeCategory, setActiveCategory] = useState(0);
    const [activeCategoryName, setActiveCategoryName] = useState('products');
    const [fontsLoaded] = useFonts({
        'SFUIDisplay-Regular': require('./../assets/fonts/SFUIDisplay-Regular.ttf'),
        'SFUIDisplay-Medium': require('./../assets/fonts/SFUIDisplay-Medium.ttf')
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
                                    setActiveCategoryName(item.id);
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
            <View style={[styles.shadowFlatList]}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ marginLeft: -7.5, marginBottom: 250 }}
                    bounces={false}
                    contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
                >
                    {BrowseScreenData.map((item, index) => {
                        return item.tags.includes(activeCategoryName) ? (
                            <TouchableOpacity style={[styles.categoryBlock]} key={index}>
                                <View style={[styles.imageBG]}>
                                    <Image source={item.image} />
                                </View>
                                <Text style={[styles.categoryBlockTitle]}>{item.name}</Text>
                                <Text style={[styles.categoryBlockCount]}>{item.count} products</Text>
                            </TouchableOpacity>
                        ) : null;
                    })}
                </ScrollView>
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
        alignItems: 'center',
        width: '45%',
        height: 150,
        margin: 7.5,
        backgroundColor: '#ffffff',
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.02,
        shadowRadius: 10
    },
    shadowFlatList: {
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.08,
        shadowRadius: 10
    },
    imageBG: {
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'rgba(43, 218, 142, 0.2)',
        marginBottom: 15
    },
    categoryBlockTitle: {
        fontSize: 14,
        color: 'black',
        fontFamily: 'SFUIDisplay-Medium',
        marginBottom: 4
    },
    categoryBlockCount: {
        color: 'rgba(197, 204, 214, 1)',
        fontFamily: 'SFUIDisplay-Regular'
    }
});

export default BrowseScreen;
