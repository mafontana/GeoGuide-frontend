'use strict'

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from "react-native";


import { Router, Scene, Tabs } from 'react-native-router-flux'

import HomeScreen from './js/HomeScreen'
import LoginScreen from './js/LoginScreen'
import LogoutScreen from './js/LogoutScreen'
import SignUpScreen from './js/SignUpScreen'
import TutorialScreen from './js/TutorialScreen'
import DashboardScreen from './js/DashboardScreen'
import ARscreen from './js/ARscreen';


export default class App extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
        <Router>
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
                key="dash"
                component={DashboardScreen}
                headerMode="none"
              />
                <Scene
                    key="tutorial"
                    component={TutorialScreen}
                    headerMode="none"
                  />
                  <Scene
                    key="logout"
                    component={LogoutScreen}
                    headerMode="none"
                  />
            </Scene>
          </Scene>
        </Router>
    );
  }
}
var styles = StyleSheet.create({
  tabBar : {
    color: 'white',
    fontFamily: 'Avenir',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 1
  }
})
