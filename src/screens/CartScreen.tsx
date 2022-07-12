// Lib
import React, { useState, useContext, useCallback } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
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
  console.log(items.length);

  const dispatch = useDispatch();

  const onDismiss = useCallback((item) => {
    dispatch(deleteItemFromCard(item));
  }, []);

  const { fontsLoaded } = useContext(ThemesContext);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView style={[styles.container]}>
      {items.map(({ plant, activeImageObject }) => (
        <CartItem
          key={plant.title + Math.random()}
          onDismiss={onDismiss}
          plant={plant}
          activeImageObject={activeImageObject}
        />
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
