import { StyleSheet, Text, View, Image } from "react-native";
// import Header from "../Components/Header";
import { colors } from "../Styles/colors";
import { useEffect, useState } from "react";
import { PRODUCTS } from "../Data/products";
import MyButton from "../Components/MyButton";

const DetailsScreen = ({ route }) => {
  const { productId } = route.params;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(PRODUCTS.find((product) => product.id === productId));
  }, [productId]);

  return (
    product && (
      <View style={styles.mainContainer}>
        {/* <Header title="Detalles del producto" navigation={navigation} /> */}
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={product.image}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.details}>
              <Text style={styles.description}>{product.description}</Text>
              <Text style={styles.price}>Precio: $ {product.price}</Text>
            </View>
            <MyButton addButtonStyles={{ marginBottom: 20 }}>
              <Text style={styles.buttonText}>Agregar al carrito</Text>
            </MyButton>
          </View>
        </View>
      </View>
    )
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginBottom: 85,
    marginTop: 5,
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.secondary,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    overflow: "hidden",
  },
  imageContainer: {
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    flex: 1,
  },
  detailsContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.secondary,
    height: "60%",
    width: "100%",
  },
  details: {
    margin: 20,
    padding: 10,
    borderRadius: 20,
    backgroundColor: colors.light,
    width: "90%",
  },
  description: {
    fontFamily: "MuktaBold",
    fontSize: 15,
    textAlign: "center",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    textAlign: "center",
  },
  buttonText: {
    color: colors.light,
    fontFamily: "MuktaBold",
    fontSize: 18,
  },
});
