import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home/HomeScreen";
import BusinessScreen from "../screens/business/BusinessScreen";
import FormScreen from "../screens/form/FormScreen";
import SearchScreen from "../screens/search/SearchScreen";

export function HomeStackNavigation() {
  const RootStackNav = createStackNavigator();
  const navigationRef = useRef(null);

  return (
    <NavigationContainer
    ref={navigationRef} 
    independent={true} >
      <RootStackNav.Navigator >

        <RootStackNav.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false
          }}  
        />

        <RootStackNav.Screen
          name="Business"
          component={BusinessScreen}
        />

        <RootStackNav.Screen
          name="Feedback-Form"
          component={FormScreen}
          options={{
            headerLeft: () => {}
          }}  
        />

        <RootStackNav.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerShown: false
          }}
        />

      </RootStackNav.Navigator>
    </NavigationContainer>
  );
}