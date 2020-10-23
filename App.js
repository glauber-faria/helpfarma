// In App.js in a new project

import * as React from 'react';
import {Component} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Login from './src/login/Login';

import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';

firebase.firestore();

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