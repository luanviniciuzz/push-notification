import React, {Component} from 'react'
import {View, StyleSheet, Button, Image} from 'react-native'

export default class App extends Component {
  render() {
    let {button} = styles


    return(
      <View style={[styles.container, {flexDirection: "column"}]}>   
      <View style={{ flex: 3, backgroundColor: '#fdbf8e', alignItems: 'center'}}>
      <Image source={{
          uri: 'https://i.pinimg.com/originals/b4/60/d6/b460d6d39c442b1ab2169e290063685b.jpg',
        }}
          style={styles.logo}
          />
      </View>        
      <View style={{ flex: 1, backgroundColor: "#fdbf8e" }}>
        <View style={styles.buttonContainer}>
          <Button style={button} onPress={() => {this.props.enviarNotificacao()}} color= '#f5cd79' title="Cupom do dia"/>
        </View>            
      </View>
      <View style={{ flex: 1, backgroundColor: "#fdbf8e" }}>
      <View style={styles.buttonContainer}>
          <Button style={button} onPress={() => {this.props.cancelarNotificacao()}} color= '#f5cd79' title="Cancelar notificação" />
        </View>
      </View>
      </View>
    );
   
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,        
  },
  logo: {
    alignContent:'center',
    justifyContent:'center',
    width: 250,
    height: 250 
  },
  buttonContainer:{
    marginLeft: 50,
    marginRight: 50
  },
  titleButton:{
    color:'#fdbf8e'
  }
});