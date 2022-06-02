import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { colors } from "../../Styles/colors";

const ProductItem = ({ product }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={{ ...styles.card, width: width * 0.8 }}>
      <View style={styles.imageContainer}>
        <Image
          source={product.image}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.secondary,
    borderWidth: 2,
    borderColor: colors.secondary,
    borderRadius: 20,
    margin: 10,
    overflow: "hidden",
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5,
    height: "auto",
  },
  imageContainer: {
    width: "100%",
    height: 180,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "100%",
  },
  textContainer: {
    justifyContent: "center",
    padding: 5,
  },
  name: {
    fontSize: 18,
    textAlign: "center",
    color: colors.primary,
    fontFamily: "MuktaBold",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.blue,
    fontFamily: "MuktaBold",
    textAlign: "center",
  },
});
