import MyButton from "../Components/MyButton";
import { colors } from "../Styles/colors";
import { Ionicons } from "@expo/vector-icons";

const GoBackButton = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <MyButton
      onPress={() => handleBack()}
      addButtonStyles={{
        backgroundColor: colors.blue,
        borderWidth: 2,
        padding: 5,
        paddingHorizontal: 10,
      }}
    >
      <Ionicons name="arrow-back" size={20} color={colors.light} />
    </MyButton>
  );
};

export default GoBackButton;
