// In App.js in a new project

import * as React from 'react';
import {Component} from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableHighlight, Image } from 'react-native';
import Login from './src/login/Login';
import Home from './src/home/Home';
import Ubs from './src/ubs/Ubs';
import NewUbs from './src/ubs/NewUbs';
import DadosPessoais from './src/farmaceutico/dadosPessoais';
import RecuperarSenha from './src/login/RecuperarSenha';
import AvaliarFarmacia from './src/avaliacaoFarmacia/avaliacaoFarmacia';
import ListagemRegistroFotografico from './src/registroFotografico/Listagem';
import Imagens from './src/registroFotografico/Imagens';



import Teste from './src/teste';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 

import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';

firebase.firestore();

const Stack = createStackNavigator();

class App extends Component{
render(){
      return(
          <NavigationContainer>
              <Stack.Navigator initialRouteName="Login">
                  <Stack.Screen name="Login" component={Login} options={{ headerShown: false}}/>
                  <Stack.Screen name="Home" component={Home} options={{ headerShown: false}}/>
                  <Stack.Screen name="teste" component={Teste} options={{ headerShown: true}}/>
                  <Stack.Screen name="listagemUBS" component={Ubs} options={{headerShown: false}}/>
                  <Stack.Screen name="newUbs" component={NewUbs} options={{headerShown: false}}/>
                  <Stack.Screen name="dadosPessoais" component={DadosPessoais} options={{headerShown: false}}/>
                  <Stack.Screen name="recuperarSenha" component={RecuperarSenha} options={{headerShown: false}}/>
                  <Stack.Screen name="avaliacaoFarmacia" component={AvaliarFarmacia} options={{headerShown: false}}/>
                  <Stack.Screen name="listagemRegistroFotografico" component={ListagemRegistroFotografico} options={{headerShown: false}}/>
                  <Stack.Screen name="imagens" component={Imagens} options={{headerShown: false}}/>
              </Stack.Navigator>
            </NavigationContainer>
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