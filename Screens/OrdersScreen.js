import { StyleSheet, View, FlatList, Text } from "react-native";
import React, { useEffect } from "react";
import OrderItem from "../Components/List/OrderItem";
import { colors } from "../Styles/colors";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/orders";
import { FontAwesome } from "@expo/vector-icons";

const renderItem = ({ item }) => <OrderItem item={item} />;

const OrdersScreen = () => {
  const dispatch = useDispatch();

  const { orders } = useSelector((state) => state.orders.value);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <View style={styles.ordersContainer}>
      {orders.length === 0 ? (
        <View style={styles.emptyOrders}>
          <Text style={styles.paragraph}>¡No hay órdenes cargadas!</Text>
          <FontAwesome name="list-alt" size={100} color={colors.secondary} />
        </View>
      ) : (
        <View style={styles.list}>
          <FlatList
            data={orders}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  ordersContainer: {
    flex: 1,
    width: "95%",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 95,
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.secondary,
    overflow: "hidden",
  },
  list: {
    flex: 1,
  },
  emptyOrders: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  paragraph: {
    textAlign: "center",
    fontFamily: "MuktaBold",
    fontSize: 20,
    color: colors.primary,
  },
});
