import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { colors } from "../Styles/colors";
import * as ImagePicker from "expo-image-picker";
import renamePathAndMove from "../Utilities/renamePath";
import { useDispatch } from "react-redux";
import { addLocation } from "../features/locations";
import MyButton from "../Components/MyButton";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const SaveLocationScreen = () => {
  const [title, setTitle] = useState("");
  const [picture, setPicture] = useState("");

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
    // const path = await renamePathAndMove(picture);
    dispatch(addLocation({ title, picture, id: Date.now() }));
    setTitle("");
    setPicture("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Nueva dirección</Text>
      <View style={styles.addImageContainer}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Escribe un título"
          style={styles.input}
          selectionColor={colors.white}
        />

        {picture ? (
          <Image source={{ uri: picture }} style={styles.image} />
        ) : null}
        <View style={styles.buttonsContainer}>
          <MyButton onPress={handleTakePicture}>
            <Entypo name="camera" size={24} color={colors.terciary} />
          </MyButton>
          <MyButton onPress={handlePickLibrary}>
            <Ionicons name="images" size={24} color={colors.terciary} />
          </MyButton>
        </View>
      </View>
      <MyButton
        onPress={handleConfirm}
        addButtonStyles={{
          borderColor: colors.blue,
          backgroundColor: colors.white,
        }}
      >
        <Text style={styles.buttonText}>Confirmar</Text>
      </MyButton>
    </View>
  );
};

export default SaveLocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "95%",
    alignItems: "center",
    marginBottom: 85,
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
    width: "90%",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: colors.secondary,
    marginBottom: 10,
    padding: 5,
  },
  input: {
    width: "60%",
    height: 35,
    fontSize: 18,
    borderRadius: 10,
    margin: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.light,
  },
  image: {
    width: "85%",
    height: 150,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: colors.lightBlue,
  },
  buttonsContainer: {
    flexDirection: "row",
    margin: 10,
  },
  buttonText: {
    color: colors.blue,
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "MuktaBold",
  },
});
