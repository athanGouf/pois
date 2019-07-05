import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/HomeScreen"
import MainScreen from "./src/MainScreen"


const AppNavigator = createStackNavigator(
   {
    Home: HomeScreen,
    Details: MainScreen
  },
  {
    initialRouteName: "Home"
  });

export default createAppContainer(AppNavigator);