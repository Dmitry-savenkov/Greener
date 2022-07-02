// Lib
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';

// Components
import BackIcon from '../components/icons/BackIcon';
import { auth } from '../auth/firebase-config';

// UI
import { width, height, colors } from '../constants/theme';
import { ThemesContext } from '../context/ThemeContext';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [errorName, setErrorName] = useState(false);
  const [errorLastName, setErrorLastName] = useState(false);
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);

  const { fontsLoaded } = useContext(ThemesContext);

  const handleSignUp = (email: string, password: string) => {
    if (name === '') {
      setErrorName(true);
      return;
    }
    if (lastName === '') {
      setErrorLastName(true);
      return;
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials: { user: any }) => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
        navigation.navigate('Login');
      })
      .catch((error: { message: string }) => {
        setError(true);
        alert(error.message);
      });
  };

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
          <Text
            style={[
              styles.authorizationText,
              {
                color: errorName ? colors.accent : colors.black,
              },
            ]}
          >
            First name
          </Text>
          <TextInput
            style={[styles.textInput]}
            placeholder="Name"
            onChangeText={(inputText) => {
              setErrorName(false);
              setName(inputText);
            }}
          />
          <View
            style={[
              styles.inputInderline,
              {
                backgroundColor: errorName ? colors.accent : colors.gray2,
              },
            ]}
          ></View>
        </View>
        <View>
          <Text
            style={[
              styles.authorizationText,
              {
                color: errorLastName ? colors.accent : colors.black,
              },
            ]}
          >
            Last Name
          </Text>
          <TextInput
            style={[styles.textInput]}
            placeholder="LastName"
            onChangeText={(inputText) => {
              setErrorLastName(false);
              setLastName(inputText);
            }}
          />
          <View
            style={[
              styles.inputInderline,
              {
                backgroundColor: errorLastName ? colors.accent : colors.gray2,
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
            Email
          </Text>
          <TextInput
            style={[styles.textInput]}
            placeholder="simpleEmail@mail.ru"
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
                setError(false);
              }}
              placeholder="yourCoolPassword"
            />
            <Entypo
              name={passwordVisible ? 'eye' : 'eye-with-line'}
              size={20}
              color={colors.gray}
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
          return handleSignUp(email, password);
        }}
      >
        <View style={[styles.buttonCenterMode]}>
          <LinearGradient
            start={{ x: 0, y: 15 }}
            end={{ x: 1.33, y: 5 }}
            colors={[colors.primary, colors.secondary, colors.tertiary]}
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
    color: colors.black,
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

export default SignUpScreen;
