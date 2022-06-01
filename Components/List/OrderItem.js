import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../Styles/colors";

const formatDay = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};

const OrderItem = ({ item }) => {
  return (
    <View style={styles.order}>
      <View style={styles.orderContainer}>
        <Text style={styles.date}>{formatDay(item.date)}</Text>
        <Text style={styles.total}>$ {item.total}</Text>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  order: {
    flex: 1,
  },
  orderContainer: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    margin: 10,
    marginBottom: 100,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 7,
  },
});
