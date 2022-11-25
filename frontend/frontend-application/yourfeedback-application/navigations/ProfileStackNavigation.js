import React, { useRef } from "react";
import { colors } from "../constants/colors";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/profile/Profile";
import Bar from "../components/bar/Bar";

export function ProfileStackNavigation() {
  const RootStackNav = createStackNavigator();
  const navigationRef = useRef(null);

  return (
    <NavigationContainer
    ref={navigationRef} 
    independent={true} >
      <RootStackNav.Navigator>

        <RootStackNav.Screen
          name="Profile"
          component={ProfileScreen}
          options={()=>({
            headerStyle:{
              backgroundColor: colors.red
            },
            headerTitle: () => <Bar text={'Profile'}/>
          })}    
        />

      </RootStackNav.Navigator>
    </NavigationContainer>
  );
}