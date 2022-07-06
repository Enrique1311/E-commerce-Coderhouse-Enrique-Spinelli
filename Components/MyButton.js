import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../Styles/colors";

const MyButton = ({ onPress, children, addButtonStyles, disabled }) => {
  return (
    <View>
      <TouchableOpacity
        style={{ ...styles.button, ...addButtonStyles }}
        onPress={onPress}
        disabled={disabled}
      >
        {children}
      </TouchableOpacity>
    </View>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.blue,
    borderWidth: 3,
    borderColor: colors.light,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 10,
    alignSelf: "center",
    fontFamily: "MuktaBold",
  },
});
