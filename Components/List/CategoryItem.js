import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { colors } from "../../Styles/colors";

const CategoryItem = ({ category }) => {
  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        ...styles.container,
        width: width * 0.5 - 20,
        height: width * 0.5 - 20,
      }}
    >
      <View style={styles.image}>{category.image}</View>
      <Text style={styles.text}>{category.category}</Text>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
    borderRadius: 25,
    marginHorizontal: 10,
    marginVertical: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  text: {
    fontSize: 18,
    color: colors.primary,
    fontFamily: "MuktaBold",
  },
  image: {
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
});
