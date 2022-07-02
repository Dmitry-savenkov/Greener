// Lib
import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useSelector } from 'react-redux';

// Components
import BackIcon from '../components/icons/BackIcon';

// UI
import { width, height, colors } from '../constants/theme';
import { ThemesContext } from '../context/ThemeContext';

const PlantsCategoryItemScreen = ({ navigation, route }) => {
  const { item } = route.params;

  const { fontsLoaded } = useContext(ThemesContext);

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: height * 0.07,
  },
});

export default PlantsCategoryItemScreen;
