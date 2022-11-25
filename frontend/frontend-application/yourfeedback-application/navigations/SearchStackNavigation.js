import React, { useRef } from "react";
import { colors } from "../constants/colors";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/search/SearchScreen";
import BusinessScreen from "../screens/business/BusinessScreen";
import FormScreen from "../screens/form/FormScreen";
import Bar from "../components/bar/Bar";

export function SearchStackNavigation() {
  const RootStackNav = createStackNavigator();
  const navigationRef = useRef(null);

  return (
    <NavigationContainer
    ref={navigationRef} 
    independent={true} >
      <RootStackNav.Navigator>

        <RootStackNav.Screen
          name="Search"
          component={SearchScreen}
          options={()=>({
            headerStyle:{
              backgroundColor: colors.red
            },
            headerTitle: () => <Bar text={'Search'}/>
          })}    
        />

        <RootStackNav.Screen
          name="Business"
          component={BusinessScreen}
          options={({route})=>({
            headerTintColor: colors.white,
            headerStyle:{
              backgroundColor: colors.red
            },
            headerTitle: () => <Bar text={route.params.name}/>
          })}
        />

        <RootStackNav.Screen
          name="Feedback-Form"
          component={FormScreen}
          options={({route})=>({
            headerTintColor: colors.white,
            headerStyle:{
              backgroundColor: colors.red
            },
            headerTitle: () => <Bar text={route.params.name}/>
          })}
        />

      </RootStackNav.Navigator>
    </NavigationContainer>
  );
}