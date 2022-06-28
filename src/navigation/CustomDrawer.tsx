// Lib
import React, { useContext } from 'react';
import AppLoading from 'expo-app-loading';
import Entypo from 'react-native-vector-icons/Entypo';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';

//Components
import { auth } from '../auth/firebase-config';
import { ThemesContext } from '../context/ThemeContext';

//UI
import { colors } from '../constants/theme';

const CustomDrawer = (props) => {
  const { userName, userLastName, email, avatar } = useSelector((state) => ({
    userName: state?.User?.userName,
    userLastName: state?.User?.userLastName,
    email: state?.User?.email,
    avatar: state?.User?.avatar,
  }));

  const { fontsLoaded } = useContext(ThemesContext);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: colors.white }}>
        <View>
          <Image source={avatar} style={[styles.avatarLogo]} />
          <Text style={[styles.userName]}>
            {userName} {userLastName}
          </Text>
          <Text style={[styles.userMail]}>mail: {email}</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={[styles.grayUnderline]}></View>
      <TouchableOpacity
        onPress={() => {
          auth
            .signOut()
            .then(() => {
              props.navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
              });
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        <View style={[styles.logOutButton]}>
          <Entypo name="log-out" size={20} color={colors.black} />
          <Text style={[styles.logOutText]}>Log out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  grayUnderline: {
    width: '100%',
    height: 1,
    backgroundColor: colors.gray2,
    marginBottom: 20,
  },
  avatarLogo: {
    width: 80,
    height: 80,
    marginLeft: 10,
  },
  userName: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 16,
    color: colors.black,
    marginLeft: 10,
    marginTop: 10,
  },
  userMail: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 16,
    color: colors.black,
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 20,
  },
  logOutButton: {
    paddingBottom: 60,
    paddingLeft: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  logOutText: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 16,
    color: colors.black,
    marginLeft: 15,
  },
});

export default CustomDrawer;
