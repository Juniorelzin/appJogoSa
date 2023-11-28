import React from "react";
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Modal} from "react-native";
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";
import Checkbox from 'expo-checkbox';

import server from '../servidor/index.js'

export default function CadastrarUsuario(){


    const[conteudoCadastro, setConteudoCadastro] = useState(<Cadastro />);

  
   
    return(
        <View style={styles.container}>

            {conteudoCadastro}
   
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    image:{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        paddingTop: '10%'
    },
    // viewTop:{
    //     height: '30%',
    //     width: '100%',
    //     alignItems: 'center',
    //     alignItems: 'center',
       

    // },
    viewMiddle:{
        height: '60%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center', 

    },
    viewBottom:{
        height: '40%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    textoH1:{
        color: '#ffffff',
        fontSize: 35,
        marginBottom: 30,
        fontFamily: 'Fredericka-the-Great',

    },
    textoNome:{
        color: '#ffffff',
        fontSize: 25,
        fontFamily: 'Cabin-Sketch-Regular',
        
        
    },
    textoEmail:{
        color: '#ffffff',
        fontSize: 25,
        fontFamily: 'Cabin-Sketch-Regular',
    },
    textoSenha:{
        color: '#ffffff',
        fontSize: 25,
        fontFamily: 'Cabin-Sketch-Regular',
    },
    input:{
        height: '7%',
        width: '70%',
        backgroundColor: '#ffffff',
        borderRadius: 25,
        paddingLeft: 10,
        fontFamily: 'Fredericka-the-Great',
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 15
        

    },
    botaoCadastrar: {

        height: 50,
        width: 120,
        backgroundColor: '#3399cc',
        borderRadius: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#171717',
        shadowOffset: {width: 3, height: 5},
        shadowOpacity: 0.6,
        shadowRadius: 3,
    },
    txtBtnCadastar: {

        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontFamily: 'Fredericka-the-Great',
        fontSize: 20,

    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth:5,
        borderColor:'red'
      },
      modalView: {
        height: '60%',
        width: '90%',
        borderRadius:25,
        backgroundColor: 'white', 
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:5,
        borderColor:'green',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      },
      button: {
        height: 50,
        width: 150,
        backgroundColor: '#3399cc',
        borderRadius: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#171717',
        shadowOffset: {width: 3, height: 5},
        shadowOpacity: 0.6,
        shadowRadius: 3,
      },
      textStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontFamily: 'Fredericka-the-Great',
        fontSize: 20,
      },
      modalText: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Fredericka-the-Great',
      },
      fundoModal:{
        height: '100%',
        width: '100%',  
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:25,
        borderWidth:5,
        borderColor:'blue',

    },
})



function Cadastro(){
    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false)

    const image = require('../../../assets/imagens/imagensAssets/gifChamas.gif') 
    const [isChecked, setChecked] = useState(false);
    const [opacityBotao, setOpacityBotao] = useState(0.5);

    const [inputName, setInputName] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputSenha, setInputSenha] = useState('')

    const mudarCheckbox = (value) => {
        setChecked(value);
        setOpacityBotao(value ? 1 : 0.5);
      };


      const cadastrar = async () => {
        try {
            const data = await server.post('/user/new', {
                name: inputName,
                email: inputEmail,
                password: inputSenha,
                
            });
            if (data.status === 200) {
                console.log(data)
                setModalVisible(!modalVisible)
                
            } else {
                console.log('200000000')
                console.log(data)
            }
        } catch (err) {
            console.log('100000000')
            console.log(err);
        }
    }

return(

        <View style={styles.container}>

        <ImageBackground source={image} resizeMode="cover" style={styles.image}>

        {/* <View style={styles.viewTop}>

        <Text style={styles.textoH1}>Cadastro de Usuário</Text>


        </View> */}
        <View style={styles.viewMiddle}>


        <Text style={styles.textoH1}>Cadastro de Usuário</Text>

        <Text style={styles.textoNome}>Escolha um nome de usuário:</Text>
        <View style={{height: '5%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: '#ff0000'}}></Text>
        </View>
        <TextInput

            multiline= {false}
            style={styles.input}
            value={inputName}
            onChangeText={(text) => setInputName(text)}
      
           />

        <Text style={styles.textoEmail}>Digite seu Email:</Text>
        <View style={{height: '5%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: '#ff0000'}}></Text>
        </View>
        <TextInput

            multiline= {false}
            style={styles.input}
            value={inputEmail}
            onChangeText={(text) => setInputEmail(text)}
         
           />
       



        <Text style={styles.textoSenha}>Digite uma senha:</Text>
        <View style={{height: '5%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: '#ff0000'}}></Text>
        </View>
        <TextInput

            multiline= {false}
            style={styles.input}
            value={inputSenha}
            secureTextEntry={true}
            onChangeText={(text) => setInputSenha(text)}
        
           />
       
      
        </View>
        
        <View style={styles.viewBottom}>

        <View style={{flexDirection: 'row', height: '15%', width: '100%', alignItems:'center', justifyContent: 'center'}}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={mudarCheckbox}
          color={isChecked ? '#3399cc' : undefined}
          
        /> 
        <Text style={{color: '#ffffff', marginLeft: 10}}>Tenho mais de 18 anos, e li os </Text>
        <TouchableOpacity onPress={ () => navigation.navigate('TermoDeUsuario')}><Text style={{color: '#3399cc'}} >Termos de usuário !</Text></TouchableOpacity>
        </View>

                    {/* {isChecked && (setOpacityBotao(1))} */}





                        <TouchableOpacity style={[styles.botaoCadastrar,{opacity: opacityBotao }]} activeOpacity={0.5} onPress={pegarInputs} disabled={!isChecked}>
                        <Text style={styles.txtBtnCadastar}>Confirmar</Text>
                        </TouchableOpacity>
                    

        {/* <TouchableOpacity style={styles.botaoCadastrar} disabled={!isChecked} activeOpacity={isChecked ? 0.5 : 1}>
            <Text style={styles.txtBtnCadastar}>Confirmar</Text>
            </TouchableOpacity> */}

        </View>

        </ImageBackground>
        
            <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
              
                setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                <ImageBackground source={require('../../../assets/imagens/imagensAssets/fundo_modal.jpg')} resizeMode="cover" style={styles.fundoModal}>
                    <Text style={styles.modalText}>Cadastro efetuado!</Text>
                <TouchableOpacity
                    style={[styles.button]}
                    onPress={direcionarTela}>
                    <Text style={styles.textStyle}>Fechar</Text>
                    </TouchableOpacity>
                </ImageBackground>
                </View>
                
                </View>
            </Modal>
            </View>   
   
</View>





)

function pegarInputs(){

    console.log(inputName)
    console.log(inputEmail)
    console.log(inputSenha)

    cadastrar()


}
function direcionarTela(){
    setModalVisible(!modalVisible)
    navigation.navigate('TelaDeLogin')

}

}