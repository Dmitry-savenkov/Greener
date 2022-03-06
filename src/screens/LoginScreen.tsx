import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import Feather from 'react-native-vector-icons/AntDesign';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
    const [text, setText] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(true);
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
            <TouchableOpacity>
                <View>
                    <AntDesign name="arrowleft" size={24} color="#C5CCD6" />
                </View>
            </TouchableOpacity>
            <Text style={[styles.loginText]}>Login</Text>
            <View style={[styles.authorizationPlace]}>
                <View>
                    <Text style={[styles.authorizationText]}>Email</Text>
                    <TextInput style={[styles.textInput]} />
                    <View style={[styles.inputInderline]}></View>
                </View>
                <View>
                    <Text style={[styles.authorizationText]}>Password</Text>
                    <View>
                        <TextInput style={[styles.textInput]} />
                    </View>
                    <View style={[styles.inputInderline]}></View>
                </View>
            </View>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: width * 0.085,
        paddingTop: height * 0.1
    },
    loginText: {
        marginTop: 35,
        fontSize: 26,
        fontFamily: 'SFUIDisplay-Medium'
    },
    authorizationPlace: {
        marginTop: 50
    },
    authorizationText: {
        color: 'rgba(197, 204, 214, 1)',
        fontSize: 15,
        marginBottom: 10,
        fontFamily: 'SFUIDisplay-Regular'
    },
    inputInderline: {
        width: '100%',
        height: 1,
        backgroundColor: 'rgba(225, 227, 232, 1)',
        marginBottom: 20
    },
    textInput: {
        color: 'rgba(50, 54, 67, 1)',
        marginBottom: 20,
        fontFamily: 'SFUIDisplay-Medium'
    }
});
