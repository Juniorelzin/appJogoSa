import React, {useRef}from "react";
import {Animated ,ImageBackground, View, Text, StyleSheet, TouchableOpacity, Image, Modal} from "react-native";
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { useRoute } from '@react-navigation/native';




export default function TelaNavegacao(){

    const[conteudoFeed, setConteudoFeed] = useState(<TelaMapa />);
    const[iconMap, setIconMap] = useState(require('/imagens/iconeMap.png'));
    const[iconShop, setIconShop] = useState(require('/imagens/iconeShop.png'));
    const[iconCard, setIconCard] = useState(require('/imagens/iconeCard.png'));

    return(
        <View style={styles.container}>

            <View style={styles.header}>

          
            </View>

       
            <View style={styles.conteudo}>
                    <ScrollView>
                     {conteudoFeed}
                     </ScrollView>

            </View>


            <View style={styles.footer}>            
           
            <TouchableOpacity >

                <Image style={styles.iconsFooter}source={iconShop}/>

            </TouchableOpacity>

            <TouchableOpacity >

            <Image style={styles.iconsFooter}source={iconMap}/>

            </TouchableOpacity>

            <TouchableOpacity >

            <Image style={styles.iconsFooter}source={iconCard}/>

            </TouchableOpacity>
           
       

            </View>
       
        
          
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
    header:{
        height: '10%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000'
        
    },
    conteudo:{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        
    },  
    footer:{
        height: '10%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#000000',
        
    },
    iconsFooter:{
        height: 60,
        width: 60,
         
    },
    imagemMapa:{
        height: 600,
        width: 400,
    },
    imagemNpcMapa: {
        height: 50,
        width: 50,
        left: 180,
        top: 450,
        borderRadius: 10,  
        shadowColor: '#171717',
        shadowOffset: {
        width: 3,
        height: 5,
      },
      shadowOpacity: 0.3,
      shadowRadius: 3,
      elevation: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20, 
       
    },
    modalView: {
        height: '90%',
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      BotaoFecharModal: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: '#000000',
      },
      textoBotaoFecharModal: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      textoModal: {
        marginBottom: 15,
        textAlign: 'center',
      },


 
 
});


function TelaMapa(){
const navigation = useNavigation();
const [modalVisible, setModalVisible] = useState(false);
const image = require('/imagens/imagemMapa.png')
const logo = require('/imagens/logo_sfundo.png')

const[imagemGoblin, setImagemGoblin] = useState(require('/imagens/imagemGoblin.jpg'));

return(
    <View style={styles.container}>

            <ImageBackground source={image} resizeMode="cover" style={styles.imagemMapa}>

                    <TouchableOpacity activeOpacity={ 0.7 } onPress={() => setModalVisible(true)}>
                        <Image style={styles.imagemNpcMapa}source={imagemGoblin}/>
                    </TouchableOpacity>

            </ImageBackground>

            <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {setModalVisible(!modalVisible);
                    }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.textoModal}>Batalha 1</Text>
                                    <TouchableOpacity
                                        style={[styles.BotaoFecharModal]}
                                        onPress={() => setModalVisible(!modalVisible)}>
                                        <Text style={styles.textoBotaoFecharModal}>Fechar</Text>
                                    </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
     
            </View>
               
               
       
    </View>

    
)
}