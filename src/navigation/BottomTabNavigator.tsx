// Lib
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
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
        tabBarStyle: { backgroundColor: '#5AD192' },
        tabBarInactiveTintColor: 'rgba(255,255,255,0.5)',
        tabBarActiveTintColor: 'white',
      }}
    >
      <Tab.Screen
        name="Home"
        component={BrowseScreen}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="home" size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="heart" size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={BestPlantsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="flower" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="shopping-basket" size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="user" size={20} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
