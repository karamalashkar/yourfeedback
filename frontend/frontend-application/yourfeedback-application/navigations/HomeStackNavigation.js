import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home/HomeScreen";
import BusinessScreen from "../screens/business/BusinessScreen";
import FormScreen from "../screens/form/FormScreen";
import SearchScreen from "../screens/search/SearchScreen";
import Bar from "../components/bar/Bar";
import { colors } from "../constants/colors";

export function HomeStackNavigation() {
  const RootStackNav = createStackNavigator();
  const navigationRef = useRef(null);

  return (
    
      <RootStackNav.Navigator 
      backButtonTextStyle={{color: 'red'}}>

        <RootStackNav.Screen
          name="Home"
          component={HomeScreen}
          options={()=>({
            headerStyle:{
              backgroundColor: colors.red
            },
            headerTitle: () => <Bar text={'Home'}/>
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
  );
}