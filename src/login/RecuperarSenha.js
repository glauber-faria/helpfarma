import * as React from 'react';
import { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Image, AppRegistry, TouchableOpacity, Alert, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const header = (navigation) =>{
    return(
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                    name="angle-left" size={40} color="white"
                />
            </TouchableOpacity>
        </View>
        
    );
}
const enviar = (navigation) =>{
    const alerta = () => {
        Alert.alert(
            "Atenção",
            "Uma nova senha foi enviado para o email cadastrado", 
            [
                {
                    text: 'ok',
                    onPress: () => navigation.goBack()
                }
            ]
            );
    }
    return(
    <TouchableOpacity style={styles.btn1} onPress={alerta}>
        <Text style={{color:'white'}}>Enviar</Text>
    </TouchableOpacity>
    );
}

const app = ({navigation}) =>{
    return(
        <ScrollView style={{backgroundColor:'#1579B2', flex:1}}>
            <View style={styles.container0}>
                {header(navigation)}
                <Text style={styles.text2}>Recuperação de Senha</Text>
                <Text style={styles.text1}>Digite seu Email cadastradado</Text>
                <TextInput placeholder="Email" style={styles.input}></TextInput>
                {enviar(navigation)}
            </View>
           
        </ScrollView>
        
    );
}
const styles = StyleSheet.create({
    container0:{
      marginHorizontal:25,
      marginTop:20
    },
    btn1:{
      justifyContent:"center",
      marginBottom:15,
      backgroundColor:'green',
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center',
      marginTop:50,
      height:40,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
  },
  text1:{
      color:'#A4A4A4',
      fontSize:13,
      marginBottom:1,
      marginTop:10,
      
  },
  text2:{
      marginTop:10,
      color:'white',
      fontWeight:'bold',
      fontSize:30,
      marginBottom:5,
      textAlign:'justify',
  },
  input:{
    color:'#1579B2',
    height:35,
    fontSize:15,
    justifyContent:'center',
    alignItems:'stretch',
    paddingVertical:0,
    marginTop:3,
    marginBottom:15,
    borderRadius:5,
    paddingLeft:7,
    paddingRight:7,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    
},

});

export default app;