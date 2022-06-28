// Lib
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';

// Components
import BackIcon from '../components/BackIcon';
import { auth } from '../auth/firebase-config';

// UI
import { width, height, colors } from '../constants/theme';
import { ThemesContext } from '../context/ThemeContext';

const LoginScreen = ({ navigation }) => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  const { fontsLoaded } = useContext(ThemesContext);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handleLogin = (email: string, password: string) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials: { user: any }) => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
        navigation.reset({
          index: 0,
          routes: [{ name: 'BottomTabNavigator', screen: 'Browse' }],
        });
      })
      .catch((error: { message: string }) => {
        setError(true);
        setPassword('');
        alert(error.message);
      });
  };

  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <BackIcon />
      </TouchableOpacity>
      <Text style={[styles.loginText]}>Login</Text>
      <View style={[styles.authorizationPlace]}>
        <View>
          <Text
            style={[
              styles.authorizationText,
              {
                color: error ? colors.accent : colors.black,
              },
            ]}
          >
            Email
          </Text>
          <TextInput
            style={[styles.textInput]}
            placeholder="simpleEmail@mail.ru"
            value={email}
            onChangeText={(inputText) => {
              setEmail(inputText);
              setError(false);
            }}
          />
          <View
            style={[
              styles.inputInderline,
              {
                backgroundColor: error ? colors.accent : colors.gray2,
              },
            ]}
          ></View>
        </View>
        <View>
          <Text
            style={[
              styles.authorizationText,
              {
                color: error ? colors.accent : colors.black,
              },
            ]}
          >
            Password
          </Text>
          <View style={[styles.passwordInput]}>
            <TextInput
              keyboardType="email-address"
              style={[styles.textInput]}
              value={
                passwordVisible
                  ? password
                  : [...Array(password.length)].reduce((acc) => {
                      return (acc += '*');
                    }, '')
              }
              onChangeText={(inputText) => {
                passwordVisible ? setPassword(inputText) : null;
                setError(false);
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
          <View
            style={[
              styles.inputInderline,
              {
                backgroundColor: error ? colors.accent : colors.gray2,
              },
            ]}
          ></View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          handleLogin(email, password);
        }}
      >
        <View style={[styles.buttonCenterMode]}>
          <LinearGradient
            start={{ x: 0, y: 15 }}
            end={{ x: 1.33, y: 5 }}
            colors={[colors.primary, colors.secondary, colors.tertiary]}
            style={[styles.buttonLogin, styles.blockCentering]}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </LinearGradient>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ForgotPassword');
        }}
      >
        <View style={[styles.blockCentering]}>
          <Text style={[styles.forgotPasswordText]}>Forgot your password?</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: width * 0.085,
    paddingTop: height * 0.1,
  },
  blockCentering: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    marginTop: 35,
    fontSize: 26,
    fontFamily: 'SFUIDisplay-Medium',
  },
  authorizationPlace: {
    marginTop: 50,
  },
  authorizationText: {
    fontSize: 15,
    marginBottom: 10,
    fontFamily: 'SFUIDisplay-Regular',
  },
  inputInderline: {
    width: '100%',
    height: 1,
    backgroundColor: colors.gray2,
    marginBottom: 20,
  },
  textInput: {
    color: colors.black,
    marginBottom: 20,
    fontFamily: 'SFUIDisplay-Medium',
  },
  buttonCenterMode: {
    marginTop: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLogin: {
    width: '100%',
    height: 48,
    borderRadius: 9,
  },
  loginButtonText: {
    color: colors.white,
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 16,
  },
  forgotPasswordText: {
    color: colors.gray,
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  passwordInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default LoginScreen;
