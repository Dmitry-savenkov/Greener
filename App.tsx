// Lib
import React from 'react';
import { Provider } from 'react-redux';
import store, { persist } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Components
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import ThemesContextProvider from './src/context/ThemeContext';
import DrawerNavigator from './src/navigation/DrawerNavigator';

const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persist}>
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
            </PersistGate>
        </Provider>
    );
}
