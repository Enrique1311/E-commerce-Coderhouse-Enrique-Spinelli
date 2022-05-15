import { StyleSheet, View, TextInput } from "react-native";
import Searcher from "../Components/Searcher";
import { useState, useEffect } from "react";
import { Entypo } from "@expo/vector-icons";
import { PRODUCTS } from "../Data/products";
import Header from "../Components/Header";
import { colors } from "../Styles/colors";
import List from "../Components/List";
import MyButton from "../Components/MyButton";
import NotFound from "../Components/NotFound";

const ProductsScreen = ({
  category = { id: 1, category: "Notebooks" },
  handleCategory,
}) => {
  const [input, setInput] = useState("");

  const [initialProducts, setInitialProducts] = useState([]);

  const [productsFiltered, setProductsFiltered] = useState([]);

  useEffect(() => {
    if (initialProducts.length !== 0) {
      if (input === "") setProductsFiltered(initialProducts);
      else {
        setProductsFiltered(
          initialProducts.filter((product) =>
            product.description.toUpperCase().includes(input.toUpperCase())
          )
        );
      }
    }
  }, [input, initialProducts]);

  useEffect(() => {
    const initialProducts = PRODUCTS.filter(
      (product) => product.category === category.id
    );
    setInitialProducts(initialProducts);
  }, []);

  const handleErase = () => setInput("");

  return (
    <>
      <Header title={category.category} />
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
              itemType="Producto"
              onPress={() => {}}
            />
          ) : (
            <NotFound />
          )}
          <View style={styles.productFooter}>
            <MyButton
              onPress={() => handleCategory(null)}
              addButtonStyles={{ backgroundColor: colors.blue, width: 100 }}
            >
              <Entypo name="back" size={24} color={colors.secondary} />
            </MyButton>
          </View>
        </View>
      </View>
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
  productFooter: {
    backgroundColor: colors.primary,
    width: "100%",
  },
});
