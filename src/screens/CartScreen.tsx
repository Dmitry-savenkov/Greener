// Lib
import React, { useState, useMemo, useContext } from 'react';
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
import DotsIcon from '../components/icons/DotsIcon';

// UI
import { width, height, colors } from '../constants/theme';
import { ThemesContext } from '../context/ThemeContext';

const CartScreen = ({ navigation }) => {
  const { items } = useSelector((state: any) => ({
    items: state?.Cart?.items,
  }));

  const { fontsLoaded } = useContext(ThemesContext);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ScrollView style={[styles.container]}>
      <View>
        {items.map((item, index) => {
          return (
            <View key={item.title + index} style={{ width: '100%', height: 150 }}>
              <Text style={{ color: 'black' }}>{item.label}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: height * 0.07,
  },
});

export default CartScreen;
