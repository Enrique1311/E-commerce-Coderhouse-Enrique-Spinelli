import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import MyInput from "../Components/MyInput";
import { colors } from "../Styles/colors";
import MyButton from "../Components/MyButton";
import { useDispatch, useSelector } from "react-redux";
import { signUp, login } from "../features/auth";
import { Formik } from "formik";
import loginValidationSchema from "../Utilities/validateSchemas";

const AuthScreen = () => {
  const [registerView, setRegisterView] = useState(false);

  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const { error } = useSelector((state) => state.auth.value);

  const dispatch = useDispatch();

  const handleSignup = () => {
    setEmailError("");
    setPasswordError("");
    if (password === confirmPassword) {
      dispatch(signUp({ email: email, password: password }));
    } else {
      setConfirmPasswordError("Las contraseñas deben coincidir");
    }
  };

  const handleSubmit = (values) => {
    if (registerView) {
      if (values.password === values.passwordConfirm) {
        dispatch(signUp({ email: values.email, password: values.password }));
      } else {
        setConfirmPasswordError("Las contraseñas no coinciden");
      }
    } else {
      dispatch(login({ email: values.email, password: values.password }));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          {registerView ? "Registro" : "Iniciar sesión"}
        </Text>
        <Text>{error}</Text>
        <Formik
          onSubmit={handleSubmit}
          initialValues={{ email: "", password: "", passwordConfirm: "" }}
          validationSchema={loginValidationSchema}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({ handleChange, handleBlur, values, errors, handleSubmit }) => (
            <>
              <MyInput
                label="Email"
                password={false}
                onChange={handleChange("email")}
                value={values.email}
                error={errors.email}
                onBlur={handleBlur("email")}
              />
              <MyInput
                label="Contraseña"
                password={true}
                onChange={handleChange("password")}
                value={values.password}
                error={errors.password}
                onBlur={handleBlur("password")}
              />
              {registerView && (
                <MyInput
                  label="Confirmar contraseña"
                  password={true}
                  onChange={handleChange("passwordConfirm")}
                  value={values.passwordConfirm}
                  error={confirmPasswordError}
                  onBlur={handleBlur("passwordConfirm")}
                />
              )}
              <View style={styles.buttonContainer}>
                <MyButton onPress={handleSubmit}>
                  <Text style={styles.buttonText}>
                    {registerView ? "Registrar" : "Iniciar sesión"}
                  </Text>
                </MyButton>
                <MyButton
                  onPress={
                    registerView
                      ? () => setRegisterView(false)
                      : () => setRegisterView(true)
                  }
                  addButtonStyles={{
                    backgroundColor: colors.white,
                    borderColor: colors.blue,
                    margin: 20,
                  }}
                >
                  <Text style={styles.buttonText2}>
                    {registerView
                      ? "¿Ya tienes una cuenta?"
                      : "¿No tienes cuenta? ¡Crea una!"}
                  </Text>
                </MyButton>
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.terciary,
  },
  content: {
    width: "85%",
    justifyContent: "center",
    alignItems: "center",
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
  buttonContainer: {
    margin: 10,
  },
  buttonText: {
    color: colors.light,
    paddingHorizontal: 24,
    paddingVertical: 0,
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "MuktaBold",
  },
  textContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText2: {
    color: colors.blue,
    width: "100%",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "MuktaBold",
  },
  text: {
    color: colors.blue,
    fontSize: 16,
  },
});
