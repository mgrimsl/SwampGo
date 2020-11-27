import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

import DriversList from './tabs/DriversList.js'
import AdminHome from './tabs/AdminHome.js'
import SponsorsList from './tabs/SponsorsList.js'



const Tab = createBottomTabNavigator();


const AdminHomeScreen = ({ navigation, route }) => {

  return (
     <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Sponsors') {
            iconName = 'store';
          }else if (route.name === 'Drivers') {
            iconName = 'car';
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
        <Tab.Screen name="Home" children={()=><AdminHome route={route} navigation={navigation}/>} />
       <Tab.Screen name="Sponsors" children={()=><SponsorsList route={route} navigation={navigation}/>} />
       <Tab.Screen name="Drivers" children={()=><DriversList route={route} navigation={navigation}/>} />

      </Tab.Navigator>
  );
};

export default AdminHomeScreen
;