import { StyleSheet, Text, View, TextInput } from "react-native";
import { colors } from "../Styles/colors";

const MyInput = ({
  label,
  password = false,
  onChange,
  value,
  error = null,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        secureTextEntry={password}
        value={value}
        selectionColor={colors.primary}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default MyInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    margin: 5,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  input: {
    color: colors.primary,
    backgroundColor: colors.secondary,
    width: "100%",
    borderRadius: 10,
    padding: 5,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  text: {
    fontFamily: "MuktaBold",
    fontSize: 18,
    color: colors.blue,
  },
  error: {
    fontFamily: "MuktaBold",
    fontSize: 14,
    marginBottom: 10,
    color: colors.red,
  },
});
