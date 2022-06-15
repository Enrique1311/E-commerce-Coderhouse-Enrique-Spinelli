import { StyleSheet, TextInput, View } from "react-native";
import { useState, useEffect } from "react";
import Header from "../Components/Header";
import Searcher from "../Components/Searcher";
import { colors } from "../Styles/colors";
import List from "../Components/List";
import NotFound from "../Components/NotFound";
import { TouchableWithoutFeedback } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { CATEGORIES } from "../Data/categories";
import { selectCategory } from "../features/categories";
import { setProductByCategory } from "../features/products";
//import { CATEGORIES } from "../Data/categories";

const CategoriesScreen = ({ navigation }) => {
  const [input, setInput] = useState("");

  const [categoriesFilter, setCategoriesFilter] = useState(CATEGORIES);

  const { categories } = useSelector((state) => state.categories.value);

  const dispatch = useDispatch();

  useEffect(() => {
    if (input === "") setCategoriesFilter(categories);
    else {
      setCategoriesFilter(
        categories.filter((category) =>
          category.category.toUpperCase().includes(input.toUpperCase())
        )
      );
    }
  }, [input]);

  const handleErase = () => setInput("");

  const handleSelectedCategory = (category) => {
    dispatch(setProductByCategory(category.id));
    dispatch(selectCategory(category.id));

    navigation.navigate("Products", {
      categoryId: category.id,
      categoryTitle: category.category,
    });
  };
  return (
    <>
      <Header
        navigation={navigation}
        title="Categorías"
        categories={categories}
      />
      <TouchableWithoutFeedback>
        <View style={styles.categoriesContainer}>
          <Searcher
            addStyles={{ background: colors.terciary }}
            onPress={handleErase}
          >
            <TextInput
              value={input}
              onChangeText={setInput}
              keyboardType="default"
              placeholder="Elige una categoría"
              style={styles.input}
              selectionColor={colors.primary}
            />
          </Searcher>
          <View style={styles.listContainer}>
            {categoriesFilter.length !== 0 ? (
              <View style={styles.list}>
                <List
                  data={categoriesFilter}
                  onPress={handleSelectedCategory}
                />
              </View>
            ) : (
              <NotFound />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  categoriesContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  input: {
    width: "80%",
    paddingHorizontal: 15,
    fontSize: 20,
    fontFamily: "MuktaBold",
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
