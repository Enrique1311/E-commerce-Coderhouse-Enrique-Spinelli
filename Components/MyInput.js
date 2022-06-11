import { StyleSheet, Text, View, TextInput } from "react-native";
import { colors } from "../Styles/colors";

const MyInput = ({ label, password = false, onChange, value }) => {
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
    </View>
  );
};

export default MyInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "flex-start",
    marginVertical: 5,
  },
  input: {
    color: colors.primary,
    backgroundColor: colors.secondary,
    width: "100%",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5,
    fontSize: 18,
  },
  text: {
    fontFamily: "MuktaBold",
    fontSize: 14,
    marginBottom: 5,
    color: colors.blue,
  },
  error: {
    fontFamily: "MuktaBold",
    fontSize: 12,
    marginBottom: 10,
    color: colors.white,
  },
});
