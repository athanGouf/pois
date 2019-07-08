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
  if(!error){
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
          id: i.id,
          address: i.address,
          distance: distance
        }
    })
    rowList.sort((x,y)=> x.distance-y.distance)
    return rowList
  }
  const address = points.map(i=>({
                    id: i.id,
                    address: i.address,
                    distance:''
                  })
                )
  return address.sort(function(a, b) {
                          let textA = a.address.toUpperCase();
                          let textB = b.address.toUpperCase();
                          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                      })

}

const PointsOfInterest = ({lat,long,error,points}) => {


  return (
      <View style={styles.container}>
          <FlatList
            data={sortedList(lat,long,error,points)}
            renderItem={({ item }) => (
              <View style={styles.row}>
              <Text style = {styles.address} key={item.id}>
                {item.address}
              </Text>
              <Text style = {styles.distance}>
                {item.distance}
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