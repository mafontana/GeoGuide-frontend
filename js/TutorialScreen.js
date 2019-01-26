import React, { Component } from 'react';
import { Text,TextInput, View, Button, Image, TouchableHighlight, StyleSheet, ScrollView } from 'react-native';
import { AppConsumer } from './Context';

export default class HomeScreen extends Component {
  render() {
    return (
      <AppConsumer>
      {({ test }) => (
        <ScrollView>
        <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={{color: '#F26419', fontSize: 40, fontWeight: 'bold', textAlign: 'center'}}>Welcome, Sonja!</Text>
        <Text style={{color: '#F26419', fontSize: 30, textAlign: 'center'}}> How to get started: </Text>
        <Text style={localStyles.headings}> 
        1. Open the map which you will see in the tab above. 
        </Text>
          <Text style={localStyles.text} >
          You will see orange markers on the map which indicate "AR scenes." An AR 
          scene is a location on your trail where you will initialize augmented reality
          to view the geology around you.
        </Text>
        <Text style={localStyles.headings}> 
        2. Navigate to an AR scene. 
        </Text>
          <Text style={localStyles.text}>
            You will see multiple AR scenes located along your trail which you can view on the map. 
            Once you arrive at an AR scene, open the "Enter AR" tab above.
        </Text>
          <Text style={localStyles.headings}>
          1. Initialize Augmented reality
          </Text>
            <Text style={localStyles.text}>
            Once you reach an AR scene (i.e. an orange dot on the map), you are ready to 
            start viewing geology in your surroundings through augented reality. Click "Enter AR"
            to start the augmented reality experience. 
          </Text>    
          </View>
          </ScrollView>
      )}
        </AppConsumer>
    );
  }
}

  var localStyles = StyleSheet.create({
    headings: {
      color: '#F26419', 
      fontSize: 20,  
      fontWeight: 'bold', 
      paddingLeft: 30, 
      paddingTop: 20
    },
    text: {
      color: '#F26419', 
      fontSize: 20, 
      paddingLeft: 50, 
      paddingTop: 20
    }

  });