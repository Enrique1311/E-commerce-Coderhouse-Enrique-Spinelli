import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { colors } from "../../Styles/colors";

const ProductItem = ({ product }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.image} />
      </View>
      <Text style={styles.text}>{product.description}</Text>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 25,
    margin: 10,
    overflow: "hidden",
    width: 250,
    height: 250,
  },
  imageContainer: {
    width: 250,
    height: 200,
    backgroundColor: "white",
    top: 0,
  },
  image: {
    width: 250,
    height: 200,
    resizeMode: "contain",
  },
  text: {
    margin: 10,
    fontSize: 20,
    textAlign: "center",
    color: colors.light,
    fontFamily: "MuktaBold",
  },
});
