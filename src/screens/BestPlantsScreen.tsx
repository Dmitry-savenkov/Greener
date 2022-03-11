import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import BackIcon from '../components/BackIcon';
import { width, height, colors } from '../constants/theme';
import DotsIcon from '../components/DotsIcon';
import { BestPlantsScreenData } from '../data/BestPlantsScreenData';
import { BestPlantsScreenCategories } from '../data/BestPlantsScreenData';
import { ScrollView } from 'react-native-gesture-handler';

const BestPlantsScreen = ({ navigation }) => {
    const [indexIndicator, setIndexIndicator] = useState(2);
    const [image, setImage] = useState(require('../assets/images/plants_1.png'));
    const [displayStatus, setDisplayStatus] = useState(true);
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
            <ScrollView>
                <View style={[styles.imageStyleHeader]}>
                    <Image source={image} style={[styles.headerImage]} />
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
                            renderItem={({ item }) => {
                                return (
                                    <View style={[styles.categoryNameItem]}>
                                        <Text style={[styles.categoryNameText]}>{item.name}</Text>
                                    </View>
                                );
                            }}
                        />
                    </View>
                    <View>
                        <Text style={[styles.descriptionText]}>{BestPlantsScreenData[0].description}</Text>
                    </View>
                    <View style={[styles.grayInderline]}></View>
                    <View style={[styles.galleryBlock]}>
                        <Text style={[styles.galleryBlockTitle]}>Gallery</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                data={BestPlantsScreenData[0].images.slice(0, indexIndicator)}
                                bounces={false}
                                keyExtractor={(_, index) => {
                                    return index + Math.random().toString();
                                }}
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => {
                                                setImage(item);
                                            }}
                                        >
                                            <View style={[styles.categoryNameImage]}>
                                                <Image source={item} style={[styles.imageSlider]} />
                                            </View>
                                        </TouchableOpacity>
                                    );
                                }}
                            />
                            <TouchableOpacity
                                onPress={() => {
                                    setIndexIndicator(BestPlantsScreenData[0].images.length);
                                    setDisplayStatus(false);
                                }}
                                style={{ display: displayStatus ? 'flex' : 'none' }}
                            >
                                <View style={[styles.grayBlock]}>
                                    <Text>+{BestPlantsScreenData[0].images.length - 2}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: height * 0.07
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
        marginRight: 15,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: colors.gray2
    },
    categoryNameText: {
        color: colors.gray,
        fontFamily: 'SFUIDisplay-Regular',
        paddingVertical: 6,
        paddingHorizontal: 19
    },
    descriptionText: {
        fontSize: 16,
        color: colors.gray,
        fontFamily: 'SFUIDisplay-Medium'
    },
    grayInderline: {
        marginTop: 20,
        width: '100%',
        height: 1,
        backgroundColor: colors.gray2
    },
    galleryBlock: {
        marginTop: 20,
        marginBottom: 20
    },
    galleryBlockTitle: {
        color: colors.black,
        fontSize: 18,
        fontFamily: 'SFUIDisplay-Medium',
        marginBottom: 10
    },
    grayBlock: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 65,
        height: 65,
        backgroundColor: colors.gray2,
        opacity: 0.3
    },
    imageSlider: {
        width: 115,
        height: 115,
        resizeMode: 'cover'
    },
    categoryNameImage: {
        marginRight: 20
    }
});

export default BestPlantsScreen;
