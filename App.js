// In App.js in a new project

import * as React from 'react';
import {Component} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Login from './src/login/Login';


class App extends Component{
  render(){
      return(
          <View style={[styles.container]}>
              <Login/>
          </View>
      );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
  },
});
export default App;