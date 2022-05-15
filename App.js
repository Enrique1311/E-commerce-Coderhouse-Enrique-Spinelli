import { StyleSheet, View, ActivityIndicator } from "react-native";
import { useState } from "react";
import CategoriesScreen from "./Screens/CategoriesScreen";
import ProductsScreen from "./Screens/ProductsScreen";
import { useFonts } from "expo-font";

export default function App() {
  const [categorySelected, setCategorySelected] = useState(null);

  const handleCategory = (category) => {
    setCategorySelected(category);
  };

  const [loaded] = useFonts({
    Koulen: require("./assets/fonts/Koulen/Koulen-Regular.ttf"),
    MuktaBold: require("./assets/fonts/Mukta/Mukta-Bold.ttf"),
  });
  if (!loaded) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      {categorySelected ? (
        <ProductsScreen
          category={categorySelected}
          handleCategory={handleCategory}
        />
      ) : (
        <CategoriesScreen handleCategory={handleCategory} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
