import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home/HomeScreen";

export function HomeStackNavigation() {
  const RootStackNav = createStackNavigator();
  const navigationRef = useRef(null);

  return (
    <NavigationContainer
    ref={navigationRef} >
      <RootStackNav.Navigator >

        <RootStackNav.Screen
          name="Home"
          component={HomeScreen}
        />
        
      </RootStackNav.Navigator>
    </NavigationContainer>
  );
}