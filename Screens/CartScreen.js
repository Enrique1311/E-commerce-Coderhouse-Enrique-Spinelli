import { FlatList, Text, View, StyleSheet } from "react-native";
import React from "react";
import CartItem from "../Components/List/CartItem";
import { PRODUCTSSELECTED } from "../Data/productsSelected";
import MyButton from "../Components/MyButton";
import { colors } from "../Styles/colors";

const total = 325000;

const handleDelete = (id) => console.warn("Producto eliminado");

const handleConfirm = () => console.warn("Se confirma la compra");

const renderItem = (data) => (
  <CartItem item={data.item} onDelete={handleDelete} />
);

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={PRODUCTSSELECTED}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
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
    marginBottom: 100,
    margin: 10,
    padding: 10,
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
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.secondary,
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
