import { StyleSheet, TextInput, View, Text, Image } from "react-native";
import { useState, useEffect } from "react";
import Header from "../Components/Header";
import Searcher from "../Components/Searcher";
import { colors } from "../Styles/colors";
import List from "../Components/List";
import { CATEGORIES } from "../Data/categories";
import NotFound from "../Components/NotFound";

const CategoriesScreen = ({ handleCategory }) => {
  const [input, setInput] = useState("");

  const [categoriesFilter, setCategoriesFilter] = useState(CATEGORIES);

  useEffect(() => {
    if (input === "") setCategoriesFilter(CATEGORIES);
    else {
      setCategoriesFilter(
        CATEGORIES.filter((category) =>
          category.category.toUpperCase().includes(input.toUpperCase())
        )
      );
    }
  }, [input]);

  const handleErase = () => setInput("");

  handleSelectedCategory = (category) => {
    handleCategory(category);
  };

  return (
    <>
      <Header />
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
          />
        </Searcher>
        <View>
          {categoriesFilter.length !== 0 ? (
            <List data={categoriesFilter} onPress={handleSelectedCategory} />
          ) : (
            <NotFound />
          )}
        </View>
      </View>
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
});
