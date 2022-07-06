import { Modal, StyleSheet, View } from "react-native";
import { colors } from "../Styles/colors";

const MyModal = ({
  modalVisibility = { modalVisibility },
  setModalVisibility = { setModalVisibility },
  children,
  onPress = { onPress },
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisibility}
      onRequestClose={() => {
        setModalVisibility(!modalVisibility);
      }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>{children}</View>
      </View>
    </Modal>
  );
};

export default MyModal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: colors.backModal,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "85%",
    backgroundColor: colors.white,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    padding: 60,
  },
  buttonContainer: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  modalButton: {
    backgroundColor: colors.white,
    borderColor: colors.blue,
    borderRadius: 10,
    padding: 0,
    margin: 0,
  },
});
