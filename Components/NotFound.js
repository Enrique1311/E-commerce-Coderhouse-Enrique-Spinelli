import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";
import { colors } from "../Styles/colors";
import Emoji from "../assets/Images/emoji-pensativo.png";

const NotFound = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡El item buscado no existe!</Text>
      <Image source={Emoji} style={styles.image} />
    </View>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    margin: 20,
    padding: 20,
    borderRadius: 25,
  },
  text: {
    color: colors.red,
    fontSize: 20,
    fontFamily: "MuktaBold",
  },
  image: {
    alignSelf: "center",
    width: 100,
    height: 100,
  },
});
