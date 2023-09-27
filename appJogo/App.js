import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';

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
        <Stack.Screen name="Sobre" component={Sobre} 
          options={{title: 'Sobre a empresa'}}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}
