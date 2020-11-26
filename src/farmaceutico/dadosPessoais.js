import * as React from 'react';
import {Component, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView,TextInput, Alert, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DataDadosPessoais from './dadosPessoais.json';

const header = (navigation) =>{
    return(
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                    name="angle-left" size={40} color="white"
                    style={[styles.icon]}    
                />
            </TouchableOpacity>

            <Text style={styles.text}>DADOS PESSOAIS</Text>
        </View>
        
    );
}
const footer = (navigation) =>{
    return(
        <View style={{alignItems:'flex-end', marginTop:40, marginBottom:20}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                    name="angle-right" size={40} color="white"
                    style={[styles.icon]}    
                />
            </TouchableOpacity>
        </View>
        
    );
}
function Sexo(state){
    const[data, setData] = useState(['Masculino', 'Feminino', 'Outro(a)']);
    const[checked, setChecked] = useState(0);
    const[result, setResult] = useState(data[checked]);
    /*state = {
        data:['Masculino', 'Feminino', 'Outro(a)'],
        checked:0
    }*/
    return(
        <View style={[styles.container1]}>
            <View  style={[styles.container2]}>
                {checked == 0? <TouchableOpacity style={[styles.btn2]}><Text style={styles.text2}>{data[0]}</Text></TouchableOpacity>:<TouchableOpacity style={[styles.btn]} onPress={() => setChecked(0)}><Text style={styles.text2}>{data[0]}</Text></TouchableOpacity>}
                {checked == 1? <TouchableOpacity style={[styles.btn2]} ><Text style={styles.text2}>{data[1]}</Text></TouchableOpacity>:<TouchableOpacity style={[styles.btn]}  onPress={() => setChecked(1)}><Text style={styles.text2}>{data[1]}</Text></TouchableOpacity>}
           </View>
           <View  style={[styles.container2]}>
                {checked == 2? <TouchableOpacity style={[styles.btn2]} ><Text style={styles.text2}>{data[2]}</Text></TouchableOpacity>:<TouchableOpacity style={[styles.btn]}  onPress={() => setChecked(2)}><Text style={styles.text2}>{data[2]}</Text></TouchableOpacity>}
                <Text>{result}</Text>
            </View>
        </View>
    
    );
};
class Cor extends Component{
    state = {
        data:['Branca', 'Preta', 'Amarela', 'Parda', 'Indigena'],
        checked:0
    }
    render(){
        return(
            <View style={[styles.container1]}>
                <View  style={[styles.container2]}>
                    {this.state.checked == 0? <TouchableOpacity style={[styles.btn2]}><Text style={styles.text2}>{this.state.data[0]}</Text></TouchableOpacity>:<TouchableOpacity style={[styles.btn]} onPress={() => this.setState({checked:0}) + console.log(this.state)}><Text style={styles.text2}>{this.state.data[0]}</Text></TouchableOpacity>}
                    {this.state.checked == 1? <TouchableOpacity style={[styles.btn2]} ><Text style={styles.text2}>{this.state.data[1]}</Text></TouchableOpacity>:<TouchableOpacity style={[styles.btn]}  onPress={() => this.setState({checked:1}) + console.log(this.state)}><Text style={styles.text2}>{this.state.data[1]}</Text></TouchableOpacity>}
                </View>
                <View  style={[styles.container2]}>
                    {this.state.checked == 2? <TouchableOpacity style={[styles.btn2]} ><Text style={styles.text2}>{this.state.data[2]}</Text></TouchableOpacity>:<TouchableOpacity style={[styles.btn]}  onPress={() => this.setState({checked:2}) + console.log(this.state)}><Text style={styles.text2}>{this.state.data[2]}</Text></TouchableOpacity>}
                    {this.state.checked == 3? <TouchableOpacity style={[styles.btn2]} ><Text style={styles.text2}>{this.state.data[3]}</Text></TouchableOpacity>:<TouchableOpacity style={[styles.btn]}  onPress={() => this.setState({checked:3}) + console.log(this.state)}><Text style={styles.text2}>{this.state.data[3]}</Text></TouchableOpacity>}
                </View>
                {this.state.checked == 4? <TouchableOpacity style={[styles.btn2]} ><Text style={styles.text2}>{this.state.data[4]}</Text></TouchableOpacity>:<TouchableOpacity style={[styles.btn]}  onPress={() => this.setState({checked:4}) + console.log(this.state)}><Text style={styles.text2}>{this.state.data[4]}</Text></TouchableOpacity>}
            </View>
        );
    }
}
class Escolaridade extends Component{
    state = {
        data:['Alfabetizado', 'Fundamental', 'Medio', 'Graduação', 'Mestrado', 'Doutorado'],
        checked:0,
    }
    render(){
        return(
            <View style={[styles.container1]}>
                <View  style={[styles.container2]}>
                    {this.state.checked == 0? <TouchableOpacity style={[styles.btn2]}><Text style={styles.text2}>{this.state.data[0]}</Text></TouchableOpacity>:<TouchableOpacity style={[styles.btn]} onPress={() => this.setState({checked:0}) + console.log(this.state)}><Text style={styles.text2}>{this.state.data[0]}</Text></TouchableOpacity>}
                    {this.state.checked == 1? <TouchableOpacity style={[styles.btn2]} ><Text style={styles.text2}>{this.state.data[1]}</Text></TouchableOpacity>:<TouchableOpacity style={[styles.btn]}  onPress={() => this.setState({checked:1}) + console.log(this.state)}><Text style={styles.text2}>{this.state.data[1]}</Text></TouchableOpacity>}
               </View>
                <View  style={[styles.container2]}>
                    {this.state.checked == 2? <TouchableOpacity style={[styles.btn2]} ><Text style={styles.text2}>{this.state.data[2]}</Text></TouchableOpacity>:<TouchableOpacity style={[styles.btn]}  onPress={() => this.setState({checked:2}) + console.log(this.state)}><Text style={styles.text2}>{this.state.data[2]}</Text></TouchableOpacity>}
                    {this.state.checked == 3? <TouchableOpacity style={[styles.btn2]} ><Text style={styles.text2}>{this.state.data[3]}</Text></TouchableOpacity>:<TouchableOpacity style={[styles.btn]}  onPress={() => this.setState({checked:3}) + console.log(this.state)}><Text style={styles.text2}>{this.state.data[3]}</Text></TouchableOpacity>}
                </View>
                <View  style={[styles.container2]}>
                    {this.state.checked == 4? <TouchableOpacity style={[styles.btn2]} ><Text style={styles.text2}>{this.state.data[4]}</Text></TouchableOpacity>:<TouchableOpacity style={[styles.btn]}  onPress={() => this.setState({checked:4}) + console.log(this.state)}><Text style={styles.text2}>{this.state.data[4]}</Text></TouchableOpacity>}
                    {this.state.checked == 5? <TouchableOpacity style={[styles.btn2]} ><Text style={styles.text2}>{this.state.data[5]}</Text></TouchableOpacity>:<TouchableOpacity style={[styles.btn]}  onPress={() => this.setState({checked:5}) + console.log(this.state)}><Text style={styles.text2}>{this.state.data[5]}</Text></TouchableOpacity>}
                </View>
            </View>
        );
    }
}
class EstadoCivil extends Component{
    state = {
        data:['Solteiro(a)', 'Casado(a)', 'Viúvo(a)', 'União Estavel', 'Divorciado(a)'],
        checked:0
    }
    render(){
        return(
            <View style={[styles.container1]}>
                <View  style={[styles.container2]}>
                    {this.state.checked == 0? <TouchableOpacity style={[styles.btn2]}><Text style={styles.text2}>{this.state.data[0]}</Text></TouchableOpacity>:<TouchableOpacity style={[styles.btn]} onPress={() => this.setState({checked:0}) + console.log(this.state)}><Text style={styles.text2}>{this.state.data[0]}</Text></TouchableOpacity>}
                    {this.state.checked == 1? <TouchableOpacity style={[styles.btn2]} ><Text style={styles.text2}>{this.state.data[1]}</Text></TouchableOpacity>:<TouchableOpacity style={[styles.btn]}  onPress={() => this.setState({checked:1}) + console.log(this.state)}><Text style={styles.text2}>{this.state.data[1]}</Text></TouchableOpacity>}
               </View>
                <View  style={[styles.container2]}>
                    {this.state.checked == 2? <TouchableOpacity style={[styles.btn2]} ><Text style={styles.text2}>{this.state.data[2]}</Text></TouchableOpacity>:<TouchableOpacity style={[styles.btn]}  onPress={() => this.setState({checked:2}) + console.log(this.state)}><Text style={styles.text2}>{this.state.data[2]}</Text></TouchableOpacity>}
                    {this.state.checked == 3? <TouchableOpacity style={[styles.btn2]} ><Text style={styles.text2}>{this.state.data[3]}</Text></TouchableOpacity>:<TouchableOpacity style={[styles.btn]}  onPress={() => this.setState({checked:3}) + console.log(this.state)}><Text style={styles.text2}>{this.state.data[3]}</Text></TouchableOpacity>}
                </View>
                <View  style={[styles.container2]}>
                    {this.state.checked == 4? <TouchableOpacity style={[styles.btn2]} ><Text style={styles.text2}>{this.state.data[4]}</Text></TouchableOpacity>:<TouchableOpacity style={[styles.btn]}  onPress={() => this.setState({checked:4}) + console.log(this.state)}><Text style={styles.text2}>{this.state.data[4]}</Text></TouchableOpacity>}
                </View>
            </View>
        );
    }
}
class DataNascimento extends Component{
    state = {
       dia:'',
       mes:'',
       ano:''
    }
    render(){
        return(
            <View style={[styles.container1]}>
                <TextInput style={styles.input2} value={this.state.dia} onChangeText={(dia) => this.setState({dia})}/>
                <Text style={styles.text3}>/</Text>
                <TextInput style={styles.input2} value={this.state.mes} onChangeText={(mes) => this.setState({mes})}/>
                <Text style={styles.text3}>/</Text>
                <TextInput style={styles.input2} value={this.state.ano} onChangeText={(ano) => this.setState({ano})}/>
            </View>
        );
    }
}
class DadosPessoais extends Component{
    state = {
        nome:'',
        sexo : {
            data:['Masculino', 'Feminino', 'Outro(a)'],
            checked:0
        },
        dataNascimento:'23/02/1999',
        cor:'Branca',
        estadoCivil:'Solteiro',
        escolaridade:'Alfabetizado'
    }
      
    render(){
        return(
            <View>
                <Text style={styles.text3}>1 - Nome do Colaborador</Text>
                <TextInput style={styles.input} value={this.state.nome} onChangeText={(nome) => this.setState({nome})}/>
                <Text style={styles.text3}>2 - Sexo</Text>
                <Text style={styles.text3}>3 - Data de Nascimento</Text>
                <DataNascimento/>
                <Text style={styles.text3}>4 - Cor ou Raça</Text>
                <Cor/>
                <Text style={styles.text3}>5 - Estado Civil</Text>
                <EstadoCivil/>
                <Text style={styles.text3}>6 - Escolaridade</Text>
                
               <Escolaridade/>

            

            </View>
        );
    }
}


const app = ({navigation})=>{
    let state = {
        sexo:''
    }
    return(
        <ScrollView style={styles.container}>
            <View >
                {header(navigation)}
                <DadosPessoais />
                {footer(navigation)}
                {Sexo(state)}

            </View>
        </ScrollView>
        
    );
}
const styles = StyleSheet.create(
    {
        container: {
            flex:1,
            backgroundColor:'#1579B2',
            paddingHorizontal:20
            
        },
        container1: {
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'flex-start',      
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
        input2:{
            textAlign:'justify',
            paddingVertical:0.5,
            fontSize:12,
            marginTop:3,
            marginBottom:15,
            borderRadius:5,
            paddingHorizontal:30,
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

    }
);
export default app;