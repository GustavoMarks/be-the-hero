import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import { Feather } from '@expo/vector-icons';
import { View, Image, TouchableOpacity, Text, Linking } from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Details(){
  const navigation = useNavigation();
  const message = 'Olá, ONG. Estou entrando em contato para ajudar com seu caso.';

  function navigationBack(){
    navigation.goBack();
  }

  function sendMail(){
    MailComposer.composeAsync({
      subject: 'Herói do Caso: caso teste',
      recipients: ['ong@ong.com'],
      body: message
    })
  }
  
  function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=${558500000000}t=${message}`)
  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg}/>

        <TouchableOpacity onPress={navigationBack}>
          <Feather name='arrow-left' size={28} color='#E82041' />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={ [styles.incidentProperty, { marginTop: 0 }]}> ONG:</Text>
        <Text style={styles.incidentValue}> Nome da ong</Text>

        <Text style={styles.incidentProperty}> CASO:</Text>
        <Text style={styles.incidentValue}> Título do caso</Text>

        <Text style={styles.incidentProperty}> VALOR:</Text>
        <Text style={styles.incidentValue}> R$ 170,00 </Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}> Salve o dia! </Text>
        <Text style={styles.heroTitle}> Seja o hero desse caso. </Text>

        <Text style={styles.heroDescription}> Entre em contato: </Text>
        
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp} >
            <Text style={styles.actionText}> Whatasapp </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendMail} >
            <Text style={styles.actionText}> E-mail </Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}