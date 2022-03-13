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

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />} screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Browse" component={BrowseScreen} />
            <Drawer.Screen name="Explore" component={ExploreScreen} />
            <Drawer.Screen name="BestPlants" component={BestPlantsScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
    );
};

export default function App() {
    return (
        <ThemesContextProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="DrawerNavigator" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                    <Stack.Screen name="SignUp" component={SignUpScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemesContextProvider>
    );
}
