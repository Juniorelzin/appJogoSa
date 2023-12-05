import React from "react";
import { ImageBackground,View, Text, StyleSheet, TouchableOpacity, TextInput} from "react-native";
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";
import Checkbox from 'expo-checkbox';


export default function TermoDeUsuario(){

 

let termo = `
Termos de Uso e Condições - Shadow Cards

Última Atualização: [06/12/2023]

Bem-vindo ao a Shadow Cards! Antes de prosseguir, pedimos que leia atentamente estes Termos de Uso e Condições ("Termos") que regem o uso deste serviço. Este jogo é destinado a jogadores maiores de 18 anos, e a continuidade da utilização implica na aceitação integral destes termos. Se você não concorda com algum dos termos, por favor, não prossiga com o uso do jogo.

1. Aceitação dos Termos

Ao acessar ou utilizar nosso jogo de cartas, você concorda com estes Termos e se compromete a cumpri-los. Se você não concordar com estes Termos, solicitamos que interrompa imediatamente o uso do jogo.

2. Idade Mínima

Este jogo é estritamente destinado a usuários com idade igual ou superior a 18 anos. Ao acessar e usar o jogo, você declara que tem 18 anos ou mais.

3. Responsabilidade do Usuário

3.1 Comportamento Ético: O usuário concorda em manter um comportamento ético e respeitoso em todas as interações dentro do jogo, incluindo chats, fóruns ou qualquer outra forma de comunicação.

3.2 Conteúdo Adequado: O usuário concorda em não compartilhar ou gerar conteúdo que seja ofensivo, difamatório, ilegal, ameaçador, prejudicial ou de qualquer forma inadequado.

4. Pagamentos e Transações

4.1 Transações Financeiras: Ao realizar transações financeiras no jogo, o usuário declara ser financeiramente responsável por todas as ações relacionadas a essas transações.

4.2 Política de Reembolso: Nós nos reservamos o direito de estabelecer políticas de reembolso em conformidade com as leis aplicáveis.

5. Propriedade Intelectual

5.1 Direitos Autorais: Todos os direitos autorais, marcas registradas, e outros direitos de propriedade intelectual relacionados ao jogo são de propriedade exclusiva da empresa desenvolvedora.
6. Alterações nos Termos

Reservamo-nos o direito de modificar ou revisar estes Termos a qualquer momento. O usuário será notificado sobre tais alterações e é responsável por revisar periodicamente os Termos atualizados.

7. Encerramento da Conta

A empresa pode encerrar ou suspender a conta do usuário a qualquer momento, sem aviso prévio, se houver violação destes Termos.

8. Considerações Finais

Estes Termos constituem o acordo integral entre o usuário e a empresa desenvolvedora do jogo de cartas online. Ao continuar a usar o jogo, o usuário concorda com estes Termos.

Agradecemos por escolher nosso jogo de cartas online e desejamos a você uma experiência agradável!

Atenciosamente,

[Equipe Shadow Cards]'`
   
    return(
        <View style={styles.container}>

            <View style={styles.view}>

            <Text>{termo}</Text>

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
        backgroundColor: '#ffffff'
    },
    view: {
        height: '95%',
        width: '95%'
    }
})
