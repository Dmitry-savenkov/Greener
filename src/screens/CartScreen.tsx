// Lib
import React, { useContext } from 'react';
import { StyleSheet, ScrollView, View, StatusBar, SafeAreaView } from 'react-native';
import AppLoading from 'expo-app-loading';

// Components
import ShippingAddress from '../components/cart/ShippingAddress';
import OrderList from '../components/cart/OrderList';
import ChoouseShipping from '../components/cart/ChooseShipping';

// UI
import { width, colors } from '../constants/theme';
import { ThemesContext } from '../context/ThemeContext';

const CartScreen = ({ navigation }) => {
  const { fontsLoaded } = useContext(ThemesContext);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView style={[styles.container]}>
      <SafeAreaView>
        <View style={[styles.payloadWrapper]}>
          <ShippingAddress />
          <OrderList navigation={navigation} />
          <ChoouseShipping />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: StatusBar.currentHeight,
  },
  payloadWrapper: {
    paddingHorizontal: width * 0.08,
    marginTop: 20,
  },
});

export default CartScreen;
