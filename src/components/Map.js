import React from "react"
import { Text, View} from "react-native";
import { Marker } from 'react-native-maps'
import MapView from 'react-native-map-clustering';

function markers(pois){
  const markerList = pois.map(i =>{
      if(i.longitude && i.latitude)
        return (<Marker
          key = {i.id}
          coordinate={{
            latitude:  Number(i.latitude) ,
            longitude:  Number(i.longitude)
          }}

        />)
      return <Marker key = {i.id}
        coordinate = {{
          latitude: 0,
          longitude: 0
      }}/>


    }



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
          latitudeDelta: 8,
          longitudeDelta: 8,
        }}
      >
        {markers(points)}
      </MapView>
  )
}

export default Map