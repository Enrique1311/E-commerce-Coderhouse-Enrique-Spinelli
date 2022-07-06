import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { colors } from "../../Styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { removeLocation, removeLocationDb } from "../../features/locations";

const PlaceItem = ({ title, image, address, id }) => {
  const dispatch = useDispatch();

  const onRemove = (id) => {
    dispatch(removeLocationDb({ id }));
    dispatch(removeLocation({ id }));
  };

  return (
    <View style={styles.placeItem}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
      <TouchableOpacity onPress={() => onRemove(id)}>
        <MaterialIcons name="delete" size={30} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({
  placeItem: {
    backgroundColor: colors.terciary,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
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
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.primary,
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
