import { StyleSheet } from "react-native";
import { Colors, Spacing } from "_styles";
import { FONT_FAMILY_BOLD, FONT_FAMILY_REGULAR } from "../../styles/typography";

const styles = StyleSheet.create({
  planCard: {
    height: 122,
    width: 174,
    borderRadius: 16,
    margin: 3,
    backgroundColor: Colors.BLACK,
    padding: Spacing.SCALE_12,
  },
  planCardPrice: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 32,
    lineHeight: 36,
    letterSpacing: -2,
    color: Colors.WHITE,
    paddingBottom: Spacing.SCALE_12,
  },
  planCardTerm: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 18,
    lineHeight: 16,
    letterSpacing: -2,
    color: Colors.WHITE,
    paddingBottom: 4,
  },
  planCardName: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 13,
    lineHeight: 14,
    letterSpacing: -2,
    color: "#A7A7A7",
  },
});

export default styles;
