import { StyleSheet, Text, View } from "react-native";
import { colors } from "../Styles/colors";
import GoBackButton from "./GoBackButton";
import { AntDesign } from "@expo/vector-icons";
import MyButton from "../Components/MyButton";
import MyModal from "../Components/MyModal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Octicons } from "@expo/vector-icons";
import { logout } from "../features/auth";

const Header = ({
  title = "Categorías",
  navigation,
  categoriesFilter,
  categories,
}) => {
  const dispatch = useDispatch();

  const [modalVisibility, setModalVisibility] = useState(false);

  const { user } = useSelector((state) => state.auth.value);

  const handleLogout = () => {
    dispatch(logout());
    setModalVisibility(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {categoriesFilter === categories ? (
          <GoBackButton navigation={navigation} />
        ) : null}
      </View>
      <Text
        style={{
          width: categoriesFilter === categories ? "100%" : "45%",
          fontFamily: "Koulen",
          fontSize: 24,
          color: colors.light,
          margin: 10,
        }}
      >
        {title}
      </Text>
      {categoriesFilter === categories ? null : (
        <View style={styles.userContent}>
          <View>
            <Text style={styles.userEmail}>{user.email}</Text>
          </View>
          <MyButton
            addButtonStyles={{
              backgroundColor: colors.blue,
              borderWidth: 2,
              paddingVertical: 5,
              paddingHorizontal: 12,
            }}
            onPress={() => setModalVisibility(!modalVisibility)}
          >
            <AntDesign name="logout" size={18} color={colors.light} />
          </MyButton>
        </View>
      )}
      <MyModal
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
      >
        <Octicons name="stop" size={60} color={colors.red} />
        <Text style={styles.modalText}>
          ¿Está seguro que desea cerrar sesión?
        </Text>
        <View style={styles.logoutButtons}>
          <MyButton
            addButtonStyles={{
              backgroundColor: colors.red,
              borderWidth: 2,
              borderWidthColor: colors.red,
              padding: 8,
              paddingHorizontal: 32,
            }}
            onPress={() => handleLogout()}
          >
            <Text style={styles.buttonText}>Si</Text>
          </MyButton>
          <MyButton
            addButtonStyles={{
              backgroundColor: colors.blue,
              borderWidth: 2,
              borderWidthColor: colors.red,
              padding: 8,
              paddingHorizontal: 30,
            }}
            onPress={() => setModalVisibility(!modalVisibility)}
          >
            <Text style={styles.buttonText}>No</Text>
          </MyButton>
        </View>
      </MyModal>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  text: {},
  modalText: {
    fontFamily: "MuktaBold",
    fontSize: 18,
    textAlign: "center",
    marginVertical: 30,
  },
  logoutButtons: {
    flexDirection: "row",
  },
  buttonText: {
    fontFamily: "MuktaBold",
    fontSize: 16,
    color: colors.light,
    fontWeight: "bold",
  },
  userEmail: {
    fontFamily: "MuktaBold",
    fontSize: 12,
    color: colors.light,
  },
  userContent: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    right: 5,
    width: "45%",
  },
});
