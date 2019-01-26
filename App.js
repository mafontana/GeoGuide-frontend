'use strict'

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from "react-native";



import { Router, Scene, Tabs } from 'react-native-router-flux'

import { AppProvider } from './js/Context';

import HomeScreen from './js/HomeScreen'
import LoginScreen from './js/LoginScreen'
import SignUpScreen from './js/SignUpScreen'
import TutorialScreen from './js/TutorialScreen'
import ARscreen from './js/ARscreen';
import MapScreen from './js/MapScreen'
import ARPortalScreen from './js/ARPortalScreen';


export default class App extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <AppProvider>
        <Router >
          <Scene
            key="root"
            headerMode="none"
          >
          <Scene
          key="home"
          component={HomeScreen}
          headerMode="none"
        />
                <Scene
                key="login"
                component={LoginScreen}
                headerMode="none"
              />
                <Scene
                key="signup"
                component={SignUpScreen}
                headerMode="none"
              />

              <Scene
                key="AR"
                component={ARscreen}
                headerMode="none"
              />
          
            <Scene
              tabs={true}
              tabBarPosition="top"
              headerMode="none"
              key="tabbar"
              labelStyle={styles.tabBar}
              hideTabBar={false}
            >
                <Scene
                key="tutorial"
                component={TutorialScreen}
                headerMode="none"
            />
                  <Scene
                  key="map"
                  component={MapScreen}
                  headerMode="none"
                />
              <Scene
              key="start"
              title="Enter AR"
              component={ARPortalScreen}
              headerMode="none"
            />
               
            </Scene>
          </Scene>
        </Router>
        </AppProvider>
    );
  }
}
var styles = StyleSheet.create({
  tabBar : {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 1,
  }, 
  navBar: {
    backgroundColor: 'orange'
  }
})
