import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';




import { styles } from './style'
import { ButtonIcon } from '../../components/ButtonIcon';
import IlustrationImg from '../../assets/illustration.png';

export function SignIn() {

  return (

    <View style={styles.container}>
      <StatusBar
        barStyle="light-content" //Deixando a barra Branca, porem ela fica com background
        backgroundColor='transparent' // Retirando BG mas o conteudo fica abaixo
        translucent // COlando o conteudo la no topo novamente
      />
      <Image source={IlustrationImg} style={styles.image} resizeMode='stretch' />

      <View style={styles.content}>

        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie seus grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>


        <ButtonIcon 
          title="Entrar com Discord" 
          activeOpacity={0.7}
        
        />

      </View>
    </View>

  )
}