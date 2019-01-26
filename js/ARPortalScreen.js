import React, { Component } from 'react';
import { Text,TextInput, View, Button, Image, TouchableHighlight, StyleSheet,ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AppConsumer } from './Context';

export default class ARPortalScreen extends Component {
  render() {
    return (
      <AppConsumer>
      {({ test }) => (
        <View style={localStyles.container}>
          <View style={localStyles.innerDiv}> 
                <Text style={localStyles.headings}> 
                  Click "Enter AR" to start your virtual geology tour.
                </Text>
                </View>
                <View style={localStyles.container}>
                  <TouchableHighlight style={localStyles.buttons} 
                  underlayColor={'#F26419'}>
                      <Text style={localStyles.buttonText}
                      onPress={() => Actions.AR()}>Enter AR</Text>
                  </TouchableHighlight>
                </View>
            
              <Image
              style={localStyles.image}
              source={require(`./res/geology-icon.png`)}
            />
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
        backgroundColor: 'white',
    },
      image: {
        flex: 1,
        resizeMode: 'contain'
      },
      innerDiv: {
        marginTop: 30
    },
      headings: {
        color: '#F26419', 
        fontSize: 20,  
        fontWeight: 'bold', 
        paddingTop: 20,
        paddingBottom: 30,
        textAlign: 'center'
      },
        backgroundImage: {
        position: 'absolute'
      },
      buttonText: {
        color:'#F26419',
        textAlign:'center',
        fontSize : 20,
        fontWeight: 'bold'
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