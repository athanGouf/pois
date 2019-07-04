import React from "react";
import { Button, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Home Screen</Text>
          <Button
              title="Go to Details"
              onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
    );
  }
}

class DetailsScreen extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          latitude: null,
          longitude: null,
          error: null,
      };
  }

  componentDidMount() {
      navigator.geolocation.getCurrentPosition(
          (position) => {
              this.setState({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                  error: null,
              });
          },
          (error) => this.setState({ error: error.message }),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
      );
  }
  render() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Latitude: {this.state.latitude}</Text>
          <Text>Longitude: {this.state.longitude}</Text>
          {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
        </View>
    );
  }
}


const AppNavigator = createStackNavigator(
   {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  });

export default createAppContainer(AppNavigator);