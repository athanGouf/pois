import React from "react";
import {Text, View} from "react-native";
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked';
import PointsOfInterests from "./components/PointsOfInterest"
import Map from "./components/Map"

const MainScreen = class MainScreen extends React.Component {
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
        <ScrollableTabView renderTabBar={() => <DefaultTabBar />}>
          <PointsOfInterests
              tabLabel={'POIs'}
              lat = {this.state.latitude}
              long = {this.state.longitude}
              error = {this.state.error}
          />

          <Map
            tabLabel = {'Map'}
          />

          {/*<View key={'2'} tabLabel={'loc tab '} style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Lat: {this.state.latitude}</Text>
            <Text>Long: {this.state.longitude}</Text>
            {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
          </View>*/}
        </ScrollableTabView>
    );
  }
}

export default MainScreen