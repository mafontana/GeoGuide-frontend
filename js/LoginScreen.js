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
      <View style={{flex: 1}}>
      <Text style={localStyles.loginText}>Login to your account:</Text>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "white" }}>
                
                <View style={{marginTop: 30}}>
                    <TextInput
                        style={{width: 300, height: 40, borderColor: '#F26419', borderWidth: 2, borderRadius:50,textAlign: 'center',marginTop: 10}}
                        onChangeText={(userName) => this.setState({userName})}
                        placeholder="Username"
                        placeholderTextColor="orange"
                        keyboardAppearance="dark"
                    />
                    <TextInput
                        style={{width: 300, height: 40, borderColor: '#F26419', borderWidth: 2, borderRadius:50,textAlign: 'center', marginTop: 10, }}
                        onChangeText={(passWord) => this.setState({passWord})}
                        placeholder="Password"
                        placeholderTextColor="orange"
                        keyboardAppearance="dark"
                        secureTextEntry={true}
                    />

                    </View>
                  
                    <TouchableHighlight style={localStyles.buttons} 
                        underlayColor={'#68a0ff'}
                        onPress={() => Actions.tutorial()}>
                        <Text style={localStyles.buttonText}>Login</Text>
                    </TouchableHighlight>
                    <View style={{flex: 1}}> 
                    <Image
                    style={localStyles.image2}
                    source={require(`./res/geology-icon.png`)}
                  />
                  </View>  
        </View>
        </View>
    );
  }
}


var localStyles = StyleSheet.create({
  

  buttonText: {
    color:'#F26419',
    textAlign:'center',
    fontSize : 20,
    fontWeight: 'bold'
  },
  loginText: {
    color: '#F26419',
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 130,
    backgroundColor: 'white',
    textAlign: 'center'
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
    resizeMode: 'cover'
  },
  image2: {
    flex: 1,
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
    borderColor: '#F26419',
  }
});