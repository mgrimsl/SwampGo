import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Button, TextInput} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [value, onChangeText] = React.useState('Useless Placeholder');

  const handleLogin = () => {
    navigation.navigate("Home", {name : value})
  }

  return (
    <View>
        <TextInput onChangeText={text => onChangeText(text)} value={value}></TextInput>
        
        <Button title={'Log In'} onPress={handleLogin}></Button>
    </View>
  );
};

export default LoginScreen
;