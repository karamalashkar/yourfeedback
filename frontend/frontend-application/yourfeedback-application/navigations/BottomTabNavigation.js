import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { colors } from "../constants/colors";
import { HomeStackNavigation } from "./HomeStackNavigation";
import { SearchStackNavigation } from "./SearchStackNavigation";
import { FeedbackStackNavigation } from "./FeedbackStackNavigation";
import { DiscountStackNavigation } from "./DiscountStackNavigation";
import { ProfileStackNavigation } from "./ProfileStackNavigation";
import Bar from "../components/bar/Bar";

export function BottomTabNavigation (){
    const BottomTabsNav = createBottomTabNavigator();
    const navigationRef = React.useRef(null);
  
    return (
        <NavigationContainer
          ref={navigationRef}
          independent={true} >
        <BottomTabsNav.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            'tabBarHideOnKeyboard': true,
            'tabBarActiveTintColor': colors.white,
            'tabBarInactiveTintColor': colors.white,
            'tabBarAllowFontScaling': false,
            'tabBarShowLabel': true,
            'tabBarStyle':{
              backgroundColor: colors.red
            },
            'tabBarLabelStyle':{
              fontWeight: "bold",
              fontSize: 10, 
            },
            headerShown: false
            }} >

          <BottomTabsNav.Screen
            name="HomeScreen"
            component={HomeStackNavigation}
            options={{
              title: 'Home',
              tabBarIcon: ({ focused, color, size }) => (
                <Entypo
                  name={"home"}
                  size={24}
                  color={color}
                />
              ),
            }}
          />

          <BottomTabsNav.Screen
            name="SearchScreen"
            component={SearchStackNavigation}
            options={{
              title: 'Search',
              tabBarIcon: ({ focused, color, size }) => (
                <FontAwesome5
                  name={"search"}
                  size={20}
                  color={color}
                />
              ),
            }}
          />

          <BottomTabsNav.Screen
            name="FeedbackScreen"
            component={FeedbackStackNavigation}
            options={{
              title: 'Feedback',
              tabBarIcon: ({ focused, color, size }) => (
                <MaterialIcons
                  name={"feedback"}
                  size={24}
                  color={color}
                />
              ),
            }}
          />
          <BottomTabsNav.Screen
            name="DiscountScreen"
            component={DiscountStackNavigation}
            options={{
              title: 'Discount',
              tabBarIcon: ({ focused, color, size }) => (
                <FontAwesome5
                  name={"percent"}
                  size={20}
                  color={color}
                />
              ),
              headerTintColor: colors.white,
              headerStyle:{
              backgroundColor: colors.red
            },
            headerTitle: () => <Bar text={'Discount'}/>
            }}
          />
          <BottomTabsNav.Screen
            name="ProfileScreen"
            component={ProfileStackNavigation}
            options={{
              title: 'Profile',
              tabBarIcon: ({ focused, color, size }) => (
                <FontAwesome5
                  name={"user-alt"}
                  size={20}
                  color={color}
                />
              ),
              headerTintColor: colors.white,
              headerStyle:{
              backgroundColor: colors.red
            },
            headerTitle: () => <Bar text={'Profile'}/>
            }}
          />
        </BottomTabsNav.Navigator>
      </NavigationContainer>
    );
  }