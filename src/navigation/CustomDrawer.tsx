import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useContext } from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { colors } from '../constants/theme';
import SettingsScreenData from '../data/SettingsScreenData';
import { ThemesContext } from '../context/ThemeContext';
import AppLoading from 'expo-app-loading';

const CustomDrawer = (props) => {
    const { fontsLoaded } = useContext(ThemesContext);
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: colors.white }}>
                <View>
                    <Image source={SettingsScreenData.avatar} />
                    <Text>{SettingsScreenData.username}</Text>
                    <Text>{SettingsScreenData.email}</Text>
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View>
                <Text>Log out</Text>
            </View>
        </View>
    );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
