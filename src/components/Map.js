import React from "react"
import { Text, View} from "react-native";
import MapView, { Marker } from 'react-native-maps'


const Map = ({lat, long}) => (
    <MapView
        style={{flex: 1}}
        region={{
          latitude: lat,
          longitude: long,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
      <Marker
          coordinate={{
            latitude: lat,
            longitude: long
          }}
      />
      </MapView>
);

export default Map