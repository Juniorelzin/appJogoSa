import React, {useRef}from "react";
import {Animated ,ImageBackground, View, Text, StyleSheet, TouchableOpacity, Image, Modal} from "react-native";
import {useState, useEffect} from 'react';
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import server from '../servidor/index.js'

let deck_esqueletos = [
  {image: require('../../../assets/imagens/esqueletos/esqueleto0.jpg') ,nome: 'Skullshadow', atk: 2000, def: 2000, mag: 6, vel: 4, esp: 13},
  {image: require('../../../assets/imagens/esqueletos/esqueleto1.jpg') ,nome: 'Kinigit', atk: 1800, def: 1800, mag: 4, vel: 7, esp: 12},
  {image: require('../../../assets/imagens/esqueletos/esqueleto2.jpg') ,nome: 'Horghost', atk: 1900, def: 1600, mag: 6, vel: 7, esp: 13},
  {image: require('../../../assets/imagens/esqueletos/esqueleto3.jpg') ,nome: 'Berserk', atk: 2000, def: 1500, mag: 3, vel: 4, esp: 14},
  {image: require('../../../assets/imagens/esqueletos/esqueleto4.jpg') ,nome: 'Escorpileto', atk: 1800, def: 1700, mag: 5, vel: 3, esp: 12},
  {image: require('../../../assets/imagens/esqueletos/esqueleto5.jpg') ,nome: 'Corvicrow', atk: 1700, def: 1600, mag: 5, vel: 7, esp: 12},
]
let deck_magos = [
  {image: require('../../../assets/imagens/magos/mago0.jpg') ,nome: 'Merlin', atk: 2100, def: 1900, mag: 8, vel: 5, esp: 14},
  {image: require('../../../assets/imagens/magos/mago1.jpg') ,nome: 'Meduxa', atk: 1700, def: 2000, mag: 7, vel: 4, esp: 13},
  {image: require('../../../assets/imagens/magos/mago2.jpg') ,nome: 'Epocus', atk: 1800, def: 1600, mag: 6, vel: 6, esp: 12},
  {image: require('../../../assets/imagens/magos/mago3.jpg') ,nome: 'Frontiacus', atk: 1800, def: 1800, mag: 7, vel: 4, esp: 14},
  {image: require('../../../assets/imagens/magos/mago4.jpg') ,nome: 'Invokyts', atk: 2000, def: 1900, mag: 7, vel: 5, esp: 13},
  {image: require('../../../assets/imagens/magos/mago5.jpg') ,nome: 'Animagius', atk: 2000, def: 1800, mag: 8, vel: 4, esp: 13},
]
let deck_goblins = [
  {image: require('../../../assets/imagens/goblins/goblin0.jpg') ,nome: 'Zigore', atk: 2000, def: 1800, mag: 3, vel: 6, esp: 13},
  {image: require('../../../assets/imagens/goblins/goblin1.jpg') ,nome: 'Archit', atk: 1800, def: 1500, mag: 3, vel: 7, esp: 11},
  {image: require('../../../assets/imagens/goblins/goblin2.jpg') ,nome: 'Brutehog', atk: 2100, def: 1600, mag: 4, vel: 5, esp: 13},
  {image: require('../../../assets/imagens/goblins/goblin3.jpg') ,nome: 'Sprigs', atk: 1600, def: 1600, mag: 5, vel: 6, esp: 14},
  {image: require('../../../assets/imagens/goblins/goblin4.jpg') ,nome: 'Chantus', atk: 1900, def: 1700, mag: 6, vel: 4, esp: 13},
  {image: require('../../../assets/imagens/goblins/goblin5.jpg') ,nome: 'Flicts', atk: 1800, def: 1600, mag: 6, vel: 7, esp: 12},
] 

  




export default function IniciarJogo(){

    const[conteudoFeed, setConteudoFeed] = useState(<Conteudo />);
    const fadeAnim = useRef(new Animated.Value(0)).current

    const fadeIn = () => {
      
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }).start();
    };
  
   
    return(
        <Animated.View style={[
          styles.container,
          {
           
            opacity: fadeAnim,
          },
        ]}>


       
        {conteudoFeed}
        {fadeIn()}
          
        </Animated.View>
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
    image: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
    },
    viewTop:{
        height: '20%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    viewMiddle:{
        height: '40%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'end',

    },
    viewBottom:{
        height: '40%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    h1Text:{
        color: '#ffffff',
        fontSize: 40,
        marginTop: 10,
        fontFamily: 'Fredericka-the-Great',
      
    },
    txtText:{
        color: '#ffffff',
        fontSize: 19,
        marginTop: 10,
        fontFamily: 'Fredericka-the-Great',
        
    },
    deckStart:{
        height: 230,
        width: 150


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
    button: {
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
      margin: 7,
      shadowRadius: 3,
    },
    buttonEscolher: {
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
    buttonClose: {
        backgroundColor: '#ffffff',
    },
    fundoModal:{
        height: '100%',
        width: '100%',
        borderRadius: 20,  
        justifyContent: 'center',

    },
    viewImage: {
      height: 100,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center'

    },
    imageModal: {
        height: 120,
        width: 90


    },
    viewText: {
      height: 100,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center'


    },
    viewText2: {
      height: 100,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center'


    },
    modalViewCore:{
      height: '80%',
      width: '95%',
      padding: 5,
      margin: 10,
      justifyContent: 'space-evenly',
       


    },
    textStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      fontFamily: 'Fredericka-the-Great',
      fontSize: 20,
    },
    modalText: {
        fontSize: 15,
        // marginBottom: 15,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Fredericka-the-Great',
    },
    textStyleEscolher:{
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      fontFamily: 'Fredericka-the-Great',
      fontSize: 20,

    },
    viewIcon: {
      height: '20%',
      width: '60%',
      flexDirection: 'row',
      marginBottom: 10,
      justifyContent: 'space-between',
    

    },
    iconStats:{
      height: 20,
      width: 20

    },
    viewButton:{
      height: '20%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    }

})

function Conteudo(){
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState()
    const image = require('../../../assets/imagens/imagensAssets/gifChamas.gif')
    const starterDeck1 = require('../../../assets/imagens/imagensAssets/deck_Abertura1.png')
    const starterDeck2 = require('../../../assets/imagens/imagensAssets/deck_Abertura2.png')
    const starterDeck3 = require('../../../assets/imagens/imagensAssets/deck_Abertura3.png')
    const route = useRoute();

    const [jogadorDados, setJogadorDados] = useState('')
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const storedData = await AsyncStorage.getItem('dadosJogador');
          if (storedData) {
            const parsedData = JSON.parse(storedData);
            setJogadorDados(parsedData);
            console.log(parsedData)
            console.log('ola')
          }else{
            console.log('oi')
          }
        } catch (error) {
          console.error('Erro ao obter dados do AsyncStorage:', error);
          console.log('merda')
        }
      };
  
      fetchData();
    }, []); 
  
    let nomejogador = jogadorDados.userName
    let userDeck
    const [dadosCarregados, setDadosCarregados] = useState(true);
   

    const [imageIconAtk, setimageIconAtk] = useState(require('../../../assets/imagens/imagensAssets/iconAtk.png'))
    const [imageIconDef, setimageIconDef] = useState(require('../../../assets/imagens/imagensAssets/iconDef.png'))
    const [imageIconMag, setimageIconMag] = useState(require('../../../assets/imagens/imagensAssets/iconMag.png'))
    const [imageIconVel, setimageIconVel] = useState(require('../../../assets/imagens/imagensAssets/iconVel.png'))
    const [imageIconEsp, setimageIconEsp] = useState(require('../../../assets/imagens/imagensAssets/iconEsp.png'))


      

      function escolherDeck() {
        if (!dadosCarregados) {
          console.log("Aguarde até que os dados sejam carregados.");
          return;
        }
    
     
        userDeck = modalContent;
 
    
        atualizarJogador();
    
        setModalVisible(false);
      }
    
      const atualizarJogador = async () => {
        try {
          const data = await server.post('/user/update/deck', {
            name: nomejogador,
            // newDeck:userDeck,
          });
    
          if (data.status === 200) {
            console.log("Jogador atualizado com sucesso!");
            let jogador = [{
              userName: nomejogador,
              userDeck: userDeck,
              inventory: ''
          }]
            AsyncStorage.setItem("dadosJogador", JSON.stringify(jogador))
            navigation.navigate('TelaNavegacao')
          } else {
            console.log(data);
          }
        } catch (err) {
          console.error(err);
        }
      };
    
      const handlePressOut = () => {
        setModalVisible(false);
      };
    
      const handleStarterDeck1Press = () => {
        setModalContent(deck_esqueletos);
        setModalVisible(true);
      };
      const handleStarterDeck2Press = () => {
        setModalContent(deck_magos);
        setModalVisible(true);
      };
      const handleStarterDeck3Press = () => {
        setModalContent(deck_goblins);
        setModalVisible(true);
      };
    
    
      return (
        <View style={styles.container}>
          <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <View style={styles.viewTop}>
              <Text style={styles.h1Text}>Olá {nomejogador}</Text>
              <Text style={styles.txtText}>Escolha um deck inicial para começar:</Text>
            </View>
    
          
           
    
            <View style={styles.viewMiddle}>
              <TouchableOpacity onPress={handleStarterDeck1Press}>
                <Image style={styles.deckStart} source={starterDeck1} />
              </TouchableOpacity>
             
            </View>
    

            <View style={styles.viewBottom}>
              <TouchableOpacity onPress={handleStarterDeck2Press}>
                <Image style={styles.deckStart} source={starterDeck2} />
              </TouchableOpacity>

              <TouchableOpacity onPress={handleStarterDeck3Press}>
                <Image style={styles.deckStart} source={starterDeck3} />
              </TouchableOpacity>
            
            </View>



            <View style={styles.centeredView}>
            
              <Modal
                style={styles.centeredView}
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handlePressOut}
              >
                
                <View style={styles.centeredView}>
                
                  <View style={styles.modalView}>
                  <ImageBackground source={require('../../../assets/imagens/imagensAssets/fundo_modal.jpg')} resizeMode="cover" style={styles.fundoModal}>
                  
                    <View style={styles.modalViewCore}>
                    <ScrollView>
                   
                    {modalContent && Array.isArray(modalContent) ? (
                      modalContent.map((conteudo, index) => (
                        
                        <View key={index} style={{height: 200, flexDirection: 'row', justifyContent: 'space-evenly', padding:30}}>
                          
                          
                          <View style={styles.viewImage}> 
                            <Image style={styles.imageModal}source={conteudo.image}/>
                          </View>

                          <View style={styles.viewText}> 
                            <Text style={styles.modalText}>{conteudo.nome}</Text>
                          </View>

                          <View style={styles.viewText2}>

                            <View style={styles.viewIcon}>

                               <Image style={styles.iconStats}source={imageIconAtk}/>
                               <Text style={styles.modalText}>{conteudo.atk}</Text>
                               
                            </View>

                             <View style={styles.viewIcon}>

                               <Image style={styles.iconStats}source={imageIconDef}/>
                               <Text style={styles.modalText}>{conteudo.def}</Text>
                               
                            </View>

                             <View style={styles.viewIcon}>

                               <Image style={styles.iconStats}source={imageIconMag}/>
                               <Text style={styles.modalText}>{conteudo.mag}</Text>
                               
                            </View>

                             <View style={styles.viewIcon}>

                               <Image style={styles.iconStats}source={imageIconVel}/>
                               <Text style={styles.modalText}>{conteudo.vel}</Text>
                               
                            </View>

                             <View style={styles.viewIcon}>

                               <Image style={styles.iconStats}source={imageIconEsp}/>
                               <Text style={styles.modalText}>{conteudo.esp}</Text>
                               
                            </View>
                                                                           


                          </View>
                          
                        </View>
                        
                      ))
                    ) : modalContent ? (
                      <View>
                        <Text style={styles.modalText}>{modalContent.nome}</Text>
                        <Text style={styles.modalText}>
                          Ataque: {modalContent.atk}, Defesa: {modalContent.def}
                        </Text>
                      </View>
                    ) : null}                 

                    </ScrollView>

                    </View>

                    <View style={styles.viewButton}>
                    <TouchableOpacity
                      style={[styles.buttonEscolher]}
                      onPress={escolherDeck}
                    >
                      <Text style={styles.textStyleEscolher}>Escolher</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[styles.button, styles.buttonClose]}
                      onPress={handlePressOut}
                    >
                      <Text style={styles.textStyle}>Fechar</Text>
                    </TouchableOpacity>
                    </View>
                    
                    </ImageBackground>
                  </View>
                 
                </View>
               
              </Modal>
              
            </View>
          </ImageBackground>
        </View>     
        
      );
    }