import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import BrowseScreen from './src/screens/BrowseScreen';
import ExploreScreen from './src/screens/ExploreScreen';
import BestPlantsScreen from './src/screens/BestPlantsScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
