import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/login/LoginScreen";

export function StackNavigation() {
  const RootStackNav = createStackNavigator();
  const navigationRef = useRef(null);

  return (
    <NavigationContainer
    ref={navigationRef} >
      <RootStackNav.Navigator >

        <RootStackNav.Screen
          name="Login"
          component={LoginScreen}
        />
        
      </RootStackNav.Navigator>
    </NavigationContainer>
  );
}