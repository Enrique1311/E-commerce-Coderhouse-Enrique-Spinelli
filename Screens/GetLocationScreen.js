import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { API_KEY } from "../Constants/googleAPI";
import MyButton from "../Components/MyButton";
import { colors } from "../Styles/colors";

//https://developers.google.com/maps/documentation/maps-static/start DOC API
//https://developers.google.com/maps/documentation/maps-static/start#Markers Markers DOC

const GetLocationScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [address, setAddress] = useState(null);
  const [photo, setPhoto] = useState(null);

  //Para traer la ubicación al renderizar el componente
  useEffect(() => {
    //IIFE (Immediately Invoked Function Expression)
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMessage("Permiso de ubicación no concedido");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    })();
  }, []);

  //Efecto para traer el mapa y luego hacer un reverse geoCode a partir de las coordenadas
  useEffect(() => {
    if (location?.lat) {
      (async () => {
        console.log("Entro");

        //Setea la url de la foto
        setPhoto(
          `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=13&size=600x600&maptype=roadmap&markers=color:red%7Clabel:C%7C${location.lat},${location.lng}&key=${API_KEY}`
        );

        //Reverse geocode
        const resp = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${API_KEY}`
        );
        const reverseGeocode = await resp.json();
        console.log(reverseGeocode);
        const address = reverseGeocode.results[0].formatted_address;
        setAddress(address);
      })();
    }
  }, [location]);

  let text = "Cargando ubicación...";
  if (errorMessage) {
    text = errorMessage;
  } else if (location) {
    // text = JSON.stringify(location);
    text = "Mi ubicación";
  }

  // console.log(photo);
  const handleConfirmLocation = () => {
    navigation.navigate("AddLocation", { address });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
      <View style={styles.imageContainer}>
        {photo ? (
          <Image
            source={{ uri: photo }}
            style={{
              width: "100%",
              height: "76%",
              borderRadius: 15,
              marginBottom: 10,
              overflow: "hidden",
              borderColor: colors.secondary,
              borderWidth: 2,
            }}
          />
        ) : null}
        {address ? (
          <>
            <Text style={styles.address}>{address}</Text>
            <MyButton onPress={handleConfirmLocation}>
              <Text style={styles.buttonText}>Confirmar</Text>
            </MyButton>
          </>
        ) : null}
      </View>
    </View>
  );
};

export default GetLocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    borderColor: colors.secondary,
    borderWidth: 2,
    margin: 10,
    padding: 10,
    borderRadius: 15,
    marginBottom: 95,
  },
  paragraph: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.blue,
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
  },
  address: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.terciary,
    paddingHorizontal: 10,
  },
});
