import React from "react";
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, Image, TextInput} from "react-native";
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";




export default function TelaDeLogin(){

    const[conteudoFeed, setConteudoFeed] = useState(<TelaPrincipal />);

    return(
        <View style={styles.container}>

       
        {conteudoFeed}
        
          
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    image:{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
    },
    logo: {
        height: '100%',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewTop:{
        height: '60%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    viewBottom:{
        height: '40%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    textoNome:{
        color: '#ffffff',
        fontSize: 20,
        marginBottom: '2%',
        
    },
    textoEmail:{
        color: '#ffffff',
        fontSize: 20,
        marginBottom: '2%',
    },
    textoSenha:{
        color: '#ffffff',
        fontSize: 20,
        marginBottom: '2%',
    },
    input:{
        height: '20%',
        width: '50%',
        backgroundColor: '#ffffff',
        borderRadius: 25,
        marginBottom: 30,
        paddingLeft: 10,

    },
    botaoLogin: {

        height: 50,
        width: 120,
        backgroundColor: 'white',
        borderRadius: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#171717',
        shadowOffset: {width: 3, height: 5},
        shadowOpacity: 0.6,
        shadowRadius: 3,
        
    },
    textoBotao: {

        justifyContent: 'center',
        alignItems: 'center',
        textShadowColor: '#171717',
        textShadowOffset: {width: 1, height: 3},
        textShadowOpacity: 0.6,
        textShadowRadius: 7,

    },
  
})

function TelaPrincipal(){
    const navigation = useNavigation();
    const image = require('/imagens/gifChamas.gif')
    const logo = require('/imagens/logo_sfundo.png')
    let inputName
    let inputEmail
    let inputSenha
    return(
        <View style={styles.container}>
    
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    
                    <View style={styles.viewTop}>

                    <Image style={styles.logo}
                        source={logo}/>

                    </View>

                     <View style={styles.viewBottom}>

                     <Text style={styles.textoNome}>Digite seu nome de usuário:</Text>
                        
                         <TextInput

                            multiline= {false}
                            style={styles.input}
                            value={inputName}
                            />


                            <Text style={styles.textoSenha}>Digite sua senha:</Text>
                        
                         <TextInput

                            multiline= {false}
                            style={styles.input}
                            value={inputSenha}
                            />


                            <Text style={{color: '#ff0000'}}></Text>




                            <TouchableOpacity style={styles.botaoLogin}>
                            <Text style={styles.textoBotao}>Login</Text>
                            </TouchableOpacity>

                    </View>

                  
                        
    
                </ImageBackground>   
           
        </View>
    )
    }