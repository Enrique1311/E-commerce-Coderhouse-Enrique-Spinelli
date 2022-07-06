import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../Styles/colors";
import { removeItem } from "../../features/cart";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const onDelete = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.text}>
          Cantidad: {item.quantity} X ${item.price}
        </Text>
        {/* <Text style={styles.text}>Precio por unidad: ${item.price}</Text> */}
        <Text style={styles.subtotal}>
          Subtotal: $ {item.price * item.quantity}
        </Text>
      </View>
      <TouchableOpacity onPress={() => onDelete(item)}>
        <MaterialIcons name="delete" size={30} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.terciary,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginBottom: 5,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 3,
    margin: 10,
  },
  name: {
    color: colors.blue,
    fontFamily: "MuktaBold",
    fontSize: 16,
  },
  text: {
    fontFamily: "MuktaBold",
    color: colors.primary,
  },
  subtotal: {
    fontFamily: "MuktaBold",
    fontSize: 16,
  },
});
