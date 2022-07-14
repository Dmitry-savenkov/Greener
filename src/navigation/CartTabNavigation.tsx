// Lib
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Components
import CartScreen from '../screens/CartScreen';
import PlantsCategoryItemScreen from '../screens/PlantsCategoryItemScreen';

const CartTabNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Cart" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="PlantsCategoryItem" component={PlantsCategoryItemScreen} />
    </Stack.Navigator>
  );
};

export default CartTabNavigation;
