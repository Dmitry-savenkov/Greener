// Lib
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Components
import HomeScreen from '../screens/HomeScreen';
import PlantsCategoryItemScreen from '../screens/PlantsCategoryItemScreen';

const HomeTabNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PlantsCategoryItem" component={PlantsCategoryItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeTabNavigation;
