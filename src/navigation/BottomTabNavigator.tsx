// Lib
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Components
import FavoritesScreen from '../screens/FavoritesScreen';
import ExploreScreen from '../screens/ExploreScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeTabNavigation from './HomeTabNavigation';
import CartTabNavigation from './CartTabNavigation';

//Hooks
import useCardItemsLength from '../hooks/useCardItemsLength';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: 'white' },
        tabBarInactiveTintColor: '#999999',
        tabBarActiveTintColor: '#5AD192',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeTabNavigation}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="home" size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="heart" size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="flower" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartTabNavigation}
        options={{
          tabBarBadge: useCardItemsLength(),
          tabBarBadgeStyle: {
            marginLeft: 1,
            minWidth: 14,
            maxHeight: 14,
            borderRadius: 7,
            fontSize: 10,
            lineHeight: 13,
            alignSelf: undefined,
          },
          tabBarIcon: ({ color }) => <Entypo name="shopping-basket" size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="user" size={20} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
