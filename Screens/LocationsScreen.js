import { StyleSheet, FlatList, View, Text } from "react-native";
import React, { useEffect } from "react";
import { colors } from "../Styles/colors";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import PlaceItem from "../Components/List/PlaceItem";
import { Ionicons } from "@expo/vector-icons";
import { getLocations } from "../features/locations";

const renderItem = ({ item }) => {
  return (
    <PlaceItem
      title={item.title}
      image={item.picture}
      address={item.address}
      id={item.id}
    />
  );
};

const LocationsScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocations());
  }, []);
  const { locations } = useSelector((state) => state.locations.value);

  return (
    <View style={styles.container}>
      {locations.length === 0 ? (
        <View style={styles.emptyLocation}>
          <Text style={styles.paragraph}>¡No hay direcciones cargadas!</Text>
          <Ionicons name="location-sharp" size={100} color={colors.secondary} />
        </View>
      ) : (
        <FlatList
          renderItem={renderItem}
          data={locations}
          keyExtractor={(location) => location.id}
        />
      )}
    </View>
  );
};

export default LocationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "95%",
    justifyContent: "space-between",
    marginBottom: 95,
    margin: 10,
    borderRadius: 20,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.secondary,
    overflow: "hidden",
  },
  emptyLocation: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
    textAlign: "center",
  },
});
