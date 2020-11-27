import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';  

import Home from './tabs/DriverHome'
import Catalog from './tabs/DriverCatalog'
import Applications from './tabs/DriverApps'
import Cart from './tabs/DriverCart'
import History from './tabs/DriverHistory'

import { View, Text} from 'react-native';




const Tab = createBottomTabNavigator();

const DriverHomeScreen = ({ navigation, route }) => {




  return (
     <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Catalog') {
            iconName = 'store';
          }else if (route.name === 'Drivers') {
            iconName = 'car';
          }else if (route.name === 'Applications') {
            iconName = 'clipboard';
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />
          }else if (route.name === 'Cart') {
            iconName = 'shopping-cart';
          }else if (route.name === 'History') {
            iconName = 'history';
          }

          // You can return any component that you like here!
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
     >
        <Tab.Screen name="Home" children={()=><Home route={route} navigation={navigation}/>} />
        <Tab.Screen name="Catalog" children={()=><Catalog route={route} navigation={navigation}/>} />
        <Tab.Screen name="Applications" children={()=><Applications route={route} navigation={navigation}/>} />
        <Tab.Screen name="Cart" children={()=><History route={route} navigation={navigation}/>} />
        <Tab.Screen name="History" children={()=><History route={route} navigation={navigation}/>} />

      </Tab.Navigator>
  );
};

export default DriverHomeScreen
;