// Lib
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Components
import BrowseScreen from '../screens/BrowseScreen';
import ExploreScreen from '../screens/ExploreScreen';
import BestPlantsScreen from '../screens/BestPlantsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Browse"
        component={BrowseScreen}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="air" size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="baidu" size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="BestPlants"
        component={BestPlantsScreen}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="flower" size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="tools" size={20} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
