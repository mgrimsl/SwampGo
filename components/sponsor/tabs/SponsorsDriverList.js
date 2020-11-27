import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Button} from 'react-native';

const SponsorsDriverList = ({navigation, route}) => {

  console.log(route.params)


  return (
    <View>
        <Text>List of my Drivers</Text>
        <Button title="apps" onPress={()=>navigation.navigate("Applications")}></Button>
    </View>
  );
};

export default SponsorsDriverList
;