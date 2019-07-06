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
      points:[]
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
    fetch('https://warply.s3.amazonaws.com/data/test_pois.json',{
      method: 'get'
    })
    .then((response) => response.json())
    .then(responseJson => {
      this.setState({
        points: responseJson
      })

    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    let point = this.state.points[0]
    console.log(point ? point.address : undefined)
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
            lat = {this.state.latitude}
            long = {this.state.longitude}
          />


        </ScrollableTabView>
    );
  }
}

export default MainScreen