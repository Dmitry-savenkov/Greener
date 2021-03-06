import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import React, { useState, useContext } from 'react';
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';
import ExploreScreenData from '../data/ExploreScreenData';
import { width, height, colors } from '../constants/theme';
import BackIcon from '../components/BackIcon';
import SearchIcon from '../components/SearchIcon';
import { ThemesContext } from '../context/ThemeContext';
import DotsIcon from '../components/DotsIcon';

const ExploreScreen = ({ navigation }) => {
    const [inputValue, setInputValue] = useState('');
    const { fontsLoaded } = useContext(ThemesContext);
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <View style={[styles.container]}>
            <View style={[styles.headerIcons]}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <BackIcon />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.openDrawer();
                    }}
                >
                    <DotsIcon />
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[styles.header]}>
                    <Text style={[styles.sectionTitle]}>Explore</Text>
                    <View style={[styles.textInputBlock]}>
                        <TextInput
                            placeholder="Search"
                            style={[styles.textInput]}
                            value={inputValue}
                            onChangeText={(text) => {
                                setInputValue(text);
                            }}
                        />
                        <TouchableOpacity>
                            <SearchIcon />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('DrawerNavigator', { screen: 'BestPlants' });
                    }}
                >
                    <Image source={ExploreScreenData[0]} style={{ width: '100%', borderRadius: 10 }} />
                </TouchableOpacity>
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
            <TouchableOpacity>
                <View style={[styles.centerModeFilter]}>
                    <LinearGradient
                        start={{ x: 0, y: 15 }}
                        end={{ x: 1.33, y: 5 }}
                        colors={[colors.primary, colors.secondary, colors.tertiary]}
                        style={[styles.centerModeFilter]}
                    >
                        <Text style={styles.filtersText}>Filters</Text>
                    </LinearGradient>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: height * 0.06,
        paddingHorizontal: width * 0.085
    },
    headerIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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
    },
    filtersText: {
        paddingVertical: 11,
        paddingHorizontal: 50,
        color: colors.white,
        fontFamily: 'SFUIDisplay-Regular',
        fontSize: 16
    },
    centerMode: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    centerModeFilter: {
        position: 'absolute',
        bottom: height * 0.04,
        right: width * 0.12,
        zIndex: 400,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default ExploreScreen;
