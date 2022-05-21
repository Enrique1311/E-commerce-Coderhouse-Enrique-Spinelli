import { StyleSheet, Text, View } from "react-native";
import { colors } from "../Styles/colors";
import GoBackButton from "./GoBackButton";

const Header = ({
  title = "Tecnology World E-commerce",
  navigation,
  categoriesFilter,
  CATEGORIES,
}) => {
  return (
    <View style={styles.container}>
      {categoriesFilter === CATEGORIES ? (
        <GoBackButton navigation={navigation} />
      ) : null}

      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 20,
  },
  text: {
    fontFamily: "Koulen",
    fontSize: 20,
    color: colors.light,
    marginLeft: 20,
  },
});
