import React from 'react'
import { View, Button, StyleSheet, TextInput } from 'react-native';

export default function Cupom ()
{
    return(
        <View style={[styles.container, {flexDirection: "column"}]}>   
      <View style={{ flex: 1, backgroundColor: '#fdbf8e', alignItems: 'center'}}>
      
      </View>        
      <View style={{ flex: 1, backgroundColor: "#fdbf8e" }}>
        <View style={styles.buttonContainer}>
        <TextInput        
        placeholder="Digite aqui o seu Cupom"
        keyboardType="numeric"
      />
        </View>            
      </View>
      <View style={{ flex: 3, backgroundColor: "#fdbf8e" }}>
      <View style={styles.buttonContainer}>
          <Button color= '#f5cd79' title="Ativar Cupom" />
        </View>
      </View>
      </View>
    )
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