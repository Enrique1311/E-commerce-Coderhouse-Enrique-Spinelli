import { StyleSheet, Text, View } from "react-native";
import { colors } from "../Styles/colors";
import GoBackButton from "./GoBackButton";

const Header = ({
  title = "Categorías",
  navigation,
  categoriesFilter,
  categories,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {categoriesFilter === categories ? (
          <GoBackButton navigation={navigation} />
        ) : null}
      </View>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  text: {
    width: "85%",
    fontFamily: "Koulen",
    fontSize: 22,
    color: colors.light,
    margin: 10,
  },
});
