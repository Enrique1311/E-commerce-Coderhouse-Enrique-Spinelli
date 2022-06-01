import { StyleSheet, View, TextInput } from "react-native";
import Searcher from "../Components/Searcher";
import { useState, useEffect } from "react";
//import { PRODUCTS } from "../Data/products";
import Header from "../Components/Header";
import { colors } from "../Styles/colors";
import List from "../Components/List";
import NotFound from "../Components/NotFound";
import { TouchableWithoutFeedback } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setProductSelected } from "../features/products";

const ProductsScreen = ({
  category = { id: 1, category: "Notebooks" },
  navigation,
  route,
}) => {
  const [input, setInput] = useState("");

  //const [initialProducts, setInitialProducts] = useState([]);

  const [productsFiltered, setProductsFiltered] = useState([]);

  const { products } = useSelector((state) => state.products.value);

  const { productsByCategory } = useSelector((state) => state.products.value);

  const dispatch = useDispatch();

  const { categoryId } = route.params;

  useEffect(() => {
    if (productsByCategory.length !== 0) {
      if (input === "") setProductsFiltered(productsByCategory);
      else {
        setProductsFiltered(
          productsByCategory.filter((product) =>
            product.name.toUpperCase().includes(input.toUpperCase())
          )
        );
      }
    }
  }, [input, productsByCategory]);

  // useEffect(() => {
  //   const initialProd = products.filter(
  //     (product) => product.category === categoryId
  //   );
  //   setInitialProducts(initialProd);
  // }, [categoryId]);

  const handleDetailsProduct = (product) => {
    dispatch(setProductSelected(product.id));

    navigation.navigate("Details", {
      categoryTitle: category.category,
    });
  };

  const handleErase = () => setInput("");

  return (
    <>
      <Header title={route.params.categoryTitle} navigation={navigation} />
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
            <View style={styles.list}>
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
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 85,
    marginTop: 5,
    borderRadius: 20,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.secondary,
    overflow: "hidden",
  },
  list: {
    flex: 1,
  },
});
