import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useContext } from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { colors } from '../constants/theme';
import SettingsScreenData from '../data/SettingsScreenData';
import { ThemesContext } from '../context/ThemeContext';
import AppLoading from 'expo-app-loading';
import Entypo from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomDrawer = (props) => {
    const { fontsLoaded } = useContext(ThemesContext);
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: colors.white }}>
                <View>
                    <Image source={SettingsScreenData.avatar} style={{ width: 80, height: 80, marginLeft: 10 }} />
                    <Text
                        style={{
                            fontFamily: 'SFUIDisplay-Regular',
                            fontSize: 16,
                            color: colors.black,
                            marginLeft: 10,
                            marginTop: 10
                        }}
                    >
                        {SettingsScreenData.username} {SettingsScreenData.userLastName}
                    </Text>
                    <Text
                        style={{
                            fontFamily: 'SFUIDisplay-Regular',
                            fontSize: 16,
                            color: colors.black,
                            marginLeft: 10,
                            marginTop: 5,
                            marginBottom: 20
                        }}
                    >
                        mail: {SettingsScreenData.email}
                    </Text>
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <TouchableOpacity>
                <View style={{ paddingBottom: 60, paddingLeft: 20, alignItems: 'center', flexDirection: 'row' }}>
                    <Entypo name="log-out" size={20} color={colors.black} />
                    <Text
                        style={{ fontFamily: 'SFUIDisplay-Regular', fontSize: 16, color: colors.black, marginLeft: 15 }}
                    >
                        Log out
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
