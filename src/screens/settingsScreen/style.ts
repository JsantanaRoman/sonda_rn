import { StyleSheet } from "react-native";
import { Colors, Spacing } from "_styles";
import { FONT_FAMILY_REGULAR } from "../../styles/typography";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
    color: Colors.PRIMARY,
    justifyContent: "flex-start",
  },
  headingContainer: {
    paddingHorizontal: Spacing.SCALE_24,
    padingVertical: Spacing.SCALE_32,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 108,
  },
  heading: {
    fontSize: 40,
    fontFamily: FONT_FAMILY_REGULAR,
    letterSpacing: -2,
    lineHeight: 45.6,
    color: Colors.WHITE,
  },
  closeIcon: {
    height: 18,
    width: 18,
  },
  contentContainer: {
    paddingHorizontal: Spacing.SCALE_24,
    display: "flex",
  },
});

export default styles;
