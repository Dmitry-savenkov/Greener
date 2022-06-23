// Lib
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Components
import CustomDrawer from './CustomDrawer';
import BrowseScreen from '../screens/BrowseScreen';
import ExploreScreen from '../screens/ExploreScreen';
import BestPlantsScreen from '../screens/BestPlantsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: { marginLeft: -15 },
        drawerActiveBackgroundColor: 'rgba(91,224,177, 0.7)',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: '#323643',
      }}
    >
      <Drawer.Screen
        name="Browse"
        component={BrowseScreen}
        options={{
          drawerIcon: ({ color }) => <Entypo name="air" size={20} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          drawerIcon: ({ color }) => <Entypo name="baidu" size={20} color={color} />,
        }}
      />
      <Drawer.Screen
        name="BestPlants"
        component={BestPlantsScreen}
        options={{
          drawerIcon: ({ color }) => <Entypo name="flower" size={20} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: ({ color }) => <Entypo name="tools" size={20} color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
