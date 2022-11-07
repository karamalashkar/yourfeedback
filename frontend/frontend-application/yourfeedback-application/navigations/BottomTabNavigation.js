import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from "../constants/colors";
import { HomeStackNavigation } from "./HomeStackNavigation";
import FeedbackScreen from "../screens/feedback/FeedbackScreen";

export function BottomTabNavigation (){
    const BottomTabsNav = createBottomTabNavigator();
    const navigationRef = React.useRef(null);
  
    return (
        <NavigationContainer
          ref={navigationRef}
          independent={true} >
        <BottomTabsNav.Navigator
          initialRouteName="HomeScreen"
          tabBarOptions={{
            activeTintColor: colors.white,
            inactiveTintColor: colors.white,
            showLabel: false,
            allowFontScaling: false,
            keyboardHidesTabBar: true,
            shadowColor: '#FFF',
            labelStyle: {
              fontWeight: "bold",
              fontSize: 10,
            },
            tabStyle:{
                backgroundColor: colors.red,
            },
          }}
        >
          <BottomTabsNav.Screen
            name="HomeScreen"
            component={HomeStackNavigation}
            options={{
              title: 'Home',
              tabBarIcon: ({ focused, color, size }) => (
                <Entypo
                  name={"home"}
                  size={28}
                  color={color}
                />
              ),
              headerStyle:{
                backgroundColor: colors.red,
              },
              headerTitleStyle:{
                color: colors.white,
                fontWeight: 'bold',
                fontSize: 25
              }
            }}
          />
          <BottomTabsNav.Screen
            name="FeedbackScreen"
            component={FeedbackScreen}
            options={{
              title: 'Feedback',
              tabBarIcon: ({ focused, color, size }) => (
                <MaterialIcons
                  name={"feedback"}
                  size={28}
                  color={color}
                />
              ),
              headerStyle:{
                backgroundColor: colors.red,
              },
              headerTitleStyle:{
                color: colors.white,
                fontWeight: 'bold',
                fontSize: 25
              }
            }}
          />
        </BottomTabsNav.Navigator>
      </NavigationContainer>
    );
  }