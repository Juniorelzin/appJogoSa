import React, {useRef}from "react";
import {Animated ,ImageBackground, View, Text, StyleSheet, TouchableOpacity, Image, Modal} from "react-native";
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { useRoute } from '@react-navigation/native';

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

let vetorNpcs = [
    {image: require('../../../assets/imagens/imagensAssets/imagemGoblin.jpg') ,nome: 'Greenlurke', text: 'O rei dos goblins duela com um deck de goblins destrutivo', deck: deck_goblins},
    {image: require('../../../assets/imagens/imagensAssets/imagemMago.jpg') ,nome: 'Magiacius', text: 'Magiacius usa poderosos magos para dizimar seus oponentes', deck: deck_magos},
    {image: require('../../../assets/imagens/imagensAssets/imagemEsqueleto.jpg') ,nome: 'Shadowgrim', text: 'Terror e morte é o que você pode esperar ao enfrentar Shadowgrim', deck: deck_esqueletos},  
]
let vetorFalasVendedor = [
  {fala1: 'Olá amigo', fala2: 'procurando por', fala3: 'novas cartas?'},
  {fala1: 'O que...', fala2: 'cartas fortes?', fala3: 'eu tenho!'},
  {fala1: 'Cartas novas', fala2: 'Bonitas e', fala3: 'Fortes...'},
  {fala1: 'Você não vai', fala2: 'achar cartas', fala3: 'como essas em lugar nenhum!'},  
]
let indiceFala

let jogadorLogado = 0
let userName
let userDeck
let dinheiroJogador
let inventario = [
]




export default function TelaNavegacao(){

 
    console.log(jogadorLogado)

   
    
    if(jogadorLogado == 0 ){
      const route = useRoute();
      console.log(jogadorLogado)
      jogadorLogado = []
      jogadorLogado = route.params.jogador[0]
      userDeck = jogadorLogado.deckAtual;
      userName = jogadorLogado.nome;
      dinheiroJogador = jogadorLogado.dinheiro
      jogadorLogado.batalha = false
      console.log(jogadorLogado)

    }


    const[conteudoFeed, setConteudoFeed] = useState(<TelaMapa />);
    const[iconMap, setIconMap] = useState(require('../../../assets/imagens/imagensAssets/iconeMap.png'));
    const[iconShop, setIconShop] = useState(require('../../../assets/imagens/imagensAssets/iconeShop.png'));
    const[iconCard, setIconCard] = useState(require('../../../assets/imagens/imagensAssets/iconeCard.png'));

    const[leftColor, setLeftColor] = useState('#000000');
    const[middleColor, setMiddleColor] = useState('#3399cc');
    const[rightColor, setRightColor] = useState('#000000');

    function mostrarShop(){
      setConteudoFeed(<TelaShop />)

      indiceFala = Math.floor(Math.random() * vetorFalasVendedor.length)

      setLeftColor('#3399cc')
      setMiddleColor('#000000')
      setRightColor('#000000')
    }
    function mostrarMapa(){
      setConteudoFeed(<TelaMapa />)

      setLeftColor('#000000')
      setMiddleColor('#3399cc')
      setRightColor('#000000')

    }
    function mostrarDeck(){
      setConteudoFeed(<TelaDeck />)

      setLeftColor('#000000')
      setMiddleColor('#000000')
      setRightColor('#3399cc')

    }

    return(
        <View style={styles.container}>

            <View style={styles.header}>

            <Text style={styles.textHeader}>{userName}</Text> <Text style={styles.textHeader}>$ {dinheiroJogador}</Text>

            </View>

       
            <View style={styles.conteudo}>
                   
        
                     {conteudoFeed}
                    
                  
            </View>


            <View style={styles.footer}>            

              <View style={styles.viewfooterTop}>

                <View style={[styles.viewfooterTopLeft, { backgroundColor: leftColor }]}>

                </View >
                <View style={[styles.viewfooterTopMiddle, { backgroundColor: middleColor }]}>

                </View>
                <View style={[styles.viewfooterTopRight, { backgroundColor: rightColor }]}>

                </View>

              </View>

              <View style={styles.viewfooterBottom}>
                <TouchableOpacity onPress={mostrarShop}>

                    <Image style={styles.iconsFooter}source={iconShop}/>

                </TouchableOpacity>

                <TouchableOpacity onPress={mostrarMapa}>

                    <Image style={styles.iconsFooter}source={iconMap}/>

                </TouchableOpacity>

                <TouchableOpacity onPress={mostrarDeck}>

                    <Image style={styles.iconsFooter}source={iconCard}/>

                </TouchableOpacity>
              </View>
       

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
        backgroundColor: '#000000',
        
    },
    header:{
        height: '10%',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#000000',
        flexDirection: 'row'
        
    },
    textHeader:{
      fontSize: 25,
      color: '#ffffff',
      fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: 'Fredericka-the-Great',
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        
    },
    viewfooterTop:{
      height: '5%',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff'
   
      
    },
    viewfooterTopLeft:{
      height: '100%',
      width: '33%',
    
    },
    viewfooterTopMiddle:{
      height: '100%',
      width: '34%',

  
    },
    viewfooterTopRight:{
      height: '100%',
      width: '33%',

  
    },
    viewfooterBottom:{
        height: '95%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',

    
    },
    iconsFooter:{
        height: 60,
        width: 60,
         
    },
    imagemMapa:{

        // height: 640,
        // width: 375,

        height: 676,
        width: 380,

      

    },
    imagemFundoModal:{
        height: '100%',
        width: '100%',
    },
    imagemNpcMapaGoblin: {
        height: 50,
        width: 50,
        left: 170,
        top: 500,
        borderRadius: 10,  
       
    },
    imagemNpcMapaMago: {
        height: 50,
        width: 50,
        left: 285,
        top: 325,
        borderRadius: 10,  
       
    },
    imagemNpcMapaSkull: {
        height: 50,
        width: 50,
        left: 15,
        top: 190,
        borderRadius: 10,  
      
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
        fontFamily: 'Fredericka-the-Great',
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
        fontFamily: 'Fredericka-the-Great',
        fontSize: 20,
      },
      textoModalH1: {
        fontSize: 25,
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Fredericka-the-Great',
      },
      textoModalNome: {
        fontSize: 25,
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Fredericka-the-Great',
      },
      imagemVendedor: {
        // minheight: 534,
        // minwidth: 380,
        // maxWidth: 1068,
        // maxheight: 760,
        height: 676,
        width: 380,

        objectFit: 'cover',
      },
      viewShop1: {
        height: '25%',
        width: '100%',
        borderColor: 'red',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      
 
      },
      viewShop2: {
        height: '33%',
        width: '100%',
       
      
      },
      viewShop3: {
        height: '30%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    
       
      },
      viewShop4: {
        height: '12%',
        width: '100%',
  
      
      },
      viewShop1Dialogo: {
        height: '78%',
        width: '46%',
        borderColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        left: 10,
        top: 30,

      },
      textoVendedor:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Fredericka-the-Great',
        

      },
      viewShop3Cartas: {
        height: '95%',
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        

      },
      scrollCards: {
        height: '100%',
        width: '100%',  
       
      },
      viewScrollCards: {
        height: '100%',
        width: '100%',
        marginTop: 10,
        flexDirection: 'row' ,
        justifyContent: 'space-evenly',
        alignItems: 'center',
      

      },
      stylePacks : {
        height: 150,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',

      },
      centeredViewModalShop: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    modalViewModalShop: {
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
    buttonModalShop: {
      height: 45,
      width: 110,
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
    buttonEscolherModalShop: {
        height: 45,
        width: 140,
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
    buttonCloseModalShop: {
        backgroundColor: '#ffffff',
    },
    fundoModalModalShop:{
        height: '100%',
        width: '100%',
        borderRadius: 20,  
        justifyContent: 'center',

    },
    viewImageModalShop: {
      height: 100,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center'

    },
    imageModalModalShop: {
        height: 120,
        width: 90


    },
    viewTextModalShop: {
      height: 100,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center'


    },
    viewText2ModalShop: {
      height: 100,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center'


    },
    modalViewHeaderModalShop:{
      height: '10%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
     
  },
  textH1ModalShop: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily: 'Fredericka-the-Great',
    fontSize: 23,
  },
    modalViewCoreModalShop:{
        height: '70%',
        width: '95%',
        
        justifyContent: 'space-evenly',
       
    },
    textStyleModalShop: {
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      fontFamily: 'Fredericka-the-Great',
      fontSize: 20,
    },
    modalTextModalShop: {
        fontSize: 15,
        // marginBottom: 15,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Fredericka-the-Great',
    },
    textStyleEscolherModalShop:{
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      fontFamily: 'Fredericka-the-Great',
      fontSize: 20,

    },
    viewIconModalShop: {
      height: '20%',
      width: '60%',
      flexDirection: 'row',
      marginBottom: 10,
      justifyContent: 'space-between',
    

    },
    iconStatsModalShop:{
      height: 20,
      width: 20

    },
    viewButtonModalShop:{
      height: '20%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    // containerTelaDeck: {
    //   height: 600,
    //   width: 300,
    //   justifyContent:'flex-start',
    //   backgroundColor: 'white'
      
    // },
    viewTelaDeckCima: {
      height: '50%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    
    },
    viewTelaDeckBaixo: {
      height: '50%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
     
   
    },
    viewTelaDeckCimaCima: {
      height: '20%',
      width: '90%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
  
    },
    viewTelaDeckCimaBaixo: {
      height: '80%',
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    viewTelaDeckBaixoCima: {
      height: '20%',
      width: '90%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
     
    },
    viewTelaDeckBaixoBaixo: {
      height: '80%',
      width: '100%',
      flexDirection: 'column',
      margin: 5
      
    },
    imagemDeck:{
      height: '100%',
      width: '100%',
      justifyContent: 'center',
    },
    textoTelaDeck:{
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      fontFamily: 'Fredericka-the-Great',
      fontSize: 20,
    },
    imageCartaDeck: {
      height: 90,
      width: 70,
      borderRadius: 15,

    },
    imageCartaInventario: {
      height: 80,
      width: 60,
      borderRadius: 15,
    },
    viewPrimeiraLinha: {
      height: '50%',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    },
    viewSegundaLinha: {
      height: '50%',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    },
    colunaDeck: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      margin: 10
      
    },
    centeredViewModalDeck: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,   
  },
  modalViewDeck: {
    height: '95%',
    width: '95%',
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
    
  },
  modalViewAllDeck: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
 
  },
  modalViewTextDeck: {
    height: '5%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  modalTextDeck: {
    fontSize: 25,
    marginBottom: 10,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Fredericka-the-Great',
  },
  modalViewCardDeck: {
    height: '45%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
 
  },
  imageCardImageDeck: {
    height: 200,
    width: 150,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  
  },
  textNomeCardDeck: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily: 'Fredericka-the-Great',

  },
  modalViewStatsAllDeck: {
    height: '30%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  
  },
  modalViewStats1Deck: {
    height: '100%',
    width: '50%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    
  },
  modalViewStats2Deck: {
    height: '100%',
    width: '50%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  
  },
  imageIconStats1Deck: {
    height: 40,
    width: 40,
 

  },
  imageIconStats2Deck: {
    height: 30,
    width: 30,
 

  },
  viewIconStatsDeck: {
    height: '100%',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
 
  },
  viewTextStatsDeck: {
    height: '100%',
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
 

  },
  viewIStatsAtkDeck: {
    height: '33%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
 

  },
  viewIStatsDefDeck: {
    height: '33%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',


  },
  viewIStatsMagDeck: {
    height: '33%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  

  },
  viewIStatsVelDeck: {
    height: '50%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  
  

  },
  viewIStatsEspDeck: {
    height: '50%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
   

  },
  textStyleDeck: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Fredericka-the-Great',
  },
  textStyleNumDeck: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Fredericka-the-Great',
  },
  fundoModal:{
    height: '100%',
    width: '100%',
    justifyContent: 'center',

},
fundoTextDeck:{
  height: '100%',
  width: '100%',
  borderRadius: 15,
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',

},
viewEspacamento: {
  height: '100%',
  width: '100%',
  borderRadius: 20,
  padding: 10,
  flexDirection: 'row'
},
modalViewButtonDeck: {
  height: '20%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',

},
textStyleButtonModalDeck: {
  fontSize: 20,
  color: '#000000',
  fontWeight: 'bold',
  textAlign: 'center',
  fontFamily: 'Fredericka-the-Great',

},
buttonTrocarModalDeck: {
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
buttonCancelarModalDeck: {
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
touchableShop:{
  justifyContent: 'center',
  alignItems: 'center',
},
textTouchableShop:{
  fontSize: 20,
  color: '#000000',
  fontWeight: 'bold',
  textAlign: 'center',
  fontFamily: 'Fredericka-the-Great',
},
modalViewTextAviso:{
  height: '20%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 3

},
modalViewbutton:{
  height: '80%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
} 
 
 
});


function TelaMapa(){

const navigation = useNavigation();




const [modalVisible, setModalVisible] = useState(false);
const [modalConteudo, setModalConteudo] = useState('');
const [textoBatalhaNumeral, setTextoBatalhaNumeral] = useState('');


const imageMapa = require('../../../assets/imagens/imagensAssets/imagemMapa.png')
const imageFundoModal = require('../../../assets/imagens/imagensAssets/fundo_modal.jpg')
const logo = require('../../../assets/imagens/imagensAssets/logo_sfundo.png')

const[imagemGoblin, setImagemGoblin] = useState(require('../../../assets/imagens/imagensAssets/imagemGoblin.jpg'));

return(
    <View style={styles.container}>
        <ScrollView>
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
            </ScrollView>
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
                                        onPressIn={() => navigation.navigate('TelaBatalha', { jogadorLogado: jogadorLogado, npcDeck: modalConteudo.deck, npcName: modalConteudo.nome })}
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
function TelaShop(){
  const [modalVisible, setModalVisible] = useState(false)
  const [modalContent, setModalContent] = useState()
  const [modalVisibleShop, setModalVisibleShop] = useState(false)
  const [statsCardShop, setStatsCardShop] = useState(0)
 
  const [textoVendedor1, setTextoVendedor1] = useState(vetorFalasVendedor[indiceFala].fala1);
  const [textoVendedor2, setTextoVendedor2] = useState(vetorFalasVendedor[indiceFala].fala2);
  const [textoVendedor3, setTextoVendedor3] = useState(vetorFalasVendedor[indiceFala].fala3);

  const [conteudoPack1, setConteudoPack1] = useState(deck_esqueletos);
  let imagemPack1 = require('../../../assets/imagens/imagensAssets/deck_Abertura1.png')
  let imagemPack2 = require('../../../assets/imagens/imagensAssets/deck_Abertura2.png')
  let imagemPack3 = require('../../../assets/imagens/imagensAssets/deck_Abertura3.png')

    const [imageIconAtk, setimageIconAtk] = useState(require('../../../assets/imagens/imagensAssets/iconAtk.png'))
    const [imageIconDef, setimageIconDef] = useState(require('../../../assets/imagens/imagensAssets/iconDef.png'))
    const [imageIconMag, setimageIconMag] = useState(require('../../../assets/imagens/imagensAssets/iconMag.png'))
    const [imageIconVel, setimageIconVel] = useState(require('../../../assets/imagens/imagensAssets/iconVel.png'))
    const [imageIconEsp, setimageIconEsp] = useState(require('../../../assets/imagens/imagensAssets/iconEsp.png'))

    const [avisoModal, setAvisoModal] = useState()
  

  const imageShop = require('../../../assets/imagens/imagensAssets/imagemVendedor.png')
  const imageFundoModal = ('../../../assets/imagens/imagensAssets/fundo_modal.jpg')

  const custocarta1 = 100

return(
  <View style={styles.container}>
    <ScrollView>
      <ImageBackground source={imageShop} resizeMode="cover" style={styles.imagemVendedor}>

      

          <View style={styles.viewShop1}>
              <View style={styles.viewShop1Dialogo}>

                      <Text style={styles.textoVendedor}>{textoVendedor1}</Text>
                      <Text style={styles.textoVendedor}>{textoVendedor2}</Text>
                      <Text style={styles.textoVendedor}>{textoVendedor3}</Text>

              </View>
          </View >

          <View style={styles.viewShop2}>
          </View>

          <View style={styles.viewShop3}> 
              <View style={styles.viewShop3Cartas}>
                    <ScrollView style={styles.scrollCards}>
                        <View style={styles.viewScrollCards}>
                         
                          <TouchableOpacity activeOpacity={ 0.7 } onPress={() => abrirPack1()} style={styles.touchableShop}>
                              <Image style={styles.stylePacks} source={imagemPack1} />
                              <Text style={styles.textTouchableShop}>$ {custocarta1}</Text>
                          </TouchableOpacity>

                          <TouchableOpacity activeOpacity={ 0.7 } onPress={() => abrirPack2()} style={styles.touchableShop}>
                              <Image style={styles.stylePacks} source={imagemPack2} />
                              <Text style={styles.textTouchableShop}>$ {custocarta1}</Text>
                          </TouchableOpacity>

                          <TouchableOpacity activeOpacity={ 0.7 } onPress={() => abrirPack3()} style={styles.touchableShop}>
                              <Image style={styles.stylePacks} source={imagemPack3} />
                              <Text style={styles.textTouchableShop}>$ {custocarta1}</Text>
                          </TouchableOpacity>
                   

                        </View>
                    </ScrollView>
              </View>
          </View>

          <View style={styles.viewShop4}>           
          </View>
          
      </ImageBackground>
      </ScrollView>



      <View style={styles.centeredViewModalShop}>
            
            <Modal
              style={styles.centeredViewModalShop}
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose = {() => {setModalVisible(!modalVisible);
              }}
            >
              
              <View style={styles.centeredViewModalShop}>
              
                <View style={styles.modalViewModalShop}>
                <ImageBackground source={require('../../../assets/imagens/imagensAssets/fundo_modal.jpg')} resizeMode="cover" style={styles.fundoModalModalShop}>
                
                  <View style={styles.modalViewHeaderModalShop}>

                      <Text style={styles.textH1ModalShop}>Cartas que você pode receber:</Text>

                  </View>
                  <View style={styles.modalViewCoreModalShop}>
                  <ScrollView>
                 
                  {modalContent && Array.isArray(modalContent) ? (
                    modalContent.map((conteudo, index) => (
                      
                      <View key={index} style={{height: 200, flexDirection: 'row', justifyContent: 'space-evenly', padding:30}}>
                        
                        
                        <View style={styles.viewImageModalShop}> 
                          <Image style={styles.imageModalModalShop}source={conteudo.image}/>
                        </View>

                        <View style={styles.viewTextModalShop}> 
                          <Text style={styles.modalTextModalShop}>{conteudo.nome}</Text>
                        </View>

                        <View style={styles.viewText2ModalShop}>

                          <View style={styles.viewIconModalShop}>

                             <Image style={styles.iconStatsModalShop}source={imageIconAtk}/>
                             <Text style={styles.modalTextModalShop}>{conteudo.atk}</Text>
                             
                          </View>

                           <View style={styles.viewIconModalShop}>

                             <Image style={styles.iconStatsModalShop}source={imageIconDef}/>
                             <Text style={styles.modalTextModalShop}>{conteudo.def}</Text>
                             
                          </View>

                           <View style={styles.viewIconModalShop}>

                             <Image style={styles.iconStatsModalShop}source={imageIconMag}/>
                             <Text style={styles.modalTextModalShop}>{conteudo.mag}</Text>
                             
                          </View>

                           <View style={styles.viewIconModalShop}>

                             <Image style={styles.iconStatsModalShop}source={imageIconVel}/>
                             <Text style={styles.modalTextModalShop}>{conteudo.vel}</Text>
                             
                          </View>

                           <View style={styles.viewIconModalShop}>

                             <Image style={styles.iconStatsModalShop}source={imageIconEsp}/>
                             <Text style={styles.modalTextModalShop}>{conteudo.esp}</Text>
                             
                          </View>
                                                                         


                        </View>
                        
                      </View>
                      
                    ))
                  ) : modalContent ? (
                    <View>
                      <Text style={styles.modalTextModalShop}>{modalContent.nome}</Text>
                      <Text style={styles.modalTextModalShop}>
                        Ataque: {modalContent.atk}, Defesa: {modalContent.def}
                      </Text>
                    </View>
                  ) : null}

                  

                  </ScrollView>
                  </View>

                  <View style={styles.viewButtonModalShop}>
                    <View style={styles.modalViewTextAviso}>

                        <Text style={{color: '#ff0000', fontFamily: 'Fredericka-the-Great', fontSize: 20,  fontWeight: 'bold',}}>{avisoModal}</Text>

                    </View>
                      <View style={styles.modalViewbutton}>


                        <TouchableOpacity
                          style={[styles.buttonEscolherModalShop]}
                          onPress={verificarCompra}
                   
                        >
                          <Text style={styles.textStyleEscolherModalShop}>Comprar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={[styles.buttonModalShop, styles.buttonCloseModalShop]}
                          onPress={fecharModal}
                        >
                          <Text style={styles.textStyleModalShop}>Fechar</Text>
                        </TouchableOpacity>

                        </View>

                      </View>
                  
                  </ImageBackground>
                </View>
               
              </View>
             
            </Modal>
            
          </View>

          <View style={styles.centeredViewModalDeck}>
        
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisibleShop}
            onRequestClose={() => {
              setModalVisibleShop(!modalVisibleShop);
            }}>
        <View style={styles.centeredViewModalDeck}>
            <View style={styles.modalViewDeck}>
            <ImageBackground source={require('../../../assets/imagens/imagensAssets/fundo_modal.jpg')} resizeMode="cover" style={styles.fundoModal}>
                

                <View style={styles.modalViewAllDeck}>

                  <View style={styles.modalViewTextDeck}>

                      <Text style={styles.modalTextDeck}>Você ganhou: </Text>

                  </View>

                  <View style={styles.modalViewCardDeck}>

                      <Image style={styles.imageCardImageDeck} source={statsCardShop.image}/>
                      <Text style={styles.textNomeCardDeck}>{statsCardShop.nome}</Text>

                  </View>

                  <View style={styles.modalViewStatsAllDeck}>

                  <View style={styles.modalViewStats1Deck}>


                      <View style={styles.viewIStatsAtkDeck}>
                     
                       <View  style={styles.viewEspacamento}>
                          <View style={styles.viewIconStatsDeck}>
                          <Image style={styles.imageIconStats1Deck}source={imageIconAtk}/>
                          </View>
                          <View style={styles.viewTextStatsDeck}>
                        <Text style={styles.textStyleDeck}>ATAQUE</Text>
                        <Text style={styles.textStyleNumDeck}>{statsCardShop.atk}</Text>
                         </View>
                         </View>
                    </View>

                    

                      <View style={styles.viewIStatsDefDeck}>
                      
                      <View  style={styles.viewEspacamento}>
                          <View style={styles.viewIconStatsDeck}>
                          <Image style={styles.imageIconStats1Deck}source={imageIconDef}/>
                          </View>
                          <View style={styles.viewTextStatsDeck}>
                        <Text style={styles.textStyleDeck}>DEFESA</Text>
                        <Text style={styles.textStyleNumDeck}>{statsCardShop.def}</Text>
                         </View>
                         </View>
                    </View>



                    <View style={styles.viewIStatsMagDeck}>
                     
                    <View  style={styles.viewEspacamento}>
                          <View style={styles.viewIconStatsDeck}>
                          <Image style={styles.imageIconStats1Deck}source={imageIconMag}/>
                          </View>
                          <View style={styles.viewTextStatsDeck}>
                        <Text style={styles.textStyleDeck}>MAGIA</Text>
                        <Text style={styles.textStyleNumDeck}>{statsCardShop.mag}</Text>
                         </View>
                         </View>
                    </View>


                  </View>

                  <View style={styles.modalViewStats2Deck}>

                    <View style={styles.viewIStatsVelDeck}>
                    
                    <View  style={styles.viewEspacamento}>
                          <View style={styles.viewIconStatsDeck}>
                          <Image style={styles.imageIconStats2Deck}source={imageIconVel}/>
                          </View>
                          <View style={styles.viewTextStatsDeck}>
                        <Text style={styles.textStyleDeck}>VELOCIDADE</Text>
                        <Text style={styles.textStyleNumDeck}>{statsCardShop.vel}</Text>
                         </View>
                         </View>
                    </View>



                    <View style={styles.viewIStatsEspDeck}>
                   
                    <View  style={styles.viewEspacamento}>
                          <View style={styles.viewIconStatsDeck}>
                          <Image style={styles.imageIconStats2Deck}source={imageIconEsp}/>
                          </View>
                          <View style={styles.viewTextStatsDeck}>
                        <Text style={styles.textStyleDeck}>ESPECIAL</Text>
                        <Text style={styles.textStyleNumDeck}>{statsCardShop.esp}</Text>
                         </View>
                         </View>
                    </View>

                  </View>

                  </View>

                  <View style={styles.modalViewButtonDeck}>


                  <View style={styles.modalViewTextAviso}>
                  
                  </View>
                  <View style={styles.modalViewbutton}>

                      <TouchableOpacity
                        style={[styles.buttonCancelarModalDeck]}
                        onPress={() => setModalVisibleShop(!modalVisibleShop)}>
                        <Text style={styles.textStyleButtonModalDeck}>Fechar</Text>
                      </TouchableOpacity>
                      </View>
                  </View>    

                </View>
              </ImageBackground>
            </View>
        </View>
        </Modal>
    </View>

          

  </View>     

)

function fecharModal(){
  setModalVisible(!modalVisible)
  setAvisoModal('')

}
function abrirPack1(){
  setModalContent(deck_esqueletos);
  setModalVisible(true)

}
function abrirPack2(){
  setModalContent(deck_magos);
  setModalVisible(true)

}
function abrirPack3(){
  setModalContent(deck_goblins);
  setModalVisible(true)

}
function verificarCompra(){
  if(dinheiroJogador < custocarta1){

      setAvisoModal('Dinheiro insuficiente')
      console.log(dinheiroJogador)
  }else{


        dinheiroJogador = dinheiroJogador - custocarta1
        console.log(dinheiroJogador)
      const sortearItem = () => {
      const indiceAleatorio = Math.floor(Math.random() * modalContent.length);
      return modalContent[indiceAleatorio];
    };
      const itemSorteado = sortearItem();
      console.log('Item sorteado:', itemSorteado);
      inventario.push(itemSorteado)
      setStatsCardShop(itemSorteado)
      setModalVisibleShop(!modalVisibleShop)
      setModalVisible(!modalVisible)

  }
}

}

function TelaDeck(){

  const [modalVisibleDeck, setModalVisibleDeck] = useState(false);
  const [statsCardDeck, setStatsCardDeck] = useState(0);

  const [textoBtnTrocarCarta, setTextoBtnTrocarCarta] = useState()
  const [textoMaisCartas, setTextoMaisCartas] = useState()
  
  



  const [imageIconAtk, setimageIconAtk] = useState(require('../../../assets/imagens/imagensAssets/iconAtk.png'))
  const [imageIconDef, setimageIconDef] = useState(require('../../../assets/imagens/imagensAssets/iconDef.png'))
  const [imageIconMag, setimageIconMag] = useState(require('../../../assets/imagens/imagensAssets/iconMag.png'))
  const [imageIconVel, setimageIconVel] = useState(require('../../../assets/imagens/imagensAssets/iconVel.png'))
  const [imageIconEsp, setimageIconEsp] = useState(require('../../../assets/imagens/imagensAssets/iconEsp.png'))

  const meio = Math.ceil(userDeck.length / 2);
  const primeiraLinha = userDeck.slice(0, meio);
  const segundaLinha = userDeck.slice(meio);

  const objetosPorLinha = 5;
  const numeroDeColunas = Math.ceil(inventario.length / objetosPorLinha);
  const colunas = Array.from({ length: numeroDeColunas }, (_, index) =>
  inventario.slice(index * objetosPorLinha, (index + 1) * objetosPorLinha)
  );

  return(
    <View style = {styles.container}>
      <ImageBackground source={require('../../../assets/imagens/imagensAssets/fundo_modal.jpg')} resizeMode="cover" style={styles.fundoModal}>
        {/* <View style = {styles.containerTelaDeck}> */}
      
            <View style = {styles.viewTelaDeckCima}>

                <View style = {styles.viewTelaDeckCimaCima}>
                <ImageBackground source={require('../../../assets/imagens/imagensAssets/fundoPergaminho.png')} resizeMode="cover" style={styles.fundoTextDeck}>
                
                        <Text style = {styles.textoTelaDeck}>Seu Deck Atual:</Text>

                </ImageBackground>        
                </View>
                <View style = {styles.viewTelaDeckCimaBaixo}>
                

                    <View style = {styles.viewPrimeiraLinha}>

                            {primeiraLinha.map((carta, index) => (
                              <View  style = {styles.viewCartaDeck} key={index}>

                                  <TouchableOpacity onPress={() => abrirModalDeck(carta)}>
                                  <Image style={styles.imageCartaDeck}source={carta.image}/>
                                  </TouchableOpacity>

                              </View>
                            ))}

                    </View>

                    <View style = {styles.viewSegundaLinha}>

                            {segundaLinha.map((carta, index) => (
                              <View  style = {styles.viewCartaDeck} key={index}>

                                  <TouchableOpacity onPress={() => abrirModalDeck(carta)}>
                                  <Image style={styles.imageCartaDeck}source={carta.image}/>
                                  </TouchableOpacity>
    
                              </View>
                            ))}

                    </View>

                  
                </View>

            </View>

        
            <View style = {styles.viewTelaDeckBaixo}>

                <View style = {styles.viewTelaDeckBaixoCima}>
                <ImageBackground source={require('../../../assets/imagens/imagensAssets/fundoPergaminho.png')} resizeMode="cover" style={styles.fundoTextDeck}>

                          <Text style = {styles.textoTelaDeck}>Seu Inventário:</Text>

                </ImageBackground>          
                </View>
                <View style = {styles.viewTelaDeckBaixoBaixo}>
            
                    <ScrollView>
                    
                      {colunas.map((coluna, colunaIndex) => (
                      <View key={colunaIndex} style={styles.colunaDeck}>
                      {coluna.map((carta, cartaIndex) => (
                      <View key={cartaIndex}>

                      <TouchableOpacity onPress={() => abrirModalInventario(carta)}>
                      <Image style={styles.imageCartaInventario}source={carta.image}/>
                      </TouchableOpacity>

                      </View>
                        ))}
                      </View>
                      ))}     
                     
                    </ScrollView>
                  
                </View>
          
            </View>
        
        {/* </View> */}
    
    

      

      <View style={styles.centeredViewModalDeck}>
        
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisibleDeck}
                        onRequestClose={() => {
                          setModalVisibleDeck(!modalVisibleDeck);
                        }}>
                    <View style={styles.centeredViewModalDeck}>
                        <View style={styles.modalViewDeck}>
                        <ImageBackground source={require('../../../assets/imagens/imagensAssets/fundo_modal.jpg')} resizeMode="cover" style={styles.fundoModal}>
                            

                            <View style={styles.modalViewAllDeck}>

                              <View style={styles.modalViewTextDeck}>

                                  <Text style={styles.modalTextDeck}>Atributos: </Text>

                              </View>

                              <View style={styles.modalViewCardDeck}>

                                  <Image style={styles.imageCardImageDeck} source={statsCardDeck.image}/>
                                  <Text style={styles.textNomeCardDeck}>{statsCardDeck.nome}</Text>

                              </View>

                              <View style={styles.modalViewStatsAllDeck}>

                              <View style={styles.modalViewStats1Deck}>


                                  <View style={styles.viewIStatsAtkDeck}>
                                 
                                   <View  style={styles.viewEspacamento}>
                                      <View style={styles.viewIconStatsDeck}>
                                      <Image style={styles.imageIconStats1Deck}source={imageIconAtk}/>
                                      </View>
                                      <View style={styles.viewTextStatsDeck}>
                                    <Text style={styles.textStyleDeck}>ATAQUE</Text>
                                    <Text style={styles.textStyleNumDeck}>{statsCardDeck.atk}</Text>
                                     </View>
                                     </View>
                                </View>

                                

                                  <View style={styles.viewIStatsDefDeck}>
                                  
                                  <View  style={styles.viewEspacamento}>
                                      <View style={styles.viewIconStatsDeck}>
                                      <Image style={styles.imageIconStats1Deck}source={imageIconDef}/>
                                      </View>
                                      <View style={styles.viewTextStatsDeck}>
                                    <Text style={styles.textStyleDeck}>DEFESA</Text>
                                    <Text style={styles.textStyleNumDeck}>{statsCardDeck.def}</Text>
                                     </View>
                                     </View>
                                </View>



                                <View style={styles.viewIStatsMagDeck}>
                                 
                                <View  style={styles.viewEspacamento}>
                                      <View style={styles.viewIconStatsDeck}>
                                      <Image style={styles.imageIconStats1Deck}source={imageIconMag}/>
                                      </View>
                                      <View style={styles.viewTextStatsDeck}>
                                    <Text style={styles.textStyleDeck}>MAGIA</Text>
                                    <Text style={styles.textStyleNumDeck}>{statsCardDeck.mag}</Text>
                                     </View>
                                     </View>
                                </View>


                              </View>

                              <View style={styles.modalViewStats2Deck}>

                                <View style={styles.viewIStatsVelDeck}>
                                
                                <View  style={styles.viewEspacamento}>
                                      <View style={styles.viewIconStatsDeck}>
                                      <Image style={styles.imageIconStats2Deck}source={imageIconVel}/>
                                      </View>
                                      <View style={styles.viewTextStatsDeck}>
                                    <Text style={styles.textStyleDeck}>VELOCIDADE</Text>
                                    <Text style={styles.textStyleNumDeck}>{statsCardDeck.vel}</Text>
                                     </View>
                                     </View>
                                </View>



                                <View style={styles.viewIStatsEspDeck}>
                               
                                <View  style={styles.viewEspacamento}>
                                      <View style={styles.viewIconStatsDeck}>
                                      <Image style={styles.imageIconStats2Deck}source={imageIconEsp}/>
                                      </View>
                                      <View style={styles.viewTextStatsDeck}>
                                    <Text style={styles.textStyleDeck}>ESPECIAL</Text>
                                    <Text style={styles.textStyleNumDeck}>{statsCardDeck.esp}</Text>
                                     </View>
                                     </View>
                                </View>


                            


                              </View>

                              </View>

                              <View style={styles.modalViewButtonDeck}>


                              <View style={styles.modalViewTextAviso}>
                                      <Text style={{color: '#ff0000', fontFamily: 'Fredericka-the-Great', fontSize: 20,  fontWeight: 'bold',}}>{textoMaisCartas}</Text>
                              </View>
                              <View style={styles.modalViewbutton}>
                                  <TouchableOpacity
                                    style={[styles.buttonTrocarModalDeck]}
                                    onPress={() => VerificarTroca()}>
                                    <Text style={styles.textStyleButtonModalDeck}>{textoBtnTrocarCarta}</Text>
                                  </TouchableOpacity>

                                  <TouchableOpacity
                                    style={[styles.buttonCancelarModalDeck]}
                                    onPress={() => setModalVisibleDeck(!modalVisibleDeck)}>
                                    <Text style={styles.textStyleButtonModalDeck}>Fechar</Text>
                                  </TouchableOpacity>
                                  </View>
                              </View>    

                            </View>
                          </ImageBackground>
                        </View>
                    </View>
                    </Modal>
                </View>
        </ImageBackground>      
    </View>




  )
  function VerificarTroca(){

    

    if(textoBtnTrocarCarta == '=> Inventário'){
      let posicaoCarta = userDeck.indexOf(statsCardDeck)
      setTextoMaisCartas('')
      userDeck.splice(posicaoCarta,1)
      inventario.push(statsCardDeck)
      setModalVisibleDeck(!modalVisibleDeck)
     

    }else if(textoBtnTrocarCarta == '=> Deck'){

      if(userDeck.length >= 6){

        setTextoMaisCartas('Seu deck tem mais de 6 cartas')

      }else{
        let posicaoCarta = inventario.indexOf(statsCardDeck)
          setTextoMaisCartas('')
          inventario.splice(posicaoCarta,1)
          userDeck.push(statsCardDeck)
          setModalVisibleDeck(!modalVisibleDeck)
         
      }
     
    }


  }
  function abrirModalDeck(carta){

    setTextoBtnTrocarCarta('=> Inventário')
    setStatsCardDeck(carta)
    setModalVisibleDeck(true)


  }
  function abrirModalInventario(carta){

    setTextoBtnTrocarCarta('=> Deck')
    setStatsCardDeck(carta)
    setModalVisibleDeck(true)


  }

}