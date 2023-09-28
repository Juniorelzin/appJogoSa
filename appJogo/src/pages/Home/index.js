import React from "react";
import { ImageBackground,View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";




export default function Home(){

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
    image: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
    },
    viewTop:{
        height: '60%',
        width: '100%',
        

    },
    viewMiddle:{
        height: '30%',
        width: '100%',
        alignItems: 'center',
        gap:20
        

    },
    viewBottom:{
        height: '10%',
        width: '100%',
        

    },
    botaoIniciar: {

        height: 50,
        width: 150,
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
    botaoCadastrar: {

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
 
});


function TelaPrincipal(){
const navigation = useNavigation();
const image = require('/imagens/logoPrincipal.gif')
return(
    <View style={styles.container}>

            <ImageBackground source={image} resizeMode="cover" style={styles.image}>

                   


            <View style={styles.viewTop}>

               


            </View>
            <View style={styles.viewMiddle}>

           
            <TouchableOpacity style={styles.botaoIniciar} onPress={ () => navigation.navigate('Sobre')}>
            <Text style={styles.textoBotao}>Iniciar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoCadastrar} onPress={ () => navigation.navigate('CadastrarUsuario')}>
            <Text style={styles.textoBotao}>Cadastrar</Text>
            </TouchableOpacity>


            </View>
            <View style={styles.viewBottom}>

           



            </View>

            </ImageBackground>   
       
    </View>
)
}
