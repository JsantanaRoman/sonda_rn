import { StyleSheet } from "react-native";
import { Colors, Spacing } from "_styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BLACK,
    color: Colors.PRIMARY,
    paddingHorizontal: Spacing.SCALE_16,
  },
  playButtonContainer: {
    borderRadius: 50,
    height: 57,
    width: 57,
    backgroundColor: "rgba(97, 97, 97, 0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 42,
    right: 16,
    zIndex: 2,
  },
  playButton: {
    height: 17,
    width: 17,
  },
});

export default styles;
