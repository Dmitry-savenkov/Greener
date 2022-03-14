import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useContext } from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { colors } from '../constants/theme';
import SettingsScreenData from '../data/SettingsScreenData';
import { ThemesContext } from '../context/ThemeContext';
import AppLoading from 'expo-app-loading';
import Entypo from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { auth } from '../auth/firebase-config';

const user = auth.currentUser;

const CustomDrawer = (props) => {
    const { fontsLoaded } = useContext(ThemesContext);
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: colors.white }}>
                <View>
                    <Image source={SettingsScreenData.avatar} style={[styles.avatarLogo]} />
                    <Text style={[styles.userName]}>
                        {SettingsScreenData.username} {SettingsScreenData.userLastName}
                    </Text>
                    <Text style={[styles.userMail]}>mail: {SettingsScreenData.email}</Text>
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View style={[styles.grayUnderline]}></View>
            <TouchableOpacity
                onPress={() => {
                    auth.signOut()
                        .then(() => {
                            props.navigation.reset({
                                index: 0,
                                routes: [{ name: 'Home' }]
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
        marginBottom: 20
    },
    avatarLogo: {
        width: 80,
        height: 80,
        marginLeft: 10
    },
    userName: {
        fontFamily: 'SFUIDisplay-Regular',
        fontSize: 16,
        color: colors.black,
        marginLeft: 10,
        marginTop: 10
    },
    userMail: {
        fontFamily: 'SFUIDisplay-Regular',
        fontSize: 16,
        color: colors.black,
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 20
    },
    logOutButton: {
        paddingBottom: 60,
        paddingLeft: 20,
        alignItems: 'center',
        flexDirection: 'row'
    },
    logOutText: {
        fontFamily: 'SFUIDisplay-Regular',
        fontSize: 16,
        color: colors.black,
        marginLeft: 15
    }
});

export default CustomDrawer;
