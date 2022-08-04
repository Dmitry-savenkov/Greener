// Lib
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Components
import CartScreen from '../screens/CartScreen';
import PlantsCategoryItemScreen from '../screens/PlantsCategoryItemScreen';

const CartTabNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="CartRoot" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CartRoot" component={CartScreen} />
      <Stack.Screen name="PlantsCategoryItem" component={PlantsCategoryItemScreen} />
    </Stack.Navigator>
  );
};

export default CartTabNavigation;
