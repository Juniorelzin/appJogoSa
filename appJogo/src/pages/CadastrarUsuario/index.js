import React from "react";
import { ImageBackground,View, Text, StyleSheet, TouchableOpacity, TextInput} from "react-native";
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";
import Checkbox from 'expo-checkbox';

export default function CadastrarUsuario(){

    const image = require('/imagens/gifChamas.gif')
    const [isChecked, setChecked] = useState(false);
    let inputName
    let inputEmail

   
    return(
        <View style={styles.container}>

        <ImageBackground source={image} resizeMode="cover" style={styles.image}>

        <View style={styles.viewTop}>

        <Text style={styles.textoH1}>Bem vindo novo jogador</Text>


        </View>
        <View style={styles.viewMiddle}>

        <Text style={styles.textoNome}>Escolha um nome de usuário:</Text>
        <View>
        <Text style={{color: '#ff0000'}}></Text>
        </View>
        <TextInput

            multiline= {false}
            style={styles.input}
            value={inputName}
           />

        <Text style={styles.textoEmail}>Digite seu Email:</Text>
        <View>
        <Text style={{color: '#ff0000'}}></Text>
        </View>
        <TextInput

            multiline= {false}
            style={styles.input}
            value={inputEmail}
           />

        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#000000' : undefined}
        /> 


        </View>
        
        <View style={styles.viewBottom}>



        </View>

        </ImageBackground>   
   
</View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
    },
    viewTop:{
        height: '30%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    viewMiddle:{
        height: '35%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    viewBottom:{
        height: '35%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    textoH1:{
        color: '#ffffff',
        fontSize: 25,
        

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
    input:{
        height: '15%',
        width: '50%',
        backgroundColor: '#ffffff',
        borderRadius: 25,
        marginBottom: 30,
        paddingLeft: 10,


    },
})