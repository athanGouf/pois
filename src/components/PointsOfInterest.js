import React from "react"
import {Text, View, FlatList} from "react-native";


function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  if(!lat1 || !lon1 || !lat2 || !lon2)
    return ''
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}


const PointsOfInterest = ({lat,long,error,points}) => {


  return (
      <View style="flex: 1">
          <FlatList
            data={points}
            renderItem={({ item }) => (
              <Text key={item.id}>
              {
               `${item.address} ${
                  Math.floor(
                    getDistanceFromLatLonInKm(
                      item.latitude,
                      item.longitude,
                      lat,
                      long)*100
                      )/100
                   }km`
              }
              </Text>
            )}
           />
      </View>
  )
}

export default PointsOfInterest