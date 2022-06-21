import { StyleSheet, FlatList, View } from "react-native";
import React, { useEffect } from "react";
import { colors } from "../Styles/colors";
import { useSelector, useDispatch } from "react-redux";
import PlaceItem from "../Components/List/PlaceItem";
import { getLocations, removeLocationDb } from "../features/locations";

const renderItem = ({ item }) => {

  return (
    <PlaceItem
      onSelect={() => {}}
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
      <FlatList
        renderItem={renderItem}
        data={locations}
        keyExtractor={(location) => location.id}
      />
    </View>
  );
};

export default LocationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "95%",
    justifyContent: "space-between",
    marginBottom: 85,
    margin: 10,
    borderRadius: 20,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.secondary,
  },
});
