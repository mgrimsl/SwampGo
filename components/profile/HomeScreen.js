import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text} from 'react-native';

const HomeScreen = ({ navigation, route }) => {



  return (
    <View>
        <Text>You Logged In as {route.params.name}</Text>
    </View>
  );
};

export default HomeScreen
;