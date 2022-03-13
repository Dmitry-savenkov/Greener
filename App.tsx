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

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Browse"
                component={BrowseScreen}
                options={{
                    headerShown: false
                }}
            />
            <Drawer.Screen
                name="Explore"
                component={ExploreScreen}
                options={{
                    headerShown: false
                }}
            />
            <Drawer.Screen
                name="Best"
                component={BestPlantsScreen}
                options={{
                    headerShown: false
                }}
            />
            <Drawer.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    headerShown: false
                }}
            />
        </Drawer.Navigator>
    );
};

export default function App() {
    return (
        <ThemesContextProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="ForgotPassword"
                        component={ForgotPasswordScreen}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Browse"
                        component={BrowseScreen}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Explore"
                        component={ExploreScreen}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="BestPlants"
                        component={BestPlantsScreen}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Settings"
                        component={SettingsScreen}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="SignUp"
                        component={SignUpScreen}
                        options={{
                            headerShown: false
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemesContextProvider>
    );
}
