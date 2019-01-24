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

    const test = "pants"

    this.setState({
      users: userjson.virgeo_users,
      objects: objjson.objects,
      droppedObjs: droppedObjjson.objects,
      objToSearch: organizedDroppedObjs[0],
    })
  }


  findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position);

        this.setState({ location });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  


  render() {
    const { children } = this.props;

    return (
      <AppContext.Provider
        value={{
          loggedIn: this.state.loggedIn,
          user: this.state.user,
          userLat: this.state.userLat,
          userLong: this.state.userLong,
          avatar: this.state.avatar,

          users: this.state.users,
          objects: this.state.objects,
          droppedObjs: this.state.droppedObjs,
          organizedDroppedObjs: this.state.organizedDroppedObjs,
          listSelect: this.state.listSelect,
          profileListSelect: this.state.profileListSelect,

          objToDrop: this.state.objToDrop,
          objToSearch: this.state.objToSearch,
          objPosition: this.state.objPosition,
          trackDistance: this.state.trackDistance,

          logIn: this.logIn,
          logOut: this.logOut,
          pickUpObj: this.pickUpObj,
          dropObj: this.dropObj,
          calculatedObjPos: this.calculatedObjPos,
          organizeDroppedObj: this.organizeDroppedObj,
          reorganizeDroppedObj: this.reorganizeDroppedObj,
          listSelectFunc: this.listSelectFunc,
          profileListSelectFunc: this.profileListSelectFunc,
          trackObjToSearch: this.trackObjToSearch,


        
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }

}


export const AppConsumer = AppContext.Consumer;