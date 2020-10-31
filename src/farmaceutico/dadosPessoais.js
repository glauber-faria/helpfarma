import * as React from 'react';
import {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView,TextInput, Alert, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const header = (navigation) =>{
    return(
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                    name="angle-left" size={40} color="black"
                    style={[styles.icon]}    
                />
            </TouchableOpacity>

                <Text>DADOS PESSOAIS</Text>
        </View>
        
    );
}
const footer = (navigation) =>{
    return(
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                    name="angle-right" size={40} color="black"
                    style={[styles.icon]}    
                />
            </TouchableOpacity>
        </View>
        
    );
}
class Sexo extends Component{
    state = {
        data:['Masculino', 'Feminino', 'Outro(a)'],
        checked:0
    }
    render(){
        return(
            <View style={[styles.container1]}>
                {this.state.checked == 0? <TouchableOpacity style={[styles.btn2]}><Text>{this.state.data[0]}</Text></TouchableOpacity>:<TouchableOpacity style={[styles.btn]} onPress={() => this.setState({checked:0}) + console.log(this.state)}><Text>{this.state.data[0]}</Text></TouchableOpacity>}
                {this.state.checked == 1? <TouchableOpacity style={[styles.btn2]} ><Text>{this.state.data[1]}</Text></TouchableOpacity>:<TouchableOpacity style={[styles.btn]}  onPress={() => this.setState({checked:1}) + console.log(this.state)}><Text>{this.state.data[1]}</Text></TouchableOpacity>}
                {this.state.checked == 2? <TouchableOpacity style={[styles.btn2]} ><Text>{this.state.data[2]}</Text></TouchableOpacity>:<TouchableOpacity style={[styles.btn]}  onPress={() => this.setState({checked:2}) + console.log(this.state)}><Text>{this.state.data[2]}</Text></TouchableOpacity>}
            </View>
        );
    }
}
class Cor extends Component{
    state = {
        data:['Branca', 'Preta', 'Amarela', 'Parda', 'Indigena'],
        checked:0
    }
    render(){
        return(
            <View style={[styles.container1]}>
                {this.state.checked == 0? <TouchableOpacity style={[styles.btn2]}><Text>{this.state.data[0]}</Text></TouchableOpacity>:<TouchableOpacity style={[styles.btn]} onPress={() => this.setState({checked:0}) + console.log(this.state)}><Text>{this.state.data[0]}</Text></TouchableOpacity>}
                {this.state.checked == 1? <TouchableOpacity style={[styles.btn2]} ><Text>{this.state.data[1]}</Text></TouchableOpacity>:<TouchableOpacity style={[styles.btn]}  onPress={() => this.setState({checked:1}) + console.log(this.state)}><Text>{this.state.data[1]}</Text></TouchableOpacity>}
                {this.state.checked == 2? <TouchableOpacity style={[styles.btn2]} ><Text>{this.state.data[2]}</Text></TouchableOpacity>:<TouchableOpacity style={[styles.btn]}  onPress={() => this.setState({checked:2}) + console.log(this.state)}><Text>{this.state.data[2]}</Text></TouchableOpacity>}
                {this.state.checked == 3? <TouchableOpacity style={[styles.btn2]} ><Text>{this.state.data[3]}</Text></TouchableOpacity>:<TouchableOpacity style={[styles.btn]}  onPress={() => this.setState({checked:3}) + console.log(this.state)}><Text>{this.state.data[3]}</Text></TouchableOpacity>}
                {this.state.checked == 4? <TouchableOpacity style={[styles.btn2]} ><Text>{this.state.data[4]}</Text></TouchableOpacity>:<TouchableOpacity style={[styles.btn]}  onPress={() => this.setState({checked:4}) + console.log(this.state)}><Text>{this.state.data[4]}</Text></TouchableOpacity>}
            </View>
        );
    }
}
class Escolaridade extends Component{
    state = {
        data:['Alfabetizado', 'Fundamental', 'Medio', 'Graduação', 'Mestrado', 'Doutorado'],
        checked:0
    }
    render(){
        return(
            <View style={[styles.container1]}>
                {this.state.checked == 0? <TouchableOpacity style={[styles.btn2]}><Text>{this.state.data[0]}</Text></TouchableOpacity>:<TouchableOpacity style={[styles.btn]} onPress={() => this.setState({checked:0}) + console.log(this.state)}><Text>{this.state.data[0]}</Text></TouchableOpacity>}
                {this.state.checked == 1? <TouchableOpacity style={[styles.btn2]} ><Text>{this.state.data[1]}</Text></TouchableOpacity>:<TouchableOpacity style={[styles.btn]}  onPress={() => this.setState({checked:1}) + console.log(this.state)}><Text>{this.state.data[1]}</Text></TouchableOpacity>}
                {this.state.checked == 2? <TouchableOpacity style={[styles.btn2]} ><Text>{this.state.data[2]}</Text></TouchableOpacity>:<TouchableOpacity style={[styles.btn]}  onPress={() => this.setState({checked:2}) + console.log(this.state)}><Text>{this.state.data[2]}</Text></TouchableOpacity>}
                {this.state.checked == 3? <TouchableOpacity style={[styles.btn2]} ><Text>{this.state.data[3]}</Text></TouchableOpacity>:<TouchableOpacity style={[styles.btn]}  onPress={() => this.setState({checked:3}) + console.log(this.state)}><Text>{this.state.data[3]}</Text></TouchableOpacity>}
                {this.state.checked == 4? <TouchableOpacity style={[styles.btn2]} ><Text>{this.state.data[4]}</Text></TouchableOpacity>:<TouchableOpacity style={[styles.btn]}  onPress={() => this.setState({checked:4}) + console.log(this.state)}><Text>{this.state.data[4]}</Text></TouchableOpacity>}
                {this.state.checked == 5? <TouchableOpacity style={[styles.btn2]} ><Text>{this.state.data[5]}</Text></TouchableOpacity>:<TouchableOpacity style={[styles.btn]}  onPress={() => this.setState({checked:5}) + console.log(this.state)}><Text>{this.state.data[5]}</Text></TouchableOpacity>}
            </View>
        );
    }
}
class DadosPessoais extends Component{
    state = {
        nome:'Glauber',
        sexo:'M',
        dataNascimento:'23/02/1999',
        cor:'Branca',
        estadoCivil:'Solteiro',
        escolaridade:'Alfabetizado'
    }
    
    render(){
        return(
            <View>
                <Text>1 - Nome do Colaborador</Text>
                <TextInput style={styles.btn} value={this.state.nome}/>
                <Text>2 - Sexo</Text>
                <Sexo/>
                <Text>3 - Data de Nascimento</Text>
                <TextInput style={styles.btn} value={this.state.dataNascimento}/>
                <Text>4 - Cor ou Raça</Text>
                <Cor/>
                <Text>5 - Estado Civil</Text>
                <TextInput style={styles.btn} value={this.state.estadoCivil}/>
                <Text>6 - Escolaridade</Text>
                <Escolaridade/>
            </View>
        );
    }
}


const app = ({navigation})=>{
    return(
        <>
            {header(navigation)}
            <DadosPessoais/>
            {footer(navigation)}

        </>
    );
}
const styles = StyleSheet.create(
    {
        container: {
            flex:1,
            backgroundColor:'#1579B2'
            
        },
        container1: {
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'center',      
        },

        btn:{
            borderColor:'black',
            borderWidth:2,
            borderRadius:5
        },
        btn2:{
            borderColor:'black',
            borderWidth:2,
            borderRadius:5,
            backgroundColor:'red'
        }

    }
);
export default app;