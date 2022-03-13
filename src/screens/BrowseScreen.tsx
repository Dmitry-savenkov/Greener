import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import React, { useState, useContext } from 'react';
import AppLoading from 'expo-app-loading';
import { BrowseScreenData } from '../data/BrowseScreenData';
import { BrowseNameCategories } from '../data/BrowseScreenData';
import { width, height, colors } from '../constants/theme';
import SettingsScreenData from '../data/SettingsScreenData';
import { ThemesContext } from '../context/ThemeContext';

const BrowseScreen = ({ navigation }) => {
    const [activeCategory, setActiveCategory] = useState(0);
    const [activeCategoryName, setActiveCategoryName] = useState('products');
    const { fontsLoaded } = useContext(ThemesContext);
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <View style={[styles.container]}>
            <View style={[styles.titlePhoto]}>
                <Text style={[styles.title]}>Browse</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Settings');
                    }}
                >
                    <Image source={SettingsScreenData.avatar} style={[styles.avatarImage]} />
                </TouchableOpacity>
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
                                                color: activeCategory === index ? colors.primary : colors.gray2
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
                            <TouchableOpacity
                                style={[styles.categoryBlock]}
                                key={index}
                                onPress={() => {
                                    navigation.navigate(item.navigateTo);
                                }}
                            >
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
        backgroundColor: colors.white,
        paddingHorizontal: width * 0.085,
        paddingTop: height * 0.1
    },
    title: {
        fontFamily: 'SFUIDisplay-Medium',
        fontSize: 28,
        color: colors.black
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
        borderRadius: 36
    },
    listCategory: {
        marginTop: 50
    },
    categoryNameItem: {
        marginRight: 30
    },
    categoryNameText: {
        fontFamily: 'SFUIDisplay-Medium',
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
        backgroundColor: colors.primary
    },
    categoryBlock: {
        alignItems: 'center',
        width: '45%',
        height: 150,
        margin: 7.5,
        backgroundColor: colors.white,
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
        color: colors.gray2,
        fontFamily: 'SFUIDisplay-Regular'
    }
});

export default BrowseScreen;
