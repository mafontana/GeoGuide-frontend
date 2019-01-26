import React, { Component } from 'react';
import { Text,TextInput, View, Button, Image, TouchableHighlight, StyleSheet,ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
// import { Button } from 'native-base';

export default class HomeScreen extends Component {
  render() {
   
    return (
      <View style={localStyles.backgroundImage}>
          <View style={{flex: 1}}> 
            <Image
              style={localStyles.image}
              source={require(`./res/geoguide-logo-7.png`)}
            />
       
            </View>   
         <View style={localStyles.buttonDiv} > 
            <TouchableHighlight style={localStyles.buttons} 
            underlayColor={'#F26419'}
            onPress={() => Actions.login()}>
                <Text style={localStyles.buttonText}>Login</Text>
                
            </TouchableHighlight>

            <TouchableHighlight style={localStyles.buttons} 
              underlayColor={'#F26419'}
              onPress={() => Actions.signup()}>
                  <Text style={localStyles.buttonText}>Sign Up</Text>
            </TouchableHighlight>
        </View>  
        <View style={{flex: 1}}> 
              <Image
              style={localStyles.image2}
              source={require(`./res/geology-icon.png`)}
            />
            </View>   
        </View>
    )
  }
}

  var localStyles = StyleSheet.create({
    buttonText: {
      color:'#F26419',
      textAlign:'center',
      fontSize : 20,
      fontWeight: 'bold'
    },
    backgroundImage: {
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center', 
      backgroundColor: "white", 
      resizeMode: 'center',
      position: 'absolute',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      marginBottom: 0,
      paddingBottom: 0
    },
    buttonDiv: {
      paddingBottom: 20
    },
    image: {
      flex: 1,
      resizeMode: 'contain'
    },
    image2: {
      flex: 2,
      resizeMode: 'cover',
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
    }
  });