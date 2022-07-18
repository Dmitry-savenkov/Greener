// Lib
import React, { useContext } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import AppLoading from 'expo-app-loading';

// Components
import ShippingAddress from '../components/cart/ShippingAddress';
import OrderList from '../components/cart/OrderList';

// UI
import { width, height } from '../constants/theme';
import { ThemesContext } from '../context/ThemeContext';
import ChoouseShipping from '../components/cart/ChoouseShipping';

const CartScreen = ({ navigation }) => {
  const { fontsLoaded } = useContext(ThemesContext);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView style={[styles.container]}>
      <View style={[styles.payloadWrapper]}>
        <ShippingAddress />
        <OrderList navigation={navigation} />
        <ChoouseShipping />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: height * 0.07,
  },
  payloadWrapper: {
    paddingHorizontal: width * 0.08,
    marginTop: 20,
  },
});

export default CartScreen;
