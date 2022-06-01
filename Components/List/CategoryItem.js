import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  Image,
} from "react-native";
import { colors } from "../../Styles/colors";

const CategoryItem = ({ category }) => {
  const { width, height } = useWindowDimensions();

  return (
    <View
      style={{
        ...styles.container,
        width: width * 0.5 - 50,
        height: width * 0.5 - 50,
      }}
    >
      <View style={{ ...styles.imageContainer, height: height * 0.15 }}>
        <Image
          source={category.image}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* <View style={styles.image}>
        <Text>{category.image}</Text>
      </View> */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>{category.category}</Text>
      </View>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 10,
    margin: 15,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 7,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  text: {
    fontSize: 18,
    color: colors.primary,
    fontFamily: "MuktaBold",
    bottom: 5,
  },
  imageContainer: {
    height: "80%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "75%",
  },
  textContainer: {
    justifyContent: "center",
    height: "20%",
  },
});
