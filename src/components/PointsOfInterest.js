import React from "react"
import {Text, View} from "react-native";

const PointsOfInterest = ({lat,long,error}) => {
  return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Lat: {lat}</Text>
        <Text>Long: {long}</Text>
        {error ? <Text>Error: {error}</Text> : null}
      </View>
  )
}

export default PointsOfInterest