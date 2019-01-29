import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

Mapbox.setAccessToken('pk.eyJ1IjoibWFmb250YW5hIiwiYSI6ImNqcXptcnRucDA0bngzeW94Y3lvNm9hOWQifQ.Da7mHzfQYcdq9eXABgNPQQ');

export default class MapScreen extends Component<{}> {
  constructor() {
    super();
    this.state = {
      poiName: {},
      AR_scenes: {},
      longitudeScene1: 0,
      latitudeScene1: 0,
      longitudeScene2: 0,
      latitudeScene2: 0,
      longitudeScene3: 0,
      latitudeScene3: 0,
      longitudeScene4: 0,
      latitudeScene4: 0,
      longitudeScene5: 0,
      latitudeScene5: 0,
      longitudeScene6: 0,
      latitudeScene6: 0,
      longitudeScene7: 0,
      latitudeScene7: 0,
      longitudeScene8: 0,
      latitudeScene8: 0,
      longitudeScene9: 0,
      latitudeScene9: 0,
      longitudeScene10: 0,
      latitudeScene10: 0,
      geologicFormations: {},



      route:
      {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [
                  -104.87794518470764,
                  38.87716931604643
                ],
                [
                  -104.87812757492065,
                  38.878138179386966
                ],
                [
                  -104.87814903259277,
                  38.87919890255201
                ],
                [
                  -104.87812757492065,
                  38.879591449630546
                ],
                [
                  -104.87802028656006,
                  38.880000698531205
                ],
                [
                  -104.87824559211731,
                  38.880443352851955
                ],
                [
                  -104.87868547439575,
                  38.880944467623
                ],
                [
                  -104.87900733947754,
                  38.88122007924071
                ],
                [
                  -104.87944722175597,
                  38.88135370873115
                ],
                [
                  -104.87996220588684,
                  38.88143722703502
                ],
                [
                  -104.88056302070618,
                  38.88156250430681
                ],
                [
                  -104.88095998764037,
                  38.88162096695805
                ],
                [
                  -104.88152861595154,
                  38.881721188534
                ],
                [
                  -104.88180756568909,
                  38.88193833479689
                ],
                [
                  -104.88196849822998,
                  38.88210536993215
                ],
                [
                  -104.88208651542662,
                  38.88231416329906
                ],
                [
                  -104.88218307495117,
                  38.88256471452943
                ],
                [
                  -104.88237619400024,
                  38.88270669316778
                ],
                [
                  -104.88259077072142,
                  38.88271504484355
                ],
                [
                  -104.88275170326231,
                  38.8825981212934
                ],
                [
                  -104.88275170326231,
                  38.88224734948841
                ],
                [
                  -104.88270878791809,
                  38.88191327949272
                ],
                [
                  -104.88275170326231,
                  38.881646022365295
                ],
                [
                  -104.88270878791809,
                  38.881378764232615
                ],
                [
                  -104.88261222839355,
                  38.88102798640793
                ],
                [
                  -104.88288044929504,
                  38.88051016835895
                ],
                [
                  -104.88311648368835,
                  38.880284665771036
                ],
                [
                  -104.88359928131104,
                  38.8801593862463
                ],
                [
                  -104.88378167152405,
                  38.88014268229297
                ],
                [
                  -104.88382458686829,
                  38.880000698531205
                ],
                [
                  -104.88372802734375,
                  38.87964991390352
                ],
                [
                  -104.88354563713074,
                  38.87928242338863
                ],
                [
                  -104.88341689109801,
                  38.878839761835934
                ],
                [
                  -104.88336324691772,
                  38.878430506249146
                ],
                [
                  -104.88333106040955,
                  38.87804630498192
                ],
                [
                  -104.88333106040955,
                  38.877361419310354
                ],
                [
                  -104.88330960273743,
                  38.87696050756181
                ],
                [
                  -104.88328814506531,
                  38.876734993709334
                ],
                [
                  -104.88322377204895,
                  38.876576298347146
                ],
                [
                  -104.88282680511475,
                  38.87621714437675
                ],
                [
                  -104.88280534744263,
                  38.87623384925285
                ],
                [
                  -104.88237619400024,
                  38.87531507523757
                ],
                [
                  -104.88237619400024,
                  38.87451322639054
                ],
                [
                  -104.88252639770508,
                  38.87424594143115
                ],
                [
                  -104.88190412521361,
                  38.87314338034852
                ],
                [
                  -104.88145351409912,
                  38.872124331411406
                ],
                [
                  -104.88111019134521,
                  38.87105514960764
                ],
                [
                  -104.88089561462402,
                  38.87048714023294
                ],
                [
                  -104.8808741569519,
                  38.87008618970628
                ],
                [
                  -104.88038063049316,
                  38.86973535614024
                ],
                [
                  -104.87980127334595,
                  38.86943464027688
                ],
                [
                  -104.87939357757568,
                  38.869200749281426
                ],
                [
                  -104.87911462783813,
                  38.869050390377986
                ],
                [
                  -104.87890005111694,
                  38.86876637824818
                ],
                [
                  -104.87890005111694,
                  38.868432244878015
                ],
                [
                  -104.87905025482178,
                  38.868131523502036
                ],
                [
                  -104.87896442413329,
                  38.86781409400288
                ],
                [
                  -104.87855672836304,
                  38.86779738714787
                ],
                [
                  -104.87832069396971,
                  38.86809810993731
                ],
                [
                  -104.87832069396971,
                  38.86853248505395
                ],
                [
                  -104.87855672836304,
                  38.86900027067283
                ],
                [
                  -104.87862110137938,
                  38.86946805321338
                ],
                [
                  -104.87855672836304,
                  38.87040360905972
                ],
                [
                  -104.8786425590515,
                  38.87182362565463
                ],
                [
                  -104.87855672836304,
                  38.872759150497934
                ],
                [
                  -104.87834215164185,
                  38.873327141716736
                ],
                [
                  -104.87844944000244,
                  38.87381160122825
                ],
                [
                  -104.87823486328125,
                  38.87426264677056
                ],
                [
                  -104.8782992362976,
                  38.87528166504957
                ],
                [
                  -104.87832069396971,
                  38.87571599626855
                ],
                [
                  -104.87810611724854,
                  38.87618373461284
                ],
                [
                  -104.87795591354369,
                  38.87676840321412
                ],
                [
                  -104.87793445587158,
                  38.87716931604643
                ]
              ]
            }
          }
        ]
      }
    }
  }

  async componentDidMount() {

    const poiCoordinates = await fetch('https://geoguide-server.herokuapp.com/api/points/5c4fdd11ad3af90016634c6a');

    const poiJSON = await poiCoordinates.json();

    this.setState({
      poiName: poiJSON.name,
      AR_scenes: poiJSON.AR_scenes,
      geologicFormations: poiJSON.geologic_formations, 
      longitudeScene1: poiJSON.AR_scenes.coordinates_AR_scene1[0],
      latitudeScene1: poiJSON.AR_scenes.coordinates_AR_scene1[1],
      longitudeScene2: poiJSON.AR_scenes.coordinates_AR_scene2[0],
      latitudeScene2: poiJSON.AR_scenes.coordinates_AR_scene2[1],
      longitudeScene3: poiJSON.AR_scenes.coordinates_AR_scene3[0],
      latitudeScene3: poiJSON.AR_scenes.coordinates_AR_scene3[1],
      longitudeScene4: poiJSON.AR_scenes.coordinates_AR_scene4[0],
      latitudeScene4: poiJSON.AR_scenes.coordinates_AR_scene4[1],
      longitudeScene5: poiJSON.AR_scenes.coordinates_AR_scene5[0],
      latitudeScene5: poiJSON.AR_scenes.coordinates_AR_scene5[1],
      longitudeScene6: poiJSON.AR_scenes.coordinates_AR_scene6[0],
      latitudeScene6: poiJSON.AR_scenes.coordinates_AR_scene6[1],
      // longitudeScene7: poiJSON.AR_scenes.coordinates_AR_scene7[0],
      // latitudeScene7: poiJSON.AR_scenes.coordinates_AR_scene7[1],
      // longitudeScene8: poiJSON.AR_scenes.coordinates_AR_scene8[0],
      // latitudeScene8: poiJSON.AR_scenes.coordinates_AR_scene8[1],
      // longitudeScene9: poiJSON.AR_scenes.coordinates_AR_scene9[0],
      // latitudeScene9: poiJSON.AR_scenes.coordinates_AR_scene9[1],
      // longitudeScene10: poiJSON.AR_scenes.coordinates_AR_scene10[0],
      // latitudeScene10: poiJSON.AR_scenes.coordinates_AR_scene10[1],
    })
  }



    renderAnnotations () {
        return (
            <Mapbox.PointAnnotation
              key='pointAnnotation'
              id='pointAnnotation'
              coordinate={[-105.00557, 39.75842]}>
      
              <View style={styles.annotationContainer}>
                <View style={styles.annotationFill} />
              </View>
              <Mapbox.Callout title='This is an annotation!' />
            </Mapbox.PointAnnotation>
        )
      }  
      
      render() {
  
     
        return (
          <View style={styles.container}>
            <MapboxGL.MapView
              // styleURL={MapboxGL.StyleURL.Light}
              zoomLevel={13}
              centerCoordinate={[-104.88016605377197,
                38.88154580068335]}
              style={styles.container}
              showUserLocation={true}
              > 
              <MapboxGL.ShapeSource id='line1' shape={this.state.route}>
                <MapboxGL.LineLayer id='linelayer1' style={{lineColor:'orange'}} />
              </MapboxGL.ShapeSource>

        
              
                <MapboxGL.PointAnnotation 
                id="1"
                coordinate={[this.state.longitudeScene1,
                  this.state.latitudeScene1]}
                title="third waypoint"
                snippet="this is a waypoint"
              />

              <MapboxGL.PointAnnotation 
              id="2"
              coordinate={[this.state.longitudeScene2,
                this.state.latitudeScene2]}
              title="second waypoint"
              snippet="this is a waypoint"
            />

            <MapboxGL.PointAnnotation 
            id="3"
            coordinate={[ this.state.longitudeScene3,
              this.state.latitudeScene3]}
            title="first waypoint"
            snippet="this is a waypoint"

          />

          
          <MapboxGL.PointAnnotation 
          id="4"
          coordinate={[this.state.longitudeScene4,
                this.state.latitudeScene4]}
          title="fourth waypoint"
          snippet="this is a waypoint"
        />

        <MapboxGL.PointAnnotation 
        id="5"
        coordinate={[ this.state.longitudeScene5,
          this.state.latitudeScene5]}
        title="fifth waypoint"
        snippet="this is a waypoint"
      />

      <MapboxGL.PointAnnotation 
      id="6"
      coordinate={[ this.state.longitudeScene6,
        this.state.latitudeScene6]}
        title="sixth waypoint"
        snippet="this is a waypoint"
    />
    <MapboxGL.PointAnnotation 
    id="7"
    coordinate={[ this.state.longitudeScene7,
      this.state.latitudeScene7]}
      title="seventh waypoint"
      snippet="this is a waypoint"
  />

            </MapboxGL.MapView>
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
    });
  
