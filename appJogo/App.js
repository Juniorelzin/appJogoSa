import React from 'react';
import axios from 'axios';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
import * as Font from 'expo-font';


import Home from './src/pages/Home';
import CadastrarUsuario from './src/pages/CadastrarUsuario';
import TermoDeUsuario from './src/pages/TermoDeUsuario';
import TelaDeLogin from './src/pages/TelaDeLogin';
import IniciarJogo from './src/pages/IniciarJogo';
import TelaBatalha from './src/pages/TelaBatalha';
import TelaNavegacao from './src/pages/TelaNavegacao';

const Stack = createNativeStackNavigator();

export default function App(){

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        'Fredericka-the-Great': require('./assets/fonts/Fredericka-the-Great.ttf'),
        'Cabin-Sketch-Regular': require('./assets/fonts/Cabin-Sketch-Regular.ttf'),
        
      });
      setFontLoaded(true);
    };

    loadFont();
  }, []);

  if (!fontLoaded) {
    return null; // testar com carregando
  }


  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'Fredericka-the-Great',
            fontSize: 20
          },
        }}
      >
      
        <Stack.Screen 
          name="Home" component={Home} 
          options={{
            title: 'Início, o grande começo',
            headerShown: false,
            headerStyle:{
              backgroundColor: '#121212'
            },
            headerTintColor: '#fff',
            //headerShown: false,
          }}
        /> 
        <Stack.Screen name="TelaDeLogin" component={TelaDeLogin} 
          options={{title: 'Login'}}
        />
        <Stack.Screen name="CadastrarUsuario" component={CadastrarUsuario} 
          options={{title: 'Criar Conta'}}
        />
         <Stack.Screen name="TermoDeUsuario" component={TermoDeUsuario} 
          options={{title: 'Termo de Usuário'}}
        />
         <Stack.Screen name="IniciarJogo" component={IniciarJogo} 
          options={{title: 'Termo de Usuário', headerShown: false,}}
        />
         <Stack.Screen name="TelaBatalha" component={TelaBatalha} 
          options={{title: 'Tela de Batalha', headerShown: false,}}
        />
         <Stack.Screen name="TelaNavegacao" component={TelaNavegacao} 
          options={{title: 'Tela de Navegação', headerShown: false,}}
        />       
      </Stack.Navigator>
    </NavigationContainer>
  )
}
