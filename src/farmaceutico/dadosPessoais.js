import * as React from 'react';
import {Component, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Image, ScrollView,TextInput, Alert, Button, Picker, SectionList} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DataDadosPessoais from './dadosPessoais.json';
const sexo = () => {
    const [selectedValue, setSelectedValue] = useState("M");
    return(
        <View style={styles.btn3}>
            <Picker style={{color:'#1579B2'}}
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Masculino" value="M"/>
                <Picker.Item label="Feminino" value="F"/>
                <Picker.Item label="Outro(a)" value="O"/>
            </Picker>
        </View>
    );
}
const cor = () => {
    const [selectedValue, setSelectedValue] = useState("parda");
    return(
        <View style={styles.btn3}>
            <Picker style={{color:'#1579B2'}}
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Branca" value="branca"/>
                <Picker.Item label="Preta" value="preta"/>
                <Picker.Item label="Amarela" value="amarela"/>
                <Picker.Item label="Parda" value="parda"/>
                <Picker.Item label="Indigena" value="indigena"/>
            </Picker>
        </View>
    );
}
const escolaridade = () => {
    const [selectedValue, setSelectedValue] = useState("s");
    return(
        <View style={styles.btn3}>
            <Picker style={{color:'#1579B2'}}
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Alfabetizado(a)" value="a"/>
                <Picker.Item label="Ens. Fundamental" value="ef"/>
                <Picker.Item label="Ens. Médio" value="em"/>
                <Picker.Item label="Graduação" value="g"/>
                <Picker.Item label="Mestrado" value="m"/>
                <Picker.Item label="Doutorado" value="d"/>
            </Picker>
        </View>
    );
}
const estadoCivil = () => {
    const [selectedValue, setSelectedValue] = useState("s");
    return(
        <View style={styles.btn3}>
            <Picker style={{color:'#1579B2'}}
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Solteiro(a)" value="s"/>
                <Picker.Item label="Casado(a)" value="c"/>
                <Picker.Item label="Viúvo(a)" value="v"/>
                <Picker.Item label="União Estavel" value="ue"/>
                <Picker.Item label="Divorciado(a)" value="d"/>
            </Picker>

        </View>
    );
}
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
        <View style={{alignItems:'flex-end', marginTop:20, marginBottom:20}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                    name="angle-right" size={40} color="white"
                />
            </TouchableOpacity>
        </View>
        
    );
}
const datePicker = () => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
   
    return (
      <View>
        <View style={[styles.container1]}>
          <TextInput style={styles.input2} editable={false}>{date.getDate()}</TextInput>
          <TextInput style={styles.input2} editable={false}>{date.getMonth()+1}</TextInput>
          <TextInput style={styles.input2} editable={false}>{date.getFullYear()}</TextInput>
        <TouchableOpacity style={styles.btn4} onPress={showDatepicker}>
            <Icon
                name="calendar" size={35} color="white"
            />
        </TouchableOpacity>
            
          
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={date}
            display="calendar"
            onChange={onChange}
          />
        )}

      </View>
    );
  };

const nome = () =>{
    const [nome, setNome] = useState("");
    return(
        <TextInput style={styles.input} value={nome} onChangeText={(nome) => setNome({nome})}/>
    );
}

const app = ({navigation})=>{
    return(
        <ScrollView style={styles.container}>
            <View >
                {header(navigation)}
                <Text style={styles.text3}>1 - Nome do Colaborador</Text>
                {nome()}
                <Text style={styles.text3}>2 - Sexo</Text>
                {sexo()}
                <Text style={styles.text3}>3 - Data de Nascimento</Text>
                {datePicker()}
                <Text style={styles.text3}>4 - Cor ou Raça</Text>
                {cor()}
                <Text style={styles.text3}>5 - Estado Civil</Text>
                {estadoCivil()}
                <Text style={styles.text3}>6 - Escolaridade</Text>
                {escolaridade()}
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
            height:35,
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