import { StyleSheet, View, TouchableOpacity } from "react-native";
import { colors } from "../Styles/colors";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const Searcher = ({ children, addStyles, onPress }) => {
  return (
    <View style={{ ...styles.searcherContainer, ...addStyles }}>
      <View style={styles.seacherContent}>
        <FontAwesome name="search" size={24} color={colors.primary} />
        {children}
        <TouchableOpacity onPress={onPress}>
          <AntDesign name="closecircleo" size={30} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Searcher;

const styles = StyleSheet.create({
  searcherContainer: {
    backgroundColor: colors.blue,
    alignItems: "center",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
  seacherContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.secondary,
    width: "95%",
    height: 50,
    marginHorizontal: 10,
    marginVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 25,
  },
});
