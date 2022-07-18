// Lib
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Components
import HomeScreen from '../screens/HomeScreen';
import PlantsCategoryItemScreen from '../screens/PlantsCategoryItemScreen';

const HomeTabNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="HomeRoot" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeRoot" component={HomeScreen} />
      <Stack.Screen name="PlantsCategoryItem" component={PlantsCategoryItemScreen} />
    </Stack.Navigator>
  );
};

export default HomeTabNavigation;
