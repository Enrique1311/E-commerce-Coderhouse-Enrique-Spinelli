import { StyleSheet, Text, Image } from "react-native";
import React from "react";
import { colors } from "../Styles/colors";
import Emoji from "../assets/Images/emoji-pensativo.png";

const NotFound = () => {
  return (
    <>
      <Text style={styles.text}>¡El item buscado no existe!</Text>
      <Image source={Emoji} style={styles.image} />
    </>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  text: {
    margin: 30,
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
