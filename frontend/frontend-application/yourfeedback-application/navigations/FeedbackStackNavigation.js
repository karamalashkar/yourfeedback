import React, { useRef } from "react";
import { colors } from "../constants/colors";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FeedbackScreen from "../screens/feedback/FeedbackScreen";
import Bar from "../components/bar/Bar";

export function FeedbackStackNavigation() {
  const RootStackNav = createStackNavigator();
  const navigationRef = useRef(null);

  return (
    <NavigationContainer
    ref={navigationRef} 
    independent={true} >
      <RootStackNav.Navigator>

        <RootStackNav.Screen
          name="Discount"
          component={FeedbackScreen}
          options={()=>({
            headerStyle:{
              backgroundColor: colors.red
            },
            headerTitle: () => <Bar text={'Feedback'}/>
          })}    
        />

      </RootStackNav.Navigator>
    </NavigationContainer>
  );
}