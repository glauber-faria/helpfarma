import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 

const Stack = createStackNavigator();

export default function Home({navigation}){
      return(
          <View style={[styles.container]}>
              
              <View>
                <Text style={[styles.text1]}>BEM-VINDO!</Text>
                <Text style={[styles.text2]}>SELECIONE A OPÇÃO DESEJADA</Text>
              </View>
              <View style={[styles.container3]}>
                <TouchableOpacity  
                    style={[styles.container2, styles.btn]}
                    onPress={() => navigation.navigate('listagemUBS') }

                >
                    <Icon
                        name="hospital-user" size={50} color="#1579B2"
                        style={[styles.icon]}
                    />
                    <Text style={[styles.text]}>Entrevista com o farmacêutico</Text>
                    
                </TouchableOpacity>
                <TouchableOpacity  
                    style={[styles.container2, styles.btn]}
                    onPress={() => navigation.navigate('listagemUBS') }
                    
                    >
                    <Icon
                        name="capsules" size={50} color="#1579B2"
                        style={[styles.icon]}
                    />
                    <Text style={[styles.text]}>Entrevista com o responsável pela dispensa</Text>
                    
                </TouchableOpacity>
              </View>
              <View style={[styles.container3]}>
                <TouchableOpacity  style={[styles.container2, styles.btn]}>
                    <Icon
                        name="notes-medical" size={50} color="#1579B2"
                        style={[styles.icon]}
                    />
                    <Text style={[styles.text]}>Avaliação da Farmácia</Text>
                    
                </TouchableOpacity>
                <TouchableOpacity  style={[styles.container2, styles.btn]}>
                    <Icon
                        name="camera" size={50} color="#1579B2"
                        style={[styles.icon]}
                    />
                    <Text style={[styles.text]}>Registro Fotográfico </Text>
                    
                </TouchableOpacity>
              </View>
              {/*<View style={[styles.container3]}>
                
                <TouchableOpacity  style={[styles.container2, styles.btn]}>
                    <Icon
                        name="cogs" size={50} color="#1579B2"
                        style={[styles.icon]}
                    />
                    <Text style={[styles.text]}>Configurações </Text>
                    
      </TouchableOpacity>
      </View>*/}
              
          </View>
      );
  }
  const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        alignItems: 'center',
        paddingTop:50
    },
    container2: {
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container3:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
    },
    container4:{
        backgroundColor:'#1579BC',
        alignItems:'stretch',
        justifyContent:'flex-start',
    },

    btn:{
        marginTop:20,
        borderRadius:10,
        backgroundColor:'white',
        marginHorizontal:10,
        paddingHorizontal:20,
        width:130,
        height:130,
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
        color:'#1579BC',
        fontSize:10,
        textAlign:'center',
        fontWeight:'bold'
    },
    text1:{
        color:'#1579BC',
        fontSize:40,
        fontWeight:'bold',
        textAlign:'center',
        marginHorizontal:30,
        letterSpacing:1,
        marginTop:40,
    },
    text2:{
        color:'#1579BC',
        fontSize:10,
        fontWeight:'bold',
        textAlign:'center',
        marginHorizontal:30,
        letterSpacing:3,
        paddingBottom:20
    },
    icon:{
        paddingBottom:8

    },
    logo:{
        width: 80,
        height: 50,

    },
    rodape:{
        fontSize:10,
        color:'white'

    }

  });