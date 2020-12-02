import * as React from 'react';
import {Component, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Image, ScrollView,TextInput, Alert, Button, Picker, SectionList} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome5';

const header = (navigation) =>{
    return(
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                    name="angle-left" size={40} color="white"
                    style={[styles.icon]}    
                />
            </TouchableOpacity>

            <Text style={styles.text}>Avaliação da Farmácia</Text>
        </View>
        
    );
}
const footer = (navigation) =>{
    return(
        <View style={{alignItems:'flex-end', marginTop:20, marginBottom:20}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                    name="angle-right" size={40} color="white"
                />
            </TouchableOpacity>
        </View>
        
    );
}

const nome = () =>{
    const [nome, setNome] = useState("");
    return(
        <TextInput style={styles.input} value={nome} multiline={true} numberOfLines={3} onChangeText={(nome) => setNome()}/>
        
    );
}

const app = ({navigation})=>{
    return(
        <ScrollView style={styles.container}>
            <View >
                {header(navigation)}
                <Text style={styles.text3}>1 - Qual sua opinião em relação ao fluxo de trabalho na farmácia</Text>
                {nome()}
                <Text style={styles.text3}>2 - Qual sua opinião em relação a organização da farmácia</Text>
                {nome()}
                <Text style={styles.text3}>3 - Qual sua opinião em relação a segurança na farmácia</Text>
                {nome()}
                <Text style={styles.text3}>4 - Quais medidas podem ser adotadas para melhorar o dia a dia na farmácia</Text>
                {nome()}
                {footer(navigation)}

            </View>
        </ScrollView>
        
    );
}


const styles = StyleSheet.create(
    {
        container: {
            flex:1,
            backgroundColor:'#1579B2',
            paddingHorizontal:35,
            
        },
        container1: {
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',      
        },
        container2: {
            flexDirection:'column',
            justifyContent:'flex-start',
            alignItems:'flex-start',      
        },
        container3: {
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'flex-start',      
        },
        btn:{
            marginTop:3,
            borderColor:'white',
            borderWidth:2,
            borderRadius:5,
            marginBottom:15,
            width:110,
            height:50,
            alignItems:'center',
            justifyContent:'center',
            
            backgroundColor:'white',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4,


        },
        btn2:{
            marginTop:3,
            borderColor:'green',
            borderWidth:2,
            borderRadius:5,
            marginBottom:15,
            width:110,
            height:50,
            alignItems:'center',
            justifyContent:'center',
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
        btn3:{
            borderColor:'white',
            marginTop:3,
            borderWidth:2,
            borderRadius:5,
            marginBottom:15,
            fontSize:12,
            height:35,
            justifyContent:'center',
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
        btn4:{
            marginTop:3,
            borderRadius:5,
            marginBottom:15,
            fontSize:12,
            justifyContent:'center',
            alignItems:"center",
        },
        input:{
            color:'#1579B2',
            fontSize:15,
            justifyContent:'center',
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
        input2:{
            color:'#1579B2',
            textAlign:'justify',
            alignItems:'center',
            justifyContent:'center',
            paddingVertical:2,
            fontSize:16,
            marginTop:3,
            marginBottom:15,
            borderRadius:5,
            paddingHorizontal:35,
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
        
        text:{
            color:'white',
            fontWeight:'bold',
            fontSize:30,
            marginTop:20,
            marginBottom:5,
            textAlign:'justify',
        },
        text2:{
            color:'#1579B2',
            letterSpacing:1,
            marginBottom:2,
            fontWeight:'bold'
        },
        text3:{
            color:'#f5f5f5',
            letterSpacing:2,
            marginBottom:3,
        },
        icon:{
            marginTop:20
        }

    }
);
export default app;