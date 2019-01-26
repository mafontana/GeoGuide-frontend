import React, { Component } from 'react';
import { Text,TextInput, View, Button, Image, TouchableHighlight, StyleSheet,ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AppConsumer } from './Context';

export default class ARPortalScreen extends Component {
  render() {
    return (
      <AppConsumer>
      {({ test }) => (
        <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={localStyles.text}> Click "Enter AR" to start your virtual geology tour.</Text>
              <View style={localStyles.container}>
                <TouchableHighlight style={localStyles.buttons} 
                underlayColor={'#F26419'}
                >
                    <Text style={{color: 'white', fontSize: 40, fontWeight: 'bold', textAlign: 'center', paddingTop: 30}}
                    onPress={() => Actions.AR()}>Enter AR</Text>
                </TouchableHighlight>
              </View>
            
          </View>
      )}
        </AppConsumer>
    );
  }
}


  var localStyles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        marginTop:120, 
        backgroundColor: 'white'
    },
    backgroundImage: {
        position: 'absolute'
      },
    buttonText: {
      color:'#F26419',
      textAlign:'center',
      fontSize : 30, 
      marginTop: 30,
      fontWeight: 'bold',

    },
    buttonText2: {
      color: 'white',
      textAlign: 'center',
      fontSize : 30, 
      marginTop: 30,
      fontWeight: 'bold',

    },
    image2: {
      flex: 1,
    
    },
    text: {
      color:'#F26419',
      textAlign:'center',
      fontSize : 20, 
      marginTop: 10,
      backgroundColor: 'white'
    },
    buttons : {
      height: 150,
      width: 250,
      paddingTop:17,
      paddingBottom:10,
      marginTop: 10,
      marginBottom: 10,
      backgroundColor:'#F6AE2D',
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#F26419',
    }
  });