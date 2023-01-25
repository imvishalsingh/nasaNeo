import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Import all screens
import Dashboard    from  "../../../screen/Dashboard";

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  const screenOptionStyle = {
    headerShown: false
  };
  return (
    <Stack.Navigator screenOptions={ screenOptionStyle }>
      <Stack.Screen name="Dashboard" component={Dashboard}  />
    </Stack.Navigator>
  );
}

export default AuthStackNavigator;