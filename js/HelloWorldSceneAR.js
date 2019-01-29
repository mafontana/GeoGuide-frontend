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
      
        <ViroAmbientLight color="#ffffff" />

        <ViroText 
        style={styles.helloWorldTextStyle} 
        position={[-3.5, 3.3, -8]}
        width={30} height={5}
        outerStroke={{type:"Outline", width:8, color:'#FF0000'}}
        text="Formation: Lyons Sandstone" />
        <ViroAmbientLight color="#ffffff" />

        <ViroText 
        style={styles.helloWorldTextStyle} 
        position={[-3.5, 2.9, -8]}
        width={30} height={5}
        outerStroke={{type:"Outline", width:8, color:'#FF0000'}}
        text="Type: sedimentary, coarse grained sandstone" />

        <ViroText 
        style={styles.helloWorldTextStyle} 
        position={[-3.5, 2.5, -8]}
        width={30} height={5}
        outerStroke={{type:"Outline", width:8, color:'#FF0000'}}
        text="Age: Pennsylvanian ~250 million years old" />
        
        <Viro3DObject source={require('./res/arrow/arrow.obj')}
        resources={[require('./res/arrow/arrow.mtl')]}
        type="OBJ"
        position={[-3.5, 1.7, -8]}
        scale={[.5, .5, .5]}   
        materials="face" 
        />

        <ViroText 
        style={styles.helloWorldTextStyle} 
        position={[4, 2.3, -8]}
        width={30} height={5}
        outerStroke={{type:"Outline", width:8, color:'#FF0000'}}
        text="Formation: Pike's Peak Granite" />
        <ViroAmbientLight color="#ffffff" />

        <ViroText 
        style={styles.helloWorldTextStyle} 
        position={[4, 1.9, -8]}
        width={30} height={5}
        outerStroke={{type:"Outline", width:8, color:'#FF0000'}}
        text="Type: igneous, coarse-grained pink to light red syenogranite" />

        <ViroText 
        style={styles.helloWorldTextStyle} 
        position={[4, 1.5, -8]}
        width={30} height={5}
        outerStroke={{type:"Outline", width:8, color:'#FF0000'}}
        text="Age: Precambrian ~1.8 billion years old" />
        
        <Viro3DObject source={require('./res/arrow/arrow.obj')}
        resources={[require('./res/arrow/arrow.mtl')]}
        type="OBJ"
        position={[4, 0.7, -8]}
        scale={[.5, .5, .5]}   
        materials="face" 
        />

        <ViroText 
        style={styles.helloWorldTextStyle} 
        position={[0, 1.5, 4]}
        width={30} height={5}
        outerStroke={{type:"Outline", width:8, color:'#FF0000'}}
        text="Formation: Fountain" />
        <ViroAmbientLight color="#ffffff" />

        <ViroText 
        style={styles.helloWorldTextStyle} 
        position={[0, 1, 4]}
        width={30} height={5}
        outerStroke={{type:"Outline", width:8, color:'#FF0000'}}
        text="Type: sedimentary, feldspar-rich red sandstone" />

        <ViroText 
        style={styles.helloWorldTextStyle} 
        position={[0, .5, 4]}
        width={30} height={5}
        outerStroke={{type:"Outline", width:8, color:'#FF0000'}}
        text="Age: Pennsylvanian ~300 million years old" />
        
        <Viro3DObject source={require('./res/arrow/arrow.obj')}
        resources={[require('./res/arrow/arrow.mtl')]}
        type="OBJ"
        position={[0, 0, 4]}
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
    diffuseTexture: require('./res/greenbox.jpg'),
  },
});

module.exports = HelloWorldSceneAR;
