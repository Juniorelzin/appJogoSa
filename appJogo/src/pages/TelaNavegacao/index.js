import React, {useRef}from "react";
import {Animated ,ImageBackground, View, Text, StyleSheet, TouchableOpacity, Image, Modal} from "react-native";
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { useRoute } from '@react-navigation/native';

let deck_esqueletos = [
    {image: require('/imagens/esqueletos/esqueleto0.jpg') ,nome: 'Skullshadow', atk: 2000, def: 2000, mag: 6, vel: 4, esp: 13},
    {image: require('/imagens/esqueletos/esqueleto1.jpg') ,nome: 'Kinigit', atk: 1800, def: 1800, mag: 4, vel: 7, esp: 12},
    {image: require('/imagens/esqueletos/esqueleto2.jpg') ,nome: 'Horghost', atk: 1900, def: 1600, mag: 6, vel: 7, esp: 13},
    {image: require('/imagens/esqueletos/esqueleto3.jpg') ,nome: 'Berserk', atk: 2000, def: 1500, mag: 3, vel: 4, esp: 14},
    {image: require('/imagens/esqueletos/esqueleto4.jpg') ,nome: 'Escorpileto', atk: 1800, def: 1700, mag: 5, vel: 3, esp: 12},
    {image: require('/imagens/esqueletos/esqueleto5.jpg') ,nome: 'Corvicrow', atk: 1700, def: 1600, mag: 5, vel: 7, esp: 12},
  ]
  let deck_magos = [
    {image: require('/imagens/magos/mago0.jpg') ,nome: 'Merlin', atk: 2100, def: 1900, mag: 8, vel: 5, esp: 14},
    {image: require('/imagens/magos/mago1.jpg') ,nome: 'Meduxa', atk: 1700, def: 2000, mag: 7, vel: 4, esp: 13},
    {image: require('/imagens/magos/mago2.jpg') ,nome: 'Epocus', atk: 1800, def: 1600, mag: 6, vel: 6, esp: 12},
    {image: require('/imagens/magos/mago3.jpg') ,nome: 'Frontiacus', atk: 1800, def: 1800, mag: 7, vel: 4, esp: 14},
    {image: require('/imagens/magos/mago4.jpg') ,nome: 'Invokyts', atk: 2000, def: 1900, mag: 7, vel: 5, esp: 13},
    {image: require('/imagens/magos/mago5.jpg') ,nome: 'Animagius', atk: 2000, def: 1800, mag: 8, vel: 4, esp: 13},
  ]
  let deck_goblins = [
    {image: require('/imagens/goblins/goblin0.jpg') ,nome: 'Zigore', atk: 2000, def: 1800, mag: 3, vel: 6, esp: 13},
    {image: require('/imagens/goblins/goblin1.jpg') ,nome: 'Archit', atk: 1800, def: 1500, mag: 3, vel: 7, esp: 11},
    {image: require('/imagens/goblins/goblin2.jpg') ,nome: 'Brutehog', atk: 2100, def: 1600, mag: 4, vel: 5, esp: 13},
    {image: require('/imagens/goblins/goblin3.jpg') ,nome: 'Sprigs', atk: 1600, def: 1600, mag: 5, vel: 6, esp: 14},
    {image: require('/imagens/goblins/goblin4.jpg') ,nome: 'Chantus', atk: 1900, def: 1700, mag: 6, vel: 4, esp: 13},
    {image: require('/imagens/goblins/goblin5.jpg') ,nome: 'Flicts', atk: 1800, def: 1600, mag: 6, vel: 7, esp: 12},
  ] 

let vetorNpcs = [
    {image: require('/imagens/imagensAssets/imagemGoblin.jpg') ,nome: 'Greenlurke', text: 'O rei dos goblins duela com um deck de goblins destrutivo', deck: deck_goblins},
    {image: require('/imagens/imagensAssets/imagemMago.jpg') ,nome: 'Magiacius', text: 'Magiacius usa poderosos magos para dizimar com sua magia', deck: deck_magos},
    {image: require('/imagens/imagensAssets/imagemEsqueleto.jpg') ,nome: 'Shadowgrim', text: 'Terror e morte é o que você pode esperar ao enfrentar Shadowgrim', deck: deck_esqueletos},  
]


export default function TelaNavegacao(){

    const[conteudoFeed, setConteudoFeed] = useState(<TelaMapa />);
    const[iconMap, setIconMap] = useState(require('/imagens/imagensAssets/iconeMap.png'));
    const[iconShop, setIconShop] = useState(require('/imagens/imagensAssets/iconeShop.png'));
    const[iconCard, setIconCard] = useState(require('/imagens/imagensAssets/iconeCard.png'));

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

        // height: 640,
        // width: 375,

        height: 676,
        width: 390,

      

    },
    imagemFundoModal:{
        height: '100%',
        width: '100%',
    },
    imagemNpcMapaGoblin: {
        height: 50,
        width: 50,
        left: 170,
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
    imagemNpcMapaMago: {
        height: 50,
        width: 50,
        left: 270,
        top: 300,
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
    imagemNpcMapaSkull: {
        height: 50,
        width: 50,
        left: 15,
        top: 140,
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
    imagemModal:{
        height: 200,
        width: 200,
        borderRadius: 10, 
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    modalView: {
        height: '95%',
        width: '95%',
        backgroundColor: 'white',
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
      modalViewTop: {
        height: '10%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
       
      },
      modalViewMiddle: {
        height: '70%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
       
      },
      modalViewMiddleTop: {
        height: '50%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
       
      },
      modalViewMiddleBottom: {
        height: '50%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
     
      },
      modalViewMiddleBottomText1:{
        height: '20%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        

      },
      modalViewMiddleBottomText2:{
        height: '80%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
       

      },
      modalViewBottom: {
        height: '20%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        
      },
      BotaoBatalharModal:{
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
        padding: 5,
        margin: 5,
        

      },
      textoBotaoBatalharModal:{
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontFamily: 'Fredericka the Great Regular',
        fontSize: 20,

      },
      BotaoFecharModal: {
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
        padding: 5,
        margin: 5,
        
      },
      textoBotaoFecharModal: {
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontFamily: 'Fredericka the Great Regular',
        fontSize: 20,
      },
      textoModalH1: {
        fontSize: 25,
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Fredericka the Great Regular',
      },
      textoModalNome: {
        fontSize: 25,
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Fredericka the Great Regular',
      },


 
 
});


function TelaMapa(){

const navigation = useNavigation();

const route = useRoute();
const userDeck = route.params.userDeck;
const userName = route.params.userName;


const [modalVisible, setModalVisible] = useState(false);
const [modalConteudo, setModalConteudo] = useState('');
const [textoBatalhaNumeral, setTextoBatalhaNumeral] = useState('');


const imageMapa = require('/imagens/imagensAssets/imagemMapa.png')
const imageFundoModal = require('/imagens/imagensAssets/fundo_modal.jpg')
const logo = require('/imagens/imagensAssets/logo_sfundo.png')

const[imagemGoblin, setImagemGoblin] = useState(require('/imagens/imagensAssets/imagemGoblin.jpg'));

return(
    <View style={styles.container}>

            <ImageBackground source={imageMapa} resizeMode="cover" style={styles.imagemMapa}>

                    <TouchableOpacity activeOpacity={ 0.7 } onPress={() => batalha1()}>
                        <Image style={styles.imagemNpcMapaGoblin}source={vetorNpcs[0].image}/>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={ 0.7 } onPress={() => batalha2()}>
                        <Image style={styles.imagemNpcMapaMago}source={vetorNpcs[1].image}/>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={ 0.7 } onPress={() => batalha3()}>
                        <Image style={styles.imagemNpcMapaSkull}source={vetorNpcs[2].image}/>
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
                            <ImageBackground source={imageFundoModal} resizeMode="cover" style={styles.imagemFundoModal}>
                                <View style={styles.modalViewTop}>
                                    <Text style={styles.textoModalH1}>{textoBatalhaNumeral}</Text>
                                </View>

                                <View style={styles.modalViewMiddle}>
                                    <View style={styles.modalViewMiddleTop}>

                                    <Image style={styles.imagemModal}source={modalConteudo.image}/>

                                    </View>
                                    <View style={styles.modalViewMiddleBottom}>

                                        <View style={styles.modalViewMiddleBottomText1}>
                                            <Text style={styles.textoModalNome}>{modalConteudo.nome}</Text>
                                        </View>
                                        <View style={styles.modalViewMiddleBottomText2}>
                                            <Text style={styles.textoModalNome}>{modalConteudo.text}</Text>
                                        </View>
                                        
                                    </View>
                                   
                                </View>

                                <View style={styles.modalViewBottom}>

                                    <TouchableOpacity
                                        style={[styles.BotaoBatalharModal]}
                                        onPressIn={() => navigation.navigate('TelaBatalha', { userDeck: userDeck, userName: userName, npcDeck: modalConteudo.deck, npcName: modalConteudo.nome })}
                                        onPressOut={() => setModalVisible(!modalVisible)}>
                                        <Text style={styles.textoBotaoBatalharModal}>Batalhar</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={[styles.BotaoFecharModal]}
                                        onPress={() => setModalVisible(!modalVisible)}>
                                        <Text style={styles.textoBotaoFecharModal}>Fechar</Text>
                                    </TouchableOpacity>
                                
                                </View>
                            </ImageBackground>
                            </View>
                        </View>
                    </Modal>
     
            </View>
               
               
       
    </View>

    
)

function batalha1(){
    setTextoBatalhaNumeral('Batalha 1')
    setModalConteudo(vetorNpcs[0])
    setModalVisible(true)
}
function batalha2(){
    setTextoBatalhaNumeral('Batalha 2')
    setModalConteudo(vetorNpcs[1])
    setModalVisible(true)
}
function batalha3(){
    setTextoBatalhaNumeral('Batalha 3')
    setModalConteudo(vetorNpcs[2])
    setModalVisible(true)
}


}