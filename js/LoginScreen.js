import React, { Component } from 'react';
import { Text,TextInput, View, Button, Image, TouchableHighlight, StyleSheet, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state={
          userName: '',
          password: '',
        }
      }
  render() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#55DDE0" }}>
                    <TextInput
                        style={{width: 300, height: 40, borderColor: '#fff', borderWidth: 1, borderRadius:50,textAlign: 'center', color:'#fff',marginTop: 10}}
                        onChangeText={(userName) => this.setState({userName})}
                        placeholder="Username"
                        placeholderTextColor="white"
                        keyboardAppearance="dark"
                    />
                    <TextInput
                        style={{width: 300, height: 40, borderColor: '#fff', borderWidth: 1, borderRadius:50,textAlign: 'center', color:'#fff',marginTop: 10}}
                        onChangeText={(passWord) => this.setState({passWord})}
                        placeholder="Password"
                        placeholderTextColor="white"
                        keyboardAppearance="dark"
                        secureTextEntry={true}
                    />
                    <TouchableHighlight style={localStyles.buttons} 
                        underlayColor={'#68a0ff'}
                        onPress={() => Actions.dash()}>
                        <Text style={localStyles.buttonText}>Login</Text>
                    </TouchableHighlight>
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
      color:'#33658A',
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
      borderWidth: 1,
      borderColor: '#F6AE2D',
    }
  });