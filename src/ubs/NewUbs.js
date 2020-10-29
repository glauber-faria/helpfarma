import * as React from 'react';
import {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView,TextInput, Alert, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import dados from './dados.json'


var novaUbs = [];

const back = (navigation)=>{
    return(
        <View style={[styles.container2]}>
            <TouchableOpacity style={[styles.btn2]} onPress={() => navigation.goBack()}>
            <Icon
                name="angle-left" size={40} color="white"
                style={[styles.icon]}    
            />
            </TouchableOpacity>
        </View>
        
    );
    
}

class UBS extends Component{
    state = {
        id:-1,
        nome:'',
        cnes:'',
        tel:'',
        end:'',
        obs:''
    };
    inserir = (state) =>{
        if(state.nome){
            if(state.cnes){
                novaUbs.push(state)
                console.log(JSON.stringify(novaUbs));
                this.setState({id:-1, nome:'', cnes:'', tel:'', end:'', obs:''});

            }
            else{
                console.log('CNES erro');
                Alert.alert('Atenção!!!', 'Campo *CNES* está em branco');
            }
        }
        else{
            console.log('nome erro');
            Alert.alert('Atenção!!!', 'Campo *Nome* está em branco');
        }
        console.log(novaUbs);
    };
    render(){
        return(
            <>
                <View style={[styles.container1]}>
                    <Text style={[styles.text]} >NOVA UBS</Text>
                </View>
                <View style={[styles.container1]}>
                    <Text style={[styles.text2]}>Nome</Text>
                    <TextInput style={[styles.input]} value={this.state.nome} onChangeText={nome => this.setState({nome})}/>
                </View>
                <View style={[styles.container1]}>
                    <Text style={[styles.text2]}>Cnes</Text>
                    <TextInput style={[styles.input]} value={this.state.cnes} onChangeText={cnes => this.setState({cnes})}/>
                </View>
                <View style={[styles.container1]}>
                    <Text style={[styles.text2]}>Telefone</Text>
                    <TextInput style={[styles.input]} value={this.state.tel} onChangeText={tel => this.setState({tel})}/>
                </View>
                <View style={[styles.container1]}>
                    <Text style={[styles.text2]}>Endereço</Text>
                    <TextInput style={[styles.input]} value={this.state.end} onChangeText={end => this.setState({end})}/>
                </View>
                <View style={[styles.container1]}>
                    <Text style={[styles.text2]}>Observações</Text>
                    <TextInput style={[styles.input]} multiline={true} numberOfLines={4} value={this.state.obs} onChangeText={obs => this.setState({obs})}/>
                </View>
                <View style={[styles.container1]}>
                    <TouchableOpacity style={[styles.btn]} onPress={() => this.inserir(this.state)}>
                        <Text style={{color:'white', fontWeight:'bold', letterSpacing:2}}>INSERIR</Text>
                    </TouchableOpacity>
                </View>
            </>
        );
    }

}

function newUBS({navigation}){
    return(
        <ScrollView style={[styles.container]}>
            <View>
                {back(navigation)}
                <UBS/>
            </View>
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:'#1579B2'
        
    },
    container1: {
        flexDirection:'column',
        marginHorizontal:30,
    },
    container2: {
        flexDirection:'column',
        marginHorizontal:30,
        alignItems:'flex-start',
        justifyContent:'center'
    },


    input:{
        textAlign:'justify',
        paddingVertical:0.5,
        fontSize:12,
        marginTop:3,
        marginBottom:15,
        borderRadius:5,
        paddingLeft:12,
        paddingRight:12,
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
        color:'#f5f5f5',
        letterSpacing:1,
        marginBottom:2,

    },
    btn:{
        marginBottom:10,
        height:45,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        backgroundColor:'green',
        marginTop:30,
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
        marginTop:20,

    }
}
);

export default newUBS;