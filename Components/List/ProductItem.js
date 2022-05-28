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
    <View style={{ ...styles.card, width: width * 0.9, height: width * 0.7 }}>
      <View style={styles.imageContainer}>
        <Image
          source={product.image}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{product.name}</Text>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 20,
    marginTop: 10,
    overflow: "hidden",
  },
  imageContainer: {
    width: "100%",
    height: "80%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "100%",
  },
  textContainer: {
    justifyContent: "center",
    height: "20%",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    color: colors.light,
    fontFamily: "MuktaBold",
  },
});
