import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import dados from './dados.json'

export default function Home({navigation}){
    const listagemUBS = (i) => {
        return(
            <TouchableOpacity style={[styles.btn1]} onPress={() => navigation.navigate("dadosPessoais")}>
                    <View  style={[styles.container2]}>
                        <View>
                            <Text style={[styles.text]}>{"Registro fotográfico " + dados[i]?.id}</Text>
                            <Text style={[styles.text1]}>Data: {dados[i]?.data}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={[styles.text1]}>{dados[i]?.obs}</Text>
                    </View>
                </TouchableOpacity>
        );
         
    };

    return(
        <ScrollView  style={{backgroundColor:'#1579B2', flex:1}}>

          <View>
          
            <View style={[styles.container0]}>
                
                <View style={[styles.container1]}>
                <View style={[styles.container3]}>
                <TouchableOpacity style={[styles.btn2]} onPress={() => navigation.goBack()}>
                    <Icon
                        name="angle-left" size={40} color="white"
                        style={[styles.icon]}    
                    />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn2]} onPress={() => navigation.navigate('newUbs')}>
                    <Icon
                        name="plus" size={30} color="white"
                        style={[styles.icon]}
                    />
                </TouchableOpacity>
                
            </View>
                    <Text style={[styles.text2]}>Registros Fotográficos</Text>
                    {listagemUBS(0)}
                    {listagemUBS(1)}
                    {listagemUBS(2)}
                    {listagemUBS(3)}
                </View>
            </View>
          </View>
        </ScrollView>


      );
  }
  const styles = StyleSheet.create({
      container0:{
        alignItems:'center',
      },
    container1: {
        flexDirection:'column',
    },
    container2: {
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        
    },
    container3: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingBottom:20,
    },

    btn1:{
        marginBottom:15,
        justifyContent:"center",
        borderRadius:10,
        backgroundColor:'white',
        paddingHorizontal:25,
        width:330,
        height:80,
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
        justifyContent:"center",
        alignItems:'center',
        borderRadius:10,
        marginTop:20
    },
    text:{
        color:'black',
        fontSize:14,
        fontWeight:'bold',
        marginBottom:6,
    },
    text1:{
        color:'#A4A4A4',
        fontSize:13,
        marginBottom:1,
    },
    text2:{
        color:'white',
        fontWeight:'bold',
        fontSize:25,
        marginBottom:5,
        textAlign:'justify',
    },
    img:{
        width: 70,
        height: 70,
        marginRight:10,
        marginBottom:10,
        borderRadius:10,
    },

  });