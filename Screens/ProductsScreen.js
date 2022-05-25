import { StyleSheet, View, TextInput } from "react-native";
import Searcher from "../Components/Searcher";
import { useState, useEffect } from "react";
import { PRODUCTS } from "../Data/products";
//import Header from "../Components/Header";
import { colors } from "../Styles/colors";
import List from "../Components/List";
import NotFound from "../Components/NotFound";
import { TouchableWithoutFeedback } from "react-native";

const ProductsScreen = ({
  category = { id: 1, category: "Notebooks" },
  navigation,
  route,
}) => {
  const [input, setInput] = useState("");

  const [initialProducts, setInitialProducts] = useState([]);

  const [productsFiltered, setProductsFiltered] = useState([]);

  const { categoryId } = route.params;

  useEffect(() => {
    if (initialProducts.length !== 0) {
      if (input === "") setProductsFiltered(initialProducts);
      else {
        setProductsFiltered(
          initialProducts.filter((product) =>
            product.name.toUpperCase().includes(input.toUpperCase())
          )
        );
      }
    }
  }, [input, initialProducts]);

  useEffect(() => {
    const initialProd = PRODUCTS.filter(
      (product) => product.category === categoryId
    );
    setInitialProducts(initialProd);
  }, [categoryId]);

  const handleDetailsProduct = (product) => {
    navigation.navigate("Details", {
      productId: product.id,
      productTitle: product.name,
    });
  };

  const handleErase = () => setInput("");

  return (
    <>
      {/* <Header title={category.category} navigation={navigation} /> */}
      <TouchableWithoutFeedback>
        <View style={styles.productsContainer}>
          <Searcher
            addStyles={{ backgroundColor: colors.blue }}
            onPress={handleErase}
          >
            <TextInput
              value={input}
              onChangeText={setInput}
              keyboardType="default"
              placeholder="Ingrese un producto"
              style={styles.input}
            />
          </Searcher>
          <View style={styles.listContainer}>
            {productsFiltered.length !== 0 ? (
              <List
                data={productsFiltered}
                itemType={"Producto"}
                onPress={handleDetailsProduct}
              />
            ) : (
              <NotFound />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  productsContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  input: {
    width: "80%",
    paddingHorizontal: 5,
    fontSize: 20,
    fontFamily: "MuktaBold",
  },
  text: {
    color: colors.light,
    fontSize: 20,
  },
  listContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});
