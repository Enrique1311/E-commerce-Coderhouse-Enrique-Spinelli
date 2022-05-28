import React from "react";
import { colors } from "../../../Styles/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from "../../../Screens/CartScreen";

const Stack = createNativeStackNavigator();

const CartStack = () => {
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
          fontSize: 25,
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: "Carrito",
        }}
      />
    </Stack.Navigator>
  );
};

export default CartStack;
