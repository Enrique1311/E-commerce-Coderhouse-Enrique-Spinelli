import { StyleSheet, Text, View, Image } from "react-native";
import Header from "../Components/Header";
import { colors } from "../Styles/colors";
//import { useEffect, useState } from "react";
//import { PRODUCTS } from "../Data/products";
import MyButton from "../Components/MyButton";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cart";

const DetailsScreen = ({ route, navigation }) => {
  const { productSelected } = useSelector((state) => state.products.value);
  const { productTitle } = route.params;
  const dispatch = useDispatch();

  const handleAdd = (id) => {
    dispatch(addItem({ id: id }));
  };

  //  const [product, setProduct] = useState(null);

  // useEffect(() => {
  //   setProduct(PRODUCTS.find((product) => product.id === productId));
  // }, [productId]);

  return (
    productSelected && (
      <>
        <Header title={productSelected.name} navigation={navigation} />
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image
                source={productSelected.image}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
            <View style={styles.detailsContainer}>
              <View style={styles.details}>
                <Text style={styles.description}>
                  {productSelected.description}
                </Text>
                <Text style={styles.price}>
                  Precio: $ {productSelected.price}
                </Text>
              </View>
              <MyButton
                onPress={() => handleAdd(productSelected.id)}
                addButtonStyles={{ marginBottom: 20 }}
              >
                <Text style={styles.buttonText}>Agregar al carrito</Text>
              </MyButton>
            </View>
          </View>
        </View>
      </>
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
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.secondary,
    overflow: "hidden",
  },
  container: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.secondary,
    overflow: "hidden",
    height: "80%",
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5,
  },
  imageContainer: {
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    overflow: "hidden",
  },
  image: {
    height: "85%",
  },
  detailsContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: colors.secondary,
    height: "50%",
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
    marginTop: 10,
  },
  buttonText: {
    color: colors.light,
    fontFamily: "MuktaBold",
    fontSize: 18,
  },
});
