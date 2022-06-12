import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import MyInput from "../Components/MyInput";
import { colors } from "../Styles/colors";
import MyButton from "../Components/MyButton";
import { useDispatch } from "react-redux";
import { signUp } from "../features/auth";

const LoginScreen = () => {
  const [registerView, setRegisterView] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const dispatch = useDispatch();

  const handleSignUp = () => {
    if (password === passwordConfirm) {
      console.log("sign up");
      dispatch(signUp({ email, password }));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          {registerView ? "Registrarme" : "Iniciar seción"}
        </Text>
        <MyInput
          label="Email"
          password={false}
          onChange={setEmail}
          value={email}
        />
        <MyInput
          label="Contraseña"
          password={true}
          onChange={setPassword}
          value={password}
        />
        <MyInput
          label="Confirmar contrseña"
          password={true}
          onChange={setPasswordConfirm}
          value={passwordConfirm}
        />
        <MyButton onPress={handleSignUp}>
          <Text style={styles.buttonText}>
            {" "}
            {registerView ? "Registrarme" : "Iniciar seción"}
          </Text>
        </MyButton>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.terciary,
  },
  content: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "MuktaBold",
    padding: 30,
    borderRadius: 15,
    backgroundColor: colors.white,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  title: {
    fontSize: 26,
    fontFamily: "Koulen",
    color: colors.blue,
    textAlign: "center",
  },
  buttonText: {
    color: colors.light,
    paddingHorizontal: 24,
    paddingVertical: 3,
    fontWeight: "bold",
  },
  textContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.blue,
    fontSize: 16,
  },
});
