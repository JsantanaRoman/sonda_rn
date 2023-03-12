import { Platform, StyleSheet } from "react-native";
import { Colors, Spacing } from "_styles";

const styles = StyleSheet.create({
  heading: {
    backgroundColor: Colors.BLACK,
    height: Platform.OS === "ios" ? 114 : 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: Spacing.SCALE_16,
  },
  headingRight: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 41,
  },
  headerIcons: {
    height: 22,
    width: 22,
  },
  headerLogo: {
    height: 41,
    width: 27,
    paddingBottom: Spacing.SCALE_16,
  },
  container: {
    backgroundColor: Colors.BLACK,
    color: Colors.PRIMARY,
    padding: Spacing.SCALE_16,
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
