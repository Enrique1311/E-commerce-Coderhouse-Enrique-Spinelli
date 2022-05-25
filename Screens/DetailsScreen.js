import { StyleSheet, Text, View, Image } from "react-native";
// import Header from "../Components/Header";
import { colors } from "../Styles/colors";
import { useEffect, useState } from "react";
import { PRODUCTS } from "../Data/products";

const DetailsScreen = ({ route }) => {
  const { productId } = route.params;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(PRODUCTS.find((product) => product.id === productId));
  }, [productId]);

  return (
    product && (
      <>
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
              <Text style={styles.title}>Características</Text>
              <Text style={styles.description}>{product.description}</Text>
              <View>
                <Text style={styles.price}>$ {product.price}</Text>
              </View>
            </View>
          </View>
        </View>
      </>
    )
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
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
    minWidth: "80%",
    maxWidth: "100%",
  },
  title: {
    fontFamily: "MuktaBold",
    fontSize: 22,
    color: colors.blue,
    textAlign: "center",
    minWidth: "100%",
  },
  details: {
    margin: 20,
    padding: 10,
    borderRadius: 15,
    backgroundColor: colors.light,
    width: "90%",
  },
  description: {
    fontFamily: "MuktaBold",
    fontSize: 16,
    textAlign: "center",
    padding: 10,
    marginHorizontal: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.light,
    backgroundColor: colors.primary,
    textAlign: "center",
    borderRadius: 25,
    marginHorizontal: 60,
    marginVertical: 10,
    padding: 5,
  },
});
