import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import CadastrarUsuario from './src/pages/CadastrarUsuario';

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
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
        <Stack.Screen name="CadastrarUsuario" component={CadastrarUsuario} 
          options={{title: 'Criar Conta'}}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}
