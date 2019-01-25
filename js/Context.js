import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

var baseUrl = 'http://192.168.1.60:3101'

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
      currentPosition: 0
      
    }
  }

  async componentDidMount() {

    const userResponse = await fetch(`${baseUrl}/users`)
    const objResponse = await fetch(`${baseUrl}/objects`)
    const droppedObjResponse = await fetch(`${baseUrl}/dropped_objects`)

    const userjson = await userResponse.json();
    const objjson = await objResponse.json();
    const droppedObjjson = await droppedObjResponse.json();
    const organizedDroppedObjs = await this.organizeDroppedObj(droppedObjjson.objects)

 

    this.setState({
      users: userjson.virgeo_users,
      objects: objjson.objects,
      droppedObjs: droppedObjjson.objects,
      objToSearch: organizedDroppedObjs[0],
    })
  }



  
// this will find the current latitude and longitude of the user when called
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