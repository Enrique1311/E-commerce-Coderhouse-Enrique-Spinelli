import { StyleSheet, Text, View, Image } from "react-native";
import Header from "../Components/Header";
import { colors } from "../Styles/colors";
import img3 from "../assets/Images/notebook-dell.jpg";
import GoBackButton from "../Components/GoBackButton";

const DetailsScreen = ({
  product = {
    id: 1,
    category: 1,
    name: "Notebook Dell Inspiron 5510",
    description:
      "Intel Core i7-11390H, 32GB de RAM, 512GB SSD, 15.6 FHD IPS, Windows 11 Home",
    price: 245000,
    image: img3,
  },
  navigation,
}) => {
  return (
    <>
      <Header title="Detalles del producto" navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={product.image}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.detailsContainer}>
          <View>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>$ {product.price}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    overflow: "hidden",
  },
  imageContainer: {
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    flex: 1,
  },
  detailsContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.secondary,
    height: "60%",
    minWidth: "80%",
    maxWidth: "100%",
  },
  name: {
    fontFamily: "MuktaBold",
    fontSize: 22,
    color: colors.blue,
    textAlign: "center",
    minWidth: "100%",
    marginBottom: 5,
    marginTop: 10,
  },
  description: {
    fontFamily: "MuktaBold",
    fontSize: 16,
    textAlign: "center",
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 15,
    backgroundColor: colors.light,
  },
  price: {
    fontSize: 20,
    color: colors.primary,
    backgroundColor: colors.terciary,
    textAlign: "center",
    borderRadius: 25,
    marginHorizontal: 60,
    marginVertical: 10,
    padding: 5,
  },
});
