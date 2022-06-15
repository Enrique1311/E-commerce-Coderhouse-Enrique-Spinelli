import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { colors } from "../../Styles/colors";

const PlaceItem = ({ onSelect, title, image, address }) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.placeItem}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({
  placeItem: {
    backgroundColor: colors.terciary,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 7,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  info: {
    backgroundColor: colors.terciary,
    marginLeft: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    color: colors.blue,
    fontSize: 18,
    marginBottom: 6,
  },
  address: {
    color: colors.primary,
    fontSize: 16,
  },
});
