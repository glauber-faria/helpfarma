import * as React from 'react';
import { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Image, AppRegistry, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from '@react-native-firebase/app';
const teste = () =>{
}
class Login extends Component{
    state = {
        email: '',
        password:'',
        isAuthenticated: false
    }
    
    login = async() =>{
        const { email, password} = this.state;
       try{
         await firebase.auth().signInWithEmailAndPassword(email, password);
            this.setState({isAuthenticated: true});
            Alert.alert(""+user);
        }
        catch(err){
            Alert.alert(""+err);
        }

        
    }
    
    render(){
        return(
            <View>
                <View style={[styles.container3]}>
                    <Image
                        style={[styles.logo]}
                        source={require('../img/logo2.png')}
                    />
                    <Text style={[styles.text1]}>Help Farma</Text>
                    <Text style={[styles.text2]}>Coleta e gestão de dados farmacêuticos</Text>
                </View>
                <View style={[styles.container4]}>
                    <Icon
                        name="user" size={18} color="#1579B2"
                        style={[styles.icon]}
                    />
                    <TextInput
                        style={[styles.input]}
                        autoCompleteType={"username"}
                        blurOnSubmit={true}
                        inlineImageLeft='logo'
                        placeholder={'Username'}
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}

                    />
                </View>
                <View style={[styles.container4]}>
                    <Icon
                        name="lock" size={18} color="#1579B2"
                        style={[styles.icon]}
                    />
                    <TextInput
                        style={[styles.input]}
                        secureTextEntry={true}
                        autoCompleteType={"password"}
                        blurOnSubmit={true}
                        placeholder={'Password'}
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}

                    />
                </View>
                <View style={[styles.container2]}>
                    <TouchableOpacity
                        style={[styles.btn]}
                        onPress={this.login}
                    >
                        <Text style={[styles.text]}>LOGIN</Text>
                    </TouchableOpacity>
                      {this.state.isAuthenticated? <Text>logado</Text>: <Text>erro</Text>}
                </View>
                <View style={[styles.container2]}>
                    <TouchableOpacity
                        style={[styles.btn2]}
                    >
                        <Text style={[styles.text4]}>Esqueceu sua senha?</Text>
                    </TouchableOpacity>
                      
                </View>
                
            </View>
        );
    };
}
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 20,
        borderWidth:1
    },
    container2: {
        justifyContent: "space-around",
        alignItems: 'stretch',
        marginTop: 70,
    },
    container3: {
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 80,
        marginBottom:10
    },
    container4: {
        flexDirection:'row',
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 30,
    },

    input:{
        paddingLeft:12,
        paddingRight:12,
        paddingTop:1,
        paddingBottom:1,
        width:250,
        height:40,
        fontSize:15,
        borderWidth:0,
        borderColor:'#1579B2',
        backgroundColor: 'white',
        borderLeftWidth:0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    logo:{
        width: 150,
        height: 97,

    },

    icon:{
        borderColor:'#1579B2',
        borderRightWidth:0,
        paddingRight:15,
        paddingLeft:15,
        paddingTop:10.5,
        paddingBottom:10.2,
        backgroundColor:'#f5f6f7',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    btn:{
        borderRadius:3,
        backgroundColor:'#1579B2',
        height:40,
        justifyContent:'center',
        alignItems:'center',
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
        justifyContent:'center',
        alignItems:'center',
       
    },
    text:{
        color:'white',
        fontFamily:'Roboto',
        fontSize:14,

    },
    text1:{
        marginTop:5,
        letterSpacing:2,
        fontSize:40,
        fontWeight: 'bold',
        color:'#1579B2',
    },
    text2:{
        fontSize:12,
        letterSpacing:0.,
        fontWeight: '800',
        color:'#1579B2',
    },
    text4:{
        color:'#1579BB',
        fontSize:10,
        letterSpacing: 1
    },
  });
export default Login;