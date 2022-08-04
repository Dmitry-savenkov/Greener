// Lib
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';

// Components
import AntDesignIcon from '../components/icons/AntDesignIcon';
import { auth } from '../auth/firebase-config';

// UI
import { width, height, colors } from '../constants/theme';
import { ThemesContext } from '../context/ThemeContext';

const ForgotPasswordScreen = ({ navigation }) => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const { fontsLoaded } = useContext(ThemesContext);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handleReset = (email: string) => {
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        alert('Password reset email sent!');
        navigation.navigate('Login');
      })
      .catch((error: { code: string; message: string }) => {
        setError(true);
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('error code:' + errorCode + '.' + 'error message:' + errorMessage + '.');
      });
  };

  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <AntDesignIcon name="arrowleft" size={24} color="#C5CCD6" />
      </TouchableOpacity>

      <Text style={[styles.recoveryText]}>Password recovery</Text>
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
      </View>
      <TouchableOpacity
        onPress={() => {
          handleReset(email);
        }}
      >
        <View style={[styles.buttonCenterMode]}>
          <LinearGradient
            start={{ x: 0, y: 15 }}
            end={{ x: 1.33, y: 5 }}
            colors={[colors.primary, colors.secondary, colors.tertiary]}
            style={[styles.buttonLogin, styles.blockCentering]}
          >
            <Text style={styles.loginButtonText}>Get password</Text>
          </LinearGradient>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
        }}
      >
        <View style={[styles.blockCentering]}>
          <Text style={[styles.forgotPasswordText]}>Go back to login</Text>
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
  recoveryText: {
    marginTop: 35,
    fontSize: 26,
    fontFamily: 'SFUIDisplay-Medium',
  },
  authorizationPlace: {
    marginTop: 135,
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

export default ForgotPasswordScreen;
