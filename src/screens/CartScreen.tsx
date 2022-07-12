// Lib
import React, { useState, useContext, useCallback } from 'react';
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
import { useDispatch } from 'react-redux';

// Components
import BackIcon from '../components/icons/BackIcon';
import CartItem from '../components/CartItem';

// Actions
import { deleteItemFromCard } from '../redux/actions/user';

// UI
import { width, height, colors } from '../constants/theme';
import { ThemesContext } from '../context/ThemeContext';

const CartScreen = ({ navigation }) => {
  const { items } = useSelector((state: any) => ({
    items: state?.Cart?.items,
  }));
  const dispatch = useDispatch();

  console.log(items?.length, 'length');

  const onDismiss = useCallback((item) => {
    console.log(item.title);
    dispatch(deleteItemFromCard(item));
  }, []);

  const { fontsLoaded } = useContext(ThemesContext);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView style={[styles.container]}>
      {items &&
        items.map((item) => (
          <CartItem key={item.title + Math.random()} onDismiss={onDismiss} item={item} />
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: height * 0.07,
  },
});

export default CartScreen;
