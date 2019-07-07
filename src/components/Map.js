import React from "react"
import { Text, View} from "react-native";
import { Marker } from 'react-native-maps'
import MapView from 'react-native-map-clustering';

function markers(pois){
  const markerList = pois.map(i =>(
      <Marker
        key = {i.id}
        coordinate={{
          latitude: i.latitude ? Number(i.latitude) : 0,
          longitude: i.longitude ? Number(i.longitude) : 0
        }}

      />

    )

  );
  return markerList
}

const Map = ({lat,long,error,points}) => {
  /*console.log(typeof points[0].longitude)*/
    return (
    <MapView
        style={{flex: 1}}
        region={{
          latitude: 38.3680894,
          longitude: 23.0905798,
          latitudeDelta: 0.9,
          longitudeDelta: 0.9,
        }}
      >
        {markers(points)}
      </MapView>
  )
}

export default Map