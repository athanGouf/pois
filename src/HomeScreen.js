import React from "react";
import { Button, View, Text } from "react-native";
import MapView from 'react-native-maps';

const HomeScreen = class HomeScreen extends React.Component {
  render() {
    return  (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Home Screen</Text>
          <Button
              title="Go to Map"
              onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
    );
  }
}


export default HomeScreen