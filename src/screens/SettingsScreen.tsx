import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import BackIcon from '../components/BackIcon';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { width, height, colors } from '../constants/theme';
import SettingsScreenData from '../data/SettingsScreenData';

const SettingsScreen = ({ navigation }) => {
    const [userName, setUserNamee] = useState(SettingsScreenData.username);
    const [userNameStatus, setUserNameStatus] = useState(false);
    const [location, setLocation] = useState(SettingsScreenData.location);
    const [locationStatus, setLocationStatus] = useState(false);
    const [fontsLoaded] = useFonts({
        'SFUIDisplay-Regular': require('./../assets/fonts/SFUIDisplay-Regular.ttf'),
        'SFUIDisplay-Medium': require('./../assets/fonts/SFUIDisplay-Medium.ttf')
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <View style={[styles.container]}>
            <BackIcon />
            <View style={[styles.titlePhoto]}>
                <Text style={[styles.title]}>Settings</Text>
                <Image source={SettingsScreenData.avatar} style={[styles.avatarImage]} />
            </View>
            <View style={[styles.settings]}>
                <View style={[styles.userInput]}>
                    <Text style={[styles.userName]}>Username</Text>
                    <View style={[styles.textInputEdit]}>
                        <TextInput
                            editable={userNameStatus}
                            value={userName}
                            style={[styles.inputTextStyle]}
                            onChangeText={(textInput) => {
                                setUserNamee(textInput);
                            }}
                        />
                        <TouchableOpacity
                            onPress={() => {
                                setUserNameStatus(!userNameStatus);
                            }}
                        >
                            <Text style={[styles.editTextStyle]}>{userNameStatus ? 'Save' : 'Edit'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.userInput]}>
                    <Text style={[styles.userName]}>Location</Text>
                    <View style={[styles.textInputEdit]}>
                        <TextInput
                            editable={locationStatus}
                            value={location}
                            style={[styles.inputTextStyle]}
                            onChangeText={(textInput) => {
                                setLocation(textInput);
                            }}
                        />
                        <TouchableOpacity
                            onPress={() => {
                                setLocationStatus(!locationStatus);
                            }}
                        >
                            <Text style={[styles.editTextStyle]}>{locationStatus ? 'Save' : 'Edit'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.userInput]}>
                    <Text style={[styles.userName]}>E-mail</Text>
                    <View style={[styles.textInputEdit]}>
                        <Text style={[styles.inputTextStyle, { marginBottom: 10 }]}>{SettingsScreenData.email}</Text>
                    </View>
                </View>
                <View style={[styles.grayLine]}></View>
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
        color: 'rgba(50, 54, 67, 1)'
    },
    titlePhoto: {
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    avatarImage: {
        width: 43,
        height: 43,
        borderRadius: 36
    },
    settings: {
        marginTop: 30,
        marginBottom: 30
    },
    userName: {
        fontFamily: 'SFUIDisplay-Regular',
        color: colors.gray,
        fontSize: 16,
        marginBottom: 14
    },
    editTextStyle: {
        color: colors.primary,
        fontSize: 18
    },
    textInputEdit: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inputTextStyle: {
        fontSize: 15,
        color: colors.black
    },
    userInput: {
        marginBottom: 20
    },
    grayLine: {
        width: '100%',
        height: 1,
        backgroundColor: colors.gray2,
        marginBottom: 20
    }
});

export default SettingsScreen;
