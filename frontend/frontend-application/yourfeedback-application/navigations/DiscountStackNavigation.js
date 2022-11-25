import React, { useRef } from "react";
import { colors } from "../constants/colors";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DiscountScreen from "../screens/discount/DiscountScreen";
import Bar from "../components/bar/Bar";

export function DiscountStackNavigation() {
  const RootStackNav = createStackNavigator();
  const navigationRef = useRef(null);

  return (
    <NavigationContainer
    ref={navigationRef} 
    independent={true} >
      <RootStackNav.Navigator>

        <RootStackNav.Screen
          name="Discount"
          component={DiscountScreen}
          options={()=>({
            headerStyle:{
              backgroundColor: colors.red
            },
            headerTitle: () => <Bar text={'Discount'}/>
          })}    
        />

      </RootStackNav.Navigator>
    </NavigationContainer>
  );
}