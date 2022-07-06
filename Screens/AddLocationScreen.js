import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { colors } from "../Styles/colors";
import * as ImagePicker from "expo-image-picker";
//import renamePathAndMove from "../Utilities/renamePath";
import { useDispatch } from "react-redux";
import { addLocation, addLocationDb } from "../features/locations";
import MyButton from "../Components/MyButton";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

const AddLocationScreen = ({ navigation, route }) => {
  const [title, setTitle] = useState("");
  const [picture, setPicture] = useState("");
  const [address, setAddress] = useState("");

  const params = route.params;

  const dispatch = useDispatch();

  const handlePickLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setPicture(result.uri);
    }
  };

  const getPermission = async () => {
    const { status } = await ImagePicker.getCameraPermissionsAsync();
    if (status === "granted") {
      return true;
    }
    return false;
  };

  const handleTakePicture = async () => {
    const isVerified = getPermission();
    if (!isVerified) {
      return;
    }

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });
    setPicture(image.uri);
  };

  const handleConfirm = async () => {
    //const path = await renamePathAndMove(picture);
    let id = Date.now();
    dispatch(addLocation({ title, picture, id, address: params?.address }));
    dispatch(addLocationDb({ title, picture, id, address: params?.address }));
    setTitle("");
    setPicture("");
    setAddress("");
    navigation.goBack(title);
  };

  const handleSetLocation = () => {
    navigation.navigate("SetLocation");
    setAddress(params?.address);
  };

  const handleLocation = () => {
    navigation.navigate("GetLocation");
    setAddress(params?.address);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Nueva dirección</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Escribe un título"
        style={styles.input}
        selectionColor={colors.primary}
      />
      {picture ? (
        <Image source={{ uri: picture }} style={styles.image} />
      ) : (
        <View style={styles.image}>
          <Text style={styles.imageText}>
            Toma una foto o elige una imagen de la galería... luego selecciona
            una dirección con localización o manualmente...
          </Text>
        </View>
      )}
      <View style={styles.allButtons}>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttons}>
            <MyButton
              onPress={handleTakePicture}
              addButtonStyles={styles.iconsButtons}
            >
              <Entypo name="camera" size={35} color={colors.blue} />
            </MyButton>
            <MyButton
              onPress={handlePickLibrary}
              addButtonStyles={styles.iconsButtons}
            >
              <Ionicons name="images" size={35} color={colors.blue} />
            </MyButton>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttons}>
            <MyButton
              onPress={handleLocation}
              addButtonStyles={styles.iconsButtons}
            >
              <MaterialIcons name="my-location" size={37} color={colors.blue} />
            </MyButton>
            <MyButton
              onPress={handleSetLocation}
              addButtonStyles={styles.iconsButtons}
            >
              <MaterialIcons
                name="edit-location"
                size={37}
                color={colors.blue}
              />
            </MyButton>
          </View>
        </View>
      </View>
      <View
        style={{
          opacity: picture === "" || title === "" || address === "" ? 0.2 : 1,
        }}
      >
        <MyButton
          onPress={handleConfirm}
          disabled={
            picture === "" || title === "" ? true || address === "" : false
          }
          addButtonStyles={{
            borderColor: colors.blue,
            backgroundColor: colors.white,
            paddingVertical: 7,
            paddingHorizontal: 20,
          }}
        >
          <Text style={styles.confirmButtonText}>Confirmar</Text>
        </MyButton>
      </View>
    </View>
  );
};

export default AddLocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "95%",
    alignItems: "center",
    marginBottom: 95,
    margin: 10,
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
    margin: 5,
  },
  addImageContainer: {
    width: "95%",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: colors.secondary,
    marginBottom: 10,
    padding: 5,
  },
  input: {
    width: "90%",
    height: 35,
    fontSize: 18,
    borderRadius: 10,
    margin: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.secondary,
  },
  image: {
    width: "90%",
    height: 200,
    borderRadius: 15,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  imageText: {
    color: colors.secondary,
    padding: 20,
    textAlign: "center",
    fontSize: 16,
  },
  allButtons: {
    flexDirection: "row",

    width: "90%",
    justifyContent: "space-between",
  },
  buttonsContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 5,
    borderRadius: 15,
    backgroundColor: colors.secondary,
    width: "49%",
  },
  buttons: {
    flexDirection: "row",
  },
  confirmButtonText: {
    color: colors.blue,
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "MuktaBold",
    marginHorizontal: 10,
  },
  iconsButtons: {
    borderRadius: 0,
    padding: 0,
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
});
