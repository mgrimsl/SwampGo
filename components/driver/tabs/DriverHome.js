import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text} from 'react-native';

const DriverHome = ({ navigation, route }) => {


  fetch("http://54.162.93.0/swampApi/", {
    method : 'GET'
  })
  .then(res => res.json())
  .then(data => {console.log(data)})
  .catch(err => console.error(err))
  return (
    <View>
        <Text>Home</Text>
    </View>
  );
};

export default DriverHome
;