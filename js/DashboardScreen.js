import React, { Component } from 'react';
import { Text,TextInput, View, Button, Image, TouchableHighlight, StyleSheet,ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AppConsumer } from './Context';

export default class DashboardScreen extends Component {
  render() {
    return (
      <AppConsumer>
      {({ test }) => (
        <View>
              <View style={localStyles.container}>
                <Text style={localStyles.buttonText}>Welcome!</Text>
                <Text style={localStyles.buttonText}> Click to learn about geology in augmented reality. </Text>
                <TouchableHighlight style={localStyles.buttons} 
                underlayColor={'#F26419'}
                >
                    <Text style={localStyles.buttonText}
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
        marginTop:120
    },
    backgroundImage: {
        position: 'absolute'
      },
    buttonText: {
      color:'#F26419',
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
      backgroundColor:'#F6AE2D',
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#F26419',
    }
  });