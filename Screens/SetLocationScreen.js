import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { API_KEY } from "../Constants/googleAPI";
import MyButton from "../Components/MyButton";
import { colors } from "../Styles/colors";

const SetLocationScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const initialRegion = {
    latitude: -34.75,
    longitude: -58.24,
    latitudeDelta: 0.15,
    longitudeDelta: 0.03,
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMessage("Permiso de ubicación no concedido");
        return;
      }
    })();
  }, []);

  const handleLocation = (event) => {
    setLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };

  const handleConfirm = () => {
    //Reverse geocode
    (async () => {
      const resp = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${API_KEY}`
      );
      const reverseGeocode = await resp.json();
      console.log(reverseGeocode);
      const address = reverseGeocode.results[0].formatted_address;
      navigation.navigate("AddLocation", { address });
    })();
  };

  return (
    <View style={styles.container}>
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <>
          <Text style={styles.subtitle}>Toca un punto en el mapa</Text>
          <View style={styles.mapContainer}>
            <MapView
              onPress={handleLocation}
              initialRegion={initialRegion}
              style={styles.map}
            >
              {location?.lat ? (
                <Marker
                  title="Ubicación seleccionada"
                  coordinate={{
                    latitude: location.lat,
                    longitude: location.lng,
                  }}
                />
              ) : null}
            </MapView>
          </View>
          <View style={{ opacity: location === null ? 0.1 : 1 }}>
            <MyButton
              onPress={handleConfirm}
              disabled={location === null ? true : false}
            >
              <Text style={styles.buttonText}>Confirmar</Text>
            </MyButton>
          </View>
        </>
      )}
    </View>
  );
};

export default SetLocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "95%",
    alignItems: "center",
    marginBottom: 95,
    margin: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.secondary,
    overflow: "hidden",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.blue,
  },
  mapContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.secondary,
    overflow: "hidden",
    marginVertical: 10,
  },

  map: {
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
    fontFamily: "MuktaBold",
    marginHorizontal: 10,
  },
});
