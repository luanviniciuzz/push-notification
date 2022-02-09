import React, {Component} from 'react'
import { StyleSheet} from 'react-native'
import {notificationManager} from './src/services/NotificationManager'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './src/pages/Home'
import Cupom from './src/pages/Cupom'

const Stack = createStackNavigator();
notificador = notificationManager
notificador.configure()
notificador.agendarNotificacao()

export default class App extends Component {
  constructor(props) {
    super(props)
    this.notificador = null;
  }
  
  onPressSendNotification = () => {
    notificador.showNotification(
      1,
      "Cupom do Dia!",
      "Use: 45HK77 e ganhe 30% de desconto!",
      {}, 
      {} 
    )
  }
  
  onPressCancelAllLocalNotification = () => {
    notificador.cancelAllLocalNotification()
  }

  render() {
    return(

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home">
            {({navigation})=>{notificador.setNavegador(navigation); return (<Home navegador={navigation} enviarNotificacao={this.onPressSendNotification} cancelarNotificacao={this.onPressCancelAllLocalNotification} />)}}
          </Stack.Screen>

          <Stack.Screen name="Cupom">
            {({navigation})=>{return (<Cupom navegador={navigation} />)}}
          </Stack.Screen>


        </Stack.Navigator>
      </NavigationContainer>

    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 200,
    marginTop: 10
  }
});