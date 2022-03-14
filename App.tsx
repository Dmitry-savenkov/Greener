import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import BrowseScreen from './src/screens/BrowseScreen';
import ExploreScreen from './src/screens/ExploreScreen';
import BestPlantsScreen from './src/screens/BestPlantsScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import ThemesContextProvider from './src/context/ThemeContext';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './src/navigation/CustomDrawer';
import Entypo from 'react-native-vector-icons/Entypo';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerLabelStyle: { marginLeft: -15 },
                drawerActiveBackgroundColor: 'rgba(91,224,177, 0.7)',
                drawerActiveTintColor: 'white',
                drawerInactiveTintColor: '#323643'
            }}
        >
            <Drawer.Screen
                name="Browse"
                component={BrowseScreen}
                options={{
                    drawerIcon: ({ color }) => <Entypo name="air" size={20} color={color} />
                }}
            />
            <Drawer.Screen
                name="Explore"
                component={ExploreScreen}
                options={{
                    drawerIcon: ({ color }) => <Entypo name="baidu" size={20} color={color} />
                }}
            />
            <Drawer.Screen
                name="BestPlants"
                component={BestPlantsScreen}
                options={{
                    drawerIcon: ({ color }) => <Entypo name="flower" size={20} color={color} />
                }}
            />
            <Drawer.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    drawerIcon: ({ color }) => <Entypo name="tools" size={20} color={color} />
                }}
            />
        </Drawer.Navigator>
    );
};

export default function App() {
    return (
        <ThemesContextProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="SignUp" component={SignUpScreen} />
                    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemesContextProvider>
    );
}
