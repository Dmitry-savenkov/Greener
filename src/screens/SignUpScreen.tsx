import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';
import BackIcon from '../components/BackIcon';
// import { handleCreateAccount } from '../auth/firebase';

const { width, height } = Dimensions.get('window');

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <BackIcon />
            </TouchableOpacity>

            <Text style={[styles.loginText]}>Sign Up</Text>
            <View style={[styles.authorizationPlace]}>
                <View>
                    <Text style={[styles.authorizationText]}>First name</Text>
                    <TextInput style={[styles.textInput]} placeholder="Name" />
                    <View style={[styles.inputInderline]}></View>
                </View>
                <View>
                    <Text style={[styles.authorizationText]}>Last Name</Text>
                    <TextInput style={[styles.textInput]} placeholder="LastName" />
                    <View style={[styles.inputInderline]}></View>
                </View>
                <View>
                    <Text style={[styles.authorizationText]}>Email</Text>
                    <TextInput
                        style={[styles.textInput]}
                        placeholder="simpleEmail@mail.ru"
                        onChangeText={(inputText) => {
                            setEmail(inputText);
                        }}
                    />
                    <View style={[styles.inputInderline]}></View>
                </View>
                <View>
                    <Text style={[styles.authorizationText]}>Password</Text>
                    <View style={[styles.passwordInput]}>
                        <TextInput
                            style={[styles.textInput]}
                            value={
                                passwordVisible
                                    ? password
                                    : [...Array(password.length)].reduce((acc, next) => {
                                          return (acc += '*');
                                      }, '')
                            }
                            onChangeText={(inputText) => {
                                passwordVisible ? setPassword(inputText) : null;
                            }}
                            placeholder="yourCoolPassword"
                        />
                        <Entypo
                            name={passwordVisible ? 'eye' : 'eye-with-line'}
                            size={20}
                            color="#6E737A"
                            onPress={() => {
                                setPasswordVisible(!passwordVisible);
                            }}
                        />
                    </View>
                    <View style={[styles.inputInderline]}></View>
                </View>
            </View>
            <TouchableOpacity
                onPress={() => {
                    // return handleCreateAccount(email, password);
                }}
            >
                <View style={[styles.buttonCenterMode]}>
                    <LinearGradient
                        start={{ x: 0, y: 15 }}
                        end={{ x: 1.33, y: 5 }}
                        colors={['rgba(10, 196, 186, 1)', 'rgba(43, 218, 142, 1)']}
                        style={[styles.buttonLogin, styles.blockCentering]}
                    >
                        <Text style={styles.loginButtonText}>Sign Up</Text>
                    </LinearGradient>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={[styles.blockCentering]}>
                    <Text style={[styles.forgotPasswordText]}>Technical support</Text>
                </View>
            </TouchableOpacity>
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
    blockCentering: {
        justifyContent: 'center',
        alignItems: 'center'
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
        color: '#6E737A',
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
    },
    buttonCenterMode: {
        marginTop: 26,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonLogin: {
        width: '100%',
        height: 48,
        borderRadius: 9
    },
    loginButtonText: {
        color: '#ffffff',
        fontFamily: 'SFUIDisplay-Regular',
        fontSize: 16
    },
    forgotPasswordText: {
        color: 'rgba(157, 163, 180, 1)',
        marginTop: 20,
        textDecorationLine: 'underline'
    },
    passwordInput: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default SignUpScreen;
