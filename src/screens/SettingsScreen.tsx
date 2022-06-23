// Lib
import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Switch,
  Slider,
} from 'react-native';
import AppLoading from 'expo-app-loading';
import BackIcon from '../components/BackIcon';

// Components
import DotsIcon from '../components/DotsIcon';

// UI
import { width, height, colors } from '../constants/theme';
import { ThemesContext } from '../context/ThemeContext';

// Data
import SettingsScreenData from '../data/SettingsScreenData';

const SettingsScreen = ({ navigation }) => {
  const [isEnabledNotification, setIsEnabledNotification] = useState(false);
  const [isEnabledNewsLetter, setIsEnabledNewsLetter] = useState(false);
  const [userName, setUserNamee] = useState(SettingsScreenData.username);
  const [budget, setBudget] = useState(0);
  const [montclyCap, setMontlyCap] = useState(0);
  const [userNameStatus, setUserNameStatus] = useState(false);
  const [location, setLocation] = useState(SettingsScreenData.location);
  const [locationStatus, setLocationStatus] = useState(false);
  const { fontsLoaded } = useContext(ThemesContext);

  const toggleSwitch =
    (fn: {
      (value: React.SetStateAction<boolean>): void;
      (value: React.SetStateAction<boolean>): void;
      (arg0: (previousState: any) => boolean): any;
    }) =>
    () =>
      fn((previousState) => !previousState);

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
            <Text style={[styles.inputTextStyle, { marginBottom: 10 }]}>
              {SettingsScreenData.email}
            </Text>
          </View>
        </View>
        <View style={[styles.grayLine]}></View>
        <Text style={[styles.userName]}>Budget</Text>
        <Slider
          minimumValue={0}
          maximumValue={999}
          minimumTrackTintColor="rgba(10, 196, 186, 1)"
          onValueChange={(value) => {
            setBudget(parseInt(value.toLocaleString(), 10));
          }}
        />
        <View style={[styles.sliderBlock]}>
          <Text style={[styles.styleSliderText]}>${budget}</Text>
        </View>
        <Text style={[styles.userName, { marginTop: 15 }]}>Monthly Cap</Text>
        <Slider
          minimumValue={0}
          maximumValue={999}
          minimumTrackTintColor="rgba(10, 196, 186, 1)"
          onValueChange={(value) => {
            setMontlyCap(parseInt(value.toLocaleString(), 10));
          }}
        />
        <View style={[styles.sliderBlock]}>
          <Text style={[styles.styleSliderText]}>${montclyCap}</Text>
        </View>
      </View>
      <View style={[styles.grayLine]}></View>
      <View>
        <View style={[styles.switchBlock]}>
          <Text style={[styles.userName]}>Notifications</Text>
          <Switch
            thumbColor={colors.white}
            trackColor={{ false: colors.gray2, true: colors.primary }}
            onValueChange={toggleSwitch(setIsEnabledNotification)}
            value={isEnabledNotification}
          />
        </View>
        <View style={[styles.switchBlock]}>
          <Text style={[styles.userName]}>Newsletter</Text>
          <Switch
            thumbColor={colors.white}
            trackColor={{ false: colors.gray2, true: colors.primary }}
            onValueChange={toggleSwitch(setIsEnabledNewsLetter)}
            value={isEnabledNewsLetter}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: width * 0.085,
    paddingTop: height * 0.067,
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'SFUIDisplay-Medium',
    fontSize: 28,
    color: 'rgba(50, 54, 67, 1)',
  },
  titlePhoto: {
    marginTop: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarImage: {
    width: 43,
    height: 43,
    borderRadius: 36,
  },
  settings: {
    marginTop: 30,
    marginBottom: 30,
  },
  userName: {
    fontFamily: 'SFUIDisplay-Regular',
    color: colors.gray,
    fontSize: 16,
    marginBottom: 14,
  },
  editTextStyle: {
    color: colors.primary,
    fontSize: 18,
  },
  textInputEdit: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputTextStyle: {
    fontSize: 15,
    color: colors.black,
  },
  userInput: {
    marginBottom: 20,
  },
  grayLine: {
    width: '100%',
    height: 1,
    backgroundColor: colors.gray2,
    marginBottom: 20,
  },
  switchBlock: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sliderBlock: {},
  styleSliderText: {
    color: colors.gray,
  },
});

export default SettingsScreen;
