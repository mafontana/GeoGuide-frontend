import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

var baseUrl = 'http://192.168.1.60:3101'

export const AppContext = React.createContext();


export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      user: [],
      avatar: '',

      users: [],
      objects: [],
      droppedObjs: [],
      organizedDroppedObjs: [],
      profileListSelect: 1,
      listSelect: 1,

      userLat: 0,
      userLong: 0,
      navError: false,

      objToDrop: [],
      objToSearch: {},
      objPosition: {},
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

    this.setState({
      users: userjson.virgeo_users,
      objects: objjson.objects,
      droppedObjs: droppedObjjson.objects,
      objToSearch: organizedDroppedObjs[0],
    })
  }


  logIn = (userId) =>{
    fetch(`${baseUrl}/users/${userId}`)
      .then(response => response.json())
      .then(json => {
        let avatar = json.user[0].avatar_info[0].avatar_name

        return this.setState({
          user: json.user,
          loggedIn: true,
          avatar: avatar,
        })
      })
      .then(()=>{
        Actions.profile()
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

}