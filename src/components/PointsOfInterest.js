import React from "react"
import {Text, View, FlatList, StyleSheet} from "react-native";


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

function sortedList(lat,long,error,points){
  if(!error && points){
    const rowList = points.map(i=>{
      const distance =
        Math.floor(
          getDistanceFromLatLonInKm(
            i.latitude,
            i.longitude,
            lat,long
          )*100
        )/100;

        return {
          address: i.address,
          distance: distance
        }
    })
    rowList.sort((x,y)=> y.distance-x.distance)
    return rowList
  }
  return {
    address: '',
    distance: ''
  }
}

const PointsOfInterest = ({lat,long,error,points}) => {

  console.log(sortedList(lat,long,error,points))

  return (
      <View style={styles.container}>
          <FlatList
            data={points}
            renderItem={({ item }) => (
              <View style={styles.row}>
              <Text style = {styles.address}key={item.id}>
              {
               item.address
              }
              </Text>
              <Text style = {styles.distance}>
                {
                  Math.floor(
                    getDistanceFromLatLonInKm(
                      item.latitude,
                      item.longitude,
                      lat,
                      long)*100
                      )/100
                }km
              </Text>
              </View>
            )}
            keyExtractor={item => item.id.toString()}
           />
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding:'5%'
  },
  row:{
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row',
    marginBottom: '2%'
  },
  address:{
    width: '70%'
  },
  distance:{
    width: '30%',
    paddingLeft:'5%',
    color:'#1183ca'
  }
})
export default PointsOfInterest