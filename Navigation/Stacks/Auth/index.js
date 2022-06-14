import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "../../../Screens/AuthScreen";
import { colors } from "../../../Styles/colors";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName=""
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.light,
        headerTitleStyle: {
          fontFamily: "Koulen",
          fontSize: 24,
        },
        headerTitleAlign: "left",
      }}
    >
      <Stack.Screen
        name="auth"
        component={AuthScreen}
        options={{
          title: "Auth",
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
