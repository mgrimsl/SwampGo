import 'react-native-gesture-handler';
import * as React from 'react';

import Company from '../Company'

import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, Text} from 'react-native';

class DriverApps extends React.Component{

  constructor(props) {
    super(props);
 
    this.state = {
      companies : [],
      userObj : this.props.route.params
    };
  }
  componentDidMount = () =>{
  fetch('http://54.162.110.32/swampApi/companies/', 
  {
    method:'GET',
    headers: {"Content-Type": "application/json"},
  })
  .then(response => response.json())
  .then(json => JSON.parse(json))
  .then(result =>this.setState({companies:result}));
  }

  render =() => {
    
    return (
      <View>
        <View>
          <Text>Submit An Application</Text>
        </View>
        <View>
          {this.state.companies.map((company)=>{
          if(this.state.userObj.cid !== company.cid){
            return <Company company={company}/>
          }
          })}
        </View>
      </View>

    );
  }
};


export default DriverApps;