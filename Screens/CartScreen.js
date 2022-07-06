import { FlatList, Text, View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import CartItem from "../Components/List/CartItem";
import MyButton from "../Components/MyButton";
import { colors } from "../Styles/colors";
import { useDispatch, useSelector } from "react-redux";
import { confirmAll } from "../features/cart";
import { FontAwesome5 } from "@expo/vector-icons";
import MyModal from "../Components/MyModal";
import { AntDesign } from "@expo/vector-icons";

const renderItem = (data) => <CartItem item={data.item} />;

const CartScreen = () => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cart.value);

  const { totalPrice } = useSelector((state) => state.cart.value);

  const [modalVisibility, setModalVisibility] = useState(false);

  const handleConfirm = () => {
    dispatch(confirmAll(cart, totalPrice));
    setModalVisibility(!modalVisibility);
    setTimeout(() => {
      setModalVisibility(false);
    }, 6000);
  };

  useEffect(() => {
    totalPrice;
  }, [totalPrice]);

  return (
    <View style={styles.container}>
      {cart.length > 0 ? (
        <>
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
              <Text style={styles.text}>${totalPrice}</Text>
            </View>
            <MyButton onPress={handleConfirm}>
              <Text style={styles.buttonText}>Confirmar compra</Text>
            </MyButton>
          </View>
        </>
      ) : (
        <View style={styles.emptyCart}>
          <Text style={styles.paragraph}>¡El carrito está vacío!</Text>
          <FontAwesome5
            name="shopping-cart"
            size={100}
            color={colors.secondary}
          />
        </View>
      )}
      <MyModal
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
      >
        <Text style={styles.modalText}>¡Operación exitosa!</Text>
        <AntDesign name="checkcircle" size={70} color="green" />
        <Text style={styles.modalText}>Se generó una orden.</Text>
        <Text style={styles.modalTextThaks}>¡Gracias por su compra!</Text>
      </MyModal>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "95%",
    justifyContent: "space-between",
    marginBottom: 95,
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
    borderRadius: 15,
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
    marginHorizontal: 10,
  },
  emptyCart: {
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
  modalText: {
    fontFamily: "MuktaBold",
    fontSize: 20,
    color: colors.primary,
    textAlign: "center",
    marginVertical: 20,
  },
  modalTextThaks: {
    fontFamily: "MuktaBold",
    fontSize: 25,
    color: colors.blue,
    textAlign: "center",
    marginBottom: 20,
  },
});
