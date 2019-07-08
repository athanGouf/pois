import React from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button:{
    width: '100%',
    height: '10%',
    backgroundColor:'#24a0ed',
    alignItems: 'center',
    justifyContent: "center",
    marginTop: '2%'
  },
  buttonText:{
    color: '#fff',
    fontSize: 20
  }
})
const HomeScreen = class HomeScreen extends React.Component {
  render() {
    return  (
        <View style={styles.container}>
          <Text style = {styles.titleText}>Welcome to the Warply POIs </Text>
          <TouchableOpacity
             style={styles.button}
             onPress={() => this.props.navigation.navigate('Details')}
          >
            <Text style={styles.buttonText}> Go to App </Text>
          </TouchableOpacity>

        </View>
    );
  }
}


export default HomeScreen