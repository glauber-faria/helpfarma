import * as React from 'react';
import {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView,TextInput, Alert, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


class DadosPessoais extends Component{
    state = {
        nome:'Glauber',
        sexo:'M',
        dataNascimento:'23/02/1999',
        cor:'Branca',
        estadoCivil:'Solteiro',
        escolaridade:{
            curso:'Tecnologia em Sistemas de computação',
            grau:'Técnologo',
            status:'Completo'
        }
    }
    render(){
        return(
            <View>
                <Text>{this.state.nome}</Text>
                <Text>{this.state.sexo}</Text>
                <Text>{this.state.dataNascimento}</Text>
                <Text>{this.state.cor}</Text>
                <Text>{this.state.escolaridade.curso}</Text>
                <Text>{this.state.escolaridade.grau}</Text>
                <Text>{this.state.escolaridade.status}</Text>
                    <TouchableOpacity><Text>Opção1</Text></TouchableOpacity>
                    <TouchableOpacity><Text>Opção2</Text></TouchableOpacity>
                

            </View>
        );
    }
}


const app = ()=>{
    return(
        <>
            <DadosPessoais/>
        </>
    );
}
const styles = StyleSheet.create(
    {
        container: {
            flex:1,
            backgroundColor:'#1579B2'
            
        },
    }
);
export default app;