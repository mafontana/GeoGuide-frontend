import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

export const AppContext = React.createContext();

export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,

      userLat: 0,
      userLong: 0,
      navError: false,
      poiPosition: {},
      trackDistance: 0,
      currentPosition: 0,
      poiName: {},
      sceneCoordinates: {},
      geologicFormations: {}
    }
  }

  async componentDidMount() {
    const poiCoordinates = await fetch('https://geoguide-server.herokuapp.com/api/points/5c4fb501a0919f00169a8fcb');
    const poiJSON = await poiCoordinates.json();
    this.setState({
      poiName: poiJSON.name,
      sceneCoordinates: poiJSON.AR_scenes,
      geologicFormations: poiJSON.geologic_formations
    })
  }

  findCurrentLocation = () => {
    navigator.geolocation.stopObserving();
    navigator.geolocation.watchPosition(
      (position) => {
        let userLat = position.coords.latitude
        let userLong = position.coords.longitude
            this.setState({
            userLat: userLat,
            userLong: userLong,
            })
      })
  }

  render() {   
    const { children } = this.props;
    return (
      <AppContext.Provider
        value={{
          loggedIn: this.state.loggedIn,
          user: this.state.user,
          userLat: this.state.userLat,
          userLong: this.state.userLong,

          poiName: this.state.poiName,
          sceneCoordinates: this.state.sceneCoordinates,
          geologicFormations: this.state.geologicFormations,
       

          logIn: this.logIn,
          logOut: this.logOut,
          
          currentPosition: this.state.currentPosition

        }}
      >
        {children}
      </AppContext.Provider>
    );
  }

}


export const AppConsumer = AppContext.Consumer;