import { StyleSheet, Text, View, FlatList, Button, Image, SafeAreaView } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const HomeScreen = () => {
    let [fontsLoaded] = useFonts({
        'Inter-Black': require('./../assets/fonts/FontsFree-Net-sf-ui-text-regular-58646b56a688c.ttf')
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View>
                    <Text style={[styles.titleText, { fontSize: 40 }]}>
                        Your home.
                        <Text>Greener.</Text>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        paddingTop: 30
    },
    titleText: {
        fontSize: 26,
        fontFamily: 'Inter-Black'
    }
});
