import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import dados from './imagens.json'


export default function Home({navigation}){
    const listagemUBS = (i) => {
        return(
                <TouchableOpacity style={[styles.btn1]} onPress={() => navigation.navigate("dadosPessoais")}>
                    <View  style={[styles.container2]}>
                        <Image
                                source={require('../img/ubs.png')}
                                style={[styles.img]}
                            />
                    </View>
                    <Text style={[styles.text]}>{dados[i]?.nome}</Text>

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
                    <Text style={[styles.text2]}>Fotos Salvas</Text>
                    <View  style={[styles.container2]}>
                        {listagemUBS(0)}
                        {listagemUBS(1)}
                    </View>
                    <View  style={[styles.container2]}>
                        {listagemUBS(2)}
                        {listagemUBS(3)}
                    </View>

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
        alignItems:'center',
        borderRadius:10,
        backgroundColor:'white',
        paddingHorizontal:25,
        width:160,
        height:150,
        marginRight:10,
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
        textAlign:'center'
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
        marginBottom:15,
        textAlign:'justify',
    },
    img:{
        width: 80,
        height: 80,
        marginRight:10,
        marginBottom:3,
        borderRadius:10,
    },

  });