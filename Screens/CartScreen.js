import { FlatList, Text, View, StyleSheet } from "react-native";
import React from "react";
import CartItem from "../Components/List/CartItem";
import MyButton from "../Components/MyButton";
import { colors } from "../Styles/colors";
import { useDispatch, useSelector } from "react-redux";
import { confirmAll } from "../features/cart";

const total = 325000;

const handleDelete = (id) => console.warn("Producto eliminado");

const renderItem = (data) => (
  <CartItem item={data.item} onDelete={handleDelete} />
);

const CartScreen = () => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cart.value);

  const handleConfirm = () => {
    dispatch(confirmAll(cart));
  };

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.text}>Total</Text>
          <Text style={styles.text}>${total}</Text>
        </View>
        <MyButton onPress={handleConfirm}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </MyButton>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "95%",
    justifyContent: "space-between",
    marginBottom: 85,
    margin: 10,
    borderRadius: 20,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 15,
    margin: 10,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.secondary,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 3,
  },
  totalContainer: {
    flexDirection: "row",
  },
  text: {
    fontFamily: "MuktaBold",
    fontSize: 18,
    marginHorizontal: 5,
    color: colors.primary,
  },
  buttonText: {
    fontFamily: "MuktaBold",
    fontSize: 16,
    color: colors.light,
  },
});
