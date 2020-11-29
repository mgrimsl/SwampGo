import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {KeyboardAvoidingView, StyleSheet, View, Text, Button, TextInput, Switch} from 'react-native';

let base64 = require('base-64');

const RegistrationScreen = ({navigation}) => {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [passwordConf, onChangePasswordConf] = React.useState('');
  const [firstName, onChangeFname] = React.useState('');
  const [lastName, onChangeLname] = React.useState('');
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [cid, onChangeCid] = React.useState('');

    const toggleSwitch = () => {
        onChangeCid("")
        return setIsEnabled(previousState => !previousState
    )};

  
  const handleRegistration = () => {
    
    if(!cid && isEnabled){
        return alert("Please Enter CompanyID")
    }
    if(password !== passwordConf){
        alert("Password does not match")
        return
    }

    let userObj = {
      fname : firstName,
      lname : lastName,
      email : email,
      cid : cid,
      sid : "",
      type : isEnabled ? 2 : 1,
      points : 0,
      password : password,   
    }

    console.log(userObj)
    
    //API Call to Log In
    fetch('http://54.162.110.32/swampApi/user/', 
      {
        method:'POST',
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify(userObj)
      })
    .then(response => response.json())
    .then(json => JSON.parse(json))
    .then(result => {
      if(result.success){
        navigation.navigate("Login")
      }else{
        alert(result.err)
      }});
    //Use User Obj returned by API Call to navigate to correct Page

    
  }

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={styles.screen}
  >
        
        
      <View style={styles.form}>
        <View style={styles.switchCont}>
          <Text style={styles.switchLabel}>Driver </Text>
          <Switch  onValueChange={toggleSwitch}  value={isEnabled}/>
          <Text style={styles.switchLabel}> Sponsor</Text>
        </View>
        <View style={styles.emailCont}>
          <Text style={styles.label}>Email:</Text>
          <TextInput style={styles.input} onChangeText={text => onChangeEmail(text)} value={email}></TextInput>
        </View>
        <View style={styles.emailCont}>
          <Text style={styles.label}>First Name:</Text>
          <TextInput style={styles.input} onChangeText={text => onChangeFname(text)} value={firstName}></TextInput>
        </View>
        <View style={styles.emailCont}>
          <Text style={styles.label}>Last Name:</Text>
          <TextInput style={styles.input} onChangeText={text => onChangeLname(text)} value={lastName}></TextInput>
        </View>
        <View style={styles.passCont}>
          <Text style={styles.label}>Password:</Text>
          <TextInput style={styles.input} onChangeText={text => onChangePassword(text)} value={password}></TextInput>
        </View>
        <View style={styles.passCont}>
          <Text style={styles.label}>Confirm Password:</Text>
          <TextInput style={styles.input} onChangeText={text => onChangePasswordConf(text)} value={passwordConf}></TextInput>
        </View>
        { isEnabled ?
        <View style={styles.passCont}>
          <Text style={styles.label}>CompanyID:</Text>
          <TextInput style={styles.input} onChangeText={text => onChangeCid(text)} value={cid}></TextInput>
        </View> : 
        <Text></Text>
        } 
          <Button title={'Register'} onPress={handleRegistration}></Button>
        </View>
        </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen :{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  switchCont :{
    flexDirection : 'row',
    alignItems : 'center'
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


export default RegistrationScreen
;