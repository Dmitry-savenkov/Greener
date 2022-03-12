import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';
import ExploreScreenData from '../data/ExploreScreenData';
import { width, height, colors } from '../constants/theme';
import BackIcon from '../components/BackIcon';
import SearchIcon from '../components/SearchIcon';

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
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[styles.header]}>
                    <Text style={[styles.sectionTitle]}>Explore</Text>
                    <View style={[styles.textInputBlock]}>
                        <TextInput placeholder="Search" style={[styles.textInput]} />
                        <TouchableOpacity>
                            <SearchIcon />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Image source={ExploreScreenData[0]} style={{ width: '100%', borderRadius: 10 }} />
                </View>
                <View style={[styles.rowStyle]}>
                    <Image source={ExploreScreenData[1]} style={{ width: '66%', borderRadius: 10 }} />

                    <Image source={ExploreScreenData[2]} style={{ width: '30%', borderRadius: 10 }} />
                </View>
                <View style={[styles.rowStyle]}>
                    <Image source={ExploreScreenData[3]} style={{ width: '48%', borderRadius: 10 }} />

                    <Image source={ExploreScreenData[4]} style={{ width: '48%', borderRadius: 10 }} />
                </View>
                <View style={[styles.bottomImage]}>
                    <Image source={ExploreScreenData[5]} style={{ width: '100%', borderRadius: 10 }} />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: height * 0.1,
        paddingHorizontal: width * 0.085
    },
    sectionTitle: {
        fontSize: 26,
        fontFamily: 'SFUIDisplay-Medium'
    },
    header: {
        marginBottom: 30,
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textInputBlock: {
        position: 'relative',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: 140,
        height: 32,
        backgroundColor: 'rgba(142, 142, 147, 0.06)',
        borderRadius: 10
    },
    textInput: {
        width: 100,
        paddingLeft: 12,
        paddingVertical: 8,
        marginRight: 9
    },
    rowStyle: {
        marginTop: 25,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    bottomImage: {
        marginTop: 25
    }
});

export default ExploreScreen;
