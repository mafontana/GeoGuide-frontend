import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';

Mapbox.setAccessToken('pk.eyJ1IjoibWFmb250YW5hIiwiYSI6ImNqcXptcnRucDA0bngzeW94Y3lvNm9hOWQifQ.Da7mHzfQYcdq9eXABgNPQQ');

export default class MapScreen extends Component<{}> {
  
    renderAnnotations () {
        return (
          <Mapbox.PointAnnotation
            key='pointAnnotation'
            id='pointAnnotation'
            coordinate={[-105.00557, 39.75842]}>
    
            <View style={styles.annotationContainer}>
              <View style={styles.annotationFill} />
            </View>
            <Mapbox.Callout title='Look! An annotation!' />
          </Mapbox.PointAnnotation>



        )
      }    
  
    render() {
    return (
      <View style={styles.container}>
        <Mapbox.MapView
            styleURL={Mapbox.StyleURL.Street}
            zoomLevel={10}
            centerCoordinate={[-104.9903, 39.7392]}
            style={styles.container}
            showUserLocation={true}>
            {this.renderAnnotations()}
        </Mapbox.MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    annotationContainer: {
      width: 30,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderRadius: 15,
    },
    annotationFill: {
      width: 30,
      height: 30,
      borderRadius: 15,
      backgroundColor: 'orange',
      transform: [{ scale: 0.6 }],
    }
  });