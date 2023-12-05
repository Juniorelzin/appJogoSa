import React from "react";
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Modal } from "react-native";
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import server from '../servidor/index.js'


export default function TelaDeLogin() {

    const [conteudoFeed, setConteudoFeed] = useState(<TelaPrincipal />);

    return (
        <View style={styles.container}>


            {conteudoFeed}


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',



    },
    image: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',

    },
    logo: {
        alignItems: 'center',
        width: 300,
        height: 300,
        objectFit: 'fill',

    },
    viewTop: {
        height: '50%',
        width: '100%',
        alignItems: 'center',



    },
    viewMiddle: {
        height: '25%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',


    },
    viewBottom: {
        height: '25%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    viewBottomTop: {
        height: '30%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    
    },
    viewBottomBottom: {
        height: '70%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      

    },
    textoNome: {
        color: '#ffffff',
        fontSize: 25,
        fontFamily: 'Cabin-Sketch-Regular',


    },
    textoSenha: {
        color: '#ffffff',
        fontSize: 25,
        fontFamily: 'Cabin-Sketch-Regular',
    },
    input: {
        height: '20%',
        width: '50%',
        backgroundColor: '#ffffff',
        borderRadius: 25,
        paddingLeft: 10,
        fontFamily: 'Fredericka-the-Great',
        marginBottom: 20,
        fontSize: 25,
        fontWeight: 'bold',

    },
    botaoLogin: {

        height: 50,
        width: 120,
        backgroundColor: '#3399cc',
        borderRadius: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#171717',
        shadowOffset: { width: 3, height: 5 },
        shadowOpacity: 0.6,
        shadowRadius: 3,
    },
    txtBtnLogin: {

        justifyContent: 'center',
        alignItems: 'center',
        textShadowColor: '#171717',
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'Fredericka-the-Great',


    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalView: {
        height: '60%',
        width: '90%',
        borderRadius:25,
        backgroundColor: 'white', 
        alignItems: 'center',
        justifyContent: 'center',
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
        marginTop: 30,
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
        overflow: 'hidden'

    },

})

function TelaPrincipal() {
    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false)
    const image = require('../../../assets/imagens/imagensAssets/gifChamas.gif')
    const logo = require('../../../assets/imagens/imagensAssets/logo_sfundo2.png')
    const [inputName, setInputName] = useState('');
    const [inputSenha, setInputSenha] = useState('');
    const [avisoErro, setAvisoErro] = useState('');

    let jogador
    const [nomeJogador, setNomeJogador] = useState('');

    

    const fazerLogin = async () => {
        try {
            const data = await server.post('/user/find', {
                name: inputName,
                password: inputSenha
            });

            if (data.status === 200) {
                console.log(data);
                jogador = data.data;
                setNomeJogador(jogador[0].name);

                if (jogador[0].name === inputName && jogador[0].password === inputSenha) {
                    setModalVisible(!modalVisible);
                } else {
                    setAvisoErro('Credenciais Inválidas');
                }
            } else {
                console.log(data);
                setAvisoErro('Credenciais Inválidas');
            }
        } catch (err) {
            console.log(err);
            setAvisoErro('Credenciais Inválidas');
        }
    };
    return (
        <View style={styles.container}>

            <ImageBackground source={image} resizeMode="cover" style={styles.image}>

                <View style={styles.viewTop}>

                    <Image style={styles.logo}
                        source={logo} />


                </View>

                <View style={styles.viewMiddle}>

                    <Text style={styles.textoNome}>Digite seu nome de usuário:</Text>

                    <TextInput

                        multiline={false}
                        style={styles.input}
                        value={inputName}
                        onChangeText={(text) => setInputName(text)}
                    />


                    <Text style={styles.textoSenha}>Digite sua senha:</Text>

                    <TextInput

                        multiline={false}
                        style={styles.input}
                        value={inputSenha}
                        secureTextEntry={true}
                        onChangeText={(text) => setInputSenha(text)}
                    />


                    <Text style={{ color: '#ff0000' }}></Text>

                </View>

                <View style={styles.viewBottom}>

                <View style={styles.viewBottomTop}>

                    <Text style={{color: '#ff0000', fontSize: 25, fontFamily: 'Fredericka-the-Great'}}>{avisoErro}</Text>

                </View>

                <View style={styles.viewBottomBottom}>
                    <TouchableOpacity style={styles.botaoLogin} onPress={fazerLogin}>
                        <Text style={styles.txtBtnLogin}>Entrar</Text>
                    </TouchableOpacity>

                </View>


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
            <               ImageBackground source={require('../../../assets/imagens/imagensAssets/fundo_modal.jpg')} resizeMode="cover" style={styles.fundoModal}>
                            <Text style={styles.modalText}>Login efetuado!</Text>
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

    function direcionarTela() {
      
        AsyncStorage.getItem("dadosJogadores").then((value) => {
            let listaJogadores = JSON.parse(value) || [];

            let jogadorExistente = listaJogadores.find(jogador => jogador.userName === nomeJogador);
      

            if (jogadorExistente) {
                AsyncStorage.setItem("dadosJogador", JSON.stringify(jogadorExistente));

                if (jogadorExistente.userDeck === '') {
             
                    navigation.navigate('IniciarJogo');
                } else {
              
                    navigation.navigate('TelaNavegacao');
                }
            } else {
                let novoJogador = {
                    userName: nomeJogador,
                    userDeck: '',
                    inventory: ''
                };

                listaJogadores.push(novoJogador);

                AsyncStorage.setItem("dadosJogadores", JSON.stringify(listaJogadores));
                AsyncStorage.setItem("dadosJogador", JSON.stringify(novoJogador));

        
                navigation.navigate('IniciarJogo');
            }

            setModalVisible(!modalVisible);
        });
    }
}



