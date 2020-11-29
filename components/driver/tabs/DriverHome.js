import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text} from 'react-native';

const DriverHome = ({ navigation, route }) => {
  let userObj = route.params

  return (
    <View>
      <View>
        <Text>{userObj.fname} {userObj.lname}</Text>
      </View>
      <View>
        <Text>{userObj.email}</Text>
      </View>
      <View>
        <Text>Points: {userObj.points}</Text>
      </View>
    </View>
  );
};

export default DriverHome
;