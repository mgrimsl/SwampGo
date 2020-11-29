import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';
import RegistrationScreen from './RegistrationScreen';

let base64 = require('base-64');

const LoginScreen = ({navigation}) => {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const handleRegistraion = () => {
    navigation.navigate("Registration")
  }

  const handleLogin = () => {

    let userObj = {
      email : email,
      password : password,
    }
    // //API Call to Log In
    fetch('http://54.162.110.32/swampApi/login/', 
      {
        method:'POST',
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify(userObj)
      })
    .then(response => response.json())
    .then(json => JSON.parse(json))
    .then(result => {
      if(result.success){
        userObj = result.userObj
        if (userObj.type === 1){
          //navigate to driver page 
          navigation.navigate("Driver Home", userObj)
        }else if (userObj.type === 2){
          //navigate to sponsor page
          navigation.navigate("Sponsor Home", userObj)
        }else if (userObj.type === 3){
          //navigate to admin page
          navigation.navigate("Admin Home", userObj)
        }else{
          //dont nav and throw error
          alert("Something Went Wrong")
        }
      }else{
        alert("incorrect username or password")
        return;
      }
    })
    
    //Use User Obj returned by API Call to navigate to correct Page
    
    let DriverObj = { //Test User Obj 
      email : "jaylin123@rocketmail.com",
      fname : "Jaylin",
      lname : "thompson",
      type : "1",
      uid : "123456",
      cid : "2"
    }

    let SponsObj = { //Test User Obj 
      email : "xmikegrim@gmail.com",
      fname : "Mike",
      lname : "Grimsley",
      type : "2",
      uid : "0000",
      cid : "2"
    }

    let AdminObj = { //Test User Obj 
      email : "someBodyOnceToldMe@swamp.ogre",
      fname : "Shrek",
      lname : "Strickland",
      type : "3",
      uid : "1029384756",
      cid : undefined,
    }

    // if (email.toLocaleLowerCase() === "driver"){
    //   userObj = DriverObj
    // }else if (email.toLocaleLowerCase() === "sponsor"){
    //   userObj = SponsObj
    // }else if (email.toLocaleLowerCase() === "admin"){
    //   userObj = AdminObj
    // }else {
    //   alert("incorrect username or password")
    //   return;
    // }



    
  }

  return (
    <View style={styles.screen}>
      <View style={styles.form}>
        <View style={styles.emailCont}>
          <Text style={styles.label}>Email:</Text>
          <TextInput style={styles.input} onChangeText={text => onChangeEmail(text)} value={email}></TextInput>
        </View>
        <View style={styles.passCont}>
          <Text style={styles.label}>Password:</Text>
          <TextInput style={styles.input} onChangeText={text => onChangePassword(text)} value={password}></TextInput>
        </View>
          <Button title={'Log In'} onPress={handleLogin}></Button>
          <Button title={'Register'} onPress={handleRegistraion}></Button>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen :{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  form :{
    alignItems : "center"
  },
  emailCont : {
    flexDirection : "row",

    backgroundColor: "#284B63",
    width:300,
    paddingTop:10,
    paddingBottom:20,
    paddingLeft:20,
    paddingRight:20, 
    borderRadius:10,
    marginTop: 1
  },
  passCont : {
    flexDirection : "row",

    backgroundColor: "#284B63",
    width:300,
    paddingTop:10,
    paddingBottom:20,
    paddingLeft:20,
    paddingRight:20, 
    borderRadius:10,
    marginTop: 1
  },
  label: {
    fontSize : 20,
    color : "white"
  },
  input : {
    flex : 1,
  }
})


export default LoginScreen
;