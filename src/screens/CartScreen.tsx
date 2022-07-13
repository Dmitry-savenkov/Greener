// Lib
import React, { useState, useContext, useCallback } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
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
import MapIcon from '../components/icons/MapIcon';
import FeatherIcon from '../components/icons/FeatherIcon';

const CartScreen = ({ navigation }) => {
  const { items } = useSelector((state: any) => ({
    items: state?.Cart?.items,
  }));

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
      <View style={{ paddingHorizontal: width * 0.08 }}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>Shipping Address</Text>
        </View>
        <View
          style={{
            marginTop: 20,
            borderRadius: 20,
            width: '100%',
            height: 80,
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              marginLeft: 10,
              width: 45,
              height: 45,
              backgroundColor: 'rgb(240,250,245)',
              borderRadius: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: 'rgb(94,202,133)',
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <MapIcon />
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 4 }}>Home</Text>
            <Text style={{ fontSize: 12, fontWeight: '400' }}>61480 Sunbrook Park, PC 5679</Text>
          </View>
          <TouchableOpacity>
            <View style={{ paddingRight: 20, paddingTop: 2 }}>
              <FeatherIcon name="edit-3" size={22} color="rgb(94,202,133)" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
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
