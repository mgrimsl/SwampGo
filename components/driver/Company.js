import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, ScrollView, Text} from 'react-native';

const DriverApps = (props) => {
  return (
    <ScrollView>
      <Text style={styles.text}>{props.company.companyName}</Text>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  text :{
    fontSize:20
  },
  
})


export default DriverApps;