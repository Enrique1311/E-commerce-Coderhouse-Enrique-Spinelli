import { StyleSheet, View, FlatList } from "react-native";
import React, { useEffect } from "react";
import OrderItem from "../Components/List/OrderItem";
import { ORDERS } from "../Data/orders";
import { colors } from "../Styles/colors";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/orders";

const renderItem = (data) => <OrderItem item={data.item} />;

const OrdersScreen = () => {
  const dispatch = useDispatch();

  /////////////
  const { orders } = useSelector((state) => state.orders.value);
  //////////////

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <View style={styles.ordersContainer}>
      <View style={styles.list}>
        <FlatList
          data={ORDERS}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  ordersContainer: {
    flex: 1,
    width: "95%",
    justifyContent: "space-between",
    alignSelf: "center",
    marginBottom: 85,
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  list: {
    flex: 1,
  },
});
