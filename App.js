import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '/root/SwampGo/components/loginScreen/LoginScreen.js';
import DriverHomeScreen from './components/driver/DriverHomeScreen.js'
import AdminHomeScreen from './components/admin/AdminHomeScreen.js'
import SponsorHomeScreen from './components/sponsor/SponsorHomeScreen.js'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Log In' }}
        />
        <Stack.Screen name="Driver Home" component={DriverHomeScreen} />
        <Stack.Screen name="Sponsor Home" component={SponsorHomeScreen} />
        <Stack.Screen name="Admin Home" component={AdminHomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
