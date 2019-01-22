import React, { Component } from 'react';
import { Text,TextInput, View, Button, Image, TouchableHighlight, StyleSheet,ImageBackground } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={localStyles.container}>
        <Text style={localStyles.buttonText}>Sign Up!</Text>
      </View>
    );
  }
}


  var localStyles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        marginTop:120
    },
    backgroundImage: {
        position: 'absolute'
      },
    buttonText: {
      color:'#fff',
      textAlign:'center',
      fontSize : 20
    },
    buttons : {
      height: 60,
      width: 150,
      paddingTop:17,
      paddingBottom:10,
      marginTop: 10,
      marginBottom: 10,
      backgroundColor:'#1ecfc9',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
    }
  });