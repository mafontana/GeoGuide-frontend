'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroMaterials,
  ViroButton
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();
    // Set initial state here
    this.state = {
      text : "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        <ViroText 
        style={styles.helloWorldTextStyle} position={[0, 2, -5]}
        width={20} height={5}
        outerStroke={{type:"Outline", width:8, color:'#FF0000'}}
        text="Navajo Sandstone" />
        <ViroAmbientLight color="#ffffff" />
        <Viro3DObject source={require('./res/arrow/arrow.obj')}
        resources={[require('./res/arrow/arrow.mtl')]}
        type="OBJ"
        position={[0.0, 2, -1]}
        scale={[.5, .5, .5]}   
        materials="face" 
        />
        <ViroText 
        style={styles.helloWorldTextStyle} position={[0, 2, -5]}
        width={20} height={5}
        outerStroke={{type:"Outline", width:8, color:'#FF0000'}}
        text="Navajo Sandstone" />
        <ViroAmbientLight color="#ffffff" />
        <Viro3DObject source={require('./res/arrow/arrow.obj')}
        resources={[require('./res/arrow/arrow.mtl')]}
        type="OBJ"
        position={[0.0, 2, -1]}
        scale={[.5, .5, .5]}   
        materials="face" 
        />
      </ViroARScene>
    );
  }



  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "Hello World!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

ViroMaterials.createMaterials({
  face: {
    shininess : 2.0,
    lightingModel: "Blinn",
    diffuseTexture: require('./res/grid_bg.jpg'),
  },
});

module.exports = HelloWorldSceneAR;
