import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigator from "../../Stacks/Shop";
import CartStack from "../../Stacks/Cart";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../../../Styles/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import OrdersStack from "../../Stacks/Orders";
import { Ionicons } from "@expo/vector-icons";
import LocationStack from "../../Stacks/Locations";

const BottomTabs = createBottomTabNavigator();

const TabNavigatorLogged = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTabs.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.item}>
                <FontAwesome
                  name="shopping-bag"
                  size={26}
                  color={!focused ? colors.terciary : colors.isFocused}
                />
                <Text
                  style={{
                    color: !focused ? colors.terciary : colors.isFocused,
                  }}
                >
                  Tienda
                </Text>
              </View>
            );
          },
        }}
      />
      <BottomTabs.Screen
        name="CartTab"
        component={CartStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.item}>
                <FontAwesome5
                  name="shopping-cart"
                  size={26}
                  color={!focused ? colors.terciary : colors.isFocused}
                />
                <Text
                  style={{
                    color: !focused ? colors.terciary : colors.isFocused,
                  }}
                >
                  Carrito
                </Text>
              </View>
            );
          },
        }}
      />
      <BottomTabs.Screen
        name="OrdersTab"
        component={OrdersStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.item}>
                <FontAwesome
                  name="list-alt"
                  size={26}
                  color={!focused ? colors.terciary : colors.isFocused}
                />
                <Text
                  style={{
                    color: !focused ? colors.terciary : colors.isFocused,
                  }}
                >
                  Ordenes
                </Text>
              </View>
            );
          },
        }}
      />
      <BottomTabs.Screen
        name="LocationsTab"
        component={LocationStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.item}>
                <Ionicons
                  name="location-sharp"
                  size={26}
                  color={!focused ? colors.terciary : colors.isFocused}
                />
                <Text
                  style={{
                    color: !focused ? colors.terciary : colors.isFocused,
                  }}
                >
                  Direcciones
                </Text>
              </View>
            );
          },
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default TabNavigatorLogged;

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5,
    position: "absolute",
    backgroundColor: colors.blue,
    borderRadius: 20,
    height: 70,
    alignSelf: "center",
    margin: 10,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
