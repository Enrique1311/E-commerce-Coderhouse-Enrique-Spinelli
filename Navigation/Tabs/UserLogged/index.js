import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigator from "../../Stacks/Shop";
import CartStack from "../../Stacks/Cart";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../../../Styles/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import OrdersStack from "../../Stacks/Orders";
import LocationStack from "../../Stacks/Locations";
import { useSelector } from "react-redux";

const BottomTabs = createBottomTabNavigator();

const TabNavigatorLogged = () => {
  const { totalQuantity } = useSelector((state) => state.cart.value);

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
                  size={!focused ? 24 : 40}
                  color={!focused ? colors.white : colors.isFocused}
                />
                <Text
                  style={{
                    fontSize: !focused ? 12 : 16,
                    color: !focused ? colors.white : colors.isFocused,
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
          tabBarBadge: totalQuantity > 0 ? totalQuantity : null,
          tabBarBadgeStyle: { marginLeft: 10 },
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.item}>
                <FontAwesome5
                  name="shopping-cart"
                  size={!focused ? 24 : 40}
                  color={!focused ? colors.white : colors.isFocused}
                />
                <Text
                  style={{
                    fontSize: !focused ? 12 : 16,
                    color: !focused ? colors.white : colors.isFocused,
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
                  size={!focused ? 24 : 40}
                  color={!focused ? colors.white : colors.isFocused}
                />
                <Text
                  style={{
                    fontSize: !focused ? 12 : 16,
                    color: !focused ? colors.white : colors.isFocused,
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
                <MaterialCommunityIcons
                  name="map-marker-radius"
                  size={!focused ? 24 : 40}
                  color={!focused ? colors.white : colors.isFocused}
                />
                <Text
                  style={{
                    fontSize: !focused ? 12 : 16,
                    color: !focused ? colors.white : colors.isFocused,
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
    height: 80,
    alignSelf: "center",
    margin: 10,
    paddingHorizontal: 10,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
