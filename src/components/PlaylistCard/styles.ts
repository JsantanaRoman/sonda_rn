import { StyleSheet } from "react-native";
import { Colors, Spacing } from "_styles";
import { FONT_FAMILY_BOLD, FONT_WEIGHT_BOLD } from "../../styles/typography";

const styles = StyleSheet.create({
  playlistCard: {
    backgroundColor: Colors.PRIMARY,
    height: 255,
    width: 163,
    borderRadius: 170,
    marginBottom: Spacing.SCALE_16,
    marginHorizontal: Spacing.SCALE_16,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: Spacing.SCALE_32,
  },
  playlistCardText: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 20,
    fontWeight: FONT_WEIGHT_BOLD,
    lineHeight: 23,
    letterSpacing: -0.02,
    textAlign: "center",
    color: Colors.WHITE,
    width: 103,
  },
});

export default styles;
